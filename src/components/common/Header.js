//import
import React from 'react';
import { Text, View } from 'react-native';


const Header = (props) => {
  const {textStyle, viewStyle} = styles;
  return(
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

// Make component available for other parts of the App
export {Header};
