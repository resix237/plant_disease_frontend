
import { useState, ReactNode } from "react";
import logo from "../../assets/logo.svg";
import unitylogo from "../../assets/unity_logo.svg";
import { IoIosMenu } from "react-icons/io";
import ItemMenu from "./ItemMenu";
import NavBar from "./NavBar";
import { IoMdClose } from "react-icons/io";


interface OperateurLayoutProps {
  children: ReactNode;
}

const OperateurLayout: React.FC<OperateurLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [NavOpen, setNavOpen] = useState(false);


  const Menus = [
    {
      title: "Analyse", icon: <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M1 1H7.37486V9.49981H1V1Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 13.75H7.37486V17.9999H1V13.75Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.625 9.5H17.9999V17.9998H11.625V9.5Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.625 1H17.9999V5.24991H11.625V1Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      iconLight: <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
        <path d="M1 1H7.37486V9.49981H1V1Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 13.75H7.37486V17.9999H1V13.75Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.625 9.5H17.9999V17.9998H11.625V9.5Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.625 1H17.9999V5.24991H11.625V1Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      path: "/"
    },
    {
      title: "Historique ",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
        <path d="M11.0002 2.00391H19.0003" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 6.00391H16.0003" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 12.0039H19.0003" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 16H16.0003" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 2.00001C1 1.73479 1.10536 1.48044 1.2929 1.2929C1.48044 1.10536 1.73479 1 2.00001 1H6.00006C6.26528 1 6.51963 1.10536 6.70717 1.2929C6.89471 1.48044 7.00007 1.73479 7.00007 2.00001V6.00006C7.00007 6.26528 6.89471 6.51963 6.70717 6.70717C6.51963 6.89471 6.26528 7.00007 6.00006 7.00007H2.00001C1.73479 7.00007 1.48044 6.89471 1.2929 6.70717C1.10536 6.51963 1 6.26528 1 6.00006V2.00001Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 12.0039C1 11.7387 1.10536 11.4843 1.2929 11.2968C1.48044 11.1093 1.73479 11.0039 2.00001 11.0039H6.00006C6.26528 11.0039 6.51963 11.1093 6.70717 11.2968C6.89471 11.4843 7.00007 11.7387 7.00007 12.0039V16.004C7.00007 16.2692 6.89471 16.5235 6.70717 16.7111C6.51963 16.8986 6.26528 17.004 6.00006 17.004H2.00001C1.73479 17.004 1.48044 16.8986 1.2929 16.7111C1.10536 16.5235 1 16.2692 1 16.004V12.0039Z" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      iconLight: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
        <path d="M11.0002 2.00391H19.0003" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 6.00391H16.0003" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 12.0039H19.0003" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M11.0002 16H16.0003" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 2.00001C1 1.73479 1.10536 1.48044 1.2929 1.2929C1.48044 1.10536 1.73479 1 2.00001 1H6.00006C6.26528 1 6.51963 1.10536 6.70717 1.2929C6.89471 1.48044 7.00007 1.73479 7.00007 2.00001V6.00006C7.00007 6.26528 6.89471 6.51963 6.70717 6.70717C6.51963 6.89471 6.26528 7.00007 6.00006 7.00007H2.00001C1.73479 7.00007 1.48044 6.89471 1.2929 6.70717C1.10536 6.51963 1 6.26528 1 6.00006V2.00001Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 12.0039C1 11.7387 1.10536 11.4843 1.2929 11.2968C1.48044 11.1093 1.73479 11.0039 2.00001 11.0039H6.00006C6.26528 11.0039 6.51963 11.1093 6.70717 11.2968C6.89471 11.4843 7.00007 11.7387 7.00007 12.0039V16.004C7.00007 16.2692 6.89471 16.5235 6.70717 16.7111C6.51963 16.8986 6.26528 17.004 6.00006 17.004H2.00001C1.73479 17.004 1.48044 16.8986 1.2929 16.7111C1.10536 16.5235 1 16.2692 1 16.004V12.0039Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      path: "/historique"
    },

    {
      title: "Paramètres",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.99985 1V4.99989C9.99985 5.2651 10.1052 5.51944 10.2927 5.70698C10.4803 5.89451 10.7346 5.99986 10.9998 5.99986H14.9997" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.49976 18.9995H2.99994C2.46953 18.9995 1.96083 18.7888 1.58577 18.4137C1.21071 18.0387 1 17.53 1 16.9996V2.99994C1 2.46953 1.21071 1.96083 1.58577 1.58577C1.96083 1.21071 2.46953 1 2.99994 1H9.99975L14.9996 5.99986V7.9998" stroke="#3B4C0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.4125 10.6585C13.6255 9.7805 14.8745 9.7805 15.0875 10.6585C15.1195 10.7904 15.1821 10.9129 15.2704 11.016C15.3586 11.1191 15.4699 11.1999 15.5953 11.2519C15.7207 11.3038 15.8566 11.3254 15.9919 11.3149C16.1272 11.3044 16.2581 11.2622 16.374 11.1915C17.1455 10.7215 18.029 11.6045 17.559 12.3765C17.4884 12.4923 17.4462 12.6232 17.4358 12.7584C17.4253 12.8936 17.4469 13.0294 17.4988 13.1547C17.5506 13.28 17.6314 13.3913 17.7344 13.4795C17.8374 13.5678 17.9597 13.6305 18.0915 13.6625C18.9695 13.8755 18.9695 15.1245 18.0915 15.3375C17.9596 15.3695 17.8371 15.4321 17.734 15.5204C17.6309 15.6086 17.5501 15.7199 17.4981 15.8453C17.4462 15.9707 17.4246 16.1066 17.4351 16.2419C17.4456 16.3772 17.4878 16.5081 17.5585 16.624C18.0285 17.3955 17.1455 18.279 16.3735 17.809C16.2577 17.7384 16.1268 17.6962 15.9916 17.6858C15.8564 17.6753 15.7206 17.6969 15.5953 17.7488C15.47 17.8006 15.3587 17.8814 15.2705 17.9844C15.1822 18.0874 15.1195 18.2097 15.0875 18.3415C14.8745 19.2195 13.6255 19.2195 13.4125 18.3415C13.3805 18.2096 13.3179 18.0871 13.2296 17.984C13.1414 17.8809 13.0301 17.8001 12.9047 17.7481C12.7793 17.6962 12.6434 17.6746 12.5081 17.6851C12.3728 17.6956 12.2419 17.7378 12.126 17.8085C11.3545 18.2785 10.471 17.3955 10.941 16.6235C11.0116 16.5077 11.0538 16.3768 11.0642 16.2416C11.0747 16.1064 11.0531 15.9706 11.0012 15.8453C10.9494 15.72 10.8686 15.6087 10.7656 15.5205C10.6626 15.4322 10.5403 15.3695 10.4085 15.3375C9.5305 15.1245 9.5305 13.8755 10.4085 13.6625C10.5404 13.6305 10.6629 13.5679 10.766 13.4796C10.8691 13.3914 10.9499 13.2801 11.0019 13.1547C11.0538 13.0293 11.0754 12.8934 11.0649 12.7581C11.0544 12.6228 11.0122 12.4919 10.9415 12.376C10.4715 11.6045 11.3545 10.721 12.1265 11.191C12.6265 11.495 13.2745 11.226 13.4125 10.6585Z" stroke="#3B4C0E" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.7497 14.5C12.7497 14.8978 12.9077 15.2794 13.189 15.5607C13.4703 15.842 13.8518 16 14.2497 16C14.6475 16 15.029 15.842 15.3103 15.5607C15.5916 15.2794 15.7497 14.8978 15.7497 14.5C15.7497 14.1022 15.5916 13.7206 15.3103 13.4393C15.029 13.158 14.6475 13 14.2497 13C13.8518 13 13.4703 13.158 13.189 13.4393C12.9077 13.7206 12.7497 14.1022 12.7497 14.5Z" stroke="#3B4C0E" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      iconLight: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M9.99985 1V4.99989C9.99985 5.2651 10.1052 5.51944 10.2927 5.70698C10.4803 5.89451 10.7346 5.99986 10.9998 5.99986H14.9997" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.49976 18.9995H2.99994C2.46953 18.9995 1.96083 18.7888 1.58577 18.4137C1.21071 18.0387 1 17.53 1 16.9996V2.99994C1 2.46953 1.21071 1.96083 1.58577 1.58577C1.96083 1.21071 2.46953 1 2.99994 1H9.99975L14.9996 5.99986V7.9998" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M13.4125 10.6585C13.6255 9.7805 14.8745 9.7805 15.0875 10.6585C15.1195 10.7904 15.1821 10.9129 15.2704 11.016C15.3586 11.1191 15.4699 11.1999 15.5953 11.2519C15.7207 11.3038 15.8566 11.3254 15.9919 11.3149C16.1272 11.3044 16.2581 11.2622 16.374 11.1915C17.1455 10.7215 18.029 11.6045 17.559 12.3765C17.4884 12.4923 17.4462 12.6232 17.4358 12.7584C17.4253 12.8936 17.4469 13.0294 17.4988 13.1547C17.5506 13.28 17.6314 13.3913 17.7344 13.4795C17.8374 13.5678 17.9597 13.6305 18.0915 13.6625C18.9695 13.8755 18.9695 15.1245 18.0915 15.3375C17.9596 15.3695 17.8371 15.4321 17.734 15.5204C17.6309 15.6086 17.5501 15.7199 17.4981 15.8453C17.4462 15.9707 17.4246 16.1066 17.4351 16.2419C17.4456 16.3772 17.4878 16.5081 17.5585 16.624C18.0285 17.3955 17.1455 18.279 16.3735 17.809C16.2577 17.7384 16.1268 17.6962 15.9916 17.6858C15.8564 17.6753 15.7206 17.6969 15.5953 17.7488C15.47 17.8006 15.3587 17.8814 15.2705 17.9844C15.1822 18.0874 15.1195 18.2097 15.0875 18.3415C14.8745 19.2195 13.6255 19.2195 13.4125 18.3415C13.3805 18.2096 13.3179 18.0871 13.2296 17.984C13.1414 17.8809 13.0301 17.8001 12.9047 17.7481C12.7793 17.6962 12.6434 17.6746 12.5081 17.6851C12.3728 17.6956 12.2419 17.7378 12.126 17.8085C11.3545 18.2785 10.471 17.3955 10.941 16.6235C11.0116 16.5077 11.0538 16.3768 11.0642 16.2416C11.0747 16.1064 11.0531 15.9706 11.0012 15.8453C10.9494 15.72 10.8686 15.6087 10.7656 15.5205C10.6626 15.4322 10.5403 15.3695 10.4085 15.3375C9.5305 15.1245 9.5305 13.8755 10.4085 13.6625C10.5404 13.6305 10.6629 13.5679 10.766 13.4796C10.8691 13.3914 10.9499 13.2801 11.0019 13.1547C11.0538 13.0293 11.0754 12.8934 11.0649 12.7581C11.0544 12.6228 11.0122 12.4919 10.9415 12.376C10.4715 11.6045 11.3545 10.721 12.1265 11.191C12.6265 11.495 13.2745 11.226 13.4125 10.6585Z" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12.7497 14.5C12.7497 14.8978 12.9077 15.2794 13.189 15.5607C13.4703 15.842 13.8518 16 14.2497 16C14.6475 16 15.029 15.842 15.3103 15.5607C15.5916 15.2794 15.7497 14.8978 15.7497 14.5C15.7497 14.1022 15.5916 13.7206 15.3103 13.4393C15.029 13.158 14.6475 13 14.2497 13C13.8518 13 13.4703 13.158 13.189 13.4393C12.9077 13.7206 12.7497 14.1022 12.7497 14.5Z" stroke="#FFFFFF" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>,
      path: "/parametres"
    },
  ];



  return (
    <div className="">
      <div className=" w-full bg-gray-block fixed top-0 z-50 flex justify-between place-items-center px-2 lg:hidden">
        <img
          src={logo}
          className={`h-16 cursor-pointer duration-500 `}

        />
        {!NavOpen ? <IoIosMenu onClick={() => setNavOpen(true)} size={40} className={`text-dark-primary cursor-pointer  duration-500  ${!NavOpen && "rotate-[360deg]"} `} /> :
          <IoMdClose size={40} onClick={() => setNavOpen(false)} className={`text-dark-primary cursor-pointer duration-500 transition-all ${NavOpen && "rotate-[360deg]"} `} />}

      </div>

      <div className="flex lg:mt-0 mt-10 relative ">
        <div className={`${NavOpen ? "w-80  duration-300 transition-all ease-in-out absolute left-0 z-40" : "hidden "} lg:hidden bg-gray-block h-screen p-5  pt-8 relative duration-300`}>

          <div className="lg:flex gap-x-2 place-items-end relative hidden  ">
            <img
              src={logo}
              className={`h-20 cursor-pointer duration-500  ${open && "rotate-[360deg]"}`}
              onClick={() => setOpen(!open)}
            />
            <h1
              className={`text-black origin-bottom  bottom-5 font-Manrope tracking-[4px] absolute  left-[60px]  uppercase font-medium text-xl duration-200 ${!open && "scale-0"
                }`}
            >

              <img
                src={unitylogo}
                className={`cursor-pointer duration-500 w-40 ml-3`}
                onClick={() => setOpen(!open)}
              />

            </h1>
            {/* <img
src={manageDark}
alt="managerTheme"
className={` absolute  left-[210px] transition-all duration-300  ${!open && "scale-0 -translate-x-[210px] "}`}

/> */}
          </div>

          <ul className="lg:pt-16">
            {Menus.map((Menu, index) => (

              <ItemMenu
                key={index}
                Menu={Menu}
                index={index}
                open={open || NavOpen}
              />
            ))}
          </ul>
        </div>
        <div className={` ${open ? " w-80" : "w-20 "} lg:block hidden bg-gray-block h-screen p-5  pt-8 relative duration-300`}>

          <div className="lg:flex gap-x-2 place-items-end relative hidden  ">
            <img
              src={logo}
              className={`h-20 cursor-pointer duration-500  ${open && "rotate-[360deg]"}`}
              onClick={() => setOpen(!open)}
            />
            <h1
              className={`text-black origin-bottom  bottom-5 font-Manrope tracking-[4px] absolute  left-[60px]  uppercase font-medium text-xl duration-200 ${!open && "scale-0"
                }`}
            >

              <img
                src={unitylogo}
                className={`cursor-pointer duration-500 w-40 ml-3`}
                onClick={() => setOpen(!open)}
              />

            </h1>
            {/* <img
    src={manageDark}
    alt="managerTheme"
    className={` absolute  left-[210px] transition-all duration-300  ${!open && "scale-0 -translate-x-[210px] "}`}

  /> */}
          </div>

          <ul className="lg:pt-16">
            {Menus.map((Menu, index) => (

              <ItemMenu
                key={index}
                Menu={Menu}
                index={index}
                open={open}
              />
            ))}
          </ul>
        </div>
        <div hidden={NavOpen} className="lg:flex-1 w-full h-screen overflow-y-auto bg-anti-white">
          <div className=" lg:block hidden">
            <NavBar />
          </div>
          <div className=" py-5 px-10 w-full">
            {children}
          </div>

        </div>
      </div>

    </div>
  );
};
export default OperateurLayout;