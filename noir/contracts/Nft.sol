// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

error URINotProvided(uint256 tokenId);

contract BookNft is ERC721URIStorage {
    uint256 private s_tokenCounter;

    event NftMinted(uint256 indexed tokenId);

    modifier onlyOwner(uint256 tokenId) {
        require(msg.sender == ownerOf(tokenId), "You are not the owner of this NFT");
        _;
    }

    constructor() ERC721("BookNft", "BNFT") {
        s_tokenCounter = 0;
    }

    function mintNft(string memory tokenURI) public {
        if (bytes(tokenURI).length == 0) {
            revert URINotProvided(s_tokenCounter);
        }
        _safeMint(msg.sender, s_tokenCounter);
        _setTokenURI(s_tokenCounter, tokenURI);
        emit NftMinted(s_tokenCounter);
        s_tokenCounter = s_tokenCounter + 1;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "data:application/json;base64,";
    }

    function modifyTokenURI(
        uint256 tokenId,
        string memory tokenURI
    ) public onlyOwner(tokenId) returns (bool) {
        _setTokenURI(tokenId, tokenURI);
        return true;
    }

    function getTokenCounter() public view returns (uint256) {
        return s_tokenCounter;
    }
}