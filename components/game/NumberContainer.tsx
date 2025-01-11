import { View, Text } from "react-native";
import Colors from "~/constants/colors";

type NumberContainerProps = {
  children: React.ReactNode;
};

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View>
      <Text className="text-[#ddb52f] border-2 border-[#ddb52f] px-4 py-3 font-bold rounded-md">
        {children}
      </Text>
    </View>
  );
};

export default NumberContainer;
