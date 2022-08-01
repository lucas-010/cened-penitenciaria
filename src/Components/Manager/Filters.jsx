import { Grid, MenuItem, TextField } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import {MdFilterAlt} from 'react-icons/md'
import {AiFillPrinter} from 'react-icons/ai'
import React, { useState } from 'react'

export default function Filters({searchEnter, filterData}) {
    const [date1, setDate1] = useState('')
    const [date2, setDate2] = useState('')
    const [date3, setDate3] = useState('')
    const [date4, setDate4] = useState('')
    const [statusCourse, setStatusCourse] = useState(0)
    const [searchValue, setSearchValue] = useState('')
  return (
    <div className='m-10'>
        <Grid container spacing={2}>
            <Grid item xs={10} md={7}>
                <TextField disabled value={'Penitenciária Aruana'} className='w-full'/>
            </Grid>

            <Grid item xs={10} md={4}>
                <TextField value={statusCourse} onChange={(e)=> setStatusCourse(e.target.value)} className='w-full' label='Situação do Curso' select>
                    <MenuItem value={0}>
                        Todos
                    </MenuItem>
                    <MenuItem value={1}>
                        Aguardando Pagamento
                    </MenuItem>

                    <MenuItem value={2}>
                        Em Andamento
                    </MenuItem>

                    <MenuItem value={3}>
                        Aprovado
                    </MenuItem>

                    <MenuItem value={4}>
                        Não Aprovado
                    </MenuItem>

                    <MenuItem value={5}>
                        Cancelado
                    </MenuItem>

                    <MenuItem value={6}>
                        Agendado
                    </MenuItem>

                    <MenuItem value={7}>
                        Re-Prova
                    </MenuItem>
                </TextField>
            </Grid>
            <LocalizationProvider adapterLocale={ptBR} dateAdapter={AdapterDateFns}>
            <Grid item xs={10} md={1.5}>
                <DesktopDatePicker className='w-full' inputFormat="dd/MM/yyyy" onChange={(e)=> setDate1(e)} label='Matrículas (a partir)' value={date1} renderInput={(props)=> <TextField {...props}/>}/>
            </Grid>

            <Grid item xs={10} md={1.5}>
                <DesktopDatePicker className='w-full' inputFormat="dd/MM/yyyy" onChange={(e)=> setDate2(e)} label='Matrículas (até)' value={date2} renderInput={(props)=> <TextField {...props}/>}/>
            </Grid>

            <Grid item xs={10} md={1.5}>
                <DesktopDatePicker className='w-full' inputFormat="dd/MM/yyyy" onChange={(e)=> setDate3(e)} label='Início (a partir)' value={date3} renderInput={(props)=> <TextField {...props}/>}/>
            </Grid>

            <Grid item xs={10} md={1.5}>
                <DesktopDatePicker className='w-full' inputFormat="dd/MM/yyyy" onChange={(e)=> setDate4(e)} label='Início (até)' value={date4} renderInput={(props)=> <TextField {...props}/>}/>
            </Grid>
            </LocalizationProvider>

            <Grid className='print:hidden' item xs={10}  md={1}>
                <button onClick={()=> filterData(date1, date2, date3, date4, statusCourse, searchValue)} className='text-lg font-bold w-full transition-colors mt-2 hover:bg-[#ff1b67] hover:shadow-xl text-white rounded-md justify-center p-2 shadow-lg flex items-center bg-[#ff4181]'><MdFilterAlt size={20}/>FILTRAR</button>
            </Grid>

            <Grid className='print:hidden' item xs={10}  md={2}>
                <button onClick={()=> window.print()} className='text-lg font-bold w-full transition-colors mt-2 hover:bg-[#ebe6e6] hover:shadow-xl rounded-md justify-center p-2 shadow-lg flex items-center bg-[#f0f0f0]'><AiFillPrinter size={20}/>Imprimir Página Atual</button>
            </Grid>

            <Grid item xs={10} md={11}>
                <TextField variant='standard' onKeyUp={(e)=> e.code === 'Enter' ? searchEnter(searchValue) : false} value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} label='Pesquisar por Estudante ou Curso' placeholder='Digite o Nome do Estudante ou o Curso (pressione "Enter" para pesquisar)' className='w-full'/>
            </Grid>
        </Grid>
    </div>
  )
}
