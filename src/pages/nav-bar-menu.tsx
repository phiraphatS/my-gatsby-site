import React, { Component } from "react"
import { Menu, Header, Image } from 'semantic-ui-react'
import { StaticImage } from "gatsby-plugin-image"

export default class NevBar extends Component {

  render() {
    var itemActive:string = "";
    const src = '../icon.png'
    function nextTo(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, { name }: { name: string }) {
      itemActive = name;
    }

    return (
      <Menu stackable>
        <Menu.Item>
          {/* <StaticImage alt="logo" src="../images/headIcond.png" 
          style={{ width: "50px", height: "50px" }}
          formats={["auto", "webp", "avif"]}
          quality={100} /> */}
          <Image src={src} size='small' floated='left'/>
        </Menu.Item>

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
        </Menu.Item>
      </Menu>
    )
  }
}
