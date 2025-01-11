import { View, Text, Pressable } from "react-native";

import Colors from "~/constants/colors";

type PrimaryButtonProps = {
  children: React.ReactNode;
  className: string;
};

const PrimaryButton = ({ children, className }: PrimaryButtonProps) => {
  const pressHandler = () => {
    console.log("Pressed!");
  };

  return (
    <Pressable
      //   android_ripple={{ color: "red" }}
      onPress={pressHandler}
      className={`bg-primary active:bg-[${Colors.primary600}]rounded-xl px-3 py-3 ${className}`}
    >
      <View>
        <Text className="text-white text-center">{children}</Text>
      </View>
    </Pressable>
  );
};
export default PrimaryButton;
