// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import './plonk_vk.sol';
import 'hardhat/console.sol';
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract CredentialNft is ERC721URIStorage {
    bytes32 public signThis;
    bytes32 public merkleRoot;
    UltraVerifier public verifier;
    uint256 private s_tokenCounter;

    mapping(bytes32 => bool) public nullifiers; // Keep track of claimed Merkle roots

    event NftMinted(uint256 indexed tokenId);

    constructor(
        bytes32 _merkleRoot,
        bytes32 _signThis,
        UltraVerifier _verifier
    ) ERC721("Credential", "CRED") {
        merkleRoot = _merkleRoot;
        signThis = _signThis;
        verifier = _verifier;
        s_tokenCounter = 0;
    }

    function preparePublicInputs(
        bytes32[] memory _publicInputs,
        bytes32 publicInput,
        uint256 offset
    ) private pure returns (bytes32[] memory) {
        for (uint256 i = 0; i < 32; i++) {
            _publicInputs[i + offset] = (publicInput >> ((31 - i) * 8)) & bytes32(uint256(0xFF));
        } // TODO not cool, padding 31 bytes with 0s
        return _publicInputs;
    }

    function claim() external {
        bytes32[] memory _publicInputs = new bytes32[](2);
       // _publicInputs[0] = nullifier;
        _publicInputs[1] = bytes32(uint256(uint160(msg.sender)));

        //verifier.verify(proof, _publicInputs); (not working)

        // mint tokens
        _safeMint(msg.sender, s_tokenCounter);
       // _setTokenURI(s_tokenCounter, tokenURI);
        emit NftMinted(s_tokenCounter);
       // nullifiers[nullifier] = true;
        s_tokenCounter = s_tokenCounter + 1;
    }

    function getRoot() public view returns (bytes32) {
        return merkleRoot;
    }

    function getMessage() public view returns (bytes32) {
        return signThis;
    }
}
