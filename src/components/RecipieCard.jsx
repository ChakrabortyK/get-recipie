import React from 'react'

import { Link } from 'react-router-dom';

const RecipieCard = (props) => {
    // eslint-disable-next-line


    return (
        <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
            {props.recipielist.map((array, index) => {
                return (
                    <div key={array.id} className="flex my-3 flex-col w-80  p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
                        <div className="h-40 flex justify-center overflow-hidden items-center rounded-xl">
                            <img src={array?.image_url} alt="recipe item" className="block w-full" />
                        </div>
                        <div>
                            <span className="text-sm text-cyan-700 font-medium">
                                {array?.publisher}
                            </span>
                            <h3 className="font-bold text-2xl truncate text-black">
                                {array?.title}
                            </h3>
                            <Link
                                to={`/recipie-info/${array?.id}`}
                                className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
                            >
                                Recipe Details
                            </Link>
                        </div>
                    </div>)
            })}
        </div>
    )
}

export default RecipieCard