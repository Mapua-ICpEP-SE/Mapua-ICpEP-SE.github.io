/// <reference path="../.astro/types.d.ts" />
/// <reference types="@cloudflare/workers-types" />

declare module "cloudflare:workers" {
    export const env: {
        CONTENT_BUCKET: R2Bucket;
    };
}
