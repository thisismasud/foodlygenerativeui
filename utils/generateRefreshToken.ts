import { randomBytes } from "crypto";

function generateRefreshToken(length: number = 32): string{
    return randomBytes(length).toString("hex")
}
export {generateRefreshToken}