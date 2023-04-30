// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract simpleContract {

    uint256 number ; 

    function incremnt() public 
    {
        number++;
    }

    function retrieve() public view returns(uint256)
    {
        return number;
    }
}
