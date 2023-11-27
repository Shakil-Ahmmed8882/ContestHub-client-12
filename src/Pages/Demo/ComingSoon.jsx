const Banner = () => {
  return (
    <div>
      <div className="bg-gray-100 relative min-h-screen pt-20">
        <div className="bg-[#605bf109] h-[400px] w-[1000px] rotate-45 rounded-r-full  overflow-x-hidden -right-[100px] -top-[500px] absolute ">
        </div>
        <div className="bg-[#605bf109] h-[400px] w-[1000px] rotate-45 rounded-r-full  overflow-x-hidden -left-[450px] top-16 absolute "> 
        </div>
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900">
            Discover Creativity on ContestHub -
            </h1>
            <p className="mt-3 text-lg text-gray-500">
              Your participation will be highly appreciated
            </p>
          </div>
          <div className="mt-10">
            <form className="mx-auto max-w-xs">
              <div className="flex items-center border-b bg-white border-gray-500 py-1">
                <input
                  type="email"
                  className="appearance-none  border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  placeholder="Enter your email"
                />
                <button
                  className="flex-shrink-0 h-full bg-primary hover:bg-[#524df9]  text-sm  text-white py-3 px-2 rounded"
                  type="submit">
                  search here..
                </button>
              </div>
            </form>
            <p className="mt-2 text-center text-gray-500 text-xs">
              We ll notify you when we launch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;



