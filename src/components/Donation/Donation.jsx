import React, { useEffect, useState } from 'react';
import DonationCard from './DonationCard';

const Donation = () => {
    const [donation, setDonation] = useState([]);

    const [notFound, setNoFound] = useState(false)

    useEffect(()=>{
        const donationItem = JSON.parse(localStorage.getItem('donation'));
        if(donationItem){
            setDonation(donationItem)
        }
        else{         
            setNoFound(' No Donation Found')
        }
        
    },[])

    console.log(donation)

    return (
        <div>
            {
                notFound ? <p className='h-[80vh] flex justify-center items-center text-red-500'>{notFound}</p> : <div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-6 max-w-5xl mx-auto mt-10'>
                        {
                            donation.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                        }
                    </div>

                </div>
            }
        </div>
    );
};

export default Donation;