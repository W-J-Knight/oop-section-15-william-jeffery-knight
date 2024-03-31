class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  deposit(amount) {
    this._processDeposit(amount);
    this._balance += amount;
  }

  withdraw(amount) {
    return amount > this._balance
      ? console.log("Not enough funds")
      : (this._processWithDraw(amount),  this._balance -= amount)
  }

  _processDeposit(amount) {
    console.log(`Depoditing ${amount}`);

    this.transactions.push({
      type: "deposit",
      amount,
    });
  }

  _processWithDraw(amount) {
    console.log(`WithDrawing ${amount}`);

    this.transactions.push({
      type: "withdraw",
      amount,
    });
  }

  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }
}

const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(540);
console.log(wallet.balance);

console.log(wallet.transactions);
console.log(wallet._transactions)
