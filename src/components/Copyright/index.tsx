import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

export function Copyright(){
  return (
    <View>
      <Text style={styles.text}>
        Copyright 2022 - Rocketseat
      </Text>
    </View>
  );
}