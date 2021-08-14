
import Encodr from "encodr";
import Cookies from 'js-cookie';
// import React from 'react';

const checkToken =  data => {
    const JSON = new Encodr("json");
    var token = Cookies.get('token');
    if(token){
        data = JSON.decode(token);
        // console.log('getToken form helper',data);
        return data;
    }else{
        window.location.replace('signin');
    }
  
   
  };

  export { checkToken };