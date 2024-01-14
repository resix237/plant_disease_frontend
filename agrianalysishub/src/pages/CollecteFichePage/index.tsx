import React, { Fragment } from 'react';
import { Button, CardKPI } from '../../components';
import new_icon from "../../assets/icons/file-plus.svg"
import { CiCirclePlus } from "react-icons/ci";
import { Link } from 'react-router-dom';

function CollecteFichePage() {
    return (

        <Fragment>

            <div className='px-10 py-8 my-3 bg-secondary  w-full flex justify-between place-items-center rounded-lg'>

                <CardKPI
                    icon={<img src={new_icon} alt="icon" className=' w-8 h-8' />}
                    title={"Total collecté "}
                    value={124}
                />
                <Link to={"/add-new-fiche"}>
                    <div className=' flex gap-3 justify-between place-items-center bg-white text-primary rounded-lg   px-3 py-2.5 cursor-pointer hover:scale-105 transition-all duration-200 '>
                        <CiCirclePlus size={30} className='' />
                        <h1 className=' font-Roboto text-md'>Ajouter une fiche </h1>

                    </div>
                </Link>
            </div>

        </Fragment>
    )
}

export default CollecteFichePage;
