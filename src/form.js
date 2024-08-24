import Info from "./Info";
import Contact from "./Contact";
import { useState } from "react";
import Upload from "./FileUpload";
import Verifiction from "./Verification";

function From() {
    const [step, setStep] = useState(1)

    const handleNext = () => {
        setStep(step + 1)



    }
    const handlePrevious = () => {
        setStep(step - 1)
    }

    return (
        <div >

            <form>


                {step === 1 && <Info onNext={handleNext} />}
                {step === 2 && <Contact onNext={handleNext} onPrevious={handlePrevious} />}
                {step === 3 && <Upload onNext={handleNext} onPrevious={handlePrevious} />}
                {step === 4 && <Verifiction />}
            </form>
        </div>);
}
export default From