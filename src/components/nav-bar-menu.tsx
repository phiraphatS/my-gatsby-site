import React, { Component } from "react"
import { Menu, Header, Image, Reveal } from 'semantic-ui-react'
import { StaticImage, getSrc } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby";

export default class NevBar extends Component {

  render() {
    var itemActive:string = "";
    function nextTo(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name }: { name: string }) {
      itemActive = name;
    }
    
    return (
      <Menu secondary color='black'>
        <Menu.Item>
          <Image src='../../headIcond.png' circular size='mini'/>
        </Menu.Item>
{/* 
        <Menu.Item
          name='features'
          active={itemActive === 'features'}
          onClick={(e) => nextTo(e, { name: 'features' })}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={itemActive === 'testimonials'}
          onClick={(e) => nextTo(e, { name: 'testimonials' })}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={itemActive === 'sign-in'}
          onClick={(e) => nextTo(e, { name: 'sign-in' })}
        >
          Sign-in
        </Menu.Item> */}
      </Menu>
    )
  }
}
