import DonateCard from "./DonateCard";

const AllDonate = ({donates}) => {
    console.log(donates)
    return (
        <div className="">
            {/* hello: {donates.length} */}
            {
                donates?.map(donate => <DonateCard key={donate.id} donate={donate}></DonateCard>)
            }
        </div>
    );
};

export default AllDonate;