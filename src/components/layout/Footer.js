import React from 'react'

function Footer() {

    const date = new Date();
    const tDate = date.getFullYear();

    return (


        <div>
            
            <footer className="navbar px-1 py-4 bg-dark text-dark mt-5">

<p className="text-warning">&copy; {tDate} Blog</p> 
 
   </footer>

        </div>
    )
}

export default Footer
