import React, { useState, useRef } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
  const [link, setLink] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const qrCodeRef = useRef(null);

  const handleInputChange = (event) => {
    setLink(event.target.value);
  };

  const handleGenerateQRCode = () => {
    setShowQRCode(true);
    
  };

  const handleDownloadQRCode = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.png';
    link.click();
  };

  return (
    <div className="container my-5">
      <div className="card p-4 bg-dark text-white">
        <h1 className="card-header text-center mb-4">QR Code Generator</h1>
        <div className="card-body d-flex flex-column align-items-center">
          <div className="form-group w-75">
            <input
              type="text"
              value={link}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter a link"
            />
          </div>
          <button className="btn btn-primary w-75" onClick={handleGenerateQRCode}>
            Generate QR Code
          </button>
          {showQRCode && (
            <div className="text-center mt-4" ref={qrCodeRef}>
              <QRCode value={link} />
              <button className="btn btn-primary mt-3" onClick={handleDownloadQRCode}>
                Download QR Code
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
