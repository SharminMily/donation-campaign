import { Chart } from "react-google-charts";

const Statistics = () => {
     const data = [
        ["Task", "Hours per Day"],
        ["Your Donation", 11],      
        ["Total Donation",7],    
      
    ];
    
     const options = {
        // title: "My Daily Activities",
        slices: {
            0: { color: "#00C49F" },
            1: { color: "#FF444A" },  
            // labels: label,         
        },
       
        pieStartAngle: 200,
        legend:{
            position: "bottom",  
                  
          },  
        //   borderWidth: 1,           
         
    };
    
    return (
        <div>           
            <Chart 
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
                
               
            />


        </div>
    );
};

export default Statistics;