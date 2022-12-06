import ss from '../assets/Group 70.svg'
import mmm from '../assets/Group 81.svg'
import { useState } from 'react';
const Agenda = () => {
    const [day1,setDay1]=useState([
        {
            id : 1 ,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#FF8F2B]"
        },
        {
            id : 2,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#966CEF]"
            
        },
        {
            id : 3 ,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#FA3A4B]"

        },
        {
            id : 4 ,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#1652F5]"

        },
        {
            id : 5,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#2EC740]"

        },
        {
            id : 6 ,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin", 
            color:"border-[#FFBF3A]"

        },
    ])
    const [day2,setDay2]=useState([
        {
            id : 1 ,
            starttTime:"0000 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#FF8F2B]"
        },
        {
            id : 2,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#966CEF]"
            
        },
        {
            id : 3 ,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#FA3A4B]"

        },
        {
            id : 4 ,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#1652F5]"

        },
        {
            id : 5,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#2EC740]"

        },
        {
            id : 6 ,
            starttTime:"9:30 AM",
            endTime:"100 AM",
            task:"Chekin", 
            color:"border-[#FFBF3A]"

        },
    ])
    const [day3,setDay3]=useState([
        {
            id : 1 ,
            starttTime:"9999 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#FF8F2B]"
        },
        {
            id : 2,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#966CEF]"
            
        },
        {
            id : 3 ,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#FA3A4B]"

        },
        {
            id : 4 ,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#1652F5]"

        },
        {
            id : 5,
            starttTime:"9:30 AM",
            endTime:"10:00 AM",
            task:"Chekin",
            color:"border-[#2EC740]"

        },
        {
            id : 6 ,
            starttTime:"9:30 AM",
            endTime:"99999 AM",
            task:"Chekin", 
            color:"border-[#FFBF3A]"

        },
    ])
    const [agenda,setAgenda]=useState(day1)
    const [value,setvalue]=useState(1)
    const handlClick1 =()=>{
        setAgenda(day1)

    }
    const handlClick2 =()=>{
        setAgenda(day2)
    }
    const handlClick3 =()=>{
            setAgenda(day3)
    
        }
    

    
    return ( 
        <div className='flex justify-center'>
        <div className=" flex justify-center w-[60%] ">
        <div className="w-[25%] bg-[#0C0E24] bg-opacity-90 rounded-sm border-1">
          <div className='flex w-full justify-center py-2 '>
      <div   className=' mr-2 bg-[#C13A2F] text-[#C13A2F] rounded-full w-fit py-1 shadow-md shadow-gray-150'>
        ABC
      </div>
      <div className=' mr-2 bg-[#CC8B0B] text-[#CC8B0B] rounded-full w-fit py-1 shadow-md shadow-gray-150'>
        ABC
      </div>
      <div className='mr-2 bg-[#45A738] text-[#45A738] rounded-full w-fit py-1 shadow-md shadow-gray-150 '>
        ABC
      </div>
         </div>
         <div className='p-5 '>
                <button onClick={handlClick1}  className='flex p-2 mb-2 items-center hover:cursor-pointer hover:bg-[#FFF] rounded-xl w-full hover:bg-opacity-25'> 
                    <div><img src={mmm} alt='fff' className='w-[75%]'/> </div>
                    <div className='ml-1 text-[#FFF]'>DAY 1</div>
                </button>
               <button onClick={handlClick2}  className='flex p-2 mb-2 items-center hover:cursor-pointer hover:bg-[#FFF] rounded-xl w-full hover:bg-opacity-25'   >
                    <div><img src={mmm} className='w-[75%]' alt='ccc'/></div>
                    <div className='ml-1 text-[#FFF]'>DAY 2</div>
                </button>
                <button  onClick={handlClick3}  className='flex p-2 mb-2 items-center hover:cursor-pointer hover:bg-[#FFF] rounded-xl w-full hover:bg-opacity-25'>
                    <div> <img src={mmm} alt='ddd' className='w-[75%]'/></div>
                    <div className='ml-1 text-[#FFF]'>DAY 3</div>
                </button>
         </div>
         

          </div>
          <div className="w-[75%] bg-[#FFF] border-r-2">
            <div className="p-2 py-4 text-center bg-[#0C0E24] font-semibold text-[#338CE1] text-[26px]  border-1 shadow-md">Agenda</div>
            <div className="   ">
               {agenda.map((elem)=>{
        return(
        <div className="flex justify  p-2 border-b-2 " key={elem.id}>
             <div className=" flex-items:center mr-2 px-2 ">
                 <div className='font-semibold font-semibold text-[18px] text-center'>{elem.starttTime}</div>
                 <div className='text-[background: #B4B4B4;] text-[14px] opacity-75 text-center'>{elem.endTime}</div>
             </div>
             <div className={`flex-items:center  border-l-4 ${elem.color} mb-2 px-2 ml-2`}>
                <div className='text-[14px] opacity-75'>General</div>
             <div className='font-semibold text-[18px]'>{elem.task}</div>
 
             </div>
         </div>)
       })}
               
               
            </div>
           
          
          </div>
        </div>
        </div> ) ;
}
 
export default Agenda;