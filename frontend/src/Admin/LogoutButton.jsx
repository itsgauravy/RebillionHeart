import { HiLogout } from 'react-icons/hi';

export default function LogoutButton({onClick}) {
  return (
    <button  onClick={onClick}  className="flex items-center justify-start w-[44px] h-[44px] bg-red-500 rounded-full shadow-md overflow-hidden relative transition-all duration-300 hover:w-[125px] hover:rounded-[40px] active:translate-x-[2px] active:translate-y-[2px] group">
      
      <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:w-[30%] pl-0 group-hover:pl-5">
        <HiLogout className="text-white w-[20px] h-[20px]" />
      </div>

      <div className="absolute right-0 w-0 opacity-0 text-white text-[0.9em] font-semibold transition-all duration-300 group-hover:opacity-100 group-hover:w-[70%] group-hover:pr-2">
        Logout
      </div>
    </button>
  );
}
