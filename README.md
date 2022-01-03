# Övningsuppgift - React Bankomat
<br>


- Skapa en bankomat! 🏧

- Skapa en ATM-komponent som du kan dölja/visa med ett knapptryck (med hjälp av state) i App.js.

- ATM-komponenten ska ha knappar för att öka beloppet pengar användaren vill ta ut. Följande knappar ska finnas: +100, + 500, +1000. 
Användaren ska kunna välja mellan SEK eller EURO.

- Du ska alltså ha två state i ATM-komponenten. Ett för totalbelopp och ett för valuta.

- Skapa en knapp där det står “Withdraw money”.

- När du klickar på Withdraw money-knappen, skriv ut “Withdrawing money..”. Om amount är 0 när knappen klickas på, skriv ut “Please select amount”.

- Om amount inte är 0, skriv ut “Successfully withdrew (amount + currency) ! ”, och sätt amount-värdet till 0.
<br>


**OM ni blir klara, eller redan från början känner att ni vill ha något mer utmanande:**
- Skapa en deposit-knapp för att göra det möjligt att sätta in pengar i banken.
- Gör så att man kan ta ut pengar från kontot, men inte mer pengar än vad som finns i kontot. Dvs man behöver lägga in mer pengar, för att kunna ta ut mer.
- **EXTRA (Svår)**: Lägg till stöd för valutaomväxling. 10 SEK = 1 EURO vid insättning och uttag.
<br>


EXTRA - Läs på om useEffect för hur du ska göra följande:
- När ATM-komponenten renderas i DOM:en (mounting), skriv ut “Booting up ATM...ATM is ready! i konsolen”. (useEffect)
- När ATM-komponenten tas bort från DOM:en (unmounting), skriv ut ”ATM shutting down…”. (useEffect)
<br>


## GLHF! 

/Brandon
<br><br><br>






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
