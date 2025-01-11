import { useState } from "react";
import { Alert, View } from "react-native";
import Card from "~/components/Card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import Title from "~/components/ui/Title";

type StartGameScreenProps = {
  onPickNumber: (pickedNumber: number) => void;
};

const StartGameScreen = ({ onPickNumber }: StartGameScreenProps) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number  has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View className="p-5 gap-3">
      <Title>Guess my Number</Title>
      <Card>
        <Text className="text-center text-[#ddb52f] font-bold text-2xl">
          Enter a Number
        </Text>
        <Input
          placeholder="Enter numbers only"
          maxLength={2}
          keyboardType={"number-pad"}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />

        <View className="flex-row gap-3">
          <Button className="flex-1" onPress={resetInputHandler}>
            <Text>Reset</Text>
          </Button>
          <Button className="flex-1" onPress={confirmInputHandler}>
            <Text>Confirm</Text>
          </Button>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;
