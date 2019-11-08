import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Greeting extends Component {
    render() {
        let helloText = `Hello ${this.props.name}, nice to meet you!`
        return (
            <Text>{ helloText }</Text>
        )
    }
}

export default class MultipleGreeting extends Component {
    render() {
        return(
            <View>
                <Greeting name="Thao"/>
                <Greeting name="Khoa"/>
                <Greeting name="Cuong"/>
            </View>
        )
    }
}