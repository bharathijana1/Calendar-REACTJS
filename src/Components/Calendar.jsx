import React, { useEffect, useState } from 'react'

const Calendar = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const [ selectedDate, setSelectedDate ] = useState(new Date());
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  const daysInMonth = () => {
    const daysArray = [];

    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(),1)
    const lastDay = new Date(selectedDate.getFullYear(),selectedDate.getMonth()+1 , 0)
    console.log("firstday", firstDay);
    console.log("laseday", lastDay);
    for(let i=0; i<firstDay.getDay(); i++){
      daysArray.push(null)
    }
    for(let i=1; i<= lastDay.getDate(); i++){
      daysArray.push(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i))
    }
    return daysArray;
  }
  daysInMonth();


  const handlechangemonth = (e) => {
    const newMonth = parseInt(e.target.value, 10);
    setSelectedDate(new Date(selectedDate.getFullYear(), newMonth, 1))
  }

  const handlechangeyear = (e) => {
    const newYear = parseInt(e.target.value, 10);
    setSelectedDate(new Date( newYear, selectedDate.getMonth(), 1));
  }

  const handleTodayClick = () => {
    setSelectedDate(currentDate); 
  };

  return (
    <div className='flex items-center h-screen flex-col'>
      <h1 className='text-2xl font-semibold p-4 '>Daily calender</h1>
      <div className=' border w-full md:w-1/2 lg:w-2/5 flex flex-col ' >
      <div className='bg-lime-300 border-2 border-lime-400 p-2 '>
      <div>
          <h1 onClick={handleTodayClick} className='bg-gray-50 hover:bg-gray-100 text-center font-medium text-xl uppercase cursor-pointer py-2 mb-2'>today</h1>
        </div>
      <div className='flex justify-between items-center gap-1'>
      <button><img src="../src/Components/img/back.png" alt="back icon" className='w-10 cursor-pointer' 
        onClick={()=> {setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1 , 1 ))}} />
      </button>
        <select className='border border-gray-400 cursor-pointer text-xl ps-6 rounded-sm p-1 outline-none py-2' value={selectedDate.getMonth()} onChange={handlechangemonth}>
          {month.map((months, index) => (
            <option key={index} value={index}>{months}</option>
          ))}
        </select>
        <select className='border border-gray-400 cursor-pointer text-xl ps-6 rounded-sm p-1 outline-none py-2 '  value={selectedDate.getFullYear()} onChange={handlechangeyear}>
          {Array.from({length:10}, (_, i) => selectedDate.getFullYear() -5 + i).map((year) => (
            <option key={year} value={year}>{" "} {year}</option>
          ))}
        </select>
        <button><img src="../src/Components/img/next.png" alt="next icon" className='w-10 cursor-pointer' 
        onClick={()=> {setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1 ,1 ))}}
        />
        </button>
      </div>
        
        <div className='grid grid-cols-7 gap-2 mt-6 content-center justify-center'>
          {days.map((day, index)=>(
            <>
            <h1 key={index} className={`text-base md:text-2xl font-medium hover:bg-lime-600  py-1 md:p-3 text-center ${day == "Sun" || day == "Sat" ? 'text-red-600' : ''} `}>{day}</h1>
            </>
          ))}
        </div>
        

      </div>
      
      <div className='bg-gray-50 grid grid-cols-7 gap-2 content-center justify-center m-2'>
          {daysInMonth().map((day, index) => {
            const dayNumber = day ? day.getDate() : null;
            const isToday = dayNumber === currentDay && day?.getMonth() === currentDate.getMonth() && day?.getFullYear() === currentDate.getFullYear();

            return (
              <h1
                key={index}
                className={`text-xl text-center py-2 font-medium border border-gray-300 
                ${day ? 'hover:bg-lime-300' : ''} 
                ${isToday ? 'bg-lime-300' : ''}`}
              >
                {dayNumber ? dayNumber : ''}
              </h1>
            );
          })}
        </div>
        
        
    </div>

    </div>
    
  )
}

export default Calendar
