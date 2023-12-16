import { atom } from 'recoil';

export const personalInformationAtom = atom({
  key: 'personalInformationAtom',
  default: {
    firstName: '',
    lastName: '',
    email: '',
    phone : '',
    country : '',
    city : '',
    placeOfBirth : '',   
    dateOfBirth : ''
  },
});
export const photoAtom = atom({
  key: 'photoAtom',
  default:  ''
});


export const dateOfBirthAtom = atom({
  key: 'dateOfBirthAtom',
  default:  null,
});


export const educationAtom = atom({
  key: 'educationAtom',
  default: {
    schoolName: '',
    degree: '',
    graduationYear : ''

  },
});
 
export const workExperienceAtom = atom({
  key: 'workExperienceAtom',
  default: {
    positionName: '',
    addressCompany: '',
    companyName: '',
    startDate : '', 
    endDate: '',
    jobDescription: '', 

  },
});

export const skillsAtom = atom({
  key: 'skills',
  default: '',
});

export const certificatesAtom = atom({
  key: 'certificatesAtom',
  default: [],
});

export const languagesAtom = atom({
  key: 'languagesAtom',
  default: [],
});

export const socialMediaAtom = atom({
  key: 'socialMediaAtom',
  default: { 
    linkedInLink: '', 
    facebookLink: '', 

  },
});



export const downloadFormatAtom = atom({
  key: 'downloadFormatAtom',
  default: 'json', // Default to JSON format
});

 