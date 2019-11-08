import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };
        
        var taskTodo = () => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                }
            })
        };

        const timeToBlink = 500;
        setInterval(taskTodo, timeToBlink);
    }

    render() {
        let textToDisplay = this.state.showText ? this.props.inputText : ''
        return(
            <Text>{ textToDisplay }</Text>
        )
    }
}

export default class TextBlink extends Component {
    render() {
        return (
            <View>
                <Blink inputText="Hellooooooo"></Blink>
            </View>
        )
    }
}