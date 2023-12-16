import { Button } from "antd"

 

const FinishComponet = ( {setPreview} ) => {

 
  return (
    <div style={{display : 'flex' , flexDirection : 'column',  placeItems: 'center' , padding : 50}}>
           <h3 className="responsiveWord" style={{ margin : '30px', textAlign : 'center', color : '#f48498'}}>  Congrats your cv is ready</h3>
         
 

           <Button  type='primary' onClick={()=>setPreview(true)} style={{ width : 100}}> Preview</Button>

        
    </div>
  )
}

export default FinishComponet