import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native'; 

export default class Robot extends Component {
    render() {
        const imageSource = {
            uri: "https://znews-photo.zadn.vn/w660/Uploaded/lce_uxlcq/2018_06_30/ds_1.jpg"
        }

        return (
            <Image style={styles} source={ imageSource }></Image>
        );
    }
}

const styles = StyleSheet.create({
    width: 200,
    height: 200
});