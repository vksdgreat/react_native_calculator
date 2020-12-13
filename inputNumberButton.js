import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function InputNumberButton(props) {
    const { value, handleOnPress } = props;
    return (
        <TouchableOpacity style={styles.container} onPress={() => handleOnPress(value)}>
            <Text style={styles.text}>{value}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: '#ffffff',
        fontSize: 26
    }
});