import React from 'react'
import styled from 'styled-components'

import Menu from './Menu'

const HeaderSection = styled.nav`
background: black;
color: white;
width: 100%;
height: 55px;
display: flex;
border-bottom: 2px solid #f1f1f1;
justify-content: space-between;
paddig: 0 20px;
position: fixed;
top: 0;

.logo {
  padding: 15px 0;  
}
`

const Header = () => {
  return (
    <HeaderSection>
      <div className="logo">
        <p>Dios Salong</p>
      </div>
      <Menu />
    </HeaderSection>

  )
}
export default Header
