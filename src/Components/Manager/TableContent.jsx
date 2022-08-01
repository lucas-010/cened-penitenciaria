import React, {useEffect, useState} from 'react';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import axios from 'axios';
import './Print.css'

const api = process.env.REACT_APP_API_KEY
const columns = [
    {
      id: 'datam',
      label: 'Data Matrícula',
      minWidth: 80
    },
    { 
      id: 'name', 
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

export default function TableContent({searchValueChange, date1, date2, date3, date4, statusCourse}) {
    const [rows, setRows] = useState([])
    const [idPeni, setIdPeni] = useState(45)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
    const formatStudentsAddRow = (students = [])=>{
      let rowsProvisory = []
      students.forEach(student=>{
        rowsProvisory.push({
          id: student.aluno.id,
          datam: student.dataMatricula ? new Date(student.dataMatricula).toLocaleDateString('pt-br') : 'N/D',
          name: `${student.aluno.nome} | ${student.aluno.cpf}`,
          course: `${student.curso.codigo} | ${student.curso.nome}`,
          init: student.inicioCurso ? new Date(student.inicioCurso).toLocaleDateString('pt-br') : 'N/D',
          end: student.terminoCurso ? new Date(student.terminoCurso).toLocaleDateString('pt-br') : 'N/D',
          situation: student.statusCursoDescricao,
        })
      })
      setRows(rowsProvisory)
    }
  useEffect(()=>{
    setPage(0)
    axios.get(`${api}/documentos/consultas/matriculas?IdPenitenciaria=${idPeni}${searchValueChange !== '' ? `&Search=${searchValueChange}` : ''}${statusCourse !== 0 ? `&StatusCurso=${statusCourse}` : ''}${date1 !== '' ? `&PeriodoDataMatricula.Inicio=${date1}` : ''}${date2 ? `&PeriodoDataMatricula.Final=${date2}` : ''}${date3 !== '' ? `&PeriodoDataInicioCurso.Inicio=${date3}` : ''}${date4 !== '' ? `&PeriodoDataInicioCurso.Final=${date4}` : ''}&limit=500`).then(response=>{
      formatStudentsAddRow(response.data)
    })
  }, [idPeni, date1, date2, date3, date4, searchValueChange, statusCourse])
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ width: '100%' }}>
        <table className='w-full'>
          <thead className='print:hidden'>
            <tr className="text-base print:flex-col print:flex font-semibold">
              <td className='p-2'>
                <p>Data da Matrícula</p>
              </td>

              <td className='p-2'>
                <p>Estudante</p>
              </td>

              <td className='p-2'>
                <p>Curso</p>
              </td>

              <td className='p-2'>
                <p>Início</p>
              </td>

              <td className='p-2'>
                <p>Término</p>
              </td>

              <td className='p-2'>
                <p>Situação</p>
              </td>
            </tr>
          </thead>
          <tbody className='w-full'>
          <tr className='text-center hidden w-full print:block text-2xl font-bold'>
            <td className='flex justify-center'>
              {'PENITENCIÁRIA ARUANA'} - {'RO'}
            </td>
          </tr>
          <tr className='w-full print:hidden' style={{backgroundColor: 'rgb(255, 236, 178)'}}>
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
                  <tr className='hover:bg-gray-100 print:rounded-lg print:border border-gray-300 print:mt-5 print:flex-col print:flex' key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <td className={`${column.id === 'datam' ? 'border-l-0' : 'border-l border-gray-300'} p-2 border-b border-gray-300`} key={column.id} align={column.align}>
                          <p className={`${value === 'Aprovado' ? 'text-purple-700' : ''} ${value === 'Em Andamento' ? 'text-green-500' : ''} ${value === 'Aguardando Pagamento' ? 'text-zinc-600' : ''} ${value === 'Agendado' ? 'text-blue-500' : ''} ${value === 'Não Aprovado' ? 'text-orange-400' : ''} ${value === 'Re-Prova' ? 'text-red-500' : ''} print:flex print:justify-between font-medium`}>
                            <span className='hidden text-black print:block'>
                              {column.label}
                            </span>

                            <span>
                              {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                            </span>
                          </p>
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
        labelRowsPerPage='Itens por Página'
        className='print:hidden'
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  )
}
