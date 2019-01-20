// As from FAQ: https://github.com/flowtype/flow-typed/wiki/FAQs
// If you're not planing on versioning your definitions, the preferred way is to
// copy source files to `*.js.flow` format, and include them with the release.

import { resolve } from "path";
import { copy } from "fs-extra";
import glob from "glob";

const getLocalPath = string =>
  string
    .split("/")
    .slice(-3)
    .join("/");

async function copyFile(file) {
  const srcPath = resolve(__dirname, "../src/components");
  const destPath = resolve(__dirname, "../build");
  const filePath = `${file}.flow`.replace(srcPath, destPath);

  await copy(file, filePath);

  console.log(`• Copied ${getLocalPath(file)} -> ${getLocalPath(filePath)}`);
}

async function run() {
  glob(resolve(__dirname, "../src/components/**/*.js"), (err, files) => {
    if (err) {
      console.error(err);
    } else {
      files.forEach(file => copyFile(file));
    }
  });
}

run();
