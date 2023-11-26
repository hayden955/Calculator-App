import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

//4 props below
//each prop has a function 
export default ({ onPress, text, size, theme }) => {
    const buttonStyles = [styles.button];
    const textStyles = [styles.text];

    if (size === "constant") {
      buttonStyles.push(styles.buttonTwo)
    }

    if (theme === "secondary") {
      buttonStyles.push(styles.buttonSecondary);
      textStyles.push(styles.textSecondary);
    } else if (theme === "accent") {
      buttonStyles.push(styles.buttonAccent);
    }

    return (
      <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <Text style={textStyles}>{text}</Text>
      </TouchableOpacity>
    );
};

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  buttonTwo: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "ffc107"
  },
});