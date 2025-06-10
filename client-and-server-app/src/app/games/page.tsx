'use client';

const Games = () => {

    console.log('This is a client component');
    const onsubmit = () => {
        console.log('search')
    }

  return (
    <div>
      <h1 className='text-center mt-10 mb-10 text-3xl font-bold text-white-800 '>Games</h1>
      {/* create simple form */}
      <form>
        <input type="text" placeholder='Search' />
        <button type='submit' onClick={onsubmit}>Search</button>
      </form>
    </div>
  )
}

export default Games