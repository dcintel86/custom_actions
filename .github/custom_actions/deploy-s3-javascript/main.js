const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    core.notice('Hello from my custom JavaScript Action')
    // 1) Get some input values
    const bucket = core.getInput('bucket');
    const bucketRegion = core.getInput('bucket-region');
    const distFolder = core.getInput('dist-folder');

    // 2) Upload fukes
    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    core.notice('Hellow from my custom Javascript Action');
}
run();