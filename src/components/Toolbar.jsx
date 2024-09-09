import './Toolbar.css';
import PropTypes from 'prop-types';
const Toolbar = ({ tools, selectedTool, onToolSelect, brushSize, setBrushSize, brushColor, setBrushColor }) => {
  return (
    <div className="toolbar">
      <select className="tool-select" value={selectedTool} onChange={(e) => onToolSelect(e.target.value)}>
        {tools.map(tool => (
          <option key={tool} value={tool}>{tool}</option>
        ))}
      </select>
      <div className="toolbar-item">
        <label>Brush Size</label>
        <input 
          type="range" 
          min="1" 
          max="50" 
          value={brushSize} 
          onChange={(e) => setBrushSize(e.target.value)} 
          aria-label="Brush Size"
        />
      </div>
      <div className="toolbar-item">
        <label>Brush Color</label>
        <input 
          type="color" 
          value={brushColor} 
          onChange={(e) => setBrushColor(e.target.value)} 
          aria-label="Brush Color"
        />
      </div>
    </div>
  );
};
Toolbar.propTypes = {
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedTool: PropTypes.string.isRequired,
    onToolSelect: PropTypes.func.isRequired,
    brushSize: PropTypes.number.isRequired,
    setBrushSize: PropTypes.func.isRequired,
    brushColor: PropTypes.string.isRequired,
    setBrushColor: PropTypes.func.isRequired,
  };
export default Toolbar;
