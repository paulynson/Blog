import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar px-1 py-4 bg-dark text-dark mb-5">

         <h4 className="text-warning">Blog-All</h4> 
         <div className="">
             <a href="/" className="text-light">Home</a>
             <a href="/create" className="btn btn-outline-warning mx-3">Create New Blog</a>
             </div>      
            </nav>
        </div>
    )
}

export default Navbar
