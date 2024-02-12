import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { encryptMessage } from '../utils/crypto';

const EncryptionScreen = () => {
  const [message, setMessage] = useState(''); // Initialize message with an empty string
  const [key, setKey] = useState(''); // Initialize key with an empty string
  const [encryptedMessage, setEncryptedMessage] = useState(''); // Initialize encryptedMessage with an empty string

  const handleEncrypt = () => {
    const encrypted = encryptMessage(message, key); // Call the encryptMessage function with the message and key
    setEncryptedMessage(encrypted); // Set the encryptedMessage state to the encrypted message
  };

  return (
    <div>
        <h2 margin='normal' padding='normal'> Encrypt Message</h2>
      <TextField margin='normal' padding='normal' label="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
      <TextField margin='normal' padding='normal' label="Key" value={key} onChange={(e) => setKey(e.target.value)} />
      <Button margin='normal' padding='normal' onClick={handleEncrypt}>Encrypt</Button>
      {encryptedMessage && <div style={{ marginTop: '20px', content: 'center', textAlign: 'center' }}>Encrypted Message: {encryptedMessage}</div>}
    </div>
  );
};

export default EncryptionScreen;
