import { Grid, MenuItem, TextField } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from 'date-fns/locale';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import {MdFilterAlt} from 'react-icons/md'
import {AiFillPrinter} from 'react-icons/ai'
import React, { useState } from 'react'

export default function Filters() {
    const [dateRegistration1, setDateRegistration1] = useState('')
    const [dateRegistration2, setDateRegistration2] = useState('')
    const [dateRegistration3, setDateRegistration3] = useState('')
    const [dateRegistration4, setDateRegistration4] = useState('')
  return (
    <div className='m-10'>
        <Grid container spacing={2}>
            <Grid item xs={10} md={7}>
                <TextField disabled value={'Penitenciária Aruana'} className='w-full'/>
            </Grid>

            <Grid item xs={10} md={4}>
                <TextField className='w-full' label='Situação do Curso' select>
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

            <Grid item xs={10} md={1.5}>
                <LocalizationProvider adapterLocale={ptBR} dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker className='w-full' inputFormat="dd/MM/yyyy" onChange={(e)=> setDateRegistration1(e)} label='Matrículas (a partir)' value={dateRegistration1} renderInput={(props)=> <TextField {...props}/>}/>
                </LocalizationProvider>
            </Grid>

            <Grid item xs={10} md={1.5}>
                <LocalizationProvider adapterLocale={ptBR} dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker className='w-full' inputFormat="dd/MM/yyyy" onChange={(e)=> setDateRegistration2(e)} label='Matrículas (até)' value={dateRegistration2} renderInput={(props)=> <TextField {...props}/>}/>
                </LocalizationProvider>
            </Grid>

            <Grid item xs={10} md={1.5}>
                <LocalizationProvider adapterLocale={ptBR} dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker className='w-full' inputFormat="dd/MM/yyyy" onChange={(e)=> setDateRegistration3(e)} label='Início (a partir)' value={dateRegistration3} renderInput={(props)=> <TextField {...props}/>}/>
                </LocalizationProvider>
            </Grid>

            <Grid item xs={10} md={1.5}>
                <LocalizationProvider adapterLocale={ptBR} dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker className='w-full' inputFormat="dd/MM/yyyy" onChange={(e)=> setDateRegistration4(e)} label='Início (até)' value={dateRegistration4} renderInput={(props)=> <TextField {...props}/>}/>
                </LocalizationProvider>
            </Grid>

            <Grid item xs={10}  md={1}>
                <button className='text-lg font-bold w-full transition-colors mt-2 hover:bg-[#ff1b67] hover:shadow-xl text-white rounded-md justify-center p-2 shadow-lg flex items-center bg-[#ff4181]'><MdFilterAlt size={20}/>FILTRAR</button>
            </Grid>

            <Grid item xs={10}  md={2}>
                <button className='text-lg font-bold w-full transition-colors mt-2 hover:bg-[#ebe6e6] hover:shadow-xl rounded-md justify-center p-2 shadow-lg flex items-center bg-[#f0f0f0]'><AiFillPrinter size={20}/>Imprimir Página Atual</button>
            </Grid>

            <Grid item xs={10} md={11}>
                <TextField label='Pesquisar por Estudante ou Curso' placeholder='Digite o Nome do Estudante ou o Curso (pressione "Enter" para pesquisar)' className='w-full'/>
            </Grid>
        </Grid>
    </div>
  )
}
