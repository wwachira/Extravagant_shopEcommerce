# React + Vite
https://ui.shadcn.com/docs/installation/vite

 # About the Application:
 ECommerce App with Admin Panel : React, Redux Toolkit, Tailwind, MongoDB

 # Install dependancies
- npm create vite@latest
- npm i @reduxjs/toolkit react-redux axios react-router-dom
- npm install -D tailwindcss postcss autoprefixer  //installs all configs for tailwind
- npx tailwindcss init -p  //creates a tailwind config file
- npx shadcn@latest init //to install shadcn
- npm i tailwindcss-animate
- npm i -D @types/node //so your app can resolve paths without error

# start functionality
- main.jsx


# updates/del
- rm -Rf package-lock.json node_modules && npm i
<!-- jsonconfig.schema.json FILE IN client folder
{
    "json.schemas": [
    {
        "fileMatch": ["client/jsconfig.json"], 
        "url": "file:///client/jsconfig.json"
    }
  ]

} -->

<!-- - <h1>Header component</h1>
      {/*  now here you can render all the common components that youll be renderin on all the pages */}
      

      <Routes> 
        <Route path="/auth" element={<AuthLayout/>}> {/* render the AuthLayout the Parent, below routes will be the child*/}
          <Route path="login" element={<AuthLogin/>} />  -->

