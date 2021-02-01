import React from "react"
import { AppProps } from "next/app"

import Layout from "@/src/components/layout"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
