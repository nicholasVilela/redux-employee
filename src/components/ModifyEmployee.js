import React from 'react';

const ModifyCreate = (props) => {
    return (
        <>
            {console.log(props)}
            <form>
                <input type='text' placeholder='First Name' value={props.fName} />
                <input type='text' placeholder='Last Name' value={props.lName} />
                <input type='text' placeholder='Job Title' />
                <input type='checkbox' />
            </form>            
        </>
    );
}

export default ModifyCreate;
