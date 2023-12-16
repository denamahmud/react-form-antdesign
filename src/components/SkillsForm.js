import React, { useState } from 'react';
import {  Form, Input ,Tag } from 'antd'; 
import NextPrevSubmitButtons from './NextPrevSubmitButtons'; 
import { Formik,   Field, ErrorMessage } from 'formik';

const SkillsForms = ({ skillsValidation, skillAtom, handleAddSkill , currentStep, steps, handleNext, handlePrev,  onFinish }) => {
   
          const [tags, setTags] = useState(skillAtom);  
          const [inputValue, setInputValue] = useState('');

          const handleInputChange = (e) => {
                    setInputValue(e.target.value);
           };
            

          const handleAddTag = () => {
                    if (inputValue.trim() !== '' && !tags.includes(inputValue)) {
                              setTags((prevSkills) => ([...prevSkills, inputValue]));
                              setInputValue('');
                              handleAddSkill(inputValue);
                    }
                 


          };

          const handleRemoveTag = (removedSkill) => {
                   setTags((prevSkills) => prevSkills.filter((skill) => skill !== removedSkill));
          };


          const [data, setDate] = useState({
                skills : tags
                   
          })
  return (
 
  <Form className='responsiveForm'  onFinish={onFinish}>
           
     <div >
        <label>Skills</label>  
         <div style={{ display : 'flex'}}> 
 
 
                   <input name='skills' placeholder='e.g. Photoshop' value={inputValue} className='input-style' onChange={handleInputChange}/>
  
            
                    <div style={{ backgroundColor : '#847577', color : '#fff', width: 40, height : 40, marginLeft : 10, textAlign : 'center', fontSize : 30, cursor : 'pointer', borderRadius : 5 }} onClick={handleAddTag}>+</div>
         </div>
          
        
      
        <div style={{ marginBottom : 15, marginTop : 5  }}> 
         
           
          {tags && tags.map((tag) => (
            <Tag style={{backgroundColor : '#847577', color : '#fff'}} key={tag} closable onClose={() => handleRemoveTag(tag)}>
              {tag}
              
            </Tag>
          ))}
        </div>
      </div>
 
    
         
    <NextPrevSubmitButtons steps={steps} currentStep={currentStep} handleNext={handleNext} handlePrev={handlePrev}/>
      </Form>

 
  )
}

export default SkillsForms