import React, { useContext } from 'react'
import RecipieCard from '../components/RecipieCard';
import { GlobalContext } from '../context';


const Home = () => {
    const { recipielist } = useContext(GlobalContext)


    return (<>
        {recipielist.length > 0 ? (
            <RecipieCard recipielist={recipielist} />) : (
            <div>
                <p className="lg:text-4xl my-5 text-xl text-center text-black font-extrabold">
                    Nothing to show. Please search something
                </p>
            </div>
        )}
    </>)
}

export default Home