import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  createMuiTheme,
  makeStyles,
  fade,
  ThemeProvider,
  useTheme,
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
import * as locales from "@material-ui/core/locale";
import {
  Avatar,
  TableHead,
  Toolbar,
  Typography,
  withStyles,
  Zoom,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: theme.palette.primary.main,
    backgroundColor: "white",

    //color: theme.palette.common.white,
    color: theme.palette.primary.main,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
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
        aria-label="next page"
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
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

export const rows_example = [
  createData("Cupcake", 305, 3.7),
  createData("Donut", 452, 25.0),
  createData("Eclair", 262, 16.0),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Gingerbread", 356, 16.0),
  createData("Honeycomb", 408, 3.2),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Jelly Bean", 375, 0.0),
  createData("KitKat", 518, 26.0),
  createData("Lollipop", 392, 0.2),
  createData("Marshmallow", 318, 0),
  createData("Nougat", 360, 19.0),
  createData("Oreo", 437, 18.0),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles((theme) => ({
  table: {
    minWidth: 500,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
// rows always mut be at least an empty array []
// never send an undefined props.rows
export default function JTableSSJ(props) {
  console.log("XXX->", props.rows);
  const classes = useStyles2();
  const { columns, rows, loading, fade, title, search } = props;
  const [checked, setChecked] = React.useState(fade ? false : true);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  //Buscador
  const [searchWord, setSearchWord] = React.useState("");
  const handleChangeSearchWord = (event) => {
    setSearchWord(event.target.value);
  };

  //ROWS

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows?.length - page * rowsPerPage);

  /*  const rowsToShow =
    rowsPerPage > 0
      ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      : rows; */

  const makeRowsToShow = () => {
    let toShow = [];
    let splitBySearch = [];
    toShow =
      rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows;
    if (searchWord.length !== 0) {
      //Cuando haya una búsqueda
      for (let i = 0; i < toShow.length; i++) {
        const currentRow = toShow[i];
        if (JSON.stringify(currentRow).includes(searchWord)) {
          splitBySearch.push(currentRow);
        }
      }
    } else {
      splitBySearch = [...toShow];
    }

    return splitBySearch;
  };

  const rowsToShow = makeRowsToShow();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    setChecked(true);
  }, []);
  console.log("emptyRows", emptyRows);
  const titulo = title || "";
  return (
    <Zoom in={checked} style={{ transitionDelay: checked ? "500ms" : "10ms" }}>
      <TableContainer component={Paper}>
        {search && (
          <Toolbar className={classes.root}>
            <Typography
              className={classes.title}
              variant="h6"
              id="tableTitle"
              component="div"
            >
              {titulo}
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onChange={handleChangeSearchWord}
                placeholder="Buscar..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </Toolbar>
        )}

        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell align="left">{column.title}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {loading ? (
              [1, 2, 3, 4, 5].map((row) => (
                <StyledTableRow key={row}>
                  {columns.map((column) =>
                    column.render ? (
                      <StyledTableCell component="th" scope="row">
                        <Skeleton variant="circle">
                          <Avatar />
                        </Skeleton>
                      </StyledTableCell>
                    ) : (
                      <StyledTableCell component="th" scope="row">
                        <Skeleton width="100%">
                          <Typography>.</Typography>
                        </Skeleton>
                      </StyledTableCell>
                    )
                  )}
                </StyledTableRow>
              ))
            ) : (
              <>
                <>
                  {rowsToShow.map((row, index) => (
                    <StyledTableRow key={index + 1}>
                      {columns.map((column, index) => (
                        <StyledTableCell component="th" scope="row">
                          {column.render
                            ? column.render(row)
                            : row[column.field]}
                        </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  ))}
                </>
                <>
                  {/* {rowsToShow === 0 */}
                  {/* ask to jin if comentario de arriba podria kgar alguna otro feature de la tablaSSJ */}
                  {rows.length === 0
                    ? emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={10}>
                            <div className={classes.paper}>
                              {"No hay registros para mostrar"}
                            </div>
                          </TableCell>
                        </TableRow>
                      )
                    : emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                          <TableCell colSpan={10}></TableCell>
                        </TableRow>
                      )}
                </>
              </>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <ThemeProvider
                theme={(outerTheme) =>
                  createMuiTheme(outerTheme, locales["esES"])
                }
              >
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  //colSpan={3}
                  count={rows.length}
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
              </ThemeProvider>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Zoom>
  );
}
