import { View, Text, Image } from "react-native";
import { Button } from "~/components/ui/button";
import Title from "~/components/ui/Title";

type GameOverScreenProps = {
  roundsNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
};

const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}: GameOverScreenProps) => {
  return (
    <View className="flex-1 justify-center items-center gap-4 p-5">
      <Title className="w-full">GAME OVER!</Title>
      <View className="w-[200px] h-[200px] rounded-full border-4 border-[#ddb52f] overflow-hidden">
        <Image
          source={require("../assets/images/success.png")}
          className="w-full h-full"
        />
      </View>
      <Text className=" text-xl text-center">
        Your phone needed{" "}
        <Text className="font-bold text-[#640233]">{roundsNumber}</Text> rounds
        to guess the number{" "}
        <Text className="font-bold text-[#640233]">{userNumber}</Text>.
      </Text>
      <Button onPress={onStartNewGame}>
        <Text>Start New Game</Text>
      </Button>
    </View>
  );
};
export default GameOverScreen;
