/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {
    const [donation, setDonation] = useState([]);

    const [notFound, setNoFound] = useState(false);

    const [isSee, setIsSee] = useState(false)

    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem('donation'));
        if (donationItem) {
            setDonation(donationItem)
        }
        else {
            setNoFound(' No Donation Found')
        }

    }, [])

    const handleRemove = () => {
        localStorage.clear()
        setDonation([]);
        setNoFound(' No Donation Found')

    }

    // console.log(donation)

    return (
        <div>
            {
                notFound ? <p className='h-[80vh] flex justify-center items-center text-red-500'>{notFound}</p> : <div>

                    {donation.length > 0 && <button onClick={handleRemove} className='p-4 bg-red-500 text-white rounded-lg mx-auto block'>delete All</button>}

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-6 max-w-5xl mx-auto mt-10'>
                        {
                            isSee ? donation.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>) :
                            donation.slice(0,4).map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                        }
                    </div>

                    

                </div>
            }

            <div className='text-center my-8'>
               {donation.length > 4 && <button onClick={()=>setIsSee(!isSee)}  className='p-4 bg-blue-700  text-white rounded-lg mx-auto block'> {isSee ? "See less" : "See All"} </button>   
                } 
                             
               
            </div>
        </div>
    );
};

export default Donation;