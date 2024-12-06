import React from 'react'

function Header() {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid m-4">
               <span> <i class="fa-solid fa-calendar-check mx-3 text-success fa-2x"></i>  <h3 style={{display:'inline'}} className='text-dark'>To-Do List</h3></span>
                </div>
            </nav>
        </div>
    )
}

export default Header
