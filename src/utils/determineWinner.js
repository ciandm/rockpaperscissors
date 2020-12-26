export function determineWinner(userChoice, houseChoice) {
  let winner = '';
  // if user has selected rock
  if (userChoice === 'rock') {
    if (houseChoice === 'paper') {
      winner = 'house'
    }
    if (houseChoice === 'spock') {
      winner = 'house';
    }
    if (houseChoice === 'rock') {
      winner = 'draw'
    }
    if (houseChoice === 'scissors') {
      winner = 'user';
    }
    if (houseChoice === 'lizard') {
      winner = 'user';
    }
  }
  if (userChoice === 'paper') {
    if (houseChoice === 'scissors') {
      winner = 'house';
    }
    if (houseChoice === 'lizard') {
      winner = 'house';
    }
    if (houseChoice === 'paper') {
      winner = 'draw'
    }
    if (houseChoice === 'rock') {
      winner = 'user'
    }
    if (houseChoice === 'spock') {
      winner = 'user';
    }
  }
  if (userChoice === 'scissors') {
    if (houseChoice === 'rock') {
      winner = 'house'
    }
    if (houseChoice === 'spock') {
      winner = 'house';
    }
    if (houseChoice === 'scissors') {
      winner = 'draw';
    }
    if (houseChoice === 'paper') {
      winner = 'user'
    }
    if (houseChoice === 'lizard') {
      winner = 'user';
    }
  }
  if (userChoice === 'lizard') {
    if (houseChoice === 'rock') {
      winner = 'house'
    }
    if (houseChoice === 'spock') {
      winner = 'user';
    }
    if (houseChoice === 'scissors') {
      winner = 'house';
    }
    if (houseChoice === 'paper') {
      winner = 'user'
    }
    if (houseChoice === 'lizard') {
      winner = 'draw';
    }
  }
  if (userChoice === 'spock') {
    if (houseChoice === 'rock') {
      winner = 'user'
    }
    if (houseChoice === 'spock') {
      winner = 'draw';
    }
    if (houseChoice === 'scissors') {
      winner = 'user';
    }
    if (houseChoice === 'paper') {
      winner = 'house'
    }
    if (houseChoice === 'lizard') {
      winner = 'house';
    }
  }
  return winner
}

export default determineWinner;