import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import styled from 'styled-components/native';

const TextStyled = styled.Text`
  margin: 5px;
`;

export default Answer = ({a}) => (
  <TextStyled>
    Answer: {a}
  </TextStyled>  
);