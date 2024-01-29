import { useState } from "react"
import { GlobalContext } from "../index"
import { useNavigate } from "react-router-dom";


export default function SearchState({ children }) {
    const [searchParams, setsearchParams] = useState('')
    const [loading, setloading] = useState(false)
    const [recipielist, setrecipeList] = useState([])
    const [recipieDetails, setRecipieDetails] = useState(null)
    const [favorites, setFavorites] = useState([])

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setloading(true)
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`)
            const data = await res.json();
            if (data.status === 'success') {
                setrecipeList(data?.data?.recipes);
                setloading(false);
                setsearchParams("");
                navigate('/')
            } else
                console.error(data.status)

        } catch (error) {
            console.error(error.message)
        }
    }

    const handleAddToFavorite = (recipie) => {
        // console.log(recipie.id)
        let cpyFavoritesList = [...favorites];
        const index = cpyFavoritesList.findIndex(item => item.id === recipie.id)
        if (index === -1) {
            cpyFavoritesList.push(recipie)
        } else {
            cpyFavoritesList.splice(index, 1)
        }

        setFavorites(cpyFavoritesList);
        console.log(cpyFavoritesList)
    }

    return <GlobalContext.Provider value={{
        searchParams,
        setsearchParams,
        handleSubmit,
        loading,
        recipielist,
        recipieDetails,
        setRecipieDetails,
        handleAddToFavorite,
        favorites
    }} >{children}</GlobalContext.Provider>
}