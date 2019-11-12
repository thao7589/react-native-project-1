import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Keyboard } from 'react-native';

export default class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            pass: '',
        };
    }
    
    render() {
        return(
            <View>
                <Text>Username:</Text>
                <TextInput 
                    style={styles.textInput}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    autoFocus={true}
                    onChangeText={text => {
                        this.setState({
                            text: text
                        })
                    }}
                /> 
                <Text>Password:</Text>
                <TextInput 
                    style={styles.textInput}
                    keyboardType='default'
                    placeholder='Enter your email'
                    secureTextEntry={true}
                    onChangeText={pass => {
                        this.setState({
                            pass: pass
                        })
                    }}
                /> 
                <Text>Multiline:</Text>
                <TextInput 
                    style={styles.multiline}
                    keyboardType='default'
                    placeholder='Enter your email'
                    multiline={true}
                    editable={true}
                    returnKeyType='done'
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={pass => {
                        this.setState({
                            pass: pass
                        })
                    }}
                /> 
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    multiline: {
        height: 100,
        margin: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    }
})