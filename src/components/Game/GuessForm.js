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
                required
                type="text"
                id="guess-input"
                value={guess}
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                onChange={(e) => setGuess(e.target.value.toUpperCase())}
            />
        </form>
    );
}

export default GuessForm;
