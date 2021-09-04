import { React, useState } from 'react'
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import moduleName from './'
import './UsersTable.css'

const UsersTable = props => {

    const table = [
        { name: "John", pass: 'dev' },
        { name: "Bren", pass: 'dev' },
        { name: "Marry", pass: 'dev' },
        { name: "Shohail", pass: 'dev' }
    ];

    
    return (
        <>
            <TableContainer component={Paper} className='usertable'>

                <OutlinedInput name="search" type="text" placeholder="Search" margin='dense' />

                <Table >

                    <TableHead>

                        <TableRow>

                            <TableCell>Phone Number</TableCell>

                            <TableCell>Registration Date</TableCell>

                            <TableCell>User Name</TableCell>

                            <TableCell>Password</TableCell>

                            <TableCell>Action</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            table.map((row, index) => {

                                return <TableRow key={index}>

                                    <TableCell>{row.phone}</TableCell>
                                    <TableCell>{row.registrationDate}</TableCell>
                                    <TableCell>{row.name} </TableCell>
                                    <TableCell>{row.pass}</TableCell>
                                    <DisableButton />

                                </TableRow>

                            })

                        }

                    </TableBody>

                </Table>

                <div className='flex-space-around'>
                    <Button>Previous</Button>
                    <Button>Next</Button>
                </div>

            </TableContainer>
        </>
    )


}

export default UsersTable
