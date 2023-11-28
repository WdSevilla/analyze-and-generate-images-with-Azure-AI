import React from 'react';

export default function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  const handleImageAnalysis = () => {
    // Lógica para analizar la imagen
  };

  const handleImageGeneration = () => {
    // Lógica para generar la imagen
  };

  return (
    <div>
      <h1>Título</h1>
      <input type="text" value={imageUrl} onChange={handleImageUrlChange} placeholder="URL de la imagen" />
      <button onClick={handleImageAnalysis}>Analizar imagen</button>
      <button onClick={handleImageGeneration}>Generar imagen</button>
    </div>
  );
}
import React, { useState } from 'react';


