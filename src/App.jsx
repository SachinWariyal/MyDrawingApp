import { useState } from 'react';
import Canvas from './components/Canvas';
import './App.css';

const App = () => {
  const [brushSize, setBrushSize] = useState(5);
  const [brushColor, setBrushColor] = useState('#000000');
  const [selectedTool, setSelectedTool] = useState('pencil');

  return (
    <div className="app-container">
      <div className="toolbar">
        <h3>Toolbar</h3>
        <label>
          Brush Size:
          <input
            type="range"
            min="1"
            max="50"
            value={brushSize}
            onChange={(e) => setBrushSize(e.target.value)}
          />
        </label>
        <label>
          Brush Color:
          <input
            type="color"
            value={brushColor}
            onChange={(e) => setBrushColor(e.target.value)}
          />
        </label>

        <h4>Select Tool:</h4>
        <button onClick={() => setSelectedTool('pencil')} className={selectedTool === 'pencil' ? 'active-tool' : ''}>
          Freehand
        </button>
        <button onClick={() => setSelectedTool('line')} className={selectedTool === 'line' ? 'active-tool' : ''}>
          Line
        </button>
        <button onClick={() => setSelectedTool('rectangle')} className={selectedTool === 'rectangle' ? 'active-tool' : ''}>
          Rectangle
        </button>
        <button onClick={() => setSelectedTool('circle')} className={selectedTool === 'circle' ? 'active-tool' : ''}>
          Circle
        </button>
        <button onClick={() => setSelectedTool('eraser')} className={selectedTool === 'eraser' ? 'active-tool' : ''}>
          Eraser
        </button>

        <button>Undo</button>
        <button>Redo</button>
      </div>

      <Canvas
        brushSize={brushSize}
        brushColor={brushColor}
        selectedTool={selectedTool}
      />

      
    </div>
  );
};

export default App;
