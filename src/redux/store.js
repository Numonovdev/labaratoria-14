import { configureStore, createSlice } from '@reduxjs/toolkit';


const getRandomPosition = (gridSize) => {
  const row = Math.floor(Math.random() * gridSize);
  const col = Math.floor(Math.random() * gridSize);
  return { row, col };
};

const gridSize = 10; // Grid ni hajmini yozasiz
const initialGrid = Array(gridSize)
  .fill(null)
  .map(() => Array(gridSize).fill(null));


const thingPosition = getRandomPosition(gridSize);
initialGrid[thingPosition.row][thingPosition.col] = "thing";

const initialState = {
  robotPosition: { row: 1, col: 1 }, 
  grid: initialGrid,
  recentCommands: [],
  itemPicked: null,
};

const robotSlice = createSlice({
  name: 'robot',
  initialState,
  reducers: {
    moveRobot(state, action) {
      const { row, col } = action.payload;
      state.robotPosition = { row, col };
    },
    logCommand(state, action) {
      state.recentCommands.push({
        command: action.payload.command,
        time: new Date().toLocaleTimeString(),
      });
    },
    pickItem(state, action) {
      const { row, col } = action.payload;
      if (state.grid[row][col] === 'thing') {
        state.itemPicked = 'thing';
        state.grid[row][col] = null; 
      }
    },
    putItem(state, action) {
      const { row, col } = action.payload;
      if (state.itemPicked) {
        state.grid[row][col] = state.itemPicked;
        state.itemPicked = null;
      }
    },
  },
});

export const { moveRobot, logCommand, pickItem, putItem } = robotSlice.actions;

const store = configureStore({
  reducer: {
    robot: robotSlice.reducer,
  },
});

export default store;
