// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Migrations {

    address public owner;
    uint public last_completed_migration;
    constructor() public {
        owner=msg.sender;
    }
    modifier restricted(){
        if(msg.sender==owner)
        _;
    }
    function setCompleted(uint completed) public restricted{
        last_completed_migration=completed;
    }
    function upgrade(address new_addres) public restricted{
        Migrations upgraded =Migrations(new_addres);
        upgraded.setCompleted(last_completed_migration);
    }
}