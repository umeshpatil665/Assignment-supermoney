import { Input } from '@/components/ui/input'
import { Search, X } from 'lucide-react'
import  { useState } from 'react'
import { Button } from '../../ui/button'

interface InputSearchProps{
    onchange:(val:string)=>void,
  
    placeholderName:string
    id:string
}
const InputSearch = ({onchange,placeholderName,id}:InputSearchProps) => {
    const [value,setValue]=useState("")
  return (
    <div className='w-full relative flex items-center'>
        <Input
        value={value}
        onChange={(e:any)=>setValue(e.target.value)}
        placeholder={placeholderName}
        id={id}
        className='h-10 bg-white border border-gray-500 pr-10'
        />
        {
          value && <div className='absolute left-[88%] text-gray-500 cursor-pointer' onClick={()=>{setValue(''); onchange('')}}>
          <X className=' w-5 h-5' />
          </div>
        }
        
       
       
        <Button className='absolute left-[95%] border border-gray-500 bg-gray-100 hover:bg-gray-100'  onClick={()=>onchange(value)} variant={'outline'}>
        <Search/>
        </Button>
       
    </div>
  )
}

export default InputSearch