import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export interface AuthenticatedRequest extends Request {
    user?: AuthUser;
}

const authMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<any> => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized: No token provided",
        });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            status: 401,
            message: "Unauthorized: Invalid token format",
        });
    }

    jwt.verify(token, process.env.SECRET_KEY!, (err, user) => {
        if (err) {
            return res.status(401).json({
                status: 401,
                message: "Unauthorized: Token verification failed",
            });
        }

        req.user = user as AuthUser;
        next();
    });
};

export default authMiddleware;
