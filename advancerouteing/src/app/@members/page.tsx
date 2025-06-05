import Link from 'next/link'
import React from 'react'

const Members = () => {

// if(2<4){
//   throw new Error('error');
// }

  return (
    <div className='border p-[10rem] w-[30rem]'>Members
    
    <Link href="./salaries">Go to salary page</Link>
    </div>
  )
}

export default Members