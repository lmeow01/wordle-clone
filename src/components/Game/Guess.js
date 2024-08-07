import { useState } from "react"
import { checkGuess } from "../../game-helpers"

export default function Guess({ word = "     ", answer}) {
    const [matched, setMatched] = useState([])
    if (word && word[0] !== " "){
        const output = checkGuess(word, answer)
        return ( 
            <p className="guess">
                {output.map(({letter, status}, index) => {
                    if (status === 'correct'){
                        return <span key={Math.random()} className="cell correct">{letter}</span>
                    } else if (status === 'misplaced'){
                        return <span key={Math.random()} className="cell misplaced">{letter}</span>
                    } else {
                        return <span key={Math.random()} className="cell incorrect">{letter}</span>
                    }
                })}
            </p>
        )
    } else {
        return ( 
            <p className="guess">
                <span className="cell">{word[0]}</span>
                <span className="cell">{word[1]}</span>
                <span className="cell">{word[2]}</span>
                <span className="cell">{word[3]}</span>
                <span className="cell">{word[4]}</span>
            </p>
        )
        
    }
    

}