import { createContext, useState, useEffect } from 'react';
export const SearchContext = createContext();

export default function SearchProvider({ children }) {
    const [animes, setAnimes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAnimes, setFilteredAnimes] = useState([]);

    useEffect(() => {
        fetch('https://anime-store-db.onrender.com/animes')
            .then((res) => res.json())
            .then((res) => {
                setAnimes(res);
                setIsLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setIsLoading(false); // Ensure loading is set to false even if there's an error
            });
    }, []);

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
