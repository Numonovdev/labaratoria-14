import React, { useState } from "react";
import Box from "./Box";
import { useSelector } from "react-redux";

const Boxs = () => {
  const boxData = [
    {
      name: "quti",
      id: 1,
      bgColor: "red",
    },
    {
      name: "quti",
      id: 2,
      bgColor: "blue",
    },
    {
      name: "quti",
      id: 3,
      bgColor: "green",
    },
    {
      name: "quti",
      id: 4,
      bgColor: "yellow",
    },
    {
        name: "quti",
        id: 1,
        bgColor: "red",
      },
      {
        name: "quti",
        id: 2,
        bgColor: "blue",
      },
      {
        name: "quti",
        id: 3,
        bgColor: "green",
      },
      {
        name: "quti",
        id: 4,
        bgColor: "yellow",
      },
      {
        name: "quti",
        id: 1,
        bgColor: "red",
      },
      {
        name: "quti",
        id: 2,
        bgColor: "blue",
      },
      {
        name: "quti",
        id: 3,
        bgColor: "green",
      },
      {
        name: "quti",
        id: 4,
        bgColor: "yellow",
      },
      {
        name: "quti",
        id: 1,
        bgColor: "red",
      },
      {
        name: "quti",
        id: 2,
        bgColor: "blue",
      },
      {
        name: "quti",
        id: 3,
        bgColor: "green",
      },
      {
        name: "quti",
        id: 4,
        bgColor: "yellow",
      },
      {
        name: "quti",
        id: 1,
        bgColor: "red",
      },
      {
        name: "quti",
        id: 2,
        bgColor: "blue",
      },
      {
        name: "quti",
        id: 3,
        bgColor: "green",
      },
      {
        name: "quti",
        id: 4,
        bgColor: "yellow",
      },
      {
        name: "quti",
        id: 1,
        bgColor: "red",
      },
      {
        name: "quti",
        id: 2,
        bgColor: "blue",
      },
      {
        name: "quti",
        id: 3,
        bgColor: "green",
      },
      {
        name: "quti",
        id: 4,
        bgColor: "yellow",
      },
      {
        name: "quti",
        id: 1,
        bgColor: "red",
      },
      {
        name: "quti",
        id: 2,
        bgColor: "blue",
      },
      {
        name: "quti",
        id: 3,
        bgColor: "green",
      },
      {
        name: "quti",
        id: 4,
        bgColor: "yellow",
      },
      {
        name: "quti",
        id: 1,
        bgColor: "red",
      },
      {
        name: "quti",
        id: 2,
        bgColor: "blue",
      },
      {
        name: "quti",
        id: 3,
        bgColor: "green",
      },
      {
        name: "quti",
        id: 4,
        bgColor: "yellow",
      },
      {
        name: "quti",
        id: 1,
        bgColor: "red",
      },
      {
        name: "quti",
        id: 2,
        bgColor: "blue",
      },
      {
        name: "quti",
        id: 3,
        bgColor: "green",
      },
      {
        name: "quti",
        id: 4,
        bgColor: "yellow",
      },
      {
        name: "quti",
        id: 1,
        bgColor: "red",
      },
      {
        name: "quti",
        id: 2,
        bgColor: "blue",
      },
      {
        name: "quti",
        id: 3,
        bgColor: "green",
      },
      {
        name: "quti",
        id: 4,
        bgColor: "yellow",
      },
      {
        name: "quti",
        id: 1,
        bgColor: "red",
      },
      {
        name: "quti",
        id: 2,
        bgColor: "blue",
      },
      {
        name: "quti",
        id: 3,
        bgColor: "green",
      },
      {
        name: "quti",
        id: 4,
        bgColor: "yellow",
      },
      {
          name: "quti",
          id: 1,
          bgColor: "red",
        },
        {
          name: "quti",
          id: 2,
          bgColor: "blue",
        },
        {
          name: "quti",
          id: 3,
          bgColor: "green",
        },
        {
          name: "quti",
          id: 4,
          bgColor: "yellow",
        },
        {
          name: "quti",
          id: 1,
          bgColor: "red",
        },
        {
          name: "quti",
          id: 2,
          bgColor: "blue",
        },
        {
          name: "quti",
          id: 3,
          bgColor: "green",
        },
        {
          name: "quti",
          id: 4,
          bgColor: "yellow",
        },
        {
          name: "quti",
          id: 1,
          bgColor: "red",
        },
        {
          name: "quti",
          id: 2,
          bgColor: "blue",
        },
        {
          name: "quti",
          id: 3,
          bgColor: "green",
        },
        {
          name: "quti",
          id: 4,
          bgColor: "yellow",
        },
        {
          name: "quti",
          id: 1,
          bgColor: "red",
        },
        {
          name: "quti",
          id: 2,
          bgColor: "blue",
        },
        {
          name: "quti",
          id: 3,
          bgColor: "green",
        },
        {
          name: "quti",
          id: 4,
          bgColor: "yellow",
        },
        {
          name: "quti",
          id: 1,
          bgColor: "red",
        },
        {
          name: "quti",
          id: 2,
          bgColor: "blue",
        },
        {
          name: "quti",
          id: 3,
          bgColor: "green",
        },
        {
          name: "quti",
          id: 4,
          bgColor: "yellow",
        },
        {
          name: "quti",
          id: 1,
          bgColor: "red",
        },
        {
          name: "quti",
          id: 2,
          bgColor: "blue",
        },
        {
          name: "quti",
          id: 3,
          bgColor: "green",
        },
        {
          name: "quti",
          id: 4,
          bgColor: "yellow",
        },
        {
          name: "quti",
          id: 1,
          bgColor: "red",
        },
        {
          name: "quti",
          id: 2,
          bgColor: "blue",
        },
        {
          name: "quti",
          id: 3,
          bgColor: "green",
        },
        {
          name: "quti",
          id: 4,
          bgColor: "yellow",
        },
        {
          name: "quti",
          id: 1,
          bgColor: "red",
        },
        {
          name: "quti",
          id: 2,
          bgColor: "blue",
        },
        {
          name: "quti",
          id: 3,
          bgColor: "green",
        },
        {
          name: "quti",
          id: 4,
          bgColor: "yellow",
        },
        {
          name: "quti",
          id: 1,
          bgColor: "red",
        },
        {
          name: "quti",
          id: 2,
          bgColor: "blue",
        },
        {
          name: "quti",
          id: 3,
          bgColor: "green",
        },
        {
          name: "quti",
          id: 4,
          bgColor: "yellow",
        },
        {
            name: "quti",
            id: 1,
            bgColor: "red",
          },
          {
            name: "quti",
            id: 2,
            bgColor: "blue",
          },
          {
            name: "quti",
            id: 3,
            bgColor: "green",
          },
          {
            name: "quti",
            id: 4,
            bgColor: "yellow",
          },
          {
              name: "quti",
              id: 1,
              bgColor: "red",
            },
            {
              name: "quti",
              id: 2,
              bgColor: "blue",
            },
            {
              name: "quti",
              id: 3,
              bgColor: "green",
            },
            {
              name: "quti",
              id: 4,
              bgColor: "yellow",
            },
            {
              name: "quti",
              id: 1,
              bgColor: "red",
            },
            {
              name: "quti",
              id: 2,
              bgColor: "blue",
            },
            {
              name: "quti",
              id: 3,
              bgColor: "green",
            },
            {
              name: "quti",
              id: 4,
              bgColor: "yellow",
            },
            {
              name: "quti",
              id: 1,
              bgColor: "red",
            },
            {
              name: "quti",
              id: 2,
              bgColor: "blue",
            },
            {
              name: "quti",
              id: 3,
              bgColor: "green",
            },
            {
              name: "quti",
              id: 4,
              bgColor: "yellow",
            },
            {
              name: "quti",
              id: 1,
              bgColor: "red",
            },
            {
              name: "quti",
              id: 2,
              bgColor: "blue",
            },
            {
              name: "quti",
              id: 3,
              bgColor: "green",
            },
            {
              name: "quti",
              id: 4,
              bgColor: "yellow",
            },
            {
              name: "quti",
              id: 1,
              bgColor: "red",
            },
            {
              name: "quti",
              id: 2,
              bgColor: "blue",
            },
            {
              name: "quti",
              id: 3,
              bgColor: "green",
            },
            {
              name: "quti",
              id: 4,
              bgColor: "yellow",
            },
            {
              name: "quti",
              id: 1,
              bgColor: "red",
            },
            {
              name: "quti",
              id: 2,
              bgColor: "blue",
            },
            {
              name: "quti",
              id: 3,
              bgColor: "green",
            },
            {
              name: "quti",
              id: 4,
              bgColor: "yellow",
            },
            {
              name: "quti",
              id: 1,
              bgColor: "red",
            },
            {
              name: "quti",
              id: 2,
              bgColor: "blue",
            }
  ];
  // const dispatch = useDispatch();
  // const { robotPosition, grid, recentCommands } = useSelector((state) => state.robot);
  // const [command, setCommand] = useState('');

  // const handleCommand = () => {
  //   const { row, col } = robotPosition;
  //   let newRow = row;
  //   let newCol = col;

  //   switch (command) {
  //     case 'l': 
  //       newCol = Math.max(0, col - 1);
  //       break;
  //     case 'r': 
  //       newCol = Math.min(grid[0].length - 1, col + 1);
  //       break;
  //     case 't': 
  //       newRow = Math.max(0, row - 1);
  //       break;
  //     case 'b': 
  //       newRow = Math.min(grid.length - 1, row + 1);
  //       break;
  //     case 't-take': 
  //       dispatch(pickItem({ row, col }));
  //       break;
  //     case 'p-put': 
  //       dispatch(putItem({ row, col }));
  //       break;
  //     default:
  //       alert('Invalid Command');
  //       return;
  //   }

  //   if (['l', 'r', 't', 'b'].includes(command)) {
  //     dispatch(moveRobot({ row: newRow, col: newCol }));
  //   }

  //   dispatch(logCommand({ command }));
  //   setCommand('');
  // };



  return (
    
    <div className="flex flex-col p-3 rounded-lg md:p-5 border shadow">
      <h1 className="text-black font-semibold text-xl md:text-2xl">Control Panel</h1>
      <div className="grid lg:grid-cols-11 md:grid-cols-6 grid-cols-11 gap-2 mt-4">
        {boxData.map((box, index) => (
          <Box key={index} style={{ backgroundColor: box.bgColor }} />
        ))}
      </div>
      <div className="w-full flex flex-col mt-5">
        <p className="text-black">Enter Commanda</p>
        <input type="text"  placeholder="enter command" className=" rounded-md px-2 py-2 md:px-4 outline-none border text-black" />
        <button className=" px-3 py-2 bg-black text-white hover:bg-black/75
        mt-5  rounded-lg font-bold text-base md:text-lg duration-500 w-full md:w-1/3 lg:w-1/3">Execute Command</button>
        <label className="mt-5 font-semibold ">Animation speed</label>
        <input type="range" name="" id="" />
      </div>
     
    </div>
  );
};

export default Boxs;
