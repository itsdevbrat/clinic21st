import { React, useState, useEffect } from 'react'
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import DisableButton from '../disableButton/disableButton'
import { get, update, search } from '../../network/UserService';
import Loader from '../../components/loader/Loader'
import useLocalStorage from '../../customHooks/useLocalStorage'
import './UsersTable.css'

const UsersTable = props => {

    const [table, setTable] = useState([]);
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState('');
    const [loader, setLoader] = useState(false);
    const [forceUpdateCounter, setForceUpdateCounter] = useState(0);
    const [jwt] = useLocalStorage('auth-token', '')

    const getUsers = (page) => {
        setLoader(true)
        get(page, {'Authorization': jwt})
            .then(res => {
                console.log(res)
                console.log(res.data)
                setTable(res.data.map((user, idx) => {
                    return {
                        key: idx,
                        userName: user.userName,
                        password: user.password,
                        phoneNumber: user.phoneNumber,
                        email: user.email,
                        enabled: user.enabled,
                        createdDate: user.createdDate
                    }
                }))
                setLoader(false)
            })
            .catch(err => {
                console.log(err)
                setLoader(false)
            })
    }

    const updateUser = (user) => {
        update(user)
            .then(res => {
                console.log("then",res)
                console.log(res.data)
                setForceUpdateCounter(forceUpdateCounter + 1)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const searchUser = () => {
        search(query)
            .then(res => {
                console.log(res)
                console.log(res.data)
                setTable(res.data.map((user, idx) => {
                    return {
                        key: idx,
                        userName: user.userName,
                        password: user.password,
                        phoneNumber: user.phoneNumber,
                        createdDate: user.createdDate
                    }
                }))
            })
            .catch(err => {
                console.log(err)
            })
    }

    const nextPage = () => {
        setPage(page + 1)
    }


    const prevPage = () => {
        if (page !== 0) {
            setPage(page - 1)
        }
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        getUsers(page)
    }, [page]);

    return (
        <>
            <TableContainer component={Paper} className='usertable'>

                <TextField variant='outlined' name="search" type="text"
                    placeholder="Name, Phone or Email" margin='dense'
                    style={{ marginStart: '1vw !important' }}
                    onChange={handleChange} value={query} />
                <Button variant="outlined" onClick={searchUser} style={{ margin: '10px' }}>Search</Button>

                <Table >

                    <TableHead>

                        <TableRow>

                            <TableCell>Phone Number</TableCell>

                            <TableCell>Registration Date</TableCell>

                            <TableCell>Name</TableCell>

                            <TableCell>Password</TableCell>

                            <TableCell>Action</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            table.map((row, index) => {

                                return <TableRow key={index}>

                                    <TableCell>{row.phoneNumber}</TableCell>
                                    <TableCell>{row.createdDate.split('T')[0]}</TableCell>
                                    <TableCell>{row.userName} </TableCell>
                                    <TableCell>{row.password}</TableCell>
                                    {row.enabled
                                        ? <DisableButton onClick={() => {
                                            row.enabled = false
                                            updateUser(row)
                                        }} />
                                        : <Button color="primary" className='disable-button'>Disabled</Button>}

                                </TableRow>

                            })

                        }

                    </TableBody>

                </Table>

                {loader && <Loader />}

                <div className='flex-space-around'>
                    {page!==0 && <Button variant="outlined" onClick={prevPage}>Previous</Button>}
                    {table.length > 0 && <Button variant="outlined" onClick={nextPage}>Next</Button>}
                </div>

            </TableContainer>
            <div style={{'height': '80px'}}></div>
        </>
    )


}

export default UsersTable
