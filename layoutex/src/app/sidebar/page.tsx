import React from 'react'

const SideBar = () => {
  return (
    <div className="flex flex-1 max-w-6xl mx-auto w-full p-4 space-x-6">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <ul className="space-y-2">
            <li>Technology</li>
            <li>Design</li>
            <li>Business</li>
          </ul>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">Latest Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Post 1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Post 2</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Post 3</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </main>
      </div>
  )
}

export default SideBar