import React, { useContext } from 'react'
import RecipieCard from '../components/RecipieCard';
import { GlobalContext } from '../context';


const Favorites = () => {
    const { favorites } = useContext(GlobalContext)


    return (<>
        {favorites.length > 0 ? (
            <RecipieCard recipielist={favorites} />) : (
            <div>
                <p className="lg:text-4xl my-5 text-xl text-center text-black font-extrabold">
                    Nothing to show. Please search something
                </p>
            </div>
        )}
    </>)
}

export default Favorites