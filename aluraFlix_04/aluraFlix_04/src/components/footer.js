import React from 'React'
import styled from 'styled-components'
import { footerHeight } from 'utils/constants'
const MainFooter = () => (
  <Footer>&copy; 2024</Footer>
)
const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
  display:flex;
  justify-content:center;
  align-items:center;
  color:#fff;
`
export default MainFooter
