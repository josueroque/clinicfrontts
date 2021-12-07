import React, { Fragment, useEffect, useState, useContext } from "react";
import SideBar from "./Sidebar";
import {
  Button,
  Container,
  FormGroup,
  Grid,
  Link,
  TableHead,
  Typography,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import { TextField } from "@material-ui/core";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import { PatientsContext } from "../context/PatientsContext";
import requireAuth from "./requireAuth";
import { Patient } from "../interfaces/patient";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  })
);

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

function Search(props: any) {
  const [patients, updatePatients] = useState([]);
  const [name, updateName] = useState(null);
  const [idNumber, updateIdNumber] = useState(null);
  const [lastName, updateLastName] = useState(null);
  const { getPatientsFunction } = useContext(PatientsContext);
  //table
  const classes2 = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, patients.length - page * rowsPerPage);

  useEffect(() => {
    const fetchPatients = async (filter: any) => {
      const allPatients = await getPatientsFunction(filter);
      updatePatients(allPatients);
      return allPatients;
    };
    fetchPatients({});
  }, []);

  const getPatients = async (filter: any) => {
    const allPatients = await getPatientsFunction(filter);
    updatePatients(allPatients);
    return allPatients;
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const classes3 = useStyles();

  const changeName = (event: any) => {
    updateName(event.target.value);
  };

  const changeIdNumber = (event: any) => {
    updateIdNumber(event.target.value);
  };

  return (
    <Fragment>
      <SideBar></SideBar>
      <Container className='Container-Search'>
        <FormGroup className='Form'>
          <Typography className='form-title' align='left' variant='h3'>
            Search
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let filter = {};
              if (name) {
                filter = { name: name };
              }
              if (idNumber) {
                filter = { ...filter, idNumber: idNumber };
              }
              if (lastName) {
                filter = { ...filter, lastName: lastName };
              }
              getPatients(filter);
            }}
          >
            <FormControl className='SearchText'>
              <TextField
                type='text'
                className='FormText'
                id='name'
                label='First Name'
                variant='outlined'
                size='small'
                value={name}
                onChange={(e: any) => {
                  updateName(e.target.value);
                }}
              />
            </FormControl>
            <FormControl className='SearchText'>
              <TextField
                type='text'
                className='FormText'
                id='name'
                label='Last Name'
                variant='outlined'
                size='small'
                value={lastName}
                onChange={(e: any) => {
                  updateLastName(e.target.value);
                }}
              />
            </FormControl>
            <FormControl className='SearchText'>
              <TextField
                type='text'
                className='FormText'
                id='idNumber'
                label='Id Number'
                variant='outlined'
                size='small'
                value={idNumber}
                onChange={(e: any) => {
                  updateIdNumber(e.target.value);
                }}
              />
            </FormControl>
            <Grid container>
              <Button
                className='SearchButton'
                type='submit'
                variant='contained'
                color='primary'
              >
                Go
              </Button>
            </Grid>
          </form>
        </FormGroup>
      </Container>
      <Container className='SearchResults'>
        <TableContainer component={Paper}>
          <Table
            className={classes2.table}
            aria-label='custom pagination table'
          >
            <TableBody>
              {(patients.length > 0
                ? patients.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : patients
              ).map((patient: Patient) => (
                <TableRow
                  key={patient._id}
                  hover
                  onClick={() => props.history.push("/general/" + patient._id)}
                >
                  <TableCell>{patient.idNumber}</TableCell>
                  <TableCell>{patient.name + " " + patient.lastName}</TableCell>
                  <TableCell>{patient.city}</TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 10 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={patients.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": "rows per page" },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Container>
    </Fragment>
  );
}

export default requireAuth(Search);
//export default Search;
