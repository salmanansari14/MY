// import '../App.css';
// import React, { useState } from 'react';


function Header(Props) {
  // let [name, setname] = useState('Salman')
  console.log(Props)
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">TODO LIST</a>
        </div>
      </nav>
    </>
  )
}

export default Header;