import React, {useState} from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'

const CreateEmployee = () => {
    const companyName = useSelector(state => state.company)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [isFullTime, setIsFullTime] = useState(false)

    const updateField = (e, field) => {
        if (field === 'fName') {
            setFirstName(e.target.value)
        }
        else if (field === 'lName') {
            setLastName(e.target.value)
        }
        else if (field === 'jobTitle') {
            setJobTitle(e.target.value)
        }
        else {
            setIsFullTime(!isFullTime)
        }
    }

    const createEmployee = () => {
        axios.post(`https://sdg-staff-directory-app.herokuapp.com/api/${companyName}/Employees`, {
            firstName: firstName,
            lastName: lastName,
            jobTitle: jobTitle,
            isFullTime: isFullTime
        })
        .then(() => {
            return (
                <Redirect to={`${companyName}/Employees`}/>
            )
        })
    }

    return (
        <form>
            <input type='text' placeholder='First Name' onChange={(e) => updateField(e, 'fName')} />
            <input type='text' placeholder='Last Name'  onChange={(e) => updateField(e, 'lName')} />
            <input type='text' placeholder='Job Title'  onChange={(e) => updateField(e, 'jobTitle')} />
            <label htmlFor='isFullTime'>Is full time?</label>
            <input id='isFullTime' type='checkbox' onChange={(e) => updateField(e, 'isFullTime')} />

            <button onClick={() => createEmployee()}>Submit</button>
            {console.log(firstName)}
        </form>     
    );
}

export default CreateEmployee;
