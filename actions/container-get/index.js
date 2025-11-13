const core = require('@actions/core');
const github = require('@actions/github');
const { getOctokit } = require('@actions/github');

async function run() {

    const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
    const token = process.env.PACKAGE_TOKEN;

    const octokit = getOctokit(token);

    const allPackages = await octokit.paginate(
        octokit.rest.packages.listPackagesForOrganization,
        {
          org: owner,
          package_type: 'container',
          per_page: 100,
        }
      );

      const r = allPackages.filter(pkg => pkg.repository?.name === 'qubership-jaeger');
      core.info(JSON.stringify(r, null, 2));
}

run();