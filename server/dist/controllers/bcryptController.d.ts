import { Request, Response, NextFunction } from "express";
declare const _default: {
    hashPassword(req: Request, res: Response, next: NextFunction): Promise<any>;
    login(req: Request, res: Response, next: NextFunction): Promise<any>;
    authenticate(req: Request, res: Response, next: NextFunction): void;
};
export default _default;
