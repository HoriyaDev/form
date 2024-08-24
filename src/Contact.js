import { useState } from "react";

function Contact({ onNext, onPrevious }) {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
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

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        // Clear the error message if the email becomes valid
        if (validateEmail(newEmail)) {
            setEmailError('');
        }
    };

    const handlePhoneChange = (e) => {
        const newPhone = e.target.value;
        setPhone(newPhone);

        // Clear the error message if the phone number becomes valid
        if (validatePhoneNumber(newPhone)) {
            setPhoneError('');
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // Validate the password immediately and clear the error message if valid
        if  ( passwordError && validatePassword(newPassword)) {
            setPasswordError('');
        }
    };

    const validation = () => {
        let isValid = true;

        // Check if email is valid
        if (email.trim() === '' || !validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            isValid = false;
        }

        // Check if phone number is valid
        if (phone.trim() === '' || !validatePhoneNumber(phone)) {
            setPhoneError("Please enter a valid phone number.");
            isValid = false;
        }

        // Check if password is valid
        if (password.trim() === '' || !validatePassword(password) ) {
            setPasswordError("Please enter a valid password with at least 8 characters, including at least one letter and one number.");
            isValid = false;
        }

        // If all validations pass, proceed to the next step
        if (isValid) {
            onNext();
        }
    };

    return (
        <div className=" w-[40%] p-5 bg-slate-400 mx-auto h-auto rounded-lg mt-20 relative mob:w-80 tab:w-[600px]">
            <h1 className="text-3xl font-semibold">Contact Info</h1>
            <div className="flex flex-col mt-5">
                <label htmlFor="email" className="text-xl">
                    Email Address:
                    <input
                        type="text"
                        placeholder="Doe@example.com"
                        id="email"
                        className="w-full mt-2 p-2 rounded-lg"
                        value={email}
                        onChange={handleEmailChange}
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
                        value={phone}
                        onChange={handlePhoneChange}
                    />
                </label>
                <p className="text-red-700">{phoneError}</p>

                <label htmlFor="password" className="text-xl mt-4">
                    Password:
                    <input
                        type="password"
                        id="password"
                        className="w-full mt-2 p-2 rounded-lg"
                        value={password}
                        onChange={handlePasswordChange}
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
                className="text-white  bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right absolute bottom-0 right-0  mb-4"
                onClick={validation}
                type="button"
            >
                Next
            </button>
            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-left absolute bottom-0  mb-4"
                onClick={onPrevious}
                type="button"
            >
                Previous
            </button>
        </div>
    );
}

export default Contact;
