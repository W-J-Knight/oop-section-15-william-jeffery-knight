class Wallet {
    
      #balance = 0;
      #transactions = [];
   
  
    deposit(amount) {
      this.#processDeposit(amount);
      this.#balance += amount;
    }
  
    withdraw(amount) {
      return amount > this.#balance
        ? console.log("Not enough funds")
        : (this.#processWithDraw(amount),  this.#balance -= amount)
    }
  
    #processDeposit(amount) {
      console.log(`Depoditing ${amount}`);
  
      this.transactions.push({
        type: "deposit",
        amount,
      });
    }
  
    #processWithDraw(amount) {
      console.log(`WithDrawing ${amount}`);
  
      this.transactions.push({
        type: "withdraw",
        amount,
      });
    }
  
    get balance() {
      return this.#balance;
    }
  
    get transactions() {
      return this.#transactions;
    }
  }
  
  const wallet = new Wallet();
  wallet.deposit(300);
  wallet.withdraw(40);
  console.log(wallet.balance);
  
  console.log(wallet.transactions);
//   console.log(wallet.#transactions)
//   console.log(wallet.#balance)