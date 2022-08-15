import DateObject from "react-date-object";
import { useState } from "react";

function Proitem({ todo, Ondelete }) {
    let date = new DateObject();

    const [isCheck, setcheck] = useState(false);

    // console.log(setcheck);

    function onChangee() {
        if (!isCheck) {
            alert("please check  the box");
        }
        else {
            Ondelete(todo);
            setcheck(!isCheck);
            // onChangee(setcheck)
        }

    }
    return (
        <div className=" uu">

            <h2> {todo.sno + 1}. {todo.title} - <span className="badge datebg bg-secondary">{date.format()}</span> </h2>
            <p className="mt-3"> {todo.desc}</p>

            <div className="form-check">
                <input className="form-check-input my-3" type="checkbox" onChange={(e) => setcheck(e.target.checked)} id="flexCheckChecked" />
                <label className="form-check-label my-3" htmlFor="flexCheckChecked"> Complete Task </label> <br />
            </div>

            <button className="btn-danger btn btn-sm" onClick={onChangee} >Done</button>
            <hr className="hrr" />
        </div>
        // onClick={() => { Ondelete(todo) }}
    )
}
export default Proitem;