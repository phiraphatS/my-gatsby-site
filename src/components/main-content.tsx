import React, { Component } from "react"
import { Menu, Header, Image, Reveal } from 'semantic-ui-react'

const fontStyle = {
  fontFamily: "'Kanit', serif",
}
const spaceStyle = {
  display: "flex",
  justifyContent: "center",
}

export default class MainContent extends Component {
  render() {
    return (
      <div style={spaceStyle}>
        <Header size="huge">สมมุติว่าเป็นหนทางสู่วิถีนักเขียน AI</Header>
      </div>
    )
  }
}
