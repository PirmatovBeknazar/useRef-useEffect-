import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
  return (
    <div>
      <button style={props.style} disabled={props.disabled} onClick={props.onClick}>{props.text}</button>
    </div>
  )
}

export default Button
const ButtonStyled = styled.button`
    padding: 10px 35px;
background-color: blue;
border: none;
 border-radius: 20px;
 color: white;
 &:hover{
   
   background-color: greenyellow;
   transition-duration: 0.5s;
   box-shadow: rgba(246, 244, 244, 0.35) 0px 5px 15px;
  }

  &:active{
   background-color: #09ae09;
  }
`
