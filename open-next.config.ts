import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig();

// OpenNext must build Next directly instead of invoking `npm run build` again.
config.buildCommand = "npm run build:next";

export default config;
