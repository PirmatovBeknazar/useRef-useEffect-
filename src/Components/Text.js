import React, { useState } from 'react'
import Disabled from './Disabled'

const Text = () => {
    const arr = []
    const [text, setText] = useState(arr)

    const onSave = (obj) => {
        setText((prev)=>{
            return[...prev,obj]
        })
    }

  return (
    <div>

        <h1>{text}</h1>

        {
            text.map((el)=>{
                return(
                    <div>
                        <h2>{ el.emails}</h2>
                        <h2>{ el.passvords}</h2>
                    </div>
                   
                   
                )
            })
        }
        <Disabled onSave={onSave}/>
      
    </div>
  )
}

export default Text
