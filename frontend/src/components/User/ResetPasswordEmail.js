import { useState } from 'react'
import styles from './authentication.module.css'
import axios from 'axios'

export default function ResetPasswordEmail() {
  const [data,setData]=useState({})
  const [err,setError]=useState({
    status:false,
    color:'',
    message:'' 
  })
  const input_handle=e=>{
    setData(values => ({...values, [e.target.name]: e.target.value}))
  }
  const form_handle=async(e)=>{
    e.preventDefault()
    if(data.email){
      const res=await axios.post("http://localhost:4000/reset_pwd_send_email",data);
      console.log(res)
      if(res.data.status===true){
        setData({})
        setError({status:true,color:"green",message:res.data.message})
      }
      if(res.data.status===false){
        setError({status:true,color:"red",message:res.data.message})
      }
    }else{
      setError({status:true,color:'red',message:'Please Provide a Valid Email'})
    }
  }
  return (
    <>
      <div className={styles.reset_pwd_email}>
        <form onSubmit={form_handle} action="" method="post">
        <div>
          <label htmlFor="">Enter Your Email</label>
          <input type="email" name="email" value={data.email || ''}  onChange={input_handle}  />
        </div>
        <input type="submit" value="Send Email" />
        {(err.status)?<p style={{color:err.color}}>{err.message}</p>:''}
        </form>
      </div>
    </>
  )
}
