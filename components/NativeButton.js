import React, { Component } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Button from 'react-native-button';

export default class NativeButton extends Component {
    constructor(props) {
        super(props);
    }

    buttonPress = () => {
        Alert.alert("Hello!")
    }

    render() {
        return(
            <View>
                <Button
                    style={styles.button}
                    onPress={this.buttonPress}
                >
                    Click me!
                </Button>
            </View>
        )
    }
}

const styles =  StyleSheet.create({
    button: {
        backgroundColor: 'green',
        color: 'white',
        fontSize: 25,
        padding: 15,
        borderRadius: 20
    }
})