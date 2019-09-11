// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {editContact, getValueTextInput, removeContact} from '../../actions/actions'

class EditContactScr extends React.Component {
    constructor(props) {
        super(props)
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

    componentDidMount() {
        const item = this.props.navigation.getParam('item', 'NO-ID')
        if (this.state.text1 === '') {
            this.setState({text1: item.item.full_name})
        }
        if (this.state.text2 === '') {
            this.setState({text1: item.item.phone_number})
        }
        if (this.state.text3 === '') {
            this.setState({text1: item.item.gmail})
        }
    }

    handleEdit = () => {
        const item = this.props.navigation.getParam('item', 'NO-ID')
        const {text1, text2, text3} = this.state
        this.props.getValue(text1, text2, text3)
        const data = {
            id: item.item.id,
            full_name: text1,
            phone_number: text2,
            avatar_url: 'https://placeimg.com/140/140/dog',
            gmail: text3,
        }
        this.props.handleEditContact(data)
        this.props.navigation.goBack()
    }

    handleRemove = () => {
        const item = this.props.navigation.getParam('item', 'NO-ID')
        this.props.handleRemoveContact(item.item.id)
        this.props.navigation.goBack()
    }

    render() {
        const item = this.props.navigation.getParam('item', 'NO-ID')
        return (
            <View style={mstyle.container}>
                <Image
                    source={{uri: item.item.avatar_url}}
                    style={mstyle.avatar}
                />
                <Text style={mstyle.text}>Name</Text>
                <TextInput
                    defaultValue={item.item.full_name}
                    style={mstyle.textinput}
                    onChangeText={this.getName}
                />
                <Text style={mstyle.text}>Phone Number</Text>
                <TextInput
                    defaultValue={item.item.phone_number}
                    style={mstyle.textinput}
                    onChangeText={this.getPhone}
                />
                <Text style={mstyle.text}>Gmail</Text>
                <TextInput
                    defaultValue={item.item.gmail}
                    style={mstyle.textinput}
                    onChangeText={this.getGmail}
                />
                <View style={mstyle.touchbox}>
                    <TouchableOpacity
                        item={item.item}
                        style={mstyle.touch}
                        onPress={this.handleEdit}
                    >
                        <Text style={mstyle.touchtext}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={mstyle.touch}
                        onPress={this.handleRemove}
                    >
                        <Text style={mstyle.touchtext}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.reducer.item,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleEditContact: (data) => dispatch(editContact(data)),
        handleRemoveContact: (id) => dispatch(removeContact(id)),
        getValue: (text1, text2, text3) => dispatch(getValueTextInput(text1, text2, text3)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditContactScr)

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
        borderRadius: 6,
        borderWidth: 1,
    },
    touchbox: {
        flexDirection: 'row',
        marginTop: 5,
    },
    touch: {
        height: 50,
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b3b6e8',
        marginLeft: 5,
        borderRadius: 5,
    },
    touchtext: {
        fontSize: 20,
        color: '#FFFFFF',
    },
})