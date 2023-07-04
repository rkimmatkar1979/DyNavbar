import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';

// index.js file contains the navbar component inside the root. This root component renders the <Navbar/> component on to the webpage 
// This is just a Responsive Navbar styling which can be used in different projects. Most of the content will be CSS.
// npm create-react-app dynamic-navbar for making react app and then remove the unneccessary files and imports.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

