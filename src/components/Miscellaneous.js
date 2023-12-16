import React, { useState } from 'react';
import { Input, Tag, Form  } from 'antd'; 
import NextPrevSubmitButtons from './NextPrevSubmitButtons';  

const Miscellaneous = ({ handleAddCertificate , cerAtom, lanAtom, handleAddLanguage, socialChange, currentStep, steps, handleNext, handlePrev, form, onFinish, socialAtom }) => {


          // Certificate


          const [certificateTags, setCertificateTags] = useState(cerAtom);
          const [inputValueCertificate, setInputValueCertificate] = useState('');

          const handleCertificate = (e) => {
                    setInputValueCertificate(e.target.value);
          };
      
          const addCertificate = () => {
                    if (inputValueCertificate.trim() && !certificateTags.includes(inputValueCertificate)) {
                              setCertificateTags((prevCertificates) => ([...prevCertificates, inputValueCertificate]));
                             
                              setInputValueCertificate('');
                              handleAddCertificate(inputValueCertificate);
                    }
          };

          const removeCertificate = (tag) => {
                    const updatedTags = certificateTags.filter((t) => t !== tag);
                    setCertificateTags(updatedTags);
          };

 
 
    

          // Languages



          const [languagesTags, setLanguagesTags] = useState(lanAtom); 
          const [inputValueLanguages, setInputValueLanguages] = useState('');

          const handleLanguages = (e) => {
                    setInputValueLanguages(e.target.value);
          };
         
          const addLanguages = () => {
                if (inputValueLanguages.trim() && !languagesTags.includes(inputValueLanguages)) {
                    setLanguagesTags((prevLanguages) => ([...prevLanguages, inputValueLanguages]));
                    setInputValueCertificate('');
                    handleAddLanguage(inputValueLanguages)
                }
          };

          const removeLanguages = (tag) => {
                    const updatedTags = languagesTags.filter((t) => t !== tag);
                    setLanguagesTags(updatedTags);
          };
        
 
      
  return (
    <Form  
          onFinish={onFinish} 
          style={{
                    display : 'flex',
                    flexDirection : 'column',
                    justifyContent : 'center',
                    margin : '30px'
          }}
        > 
     <div>
         <label>Certificate</label>
         <div style={{ display : 'flex'}}>
            <input
                    className='input-style'
                    style={{ width : '100%'}}
                    name='certificates'
                    value={inputValueCertificate}
                    onChange={handleCertificate} 
                    placeholder="e.g. Udemy / Autocad"
                    />
                    <div style={{ backgroundColor : '#847577', color : '#fff', width: 40, height : 40, marginLeft : 10, textAlign : 'center', fontSize : 20, cursor : 'pointer', borderRadius : 5 }} onClick={addCertificate}>+</div>
         </div>
        <div style={{ marginBottom : 15, marginTop : 5  }}>
          {certificateTags.map((tag) => (
            <Tag style={{backgroundColor : '#847577', color : '#fff' }} key={certificateTags} closable onClose={() => removeCertificate(certificateTags)}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>



      <div>
         <label>Languages</label>
         <div style={{ display : 'flex'}}>
                    <input
                             className='input-style'
                             style={{ width : '100%'}}
                              name='languages'
                              value={inputValueLanguages}
                              onChange={handleLanguages} 
                              placeholder="e.g. English"
                    />
                    <div style={{ backgroundColor : '#847577', color : '#fff', width: 40, height : 40, marginLeft : 10, textAlign : 'center', fontSize : 20, cursor : 'pointer', borderRadius : 5 }} onClick={addLanguages}>+</div>
         </div>
        <div style={{ marginBottom : 15, marginTop : 5 }}>
          {languagesTags.map((tag) => (
            <Tag style={{backgroundColor : '#847577', color : '#fff'}} key={tag} closable onClose={() => removeLanguages(tag)}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>


          <div >
                   <label>LinkedIn Link</label>
                    <input    className='input-style'
                    style={{ width : '100%'}} defaultValue={socialAtom.linkedInLink} name='linkedInLink' onChange={socialChange} placeholder='e.g. https://www.linkedin.com/in/johnpeter'/>
          </div>
          <div style={{marginTop : '10px'}}>
                   <label>Facebook Link</label>
                    <input    className='input-style'
                    style={{ width : '100%'}} defaultValue={socialAtom.facebookLink} name='facebookLink' onChange={socialChange} placeholder='e.g. https://github.com/johnpeter'/>
          </div>
    
    
          <NextPrevSubmitButtons steps={steps} currentStep={currentStep} handleNext={handleNext} handlePrev={handlePrev}/>
        </Form>
  )
}

export default Miscellaneous