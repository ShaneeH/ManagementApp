
export function register(name , email , password , role) {
    try {
        console.log(name , email , password, role);
        console.log('register Service hit');
     
    } catch (e) {
       console.log(`Problem with registerService \n ${e}`);
    } 
     
   }


   