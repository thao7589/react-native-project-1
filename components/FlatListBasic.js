import React, { Component } from 'react';
import { View, Text, Image, FlatList, Alert, StyleSheet, TouchableHighlight } from 'react-native';
import List from './ListItems';
import Swipeout from 'react-native-swipeout';
import { Platform } from '@unimodules/core';

class FlatListItem extends Component {
    render() {
        const swipeSetting = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey !== null) {
                    this.setState({ activeRowKey: null })
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key })
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure want to delete?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    List.splice(this.props.index, 1);
                                    // Refrest FlatList
                                    this.props.parentFlatList.refreshFlatList(deletingRow)
                                }},
                            ],
                            { cancelable: true}
                        )
                    },
                    text: 'Delete', type: 'delete',
                    rowId: this.props.index,
                    sectionId: 1
                }
            ]
        }
        return (
            <Swipeout {...swipeSetting}>
                <View 
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        backgroundColor:'mediumseagreen',
                        borderBottomWidth: 1,
                        borderBottomColor: '#fff'
                    }}
                >
                    <Image 
                        source={{uri: this.props.item.imageUrl}}
                        style={{width: 100, height: 100, margin: 5}}
                    />
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={styles.item}>{this.props.item.name}</Text>
                        <Text style={styles.item}>{this.props.item.pass}</Text>
                    </View>
                </View>
            </Swipeout>
        )
    }
};

const styles = StyleSheet.create({
    item: {
        color: '#fff',
        padding: 10,
        fontSize: 16
    }
});

export default class FlatListBasic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        }
    }
    refreshFlatList = deletedKey => {
        this.setState(prevState => {
            return {
                deletedRowKey: deletedKey
            }
        })
    }
    _onPressAdd = () => {
        Alert.alert('add item');
    }
    render() {
        return (
            <View style={{
                marginTop: Platform.OS === 'ios' ? 34 : 0
            }}>
                <View style={{
                    backgroundColor: 'tomato',
                    flexDirection: 'row',
                    justifyContent: 'flex-end', 
                    alignItems: 'flex-end',
                    height: 64
                }}>
                    <TouchableHighlight
                        style={{marginRight: 10}}
                        underlayColor='tomato'
                        onPress={this._onPressAdd} 
                    >
                        <Image 
                            style={{width: 35, height: 35}}
                            source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJgLPdRT2jZYUfpfNh28FPrOiq1wqsffcgqyEF-DFEQlWHyEu1" }}
                        />
                    </TouchableHighlight>
                </View>
                <FlatList 
                    data={List}
                    renderItem={({item, index}) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}/>
                        )
                    }}
                />
            </View>
        )
    }
};