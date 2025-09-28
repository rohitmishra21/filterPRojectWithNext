import React from 'react'

const Card = ({ item }) => {

    const { id, title, subtitle, description, tags, image, avatar, link } = item;



    return (
        <div className="border p-4 rounded shadow-md max-w-sm">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
            <div className="flex items-center mt-3">
                <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <h2 className="font-bold text-lg">{title}</h2>
                    <p className="text-sm text-gray-500">{subtitle}</p>
                </div>
            </div>
            <p className="mt-3 text-gray-700">{description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">{tag}</span>
                ))}
            </div>

        </div>
    )
}

export default Card
