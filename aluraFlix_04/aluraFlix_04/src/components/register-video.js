'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { registerVideo } from 'reducers/videos/action-creators'
import { closeRegisterVideo } from 'reducers/ui/action-creators'

const RegisterVideo = ({ onSubmit, onCloseRegisterVideo}) =>(
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar Vídeo</h2>

    <label htmlFor='id'>ID do video:</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Titulo do video:</label>
    <input type='text' id='title' name='title' />

    <button type='submit'>Cadastrar</button>
    <ButtonClose type='button' onClick ={onCloseRegisterVideo}>&times;</ButtonClose>
  </Form>
)
const Form = styled.form`
  padding:10px;
  position:relative;
`
const ButtonClose = styled.button`
  position:absolute;
  margin:0;
  border-radius:50%;
  font-size:20px;
  line-height:1;
  padding:0;
  right:10px;
  top:10px;
  width:30px;
  height:30px;
`

const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist()
    const {
      id:{ value: id },
      title:{ value: title }
    } = e.target
    e.target.reset()
    e.target[0].focus()
    await dispatch(registerVideo({ id, title }))

  },
  onCloseRegisterVideo:() => dispatch(closeRegisterVideo())
})
export default connect(null,mapDispatchToProps)(RegisterVideo)
