import { Text } from "react-native";

type Title = {
  children: React.ReactNode;
  className?: string;
};

const Title = ({ children, className }: Title) => {
  return (
    <Text
      className={`text-center text-3xl font-bold text-white border-2 border-white px-3 py-3 ${className}`}
    >
      {children}
    </Text>
  );
};
export default Title;
