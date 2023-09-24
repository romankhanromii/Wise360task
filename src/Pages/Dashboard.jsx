// import React, { useState } from "react";
// import icon from '../images/icon1 - Full logo.png'
// import location from '../images/location-dot-solid 1.svg'
// import profile from '../images/Ellipse 17.png'
// import menu from '../images/Group 46.svg'
// import restore from '../images/Restore.svg'
// import faq from '../images/Faq.svg'
// import help from '../images/Help.svg'
// import vector9 from  '../images/Vector 9.svg'
// import microphone from '../images/microphone 1.png'


// export const Dashboard = () => {
//      // State to track whether the second div should be visible or not
//   const [isSecondDivVisible, setSecondDivVisible] = useState(false);

//   // Function to toggle the visibility of the second div
//   const toggleSecondDiv = () => {
//     setSecondDivVisible(!isSecondDivVisible);
//   };
//   return (
//     <div className="w-[1440px] h-[1080px] my:w-screen my:h-screen ipad:w-screen ipad:h-screen sm:w-screen sm:h-screen bg-[#f9f9f9]">
//          <div className=" fixed w-[83px] sm:w-[40px] h-[1080px] my:h-[800px] ipad:h-[1180px] sm:h-[900px]  bg-[#168356] shadow-[0px_4px_4px_#00000040]" >
//         <button className="mt-[34px] ml-[30px] ">
//         <img className="w-[24px] h-[15px]" alt="Group" src={menu} />
//       </button> 
//          <button>
//          <img src={restore} className=" w-[24px] h-[24px] mt-[34px]  ml-[30px] sm:ml-2" alt="restore" />
//          </button>
//          <button>
//          <img src={faq} className=" w-[24px] h-[24px] mt-[34px]  ml-[30px] sm:ml-2" alt="Faq" />
//          </button>
//          <button>
//          <img src={help} className=" w-[24px] h-[24px] mt-[34px]  ml-[30px] sm:ml-2" alt="Help" />
//          </button>
//          <button>
//          <img src={location} className=" w-[24px] h-[24px] mt-[700px] my:mt-[300px] sm:mt-[250px] mb-[82px]  ml-[30px] sm:ml-2" alt="location " />
//             </button>
//          </div>
//          <div className="relative w-[1375px] my:w-[1180px] ipad:w-[750px] sm:w-[360px] h-[83px] sm:h-[60px] left-20 bg-[#168356] sm:left-9">
//         <img
//           src={profile}
//           alt="profile"
//           className="w-[34px] h-[34px] absolute top-6 left-[1291px] my:left-[1120px] ipad:left-[650px] sm:left-[300px]"
//           onClick={toggleSecondDiv} // Add onClick event to toggle the second div
//         />
//       </div>
//       {/* Conditionally render the second div based on state */}
//       {isSecondDivVisible && (
//         <div className="fixed  w-[144px] h-[94px] top-[59px] left-[1246px] my:left-[1070px] ipad:left-[600px] sm:left-[200px] bg-white rounded-[10px] shadow-[0px_4px_4px_#b3b3b340]">
//           <button className="mx-[18px] mt-[20px]" >VIEW PROFILE</button><br/>
//           <button className="mx-[18px] mt-[16px]">LOGOUT</button>
//         </div>
//       )}
//     <div className=" ml-[123px] sm:ml-[50px] mt-[35px] sm:mt-[70px]  flex space-x-[47px] sm:space-x-[8px]">

//       <div className=" w-[286px] h-[52px] bg-[#00ff95] rounded-[50px] shadow-[0px_4px_4px_#b3b3b340] [font-family:'Inter-Bold',Helvetica] font-bold text-[#168356] text-[20px] sm:text-[12px] text-center tracking-[-0.30px] leading-[50.1px] whitespace-nowrap">
//         <button>What can I do?</button>
//       </div>
//       <div className=" w-[286px] h-[52px] rounded-[50px] border border-solid border-[#2a8e634a] shadow-[0px_4px_4px_#b3b3b340] [font-family:'Inter-Bold',Helvetica] font-bold text-[#168356] text-[20px] text-center sm:text-[12px]  tracking-[-0.30px] leading-[50.1px] whitespace-nowrap">
//         <button>  How can we talk?</button>
//       </div><br/>






