/* eslint-disable react/prop-types */
// import DonateCard from "./DonateCard";

// const AllDonate = ({ donates, search }) => {

//     return (
//         <div className=" max-w-6xl mx-auto">
//             <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
//                 {/* hello: {donates.length} */}
          
//             {
//                 donates?.map(donate => <DonateCard key={donate.id} donate={donate} search={search}></DonateCard>)
//             }
                   
//             {
//                 search?.map(donate => <DonateCard key={donate.id} donate={donate} search={search}></DonateCard>)
//             }           

            
//             </div>
//         </div>
//     );
// };

// export default AllDonate;




/* eslint-disable react/prop-types */




/* eslint-disable react/prop-types */
import DonateCard from "./DonateCard";

const AllDonate = ({ donates, search, isSearchOpen }) => {

    return (
        <div className=" max-w-6xl mx-auto">
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {/* Conditionally render the donates data based on isSearchOpen */}
                {!isSearchOpen && donates?.map(donate => <DonateCard key={donate.id} donate={donate} search={search}></DonateCard>)}
                   
                {/* Always render the search results */}
                {search?.map(donate => <DonateCard key={donate.id} donate={donate} search={search}></DonateCard>)}
            </div>
        </div>
    );
};

export default AllDonate;