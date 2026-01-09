import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import { signToken } from "../middleware/auth";
import { AuthedRequest } from "../types";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const authedReq = req as AuthedRequest;

    const { loginId, password, role } = authedReq.body as {
      loginId: string;
      password: string;
      role: string;
    };

    if (!loginId || !password || !role) {
      res.status(400).json({ message: "Missing fields" });
      return;
    }

    const user = await authedReq.prisma.user.findUnique({
      where: { loginId },
    });

    if (!user || user.role !== role.toUpperCase()) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const token = signToken({ id: user.id, role: user.role });

    res.json({ token, role: user.role });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
