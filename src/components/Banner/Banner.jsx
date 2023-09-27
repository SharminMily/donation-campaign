// import Header from '../Header/Header';
import { useState } from 'react';
import './Banner.css'
import AllDonate from '../Donation/AllDonate';

const Banner = ({donates}) => {
    const [ search, setSearch] = useState()

    // console.log(donates)
    const handleSearch = (e) => {
        e.preventDefault()

        const searchValue = e.target.search.value
        // console.log(searchValue);

        // const filterData = donates?.filter(donate=> donate.category === searchValue)
        const filterData = donates?.filter(donate=> donate.category.toLowerCase().includes(searchValue.toLowerCase()))
        setSearch(filterData)
    
        // console.log(filterData);
    }

    return (
        <div className='banner w-full h-[60vh]'>
            {/* <Header></Header> */}

            <div className='flex flex-col justify-center items-center md:pt-32 pt-10'>
                <h1 className="pb-8 md:text-3xl font-bold">
                    I Grow By Helping People In Need
                </h1>
                < div className=" absolute lg:bottom-[43%] bottom-[18%] md:w-[100vh] w-full px-20">
                    <form  onSubmit={handleSearch}>
                        <label className="mb-2 text-sm font-medium text-black sr-only dark:text-black">
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-black dark:text-black"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path

                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                name="search"
                                id="default-search"
                                className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search by category..."
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-[#FF444A] hover:bg-[#FF444A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-[#ec2027] dark:focus:ring-[#ec2027]"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                
            </div>

             <AllDonate search={search} ></AllDonate>

        </div>
    );
};

export default Banner;