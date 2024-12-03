import React from 'react'
import styled from 'styled-components'

const VideoSingle = ({ id , title }) =>(
  <Container>
    <Iframe width='560' height='400' src={`https://www.youtube.com/embed/${id}`} frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen/>
    <h2>{title}</h2>
  </Container>
)
const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
`
const Iframe = styled.iframe`
  background:#000;
  border:0;
  width:100%;
`
export default VideoSingle
