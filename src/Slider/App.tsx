import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import Slider from '.';
import LottieView from 'lottie-react-native';

const STATIC_MAX = 100;

const App: React.FC = () => {
  const [maxNumberInput, setMaxNumberInput] = useState(100); // User input for max value
  const [minSliderValue, setMinSliderValue] = useState(0); // Minimum slider value
  const [maxSliderValue, setMaxSliderValue] = useState(STATIC_MAX); // Maximum slider value
  const [guessSliderValue, setGuessSliderValue] = useState(0); // Guess slider value
  const [randomNumber, setRandomNumber] = useState<number | null>(null); // Random number to guess
  const [gameStarted, setGameStarted] = useState(false); // Game state
  const [feedback, setFeedback] = useState(''); // Feedback for the user
  const [confettiVisible, setConfettiVisible] = useState(false); // Confetti animation state

  const startGame = () => {
    const max = Number(maxNumberInput);
    if (max <= 0) {
      setFeedback('Invalid Input! Please enter a number greater than 0.');
      return;
    }

    const random = Math.floor(Math.random() * (max + 1)); // Generate random number
    setRandomNumber(random);
    setMinSliderValue(0);
    setMaxSliderValue(max);
    setGuessSliderValue(0);
    setGameStarted(true);
    setFeedback('Game Started! Make your first guess.');
  };

  const handleGuess = () => {
    if (randomNumber === null) {
      setFeedback('Please start the game first.');
      return;
    }

    if (guessSliderValue === randomNumber) {
      setFeedback(`🎉 You guessed the number ${randomNumber}!`);
      setGameStarted(false); // End the game
      setConfettiVisible(true);
      setTimeout(() => setConfettiVisible(false), 3000); // Hide confetti after 3 seconds
      return;
    }

    if (guessSliderValue < randomNumber) {
      setMinSliderValue(guessSliderValue); // Update minimum slider value
      setFeedback('Loser 💩, Too low! try again.');
    } else {
      setMaxSliderValue(guessSliderValue); // Update maximum slider value
      setFeedback('Loser 💩, Too high! try again.');
    }
  };

  const resetGame = () => {
    setMaxNumberInput(STATIC_MAX);
    setMinSliderValue(0);
    setMaxSliderValue(STATIC_MAX);
    setGuessSliderValue(0);
    setRandomNumber(null);
    setGameStarted(false);
    setFeedback('Game Reset! Start a new game.');
  };

  return (
    <>
      <View style={styles.container}>
        {confettiVisible && (
          <>
            <LottieView
              source={require('./confetti.json')}
              autoPlay
              loop={false}
              duration={2500}
              style={styles.lottie}
            />
            <LottieView
              source={require('./confetti1.json')}
              autoPlay
              loop={false}
              duration={2500}
              style={styles.lottie}
            />
          </>
        )}
        <Text style={styles.header}>Guess the Number</Text>

        {/* Input for maximum value */}
        <TextInput
          style={styles.input}
          placeholder="Enter Max Value"
          keyboardType="numeric"
          value={String(maxNumberInput || 0)}
          editable={!gameStarted}
          onChangeText={(val) => setMaxNumberInput(Number(val || 0))}
        />

        {/* Feedback Text */}
        <Text style={styles.feedback}>{feedback}</Text>

        {/* Start Game Button */}
        <TouchableOpacity
          style={[styles.button, gameStarted && { backgroundColor: 'gray' }]}
          onPress={startGame}
          disabled={gameStarted}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>

        {/* Sliders */}
        <Text style={styles.label}>Min Value: {minSliderValue}</Text>
        <Slider
          enable={false}
          maxNumber={maxNumberInput}
          value={minSliderValue}
          onChange={setMinSliderValue}
        />

        <Text style={styles.label}>Max Value: {maxSliderValue}</Text>
        <Slider
          enable={false}
          maxNumber={maxNumberInput}
          value={maxSliderValue}
          onChange={setMaxSliderValue}
        />

        <Text style={styles.label}>Your Guess: {guessSliderValue}</Text>
        <Slider
          enable={gameStarted}
          maxNumber={maxNumberInput}
          lowerLimit={minSliderValue}
          upperLimit={maxSliderValue}
          value={guessSliderValue}
          onChange={setGuessSliderValue}
        />

        {/* Guess Button */}
        <TouchableOpacity style={styles.button} onPress={handleGuess}>
          <Text style={styles.buttonText}>Guess</Text>
        </TouchableOpacity>

        {/* Start New Button */}
        <TouchableOpacity style={[styles.button, styles.newButton]} onPress={resetGame}>
          <Text style={styles.buttonText}>Start New</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    paddingTop: 70,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
  },
  input: {
    width: Dimensions.get('window').width * 0.8,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  feedback: {
    fontSize: 16,
    color: '#FFD700',
    marginVertical: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: Dimensions.get('window').width * 0.6,
    alignItems: 'center',
  },
  newButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  lottie: {
    zIndex: 100,
    position: 'absolute',
    width: '100%',
    height: '90%',
    top: 50,
  },
});

export default App;
