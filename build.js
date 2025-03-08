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
  borderColor: "green",
};

// Text + chalk definitions
const data = {
  name: chalk.white("Atila Fassina"),
  handle: chalk.white("atilafassina"),
  shorthandle: chalk.white("atila"),
  work: chalk.white("Fullstack Engineer") + chalk.green(" at Neon"),
  twitter: chalk.cyan("x.com/") + chalk.cyan("atilafassina"),
  bsky: chalk.cyan("bsky.app/profile/") + chalk.cyan("atila.io"),
  gde: chalk.cyan("g.dev/") + chalk.cyan("atilaf"),
  npm: chalk.cyan("npmjs.com/") + chalk.cyan("~atilaz"),
  github: chalk.cyan("github.com/") + chalk.cyan("atilafassina"),
  linkedin: chalk.cyan("linkedin.com/in/") + chalk.cyan("atilafassina"),
  web: chalk.cyan("atila.io"),
  npx: chalk.green("npx") + " " + chalk.white("atila"),
  labelWork: chalk.white.bold("Work:"),
  labelBlueSky: chalk.white.bold("BlueSky:"),
  labelTwitter: chalk.white.bold("X / Twitter:"),
  labelGde: chalk.white.bold("GDE Profile:"),
  labelnpm: chalk.white.bold(" npm:"),
  labelGitHub: chalk.white.bold("GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelWeb: chalk.white.bold("Web:"),
  labelCard: chalk.white.bold("Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`; //`${data.name} / ${data.handle} / ${data.shorthandle}`;
const working = `${data.labelWork}  ${data.work}`;
const bskying = `${data.labelBlueSky}  ${data.bsky}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const gdeing = `${data.labelGde}  ${data.gde}`;
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
  newline + // data.labelBlusky + data.bsky
  bskying +
  newline + // data.labelGitHub + data.github
  githubing +
  newline + // data.labelLinkedIn + data.linkedin
  linkedining +
  newline +
  gdeing +
  newline + // data.labelTwitter + data.twitter
  newline +
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output.txt"),
  chalk.green(boxen(output, options))
);
