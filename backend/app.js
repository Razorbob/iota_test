///////////////////////////////
// Environment Check
///////////////////////////////

const { SingleNodeClient, logTips } = require("@iota/iota.js");

async function run() {
  const client = new SingleNodeClient("https://api.lb-0.testnet.chrysalis2.com");

  const info = await client.info();
  console.log("Node Info");
  console.log("\tName:", info.name);
  console.log("\tVersion:", info.version);
  console.log("\tIs Healthy:", info.isHealthy);
  console.log("\tNetwork Id:", info.networkId);
  console.log("\tCoordinator Public Key:", info.coordinatorPublicKey);
  console.log("\tLatest Milestone Message Id:", info.latestMilestoneMessageId);
  console.log("\tLatest Milestone Index:", info.latestMilestoneIndex);
  console.log("\tSolid Milestone Message Id:", info.solidMilestoneMessageId);
  console.log("\tSolid Milestone Index:", info.solidMilestoneIndex);
  console.log("\tPruning Index:", info.pruningIndex);
  console.log("\tFeatures:", info.features);

  const tips = await client.tips();
  console.log("Node TIPS");
  logTips("", tips);
  console.log();
}

run()
  .then(() => console.log("Done"))
  .catch((err) => console.error(err));