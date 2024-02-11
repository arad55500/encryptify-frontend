import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { decryptMessage } from '../utils/crypto';

const DecryptionScreen = () => {
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [key, setKey] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');

  const handleDecrypt = () => {
    const decrypted = decryptMessage(encryptedMessage, key);
    setDecryptedMessage(decrypted);
  };

  return (
    <div>
        <h2> Decrypt Message</h2>
      <TextField margin='normal' padding='normal' label="Encrypted Message" value={encryptedMessage} onChange={(e) => setEncryptedMessage(e.target.value)} />
      <TextField margin='normal' padding='normal' label="Key" value={key} onChange={(e) => setKey(e.target.value)} />
      <Button margin='normal' padding='normal' onClick={handleDecrypt}>Decrypt</Button>
      {decryptedMessage && <div style={{ marginTop: '20px', content: 'center', textAlign: 'center' }}>Decrypted Message: {decryptedMessage}</div>}
    </div>
  );
};

export default DecryptionScreen;
