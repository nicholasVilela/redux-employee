import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import {changeName} from '../actions'
import Axios from 'axios';

const CreateCompany = () => {
    const companyName = useSelector(state => state.company)
    const dispatch = useDispatch()

    const createCompany = async () => {
        await Axios.get(`https://sdg-staff-directory-app.herokuapp.com/api/Company/${companyName}`)
        return true
    }

    return (
        <div>
          <h1>Create a Company</h1>
          <input type='text' placeholder='Enter a company...' onChange={(e) => dispatch(changeName(e))}/> 
          <h3>Company: {companyName}</h3>

          <button onClick={() => createCompany()}>Create Company</button>

          {companyName ?    
            <Link to={`/${companyName}/employees`}>
                <input type='button' value='Go to Database' />
            </Link> : ''}
        </div>
    );
}

export default CreateCompany;
