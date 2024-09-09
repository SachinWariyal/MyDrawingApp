import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Canvas.css';

const Canvas = ({ brushSize, brushColor, selectedTool }) => {
  const canvasRef = useRef(null);
  const offScreenCanvasRef = useRef(null); // Ref for off-screen canvas
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

   
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    
    context.lineCap = 'round';
    context.lineWidth = brushSize;

    contextRef.current = context;

    
    offScreenCanvasRef.current = document.createElement('canvas');
    offScreenCanvasRef.current.width = canvas.width;
    offScreenCanvasRef.current.height = canvas.height;

    context.drawImage(offScreenCanvasRef.current, 0, 0);
  }, [brushSize]);

  useEffect(() => {
   
    if (selectedTool !== 'eraser') {
      contextRef.current.strokeStyle = brushColor; 
    }
    contextRef.current.lineWidth = brushSize;
  }, [brushSize, brushColor, selectedTool]);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    setIsDrawing(true);
    setStartPoint({ x: offsetX, y: offsetY });

    if (selectedTool === 'pencil' || selectedTool === 'eraser') {
      contextRef.current.beginPath();
      contextRef.current.moveTo(offsetX, offsetY);
    }
  };

  const finishDrawing = () => {
    setIsDrawing(false);

    
    const offScreenContext = offScreenCanvasRef.current.getContext('2d');
    offScreenContext.drawImage(canvasRef.current, 0, 0);
    
    contextRef.current.closePath();
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;

    
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    context.drawImage(offScreenCanvasRef.current, 0, 0);

    
    if (selectedTool === 'pencil') {
      context.lineTo(offsetX, offsetY);
      context.stroke();
    } else if (selectedTool === 'eraser') {
      context.strokeStyle = '#FFFFFF'; 
      context.lineTo(offsetX, offsetY);
      context.stroke();
    } else if (selectedTool === 'line') {
      context.beginPath();
      context.moveTo(startPoint.x, startPoint.y);
      context.lineTo(offsetX, offsetY);
      context.stroke();
      context.closePath();
    } else if (selectedTool === 'rectangle') {
      const width = offsetX - startPoint.x;
      const height = offsetY - startPoint.y;
      context.strokeRect(startPoint.x, startPoint.y, width, height);
    } else if (selectedTool === 'circle') {
      const radius = Math.sqrt((offsetX - startPoint.x) ** 2 + (offsetY - startPoint.y) ** 2);
      context.beginPath();
      context.arc(startPoint.x, startPoint.y, radius, 0, Math.PI * 2);
      context.stroke();
      context.closePath();
    }
  };

  return (
    <canvas
      ref={canvasRef}
      className="drawing-canvas"
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={draw}
    />
  );
};

Canvas.propTypes = {
  brushSize: PropTypes.number.isRequired,
  brushColor: PropTypes.string.isRequired,
  selectedTool: PropTypes.string.isRequired,
};

export default Canvas;
