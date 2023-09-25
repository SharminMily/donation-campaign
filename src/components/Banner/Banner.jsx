// import Header from '../Header/Header';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner w-full h-[60vh]'>
            {/* <Header></Header> */}

            <div className='flex flex-col justify-center items-center md:pt-32 pt-10'>
                <h1 className="pb-8 md:text-3xl font-bold">
                    I Grow By Helping People In Need
                </h1>
                <div className="flex justify-center items-center ">
                    <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
                        <input
                            type="email"
                            className="peer h-full w-full rounded-[7px] border border-black border-t-transparent bg-transparent md:px-20 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 placeholder-shown:border-t-black focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-00"
                            placeholder=""
                            required
                        />
                        <button
                            className="!absolute right-1 top-1 z-10 select-none rounded bg-[#FF444A;] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-00/40 focus:opacity-[85] focus:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-550 peer-placeholder-shown:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Search
                        </button>
                        <label className="pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-1 before:border-blue-gray-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-black after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-black font-bold peer-focus:before:border-t-2 peer-focus:before:border-l-2  peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-black peer-disabled:text-transparent peer-border-transparent peer-border-transparent peer-placeholder-shown:text-blue-gray-00">
                            Search here...
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;