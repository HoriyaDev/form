import { useState, useRef, useEffect } from "react";
import { MdCancel } from "react-icons/md";

function Upload({ onNext, onPrevious, values, handleChange }) {
    const [image, setImage] = useState(values.image ? URL.createObjectURL(values.image) : null);
    const [fileName, setFileName] = useState(values.file ? values.file.name : null);
    const fileInputRef = useRef(null);
    const fileInputRef2 = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileClick = () => {
        fileInputRef2.current.click();
    };

    const handleCancel = (e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        setImage(null);
        handleChange({ target: { name: "image", value: null } });
        fileInputRef.current.value = null; // Clear the file input value
    };

    const handleFileCancel = (e) => {
        e.stopPropagation(); // Prevent event from bubbling up
        setFileName(null);
        handleChange({ target: { name: "file", value: null } });
        fileInputRef2.current.value = null; // Clear the file input value
    };

    const handleImageChange = (e) => {
        if (e.target.files.length) {
            const selectedImage = e.target.files[0];
            setImage(URL.createObjectURL(selectedImage));
            handleChange({ target: { name: "image", value: selectedImage } });
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files.length) {
            const selectedFile = e.target.files[0];
            setFileName(selectedFile.name);
            handleChange({ target: { name: "file", value: selectedFile } });
        }
    };

    return (
        <div className="w-[40%] p-5 bg-slate-400 mx-auto h-auto rounded-lg mt-20 mob:w-80 tab:w-[600px]">
            <div className="border-slate-300 flex flex-col-reverse border-2 bg-slate-50 w-full h-48 rounded-xl relative">
                <div
                    className="absolute inset-4 border-2 border-slate-500 border-dotted rounded-xl flex items-center justify-center cursor-pointer"
                    onClick={handleClick}
                >
                    {image ? (
                        <div className="relative w-full h-full">
                            <img
                                src={image}
                                alt="Preview"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <button
                                className="absolute top-2 right-2 bg-white p-1 rounded-full"
                                onClick={handleCancel}
                            >
                                <MdCancel />
                            </button>
                        </div>
                    ) : (
                        <div className="text-center">
                            <img
                                src="unnamed.png" // Replace with the path to your default image
                                className="w-16 h-20 object-cover mx-auto mt-5 mb-2"
                                alt="Default"
                            />
                            <p className="text-slate-600">Drag and Drop to upload the image</p>
                        </div>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                        ref={fileInputRef}
                    />
                </div>
            </div>
            <div className="border-slate-300 flex flex-col-reverse border-2 bg-slate-50 w-full h-20 rounded-xl relative mt-5">
                <div
                    className="absolute inset-4 border-2 border-slate-500 border-dotted rounded-xl flex items-center justify-center cursor-pointer"
                    onClick={handleFileClick}
                >
                    {fileName ? (
                        <div className="text-center relative">
                            <p className="text-slate-600">File Selected: {fileName}</p>
                            <button
                                className="absolute right-0 top-0 -mr-7 mob:mr-0 bg-white p-1 rounded-full"
                                onClick={handleFileCancel}
                            >
                                <MdCancel />
                            </button>
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className="text-slate-600">Choose another file</p>
                        </div>
                    )}
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        ref={fileInputRef2}
                    />
                </div>
            </div>
            <div className="flex justify-between mx-5 mt-10 mb-5">
                <button
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
                    onClick={onPrevious}
                >
                    Previous
                </button>
                <button
                    className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
                    onClick={onNext}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Upload;
