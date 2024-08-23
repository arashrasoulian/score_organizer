// ColorBoxes.js
import React from 'react';

const colors = [
  'sky-blue',
  'slate-blue',
  'deep-blue',
  'navy-blue',
  'ivory',
  'light-ivory',
  'sand',
  'tan',
  'muted-rose',
  'deep-brown',
  'brown',
];

const Colorboxes = () => {
  return (
    <div className="container">
      <div className="row">
        {colors.map((color) => (
          <div className="col-6 col-md-4 col-lg-3 mb-4" key={color}>
            <div className={`color-box ${color}`}>
              <p className="text-white">{color.replace('-', ' ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colorboxes;
