import { env } from "../../env/env"

export function getWebserviceURL(path: string): string {
    return `${env.webserviceURL}${path}`
}