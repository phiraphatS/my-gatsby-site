import 'semantic-ui-css/semantic.min.css'
import * as React from "react"
import { Button } from 'semantic-ui-react'
import NevBar from '../pages/nav-bar-menu'
import { HeadFC, Link, PageProps, navigate } from "gatsby"

const pageStyles = {
  color: "#232129",
  // padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

function clickTest() {
  navigate('/about');
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <NevBar/>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
