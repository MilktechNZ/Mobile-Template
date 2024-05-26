/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Layout from './src/styles/Layout'
import Router from './src/components/Router'

function App(): React.JSX.Element {
  return (
    <Layout>
        <Router />
    </Layout>
  )
}

export default App;
