import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BrowseCharacters = () => {
    const [heroes, setheroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchHeroes = async () => {
            try{
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=e300cc048336e0bd6aa3b1c1108fd34a&hash=8d4ee9b0c555dcfb579b1beeeb147d5f')
                console.log(response.data.data.results);
                setheroes(response.data.data.results)
                setLoading(false)              
            } catch (error){
                console.log('error fetching heroes', error);
                
            }
        }

        fetchHeroes();
    }, [])

    if(loading){
        return <h3>Loading Heros!!</h3>
    }

    return(
        <div>
            <h3><b>Hero Characters...</b></h3>
            {heroes.map(hero => (
                <div key={hero.id} className="character">
                    <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                        width="500" alt={hero.name}/>
                    <br/>
                    <Link to={`/characters/${hero.id}`}>{hero.name}</Link>
                </div>
            ))}
        </div>
    )

}

export default BrowseCharacters;