import React, { useRef, useState } from 'react';
import { Input,  DatePicker,   Button} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import NextPrevSubmitButtons from './NextPrevSubmitButtons'; 
import { ErrorMessage, Field,Form, Formik } from 'formik'; 
import { useRecoilValue } from 'recoil';
import { personalInformationAtom } from './atoms';

const PersonalInformation = ({  personalInformationValidation, handlePhoto, handlePerInfo, perInfoChange, perInfoAtom, currentStep, steps, handleNext, handlePrev,  onFinish }) =>{
          
          
         
          const fileInputRef = useRef(null);

          const handleButtonClick = () => {
          
            fileInputRef.current.click();
          };
  

          const [data, setDate] = useState({
                    firstName : '',
                    lastName : '',
                    email : '',
                    phone : null,
                    country : '',
                    city : '',
                    placeOfBirth : '',
                    dateOfBirth : ''
           })
    
                     
return(
   <Formik initialValues={data} 
   validationSchema={personalInformationValidation} 
   onSubmit={
          setTimeout(() => {
                    onFinish()
          }, 5000)
   }
  >
  
 
       <Form className='responsiveForm'>
 

                    <div className='input-container' > 
                        <label >*First Name</label>
                         <Field 
                               name='firstName'  
                              value={perInfoAtom.firstName} 
                              placeholder='e.g. John' 
                              className='input-style'  
                              onChange={perInfoChange} 
                              />
 
                    </div>
                   
                    <div className='input-container'>
                              <label>*Last Name</label>
                              <Field name='lastName' className='input-style' value={perInfoAtom.lastName} placeholder='e.g. Peter' 
                              onChange={perInfoChange} />
                              <ErrorMessage  name='lastName' component="div" className="error-message" /> 
                    </div>
                    <div className='input-container'>
                              <label>*Email</label>
                              <Field name='email' value={perInfoAtom.email} placeholder='e.g. john@example.com'  className='input-style'  onChange={perInfoChange} />
                              <ErrorMessage name='email' component="div" className="error-message"/> 
                    </div>
                    <div className='input-container'>
                              <label>*Phone</label>
                              <Field name='phone' value={perInfoAtom.phone} placeholder='e.g. 07700000000'   className='input-style'  onChange={perInfoChange}/>
                              <ErrorMessage name='phone' component="div" className="error-message"/> 
                    </div>
                    <div className='input-container'>
                              <label>*County</label> 
                              <Field name='country' value={perInfoAtom.country} placeholder='e.g. United States'   className='input-style'  onChange={perInfoChange}/>
                              <ErrorMessage name='country' component="div" className="error-message"/> 
                    </div> 
                    <div className='input-container'>
                              <label>*City</label>
                              <Field name='city' value={perInfoAtom.city} placeholder='e.g. Texas' className='input-style'  onChange={perInfoChange}/>
                              <ErrorMessage name='city' component="div" className="error-message"/> 
                    </div>
                    <div className='input-container'>
                              <label>*Place of Birth</label>
                              <Field name='placeOfBirth' value={perInfoAtom.placeOfBirth} placeholder='e.g. Newyork' className='input-style'  onChange={perInfoChange}/>
                              <ErrorMessage name='placeOfBirth' component="div" className="error-message"/>
                    </div> 
{/*            
                    <div className='input-container' style={{ width : '100%'}}  > 
                        <div style={{width : '400px', margin : '0 auto'}}>
                            <label>Graduation Year</label> 
                            <DatePicker className='input-style'  style={{  height : 33}} defaultValue={dateOfBirth} onChange={perInfoChange} placeholder='e.g. 2013'  name='graduationYear' />
                        </div>
                        <ErrorMessage name='graduationYear' component="div" className="error-message"/>
                    </div>
                               */}
                          
                    <div className='uplaodImage' onClick={handleButtonClick}>
                              <label style={{marginRight : '10px', color :'#444'}}>Upload Photo</label>
                              <div>
                                  <input ref={fileInputRef} accept="image/*" type='file' onChange={handlePhoto} style={{ display: 'none'  }}/>
                              </div>
                             <UploadOutlined style={{ fontSize : 30, color: '#444'}} >Upload Image</UploadOutlined>
                                  
                   </div>
                    
                   <NextPrevSubmitButtons steps={steps} currentStep={currentStep} handleNext={handleNext} handlePrev={handlePrev}/>
                 </Form>
  
       
   </Formik>
    )
        
 }

export default PersonalInformation