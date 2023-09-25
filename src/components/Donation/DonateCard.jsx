import { Link } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
const DonateCard = ({ donate }) => {
    const { id, category, title, picture, card_bg, category_bg, text_button_bg } = donate;
    return (
        <div>
            <Link to={`/donates/${id}`}>
                <div className="my-6">
                    <div style={{ background: card_bg }} className="relative bg-{card_bg} flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative  -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-blue-gray-500/40">
                            <img className="w-full h-52"
                                src={picture}
                                alt="img-blur-shadow"
                                layout="fill"
                            />
                        </div>
                        {/* style={category_bg} */}
                        <div style={{ color: text_button_bg }} className="px-6 py-4 pt-4">
                            <button style={{ background: category_bg }}
                                className="select-none normal-case rounded-lg  py-3 px-6 text-center align-middle font-sans text-base font-bold  shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                {category}
                            </button>
                            <h5 style={{ color: text_button_bg }} className="mt-4 block font-sans lg:text-lg md:text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {title}
                            </h5>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DonateCard;