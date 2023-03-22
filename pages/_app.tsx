import React from 'react'
import MainLayout from '../Layouts';

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
