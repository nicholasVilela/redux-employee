import React from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const companyName = useSelector(state => state.company)

    return (
        <nav>
            <Link to={`/${companyName}/employees`}>All Employees</Link>
            <Link to={`/${companyName}/create_employee`}>Create Employee</Link>
        </nav>
    );
}

export default Navbar;
