function GuessForm({ guess, setGuess, prevGuessList, setPrevGuessList }) {
    return (
        <form
            class="guess-input-wrapper"
            onSubmit={(e) => {
                e.preventDefault();
                console.log("submitted");
                console.log(guess);        
                const nextPrevGuessList = [...prevGuessList, guess];
                setPrevGuessList(nextPrevGuessList);
                setGuess("");
            }}
        >
            <label for="guess-input">Enter guess:</label>
            <input
                type="text"
                id="guess-input"
                value={guess}
                minLength={5}
                onChange={(e) => setGuess(e.target.value)}
            />
        </form>
    );
}

export default GuessForm;
