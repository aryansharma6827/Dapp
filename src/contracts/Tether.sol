// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Tether{
    string public name='Mock Tether Token';
    string public symbol='USDT';
    uint totalSupply=1000000000000000000000000; // 1 million
    uint public decimals =18;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint _value

    );
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint _value
    );

    mapping(address=>uint) public balanceOf;
    mapping (address=>mapping(address=>uint)) public allowance;


    constructor()public{
        balanceOf[msg.sender]=totalSupply;
    }
    function transfer(address _to ,uint _value) public returns (bool success){
        require(balanceOf[msg.sender]>= _value);
        balanceOf[msg.sender]=balanceOf[msg.sender] - _value;
        balanceOf[_to] = balanceOf[_to] + _value;
        emit Transfer(msg.sender, _to, _value);
        return true;
    }

    function approve (address _spender, uint256 _value) public returns (bool success){
        allowance[msg.sender][_spender] = _value;
        emit Approval(msg.sender,_spender, _value);
        return true;
    }
    function transferFrom(address _from,address _to ,uint _value) public returns(bool sucess){
        require(balanceOf[_from]>= _value);
        require(allowance[_from][msg.sender]>= _value);
        balanceOf[_from]=balanceOf[_from] - _value;
        balanceOf[_to] = balanceOf[_to] + _value;
        allowance[msg.sender][_from]-=_value;
        emit Transfer(_from, _to, _value);
        return true;
    }
}