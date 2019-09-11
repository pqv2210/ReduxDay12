// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {addContact, getValueTextInput} from '../../actions/actions'

class AddContactScr extends React.Component {
    constructor(props) {
        super(props)
        console.log('props', props)
        this.state = {
            item: {},
            text1: '',
            text2: '',
            text3: '',
        }
    }

    getName = (text) => {
        this.setState({text1: text})
    }
    getPhone = (text) => {
        this.setState({text2: text})
    }
    getGmail = (text) => {
        this.setState({text3: text})
    }

    handleAdd = () => {
        const {text1} = this.state
        const {text2} = this.state
        const {text3} = this.state
        this.props.getValue(text1, text2, text3)
        const item = {
            id: Math.random().toString(),
            full_name: text1,
            phone_number: text2,
            avatar_url: '',
            gmail: text3,
        }
        this.props.addContact(item)
        this.props.navigation.goBack()
    }

    render() {
        return (
            <View style={mstyle.container}>
                <Image
                    source={{uri: 'https://mymodernmet.com/wp/wp-content/uploads/2019/07/russian-blue-cats-17.jpg'}}
                    style={mstyle.avatar}
                />
                <Text style={mstyle.text}>Name</Text>
                <TextInput
                    style={mstyle.textinput}
                    onChangeText={this.getName}
                />
                <Text style={mstyle.text}>Phone Number</Text>
                <TextInput
                    style={mstyle.textinput}
                    onChangeText={this.getPhone}
                />
                <Text style={mstyle.text}>Gmail</Text>
                <TextInput
                    style={mstyle.textinput}
                    onChangeText={this.getGmail}
                />
                <TouchableOpacity
                    style={mstyle.touch}
                    onPress={this.handleAdd}
                >
                    <Text style={mstyle.textok}>Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.data,
})

const mapDispatchToProps = (dispatch) => {
    return {
        addContact: (item) => dispatch(addContact(item)),
        getValue: (text1, text2, text3) => dispatch(getValueTextInput(text1, text2, text3)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContactScr)

const mstyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    text: {
        fontSize: 20,
        alignSelf: 'flex-start',
        marginHorizontal: '16%',
    },
    textinput: {
        fontSize: 20,
        height: 48,
        width: '70%',
        borderWidth: 1,
        borderRadius: 6,
    },
    touch: {
        height: 50,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b3b6e8',
        marginTop: 5,
        borderRadius: 5,
    },
    textok: {
        fontSize: 20,
        color: '#FFFFFF',
    },
})