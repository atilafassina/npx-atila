#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const output = fs.readFileSync(path.join(__dirname, "output.txt"), "utf8");
console.log(output);
