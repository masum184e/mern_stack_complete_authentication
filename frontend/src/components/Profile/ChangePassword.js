import styles from './ChangePassword.module.css'
import { useState } from 'react'
import axios from 'axios'
import { getToken } from '../../store/cookie'

export default function ChangePassword() {
  const [data,setData]=useState({})
  const [err,setError]=useState({
    status:false,
    color:'',
    message:''
  })
  const input_handle=e=>{
    setData(values => ({...values, [e.target.name]: e.target.value}))
  }
  const handle_chng_pwd=async(e)=>{
    e.preventDefault()
    if(data.newpwd && data.oldpwd){
      const res=await axios.post("http://localhost:4000/change_pwd",data,{"headers":{'authorization': `Bearer ${getToken()}`}})
      if(res.data.status===true){
        setData({})
        setError({status:true,color:"green",message:res.data.message})
      }
      if(res.data.status===false){
        setError({status:true,color:"red",message:res.data.message})
      }
    }else{
      setError({status:true,color:'red',message:'All Fields Are Required'})
    }
  }
  return (
    <>
    <div className={styles.changepwd}>
    <form action="" method="post" onSubmit={handle_chng_pwd}>
      <div>
        <label htmlFor="">Old Password</label>
        <input type="password" name="oldpwd" value={data.oldpwd || ""}  onChange={input_handle}  />
      </div>
      <div>
        <label htmlFor="">New Password</label>
        <input type="password" name="newpwd" value={data.newpwd || ""}  onChange={input_handle}  />
      </div>
      <input type="submit" value="Change Password" />
      {(err.status)?<p style={{color:err.color}}>{err.message}</p>:''}
    </form>
  </div>
</>
  )
}
