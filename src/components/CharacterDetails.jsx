import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CharacterDetail() {

    const{id} = useParams();
    const [hero, setHero] = useState(null);
    
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchHero = async () => {
            try{
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?limit=5&ts=1&apikey=e300cc048336e0bd6aa3b1c1108fd34a&hash=8d4ee9b0c555dcfb579b1beeeb147d5f`)

                console.log(response.data);
                setHero(response.data.data.results[0]);
                setLoading(false);
            } catch (error){
                console.error("error fetching heroes", error);
            }
        }

        fetchHero();
    }, [id])

   
    if(loading){
        return <h3>Pulling Hero Information!</h3>
    }

    return (
        <div>
            <br/>
            <Link to={'/characters'}>Back to see All Hero Characters!</Link>
            <br/>

            <div>
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    width="500" alt={hero.name}/>

                <h3>{hero.name}</h3>

                {hero.description &&
                    <div>
                        <h4>Description of Hero</h4>
                        <p>{hero.description}</p>
                    </div>
                }

                <h4>Associated Comics:</h4>
                {hero.comics.items.map(comic => (
                    <div key={comic.resourceURI}>
                        {comic.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CharacterDetail;