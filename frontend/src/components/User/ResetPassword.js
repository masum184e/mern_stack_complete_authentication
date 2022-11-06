import { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import styles from './authentication.module.css'
import axios from 'axios'

export default function ResetPassword() {
  const navigate=useNavigate();
  const { id,token }=useParams();
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
    if(data.new_pwd && data.confirm_pwd){
      const res=await axios.post(`http://localhost:4000/reset_pwd/${id}/${token}`,data)
      if(res.data.status===true){
        setData({})
        setError({status:true,color:"green",message:res.data.message})
        setTimeout(()=>{navigate('/login')}, 1000);
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
    <div className={styles.reset_pwd}>
      <form onSubmit={form_handle} action="" method="post">
        <div>
          <label htmlFor="">New Password</label>
          <input type="pwd" name="new_pwd" value={data.new_pwd || ''}  onChange={input_handle}  />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input type="pwd" name="confirm_pwd" value={data.confirm_pwd || ''}  onChange={input_handle}  />
        </div>
        <input type="submit" value="Reset Password" />
        {(err.status)?<p style={{color:err.color}}>{err.message}</p>:''}
      </form>
    </div>
    </>
  )
}
