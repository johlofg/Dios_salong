import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  
  li {
    padding: 18px 10px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #008060;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')}
    top: 0;
    right: 0; 
    height: 100vh;
    width: 200px;    
    margin-top: 0;
  }
`

const RightNav = ({ open }) => {
  console.log(open)

  return (
    <Ul open={open}>
      <Link to="/">
        <li>Hem</li>
      </Link>
      <Link to="/booking">
        <li>Boka tid</li>
      </Link>
      <li>Portfolio</li>
    </Ul>
  )
}

export default RightNav
