// App.tsx

import React, { useState } from 'react';
import { getDocumentToCollection } from '../firebase/firebaseUtil';
 
function Table() {
  const [text, setText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const newDocument = {
        text,
        timestamp: new Date(),
      };

      const docId = await getDocumentToCollection('your-collection');
      setText('');
      console.log('Document added with ID:', docId);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a document"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Table;
