import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import Button from '../components/button';
import global_styles from '../configs/styles';

export default () => {
  return(
    <SafeAreaView style={global_styles.container}>
      <Button number={true} value={'1'} />
      <Button number={false} value={'1'} />
    </SafeAreaView>
  );
}