import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    // redirect('/')
  return (
    <div>
      <h1 className='text-center mt-10 mb-10 text-3xl font-bold text-gray-800 '>404 Page Not Found</h1>
      <Link href={'/'} className='text-blue-500 hover:text-blue-700 text-center'>Back to Home</Link>
    </div>
  )
}

export default NotFound