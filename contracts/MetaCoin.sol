pragma solidity ^0.4.18;

contract MetaCoin {
	mapping (address => uint) balances;

	constructor() public {
		balances[0x0]=10000;
		balances[msg.sender]=10000;
	}

	function sendCoin(address receiver, uint amount) public returns(bool sufficient) {
		if (balances[msg.sender]<amount)
		{
			return false;
		}
		else{
			balances[msg.sender]=balances[msg.sender]-amount;
			balances[receiver]=balances[receiver]+amount;
			return true;
		}
	}

	function getBalance(address addr) public view returns(uint) {
		return balances[addr];
	}
	
	function printMeCoins(uint amount) public {
		balances[msg.sender]=balances[msg.sender]+amount;
	}
}
