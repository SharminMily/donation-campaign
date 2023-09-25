/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const DonationCard = ({ donate }) => {
    const { id, category, title, price, picture, card_bg, category_bg, text_button_bg } = donate || {};
    // console.log(donate)
    return (
        <div className="">
            <div style={{background: card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img src={picture} alt="image" className=" h-full w-full object-cover"
                    />
                </div>
                <div className="py-6 px-4 ">
                <button style={{ color: text_button_bg, background: category_bg }} className="py-1 px-4 text-sm rounded normal-case">{category}</button>
                    
                    <h2 className="card-title pt-2">{title}</h2>
                     <p style={{color: text_button_bg}} className="font-bold pb-4">${price}.00</p>
                    <button style={{ background: text_button_bg }} className="btn  normal-case text-white">View Details</button>
                        
                </div>
            </div>            
        </div>
        
    );
};

export default DonationCard;