// isLogin



export const isLogin=()=>
{
  console.log('in login::');
  
  let data=  sessionStorage.getItem("data");
  if(data==null)
  {
    return false;
     
  }else
  {
    
    return true;
  }
}
// doLogin

export const doLogin=(email)=>
{
  console.log('do Login!');
    sessionStorage.setItem("email",email);    
}

// doLogout
export  const doLogout=()=>
{
  console.log("in doLogout");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("email");
    
 
}

// getCurrent user 

export  const getCurrentUser=()=>
{
    if(isLogin)
    {
            return JSON.parse(sessionStorage.getItem("token"));
    }else
    {
        return false;
    }
}
