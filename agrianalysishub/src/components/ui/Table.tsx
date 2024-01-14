import React from 'react'
import ItemTable from './ItemTable';

function Table() {
    return (
        <div className={`bg-white rounded-md my-5 py-5 px-3`}>
            <div className='grid grid-cols-3 mx-auto '>
                <div className=' flex place-items-center font-Poppins font-light gap-2 text-[#41546A] justify-center'>
                    <h1>
                        Board name
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                        <path d="M1 4.96652L4.38058 1.58594M4.38058 1.58594L7.76116 4.96652M4.38058 1.58594V13.418" stroke="#41546A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.2126 10.0374L12.832 13.418M12.832 13.418L9.45142 10.0374M12.832 13.418V1.58594" stroke="#41546A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className=' flex place-items-center font-Poppins font-light gap-2 text-[#41546A] justify-center'>
                    <h1>Board Description</h1>
                </div>
                <div className=' flex place-items-center font-Poppins font-light gap-2 text-[#41546A] justify-center'>
                    <h1>
                        Column count
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                        <path d="M1 4.96652L4.38058 1.58594M4.38058 1.58594L7.76116 4.96652M4.38058 1.58594V13.418" stroke="#41546A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.2126 10.0374L12.832 13.418M12.832 13.418L9.45142 10.0374M12.832 13.418V1.58594" stroke="#41546A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <ItemTable color={true} />
            <ItemTable color={false} />
            <ItemTable color={true} />
            <ItemTable color={false} />
            <ItemTable color={true} />
        </div>
    )
}

export default Table; 
