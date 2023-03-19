import React from "react";
import product1 from "../assets/product1.png";
const BestDeals = () => {
    const data = [
        { id: 1, title: "Fitness and activity Tracker", price: 33.3, count: 10, product1 },
        { id: 2, title: "Xbox White Joystick", price: 98.4, count: 10 },
        { id: 3, title: "Super Boost Headphones", price: 33.3, count: 10 },
    ];
    return (
        <div>
            <div>
                <div>
                    <h1 className="text-primary_color">Best Deals</h1>
                    <span>view all</span>
                </div>
            </div>
            <div>
                {data.map((item) => {
                    return (
                        <>
                            <img src={item?.product1} alt="" />
                        </>
                    );
                })}
            </div>
            <div></div>
        </div>
    );
};

export default BestDeals;
