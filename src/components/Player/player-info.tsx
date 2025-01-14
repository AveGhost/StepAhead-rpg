import {Icon} from '@iconify/react';

const PlayerInfo = () => {
    return (
        <div className="flex w-full gap-4 p-2 bg-gradient-to-b from-[#2f3336]/40 to-[#1d2021]/40 relative z-10">
            <img src="/avatar.png" className="w-[48px] h-[48px] rounded-full" alt="Player avatar" />
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <h2 className="text-lg font-medium text-white">AveGhost</h2>
                    <span className="border border-slate-300 rounded-full w-[23px] h-[24px] flex justify-center items-center text-white text-[.8rem]">1</span>
                </div>
                <div className="w-full bg-gray-200 h-4 dark:bg-gray-700 relative">
                    <span className='absolute top-0 left-2 text-white text-[.7rem]'>50/100</span>
                    <div className="bg-[#A1662F] h-4" style={{width: `50%`}}></div>
                </div>
                <p className='flex gap-3 items-center text-sm'><Icon icon="wpf:coins" width="18" height="18"  style={{color: '#A1662F'}} /> 0</p>
            </div>
        </div>
    )
}

export default PlayerInfo