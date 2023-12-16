// PreviewComponent.js
import React, { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';  
import { Button, Radio } from 'antd';
import { certificatesAtom, dateOfBirthAtom, downloadFormatAtom, educationAtom, languagesAtom, personalInformationAtom, photoAtom, skillsAtom, socialMediaAtom, workExperienceAtom } from './atoms'; 
import { saveAs } from 'file-saver'; 
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const PreviewCV = ( ) => {

  const pdRef =  useRef()
  const formData = useRecoilValue(personalInformationAtom)  
  const date = useRecoilValue(dateOfBirthAtom)  
  const eduForm = useRecoilValue(educationAtom)    
  const skillForm = useRecoilValue(skillsAtom)    
  const workForm = useRecoilValue(workExperienceAtom)    
  const cerForm = useRecoilValue(certificatesAtom)    
  const lanForm = useRecoilValue(languagesAtom)    
  const socialForm = useRecoilValue(socialMediaAtom)    
  const photo = useRecoilValue(photoAtom)  
  
  
  const [personalInfo] = useRecoilState(personalInformationAtom)  
  const [dateDownload] = useRecoilState(dateOfBirthAtom)  
  const [eduFormDownload] = useRecoilState(educationAtom)    
  const [skillFormDownload] = useRecoilState(skillsAtom)    
  const [workFormDownload] = useRecoilState(workExperienceAtom)    
  const [cerFormDownload] = useRecoilState(certificatesAtom)    
  const [lanFormDownload] = useRecoilState(languagesAtom)    
  const [socialFormDownload] = useRecoilState(socialMediaAtom)    
  const [photoDownload] = useRecoilState(photoAtom)     
  const [downloadFormat, setDownloadFormat] = useRecoilState(downloadFormatAtom);

  const handleDownload = () => {

    const downloadData = {
      personalInfo, 
      photoDownload, dateDownload, skillFormDownload, eduFormDownload,workFormDownload, cerFormDownload, lanFormDownload, socialFormDownload
    };

    switch (downloadFormat) { 
      case 'pdf':
        downloadPDF(downloadData); 
        break;
      case 'DOCX':
          downloadDocx(downloadData); 
        break;
      default:
        console.error('Invalid download format');
    }
  }; 

const downloadDocx =  (data ) => {
       const jsonData = JSON.stringify(data, null, 2);
       const blob = new Blob([jsonData], { type: 'application/json' }); 
       saveAs(blob, "testFile.docx");
}
 


const downloadPDF = (data ) => {
    
           
        const input = pdRef.current
        html2canvas(input).then((canvas) => {
           const imgData = canvas.toDataURL('image/png')
           const pdf = new jsPDF('p', 'mm', 'a4', true)
           const pdfWidth = pdf.internal.pageSize.getWidth()
           const pdfHeight = pdf.internal.pageSize.getHeight()
           const imgWidth = canvas.width
           const imgHeight = canvas.height
           const ratio = Math.min(pdfWidth/ imgWidth, pdfHeight / imgHeight)
           const imgX = (pdfWidth - imgWidth * ratio ) / 2
           const imgY = 30
           pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
           pdf.save('cv.pdf')
        })
 

   

}
  return (
    <div >
      <div ref={pdRef} className='templateContainer' >
             
                   
                <h3 className='fullName'>{formData.firstName}  {formData.lastName}</h3>
            
  
  
               <div className='templatContnet'  >
                    <div className='leftSide'>
                              <div className='imageContainer' >
                                      
                                   <img className='image' src={photo} alt='image'/>
                             </div>
                      
                             <div className='personalSkills' >
                                          
                                       <div className='personalInfo' > 
                                                  <h3 className='title'>Personal Information :-</h3>
                                                  <p className='content'>{formData.email}</p>
                                                  <p className='content'>{formData.phone}</p>
                                                  <p className='content'>{formData.country} {formData.city}</p> 
                                                  <p className='content'>{formData.placeOfBirth}</p>
                                                  {/* <p className='content'>{date.toString().slice(4, 17)}</p>   */}
                                               
  
                                        </div>
                                      
                                         <div className='skills' >
                                                 <h3 className='title' >Skills</h3>
                                                  {
                                                            skillForm.map(skill => (
                                                                     <p className='tags content'>{skill}</p>
                                                            ))
                                                   }
                                          </div>
  
                                          
                             </div>
                      </div>
  
                      <div className='rightSide' >
                              <div className='education' >
                                       <h3 className='title'>Education :-</h3>
                                       <p className='content'>{eduForm.schoolName}</p>
                                       <p className='content'>{eduForm.degree}</p> 
                                                  {/* <p>{eduForm.graduationYear.toString().slice(11, 16)}</p>   */}
                                                  
                                  </div>
                                <div className='workExp'>
                                        <h3 className='title'>Work Experiences</h3>
                                        <p className='content'>{workForm.positionName}</p>
                                        <p className='content'>{workForm.companyName}</p>
                                        <p className='content'>{workForm.addressCompany}</p>
                                        {/* <p>{workForm.startDate}</p>
                                        <p>{workForm.endDate}</p> */}
                                        <p className='content'>{workForm.jobDescription}</p>
                                </div>
                                <div className='miscellaneous' >
                                        <p className='content' style={{fontWeight : 'bold', marginTop : 20}}>Certificates </p>
                                        <p className='content'> {cerForm.map(item => <p>{item}</p>)}</p>
                                        <p className='content' style={{fontWeight : 'bold'}}>Languages   </p>
                                        <p className='content'>{lanForm.map(item => <p>{item}</p> )}</p>
                                        <p className='content' style={{fontWeight : 'bold'}}>LinkedIn  </p>
                                        <p className='content'>{socialForm.linkedInLink}</p>
                                        <p className='content' style={{fontWeight : 'bold'}}>Facebook  </p>
                                        <p className='content'>{socialForm.facebookLink}</p>
                                </div>
                      </div>
                </div>
      </div>



         
         <div style={{display : 'flex', justifyContent : 'center', padding : 50}}>
                    <Radio.Group onChange={(e) => setDownloadFormat(e.target.value)} value={downloadFormat}> 
                                        <Radio value="pdf">PDF</Radio>
                                        <Radio value="DOCX">DOCX</Radio>
                              </Radio.Group>
                    <Button type='primary' onClick={handleDownload}>Download CV</Button>
                 
         </div>
    </div>
  );
};

export default PreviewCV;