import React from "react";

interface ComsumptionProps {
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

const Comsumption: React.FC<ComsumptionProps> = ({ cardData }) => {
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
    
    const consumptionValue = comsumption.totalComsumption / 1000000;
    /*const consumptionTotal = plan ? plan.match(/(\d+)GB/)[1] : "0";*/

    const statuses: { [key: string]: string } = {
        Active: "border-green-200",
        Pending: "border-red-200",
    };

    const bgClass = statuses[status];  

    return (
        <div className="bg-transparent rounded-full border-2 w-14 h-14 md:w-16 md:h-16 ml-2 lg:ml-3 flex flex-col items-center justify-center">
            <span className="text-sm font-medium">{consumptionValue}</span>
            <span className="text-xs font-medium">/ GB</span>
        </div>
    );
};

export default Comsumption;