//     </div>
//       <div className=" w-[977px] ipad:w-[600px] sm:w-[300px] sm:mt-[300px] h-[82px] mt-[760px] my:mt-[450px]   ml-[232px] ipad:ml-[130px] sm:ml-[70px]    bg-white rounded-[50px] border border-solid border-[#2a8e634a] shadow-[0px_4px_4px_#b3b3b340]" >
//         <div className="flex justify-between mt-6">
//             <input type="text" placeholder="Enter a Prompt here " className="ml-[57px] sm:ml-[0px] w-[820px] ipad:w-[550px] sm:w-[300px] px-3 focus:outline-none" />
//             <div className="flex space-x-8 ipad:space-x-6 sm:space-x-2 mr-6">
//             <img className="w-[23px] h-[23px] object-cover" src={microphone} alt="" />
//             <img  className="w-[23px] h-[23px] object-cover" src={vector9} alt="" />
//             </div>
//         </div>
//       </div>
//       <div className="">
//       <p className="ipad:mr-[-100px]  sm:ml-[50px] [font-family:'Inter-Light',Helvetica] font-light text-[#94989e] text-[16px] sm:text-[8px] text-center tracking-[-0.24px] leading-[50.1px] sm:leading-9 whitespace-nowrap">
//         Laim may display inaccurate or offensive information that doesn&#39;t represent Laim views.
//       </p>
//     </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import icon from '../images/icon1 - Full logo.png'
import location from '../images/location-dot-solid 1.svg'
import profile from '../images/Ellipse 17.png'
import menu from '../images/Group 46.svg'
import restore from '../images/Restore.svg'
import faq from '../images/Faq.svg'
import help from '../images/Help.svg'
import vector9 from '../images/Vector 9.svg'
import microphone from '../images/microphone 1.png'
import like from '../images/Group 58.svg'

