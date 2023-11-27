import React, { useState } from 'react';
import usePublicApi from '../Hooks/usePublicApi';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const xiosPublic = usePublicApi()

  const handleSearch = async () => {
    try {
      const response = await xiosPublic(`/searchContestsByTag?searchQuery=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
    console.log(searchResults)
  };


  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display search results */}
      {searchResults.map((contest) => (
        <div key={contest._id}>
          <h3>{contest.contestName}</h3>
          {/* Display other contest details */}
        </div>
      ))}
    </div>
  );
};

export default SearchComponent;
