import SignatureCanvas from 'react-signature-canvas';
import { useRef } from 'react';

function Verification({ values, handleChange, handleSignatureSave, onNext, onPrevious }) {
  const signCanvasRef = useRef(null);

  const handleClear = (event) => {
    event.preventDefault();
    signCanvasRef.current.clear();
  };

  const handleSave = () => {
    const canvas = signCanvasRef.current.getTrimmedCanvas();
    const imageDataURL = canvas.toDataURL('image/png');
    handleSignatureSave(imageDataURL); // Save the signature to parent component state
    alert('Signature Saved');
  };

  return (
    <div className="w-[500px]  mx-auto p-5 bg-gray-400   mob:mt-0  rounded-lg flex flex-col mob:w-[400px] mob:h-screen tab:h-[60%] relative">
      <h2 className="text-2xl font-semibold mb-4">Signature Verification</h2>

      <div className="mb-4">
        <label className="mb-2 font-medium text-xl block">Choose Country:</label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="country"
          value={values.country}
          onChange={handleChange}
        >
          <option value="">Choose Country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="London">London</option>
          <option value="France">France</option>
          <option value="America">America</option>
          {/* Add more country options as needed */}
        </select>
      </div>

      <div className="mb-4">
        <label className="mb-2 text-xl font-medium block">Gender:</label>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={values.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={values.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
          {/* Add more gender options as needed */}
        </div>
      </div>

      <div className="mb-4">
        <h1 className='font-medium text-xl block'>Signature</h1>
        <SignatureCanvas
          ref={signCanvasRef}
          penColor='black'
          canvasProps={{ width: 460, height: 200, className: 'signature-canvas bg-white' }}
        />
        <div className="flex gap-4 mt-2">
          <button onClick={handleClear} type='button' className="bg-red-500 text-white p-2 rounded">Clear</button>
          <button onClick={handleSave} type='button' className="bg-blue-500 text-white p-2 rounded">Save Signature</button>
        </div>
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
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Verification;
