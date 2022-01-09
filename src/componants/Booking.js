import React from 'react'
import styled from 'styled-components'
import { InlineWidget } from 'react-calendly'

import 'react-slideshow-image/dist/styles.css'

const MainSectionBooking = styled.section`
background: #010101;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
padding-top: 100px;
`

const Booking = () => {
  return (
    <MainSectionBooking>
      <InlineWidget url="https://calendly.com/diossalong" />
    </MainSectionBooking>
  )
}

export default Booking