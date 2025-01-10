import { View, Text } from "react-native";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

const StartGameScreen = () => {
  return (
    <View>
      <Input placeholder="Write some stuff..." />
      <Button>
        <Text>Hello World</Text>
      </Button>
    </View>
  );
};

export default StartGameScreen;
