// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import React, {Component} from 'react'
import {FlatList, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import GetData from './GetData'
import {addData} from '../actions/actions'

class ListContactCpn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            item: {},
        }
    }

    componentDidMount() {
        this.props.getData()
    }

    navigateToEditContact = (item) => {
        this.props.navigateToEditContact({item})
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            data: nextProps.data,
        }
    }

    getData = ({item}) =>
        (<GetData
            item={item}
            getDataToList={this.navigateToEditContact}
        />)

    render() {
        const {data} = this.state
        return (
            <FlatList
                style={mstyle.flatlist}
                data={data}
                renderItem={this.getData}
                keyExtractor={(item) => item.id}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.reducer.data,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(addData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContactCpn)

const mstyle = StyleSheet.create({
    flatlist: {
        flexDirection: 'column',
    },
})