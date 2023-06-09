import React from 'react';
import { Button, Text } from 'react-native-paper';

const typography = {
  titleLarge: {
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 28
  },
};

const SignUpButton = ({ handleAuth }) => {

  return (
    <Button
      mode="contained"
      onPress={() => console.log("test")}
      buttonColor="#4B312C"
      style={{
        borderRadius: 100,
        height:49,
        width:301,
        top:'5%'
      }}
      icon="login"
      labelStyle={typography.titleLarge}
    >
      Sign Up
    </Button>
  );
};

export default SignUpButton;