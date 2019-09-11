// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {createStackNavigator} from 'react-navigation-stack'
import container from '../container/container'
import AddContactScr from '../components/screens/AddContactScr'
import EditContactScr from '../components/screens/EditContactScr'

const StackNavigation = createStackNavigator({
    ListContactScr: container,
    AddContactScr,
    EditContactScr,
})

export default StackNavigation