import { Steps  } from 'antd';  
import { useState } from 'react'; 
import PersonalInformation from './PersonalInformation';
import EducationForm from './EducationForm';
import WorkExperience from './WorkExperience';
import SkillsForms from './SkillsForm';
import Miscellaneous from './Miscellaneous';
import StartPage from './StartPage';
import './App.css'
import { useRecoilState } from 'recoil';
import { personalInformationAtom, educationAtom, workExperienceAtom, skillsAtom, certificatesAtom, languagesAtom, socialMediaAtom, dateOfBirthAtom, photoAtom, counterState  } from './components/atoms'; 
import FinishComponet from './components/FinishComponet'; 
import * as Yup from 'yup';
import PreviewCV from './PreviewCV'; 

function Home() {

  
  // Start Validation Sections

  // Personal Informaion Validation

  const personalInformationValidation = Yup.object({
      firstName : Yup.string().required('first name is required'),
      lastName : Yup.string().required('last name is required'),
      email : Yup.string().email().required('email is required'),
      phone : Yup.number().typeError('must be like this 07700000000')
      .positive('Must be a positive number.'),
      country : Yup.string().required('City is required '),
      city : Yup.string().required('City is required '),
      placeOfBirth : Yup.string().required('Place of birth is required '),
      dateOfBirth : Yup.string().required('Date of birthday is required '),
  })

 
  
   // education Validation

   const educationValidation = Yup.object({
      schoolName : Yup.string().required(),
      degree : Yup.string().required(),
      graduationYear : Yup.string().required(),
   
  })
 
  // work Experience Validation
 
    const workExperienceValidation = Yup.object({
      positionName : Yup.string().required(),
      addressCompany : Yup.string().required(),
      companyName : Yup.string().required(), 
      jobDescription : Yup.string().required()
  })

  // skills Validation

   const skillsValidation = Yup.object({
      skills : Yup.array().min(5), 
  })

// End Validation Sections

// Start Steps
const steps = [
    {
      title :'step 1'
    },
    {
      title :'step 2'
    },
    {
      title :'step 3'
    },

    {
      title :'step 4'
    },
    {
      title :'step 5'
    },
    {
      title :'step 6'
    }, 
  
]

  const [currentStep, setCurrentStep] = useState(0); 
  const [submittedPerInfo, setSubmittedPerInfo] = useState(false)
  const [submittedEdu, setSubmittedEdu] = useState(false)
  const [submittedWork, setSubmittedWork] = useState(false)
  const [submittedSkill, setSubmittedSkill] = useState(false)
  const [submittedMis, setSubmittedMis] = useState(false)
   

    //  Start Handle Next & Prev Buttons 
 
    const handleNext = () => {
      setCurrentStep(currentStep + 1) 
          // if(submittedPerInfo){
          //   setCurrentStep(currentStep + 1) 
          // }
    };
        
    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };
    //  End Handle Next & Prev Buttons 



    // End Steps
 
    

 

  // Start PerInfoAtom
  const [perInfoAtom, setPerInfoAtom] = useRecoilState(personalInformationAtom); 
  const [dateBirth, setDateBirth] = useRecoilState(dateOfBirthAtom); 
  const [photo, setPhoto] = useRecoilState(photoAtom); 


      
  const perInfoChange = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setPerInfoAtom((prevFormData) => ({ ...prevFormData, [name]: value }));
    
    }
    
  };
  
 
