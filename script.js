const messageComponents = {
  dollarAmount: [10, 100, 1000, 5000],
  crypto: ['Bitcoin', 'Dogecoin', 'Ethereum', 'Binance Coin'],
  years: [1, 2, 5, 10, 23, 34],
  goods: ['an Ice Cream', 'a Lamborghini Aventador', 'a Double Cheeseburger', 'a House', 'a New Phone']
}

// Gets # from 0 -> array.length - 1
const randomSelect = arr => Math.floor(Math.random() * arr.length);

// Store the 'message' in an array
let personalMessage = [];

// Iterate over the object
for (let prop in messageComponents) {
  const ms = messageComponents;
  const index = randomSelect(ms[prop]);
    
  // Use the object's properties to customize the message being added to personalMessage
  switch (prop) {
    case 'dollarAmount':
      personalMessage.push(`You decided to invest ${ms[prop][index]}$ in something.`);
      break;
    case 'crypto':
      personalMessage.push(`You have chosen to invest in ${ms[prop][index]}.`);
      break;
    case 'years':
      personalMessage.push(`You waited ${ms[prop][index]} years.`);
      break;
    case 'goods':
      personalMessage.push(`Now you can afford to buy ${ms[prop][index]}.`);
      break;
    default:
      personalMessage.push('There is not enough info.');
  }
}

const formatMessage = () => {
  console.log('================');

  const formatted = personalMessage.join('\n');
  console.log(formatted);

  console.log('================');
}

formatMessage();



