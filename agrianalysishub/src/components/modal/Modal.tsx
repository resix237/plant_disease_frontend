import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';


function Modal() {
    const modal = useSelector((state: IRootState) => state.modal);
    return (
        modal.active ?
            <AnimatePresence>
                <motion.div className='fixed w-full h-[calc(100vh)] z-[1000] bg-black bg-opacity-30 flex justify-center place-items-center transition-all duration-1000  '>
                    <motion.div className=' bg-white max-h-[80%] flex flex-col justify-between w-11/12 py-10 px-5 sm:w-9/12 lg:w-2/3 xl:w-1/2 rounded-xl overflow-y-auto '>

                        {/* here i want to put body of my modal  */}
                        <motion.div>
                            {modal.body}
                        </motion.div>
                        {/* here i want to put footer of my modal  */}
                        <motion.div>
                            {
                                modal.use_footer ? (<motion.div>  flooter </motion.div>) : ""
                            }

                        </motion.div>
                    </motion.div>
                </motion.div>
            </AnimatePresence >
            :
            null
    )
}

export default Modal;