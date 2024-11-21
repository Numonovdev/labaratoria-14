import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveRobot, logCommand, pickItem, putItem } from '../redux/store';

const ControlPanel = () => {
  const dispatch = useDispatch();
  const { robotPosition, grid, recentCommands } = useSelector((state) => state.robot);
  const [command, setCommand] = useState('');

  const handleCommand = () => {
    const { row, col } = robotPosition;
    let newRow = row;
    let newCol = col;

    switch (command) {
      case 'l': 
        newCol = Math.max(0, col - 1);
        break;
      case 'r': 
        newCol = Math.min(grid[0].length - 1, col + 1);
        break;
      case 't': 
        newRow = Math.max(0, row - 1);
        break;
      case 'b': 
        newRow = Math.min(grid.length - 1, row + 1);
        break;
      case 't-take': 
        dispatch(pickItem({ row, col }));
        break;
      case 'p-put': 
        dispatch(putItem({ row, col }));
        break;
      default:
        alert('Invalid Command');
        return;
    }

    if (['l', 'r', 't', 'b'].includes(command)) {
      dispatch(moveRobot({ row: newRow, col: newCol }));
    }

    dispatch(logCommand({ command }));
    setCommand('');
  };

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${grid[0].length}, 50px)` }}>
        {grid.map((row, rowIndex) =>
          row.map((box, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: 50,
                height: 50,
                border: '1px solid #ccc',
                backgroundColor:
                  rowIndex === robotPosition.row && colIndex === robotPosition.col
                    ? 'blue' 
                    : box === 'thing'
                    ? 'red' 
                    : 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {rowIndex === robotPosition.row && colIndex === robotPosition.col ? '🤖' : ''}
              {box === 'thing' ? '📦' : ''}
            </div>
          ))
        )}
      </div>
      <div style={{ marginTop: 20 }}>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter Command"
          style={{ marginRight: 10 }}
          className='outline-none border px-3 py-1'
        />
        <button onClick={handleCommand} className='px-3 py-1 bg-blue-700 text-white font-bold rounded-md'>Submit</button>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Recent Commands</h3>
        <ul>
          {recentCommands.map((log, index) => (
            <li key={index}>
              {log.time} - {log.command}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ControlPanel;

