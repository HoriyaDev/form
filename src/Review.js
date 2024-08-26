import React from 'react';

function Review({ values, onPrevious, handleSubmit, onNext }) {
  const handleSubmission = () => {
    handleSubmit();
    onNext();
  };

  // Create an object URL for the PDF file
  const fileUrl = values.file ? URL.createObjectURL(values.file) : null;
  const fileName = values.file ? values.file.name : 'No file uploaded';

  return (
    <div className="w-[40%] p-5 bg-gray-400 mx-auto rounded-lg mob:w-80 tab:w-[600px] h-auto">
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
        {fileUrl ? (
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 underline"
          >
            {fileName}
          </a>
        ) : (
          fileName
        )}
      </div>
      <div className="mb-4">
        <strong>Signature:</strong>
        {values.signature && <img src={values.signature} alt="Signature" className="w-32 h-32 object-cover bg-white" />}
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
