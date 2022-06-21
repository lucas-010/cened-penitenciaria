import React from 'react'
import './fontGabriolaUser.css'


export default function Bottom() {
  return (
    <div className='bg-[#E5E7EB] p-8'>
      <div className='flex flex-col lg:flex-row text-2xl justify-around p-4'>
        <p><span className="font-gabriola font-bold">“O ser humano é aquilo que a educação faz dele.”</span> <span className="narrow text-base">Immanuel Kant, filósofo alemão.</span></p>
        <p className='mt-10 lg:mt-0'><span className="font-gabriola font-bold">“Só a educação liberta.”</span> <span className="narrow text-base">Epicteto, filósofo grego.</span></p>
      </div>
    </div>
  )
}
