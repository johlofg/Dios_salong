import React from 'react'
import styled from 'styled-components'

// import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const MainSection = styled.section`
background: #010101;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
padding-top: 100px;
height: 100vh;
`

const Main = () => {
  return (
    <MainSection>
      <p>Hej</p>
    </MainSection>
  )
}

export default Main
