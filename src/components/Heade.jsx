import React, { useState } from 'react';
import Tag3d from './3dtag';

const Heade = () => {
  const [cut, setCut] = useState(false);
  const [showDiv, setShowDiv] = useState(true);

  return (
    <>
      <section
        className="relative flex justify-between"
        style={{
          width: '100%',
          minHeight: '100vh', // Ensures full viewport height
          margin: 0,
          padding: 0,
        }}
      >
        {showDiv && (
          <div
            className={`absolute z-10 h-full w-full ${cut ? "top-[1000px]" : "top-0"}`}
            style={{ transition: 'top 1s ease' }}
          >
            <Tag3d />
          </div>
        )}
      </section>
    </>
  );
};

export default Heade;
