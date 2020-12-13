import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import InputNumberButton from './components/inputNumberButton';

const buttons = [
  ['CLEAR', 'DEL'],
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+']
];

export default function App() {
  const [ value, setValue ] = React.useState({displayValue: 10});
  
  const handleInput = (input) => {
    const { displayValue } = value;

    switch (input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '0':
        setValue({
          displayValue: (displayValue === '0') ? input : displayValue + input
        });
        break;
      
      case '+':
      case '-':
      case '*':
      case '/':
        setValue({
          displayValue: displayValue + input
        });
        break;
      default:
        break;
    }

    
  }

  const renderButtons = () => {
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return <InputNumberButton 
                value={buttonItems}
                handleOnPress={() => {handleInput(buttonItems)}}
                key={'btn-' + buttonIndex} 
                />
      });
  
      return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
    });
  
    return layouts;
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{ value.displayValue }</Text>
      </View>
      <View style={styles.inputContainer}>
        {renderButtons()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  resultContainer: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: '#1E1240'
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#300075'
  },
  resultText: {
    color: "#ffffff",
    fontSize: 80,
    fontWeight: "bold",
    paddingTop: 20,
    textAlign: "right"
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
});
