import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context';

const Details = () => {
    const params = useParams();
    const { recipieDetails, setRecipieDetails, handleAddToFavorite, favorites } = useContext(GlobalContext);
    // console.log(params);
    useEffect(() => {
        async function fetchRecipieDetails() {
            const data = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`)
            const result = await data.json()
            setRecipieDetails(result.data?.recipe)
        }
        fetchRecipieDetails()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="row-start-2 lg:row-start-auto">
                <div className="h-96 overflow-hidden rounded-xl group">
                    <img
                        src={recipieDetails?.image_url}
                        className="w-full h-full object-cover block group-hover:scale-105 duration-300"
                        alt='...'
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <span className="text-sm text-cyan-700 font-medium">
                    {recipieDetails?.publisher}
                </span>
                <h3 className="font-bold text-2xl truncate text-black">
                    {recipieDetails?.title}
                </h3>
                <div>
                    <button
                        onClick={() => handleAddToFavorite(recipieDetails)}
                        className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
                    >
                        {favorites && favorites.length > 0 && favorites.findIndex((item) => item.id === recipieDetails?.id) !== -1
                            ? "Remove from favorites"
                            : "Add to favorites"}
                    </button>
                </div>
                <div>
                    <span className="text-2xl font-semibold text-black">
                        Ingredients:
                    </span>
                    <ul className="flex flex-col gap-3">
                        {recipieDetails?.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <span className="text-2xl">
                                    {ingredient.quantity} {ingredient.unit}
                                </span>
                                <span className="text-2xl  ">
                                    {"  " + ingredient.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Details