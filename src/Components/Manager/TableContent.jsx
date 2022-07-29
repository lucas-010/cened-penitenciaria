import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import { Grid } from '@mui/material';

const columns = [
    {
      id: 'datam',
      label: 'Data Matrícula',
      minWidth: 80
    },
    { 
      id: 'student', 
      label: 'Estudante', 
      minWidth: 170 
    },
  
    { 
      id: 'course', 
      label: 'Curso', 
      minWidth: 170 
    },
  
    {
      id: 'init',
      label: 'Início',
      minWidth: 100
    },
  
    {
      id: 'end',
      label: 'Término',
      minWidth: 100,
    },
  
  
    {
      id: 'situation',
      label: 'Situação',
      minWidth: 170,
    },
  ];

export default function TableContent() {
    const [rows, setRows] = useState([
        {
            datam: '12/12/2012',
            student: 'CURTIS ALAN LISBOA GARCÊS | CPF: 22059741220 | INFOPEN: 9999999	',
            course: 'Inglês Anvaçado',
            init: '12/12/2012',
            end: '22/22/2022',
            situation: 'Aprovado'
        },
        {
          datam: '12/12/2012',
          student: 'CURTIS ALAN LISBOA GARCÊS | CPF: 22059741220 | INFOPEN: 9999999	',
          course: 'Inglês Anvaçado',
          init: '12/12/2012',
          end: '22/22/2022',
          situation: 'Em Andamento'
      },
        {
          datam: '12/12/2012',
          student: 'CURTIS ALAN LISBOA GARCÊS | CPF: 22059741220 | INFOPEN: 9999999	',
          course: 'Inglês Anvaçado',
          init: '12/12/2012',
          end: '22/22/2022',
          situation: 'Aprovado'
      },
      {
        datam: '12/12/2012',
        student: 'CURTIS ALAN LISBOA GARCÊS | CPF: 22059741220 | INFOPEN: 9999999	',
        course: 'Inglês Anvaçado',
        init: '12/12/2012',
        end: '22/22/2022',
        situation: 'Em Andamento'
    },
    {
      datam: '12/12/2012',
      student: 'CURTIS ALAN LISBOA GARCÊS | CPF: 22059741220 | INFOPEN: 9999999',
      course: 'Inglês Anvaçado',
      init: '12/12/2012',
      end: '22/22/2022',
      situation: 'Aprovado'
  },])
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [students, setStudents] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
  
  return (
    <Grid>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 740, width: '100%' }}>
        <table className='w-full'>
          <thead>
            <tr>
              <td className='p-2'>
                <p className='text-base font-semibold'>Data Matrícula</p>
              </td>

              <td className='p-2'>
                <p className="text-base font-semibold">Estudante</p>
              </td>

              <td className='p-2'>
                <p className="text-base font-semibold">Curso</p>
              </td>

              <td className='p-2'>
                <p className="text-base font-semibold">Início</p>
              </td>

              <td className='p-2'>
                <p className="text-base font-semibold">Término</p>
              </td>

              <td className='p-2'>
                <p className="text-base font-semibold">Situação</p>
              </td>
            </tr>
          </thead>
          <tbody className='w-full'>
          <tr className='w-full' style={{backgroundColor: 'rgb(255, 236, 178)'}}>
              <td className='p-2'>
                
              </td>
              <td className='p-2'>
                <h2 className='font-bold text-[#56645e] text-base'>PENITENCIÁRIA: ARUANA</h2>
              </td>

              <td className='border-l'>
                <h2 className='font-bold text-[#56645e] text-base'>UF: RO</h2>
              </td>


              <td className='p-2'>
                
              </td>

              <td className='p-2'>
                
              </td>

              <td className='p-2'>
                
              </td>

            </tr>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <tr className='hover:bg-gray-100' key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <td className={`${column.id === 'datam' ? 'w-40 border-l-0' : 'border-l border-gray-300'} p-2 border-b border-gray-300`} key={column.id} align={column.align}>
                          <p className={`${value === 'Aprovado' ? 'text-purple-700 font-semibold' : ''} ${value === 'Em Andamento' ? 'text-green-500 font-semibold' : ''}`}>{column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}</p>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  </Grid>
  )
}
