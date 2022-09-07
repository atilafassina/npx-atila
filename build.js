"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "magenta",
};

// Text + chalk definitions
const data = {
  name: chalk.white("      Atila Fassina"),
  handle: chalk.white("atilafassina"),
  shorthandle: chalk.white("atila"),
  work: chalk.white("Senior DX Engineer") + chalk.magenta(" at Xata"),
  twitter: chalk.cyan("twitter.com/") + chalk.cyan("atilafassina"),
  npm: chalk.cyan("npmjs.com/") + chalk.cyan("~atilaz"),
  github: chalk.cyan("github.com/") + chalk.cyan("atilafassina"),
  linkedin: chalk.cyan("linkedin.com/in/") + chalk.cyan("atilafassina"),
  web: chalk.cyan("atila.io"),
  npx: chalk.red("npx") + " " + chalk.white("atila"),
  labelWork: chalk.white.bold("    Work:"),
  labelTwitter: chalk.white.bold(" Twitter:"),
  labelnpm: chalk.white.bold("     npm:"),
  labelGitHub: chalk.white.bold("  GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelWeb: chalk.white.bold("     Web:"),
  labelCard: chalk.white.bold("    Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`; //`${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
// const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  webing +
  newline + // data.labelWeb + data.web
  working +
  newline +
  newline + // data.labelWork + data.work
  twittering +
  newline + // data.labelTwitter + data.twitter
  // npming +
  // newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  newline +
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.magenta(boxen(output, options))
);
