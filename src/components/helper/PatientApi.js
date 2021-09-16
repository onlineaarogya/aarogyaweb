import {checkToken} from './LoginCheck'



// function for get patient register
const getPatientRegister = async data => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };
  const response = await fetch(
    process.env.NEXT_PUBLIC_PATIENT_API_URL + 'auth/register',
    requestOptions,
  );
  const regResponse = await response.json();
  return regResponse;
};

// function for patient login and get otp
const getPatientLogin = async data => {
  var raw = JSON.stringify({ mobile: '8520021995' });
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };
  const response = await fetch(
    process.env.NEXT_PUBLIC_PATIENT_API_URL + 'auth/login',
    requestOptions,
  );
  const regResponse = await response.json();
  return regResponse;
};

// function for patient login and get otp verification 
const getPatientLoginOtpVerification = async data => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };
  const response = await fetch(
    process.env.NEXT_PUBLIC_PATIENT_API_URL + 'auth/verifyOtp',
    requestOptions,
  );
  const regResponse = await response.json();
  return regResponse;
};


// function for Get Family Doctor Details by Uid 
const getFamilyDoctorDetailByUid = async data => { 

  var myHeaders = new Headers();

   const loginToken = checkToken();
   var myHeaders = new Headers();
   if(loginToken)
    {
       var bearerTokern = loginToken.access_token; 
    }
    else
    {
      return(1);
    }

  myHeaders.append("Authorization",`Bearer ${bearerTokern}`)

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(
      process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/getFamilyDoctor',
      requestOptions,
    );

    const regResponse = await response.json();
    console.log("My Response",regResponse);

    return regResponse;
};

 // Function for fetching Family Dependent by ID 
const getFamilyDependentByUid = async data => { 

  const loginToken = checkToken();
   var myHeaders = new Headers();
   if(loginToken)
    {
       var bearerTokern = loginToken.access_token; 
    }
    else
    {
      return(1);
    }

  myHeaders.append("Authorization",`Bearer ${bearerTokern}`)

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(
      process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/dependents',
      requestOptions,
    );

    const regResponse = await response.json();
    console.log("My Response",regResponse);

    return regResponse;
};


// Get Medical History of Dependent 

const getDependentMedicalHistory = async data => { 

  const loginToken = checkToken();
   var myHeaders = new Headers();
   if(loginToken)
    {
       var bearerTokern = loginToken.access_token; 
    }
    else
    {
      return(1);
    }

  myHeaders.append("Authorization",`Bearer ${bearerTokern}`)

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(
      process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/getMedicalHistory',
      requestOptions,
    );

    const regResponse = await response.json();
    console.log("My Response",regResponse);

    return regResponse;
};

// Function For Add Family Member Dependent

const addFamilyMember = async data => { 

  console.log("API Data called here ",data);

   const loginToken = checkToken();
   var myHeaders = new Headers();
   if(loginToken)
    {
       var bearerTokern = loginToken.access_token; 
    }
    else
    {
      return(1);
    }
  
   myHeaders.append("Content-Type", "application/json");
   myHeaders.append("Authorization",`Bearer ${bearerTokern}`)

   var recordData = JSON.stringify({
     "relationship_id": 3,
     "title": data.title,
     "first_name": data.first_name,
     "middle_name":data.middle_name,
     "last_name": data.last_name,
     "blood_group_id": data.blood_group,
     "gender": data.gender,
     "dob": data.dob,
     "mobile": data.mobile,
     "height": data.height,
     "weight": data.weight,
     "address": data.address,
     "city": data.city,
     "state_id": data.state,
     "pincode": data.pinCode,
     "medical_problems": [
      "test",
      "test2"
    ],
    "allergies": [
      "Api"
    ],
    "procedures": [],
    "lifestyles": [],
    "diagnosis": [
      "super"
    ],
    "findings": [
      "first"
    ]
   });
   const requestOptions = {
     method: 'POST',
     headers:myHeaders,
     body: recordData,
     redirect: 'follow'
   };
    const response = await fetch(
       process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/addEditDependent',
       requestOptions,
     );
     const regResponse = await response.json();
     return regResponse;
};


