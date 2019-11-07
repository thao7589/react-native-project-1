import React, { Component } from 'react';
import { Text } from 'react-native'; 

export default class Hello extends Component {
    render() {
        let greeting = "Hello, this is my first Component";
        return (
            <Text>{ greeting }</Text>
        );
    }
}