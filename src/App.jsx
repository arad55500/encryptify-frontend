import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EncryptionScreen from './pages/EncryptionScreen';
import DecryptionScreen from './pages/DecryptionScreen';
import './App.css';

const App = () => {
  return (

    
    <Router>
      <div className="header-box">
  <h2>Encryptify V1.3 | Encrypt & Decrypt your messages. </h2>
  <p>Created by Arad Okanin | aradokanin.com</p>
</div>

      <nav>
        <Link to="/">Encrypt</Link>
        <Link to="/decrypt">Decrypt</Link>
      </nav>
      <Routes>
        <Route path="/" element={<EncryptionScreen />} />
        <Route path="/decrypt" element={<DecryptionScreen />} />
      </Routes>

      <hr />
      <div className="instructions">
    <h2>How to Use Encryptify</h2>
    <p>Welcome to Encryptify, the simple and secure way to encrypt and decrypt your messages. Follow these easy steps to get started:</p>
    <ul>
        <li><strong>To Encrypt a Message:</strong> Navigate to the 'Encrypt' tab. Enter your message in the 'Message' field and your secret key in the 'Key' field. Press 'Encrypt' to see the encrypted message.</li>
        <li><strong>To Decrypt a Message:</strong> Switch to the 'Decrypt' tab. Paste the encrypted message in the 'Encrypted Message' field and enter the correct key in the 'Key' field. Press 'Decrypt' to reveal the original message.</li>
        <li>Remember, the key used for encryption must be the same as the one used for decryption.</li>
        <li>Keep your key secure! Without it, the encrypted message cannot be decrypted.</li>
    </ul>
    <p>Enjoy secure communication with Encryptify!</p>
</div>

    </Router>
  );
};

export default App;
