import { useState, useEffect } from "react";
import { Alert, View, FlatList } from "react-native";
import Card from "~/components/Card";
import NumberContainer from "~/components/game/NumberContainer";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import Title from "~/components/ui/Title";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "~/components/game/GuessLogItem";

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

type GameScreenProps = {
  userNumber: number;
  onGameOver: (guessRounds: number) => void;
};

let minBoundary = 1;
let maxBoundary: number = 100;

const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View className="flex-1 justify-center items-center gap-3 px-5">
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text className="text-yellow-500 font-bold text-2xl">
          Higher or Lower?
        </Text>
        <View className="flex-row gap-2">
          <Button
            className="flex-1 rounded-full"
            onPress={() => {
              nextGuessHandler("lower");
            }}
          >
            <Ionicons name="remove" size={24} color="white" />
          </Button>

          <Button
            className="flex-1 rounded-full"
            onPress={() => {
              nextGuessHandler("greater");
            }}
          >
            <Ionicons name="add" size={24} color="white" />
          </Button>
        </View>
      </Card>

      <FlatList
        className="grow-0 h-[300px]"
        data={guessRounds}
        renderItem={(itemData) => (
          <GuessLogItem
            roundNumber={guessRoundsListLength - itemData.index}
            guess={itemData.item}
          />
        )}
        keyExtractor={(item) => item.toString()}
        ItemSeparatorComponent={() => <View className="h-2" />}
      />
    </View>
  );
};
export default GameScreen;
