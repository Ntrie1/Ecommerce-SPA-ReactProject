const SearchDevice = () => {

    return(
        <div className="bg-gray-800 p-4 mb-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-white mb-4">Search Devices</h2>
      <div className="flex items-center">
        <input
          type="text"
        //   value={searchTerm}
        //   onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by brand..."
          className="flex-1 p-3 border border-gray-600 rounded-l-md focus:outline-none"
        />
        <button
        //   onClick={handleSearch}
          className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-600 transition duration-300 focus:outline-none"
        >
          Search
        </button>
      </div>

      {/* {searchResults.length > 0 && ( */}
        <div className="mt-4 flex flex-wrap gap-4">
          {/* <h3 className="text-xl font-semibold text-white mb-2">Search Results:</h3> */}
          {/* {searchResults.map((result) => ( */}
            <div
            //   key={result.id} // Use a unique identifier for each result
              className="bg-white p-4 rounded-md shadow-md flex flex-col items-center"
            >
                <img
                // src={result.imageUrl} // Assuming there is an 'imageUrl' property in the result
                // alt={`${result.brand} ${result.deviceType}`}
                className="w-32 h-32 object-cover mb-2 rounded-md"
              />
              <h4 className="text-lg font-semibold mb-2">device type</h4>
              <p className="text-gray-600 mb-2">brand</p>
              <p className="text-gray-700 font-bold">$25</p>
              <button
                // onClick={() => console.log(`Details for ${result.deviceType} ${result.brand}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Details
              </button>
            </div>
         {/*  ))}    */}
        </div>
      {/* )} */}
    </div>
    );
}

export default SearchDevice