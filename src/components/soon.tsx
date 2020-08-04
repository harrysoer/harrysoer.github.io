import React from "react"
import tw, { styled } from "twin.macro"

const Header = () => (
  <Container>
    <Text>SOON</Text>
  </Container>
)

export default Header

/** STYLES */
const Container = styled.div`
  ${tw`flex content-center items-center justify-center bg-black text-center`}
  color: #fff;
  height: 100vh;
`

const Text = styled.h1`
  font-size: 6vw;
`