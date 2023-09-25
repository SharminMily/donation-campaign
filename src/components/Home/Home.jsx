
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import AllDonate from '../Donation/AllDonate';

const Home = () => {
    const donates = useLoaderData();
    // console.log(donate)
    return (
        <div>
            <Banner></Banner>
            <AllDonate donates={donates}></AllDonate>
        </div>
    );
};

export default Home;