import React, { Component } from 'react'
class Foot extends Component {
    render() {
        return (
            <div className=''>
                {/* <h1>this is salman</h1> */}
                <ul className="navul footul ">
                    <li className="navulli h"> <a href="#home" className="ullia">This is a reactjs Project of todo list</a> </li>
                    
                    {/* <li className="navulli"> <a href="#about" className="ullia">ABOUT</a> </li>
                    <li className="navulli"> <a href="" className="ullia">SERVICES</a> </li> */}

                </ul>
            </div>
        )
    }
}
export default Foot;