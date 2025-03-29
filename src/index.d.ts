import { JwtPayload } from "jwt-decode"

declare global{
    namespace Express{
        interface Request{
            userData: JwtPayload
        }
    }
}