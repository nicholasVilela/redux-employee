import React, {useState} from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux'

const CreateEmployee = () => {
    const companyName = useSelector(state => state.company)
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        jobTitle: '',
        isFullTime: false,
        phoneNumber: '',
        email: ''
    })

    const create = async () => {
        await axios.post(`https://sdg-staff-directory-app.herokuapp.com/api/${companyName}/Employees`, form)
        .then((res) => {
            console.log(res)
        })
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            create()
        }}>
            <input type='text' placeholder='First Name' onChange={(e) => setForm({firstName: e.target.value})} />
            <input type='text' placeholder='Last Name' onChange={(e) => setForm({lastName: e.target.value})} />
            {/* <label htmlFor='isFullTime'>Is full time?</label>
            <input id='isFullTime' type='checkbox' onClick={() => setForm({isFullTime: !isFullTime})} /> */}
            <input type='text' placeholder='Phone Number' onChange={(e) => setForm({phoneNumber: e.target.value})} />
            <input type='text' placeholder='Email' onChange={(e) => setForm({email: e.target.value})} />

            <button>Submit</button>
        </form>         
    );
}

export default CreateEmployee;
