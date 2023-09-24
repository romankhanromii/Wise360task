import React, { useState } from 'react'
import v1 from '../images/Vector 11.svg'
import v2 from '../images/Vector 11 (1).svg'

export default function Faqcomponet({paragraph,discription}) {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className='ml-[51px] pt-[27px] sm:ml-[20px]'>
        <div className='flex justify-between  sm:space-x-3 '>
         <p className="[font-family:'Inter-Regular',Helvetica] font-normal text-white text-[20px] sm:text-[10px] tracking-[-0.30px] leading-[35px] whitespace-nowrap">
       {paragraph}
      </p>
      <button
        className=" text-white px-4 mr-[67px] py-2 rounded-lg "
        onClick={toggleDescription}
      >

{isExpanded ? (
            <img src={v2} alt="Up Arrow" />
          ) : (
            <img src={v1} alt="Down Arrow" />
          )}
      </button>
      </div>
      {isExpanded && (
        <div
          className="w-[1346px] h-[178px] ml-[-50px] bg-[#cdffdb] p-4 mt-4  rounded-lg overflow-y-auto "
        >
           <p className=" w-[1004px] ml-[30px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#18663f] text-[20px] tracking-[-0.30px] leading-[35px] ">
      {discription}
      </p>
      
        </div>
      )}
        
    </div>
  )
}
