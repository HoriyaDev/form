

import { useState } from "react";

function Info({ onNext, handleChange, values }) {
    const [firstError, setFirstError] = useState("");
    const [lastError, setLastError] = useState("");

    const validateFirstName = (value) => {
        if (value.trim() === "" || value.length < 2 || value.length > 10) {
            setFirstError("*First name must be between 2 and 10 characters");
        } else {
            setFirstError("");
        }
    };

    const validateLastName = (value) => {
        if (value.trim() === "" || value.length < 2 || value.length > 10) {
            setLastError("*Last name must be between 2 and 10 characters");
        } else {
            setLastError("");
        }
    };

    const validation = () => {
        let isValid = true;

        if (values.firstName.trim() === "" ){
            setFirstError("field required")
            isValid = false
        }
        else if(values.firstName.length < 2 || values.firstName.length > 10){
            setFirstError("*First name must be between 2 and 10 characters");
            isValid = false;
        }

        // if (values.firstName.trim() === "" || values.firstName.length < 2 || values.firstName.length > 10) {
        //     setFirstError("*First name must be between 2 and 10 characters");
        //     isValid = false;
        // }
           
        if(values.lastName.trim() === ""){
            setLastError("field required")
            isValid = false
        }
        else if(values.lastName.length < 2 || values.lastName.length > 10){
            setLastError("*Last name must be between 2 and 10 characters");
            isValid = false;
        }

        // if (values.lastName.trim() === "" || values.lastName.length < 2 || values.lastName.length > 10) {
        //     setLastError("*Last name must be between 2 and 10 characters");
        //     isValid = false;
        // }

        if (isValid) {
            onNext();
        }
    };

    const handleInputChange = (e) => {
        handleChange(e); // Call the passed-in handleChange function

        const { name, value } = e.target;
        if (name === "firstName") {
            validateFirstName(value);
        } else if (name === "lastName") {
            validateLastName(value);
        }
    };

    return (
        <div className="w-[40%] p-5 bg-gray-400 mx-auto h-96 rounded-lg mt-20 mob:w-80 mob:h-[350px] relative tab:w-[600px]">
            <h1 className="text-2xl font-semibold">Personal Info</h1>
            <div className="flex flex-col mt-5">
                <label htmlFor="fname" className="text-xl">
                    First Name:
                    <input
                        type="text"
                        placeholder="Doe"
                        id="fname"
                        name="firstName"
                        className="w-full mt-2 p-2 rounded-lg"
                        value={values.firstName}
                        onChange={handleInputChange}
                    />
                </label>
                <p className="text-red-700">{firstError}</p>
                <label htmlFor="lname" className="text-xl mt-4">
                    Last Name:
                    <input
                        type="text"
                        placeholder="John"
                        id="lname"
                        name="lastName"
                        className="w-full mt-2 p-2 mob:mb-5 rounded-lg"
                        value={values.lastName}
                        onChange={handleInputChange}
                    />
                </label>
                <p className="text-red-700 mob:mb-7">{lastError}</p>
            </div>
            <button
                className="text-white right-4 tab:bottom-0 bg-blue-700 absolute hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right mt-3 tab:mb-10 mob:bottom-0"
                onClick={validation}
                type="button"
            >
                Next
            </button>
        </div>
    );
}

export default Info;