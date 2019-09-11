// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'

class Header extends React.Component {
    static navigationOptions = {
        header: null,
    }

    navigateToAddContact = () => {
        this.props.navigateToAddContact()
    }

    render() {
        return (
            <ImageBackground
                source={require('../asset/Title.png')}
                style={mstyle.imagebg}
            >
                <Text style={mstyle.textList}>List</Text>
                <TouchableOpacity
                    style={mstyle.touch}
                    onPress={this.navigateToAddContact}
                >
                    <Text style={mstyle.textAdd}>Add Contact</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

export default Header

const mstyle = StyleSheet.create({
    imagebg: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
    },
    touch: {
        height: 60,
        width: 100,
        justifyContent: 'center',
    },
    textList: {
        fontSize: 18,
        color: '#FFFFFF',
        marginTop: 17,
    },
    textAdd: {
        fontSize: 18,
        color: '#FFFFFF',
    },
})