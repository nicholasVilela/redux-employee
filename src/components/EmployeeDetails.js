import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useSelector} from 'react-redux'

const EmployeeDetails = (props) => {
    const companyName = useSelector(state => state.company)
    const [employee, setEmployee] = useState([])

    const getEmployee = () => {
        axios.get(`https://sdg-staff-directory-app.herokuapp.com/api/${companyName}/Employees/${props.match.params.id}`)
            .then(res => {
                setEmployee(res.data)
            })
    }

    useEffect(() => {
        getEmployee()
    }, []);

    return (
        <div>
            {console.log(employee)}
            <label htmlFor='fname'>FirstName: </label>
            <input id='fname' type='input' value={employee.firstName} />

            <label htmlFor='lname'>LastName: </label>
            <input id='lname' type='input' value={employee.lastName} />

            <label htmlFor='fulltime'>FullTime: </label>
            <input id='fulltime' value={employee.isFullTime} />

            <label htmlFor='jobtitle'>JobTitle: </label>
            <input id='jobtitle' value={employee.jobTitle} />

            <label htmlFor='phonenumber'>PhoneNumber: </label>
            <input id='phonenumber' value={employee.phoneNumber} />

            <label htmlFor='email'>Email: </label>
            <input id='email' value={employee.email} />
        </div>
    );
}

export default EmployeeDetails;
