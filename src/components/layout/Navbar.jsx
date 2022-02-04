import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ title }) {
  return (
    <nav className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="container mx-auto">Navbar</div>

      <h1 classNmae="text-3xl font-bold underline">Hello world!</h1>
    </nav>
  )
}

Navbar.defailtProps = {
  title: 'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar
