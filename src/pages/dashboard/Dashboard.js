import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Option from '../../components/option/Option'
import UserForm from '../../components/userform/UserForm'
import VerticalForm from '../../components/verticalform/VerticalForm'
import UsersTable from '../../components/userstable/UsersTable'
import Button from '@material-ui/core/Button';
import useLocalStorage from '../../customHooks/useLocalStorage'
import './Dashboard.css';

const Dashboard = props => {

    const [showUserForm, setShowUserForm] = useState(false)
    const [showVerticalForm, setShowVerticalForm] = useState(false)
    const [showUsersTable, setShowUsersTable] = useState(false)
    const [jwt, setJwt] = useLocalStorage('auth-token', '')

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

    let logout = () => {
        setJwt('')
        window.location.href = 'http://localhost:3000/login'
    }

    // useEffect(()=>{
    //     if(!jwt)
    //         logout()
    // }, [])



    return (
        <div>
            <div className="title">
                <h1>Dashboard</h1>
            {jwt && <Button color='secondary' onClick={logout}>Sign out</Button>}
            </div>
            <Option title='Create User' onClick={toggleUserForm} />
            {showUserForm && <UserForm toggleForm = {toggleUserForm} />}
            <Option title='Add a vertical' onClick={toggleVerticalForm} />
            {showVerticalForm && <VerticalForm toggleForm = {toggleVerticalForm} />}
            <Option title='View Users Details' onClick={toggleUsersTable} />
            {showUsersTable && <UsersTable />}
        </div>
    )
}

Dashboard.propTypes = {
}

export default Dashboard
