import DefaultLayout from "../Layouts/DefaultLayout";
import Card from "../Components/Card/card";
import { useState } from "react";
import { useAuth } from "../Auth/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Login() {
    const [ username, setUsername] = useState("");
    const [ password, setPassword] = useState("");
    const auth = useAuth();

    if(auth.isAuthenticated) {
        return <Navigate to="/home" />;
    }

    return (
        <DefaultLayout>
            <Card>
                <form className="px-6 py-8 flex flex-col justify-between gap-3">
                    <h1 className="text-lg text-gray-700 font-medium text-center">Log in</h1>
                    <div className="flex flex-col w-full">
                        <label className="ml-5 py-1 items-center text-gray-600 font-medium text-sm transition-all duration-200 ease-in-out">Email</label>
                        <input 
                            className="bg-transparent px-5 py-3 w-full border border-neutral-300 rounded-xl outline-none text-sm text-black font-normal" 
                            placeholder="Enter your email"
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col w-full mb-3">
                        <label className="ml-5 py-1 items-center text-gray-600 font-medium text-sm transition-all duration-200 ease-in-out">Password</label>
                        <input 
                            className="bg-transparent px-5 py-3 w-full border border-neutral-300 rounded-xl outline-none text-sm text-black font-normal" 
                            placeholder="Enter your password"
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl px-5 py-3 w-full text-sm text-white font-medium">Log in</button>
                </form>
            </Card>
        </DefaultLayout>
    );
}