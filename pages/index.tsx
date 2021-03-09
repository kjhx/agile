import Page from '@components/Page';
import Link from '@components/Link';
import { ArrowUpRight } from 'react-feather';
import { useState } from 'react';

export default function Home() {
  let startTime = new Date();
  const [startButtonText, setStartButtonText] = useState('Start');
  const [displayTime, setDisplayTime] = useState(0.0);
  const [currentInterval, setCurrentInterval] = useState(setInterval(function () { }, 1000));

  const startButtonPressed = () => {
    if (startButtonText === 'Start') {
      setStartButtonText('Stop');
      startTime = new Date();
      setCurrentInterval(setInterval(watch, 1000));
    } else if (startButtonText === 'Stop') {
      setStartButtonText('Start');
      clearInterval(currentInterval);
    }
  }

  const resetButtonPressed = () => {
    setStartButtonText('Start');
    clearInterval(currentInterval);
    setDisplayTime(0.0);
  }

  const watch = () => {
    console.log(new Date());
    const now = new Date();
    const calculatedTime = +((+now - +startTime) / 3.6e+6).toFixed(5);
    console.log(calculatedTime);
    setDisplayTime(calculatedTime);
    if (parseFloat(calculatedTime.toString()) >= 0.01) {
      setDisplayTime(+parseFloat(calculatedTime.toString()).toFixed(3));
    } else if (parseFloat(calculatedTime.toString()) >= 0.001) {
      setDisplayTime(+parseFloat(calculatedTime.toString()).toFixed(4));
    }
  }

  return (
    <Page>
      <div className='flex flex-col flex-grow text-base lg:text-lg xl:text-xl px-6'>
        <div className='flex flex-grow flex-col items-center justify-center'>
          <div className='flex flex-col flex-grow items-center justify-center space-y-6'>
            <div className='flex text-7xl font-semibold'>
              <p className='select-all'>{displayTime}</p>
              <p>hrs</p>
            </div>
            <div className='flex space-x-6'>
              <div
                className='uppercase text-sm p-3 border border-3 border-blue-500 rounded-md text-blue-500 hover:text-white hover:bg-blue-500 transition-all duration-200 cursor-pointer'
                onClick={startButtonPressed}
              >
                <p>{startButtonText}</p>
              </div>
              <div
                className='uppercase text-sm p-3 border border-3 border-red-500 rounded-md text-red-500 hover:text-white hover:bg-red-500 transition-all duration-200 cursor-pointer'
                onClick={resetButtonPressed}
              >
                <p>Reset</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-6 text-gray-400 dark:text-gray-600'>
        <div className='max-w-xl mx-auto flex justify-between flex-wrap'>
          <p>&copy; Kyle Huggins, 2021</p>
          <Link href='//github.com/kjhx/agile'>
            <div className='flex items-center space-x-1'>
              <p>View on GitHub</p>
              <ArrowUpRight size={18} />
            </div>
          </Link>
        </div>
      </div>
    </Page>
  );
}