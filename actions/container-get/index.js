const core = require('@actions/core');
const github = require('@actions/github');
const { getOctokit } = require('@actions/github');

async function run() {

    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    const token = process.env.PACKAGE_TOKEN;

    const octokit = getOctokit(token);
    let t = await octokit.rest.packages.listPackagesForOrganization({
      package_type: 'container',
      org: owner,
    });



    core.info(`${JSON.stringify(t.data, null, 2)}`);
}

run();