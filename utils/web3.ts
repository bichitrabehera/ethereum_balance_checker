import { Web3 } from "web3";

const web3 = new Web3(
  `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
);

export default web3;
