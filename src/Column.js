import React from "react";

const Column = props => {
    const size = props.size.split(" ").map(size => "col-" + size).join(" ");
    console.log(size)
    return (
        <div className={size}>
            {props.children}
        </div>
    );
};

export default Column;