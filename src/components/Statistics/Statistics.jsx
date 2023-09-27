import { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Statistic = () => {
    const [donation, setDonation] = useState(0);

    useEffect(() => {
        const storedDonation = JSON.parse(localStorage.getItem('donation'));
        if (storedDonation && storedDonation.length > 0) {
            setDonation(storedDonation.length);
        } else {            
            setDonation(0);
            
        }
    }, []); 

    let myDonation = ((100 / 12) * donation).toFixed(2);
    let totalDonation = (100 - myDonation).toFixed(2);

    const myData1 = [
        { name: 'Total Donation', value: parseFloat(totalDonation), fill: '#FF444A' },
        { name: 'My Donation', value: parseFloat(myDonation), fill: '#00C49F' }
    ];

    return (
        <div className="text-center">
            <div className="flex justify-center items-center">
                {<PieChart width={400} height={400}>
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
        </div>
    );
}

export default Statistic;
