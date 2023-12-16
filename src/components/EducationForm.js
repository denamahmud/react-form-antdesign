import React, { useState } from 'react';
import {  Input, Button, Row, Col, message, DatePicker, Space } from 'antd';
import { DeleteOutlined, PlusOutlined   } from '@ant-design/icons';
import NextPrevSubmitButtons from './NextPrevSubmitButtons';
import { ErrorMessage, Formik, Form, Field  } from 'formik'; 

const EducationForm = ({ educationValidation, eduChange, eduAtom, onFinish, currentStep, steps, handleNext, handlePrev  }) => {

  const [educationEntries, setEducationEntries] = useState([{ schoolName: eduAtom.schoolName, degree : eduAtom.degree, graduationYear : eduAtom.graduationYear   }]);

 

  const addEducationEntry = () => {
    setEducationEntries([...educationEntries, { schoolName: eduAtom.schoolName, degree : eduAtom.degree, graduationYear : eduAtom.graduationYear  }]);
  };

  const removeEducationEntry = (index) => {
      const updatedEntries = [...educationEntries];
      updatedEntries.splice(index, 1);
      setEducationEntries(updatedEntries);
  };

   const [data, setDate] = useState({
      schoolName : '',
      degree : '',
      graduationYear : ''
  })
  return (
    <Formik initialValues={data} validationSchema={educationValidation} 
    onSubmit={ onFinish }>
     { 
    () => (

    <Form>
      {educationEntries.map((entry, index) => (
        <div key={index} className='responsiveForm'>

           
          <div className='input-container' > 
                  <label >School Name</label>
                  <input name='schoolName' defaultValue={educationEntries[0].schoolName}  placeholder='e.g. John' className='input-style'onChange={eduChange}/>
                  <ErrorMessage name='schoolName' component="div" className="error-message"/>
           </div>
           <div className='input-container' > 
                 <label >Degree</label>
                 <input name='degree' defaultValue={educationEntries[0].degree} onChange={eduChange} placeholder='e.g. John' className='input-style'/>
                        <ErrorMessage name='degree' component="div" className="error-message"/>
           </div>
           <div className='input-container' style={{ width : '100%'}}  > 
                        <div style={{width : '400px', margin : '0 auto'}}>
                            <label>Graduation Year</label> 
                            <DatePicker className='input-style'  style={{  height : 33}} defaultValue={educationEntries[0].graduationYear} onChange={eduChange} placeholder='e.g. 2013' picker="year"  name='graduationYear' />
                        </div>
                        <ErrorMessage name='graduationYear' component="div" className="error-message"/>
           </div>
          
           

              <Col style={{display : 'flex' , justifyContent : 'center', alignItems : 'center'}}>
                {index > 0 && (
                  <Button style={{color : '#f30000'}} type="link" onClick={() => removeEducationEntry(index)}>
                    Remove <DeleteOutlined/>
                  </Button>
                )}
              </Col>
        </div>
      ))}

      <div style={{ display: 'flex', justifyContent : 'center', width : '80%', margin : '20px auto'}}>
     
          
            <Button style={{ margin : '20px auto'}} type="dashed" onClick={addEducationEntry}>
              Add More Education <PlusOutlined />
            </Button>
       
         
      </div>
      <NextPrevSubmitButtons steps={steps} currentStep={currentStep} handleNext={handleNext} handlePrev={handlePrev}/>
    </Form>

    )
}
</Formik>
  );
};

export default EducationForm;
