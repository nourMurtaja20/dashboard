import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DownloadIcon from '@mui/icons-material/Download';
import { useDispatch, useSelector } from 'react-redux';
import TemplateController from '../../controllers/template-controller';
import { templateActions } from '../../redux/template-slic';
import axios from 'axios';
import FileDownload from "js-file-download";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from 'react-router-dom';

const TemplatesPage = () => {
  const downloadFile = (e) => {
    e.preventDefault();
    axios({
      url: 'http://localhost:5000',
      method: 'GET',
      responseType: 'blob',
    }).then((res) => {
      FileDownload(res.data, "test.txt")
    })
  };

  const columns = [
    { id: 'id', label: '#' },
    { id: 'ConceptNote', label: 'File Note' },
    { id: 'Type', label: 'Type' },
    { id: 'Scope', label: 'Scope' },
    { id: 'Reference', label: 'Reference' },
    { id: 'Dowmload', label: 'Dowmload' },
    { id: 'Action', label: 'Action' }
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  let templatesfilter = useSelector((state) => state.templates.filterdData);
  let templates = useSelector((state) => state.templates.data);
  let dispatch = useDispatch();
  let templatecontroller = new TemplateController();
  let onfeildFilterHandler = (event) => {
    dispatch(templateActions.filterByField(event.target.value));
  };
  let fetchData = async () => {
    if (templatesfilter.length === 0) {
      let templates = await templatecontroller.read();
      dispatch(templateActions.read(templates));
    }
  }
  useEffect(() => { fetchData(); }, []);
  return (
    <>
      <section className='sectionopen'>
        <span>Templates </span>
        <section class="section-filter">
          <span>Type</span>
          <div class="custom-select">
            <select onChange={onfeildFilterHandler}>
              <option value="All">All</option>
              {templates.map((element) => (<option value={element.scope} key={element.id}>{element.scope}</option>))}
            </select>
          </div>
          <span>Scope</span>
          <div class="custom-select">
            <select>
              <option value="0">All</option>
              {templates.map((element) => (<option value={element.scope} key={element.id}>{element.scope}</option>))}
            </select>
          </div>
        </section>
      </section>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} align='center'>
                    {column.label}
                  </TableCell>

                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {templatesfilter
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} >
                      <TableCell align='center'>
                        {parseInt(row.id) + parseInt(1)}
                      </TableCell>
                      <TableCell align='center'>
                        {row.conceptNote}
                      </TableCell>
                      <TableCell align='center'>
                        {row.scope}
                      </TableCell>
                      <TableCell align='center'>
                        {row.scope}
                      </TableCell>
                      <TableCell align='center'>
                        {row.Reference}
                      </TableCell>
                      <TableCell align='center' >
                        <button className='btndetails' onClick={(e) => downloadFile(e)}>Download <DownloadIcon /></button>
                      </TableCell>
                      <TableCell align='center'>
                        <DeleteOutlineIcon style={{ color: "red", marginRight: "30px", cursor: "pointer" }} />
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={templatesfilter.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

export default TemplatesPage