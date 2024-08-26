import { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

function Contact({ onNext, onPrevious, values = {}, handleChange, handlePhoneChange }) {
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [phone, setPhone] = useState(values.phone || ''); // Initialize with existing phone value
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [showConfirm, setShowConfirm] = useState(false);

    const handlePhoneInputChange = (phoneNumber) => {
        setPhone(phoneNumber); // Update local phone state
        handlePhoneChange(phoneNumber); // Update form data in parent
    };

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    }

    const validation = () => {
        let isValid = true;
        const email = values.email || '';
        const phoneNumber = phone || '';
        const password = values.password || '';
        const confirmPassword = values.confirmPassword || '';

        if (email.trim() === '') {
            setEmailError("*field requires");
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            isValid = false;
        } else {
            setEmailError('');
        }

        if (phoneNumber.trim() === '') {
            setPhoneError("Phone number is required.");
            isValid = false;
        } else {
            setPhoneError('');
        }

        if (password.trim() === '') {
            setPasswordError("* field required");
            isValid = false;
        } else if (!validatePassword(password)) {
            setPasswordError("Please enter a valid password");
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            isValid = false;
        } else {
            setConfirmPasswordError('');
        }

        if (isValid) {
            onNext();
        }
    };

    const handleInputChange = (e) => {
        if (e.target) {
            handleChange(e);
            const { name, value } = e.target;

            if (name === "email") {
                if (!validateEmail(value)) {
                    setEmailError("Please enter a valid email address.");
                } else {
                    setEmailError('');
                }
            }

            if (name === "password") {
                if (!validatePassword(value)) {
                    setPasswordError("Please enter a valid password with at least 8 characters, including at least one letter and one number.");
                } else {
                    setPasswordError('');
                }
            }

            if (name === "confirmPassword") {
                const password = values.password || '';
                if (password !== value) {
                    setConfirmPasswordError("Passwords do not match");
                } else {
                    setConfirmPasswordError('');
                }
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirm(!showConfirm);
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
                        value={values.email || ''}
                        onChange={handleInputChange}
                    />
                </label>
                <p className="text-red-700">{emailError}</p>

                <label htmlFor="phone" className="text-xl mt-2">
                    Phone Number:
                    <PhoneInput
                        defaultCountry="RU"
                        value={phone}
                        onChange={handlePhoneInputChange}
                        id="phone"
                        name="phone"
                        className="w-full mt-2 p-2 rounded-lg h-12 bg-white border-2 border-red-400"
                        style={{ '--flag-size': '17px' }}
                    />
                </label>
                <p className="text-red-700">{phoneError}</p>

                <label htmlFor="password" className="text-xl mt-4">
                    Password:
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="w-full mt-2 p-2 rounded-lg"
                            name="password"
                            value={values.password || ''}
                            onChange={handleInputChange}
                        />
                        <button 
                            type="button" 
                            onClick={togglePasswordVisibility} 
                            className="absolute inset-y-7 right-3 flex items-center z-20"
                        >
                            {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                        </button>
                    </div>
                </label>
                <p className="text-red-700 mb-10">{passwordError}</p>

                <label htmlFor="confirmPassword" className="text-xl">
                    Confirm Password:
                    <div className="relative">
                        <input
                            type={showConfirm ? "text" : "password"}
                            id="confirmPassword"
                            className="w-full mt-2 p-2 rounded-lg"
                            name="confirmPassword"
                            value={values.confirmPassword || ''}
                            onChange={handleInputChange}
                        />
                        <button
                            type="button"
                            onClick={toggleConfirmPasswordVisibility}
                            className="absolute inset-y-7 right-3 flex items-center z-20"
                        >
                            {showConfirm ? <BsEyeFill /> : <BsEyeSlashFill />}
                        </button>
                    </div>
                </label>
                <p className="text-red-700 mb-10">{confirmPasswordError}</p>
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
        </div>
    );
}

export default Contact;
