import React from 'react'
import {View, Text} from 'react-native'
import Layout from '../styles/Layout'
import Header from '../components/Header'
import {Button} from 'react-native-paper'

const Home = ({navigation}) => {
    const style = {
        padding: 10
    }

    return (
        <Layout>
            <Header />
            <Layout style={style}>
                <Text>Home Page</Text>
                <Button mode="contained" onPress={() => navigation.navigate('Page 2', {data: 'Data from previos screen'})}>
                    View Page 2
                </Button>
                <Button mode="contained-tonal" onPress={() => navigation.navigate('Page 2', {data: 'Data from previos screen'})}>
                    View Page 2
                </Button>
            </Layout>
        </Layout>
    )
}

export default Home