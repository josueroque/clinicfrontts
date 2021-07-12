import axios from 'axios';
//const apiUrl='https://clinic.josueroque.com/apiv1/';
const apiUrl='http://localhost:3002/apiv1/';
export async function saveUser(user:any){  
    try {
         
       const requestUrl =apiUrl +'/authenticate/register';
  
       const response = await axios.post(requestUrl, user );
       if (response.statusText!=="OK") {
         throw new Error('Error saving user');
       }
 
       return response; 
      
   }
   catch(error){
       console.log(error.response);
       throw error.response;
   }
 }
 

 export async function loginUser(user:any){  
   try {
     
      const requestUrl =apiUrl +'authenticate';
      // console.log('desde login')
      // console.log(requestUrl);
      // console.log(user);
   const response = await axios.post(requestUrl, user);
   console.log('response login');
   console.log(response);
      if (response.statusText!=="OK") {
        throw new Error('Error saving user');
      }
      // console.log('desde api');
      // console.log (response);
      return response.data; 
     
  }
  catch(error){
      console.error(error.response);
      throw error;
  }
 }
 

export async function updateHistory(history:any){
    try {   
        const requestUrl=apiUrl+'history/'+history._id;
        //console.log(history);
      //  console.log(requestUrl);
        const response=await axios.put(requestUrl, history);
        //console.log(requestUrl);
        //console.log(response); 
        if (response.statusText!=="OK") {
           throw new Error('Error updating history');
           //return {state:'errored',message:'Error saving patient'};
        }
    
         return response; 
        }
        catch(error){
           console.log(error);
            throw error;
    
        }
    
    }

export async function getHistoryId(patient:any){
    try {
      
      let requestUrl=apiUrl+'history/'+patient._id;  
       console.log('desde getHistory');
    //   console.log(patient);
      console.log(requestUrl); 
      const response=await axios.get(requestUrl);
      //console.log(response);
      if (response.statusText!=="OK") {
        throw new Error('Error fetching patient');
        //return {state:'errored',message:'Error saving patient'};
     }
    //  console.log(requestUrl);
    //  console.log(response.data.results);
     return response.data.results[0];
    }  catch(error){
       console.log(error);
       throw error;
    }
}


export async function getPatientId(patient:any){
    try {
      
      let requestUrl=apiUrl+'patients?_id='+patient.id;  
      const response=await axios.get(requestUrl);
      console.log(response);
      if (response.statusText!=="OK") {
        throw new Error('Error fetching patient');
     }
     return response.data.results[0];
    }  catch(error){
       console.log(error);
       throw error;
    }
}



export async function getPatients(filter:any){
    try {
      
      let requestUrl=apiUrl+'patients';  

      if (filter){
        if (filter.name){
            requestUrl+='?name='+filter.name;
        }
        if (filter.lastName){
            if (filter.name){
                requestUrl+='&lastName='+filter.lastName;
            }
            else{
                requestUrl+='?lastName='+filter.lastName;
            }
        }
        if (filter.idNumber){
            if (filter.name||filter.lastName){
                requestUrl+='&idNumber='+filter.idNumber;
            }
            else{
                requestUrl+='?idNumber='+filter.idNumber;
            }
        }
      }
    
      const response=await axios.get(requestUrl);

      if (response.statusText!=="OK") {
        throw new Error('Error saving patient');
        //return {state:'errored',message:'Error saving patient'};
     }
     return response.data.results;
    }  catch(error){
       console.log(error);
       throw error;
    }
}

export async function updatePatient(patient:any){
    try {   
        const requestUrl=apiUrl+'patients/'+patient._id;
        const response=await axios.put(requestUrl, patient);
        if (response.statusText!=="OK") {
           throw new Error('Error updating patient');
        }
    
         return response; 
        }
        catch(error){
           console.log(error);
            throw error;
        }
    
}

export async function savePatient(patient:any){
try {   
    const requestUrl=apiUrl+'patients';
    const response=await axios.post(requestUrl, patient);
    if (response.statusText!=="OK") {
       throw new Error('Error saving patient');
       //return {state:'errored',message:'Error saving patient'};
    }

     return response; 
    }
    catch(error){
       console.log(error);
        throw error;

    }

}

export async function saveHistory(history: any){
    try {   
        const requestUrl=apiUrl+'history';
        //console.log(history);
        const response=await axios.post(requestUrl, history);
        // console.log('desde saveHistory');
        // console.log(history);
        if (response.statusText!=="OK") {
           throw new Error('Error saving history');
           //return {state:'errored',message:'Error saving patient'};
        }
    
         return response; 
        }
        catch(error){
           console.log(error);
            throw error;
    
        }
    
    }
    