export const Dashboard = () => {
  // State to track whether the second div should be visible or not
  const [isSecondDivVisible, setSecondDivVisible] = useState(false);
  const [todo, settodo] = useState(false)

  // State to track whether the menu div should be visible or not
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [div, showdiv] = useState(false)
  const [wetalk, setwetalk] = useState(false)

  // Function to toggle the visibility of the second div
  const toggleSecondDiv = () => {
    setSecondDivVisible(!isSecondDivVisible);
  };

  // Function to toggle the visibility of the menu div
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };
  const whatido = () => {
    settodo(!todo)
  }

  function dislike() {
    showdiv(!div)
  }
  function talk (){
    setwetalk(!wetalk)
  }
  return (
    <div className="relative w-[1440px] h-[1080px] my:w-screen my:h-screen ipad:w-screen ipad:h-screen sm:w-screen sm:h-screen bg-[#f9f9f9] ">
      {/* Conditional rendering for the initial menu button */}
      {!isMenuVisible && (
        <button onClick={toggleMenu} className="fixed top-[34px] left-[30px] z-10">
          <img className="w-[24px] h-[15px]" alt="Group" src={menu} />
        </button>
      )}

      {/* Conditional rendering for the second div */}
      {isSecondDivVisible && (
        <div className="fixed w-[144px] h-[94px] top-[59px] left-[1246px] my:left-[1070px] ipad:left-[600px] sm:left-[200px] bg-white rounded-[10px] shadow-[0px_4px_4px_#b3b3b340] z-[9999]">
          <button className="mx-[18px] mt-[20px]">VIEW PROFILE</button><br />
          <button className="mx-[18px] mt-[16px]">LOGOUT</button>
        </div>

      )}

      {/* Conditional rendering for the menu div */}
      {isMenuVisible && (
        <div className="fixed top-0 left-0 w-[250px] h-[1080px] bg-[#168356] shadow-[0px_4px_4px_#00000040] z-20">
          {/* Close button */}
          <button onClick={closeMenu} className="absolute top-2 right-2 text-white text-2xl"><img src={menu} className="mt-[34px] w-[24px] h-[15px]" alt="" /></button>

          {/* Menu content goes here */}
          <div className="flex">
            <img src={icon} alt="" className="mt-[21px] ml-[50px] w-[45px] h-[45px] top-0 left-0 object-cover" />
            <span className=" mt-[27.3px] ml-[16px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[15.1px] text-center tracking-[-0.23px] leading-[31.6px] whitespace-nowrap">Laim</span>
          </div>
          <div className="flex">
            <img src={restore} alt="" className="w-[24px] h-[24px] ml-[50px] mt-[75px]" />
            <span className="ml-[14px] mt-[62px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] text-center tracking-[-0.36px] leading-[50.1px] whitespace-nowrap"><button>Reset Chat</button></span>
          </div>
          <div className="flex">
            <img src={faq} alt="" className="w-[24px] h-[24px] ml-[50px] mt-[28px]" />
            <span className="ml-[14px] mt-[13px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[24px] text-center tracking-[-0.36px] leading-[50.1px] whitespace-nowrap"><button>FAQ</button></span>
          </div>
          <div className="mt-[704px] my:mt-[230px] h-[29px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#f9f9f9] text-[24px] text-center tracking-[-0.36px] leading-[normal]">
            Alaska, USA
          </div>
          <div className="flex mt-2 ml-[30px] space-x-[15px]">
            <img src={location} alt="" className="w-[19px] h-[26px]" />
            <span className=" h-[29px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#00ff95] text-[20px]   tracking-[-0.36px] leading-[normal] underline"><button>Change Location</button></span>
          </div>
        </div>

      )}

      {/* Rest of your content */}
      <div className="fixed w-[83px] sm:w-[40px] h-[1080px] my:h-[800px] ipad:h-[1180px] sm:h-[900px]  bg-[#168356] shadow-[0px_4px_4px_#00000040]" >
        <button>
          <img src={restore} className=" w-[24px] h-[24px] mt-[74px]  ml-[30px] sm:ml-2" alt="restore" />
        </button>
        <button>
          <img src={faq} className=" w-[24px] h-[24px] mt-[34px]  ml-[30px] sm:ml-2" alt="Faq" />
        </button>
        <button>
          <img src={help} className=" w-[24px] h-[24px] mt-[34px]  ml-[30px] sm:ml-2" alt="Help" />
        </button>
        <button>
          <img src={location} className=" w-[24px] h-[24px] mt-[700px] my:mt-[270px] sm:mt-[250px] mb-[82px]  ml-[30px] sm:ml-2" alt="location " />
        </button>
      </div>
      <div className="relative w-[1375px] my:w-[1180px] ipad:w-[750px] sm:w-[360px] h-[83px] sm:h-[60px] left-20 bg-[#168356] sm:left-9">
        <img
          src={profile}
          alt="profile"
          className="w-[34px] h-[34px] absolute top-6 left-[1291px] my:left-[1120px] ipad:left-[650px] sm:left-[300px]"
          onClick={toggleSecondDiv} // Add onClick event to toggle the second div
        />
      </div>
      {/* Rest of your content */}
      <div className={`${isMenuVisible ? "ml-[300px]" : "ml-[180px]"} sm:ml-[50px]  mt-[35px] sm:mt-[70px]  flex space-x-[47px] sm:space-x-[8px]`}>

        <div className={` w-[286px] h-[52px] bg-[${isMenuVisible ? '' : '#00ff95'}]  rounded-[50px] shadow-[0px_4px_4px_#b3b3b340] border border-solid border-[#2a8e634a] [font-family:'Inter-Bold',Helvetica] font-bold text-[#168356] text-[20px] sm:text-[12px] text-center tracking-[-0.30px] leading-[50.1px] whitespace-nowrap`}>
          <button onClick={whatido}>What can I do?</button>
          {todo && (
            <div>
              <div className="flex mt-[39px] space-x-[15px]">
                <img src={profile} className="w-7 h-7" alt="" />
                <span className="mt-[-10px]">What can i do?</span>
              </div>
              <div className=" w-[977px] h-[231px]  bg-[#e5f7ea] rounded-[10px] flex" >
                <img src={icon} className="w-[31px] h-[31px] mt-[33px] ml-[56px]" alt="" />
                <div className="w-[817px]">
                  <p className=" mt-[33px] ml-[18px]   [font-family:'Inter-Regular',Helvetica] font-normal text-[#35444b] text-[20px] tracking-[-0.30px] leading-[26.6px]">

                    I’m pretty knowledgeable about row crop agriculture, especially machinery and crop management
                    <br />practices.

                    In the future, I would like to connect and learn more about your specific equipment and    <br /> environment in your
                    fields to share specific recommendation to increase your margin and yield    <br />potential.
                  </p>
                  <div className="flex mt-4">
                    <button className="mr-4" onClick={dislike}>
                      <img src={like} alt="Like" className="w-[100px] h-[26px] ml-[20px]" />
                    </button>

                  </div>
                  {
                    div && (
                      <div className="">
                        <div className="mt-[70px] w-[977px] h-[183px] bg-[#e5f7ea] rounded-[10px] ml-[-87px]">
                          <span className="ml-[-550px]">What is wrong with my answer?</span>
                          <div className="flex ml-[65px] space-x-[21px]">
                            <div className=" w-[133px] h-[30px]  rounded-[19.94px] border-[0.5px] border-solid border-[#168356]" >
                              <span className="relative top-[-13px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#168356] text-[12.8px] text-center tracking-[-0.19px] leading-[40.0px] whitespace-nowrap">Irrelevent</span>
                            </div>
                            
                            <div className=" w-[133px] h-[30px]  rounded-[19.94px] border-[0.5px] border-solid border-[#168356]" >
                              <span className="relative top-[-13px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#168356] text-[12.8px] text-center tracking-[-0.19px] leading-[40.0px] whitespace-nowrap">Not Factual</span>
                            </div>
                            
                            
                          </div>
                          <div className=" mt-4 ml-[67px] w-[496px] h-[51px] rounded-[5px] border-[0.5px] border-solid border-[#168356] shadow-[0px_4px_4px_#b3b3b340]" >
                            <span className="[font-family:'Inter-Light',Helvetica] font-light text-[#168356] text-[16px] tracking-[-0.24px] leading-[26.6px] whitespace-nowrap">Provide Additional Feedback</span>
   
                           </div>
                          
                          
                        </div>
                        
                        
                      </div>
                    )
                  }


                </div>
              </div>
            </div>
          )

          }
        </div>
        <div className={` w-[286px] h-[52px] bg-[${isMenuVisible ? '#00ff95' : ''}] rounded-[50px] shadow-[0px_4px_4px_#b3b3b340] border border-solid border-[#2a8e634a] [font-family:'Inter-Bold',Helvetica] font-bold text-[#168356] text-[20px] sm:text-[12px] text-center tracking-[-0.30px] leading-[50.1px] whitespace-nowrap`}>
          <button onClick={talk}>  How can we talk?</button>
        </div>
        {
          wetalk &&(
            <div>
               <div className="mt-[70px] w-[977px] h-[183px] bg-[#e5f7ea] rounded-[10px] ml-[-665px]">
               <div className="flex pt-[33px] ml-[56px] space-x-[15px]">
                <img src={profile} className="w-7 h-7" alt="" />
                <span className=""> I&#39;m LAIM, Here is how we can talk You can try:</span>
              </div>
              <div className="ml-[105px] mt-[15px]">
              <span className=" [font-family:'Inter-Medium',Helvetica] font-medium text-[#168356] text-[20px] tracking-[-0.30px] leading-[26.6px] whitespace-nowrap">  Why should I get the new Starfile 7000 tractor?</span><br/>
              <span className=" [font-family:'Inter-Medium',Helvetica] font-medium text-[#168356] text-[20px] tracking-[-0.30px] leading-[26.6px] whitespace-nowrap">   How much non-residual herbicide will I save using see and spray technology?
      </span><br/>

              <span className=" [font-family:'Inter-Medium',Helvetica] font-medium text-[#168356] text-[20px] tracking-[-0.30px] leading-[26.6px] whitespace-nowrap">  Should I upgrade my case combine to an axial-flow 250 series?</span>
              </div>

               </div>
            </div>

          )
        }
      </div>
      <div className={` w-[977px] ipad:w-[600px] sm:w-[300px] sm:mt-[300px] h-[82px] mt-[760px] my:mt-[700px]   ${isMenuVisible ? "ml-[300px]" : "ml-[232px]"} ipad:ml-[130px] sm:ml-[70px]    bg-white rounded-[50px] border border-solid border-[#2a8e634a] shadow-[0px_4px_4px_#b3b3b340] `} >
        <div className="flex justify-between mt-6">
          <input type="text" placeholder="Enter a Prompt here " className="ml-[57px] sm:ml-[0px] w-[820px] ipad:w-[550px] sm:w-[300px] px-3 focus:outline-none" />
          <div className="flex space-x-8 ipad:space-x-6 sm:space-x-2 mr-6">
            <img className="w-[23px] h-[23px] object-cover" src={microphone} alt="" />
            <button onClick={whatido}>
            <img className="w-[23px] h-[23px] object-cover" src={vector9} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <p className="ipad:mr-[-100px]  sm:ml-[50px] [font-family:'Inter-Light',Helvetica] font-light text-[#94989e] text-[16px] sm:text-[8px] text-center tracking-[-0.24px] leading-[50.1px] sm:leading-9 whitespace-nowrap">
          Laim may display inaccurate or offensive information that doesn't represent Laim views.
        </p>
      </div>
    </div>
  );
};

