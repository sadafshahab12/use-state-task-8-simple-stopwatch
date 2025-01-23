import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, "0")}h : ${String(minutes).padStart(
      2,
      "0"
    )}m : ${String(seconds).padStart(2, "0")}s`;
  };
  return (
    <>
      <div className="h-screen flex justify-center items-center xs:p-5 p-3">
        <div className="flex flex-col justify-center items-center gap-5 max-w-lg w-full bg-teal-300 xs:p-10 p-4 rounded-md ">
          <h1 className="text-3xl font-bold">Stop Watch</h1>
          <div className="time bg-slate-800 w-full h-24 flex justify-center items-center rounded-md">
            <h1 className="xss:text-5xl xxs:text-4xl text-3xl font-bold text-white tracking-wider ">
              {formatTime(time)}
            </h1>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <button
              onClick={handleStartStop}
              className="text-xl font-semibold text-white bg-gradient-to-tl from-teal-500 to-purple-700   py-3 px-4 rounded-md w-full active:scale-95 transition-all ease-in duration-100"
            >
              {isRunning ? "Stop" : "Start"}
            </button>
            <button
              onClick={handleReset}
              className="text-lg bg-slate-800 text-white py-2 px-4 rounded-md w-full active:scale-95 transition-all ease-in duration-100"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
