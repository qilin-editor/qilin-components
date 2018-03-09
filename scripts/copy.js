// https://github.com/mui-org/material-ui/blob/v1-beta/scripts/copy-files.js

import { basename, resolve } from "path";
import { copy, writeFile } from "fs-extra";

const getLocalPath = string =>
  string
    .split("/")
    .slice(-3)
    .join("/");

async function copyFile(file) {
  const fileName = basename(file);
  const filePath = resolve(__dirname, "../build/", fileName);

  await copy(file, filePath);

  console.log(`• Copied  ${file} -> ${getLocalPath(filePath)}`);
}

async function createPackageFile() {
  const oldPackagePath = resolve(__dirname, "../package.json");
  const oldPackageData = require(oldPackagePath);

  delete oldPackageData.private;
  delete oldPackageData.scripts;
  delete oldPackageData.devDependencies;

  const newPackagePath = resolve(__dirname, "../build/package.json");
  const newPackageData = Object.assign({}, oldPackageData, {
    main: "./index.js"
  });

  await writeFile(newPackagePath, JSON.stringify(newPackageData), "utf8");

  console.log(`• Created package.json -> ${getLocalPath(newPackagePath)}`);
}

async function run() {
  await ["README.md", "LICENSE"].map(file => copyFile(file));
  await createPackageFile();
}

run();
