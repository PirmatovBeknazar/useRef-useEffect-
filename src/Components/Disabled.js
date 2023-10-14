import React, { useEffect, useState } from 'react'
import Button from './UI/Button'
import Input from './UI/Input'

const Disabled = (props) => {

    const [isDsabled, setDisabled]= useState(true)
    const [email, setEmail]= useState("")
    const [passvord, setPassvord]= useState("")
    const [emailValid, setEmailValid] = useState(false)
    const [passvordValid, setPassvordValid] = useState(false)


    const emailClickHendler = (e) => {
        setEmail(e.target.value)
        setEmailValid(e.target.value.includes("@gmail.com"))
        // console.log(emailValid);
        // console.log(email);
    }

    const passvordClickHendler = (e) => {
        setPassvord(e.target.value)
        setPassvordValid(e.target.value.length > 5)
        // console.log(passvord);
        // console.log(emailValid);

    }
    useEffect(()=>{
        if(email.includes("@gmail.com")&& passvord.length > 5){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    },[email, passvord])

    const onClickHendler = () => {
        const obj = {
            emails: email,
            passvords: passvord,
            id: Math.random().toString()
        }
        props.onSave(obj)
    }



  return (
    <div>
        <Input style={{border: emailValid === false ? "2px solid red": ""}} onChange={emailClickHendler} placeholder=" @gmail.com" type="text" />
        <Input style={{border: passvordValid === false ? "2px solid red": ""}} onChange={passvordClickHendler} placeholder=" passvord" />
        <Button onclick={onClickHendler} style={{color: isDsabled===false ? "red" : "" }} disabled={isDsabled} text={"ADD"}/>
    </div>
  )
}

export default Disabled
