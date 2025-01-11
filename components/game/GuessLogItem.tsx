import { View, Text } from "react-native";

type GuessLogItem = {
  roundNumber: number;
  guess: number;
};

const GuessLogItem = ({ roundNumber, guess }: GuessLogItem) => {
  return (
    <View className="flex-row justify-between items-center rounded-full border-2 border-[#3b021f] bg-[#ddb52f] px-3 py-2 w-full">
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};
export default GuessLogItem;
