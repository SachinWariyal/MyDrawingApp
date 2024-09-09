import './UndoRedo.css';
import PropTypes from 'prop-types';
const UndoRedo = ({ undo, redo }) => {
  return (
    <div className="undo-redo">
      <button onClick={undo} className="undo-redo-button">Undo</button>
      <button onClick={redo} className="undo-redo-button">Redo</button>
    </div>
  );
};
UndoRedo.propTypes = {
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired,
  };
export default UndoRedo;
