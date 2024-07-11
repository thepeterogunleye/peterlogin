import React from 'react'

const Login = () => {
  return (
    <div className='bg-back'>
        <div className='flex-col justify-center px-6 py-12  bg-black bg-opacity-20 rounded-lg md: lg:'>
            <form className='flex flex-col justify-center md:px-8 lg:px10 '>
                <h1 className='mb-3 text-center text-3xl font-bold leading-9 tracking-tight text-white pb-3'>Login</h1>

                 
                      <input type='text'  recquired className='flex items-center justify-between p-2 placeholder:text-white bg-transparent outline  outline-white text-white my-4 rounded-xl px-3 w-80 text-sm'placeholder='Username'/>
               
                  
                        <input type='text'placeholder='Password'  recquired className='placeholder:text-white bg-transparent outline flex items-center justify-between my-3 p-2 outline-white text-white rounded-xl px-3 text-sm'/>
                 

                  <div className="flex justify-evenly gap-x-16 p-3 mx-3 mt-[-12px] text-sm">

                          <input type="checkbox" className='outline-none border-none shadow-none accent-black '/>
                     
                          <a href="#" className='text-white hover:text-black '>Forgot Password</a>
                    </div>
                   
                        <button type='Submit' className='flex justify-center rounded-full bg-white text-zinc-500 my-4 px-4 py-2  md:px-2 hover:bg-black'>Login</button>
            </form>
                    
          </div>
      </div>
 )
}

export default Login