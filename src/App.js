import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './component/Header';
import Card from './component/Card';
import Proo from './component/Proo';
import Foot from './component/Foot';

function App() {

  let initTodo;
  if (localStorage.getItem("Todo") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("Todo"));
  }

  // console.log("flsfl", Todo);
  // ......................................

  const Ondelete = (Todo) => {



    setdata(Productlist.filter((e) => {
      return (e !== Todo);
    }))
    localStorage.setItem("Todo", JSON.stringify(Productlist));



  }

  // ...................................................

  function addTodo(title, desc, sno) {
    console.log('jgjg', title, desc)
    // let sno;

    if (Productlist.length === 0) {
      sno = 0;
    }
    else {
      sno = Productlist[Productlist.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setdata([...Productlist, myTodo]);
    console.log(myTodo);
  }

  // ...........................................

  const [Productlist, setdata] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(Productlist));
  }, [Productlist])

  return (
    <div className="">

      <Header />
      <Card addTodo={addTodo} />
      <Proo Productlist={Productlist} Ondelete={Ondelete} />
      <Foot />

    </div>
  );
}

export default App;
