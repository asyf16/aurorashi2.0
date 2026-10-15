# Aurora's Portfolio
<img width="1470" alt="image" src="https://github.com/user-attachments/assets/62f6b002-1981-4d93-b7bf-dee041d2c705" />

Visit: https://aurorashi.com/

A slice of my life on the internet. Created using Next.js, React, Rive, Aceternity, and Procreate.

## Cloudflare Workers

Run `npm ci`, then `npm run preview` to build and preview in the Workers runtime.
Run `npm run deploy` to build with OpenNext and deploy to Cloudflare.

The Worker name and `WORKER_SELF_REFERENCE` service in `wrangler.jsonc` must
both be `aurorashi-website`, matching the Worker configured in Cloudflare Builds.
The existing Cloudflare build command (`npm run build`) and deploy command
(`npx wrangler deploy`) also work: `npm run build` creates the OpenNext bundle
before Wrangler hands deployment to OpenNext. `npm run build:next` builds only
Next.js and is used internally by OpenNext to avoid recursion.
