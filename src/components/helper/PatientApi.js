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

// Function For Add Family Member
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
      "city_id": data.city,
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


export { getPatientLogin, getPatientRegister, getPatientLoginOtpVerification, getFamilyDoctorDetailByUid, getFamilyDependentByUid, addFamilyDoctorDetail,getSubscriptionDetails};
