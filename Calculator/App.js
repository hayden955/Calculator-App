import React, {Component} from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button";
import Row from "./src/components/Row";
import calculator, {initState} from "./src/util/calculator";

export default class App extends Component {
  state = initState;
  
  tap = (type,value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currValue).toLocaleString()}
          </Text>
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.tap("clear")}
            />

            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.tap("pn")}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.tap("percentage")}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.tap("operator", "/")}
            />
          </Row>
          <Row>
            <Button text="1" onPress={() => this.tap("number", 1)} />
            <Button text="2" onPress={() => this.tap("number", 2)} />
            <Button text="3" onPress={() => this.tap("number", 3)} />
            <Button 
              text="="
              theme="primary"
              onPress={() => this.tap("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.tap("number", 1)} />
            <Button text="2" onPress={() => this.tap("number", 2)} />
            <Button text="3" onPress={() => this.tap("number", 3)} />
            <Button 
              text="="
              theme="accent"
              onPress={() => this.tap("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.tap("number", 1)} />
            <Button text="2" onPress={() => this.tap("number", 2)} />
            <Button text="3" onPress={() => this.tap("number", 3)} />
            <Button 
              text="="
              theme="accent"
              onPress={() => this.tap("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="0" onPress={() => this.tap("number", 0)} />
            <Button text="." onPress={() => this.tap("number", ".")} />
            <Button 
              text="="
              theme="primary"
              onPress={() => this.tap("equal", "=")}
            />
          </Row>
        </SafeAreaView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});