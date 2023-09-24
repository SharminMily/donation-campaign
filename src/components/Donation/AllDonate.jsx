import DonateCard from "./DonateCard";

const AllDonate = ({donates}) => {
    console.log(donates)
    return (
        <div className=" max-w-6xl mx-auto">
           <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
             {/* hello: {donates.length} */}
             {
                donates?.map(donate => <DonateCard key={donate.id} donate={donate}></DonateCard>)
            }
           </div>
        </div>
    );
};

export default AllDonate;