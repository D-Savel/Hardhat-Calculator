//SPDX-License-Identifier: Unlicense

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Calculator {
    address private _owner;

    constructor(address owner_) {
        _owner = owner_;
    }

    function add(int256 nb1, int256 nb2) public pure returns (int256) {
        return nb1 + nb2;
    }

    function sub(int256 nb1, int256 nb2) public pure returns (int256) {
        return nb1 - nb2;
    }

    function mul(int256 nb1, int256 nb2) public pure returns (int256) {
        return nb1 * nb2;
    }

    function div(int256 nb1, int256 nb2) public pure returns (int256) {
        require(nb2 != 0, 'pureCalculator: Can not divide by 0');
        return nb1 / nb2;
    }

    function modulo(int256 nb1, int256 nb2) public pure returns (int256) {
        return nb1 % nb2;
    }

    function owner() public view returns (address) {
        return _owner;
    }
}
