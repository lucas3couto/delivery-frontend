import React from 'react'
import Routes from '../../routes'
import Global from '../../styles/global'
import Layout from '../../components/Layout'

const App = () => {

    return (
        <Layout>
            <Routes />
            <Global />
        </Layout>
    )
}

export default App