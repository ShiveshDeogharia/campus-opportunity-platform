import { Router, Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import { signToken } from "../middleware/auth";
import { AuthedRequest } from "../types";

const router = Router();

router.post("/login", (req: AuthedRequest, res: Response, next: NextFunction) => {
  (async () => {
    const { loginId, password, role } = req.body as {
      loginId: string;
      password: string;
      role: string;
    };

    if (!loginId || !password || !role) {
      res.status(400).json({ message: "Missing fields" });
      return;
    }

    const user = await req.prisma.user.findUnique({
      where: { loginId },
    });

    if (!user || user.role !== role) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const token = signToken({ id: user.id, role: user.role });

    res.json({
      token,
      role: user.role,
    });
  })().catch(next);
});

export default router;
