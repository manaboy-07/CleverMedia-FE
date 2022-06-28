import React from "react";

const SignUp = () => {
    return (
      <div>
      <div className="m-9 rounded-3xl shadow-md shadow-slate-900 ">
   <div className="flex justify-center m-12 ">
   <div className="hidden p-2 m-2 max-w-2xl  bg-clip rounded-xl md:block" style={{ 
   backgroundImage:`url(${"https://images.unsplash.com/photo-1566136646093-bf14a769d8d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"})`
  
  }}>
     
   <div className=" backdrop-blur-xl backdrop-opacity-90 max-w-lg m-10 rounded-md">
       <h1 className="mt-12 text-2xl font-bold">📡 CleverMedia </h1>
       <p className="mt-3">We are invite only right now</p>
       <p className="mt-3">10+ million people have joined our network. <br/> Connecting the globe like no other.</p>
        <footer className="mt-48">
          Already have an account ?
          <p className="mt-3">Login</p>
       </footer>
      
     </div>
    
     </div>
   <div className="p-2 m-2">
     <h2 className="text-3xl">Welcome to CleverMedia </h2>
     <p className="mt-3 text-lg">Create your account</p>
     {/* info pg */}
    <div className="mt-9">
      <label className="label">
         <span className="label-text font-bold">What is your email?</span>
             {/* <span className="label-text-alt">Alt label</span> */}
          </label>
               <input
                 type="email"
                 placeholder="Enter your email"
                 className="input bg-base-300   w-full md:max-w-xs"
                 id="email"
               />
  
  
       <label className="label">
           <span className="label-text font-bold">Set Password</span>
            {/* <span className="label-text-alt">Alt label</span> */}
        </label>
         <input
           type="password"
           placeholder="Enter Password"
           className="input bg-base-300   w-full md:max-w-xs"
           id="password"
         />
  
         <div className="flex">
        
         
         
           
           <input
           type="checkbox"
           placeholder="Enter Password"
           className="inline mt-3"
           id="checkbox"
           />
            <label className="label">
           <span className="label-text font-bold ml-3">Show Password ?</span>
            {/* <span className="label-text-alt">Alt label</span> */}
        </label>
          
  
          
         
         </div>
         <button type="submit"
         className=" items-center w-full h-12 mt-6 bg-success text-base-100 font-bold text-lg">Sign Up</button>
         <label className="label">
           <span className="label-text font-bold mt-3">Sign Up With : </span>
           
           <li className="list-none mt-3" >Google</li>
           <li className="list-none mt-3" >Facebook</li>
           <li className="list-none mt-3" >LinkedIn</li>
         </label>       
    </div>
   </div>
  </div>
  </div>
   </div>
    )
};

export default SignUp