import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export type Props = {
  number: boolean,
  value: string
}

export default ({ number, value }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.75} style={number ? styles.containerNumber : styles.containerOperator}>
      <Text style={number ? styles.textNumber : styles.textOperator}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerNumber: {
    alignItems: 'center',
    backgroundColor: '#a2e0a2',
    borderRadius: 40,
    height: 80,
    justifyContent: 'center',
    margin: 4,
    width: 80,
  },
  containerOperator: {
    alignItems: 'center',
    backgroundColor: '#728772',
    height: 80,
    justifyContent: 'center',
    margin: 4,
    width: 80,
  },
  textNumber: {
    fontSize: 22,
    color: '#000'
  },
  textOperator: {
    fontSize: 22,
    color: '#fff'
  },
});