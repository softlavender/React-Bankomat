import { useState } from "react"

const Bankomat = _ => {
  const [balance, setBalance] = useState(330)
  const [amount, setAmount] = useState(0)
  const [currency, setCurrency] = useState('SEK')

  const changeAmount = val => setAmount(amount + val)
  
  const changeCurrency = e => e.target.value === 'SEK' ? (setBalance(balance*10), setAmount(amount*10), setCurrency('SEK')) : (setBalance(balance/100*10), setAmount(amount/100*10), setCurrency('EURO'))
  
  const withdrawingMoney = _ => {
    if (balance <= 0 || balance < amount) {
      console.log('You need more balance to withdraw', amount, currency)
      setAmount(amount - amount)
      return
    } else if (amount <= 0) {
      console.log('Please Enter or Select an amount to withdraw')
      return
    }
    
    console.log('Withdrawing money..')
    console.log(`Successfully withdrew ${amount} ${currency}`)
    setBalance(balance - amount)
    setAmount(amount - amount)
  }

  const depositingMoney = _ => {
    if (amount <= 0) {
      console.log('Please enter amount to deposit');
      setAmount(amount - amount)
      return
    }
    console.log('Successfully deposited', amount, currency);
    setBalance(balance + amount)
    setAmount(amount - amount)
  }

  return (
    <section id="bankomat">
      <div id="balance-status">
        <h1>React - ATM</h1>
        <span className="money-counters">Current balance: <b>{balance}</b> <span>{currency}</span></span>
      </div>

      <div id="withdraw-deposit">

        <form id="specific-amount" onSubmit={e => e.preventDefault(changeAmount(Number(e.target.children[1].value)))}>
          <label htmlFor="specific">Enter a specific amount</label>
          <input id="specific" type="number" name="specific-amount" placeholder="0" required="required" />
          <button>add</button>
        </form>

        <div id="amount-btns">
          <span>Select amount</span>
          <button onClick={_ => changeAmount(100)}>+100</button>
          <button onClick={_ => changeAmount(500)}>+500</button>
          <button onClick={_ => changeAmount(1000)}>+1000</button>
        </div>
        
        <div id="change-currency">
          <span>Change currency</span>
          <select name="currency" onChange={changeCurrency}>
            <option value="SEK">SEK</option>
            <option value="EURO">EURO</option>
          </select>
        </div>

        <span className="money-counters">Current amount: <b>{amount}</b> <span>{currency}</span></span>

        <div id="deposit-withdraw-btns">
          <button id="withdraw-btn" onClick={withdrawingMoney}>withdraw money</button>
          <button id="deposit-btn" onClick={depositingMoney}>deposit money</button>
        </div>
      </div>
    </section>
  )
}
export default Bankomat


// **OM ni blir klara, eller redan från början känner att ni vill ha något mer utmanande:**
// - Skapa en deposit-knapp för att göra det möjligt att sätta in pengar i banken.
// - Gör så att man kan ta ut pengar från kontot, men inte mer pengar än vad som finns i kontot. Dvs man behöver lägga in mer pengar, för att kunna ta ut mer.
// - **EXTRA (Svår)**: Lägg till stöd för valutaomväxling. 10 SEK = 1 EURO vid insättning och uttag.
// <br>