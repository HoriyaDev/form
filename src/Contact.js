import { useState } from "react";

function Contact({ onNext, onPrevious, handleChange, values }) {
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhoneNumber(phone) {
        const phoneRegex = /^\+?1?\d{10,15}$/;
        return phoneRegex.test(phone);
    }

    function validatePassword(password) {
        // Must have at least one letter, one number, and be at least 8 characters long
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    }

    const validation = () => {
        let isValid = true;

        // Check if email is valid
        if (values.email.trim() === '' || !validateEmail(values.email)) {
            setEmailError("Please enter a valid email address.");
            isValid = false;
        } else {
            setEmailError('');
        }

        // Check if phone number is valid
        if (values.phone.trim() === '' || !validatePhoneNumber(values.phone)) {
            setPhoneError("Please enter a valid phone number.");
            isValid = false;
        } else {
            setPhoneError('');
        }

        // Check if password is valid
        if (values.password.trim() === '' || !validatePassword(values.password)) {
            setPasswordError("Please enter a valid password with at least 8 characters, including at least one letter and one number.");
            isValid = false;
        } else {
            setPasswordError('');
        }

        // If all validations pass, proceed to the next step
        if (isValid) {
            onNext();
        }
    };

    const handleInputChange = (e) => {
        handleChange(e); // Call the passed-in handleChange function

        const { name, value } = e.target;
        
        // Validate and clear errors in real-time
        if (name === "email") {
            if (!validateEmail(value)) {
                setEmailError("Please enter a valid email address.");
            } else {
                setEmailError('');
            }
        }

        if (name === "phone") {
            if (!validatePhoneNumber(value)) {
                setPhoneError("Please enter a valid phone number.");
            } else {
                setPhoneError('');
            }
        }

        if (name === "password") {
            if (!validatePassword(value)) {
                setPasswordError("Please enter a valid password with at least 8 characters, including at least one letter and one number.");
            } else {
                setPasswordError('');
            }
        }
    };

    return (
        <div className="w-[40%] p-5 bg-slate-400 mx-auto h-auto rounded-lg mt-20 relative mob:w-80 tab:w-[600px]">
            <h1 className="text-3xl font-semibold">Contact Info</h1>
            <div className="flex flex-col mt-5">
                <label htmlFor="email" className="text-xl">
                    Email Address:
                    <input
                        type="text"
                        placeholder="Doe@example.com"
                        id="email"
                        className="w-full mt-2 p-2 rounded-lg"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </label>
                <p className="text-red-700">{emailError}</p>
                
                <label htmlFor="phone" className="text-xl mt-4">
                    Phone:
                    <input
                        type="text"
                        placeholder="0000000000"
                        id="phone"
                        className="w-full mt-2 p-2 rounded-lg"
                        name="phone"
                        value={values.phone}
                        onChange={handleInputChange}
                    />
                </label>
                <p className="text-red-700">{phoneError}</p>

                <label htmlFor="password" className="text-xl mt-4">
                    Password:
                    <input
                        type="password"
                        id="password"
                        className="w-full mt-2 p-2 rounded-lg"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                    />
                    <input type="checkbox" onChange={(e) => {
                        const passwordField = document.getElementById('password');
                        passwordField.type = e.target.checked ? 'text' : 'password';
                    }}
                    className="w-4 h-4" /> Show password
                </label>
                <p className="text-red-700 mb-10">{passwordError}</p>
            </div>
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right absolute bottom-0 right-0 mb-4"
                onClick={validation}
                type="button"
            >
                Next
            </button>
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-left absolute bottom-0 mb-4"
                onClick={onPrevious}
                type="button"
            >
                Previous
            </button>
        </div>
    );
}

export default Contact;
