"use client";
import React, { useState } from 'react'
import Card from './Card'
import { arr } from "../../utils/contant";

const CardContaner = () => {

    const [query, setquery] = useState("")

    const filtered = arr.filter((elem) =>
        elem.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <div className='flex justify-center'>
                <input
                    className='outline-none border px-2 py-1 w-80 mb-4'
                    type="text"
                    placeholder='search..'
                    value={query}
                    onChange={(e) => setquery(e.target.value)}
                />

            </div>

            <div className='grid xl:grid-cols-4 gap-4'>
                {filtered.map((elem) => (
                    <Card key={elem.id} item={elem} />
                ))}
            </div>
        </div>
    )

}

export default CardContaner
