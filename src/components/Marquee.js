import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
const Marquee = ({ data }) => {
    const marqueeRef = useRef(null);

    const stopMarquee = () => {
        if (marqueeRef.current) {
            marqueeRef.current.stop();
        }
    };

    const startMarquee = () => {
        if (marqueeRef.current) {
            marqueeRef.current.start();
        }
    };

    return (
        <div>
            <marquee
                className="shadow-[inset_0px_14px_40px_-17px_#a0aec0] h-52 rounded-lg p-5 w-full text-gray-500 font-semibold"
                behavior="scroll"
                direction="up"
                scrollamount="5"
                scrolldelay="300"
                loop="infinite"
                onMouseOver={stopMarquee}
                onMouseOut={startMarquee}
                ref={marqueeRef}
            >
                {
                    data ? data?.map((val, i) => {
                        return (
                            <Link key={i} to={val.to} className='cursor-pointer block my-2 underline'>
                                {val.text}
                            </Link>
                        )
                    }) : "No Data Available"
                }

            </marquee>
        </div>
    );
};

export default Marquee;


