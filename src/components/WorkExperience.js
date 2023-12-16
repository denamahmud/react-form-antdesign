import React, { useState } from 'react';
import { Input, Button, Row, Col, DatePicker } from 'antd';
import { DeleteOutlined, PlusOutlined   } from '@ant-design/icons';
import NextPrevSubmitButtons from './NextPrevSubmitButtons';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const WorkExperience = ({workExperienceValidation, workExpChange, workExpAtom, currentStep, steps, handleNext, handlePrev, onFinish , handleStartDateChange}) => {

    const [workExpEntries, setWorkExpEntries] = useState([{ positionName: workExpAtom.positionName, addressCompany: workExpAtom.addressCompany, companyName: workExpAtom.companyName, startDate: workExpAtom.startDate, endDate : workExpAtom.endDate,  jobDescription : workExpAtom.jobDescription }]);

 
     const addWorkExperience = () => { 
                  

                    // Add a new empty experience entry to the form
                    setWorkExpEntries([...workExpEntries, { positionName: workExpAtom.positionName, addressCompany: workExpAtom.addressCompany, companyName: workExpAtom.companyName, startDate: workExpAtom.startDate, endDate : workExpAtom.endDate,  jobDescription : workExpAtom.jobDescription }]);
          };

          const removeWorkExperience = (index) => {
                    const updatedEntries = [...workExpEntries];
                    updatedEntries.splice(index, 1);
                    setWorkExpEntries(updatedEntries);
          };
 
         const [data, setDate] = useState({
                    positionName : null,
                    addressCompany : null,
                    companyName : null,
                    startDate : null,
                    endDate : null, 
                    jobDescription : null
          })

  return (

  <Formik initialValues={data} 
          validationSchema={workExperienceValidation} 
          onSubmit={ onFinish }>
           { 
     ({ errors, touched }) => (
        <Form>
    {workExpEntries.map((entry, index) => (
      <div key={index} className='responsiveForm'>

          <div className='input-container' > 
                    <label >Position Name</label>  
                    <input name='positionName' defaultValue={workExpEntries[0].positionName} placeholder='e.g. Graphic Designer' className='input-style' onChange={workExpChange}/>  
                    <ErrorMessage name='positionName' component="div" className="error-message"/>
                        
          </div>
          <div className='input-container' > 
                    <label >Address Company</label>
                    
                    <input  name='addressCompany' defaultValue={workExpEntries[0].addressCompany} placeholder='e.g. Suadi' className='input-style' onChange={workExpChange}/>

                    <ErrorMessage name='addressCompany' component="div" className="error-message"/>
          </div>
          <div className='input-container' > 
                    <label >Company Name</label> 
                    <input name='companyName' defaultValue={workExpEntries[0].companyName} placeholder='e.g. Zain'   className='input-style' onChange={workExpChange}/>

                   <ErrorMessage name='companyName' component="div" className="error-message"/>
          </div>
          <div className='input-container' style={{ width : '100%'}}  > 
          {
                    console.log('date ' + workExpEntries[0].startDate)
          }
              <div style={{width : '400px', margin : '0 auto'}}>
                   <label >Start Date</label> 
                   <Field as={DatePicker} name="startDate"  format="YYYY-MM-DD" placeholder="e.g. 2020-03-12"  defaultValue={workExpEntries[0].startDate} onChange={handleStartDateChange} className='input-style'  style={{  height : 33}} />
                       {/* <DatePicker defaultValue={workExpEntries[0].startDate} 
                              onChange={workExpChange}
                              style={{ width : '100%'}} 
                              format="YYYY-MM-DD"
                              placeholder="e.g. 2020-03-12" 
                              name='startDate' /> */}
                </div>
                 <ErrorMessage name='startDate' component="div" className="error-message"/>
          </div>
          <div className='input-container'   style={{ width : '100%'}}  > 
                
                <div style={{width : '400px', margin : '0 auto'}}>
                <label >End Date</label> 
                <Field as={DatePicker} name="endDate" className='input-style'  style={{  height : 33}} format="YYYY-MM-DD" placeholder="e.g. 2020-03-12" defaultValue={workExpEntries[0].endDate} onChange={handleStartDateChange}  />
                         {/* <DatePicker defaultValue={workExpEntries[0].endDate} onChange={workExpChange}
                              style={{ width : '100%'}} 
                              format="YYYY-MM-DD"
                              placeholder="e.g. 2020-03-12" 
                              name='endDate' /> */}
               </div>
              <ErrorMessage name='endDate' component="div" className="error-message"/>
          </div>
          <div className='input-container' > 
                   <label >Job Description</label>  
                    
                   <textarea name='jobDescription'  defaultValue={workExpEntries[0].jobDescription}  className='input-style' id='job-description' onChange={workExpChange}  />

                    <ErrorMessage name='jobDescription' component="div" className="error-message"/>
          </div>
           
     
              
              <Col style={{display : 'flex' , justifyContent : 'center', alignItems : 'center'}}>
                {index > 0 && (
                  <Button style={{color : '#f30000'}} type="link" onClick={() => removeWorkExperience(index)}>
                    Remove <DeleteOutlined/>
                  </Button>
                )}
              </Col>
            </div>
          ))}
 
          <div style={{ display: 'flex', justifyContent : 'center', width : '80%', margin : '20px auto'}}>
         
              
                <Button style={{ margin : '20px auto'}} type="dashed" onClick={addWorkExperience}>
                  Add More Experience <PlusOutlined />
                </Button>
           
             
          </div>
          <NextPrevSubmitButtons steps={steps} currentStep={currentStep} handleNext={handleNext} handlePrev={handlePrev}/>
        </Form>
           )
      }
    </Formik> 
  )
}

export default WorkExperience