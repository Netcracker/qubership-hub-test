const core = require('@actions/core');
const github = require('@actions/github');
const { getOctokit } = require('@actions/github');

async function run() {

    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    const token = process.env.PACKAGE_TOKEN;

    const octokit = getOctokit(token);
    const { data: { container } } = await octokit.rest.packages.getContainerRegistryPackage({
        package_type: 'container',
        package_name: process.env.IMAGE_NAME,
        owner,
        repo
    });

    core.info(`Container ID: ${container.id}`);
}

run();