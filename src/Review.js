import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function Review({ values, onPrevious, handleSubmit, onNext }) {
    const [pdfFileUrl, setPdfFileUrl] = useState(null);
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    useEffect(() => {
        if (values.file) {
            const fileUrl = URL.createObjectURL(values.file);
            setPdfFileUrl(fileUrl);

            // Clean up URL object when component unmounts or file changes
            return () => URL.revokeObjectURL(fileUrl);
        }
    }, [values.file]);

    const handleSubmission = () => {
        handleSubmit();
        onNext();
    };

    return (
        <div className="w-[50%]  mx-auto p-5 bg-gray-400   mob:mt-0  rounded-lg flex flex-col mob:w-[400px] mob:h-screen tab:h-[60%] relative">
            <h2 className="text-2xl font-semibold mb-4">Review Your Information</h2>

            <div className="mb-4">
                <strong>First Name:</strong> {values.firstName}
            </div>
            <div className="mb-4">
                <strong>Last Name:</strong> {values.lastName}
            </div>
            <div className="mb-4">
                <strong>Email:</strong> {values.email}
            </div>
            <div className="mb-4">
                <strong>Phone:</strong> {values.phone}
            </div>
            <div className="mb-4">
                <strong>Password:</strong> {values.password}
            </div>
            <div className="mb-4">
                <strong>Confirm Password:</strong> {values.confirmPassword}
            </div>
            <div className="mb-4">
                <strong>Country:</strong> {values.country}
            </div>
            <div className="mb-4">
                <strong>Gender:</strong> {values.gender}
            </div>
            <div className="mb-4">
                <strong>Image:</strong>
                {values.image && <img src={URL.createObjectURL(values.image)} alt="Uploaded" className="w-32 h-32 object-cover" />}
            </div>
            <div className="mb-4">
                <strong>File:</strong>
                {pdfFileUrl ? (
                    <div className="h-96 overflow-auto">
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                            <Viewer
                                fileUrl={pdfFileUrl}
                                plugins={[defaultLayoutPluginInstance]}
                            />
                        </Worker>
                    </div>
                ) : (
                    <p>No PDF file uploaded.</p>
                )}
            </div>
            <div className="mb-4">
                <strong>Signature:</strong>
                {values.signature && <img src={values.signature} alt="Signature" className="w-48 h-48 object-cover bg-white" />}
            </div>

            <div className="flex justify-between mt-5">
                <button
                    className="bg-blue-600 text-white p-2 rounded"
                    onClick={onPrevious}
                >
                    Previous
                </button>
                <button
                    className="bg-blue-600 text-white p-2 rounded"
                    onClick={handleSubmission}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Review;
