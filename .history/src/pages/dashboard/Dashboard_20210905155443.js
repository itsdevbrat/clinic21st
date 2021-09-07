import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Option from '../../components/option/Option'
import UserForm from '../../components/userform/UserForm'
import VerticalForm from '../../components/verticalform/VerticalForm'
import UsersTable from '../../components/userstable/UsersTable'
import './Dashboard.css';

const Dashboard = props => {

    const [showUserForm, setShowUserForm] = useState(false)
    const [showVerticalForm, setShowVerticalForm] = useState(false)
    const [showUsersTable, setShowUsersTable] = useState(false)

    let toggleUserForm = () => {
        console.log('toggling form')
        showUserForm ? setShowUserForm(false) : setShowUserForm(true)
    }

    let toggleVerticalForm = () => {
        console.log('toggling form')
        showVerticalForm ? setShowVerticalForm(false) : setShowVerticalForm(true)
    }

    let toggleUsersTable = () => {
        console.log('toggling form')
        showUsersTable ? setShowUsersTable(false) : setShowUsersTable(true)
    }



    return (
        <div>
            <h1 className="title">Dashboard</h1>
            <Option title='Create User' onClick={toggleUserForm} />
            {showUserForm && <UserForm toggleForm />}
            <Option title='Add a vertical' onClick={toggleVerticalForm} />
            {showVerticalForm && <VerticalForm />}
            <Option title='View Users Details' onClick={toggleUsersTable} />
            {showUsersTable && <UsersTable />}
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
