// Generated by Wrangler by running `wrangler types`

interface Env {
    OAUTH_KV: KVNamespace
    AUTH0_DOMAIN: string
    AUTH0_AUDIENCE: string
    AUTH0_SCOPE: string
    AUTH0_CLIENT_ID: string
    AUTH0_CLIENT_SECRET: string
    MCP_OBJECT: DurableObjectNamespace<import('./src/index').MyMCP>
    AI: Ai
}
