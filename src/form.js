import { useState } from "react";
import Info from "./Info";
import Contact from "./Contact";
import Upload from "./FileUpload";
import Verification from "./Verification";
import Review from "./Review";
import Submit from "./Submission";

function Form() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        image: null,
        file: null,
        signature: null,
        country: "",
        gender: ""
    });
    const [phoneError, setPhoneError] = useState("");

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handlePhoneChange = (number) => {
        setFormData((prevData) => ({
            ...prevData,
            phone: number
        }));

        // Validate phone number in real-time
        if (number.trim() === '') {
            setPhoneError("Phone number is required.");
        } else {
            setPhoneError('');
        }
    };

    const handleSubmit = () => {
        console.log("Form data submitted:", formData);
        handleNext(); // Move to the next step or final action
    };

    const handleSignatureSave = (signature) => {
        setFormData((prevData) => ({
            ...prevData,
            signature: signature
        }));
    };

    return (
        <div   > 
            <form >
                {step === 1 && <Info onNext={handleNext} values={formData} handleChange={handleChange} />}
                {step === 2 && (
                    <Contact
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                        values={formData}
                        handleChange={handleChange}
                        setFormData={setFormData}
                        handlePhoneChange={handlePhoneChange}
                    />
                )}
                {step === 3 && <Upload onNext={handleNext} onPrevious={handlePrevious} values={formData} handleChange={handleChange} />}
                {step === 4 && (
                    <Verification
                        values={formData}
                        handleChange={handleChange}
                        handleSignatureSave={handleSignatureSave}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                    />
                )}
                {step === 5 && (
                    <Review
                        values={formData}
                        onPrevious={handlePrevious}
                        handleSubmit={handleSubmit}
                        onNext={handleNext}
                    />
                )}
                {step === 6 && <Submit />}
            </form>
        </div>
    );
}

export default Form;
