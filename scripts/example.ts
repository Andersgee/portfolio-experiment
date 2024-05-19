import "dotenv/config";
import "#src/utils/validate-process-env.mjs";

//pnpm tsx scripts/example.ts

console.log(process.env.NEXT_PUBLIC_ABSURL);