// Function For Add Family Doctor
const addFamilyDoctorDetail = async data => { 

   console.log("API Data called here ",data);
 
    const loginToken = checkToken();
    var myHeaders = new Headers();
    if(loginToken)
     {
        var bearerTokern = loginToken.access_token; 
     }
     else
     {
       return(1);
     }
   
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization",`Bearer ${bearerTokern}`)

    var recordData = JSON.stringify({
      "title": data.title,
      "first_name": data.first_name,
      "middle_name":data.middle_name,
      "last_name": data.last_name,
      "email": data.email,
      "mobile": data.mobile,
      "gender": data.gender,
      "address": data.address,
      "city": data.city,
      "state_id": data.state,
      "pincode": data.pinCode,
      "speciality_id": data.specialist,
      "med_reg_no": "74txi4783ewk32",
      "yrs_of_practice": data.experience,
    
    });

    const requestOptions = {
      method: 'POST',
      headers:myHeaders,
      body: recordData,
      redirect: 'follow'
    };
     const response = await fetch(
        process.env.NEXT_PUBLIC_PATIENT_API_URL + 'profile/addEditFamilyDoctor',
        requestOptions,
      );
      const regResponse = await response.json();
      return regResponse;
 };


 // Fetch Data for Subscription Page 
 const getSubscriptionDetails = async data => { 

  const loginToken = checkToken();
   var myHeaders = new Headers();
   if(loginToken)
    {
       var bearerTokern = loginToken.access_token; 
    }
    else
    {
      return(1);
    }

  myHeaders.append("Authorization",`Bearer ${bearerTokern}`)

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(
     "https://cms.onlineaarogya.com/api/get-all-subscription"
    );

    const regResponse = await response.json();
    console.log("My Response",regResponse);

    return regResponse;
};

// Code for Resend OTP 

const resendOtpRequest = async data => { 

  var raw = JSON.stringify({
    mobile: "8121272954",
    "vtype": "register_otp"
  });

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: raw,
  };
  const response = await fetch(
    process.env.NEXT_PUBLIC_PATIENT_API_URL + 'auth/resendOtp',
    requestOptions,
  );
  const regResponse = await response.json();
  return regResponse;
  }


// Support API 

const getSupportTicket = async data => { 

  const loginToken = checkToken();
   var myHeaders = new Headers();
   if(loginToken)
    {
       var bearerTokern = loginToken.access_token; 
    }
    else
    {
      return(1);
    }

  myHeaders.append("Authorization",`Bearer ${bearerTokern}`)

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(
      process.env.NEXT_PUBLIC_PATIENT_API_URL + 'support/index',
      requestOptions,
    );

    const regResponse = await response.json();
    console.log("My Response",regResponse);

    return regResponse;
};


// Code for Submit Support Raise Ticket 


const raiseSupportTicket = async data => { 

  console.log("API Data called here ",data);

   const loginToken = checkToken();
   var myHeaders = new Headers();
   if(loginToken)
    {
       var bearerTokern = loginToken.access_token; 
    }
    else
    {
      return(1);
    }
  
   myHeaders.append("Content-Type", "application/json");
   myHeaders.append("Authorization",`Bearer ${bearerTokern}`)

   var recordData = JSON.stringify({
     "ticket_subject": data.subject,
     "ticket_description": data.message,
     "support_category_id": data.bookingID
   });
   const requestOptions = {
     method: 'POST',
     headers:myHeaders,
     body: recordData,
     redirect: 'follow'
   };
    const response = await fetch(
       process.env.NEXT_PUBLIC_PATIENT_API_URL + 'support/raiseTicket',
       requestOptions,
     );
     const regResponse = await response.json();
     return regResponse;
};


export { getPatientLogin, getPatientRegister, getPatientLoginOtpVerification,getDependentMedicalHistory, getFamilyDoctorDetailByUid, getFamilyDependentByUid, addFamilyDoctorDetail,addFamilyMember,getSubscriptionDetails,resendOtpRequest,getSupportTicket,raiseSupportTicket};
