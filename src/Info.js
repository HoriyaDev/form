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
            setFirstError("Field required");
            isValid = false;
        } else if (values.firstName.length < 2 || values.firstName.length > 10) {
            setFirstError("*First name must be between 2 and 10 characters");
            isValid = false;
        }

        if (values.lastName.trim() === ""){
            setLastError("Field required");
            isValid = false;
        } else if (values.lastName.length < 2 || values.lastName.length > 10) {
            setLastError("*Last name must be between 2 and 10 characters");
            isValid = false;
        }

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
        <div  className="bg-slate-200 h-screen flex items-center justify-center">
            <div className="w-[500px] max-w-[800px]  mx-auto p-5 bg-gray-400 mob:h-full h-96 tab:h-[50%] rounded-lg flex flex-col mob:w-full">
                <h1 className="text-2xl font-semibold mob:text-center tab:text-center">Personal Info</h1>
                <div className="flex flex-col mt-5 mob:mt-10">
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
                            className="w-full mt-2 p-2  rounded-lg"
                            value={values.lastName}
                            onChange={handleInputChange}
                        />
                    </label>
                    <p className="text-red-700 ">{lastError}</p>
                </div>
            </div>
            <button
                className="text-white  bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 fixed bottom-40 right-[35%] mob:right-5 tab:bottom-[400px] tab:right-64 "
                onClick={validation}
                type="button"
            >
                Next
            </button>
        </div>
    );
}

export default Info;
