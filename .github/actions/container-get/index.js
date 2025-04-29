const core = require('@actions/core');
const github = require('@actions/github');
const { getOctokit } = require('@actions/github');

async function run() {

    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    const token = process.env.PACKAGE_TOKEN;


}

run();