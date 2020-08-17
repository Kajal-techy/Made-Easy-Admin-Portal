import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ProductAction from '../../actions/productAction';
import ProductStore from '../../store/productStore';

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


export default function TableList() {

  const [AllProducts, setAllProducts] = React.useState([]);

  useEffect(() => {
    ProductAction.getAllProducts();
    ProductStore.addChangeListener(onChange);
  }, [])

  const onChange = () => {
    setAllProducts(ProductStore.getAllProducts());
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary"> Made Easy Products
          </CardHeader>
          <CardBody>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sr. No.</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Rating</TableCell>
                    <TableCell>ProductType</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {AllProducts.map((row, i) => (
                    <TableRow key={row.id}>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell>{row.rating}</TableCell>
                      <TableCell>{row.productType}</TableCell>
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
        </Card>
      </GridItem>
    </GridContainer>
  );
}
