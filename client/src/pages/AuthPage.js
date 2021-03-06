import React from 'react';


export const AuthPage = () => {
   const [form, useForm] = useState({
      email: '', password: ''
   })
   const changeHandler = event => {
      setForm({ ...form, [event.target.name]: event.target.value })
   }


   return (
      <div className="row">
         <div className="col s6 offset-s3">
            <h1>Shorten Link</h1>
            <div className="card blue darken-1">
               <div className="card-content white-text">
                  <span className="card-title">Authorization</span>
                  <div>

                     <div className="input-field">
                        <input
                           placeholder="Enter your email"
                           id="email"
                           type="text"
                           name="email"
                           className="yellow-input"
                           onChange={changeHandler}

                        />
                        <label htmlFor="email">Email</label>
                     </div>

                     <div className="input-field">
                        <input
                           placeholder="Enter password"
                           id="password"
                           type="password"
                           name="password"
                           className="yellow-input"
                           onChange={changeHandler}

                        />
                        <label htmlFor="email">Password</label>
                     </div>

                  </div>
               </div>
               <div className="card-action">
                  <button
                     className="btn yellow darken-4"
                     style={{ marginRight: 10 }}

                  >
                     Sing in
            </button>
                  <button
                     className="btn grey lighten-1 black-text"

                  >
                     Sign up
            </button>
               </div>
            </div>
         </div>
      </div>
   )
}