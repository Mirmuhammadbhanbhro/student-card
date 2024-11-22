import React from 'react'
import StudentCard from '../app/components/card'
interface Student {
  name: string;
  age: number;
  rollNumber: string;
  className: string;
}

const Home = () => {
  const students: Student[] = [
    {
      name: 'Mir Muhammad', age: 19, rollNumber: '471297' , className: '12th'
    },
    {
      name: 'Younis', age: 26, rollNumber: '2000' , className: 'BAth'
    },
    {
      name: 'Irfan', age: 17, rollNumber: '9874' , className: '11th'
    },
  ]
  return (
    
    <div className=' flex md:flex-row flex-col justify-center items-center min-h-screen bg-blue-500 px-4'>
      
      {students.map((student , index) => (
        <StudentCard 
        key={index}
        name={student.name}
        age={student.age}
        rollNumber={student.rollNumber}
        className={student.className}
        />

      ))}
     

</div>
    
    
    
  )
}

export default Home