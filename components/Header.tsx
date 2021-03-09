import { version as appVersion } from 'package.json';

const Header = (): JSX.Element => {
  return (
    <header className='w-full p-6 font-semibold items-center border-b border-gray-300 dark:border-gray-600'>
      <div className='flex justify-between max-w-xl mx-auto'>
        <p className='text-base lg:text-lg xl:text-xl'>Agile</p>
        <div className='flex space-x-3'>
          <div className='font-mono font-normal'>
            <p>{appVersion}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;