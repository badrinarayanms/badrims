import React, { useState } from 'react';
import Tag3d from './3dtag';

const Heade = () => {
  const [cut, setCut] = useState(false);
  const [showDiv, setShowDiv] = useState(true);

  return (
    <>
      <section className=" overflow-hidden absolute top-0 flex justify-between" style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}>
        {showDiv && (
          <div
            className={`absolute z-10 h-full w-full ${cut ? "top-[1000px]" : "top-0"}`}
            style={{ transition: 'top 1s ease' }}
          >
            <Tag3d />
          </div>
        )}
      </section>
      {/* <button
        className="bg-[#FF535B] z-10 relative"
        onClick={() => setCut(true)}
      >
        cut me
      </button>
      <button
        className="bg-[#FF535B] z-10 relative ml-2"
        onClick={() => {
          setCut(false);  // Reset the position first
          setShowDiv(false);  // Temporarily remove the div
          setTimeout(() => {
            setShowDiv(true);  // Re-add the div after a small delay to trigger re-render
          }, 100);  // Adjust delay as needed to trigger re-render smoothly
        }}
      >
        re me
      </button> */}
    </>
  );
};

export default Heade;
