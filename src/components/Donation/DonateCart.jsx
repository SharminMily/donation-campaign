const DonateCart = ({ donate }) => {

    const { id, category, title, price, picture, card_bg, category_bg, text_button_bg, description } = donate || {};
    console.log(donate)
    return (
        <div className="max-w-3xl mx-auto my-20">
            <div className="flex justify-center items-center">
                <div className="card bg-base-100 shadow-xl  rounded-xl ">

                    <div className="">
                        <figure ><img className="w-full relative lg:h-[70vh] rounded-xl" src={picture} alt="Shoes" />
                        </figure>
                       <div className="opacity-60 w-full rounded-b-xl p-4 bg-black lg:bottom-[38vh] md:bottom-[51vh] bottom-[76vh] absolute">
                       <button style={{ background: text_button_bg }} className="btn mx-4 normal-case text-white text-xl ">Donate: $00.00</button>
                       </div>
                    </div>

                    {/* lg:w-[120vh] lg:left-[9.7vh] lg:top-[57.5vh]
                    md:top-[77vh] md:left-[2vh] md:w-[145.5vh] 
                    w-[101vh] top-[40.5vh] left-[9vh]  */}
                    {/* <div className="opacity-60 rounded-b-xl  bg-black  absolute">
                        <div className="card-actions  justify-start py-6 w-full">
                            <button style={{ background: text_button_bg }} className="btn normal-case text-white text-xl ">Donate: $00.00</button>
                        </div>
                    </div> */}

                    <div className="card-body">

                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateCart;