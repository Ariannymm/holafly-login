//import React, { useState, useEffect } from 'react';
//import Card from "../Components/card/Card";
import DefaultLayout from "../Layouts/DefaultLayout";
import Chip from '../Components/chips/ChipsBase';

export default function Home() {
    return (
        <DefaultLayout>
            <div className="ml-auto mr-auto flex flex-col items-center md:justify-center h-screen gap-4 md:gap-6">
                <h1 className="text-sm sm:text-lg text-gray-700 font-medium mt-6 md:mt-0">Welcome, Josefa Maria</h1>
                <div id="cards" className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    
                    <div className="max-w-sm px-6 py-8 shadow-xl shadow-gray-300 rounded-xl flex flex-col justify-between gap-2">
                        <div className="flex justify-between gap-3 mb-2">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center w-min pr-2 rounded-xl bg-green-100">
                                    <div className="w-6 h-5 md:h-6 mr-1 md:mr-1.5 rounded-xl bg-gray-100"></div>
                                    <p className="text-xs text-gray-600">Active</p>
                                </div>
                                <h2 className="font-medium text-sm text-gray-700">Perú</h2>
                                <p className="text-gray-400 font-medium text-xs">3 days plan 5GB</p>
                            </div>
                            <div className="bg-transparent rounded-full border-2 border-green-200 w-14 h-14 md:w-16 md:h-16 ml-2 lg:ml-3 flex flex-col items-center justify-center">
                                <span className="text-sm font-medium">0.0</span>
                                <span className="text-xs font-medium">/ 5GB</span>
                            </div>                  
                        </div>
                        <button className='w-full rounded-xl px-5 py-3 text-xs font-medium bg-white hover:bg-gray-50 border border-neutral-300 text-gray-500'>View details</button>
                        <button className='w-full rounded-xl px-5 py-3 text-xs font-medium bg-green-300 hover:bg-green-400 text-white'>Add more data</button>
                    </div>

                    <div className="max-w-sm md:min-w- px-6 py-8 shadow-xl shadow-gray-300 rounded-xl flex flex-col justify-between gap-2">
                        <div className="flex justify-between gap-3 mb-2">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center w-min pr-2 rounded-xl bg-red-100">
                                    <div className="w-6 h-5 md:h-6 mr-1 md:mr-1.5 rounded-xl bg-gray-100"></div>
                                    <p className="text-xs text-gray-600">Pending</p>
                                </div>
                                <h2 className="font-medium text-sm text-gray-700">Venezuela</h2>
                                <p className="text-gray-400 font-medium text-xs">20 days plan 10GB</p>
                            </div>
                            <div className="bg-transparent rounded-full border-2 border-red-200 w-14 h-14 md:w-16 md:h-16 ml-2 lg:ml-3 flex flex-col items-center justify-center">
                                <span className="text-sm font-medium">0.0</span>
                                <span className="text-xs font-medium">/ 10GB</span>
                            </div>                  
                        </div>
                        <button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 rounded-xl px-5 py-3 w-full text-xs text-white font-medium">View details and install</button>
                    </div>

                    <div className="max-w-sm px-6 py-8 shadow-xl shadow-gray-300 rounded-xl flex flex-col justify-between gap-2">
                        <div className="flex justify-between gap-3">
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center w-min pr-2 rounded-xl bg-gray-200">
                                    <div className="w-6 h-5 md:h-6 mr-1 md:mr-1.5 rounded-xl bg-gray-100"></div>
                                    <p className="text-xs text-gray-600">Expired</p>
                                </div>
                                <h2 className="font-medium text-sm text-gray-700">Colombia</h2>
                                <p className="text-gray-400 font-medium text-xs">02/12/2023 / 22-12-2023</p>
                                <p className="text-gray-400 font-medium text-xs">3 months plan 120GB</p>
                            </div>                
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex gap-1 md:gap-4">
                    <Chip className="focus:bg-green-300">Active</Chip>
                    <Chip className="focus:bg-red-300">Pending</Chip>
                    <Chip className="focus:bg-gray-300">Expired</Chip>
                </div>
            </div>
        </DefaultLayout>
    );
}