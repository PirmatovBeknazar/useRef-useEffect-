import React from 'react'

const Input = ({type, value, onChange, placeholder, style }) => {
  return (
    <div>
      <input style={style} placeholder={placeholder} type={type}  value={value} onChange={onChange} />
    </div>
  )
}

export default Input
