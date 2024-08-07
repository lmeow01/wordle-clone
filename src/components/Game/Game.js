import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from './GuessForm';
import Guess from './Guess';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });



function Game() {
  const [guess, setGuess] = React.useState('');
  const [prevGuessList, setPrevGuessList] = React.useState([]);
  const numArr = range(0, NUM_OF_GUESSES_ALLOWED);

  return <>
    <div className="guess-results">
      {numArr.map((_, index) => {
        return prevGuessList.length > index? <Guess key={Math.random()} word={prevGuessList[index]} answer={answer}/>:<Guess key={Math.random()} word={"     "} answer={answer}/>
      })}
    </div>

    <GuessForm guess={guess} setGuess={setGuess} prevGuessList={prevGuessList} setPrevGuessList={setPrevGuessList}/>
    {prevGuessList.length != 0 && prevGuessList[prevGuessList.length-1].toUpperCase() === answer && <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {prevGuessList.length} guesses</strong>.
      </p>
    </div>
    }
    {
      prevGuessList.length === NUM_OF_GUESSES_ALLOWED && prevGuessList[prevGuessList.length-1].toUpperCase() !== answer && <div class="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
    }
    </>;
}

export default Game;
