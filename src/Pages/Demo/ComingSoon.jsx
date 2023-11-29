import React, { useEffect, useState } from 'react';
import usePublicApi from '../../Hooks/usePublicApi';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import { BsCurrencyDollar, BsEyeFill, BsFillPeopleFill, BsToggleOn } from 'react-icons/bs';

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
                options={['Business', 'Medical','Writing','Gaming','Tech', 'Coding',"FPS", "Gaming", "Shootout", "Battle Royale", "Sniper"]}
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
          <p className="mt-2 text-center text-gray-500 text-xs mb-6">We&apos;ll notify you when data is found.</p>
        </div>
        <div>
        {searchResults && <div>
          <div className="grid md:grid-cols-2 gap-11">

          {/* ================ */}

          {
            searchResults && searchResults.length > 0 &&

            searchResults?.map(item => {
              const {
                _id,
                contestName,
                image,
                description,
                prizeMoney,
                taskSubmissionInstructions,
                tags,
                deadline,
                status,
                winnerID,
                type,
                creatorID,
                participants,
              } = item
            

              return (
                <div key={item._id} className="antialiased    text-gray-900 min-h-[100px] relative">
                <div className=" relative rounded-lg h-full w-full">
                  <div className="relative ">
                 
                    <div className=" bg-white inset-0 opacity-20 mix-blend-multiply rounded-t-lg" />
                  </div>
                  <div className="p-6 rounded-lg bg-white text-black pt-11">
                  <img
                      className="w-11 h-11 absolute -top-4 -left-4 border-2 border-[#8d8888]  rounded-full object-bottom "
                      src={image || "https://via.placeholder.com/600x400"}
                      alt={contestName || "Contest Image"}
                    />
                    {/* Rest of the content */}
                    <div className="flex items-baseline">{/* ... */}</div>
                    <h4 className="font-bold text-[19px] leading-tight truncate">
                      {contestName || "Beautiful Home in the countryside"}
                    </h4>
                      <p className="text-[16px] text-gray-500 mt-2">
                      {description.length > 50?description.slice(0,40):description + "we are happy to see you in contestHub"}
                    </p>
                    {/* ... */}
                      <div className=" mt-2 flex rounded-lg  items-center gap-1">
                      <BsFillPeopleFill className="text-[24px] text-gray-400"></BsFillPeopleFill>Participants
                      <p className="w-11 h-4 py-3 my-2  rounded-full bg-[#00A7F5] flex text-white  items-center justify-center">
                    {participants.length}
                    </p>
                    </div>
                      <div className=" font-bold mt-2 flex w-[150px]  rounded-lg  items-center gap-1">
                      <BsCurrencyDollar className="font-bold text-2xl text-gray-500"></BsCurrencyDollar>
                      <p className="text-white flex bg-redAccent px-5 py-1 text-[13px] rounded-lg font-bold  items-center justify-center">
                    {prizeMoney}
                    </p>
                    </div>
                    <div className="flex gap-3 items-center ">
                    
                    </div>
                      <Link className="flex gap-2 relative font-bold justify-end cursor-pointer  items-center text-[17px]" to={`/contest/${_id}`}>
                        view
                      <BsEyeFill className="text-gray-400 mt-2"></BsEyeFill>
                      </Link>
                <BsToggleOn className="absolute top-6 right-6 text-2xl text-gray-400 "></BsToggleOn>
                  </div>
                </div>
              </div>
              )
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