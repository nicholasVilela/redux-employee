import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const AllEmployees = () => {
    const companyName = useSelector(state => state.company)
    const [employees, setEmployees] = useState([])

    const getEmployees = async () => {
        await axios.get(`https://sdg-staff-directory-app.herokuapp.com/api/${companyName}/Employees`)
            .then(res => {
                console.log(res)
                setEmployees(res.data)
            })
    }

    const deleteEmployee = async (id) => {
        await axios.delete(`https://sdg-staff-directory-app.herokuapp.com/api/${companyName}/Employees/${id}`)
            .then(() => {
                getEmployees()
            })
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <>
            <Link to={`/${companyName}/create_employee`}>
                <input type='button' value='Create Employee' />
            </Link>

            <ul>
                {employees.map((item, i) => {
                    return (
                        <>
                            <Link to={{
                                pathname: `/${companyName}/${item.id}/modify_employee`,
                                state: {fName: item.firstName, lName: item.lastName}
                                }} >
                                <li key={i}>
                                    {item.firstName} {item.lastName}
                                </li>
                            </Link>

                            <button onClick={() => deleteEmployee(item.id)}>X</button>
                        </>
                    )
                })}
            </ul>
        </>
    );  
}

export default AllEmployees;
