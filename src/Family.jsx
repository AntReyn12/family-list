import React from "react";

const Family = (props) => {
    const { firstName, age, relation } = props;
    return (
        <React.Fragment>
            <h2>My {relation}, {firstName}, who is {age} years old!</h2> 
        </React.Fragment>
    );
}

export default Family;