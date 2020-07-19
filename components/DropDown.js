import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// TODO: This is missing functionality for sub-menu here from SUI core examples.
// The "Publish To Web" item should contain a sub-menu.

const DropDown = () => (
  <Dropdown text='Pages' button className='black'>
    <Dropdown.Menu>
      <Dropdown.Item >
      <a className="dropdown-item" href="/">Home</a>
      </Dropdown.Item>
      <Dropdown.Item >
      <a className="dropdown-item" href="/blog">Blog</a>
      </Dropdown.Item>
      <Dropdown.Item >
      <a className="dropdown-item" href="/projects">Projects</a>
      </Dropdown.Item>
      <Dropdown.Item >
      <a className="dropdown-item" href="#">Profile</a>
      </Dropdown.Item>

    </Dropdown.Menu>
  </Dropdown>
)


export default DropDown
