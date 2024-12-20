import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');
const GAME_AREA_WIDTH = width - 40;
const GAME_AREA_HEIGHT = height / 1.8;

interface LetterBox {
  letter: string;
  x: number;
  y: number;
}

export default function GameScreen() {
  const [letterBoxes, setLetterBoxes] = useState<LetterBox[]>([]);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [input, setInput] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const getRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
  const getRandomX = () => Math.random() * (GAME_AREA_WIDTH - 50);

  const resetLetterBox = (index: number) => {
    setLetterBoxes((prev) =>
      prev.map((box, i) =>
        i === index ? { ...box, letter: getRandomLetter(), x: getRandomX(), y: 0 } : box
      )
    );
  };

  const updatePositions = () => {
    setLetterBoxes((prev) =>
      // move letter down by 10 pixels
      prev.map((box) => ({
        ...box,
        y: box.y + 10,
      }))
    );
  };

  const checkBounds = () => {
    letterBoxes.forEach((box, index) => {
      if (box.y >= GAME_AREA_HEIGHT) {
        setScore((prev) => prev - 5);

        resetLetterBox(index);
      }
    });
  };

  const handleInput = (text: string) => {
    setInput(text);
    const letterIndex = letterBoxes.findIndex((box) => box.letter === text.toUpperCase());
    if (letterIndex !== -1) {
      setScore((prev) => prev + 1);

      resetLetterBox(letterIndex);
      if ((score + 1) % 5 === 0) {
        setSpeed((prev) => Math.max(0, prev - 100));
      }
    } else {
      setScore((prev) => prev - 1);
    }
    setInput('');
  };

  useEffect(() => {
    if (score < 0) {
      alert('Game Over!');
      setGameStarted(false);
      setScore(0);
      setSpeed(1000);

      setLetterBoxes([]);
    }
  }, [score]);

  const initializeGame = () => {
    setLetterBoxes([
      { letter: getRandomLetter(), x: getRandomX(), y: 0 },
      { letter: getRandomLetter(), x: getRandomX(), y: 0 },
      { letter: getRandomLetter(), x: getRandomX(), y: 0 },
    ]);
  };

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        updatePositions();
        checkBounds();
      }, speed);

      return () => clearInterval(interval);
    }
  }, [gameStarted, speed, letterBoxes]);

  const startGame = () => {
    setGameStarted(true);
    initializeGame();
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#780206', '#061161']} style={styles.gradientBackground}>
        {gameStarted && (
          <>
            <Text style={styles.score}>Score: {score}</Text>

            <Text style={styles.score}>Current Speed: {speed} ms</Text>
          </>
        )}
        {!gameStarted && (
          <TouchableOpacity style={styles.startButton} onPress={startGame}>
            <Text style={styles.startButtonText}>Start Game</Text>
          </TouchableOpacity>
        )}

        {gameStarted && (
          <View style={styles.gameArea}>
            {letterBoxes.map((box, index) => (
              <View
                key={index}
                style={{
                  ...styles.letterBox,
                  top: box.y,
                  left: box.x,
                }}>
                <Text style={styles.letterText}>{box.letter}</Text>
              </View>
            ))}
          </View>
        )}

        {gameStarted && (
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={handleInput}
            placeholder="Type a letter"
            placeholderTextColor="#ddd"
          />
        )}
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
    padding: 20,
  },
  score: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  stat: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  gameArea: {
    width: GAME_AREA_WIDTH,
    height: GAME_AREA_HEIGHT,
    borderWidth: 4,
    borderColor: 'red',
    borderRadius: 10,
    backgroundColor: '#3f4c6b',
    position: 'relative',
    marginBottom: 20,
    overflow: 'hidden',
  },
  letterBox: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#8CA6DB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  letterText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3f4c6b',
  },
  input: {
    borderWidth: 1,
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
    color: '#1B5E20',
    fontSize: 18,
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
