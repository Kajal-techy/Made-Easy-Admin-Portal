import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardBody from "components/Card/CardBody.js";
import { useQuery, gql } from '@apollo/client';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CardHeader from "components/Card/CardHeader.js";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const useStyles = makeStyles(styles);

const GET_PETS = gql`
query getAllUsers {
    getAllUsers {
        id
        firstName
        lastName
        userName
  }}`;

export default function UserList() {

    const classes = useStyles();
    const { loading, error, data } = useQuery(GET_PETS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <CardHeader color="primary"> Made Easy Users
            </CardHeader>
                    <CardBody>
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Sr. No.</TableCell>
                                        <TableCell>FirstName</TableCell>
                                        <TableCell>LastName</TableCell>
                                        <TableCell>UserName</TableCell>
                                        <TableCell>Type Name</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.getAllUsers && data.getAllUsers.map((row, i) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{i + 1}</TableCell>
                                            <TableCell>{row.firstName}</TableCell>
                                            <TableCell>{row.lastName}</TableCell>
                                            <TableCell>{row.userName}</TableCell>
                                            <TableCell>{row.__typename}</TableCell>
                                            <TableCell>
                                                <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit" tabIndex="0" type="button" title="Edit">
                                                    <span className="MuiIconButton-label"><span className="material-icons MuiIcon-root" aria-hidden="true">edit</span></span>
                                                    <span className="MuiTouchRipple-root"></span>
                                                </button>
                                                <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit" tabIndex="0" type="button" title="Delete">
                                                    <span className="MuiIconButton-label">
                                                        <span className="material-icons MuiIcon-root" aria-hidden="true">delete_outline</span>
                                                    </span><span className="MuiTouchRipple-root"></span></button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardBody>
                </GridItem>
            </GridContainer>
        </div >
    );
}
