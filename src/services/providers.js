import React from 'react'
import App from '../App'
import { ResetCSS } from '../Global/ResetCSS'
import GithubProvider from '../providers/github-provider'

const Providers = () => {
    return (
        <main>
        <GithubProvider>
       <ResetCSS />
       <App />
       </GithubProvider>
       </main>
    )
}

export default Providers
