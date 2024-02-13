import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { decryptMessage } from '../utils/crypto';

const DecryptionScreen = () => { // Define the DecryptionScreen component
  const [encryptedMessage, setEncryptedMessage] = useState(''); // Initialize encryptedMessage with an empty string
  const [key, setKey] = useState(''); // Initialize key with an empty string
  const [decryptedMessage, setDecryptedMessage] = useState(''); // Initialize decryptedMessage with an empty string

  const handleDecrypt = () => {
    const decrypted = decryptMessage(encryptedMessage, key); // Call the decryptMessage function with the encrypted message and key
    setDecryptedMessage(decrypted); // Set the decryptedMessage state to the decrypted message
  };

  return (
    <div>
        <h2> Decrypt Message</h2>
      <TextField margin='normal' padding='normal' label="Encrypted Message" value={encryptedMessage} onChange={(e) => setEncryptedMessage(e.target.value)} />
      <TextField margin='normal' padding='normal' label="Key" value={key} onChange={(e) => setKey(e.target.value)} /> //
      <Button margin='normal' padding='normal' onClick={handleDecrypt}>Decrypt</Button>
      {decryptedMessage && <div style={{ marginTop: '20px', content: 'center', textAlign: 'center' }}>Decrypted Message: {decryptedMessage}</div>}
    </div>
  );
};

export default DecryptionScreen;
