# Collaborative Drawing Application
# This is a web-based collaborative drawing application that allows multiple users to create, edit, and interact with drawings in real-time. It features drawing tools such as freehand drawing, shape drawing, erasing, undo/redo functionality, and the ability to customize brush size, color, and shapes. Users can collaborate on the same canvas, and their actions are synced in real-time.

# Features
- Freehand Drawing: Allows users to draw freely with customizable brush sizes and colors.
- Shape Drawing: Includes tools for drawing lines, rectangles, and circles with adjustable properties.
- Text Input: Insert text on the canvas with adjustable font, size, and color.
- Eraser Tool: A tool to erase specific parts of the drawing.
- Undo/Redo Functionality: Users can undo and redo their last actions.
- Real-Time Collaboration: Multiple users can collaborate on the same canvas, with their actions reflected in real-time.
- Clear Canvas: A button to clear the entire canvas.

# Technology Stack
The following technologies are used in this project:

# Frontend:

- React: A JavaScript library for building user interfaces.
- CSS Modules: For component-based styling.
- HTML5 Canvas API: For rendering 2D graphics on the web.
- Socket.IO: For real-time bidirectional communication between the server and client.

# Backend:

- Node.js: A JavaScript runtime built on Chrome's V8 engine.
- Express: A web framework for Node.js.
- Socket.IO: For real-time communication and synchronization.

# Project Structure

collaborative-drawing-app/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Canvas.jsx      # Canvas drawing component
│   │   ├── Toolbar.jsx     # Toolbar with brush size, color, and shape selection
│   │   ├── UndoRedo.jsx    # Undo/Redo buttons component
│   │   ├── App.jsx         # Main App component that integrates all components
│   ├── App.css             # Global styles
│   ├── Canvas.css          # Styles for the Canvas component
│   ├── Toolbar.css         # Styles for the Toolbar component
│   └── UndoRedo.css        # Styles for UndoRedo component
├── server/
│   └── server.js           # Express and Socket.IO backend server
├── package.json
├── README.md
└── .gitignore

# Components

- Canvas.jsx: Handles the drawing functionality, including freehand drawing, shape drawing, text input, and erasing. Manages the canvas history for undo/redo operations and communicates with the backend for real-time updates.
- Toolbar.jsx: Provides tools for selecting the drawing mode, brush size, brush color, and shape.
- UndoRedo.jsx: Provides buttons to undo and redo actions on the canvas.
- App.jsx: The main component that integrates the toolbar, canvas, and undo/redo components.

# Installation
To set up the project locally, follow these steps:

* Prerequisites
Ensure you have the following installed:

- Node.js (v12 or above)
- npm or yarn

1. Clone the repository: 
2. Navigate into the project directory:
3. npm install
4. Start the frontend and backend servers:
- For the backend, navigate to the server folder and run: node server.js
- For the frontend, go back to the root and run: npm run dev

# Usage
- Select a tool: Choose between pencil, shapes (rectangle, circle, line), or the eraser.
- Customize the brush: Change the brush size and color from the toolbar.
- Undo/Redo: If you make a mistake, use the undo button. You can also redo an action after undoing it.
- Clear Canvas: Clear the entire canvas using the clear button.

# Owner
- This project is made by Sachin Wariyal, for any questions please contact: sachinwariyal4@gmail.com

# Note: This project is still in development phase and might not have all the features implemented. There might be some bugs in the project which will be reviewed and corrected soon 