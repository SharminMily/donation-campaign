import swal from 'sweetalert';
const DonateCart = ({ donate }) => {

    const { id, category, title, price, picture, card_bg, category_bg, text_button_bg, description } = donate || {};
    // console.log(donate)

    const handleAddToDonation = () => {
        // console.log(donate)
        const addDonationArray = [];

        const donationItem = JSON.parse(localStorage.getItem('donation'));
        if (!donationItem) {
            addDonationArray.push(donate);
            localStorage.setItem('donation', JSON.stringify(addDonationArray))
            swal("Good job!", "Donation added successfully!", "success");
        }
        else {
            const isExits = donationItem.find((donate) => donate.id === id)
         
            if (!isExits) {
                addDonationArray.push(...donationItem, donate)
                localStorage.setItem('donation', JSON.stringify(addDonationArray))
            }
            else{
                swal("Error!", "No duplicate !", "error");
            }


        }


        // localStorage.setItem('test', JSON.stringify([{name:"hasib"}, {name: "ph"}]));

    }

    return (
        <div className="max-w-3xl mx-auto my-20">
            <div className="flex justify-center items-center">
                <div className="card bg-base-100 shadow-xl  rounded-xl ">

                    <div className="">
                        <figure ><img className="w-full relative lg:h-[70vh] rounded-xl" src={picture} alt="Shoes" />
                        </figure>
                        <div className="opacity-60 w-full rounded-b-xl p-4 bg-black lg:bottom-[38.7vh] md:bottom-[51vh] bottom-[76vh] absolute">
                            <button onClick={handleAddToDonation} style={{ background: text_button_bg }} className="btn mx-4 normal-case text-white text-xl ">Donate: ${price}</button>
                        </div>
                    </div>

                    <div className="card-body">

                        <h2 className="card-title text-2xl font-bold">{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateCart;