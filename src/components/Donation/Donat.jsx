import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonateCart from "./DonateCart";

const Donat = () => {

    const [donate, setDonate] = useState({});

    const {id} = useParams();
    // console.log(id)

    const donates = useLoaderData()
    // console.log(donates)

    useEffect(()=>{
       const findDonate = donates?.find((donate) => donate.id == id)
       setDonate(findDonate)
    },[id, donates]);

    // console.log(donate)
   
    return (
        <div>
           <DonateCart donate={donate}></DonateCart>
          
        </div>
    );
};

export default Donat;