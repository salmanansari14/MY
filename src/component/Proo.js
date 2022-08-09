
import React from "react";
import Proitem from "./Proitem";

function Proo(props) {

    return (
        <div className="hhs">

            {props.Productlist.length === 0 ? <h4 className="hg">No Todos To Display</h4> :
                props.Productlist.map((Todo) => {
                    return (
                            <Proitem todo={Todo} key={props.sno} Ondelete={props.Ondelete} />
                    )
                })
            }
        </div>
    );
}
export default Proo;