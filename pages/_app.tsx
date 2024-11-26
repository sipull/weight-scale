import { AppProps } from 'next/app'
import React from 'react'
import '../src/css/global.css'

const App = ({Component, pageProps}:AppProps) => {
  return (
    <Component {...pageProps}/>
  )
}

export default App