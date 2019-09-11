// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

class GetData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {},
        }
    }

    getDataToList = () => {
        this.props.getDataToList(this.props.item)
    }

    render() {
        return (
            <TouchableOpacity
                style={mstyle.touch}
                onPress={this.getDataToList}
            >
                <Image
                    source={{uri: this.props.item.avatar_url}}
                    style={mstyle.image}
                />
                <View style={mstyle.box}>
                    <Text style={mstyle.textcontact}>{this.props.item.full_name}</Text>
                    <Text style={mstyle.textcontact}>{this.props.item.phone_number}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default GetData

const mstyle = StyleSheet.create({
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 5,
    },
    box: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 60,
    },
    textcontact: {
        fontSize: 18,
    },
    touch: {
        height: 60,
        flexDirection: 'row',
        marginVertical: 2,
        backgroundColor: '#fef2fb',
    },
})