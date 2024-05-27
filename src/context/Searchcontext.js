import { createContext, useState, useEffect } from 'react';
export const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [animes, setAnimes] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAnimes, setFilteredAnimes] = useState([]);

    useEffect(() => {
        if (searchTerm) {
            const lowerCaseQuery = searchTerm.toLowerCase();
            const filtered = animes.filter(anime =>
                anime.title.toLowerCase().includes(lowerCaseQuery)
            );
            setFilteredAnimes(filtered);
        } else {
            setFilteredAnimes(animes);
        }
    }, [animes, searchTerm]);

    const contextData = {
        animes: filteredAnimes,
        setSearchTerm
    };
    
    return (
        <SearchContext.Provider value={contextData}>
            {children}
        </SearchContext.Provider>
    );
}
