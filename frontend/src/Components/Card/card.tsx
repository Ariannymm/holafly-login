import React from "react";
import ButtonBase from "../buttons/ButtonBase";
import BadgeStatus from "../badgeStatus/badgeStatus";
import Comsumption from "../comsumption/Comsumption";

interface CardProps {
    children: React.ReactNode;
    cardData: {
        id: number;
        userId: number;
        status: string;
        plan: string;
        dateStart: string;
        dateEnd: string;
        comsumption: {
            totalComsumption: number;
        };
        flag: string;
        country: string;
    };
}

const Card: React.FC<CardProps> = ({ children, cardData }) => {
    const {
        id,
        userId,
        status,
        plan,
        dateStart,
        dateEnd,
        comsumption,
        flag,
        country,
      } = cardData;



    return (
        <div className="max-w-sm px-6 py-8 shadow-xl shadow-gray-300 rounded-xl flex flex-col justify-between gap-2">
            <div className="flex justify-between gap-3 mb-2">
                <div className="flex flex-col gap-4">
                    
                    <h2 className="font-medium text-sm text-gray-700">{country}</h2>
                    <p className="text-gray-400 font-medium text-xs">{plan}</p>
                </div>
                                
            </div>
            <ButtonBase className='bg-white hover:bg-gray-50 border border-neutral-300 text-gray-500'>View details</ButtonBase>
            <ButtonBase className='bg-green-300 hover:bg-green-400 text-white'>Add more data</ButtonBase>
        </div>
      );
};

export default Card;