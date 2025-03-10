import { authConfig } from "@/config/auth";
import { AppError } from "@/utils/AppError";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface TokenPayLoad {
  role: string;
  sub: string;
}

function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
      const authHeader = request.headers.authorization;
      
      if (!authHeader) {
        throw new AppError("")
    }

    const [, token] = authHeader.split(" ")
    const { role, sub: user_id } = verify(token, authConfig.jwt.secret) as TokenPayLoad
    
    request.user = {
      id: user_id,
      role
    }

    return next()

  } catch (error) {
    throw new AppError("invalid JWT token", 401);
  }
}


export { ensureAuthenticated };