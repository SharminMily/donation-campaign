/* eslint-disable react/prop-types */
import { useState } from "react";
import DonateCard from "./DonateCard";

const AllDonate = ({ donates, search }) => {

//     const [isSearch, setIsSearch] = useState()
//     const [isDonates, setIsDonates] = useState()

//     if(isSearch){
//      const displayData = donates?.map(donate => donate.id.search={search})  
//      setIsSearch (displayData)  
//    } 
//    else{
//     const isDonates = donates?.map(donate => donate.id.search={search})  
//     setIsDonates (isDonates)  
//    }

    console.log(search)
    return (
        <div className=" max-w-6xl mx-auto">
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
                {/* hello: {donates.length} */}
          
            {
                donates?.map(donate => <DonateCard key={donate.id} donate={donate} search={search}></DonateCard>)
            }
                   
            {
                search?.map(donate => <DonateCard key={donate.id} donate={donate} search={search}></DonateCard>)
            }             

            
            </div>
        </div>
    );
};

export default AllDonate;