function handlePhoto(e) {
    console.log(e.target.files);
    setPhoto(URL.createObjectURL(e.target.files[0]));
} 
const onFinishPersonalInformation =  (values) => {
  setPerInfoAtom(values) 
  
  if(values){
    setSubmittedPerInfo(true)  
      }

 }
  // End PerInfoAtom

   // Start eduAtom
   const [eduAtom, setEduAtom] = useRecoilState(educationAtom);   
          
   const eduChange = (e) => {
     if (e && e.target) {
       const { name, value } = e.target;
       setEduAtom((prevFormData) => ({ ...prevFormData, [name]: value }));
     }
     
   };
 
  //  const handleDateChange = (date) => {
  //     setGrad((prev) => ({
  //       ...prev,
  //       graduationYear: date,
  //     }));
  // };
  const onFinishEducationForm = (values) => {
    setEduAtom(values) 
    
    if(values){
      setSubmittedEdu(true)  
      setCurrentStep(2)
     }
    
  }

   // End eduAtom

    // Start workExpAtom
   const [workExpAtom, setWorkExpAtom] = useRecoilState(workExperienceAtom); 
          
    const workExpChange = (e, i) => {
       if (e && e.target) {
         const { name, value } = e.target;
         setWorkExpAtom((prevFormData) => ({ ...prevFormData, [name]: value }));
      
       }
       
     };

      const handleStartDateChange = (date) => {
        setWorkExpAtom((prev) => ({
        ...prev,
        startDate: date,
      }));
  };
  const onFinishWorkExperience = (values) => {
    setWorkExpAtom(values)

    if(values){
      setSubmittedWork(true)  
      setCurrentStep(3)
     }
   

  }

  // End workExpAtom
   // Start skillAtom
  const [skillAtom, setSkillAtom] = useRecoilState(skillsAtom); 
          
  const handleAddSkill = (newSkill) => {
    setSkillAtom((prevSkills) => [...prevSkills, newSkill]);
  };


  const onFinishSkillsForm = (values) => {
    
    setSkillAtom(values)
    if(values){
      setSubmittedSkill(true)  
      setCurrentStep(4)
    } 
 
  }

   // End skillAtom
   // Start cerAtom
   const [cerAtom, setCerAtom] = useRecoilState(certificatesAtom); 
   const [lanAtom, setLanAtom] = useRecoilState(languagesAtom); 
   const [socialAtom, setSocialAtom] = useRecoilState(socialMediaAtom); 
          
   const handleAddCertificate = (newCertificate) => {   
       setCerAtom((prevCertificates) => ([...prevCertificates, newCertificate]));
       
   };
   const handleAddLanguage = (newLanguage) => {
       setLanAtom((prevLanguage) => [...prevLanguage, newLanguage]);
   };
   const socialChange = (e) => {

      if (e && e.target) {
          const { name, value } = e.target;
          setSocialAtom((prevFormData) => ({ ...prevFormData, [name]: value }));
      }
    
  };


  const onFinishMiscellaneous = (values) => {
    setSocialAtom(values)
    setCurrentStep(5) 
    setSubmittedMis(true)

  }
   // End cerAtom
 
  const [starting, setStarting] = useState(false)
  const [preview, setPreview] = useState(false)

  // Forms Array
  const forms = [
    <PersonalInformation  
    personalInformationValidation={personalInformationValidation}
    handlePhoto={handlePhoto} perInfoChange={perInfoChange} perInfoAtom={perInfoAtom} onFinish={onFinishPersonalInformation} setCurrentStep={setCurrentStep} currentStep={currentStep} steps={steps} handleNext={handleNext} handlePrev={handlePrev}    />,

    <EducationForm educationValidation={educationValidation} eduChange={eduChange} eduAtom={eduAtom}  onFinish={onFinishEducationForm} setCurrentStep={setCurrentStep} currentStep={currentStep} steps={steps} handleNext={handleNext} handlePrev={handlePrev}/>,

    <WorkExperience workExperienceValidation={workExperienceValidation} workExpChange={workExpChange} workExpAtom={workExpAtom} onFinish={onFinishWorkExperience} setCurrentStep={setCurrentStep} currentStep={currentStep} steps={steps} handleNext={handleNext} handlePrev={handlePrev} handleStartDateChange={handleStartDateChange}/>,

    <SkillsForms skillsValidation={skillsValidation} skillAtom={skillAtom} handleAddSkill={handleAddSkill} onFinish={onFinishSkillsForm} setCurrentStep={setCurrentStep} currentStep={currentStep} steps={steps} handleNext={handleNext} handlePrev={handlePrev}/>,

    <Miscellaneous cerAtom={cerAtom} handleAddCertificate={handleAddCertificate} lanAtom={lanAtom} socialChange={socialChange} handleAddLanguage={handleAddLanguage}  onFinish={onFinishMiscellaneous} setCurrentStep={setCurrentStep} currentStep={currentStep} steps={steps} handleNext={handleNext} handlePrev={handlePrev} socialAtom={socialAtom}/>,

    <FinishComponet date={dateBirth}  setPreview={setPreview}/>
    
  ]



  // Check Steps
  const isStepDisabled = (stepNumber) => {
    if(stepNumber === 0){
      return perInfoAtom
    }
    if(stepNumber === 1){
      return perInfoAtom === null || eduAtom 
    }
    if(stepNumber === 2){
      return eduAtom === null || workExpAtom 
    }
    if(stepNumber === 3){
      return workExpAtom === null || skillAtom
    }
    if(stepNumber === 4){
      return skillAtom === null || socialAtom
    }
    if(stepNumber === 5){
      return socialAtom === null || 'Finish'
    }
   
  }

 
 
  return (
   <div className='App'> 
       {
        !starting ? 
        <StartPage setStarting={setStarting}/> :
         !preview ? <div   >
        
           <h1 className='responsiveWord' style={{  color : '#f48498' , textAlign : 'center', paddingTop : 50 }}>Enter Your Information</h1>
           <Steps 
           current={currentStep}
           onChange={setCurrentStep} 
           style={{ padding : '50px 20px' , backgroundColor : '#fff', borderBottom: '1px solid #e5e6e4'}}>
               
               <Steps.Step title='Personal Info' disabled={isStepDisabled(0)} />
               <Steps.Step title='Education'  disabled={isStepDisabled(1)}/>
               <Steps.Step title='Work Experience' disabled={isStepDisabled(2)}/> 
               <Steps.Step title='Skills' disabled={isStepDisabled(3)}/> 
               <Steps.Step title='Miscellaneous' disabled={isStepDisabled(4)}/>
               <Steps.Step title='Finish' disabled={isStepDisabled(5)}/>
                   
           </Steps>
           { forms[currentStep] }
      </div> : <PreviewCV/>
       }

     
 
        
   </div>
       
  );
}



export default Home;
