import { a0 } from "./mod.ts";

async function cli() {
  if (Deno.args.length) {
    const alias = Deno.args[0];
    const text = Deno.args.slice(1).join(" ");
    const result = await a0(alias, text);
    console.log("alias: %s", alias);
    console.log("text: %s", result);
  }
}

cli();
