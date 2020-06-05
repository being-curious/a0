import * as path from "https://deno.land/std/path/mod.ts";
import { readFileStr } from "https://deno.land/std/fs/read_file_str.ts";
import { writeFileStr } from "https://deno.land/std/fs/write_file_str.ts";
import { exists } from "https://deno.land/std/fs/exists.ts";

import { clipboard } from "./clipboard.ts";

const homeDir: string = (Deno.env.get("HOME")) || "";
const jsonFile = path.join(homeDir, "./store.json");

type AliasText = {
  alias: string;
  text: string;
};

/** Read/Write text for an alias and copy it to clipboard */
export async function a0(alias: string, text: string) {
  let result: string = "";

  if (!await exists(jsonFile)) {
    await writeFileStr(jsonFile, "[]");
    // make sure file have been create.
    await Deno.stat(jsonFile);
  }

  if (alias) {
    const strFile = await readFileStr(jsonFile);
    let store: AliasText[] = JSON.parse(strFile);
    let matchedRecord = store.find((record) => record.alias === alias);
    if (text) {
      if (matchedRecord) {
        store.forEach((record) => {
          if (record.alias === alias) {
            record.text = text;
          }
        });
      } else {
        store.push({ alias: alias, text: text });
      }
      result = text;
      await writeFileStr(jsonFile, JSON.stringify(store));
    } else {
      if (matchedRecord) {
        result = matchedRecord.text;
      }
    }
    await clipboard.writeText(result);
  }
  return result;
}
