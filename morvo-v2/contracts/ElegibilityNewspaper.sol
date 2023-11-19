// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ElegibilityNewspaper {
    mapping(address => bool) public eligibleAddresses;

    // Add an address to the list of eligible addresses
    function addEligibleAddress(address _address) public {
        eligibleAddresses[_address] = true;
    }

    // Check if an address is eligible for the airdrop
    function isEligible(address _address) public view returns (bool) {
        return eligibleAddresses[_address];
    }
}
