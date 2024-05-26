import React from 'react'
import {Text} from 'react-native'
import Layout from '../styles/Layout'

const CR1WebAccess = ({navigation, route}) => {
    const style = {
        padding: 10
    }
    return (
        <Layout style={style}>
            <Text>CR1 Web Access Page</Text>
            <Text>{route.params.data}</Text>
        </Layout>
    )
}

export default CR1WebAccess