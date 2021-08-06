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

export { getPatientLogin, getPatientRegister };
