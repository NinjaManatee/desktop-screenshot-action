import screenshot from "screenshot-desktop";
import * as core from "@actions/core";
import { DefaultArtifactClient } from '@actions/artifact'

const fileName = core.getInput("file-name");

const artifactClient = new DefaultArtifactClient();

async function uploadScreenshot() {
	await screenshot({ filename: fileName });
	await artifactClient.uploadArtifact(fileName, [fileName], ".");
}

uploadScreenshot().catch((error) => {
	core.setFailed(error.message);
});