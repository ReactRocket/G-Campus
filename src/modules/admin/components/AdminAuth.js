import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSession} from '../../../app/slice/sessionSlice'

export const AdminAuth = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { sessionID, sessionType } = useSelector((state) => state.session)

  useEffect(()=>{
    document.title = `G-Campus | Authentication`
  },[])

  const handleAdminAuthentication = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (email === 'admin@gmail.com' && password === 'Admin123') {
      dispatch(setSession(email, 'admin'))
      sessionStorage.setItem('admin', email)
      navigate('/admin')
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <div className="h-screen w-screen  flex flex-col justify-center pt-10 pb-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
          {/* Logo */}
          <div className="mx-auto h-9 text-heading">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="h-full w-full bi bi-person-fill-gear" viewBox="0 0 16 16">
              <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
            </svg>
          </div>

          <p className="mt-6 text-center text-sm text-text">
            {" "}
            <span
              className="font-semibold text-primary hover:text-primary-accent"
            >
              Admin Authentication?
            </span>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-layer-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <h1 className="text-center text-3xl font-semibold text-heading">
              Welcome Back !
            </h1>

            <form onSubmit={handleAdminAuthentication} className="mt-6 flex flex-col space-y-4" autoComplete='off'>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-heading"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                  placeholder='Authentication Email'
                />
              </div>
              <div >
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-heading"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder='Authentication Password'
                  className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                />
              </div>


              <button
                type="submit"
                className=" inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-black text-white px-4 py-2.5 text-sm font-semibold"
              >
                Login
              </button>


            </form>
          </div>
        </div>
      </div>


    </>
  )
}
