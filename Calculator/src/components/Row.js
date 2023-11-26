import { StyleSheet, View } from "react-native"; 

const Row = ({child}) => {
  return <View style={styles.container}>{child}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});

export default Row;