import React from 'react'
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {
    const navItems = [
        { id: 1, name: "Home" },
        { id: 2, name: "Services" },
        { id: 3, name: "About" },
        { id: 4, name: "Contact" }
    ];
    return (
        <div className='flex justify-between bg-blue-400 px-10 py-5 text-white '>
            <h1 className='text-2xl'>My Business</h1>
            <div className=''>
                <ul className='md:flex gap-10 hidden '>
                    {navItems.map((item) => (
                        <div key={item.id} >
                            <h1>{item.name}</h1>
                        </div>
                    ))}

                </ul>
                <div className='md:hidden text-2xl'>
                    <IoMdMenu />
                </div>
            </div>
        </div>
    )
}

export default Navbar
