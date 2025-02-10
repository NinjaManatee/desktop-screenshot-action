const screenshot = require("screenshot-desktop");
const core = require("@actions/core");

const fileName = core.getInput("file-name");

async function uploadScreenshot() {
	await screenshot({ filename: fileName });
}

uploadScreenshot().catch((error) => {
	core.setFailed(error.message);
});
