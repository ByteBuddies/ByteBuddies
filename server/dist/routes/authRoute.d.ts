import * as T from '../type';
declare const router: import("express-serve-static-core").Router;
declare module 'express-session' {
    interface SessionData {
        user?: T.user;
        authenticated?: boolean;
    }
}
export default router;
