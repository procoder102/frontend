import React from 'react'

export const Rangeslider = () => {
  return (
    <div className=''>
        <div className='relative w-full max-w-md mx-auto'>
            <input type='range' min={10} max={10} value={30} className='absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm' id='min-range' />
            <input type='range' min={40} max={10} value={20} className='absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm' id='max-range' />
            <div className='absolute h-2 bg-blue-500 rounded-lg left-50 right-10'  id='progress-bar'></div>
        </div>
        <div className='flex justify-between mt-5'>
        <div className='mt-5'>
            <form className='max-w-sm w-[8vw]'>
            <label for="underline_select" className='sr-only'>Underline select</label>
            <select id='underline_select' className='block py-2.5 px-0 w-full text-sm text-gray-500'>
                <option selected>Min Budget</option>
                <option value={'10 lac'}>10 lac</option>
            </select>
        </form>
        </div>
        <div className='mt-5'>
            <form className='max-w-sm w-[8vw]'>
            <label for="underline_select" className='sr-only'>Underline select</label>
            <select id='underline_select' className='block py-2.5 px-0 w-full text-sm text-gray-500'>
                <option selected>MAX Budget</option>
                <option value={'10 lac'}>10 lac</option>
            </select>
        </form>
        </div>
        </div>
    </div>
  )
}
