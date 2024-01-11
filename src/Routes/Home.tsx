import DefaultLayout from "../Layouts/DefaultLayout";

export default function Home() {
    return (
        <DefaultLayout>
            <div className="ml-auto mr-auto flex items-center justify-center h-screen p-2 gap-4">
                <div className="container max-w-sm px-6 py-8 rounded-xl flex flex-col justify-between gap-3 shadow-xl shadow-gray-300">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex items-center bg-red-100 mb-3 w-min pr-2 rounded-xl">
                                <div className="bg-gray-100 w-6 h-6 mr-1.5 rounded-xl"></div>
                                <p className="text-gray-600 font-normal text-xs">Pending</p>
                            </div>
                            <h2 className="text-gray-700 font-medium text-base mb-3">Spain</h2>
                            <p className="text-gray-400 font-medium text-sm mb-1.5">5 days plan, 5GB</p>
                        </div>
                        <div>
                            <div className="bg-gray-300 p-8 m-3"></div>
                        </div>
                    </div>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">Ver Detalles e instalar</button>
                    <button className="bg-white hover:bg-gray-50 border border-neutral-300 text-gray-500">Ver Detalles</button>
                    <button className="bg-green-400 hover:bg-green-500 text-white">Agregar más datos</button>
                </div>
            </div>
        </DefaultLayout>
    );
}