import React from 'react';
import {useState} from 'react';
import mixtapeContext from '../context/mixtapeContext.jsx';
import Song  from '../Song.jsx';



export default MixtapeProvider({children,songs,genre,sortOrder}){

    const [genre, setGenre] = useState("tous");
    const [sortOrder, setSortOrder] = useState("ascending");

    return(
        <mixtapeContext.Provider value={{Songs}}>
            {children}
        </mixtapeContext.Provider>
    );
}