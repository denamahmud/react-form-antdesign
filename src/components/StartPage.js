import { Button } from 'antd'
import React from 'react'

const StartPage = ({ starting, setStarting }) => {
  return (
    <div style={{ height : '100vh' , display : 'flex', flexDirection : 'column' , justifyContent : 'center',  alignItems : 'center', backgroundColor : '#edf2f4'}}> 


          <div className='responsiveWord' style={{ marginBottom : 30,  color :  '#f48498'  }} >Welocme to Our Cv Builder</div>

          <Button type='primary' onClick={()=>setStarting(true)}>{starting}Lets Start</Button>
    </div>
  )
}
export default StartPage
