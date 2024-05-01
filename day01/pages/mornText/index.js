
import React, { useState } from 'react';


export default function MornText() {
  const [text, setText] = useState([]);
  const [textInput, setTextInput] = useState('');

  const getText = async () => {
    const res = await fetch('http://localhost:3000/api/mornText');
    const data = await res.json();
    setText(data);
    console.log(text);
  };

  const postText = async () => {
    const res = await fetch('http://localhost:3000/api/mornText', {
      method: 'POST',
      body: JSON.stringify({ text: textInput }),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    setText(data);
    setTextInput('');
  };

  const deleteText = async (textId) => {
    const res = await fetch(`http://localhost:3000/api/mornText/${textId}`, {
      method: 'DELETE',
    });
    const deletedData = await res.json();
    getText();
  };

  const updateText = async (textId) => {
    const res = await fetch(`http://localhost:3000/api/mornText/${textId}`, {
      method: 'PUT',
      body: JSON.stringify({ newText: textInput }),
      headers: { 'Content-Type': 'application/json' },
    });
    const updatedData = await res.json();
    const foundedIndex = text.findIndex((text) => text.id.toString() === textId);
  
    if (foundedIndex !== -1) {
      text.splice(foundedIndex, 1, updatedData);
     //setText([...text]);
   }
    console.log(text)
  };


  return (
    <div className="container pt-5">
     <h3>Write text here:</h3>
      <input
        type="text"
        className="form-control"
        style={{ width: '500px' }}
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      /> <button onClick={getText} className="btn btn-success">
      Get Text
    </button>
      <button onClick={postText} className="btn btn-success" style={{ margin: '10px' }}>
        Post Text
      </button>
      {text.map((t) => (
  <div key={t.id} className=' bg-light p-5'>
    <h2 style={{ borderRadius: '25px', textAlign: 'start', paddingTop: '5px' }} >
      * {t.id} {t.text}
    </h2>
    <button onClick={() => deleteText(t.id)} className="btn btn-danger">
      Delete Text
    </button>
    <button onClick={() => updateText(t.id)} className="btn btn-success" style={{ marginLeft: '10px' }}>
      Update Text
    </button>
  </div>
))}
    </div>
  );
}