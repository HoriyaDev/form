import { useState } from "react";

function Info({ onNext }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");

    const handleFirstName = (e)=>{
        const newName = e.target.value
        setFirstName(newName)
        if(firstError){
            setFirstError("")
        }

    }
    const handleLastName = (e)=>{
        const newName = e.target.value
        setLastName(newName)
        if(lastError){
            setLastError("")
        }

    }

    const validation = () => {
        let isValid = true;
        

        if (firstName.trim() === "" || firstName.length < 2 || firstName.length > 10) {
            setFirstError("*First name must be between 2 and 10 characters");
            isValid = false;
        } else {
            setFirstError(""); 
        }

        if (lastName.trim() === "" || lastName.length < 2 || lastName.length > 10) {
            setLastError("*Last name must be between 2 and 10 characters");
            isValid = false;
        } else {
            setLastError(""); 
        }

        if (isValid) {
            onNext(); 
        }
    };

    return (
        <div className="w-[40%] p-5 bg-gray-400 mx-auto h-96 rounded-lg mt-20 mob:w-80 mob:h-[350px] relative tab:w-[600px] mob:h-auto">
            <h1 className="text-2xl font-semibold">Personal Info</h1>
            <div className="flex flex-col mt-5">
                <label htmlFor="fname" className="text-xl">
                    First Name:
                    <input
                        type="text"
                        placeholder="Doe"
                        id="fname"
                        className="w-full mt-2 p-2 rounded-lg"
                        value={firstName}
                        onChange={handleFirstName}
                    />
                </label>
                <p className="text-red-700 ">{firstError}</p>
                <label htmlFor="lname" className="text-xl mt-4">
                    Last Name:
                    <input
                        type="text"
                        placeholder="John"
                        id="lname"
                        className="w-full mt-2 p-2 mob:mb-5 rounded-lg"
                        value={lastName}
                        onChange={handleLastName}
                    />
                </label>
                <p className="text-red-700 mob:mb-7  ">{lastError}</p>
            </div>
            <button
                className="text-white right-4  tab:bottom-0 bg-blue-700 absolute hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right mt-3 tab:mb-10 mob:bottom-0 "
                onClick={validation}
                type="button"
            >
                Next
            </button>
        </div>
    );
}

export default Info;
