#!/usr/bin/env node
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/cli.ts
var cli_exports = {};
__export(cli_exports, {
  main: () => main
});
module.exports = __toCommonJS(cli_exports);
var import_marked = require("marked");
var import_marked_terminal = require("marked-terminal");
var import_zod2 = require("zod");

// lib/array-fns.ts
function compact(array) {
  return array.filter(Boolean);
}
function toSentence(list, joiner = "and") {
  switch (list.length) {
    case 0:
      return "";
    case 1:
      return list[0];
    case 2:
      return list.join(` ${joiner} `);
    default:
      return `${list.slice(0, -1).join(", ")}, ${joiner} ${list[list.length - 1]}`;
  }
}

// lib/string-fns.ts
function pluralize(count, singular, plural) {
  return `${count} ${count === 1 ? singular : plural}`;
}

// lib/date-fns.ts
function timeDifferenceInWords(date1, date2 = /* @__PURE__ */ new Date()) {
  const yearsDifference = date2.getFullYear() - date1.getFullYear();
  const monthsDifference = date2.getMonth() - date1.getMonth() + yearsDifference * 12;
  if (monthsDifference < 7) {
    return "a few months";
  } else if (monthsDifference < 12) {
    return "almost a year";
  }
  const fullYears = Math.floor(monthsDifference / 12);
  const remainingMonths = monthsDifference % 12;
  if (remainingMonths === 0) {
    return `just about ${pluralize(fullYears, "year", "years")}`;
  }
  if (remainingMonths <= 6) {
    return `just over ${pluralize(fullYears, "year", "years")}`;
  }
  return `almost ${pluralize(fullYears + 1, "year", "years")}`;
}

// lib/schemas.ts
var import_zod = require("zod");
var githubUserSchema = import_zod.z.object({
  login: import_zod.z.string(),
  id: import_zod.z.number(),
  node_id: import_zod.z.string(),
  avatar_url: import_zod.z.string().url(),
  gravatar_id: import_zod.z.nullable(import_zod.z.string()),
  url: import_zod.z.string().url(),
  html_url: import_zod.z.string().url(),
  followers_url: import_zod.z.string().url(),
  following_url: import_zod.z.string(),
  gists_url: import_zod.z.string(),
  starred_url: import_zod.z.string(),
  subscriptions_url: import_zod.z.string().url(),
  organizations_url: import_zod.z.string().url(),
  repos_url: import_zod.z.string().url(),
  events_url: import_zod.z.string(),
  received_events_url: import_zod.z.string().url(),
  type: import_zod.z.string(),
  site_admin: import_zod.z.boolean(),
  name: import_zod.z.nullable(import_zod.z.string()),
  company: import_zod.z.nullable(import_zod.z.string()),
  blog: import_zod.z.nullable(import_zod.z.string()),
  location: import_zod.z.nullable(import_zod.z.string()),
  email: import_zod.z.nullable(import_zod.z.string().email()).optional(),
  hireable: import_zod.z.nullable(import_zod.z.boolean()),
  bio: import_zod.z.nullable(import_zod.z.string()),
  twitter_username: import_zod.z.nullable(import_zod.z.string()),
  public_repos: import_zod.z.number(),
  public_gists: import_zod.z.number(),
  followers: import_zod.z.number(),
  following: import_zod.z.number(),
  created_at: import_zod.z.coerce.date(),
  updated_at: import_zod.z.coerce.date(),
  private_gists: import_zod.z.number().optional(),
  total_private_repos: import_zod.z.number().optional(),
  owned_private_repos: import_zod.z.number().optional(),
  disk_usage: import_zod.z.number().optional(),
  collaborators: import_zod.z.number().optional()
});

// lib/hello.ts
async function getGithubProfile(username) {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28"
    }
  });
  return githubUserSchema.parse(await res.json());
}
async function hello(username) {
  const profile = await getGithubProfile(username);
  return {
    profile
  };
}

// lib/cli.ts
import_marked.marked.use((0, import_marked_terminal.markedTerminal)());
function printUsage() {
  console.log("Usage:");
  console.log("  npx hello <github-username>");
  console.log("");
  console.log("Example:");
  console.log("  npx hello venables");
}
function printProfile(profile) {
  const markdown = [];
  markdown.push(`# \u{1F44B} Hello, I'm ${profile.name ?? profile.login}`);
  if (profile.bio) {
    markdown.push(`
\`${profile.bio}\`
`);
  }
  const companyLink = profile.company?.startsWith("@") ? `[${profile.company}](https://github.com/${profile.company.replace(
    "@",
    ""
  )})` : profile.company;
  const info = toSentence(
    compact([
      profile.location && `I live in **${profile.location}**`,
      companyLink && `I work at **${companyLink}**`
    ]),
    "where"
  );
  if (info.length) {
    markdown.push(`${info}.`);
  }
  const stats = compact([
    profile.public_repos > 0 && `[${pluralize(
      profile.public_repos,
      "repo",
      "repos"
    )}](https://github.com/${profile.login}?tab=repositories)`,
    profile.public_gists > 0 && `[${pluralize(
      profile.public_gists,
      "gist",
      "gists"
    )}](https://gist.github.com/${profile.login})`,
    profile.followers > 0 && `[${pluralize(
      profile.followers,
      "follower",
      "followers"
    )}](https://github.com/${profile.login}?tab=followers)`,
    profile.following > 0 && `I'm following [${pluralize(
      profile.following,
      "account",
      "accounts"
    )}](https://github.com/${profile.login}?tab=following)`
  ]);
  const githubStats = toSentence(
    compact([
      `My Github username is **[@${profile.login}](${profile.html_url})**`,
      `I have ${toSentence(stats)}.`
    ]),
    "where"
  );
  markdown.push(githubStats);
  markdown.push(
    `I've been on Github for **${timeDifferenceInWords(
      profile.created_at
    )}** (since ${profile.created_at.toLocaleString("default", {
      month: "long",
      year: "numeric"
    })}).`
  );
  const contact = compact([
    profile.blog && `on [my website](${profile.blog})`,
    profile.twitter_username && `as [@${profile.twitter_username}](https://x.com/${profile.twitter_username}) on Twitter/X`,
    profile.email && `via email at [${profile.email}](${profile.email})`
  ]);
  if (contact.length) {
    markdown.push(`You can find me ${toSentence(contact, "or")}.`);
  }
  if (profile.hireable) {
    markdown.push(`
I am also **available for hire!**`);
  }
  console.log("");
  console.log(import_marked.marked.parse(markdown.join("\n")).trim());
}
async function main() {
  const args = process.argv.slice(2);
  const name = args[0];
  if (!name || name === "-h" || name === "--help") {
    printUsage();
    return;
  }
  try {
    const { profile } = await hello(name.replace("@", ""));
    printProfile(profile);
  } catch (e) {
    console.error(`Could not find user "${name}"`);
  }
}
main().then(() => {
  process.exit(0);
}).catch((e) => {
  if (e instanceof import_zod2.ZodError) {
    console.error(e.issues);
  } else {
    console.error(e);
  }
  process.exit(1);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
