// import SignatureCanvas from 'react-signature-canvas';
// import { useRef, useState } from 'react';

// function Verification() {
//   const signCanvasRef = useRef(null);
//   const [savedSignature, setSavedSignature] = useState(null);


//   const handleClear = (event) => {
//     event.preventDefault();
//     signCanvasRef.current.clear();
//   };

//   const handleSave = () => {

//    let abc= signCanvasRef.current;
//    console.log("🚀 ~ handleSave ~ abc:", abc)
   


//     setSavedSignature(abc.getTrimmedCanvas().toDataURL('image/png'))
//     console.log("🚀 ~ Verification ~ savedSignature:", savedSignature);


//     let a=savedSignature.getTrimmedCanvas().toDataURL('image/png')
// console.log("🚀 ~ handleSave ~ a:", a)
//   }; 
   



//   return (
//     <>
//       <div>
//         <select>
//           <option value="#">Choose Country</option>
//           <option>Pakistan</option>
//           <option>India</option>
//           <option>America</option>
//           <option>London</option>
//         </select>
//         <input type="radio" name="gender" /> Male
//         <input type="radio" name="gender" /> Female

//         <div>
//           <SignatureCanvas
//             ref={signCanvasRef}
//             penColor="black"
//             canvasProps={{ width: 500, height: 200, className: 'sigCanvas bg-white' }}
//           />
//         </div>
//         <button type="button" onClick={handleClear}>Clear</button>
//         <button type="button" onClick={handleSave}>Save</button>

        
//       </div>
//     </>
//   );
// }

// export default Verification;




import SignatureCanvas from 'react-signature-canvas';
import { useRef, useState } from 'react';

function Verification() {
  const signCanvasRef = useRef(null);
  const [savedSignature, setSavedSignature] = useState(null);

  const handleClear = (event) => {
    event.preventDefault();
    signCanvasRef.current.clear();
  };

  const handleSave = () => {
    const canvas = signCanvasRef.current.getTrimmedCanvas(); // Get the trimmed canvas
    const imageDataURL = canvas.toDataURL('image/png'); // Convert canvas to data URL (image)
    setSavedSignature(imageDataURL); // Save the data URL in state
  };

  return (
    <div >
      <div className=" w-[40%] p-5 bg-gray-400 mx-auto rounded-lg mt-16 mob:w-80 tab-full tab:w-[600px] h-auto">
        <h2 className="text-2xl font-semibold mb-4">Signature Verification</h2>

        <div className="mb-4">
          <label className="  mb-2 text-xl block">Choose Country:</label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="#">Choose Country</option>
            <option>Pakistan</option>
            <option>India</option>
            <option>America</option>
            <option>London</option>
          </select>
        </div>

        <div className="mb-4">
          <span className="block text-xl  mb-2">Gender:</span>
          <label className="inline-flex items-center mr-4">
            <input type="radio" name="gender" className="form-radio text-blue-600" />
            <span className="ml-2 ">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="gender" className="form-radio text-blue-600" />
            <span className="ml-2 ">Female</span>
          </label>
        </div>

        <div className="border border-gray-300 bg-gray-50 p-4 rounded-md mb-4">
          <SignatureCanvas
            ref={signCanvasRef}
            penColor="black"
            canvasProps={{ className: 'sigCanvas w-full h-48 bg-white border border-gray-300 rounded-md' }}
          />
        </div>

        <div className="flex justify-between mb-4">
          <button type="button" onClick={handleClear} className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">
            Clear
          </button>
          <button type="button" onClick={handleSave} className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Save
          </button>
        </div>

        {/* {savedSignature && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Saved Signature:</h3>
            <img src={savedSignature} alt="Saved signature" className="w-full max-w-xs border border-gray-300 rounded-md" />
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Verification;
