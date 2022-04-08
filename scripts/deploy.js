const { ethers } = require("hardhat")
const deploy = async() => {

    const [deployer] = await ethers.getSigners()

    console.log("Deploying contract with the account: ", deployer.address)
    const Punks = await ethers.getContractFactory("Punks")
    const deployed = await Punks.deploy()
    console.log("Punks is deployed", deployed.address)
};

deploy().then(()=> process.exit(0)).catch(error => {
    console.log(error)
    process.exit(1)
})