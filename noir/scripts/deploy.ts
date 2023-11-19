import { writeFileSync } from 'fs';
import hre from 'hardhat';
import { MerkleTree } from '../utils/merkleTree';
import merkle from '../utils/merkle.json'; // merkle
import { Fr } from '@aztec/bb.js';
import { PublicClient, WalletClient, pad, fromHex, hashMessage, http, recoverPublicKey, toHex } from 'viem';


async function main() {
  const publicClient = await hre.viem.getPublicClient();

  // deploy UltraVerifier
  const verifier = await hre.viem.deployContract('UltraVerifier');
  console.log(`Verifier deployed to ${verifier.address}`);

  // Setup merkle tree
  const merkleTree = new MerkleTree(parseInt(merkle.depth));
  await merkleTree.initialize(merkle.addresses.map(addr => Fr.fromString(addr)));
  const merkleTreeRoot = merkleTree.root().toString();
  console.log(merkleTreeRoot);
  

  const messageToHash: `0x${string}` = "0xabfd76608112cc843dca3a31931f3974da5f9f5d32833e7817bc7e5c50c7821e"
  const hashedMessage: `0x${string}` = hashMessage(messageToHash, 'hex');

  const CredentialNft = await hre.viem.deployContract('CredentialNft' as never, [
    merkleTreeRoot,
    hashedMessage,
    verifier.address,
  ])


  // Create a config object
  const config = {
    chainId: publicClient.chain.id,
    verifier: verifier.address,
    credentialNft: CredentialNft.address
  };

  // Print the config
  console.log('Verifier deployed at', config);
  writeFileSync('utils/addresses.json', JSON.stringify(config), { flag: 'w' });
  process.exit();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
