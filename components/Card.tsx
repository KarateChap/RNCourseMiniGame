import { View, Text } from "react-native";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <View className="p-5 gap-3 bg-zinc-900/40 rounded-2xl">{children}</View>
  );
};
export default Card;
