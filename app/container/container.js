// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React from 'react'
import {View} from 'react-native'
import ListContactCpn from '../components/ListContactCpn'
import Header from '../components/Header'

class container extends React.Component {
    static navigationOptions = {header: null}

    navigateToAddContact = () => {
        this.props.navigation.navigate('AddContactScr')
    }

    navigateToEditContact = (item) => {
        this.props.navigation.navigate('EditContactScr', {item})
    }

    render() {
        return (
            <View>
                <Header
                    navigateToAddContact={this.navigateToAddContact}
                />
                <ListContactCpn
                    navigateToEditContact={this.navigateToEditContact}
                />
            </View>
        )
    }
}

export default container