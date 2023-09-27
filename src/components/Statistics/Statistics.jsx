import { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Statistic = () => {
    const [donation, setDonation] = useState(0);
    // const [notFound, setNoFound] = useState(false);


    useEffect(() => {    
          
     setDonation(JSON.parse(localStorage.getItem('donation')).length)
       
       
        
    }, [donation])

    let myDonation = ((100 / 12) * donation).toFixed(2)
    let totalDonation = (100 - myDonation).toFixed(2)

    // if(donation.length === 0  ){
    //     (' No Donation Found')
    // }
    // else{
    //     (' No Donation Found')
    // }

    // const myData = [ // ]; 


    const myData1 = [
        { name: 'Total Donation', value: parseFloat(totalDonation), fill: '#FF444A', },

        { name: 'My Donation', value: parseFloat(myDonation), fill: '#00C49F' }
    ];

   
    return (
        <div className="">
            {/* {
                notFound ? <p className='h-[80vh] flex justify-center items-center text-red-500'>{notFound}</p> : <div className="flex justify-center items-center"> } */}         

            <div className="flex justify-center items-center">
               { <PieChart width={400} height={400} >
                    <Pie
                        dataKey="value"
                        color="red"

                        isAnimationActive={false}
                        data={myData1}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="value" data={myData1} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />

                    <Tooltip />
                </PieChart>}
            </div>
           
            <div className="flex justify-around items-center text-center">
               <h2 className=" text-xl font-bold">My Donation: <span className="text-lg text-[#00C49F] w-20 font-bold"> {myDonation}</span></h2>

                <h2 className=" text-xl font-bold">Total Donation: <span className="text-lg text-[#FF444A] w-20 font-bold"> {totalDonation}</span></h2>
            </div>

            <h1 className="w-[100px] h-[12px] border-[2px] bg-[#00C49F]"></h1>
        </div>


    )
}

export default Statistic