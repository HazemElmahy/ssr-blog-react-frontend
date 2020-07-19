import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const DropDown = () => (
  <Dropdown text='Pages' button className='black'>
    <Dropdown.Menu>
      <a href="/">
        <Dropdown.Item text='Home'/>
      </a>
      <a href="/blog">
        <Dropdown.Item text='Blog'/>
      </a>
      <a href="/projects">
        <Dropdown.Item text='Projects'/>
      </a>
      <a href="#">
        <Dropdown.Item text='Profile'/>
      </a>

    </Dropdown.Menu>
  </Dropdown>
)


export default DropDown
