import React, { useEffect, useState } from 'react';
import usePublicApi from '../../Hooks/usePublicApi';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const xiosPublic = usePublicApi();

  useEffect(() => {
    if(searchQuery == null){
      setSearchResults([])
    }
  }, [searchResults,searchQuery]);


  console.log(searchQuery)
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await xiosPublic(`/searchContestsByTag?searchQuery=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleOptionChange = (event, value) => {
    setSelectedOption(value);
    setSearchQuery(value);
  };

  return (
    <div className="bg-gray-100 relative min-h-[40vh] pt-20 ">
        <div className="bg-[#605bf117] h-[400px] w-[1000px] rotate-45 rounded-r-full  overflow-x-hidden -right-[100px] -top-[500px] absolute"></div>
      <div className="bg-[#605bf117] h-[400px] w-[1000px] rotate-45 rounded-r-full  overflow-x-hidden -left-[450px] top-16 absolute "></div>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Discover Creativity on ContestHub</h1>
          <p className="mt-3 text-lg text-gray-500">Your participation will be highly appreciated</p>
        </div>
        <div className="mt-10">
          <form onSubmit={handleSearch} className="mx-auto max-w-xs">
            <div className="flex items-center pb-2 px-4 justify-between bg-white border-gray-500 ">
              <Autocomplete
                value={selectedOption}
                onChange={handleOptionChange}
                disablePortal
                id="combo-box-dropdown"
                className='w-full'
                options={['Business Contest', 'Medical', 'Coding']}
                sx={{ width: 200 }}
                renderInput={(params) => (
                  <TextField
                  onChange={(e) => setSearchQuery(e.target.value)}
                  {...params} label="Select Contest Type" variant="standard" />
                )}
              />
              <button
                className="flex-shrink-0 h-full mt-2 bg-primary hover:bg-[#524df9] text-sm text-white py-3 px-5 rounded"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
          <p className="mt-2 text-center text-gray-500 text-xs">We&apos;ll notify you when data is found.</p>
        </div>
        <div>
        {searchResults && <div>
          <div className="grid md:grid-cols-2 gap-11">

            {
              searchResults?.slice(0,4).map((contest,idx) => {

                return <div key={idx} className="min-h-[55vh] mb-8">
                <dl className="hero " style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
    
                  <div className="relative -bottom-[100px] mx-2 bg-[#ededffe2] p-3 rounded-lg">
                    <dt className="relative">
                      <div className=" ml-1 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white">
                        {/* Heroicon name: outline/globe-alt */}
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                      </div>
                      <div className="ml-1 mt-3">
                      <p className=" text-lg leading-6 font-medium text-gray-900">
                      {contest?.contestName}
                      </p>
                      <p className="mt-1 mb-3">Attemptants: <span className="px-1  bg-green-400  text-white rounded-full font-bold">{contest.participantsCount}</span> </p>
                      <p></p>
                      <p></p>
                      <p></p>
    
                      </div>
                    </dt>
                    <dd className="mt-2 ml-1 text-base text-gray-500 mb-8">
                      {contest.description}
                    </dd>
                    <div className="text-right px-3 mt-3">
                      <Link to={`/contest/${contest._id}`} className="bg-[#4f49ff] hover:bg-[#625df7] btn w-1/2 text-white ">Details</Link>
                    </div>
                  </div>
          
                </dl>
              </div>
              })
            }
         
        {/*  */}
       
      
       
          </div>
          </div>}

        </div>
      </div>
    </div>
  );
};

export default Banner;