import React, { Fragment } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Input } from '../components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FicheType } from '../types';
import { LIST_REGION } from '../data';
import { FaChevronDown } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ModalComponent from '../components/modal/ModerneModal';

const customStyles = {
    content: {
        width: "50%",
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function AddFichePage() {
    let subtitle: any;
    const [modalIsOpen, setIsOpen] = React.useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FicheType>();
    return (
        <Fragment>
            <div className=' w-full'>
                <h1 className=' w-full uppercase text-light-primary  font-Roboto font-semibold text-xl text-center'>
                    FICHE DE DOCUMENTATION
                </h1>
                <Link to={"/collecte"}>
                    <FaArrowLeftLong className=' cursor-pointer  hover:scale-110 text-xl transition duration-200 text-light-primary' />
                </Link>
            </div>

            <div className=' grid grid-cols-2 gap-10 mt-10'>
                <div>
                    <form className=' w-full grid 2xl:grid-cols-2 gap-3 bg-gray-100 px-5 py-4' >

                        <div>
                            {/* <div className=' font-Roboto text-md font-normal text-light-primary'>
        Nom
    </div> */}
                            <Input
                                id="nom"
                                type="nom"
                                register={register}
                                label="Nom"
                                inputName="nom"
                                errors={errors}
                                validationSchema={{
                                    required: true
                                }}
                            />
                        </div>
                        <div>
                            {/* <div className=' font-Roboto text-md font-normal text-light-primary'>
        Prénom
    </div> */}
                            <Input
                                id="prenom"
                                type="prenom"
                                register={register}
                                label="Prénom"
                                inputName="prenom"
                                errors={errors}
                                validationSchema={{
                                    required: true
                                }}
                            />
                        </div>
                        <div>
                            {/* <div className=' font-Roboto text-md font-normal text-light-primary'>
        Contact
    </div> */}
                            <Input
                                id="contact"
                                type="contact"
                                register={register}
                                label="Contact"
                                inputName="contact"
                                errors={errors}
                                validationSchema={{
                                    required: true
                                }}
                            />
                        </div>
                        <div>
                            {/* <div className=' font-Roboto text-md font-normal text-light-primary'>
        Lieu de couverture
    </div> */}
                            <Input
                                id="lieu_de_couverture"
                                type="lieu_de_couverture"
                                register={register}
                                label="Lieu de couverture"
                                inputName="lieu_de_couverture"
                                errors={errors}
                                validationSchema={{
                                    required: true
                                }}
                            />
                        </div>

                        <div className=' col-span-2 mb-3'>
                            {/* <div className=' font-Roboto text-md font-normal text-light-primary'>
        Region
    </div> */}
                            <div className=' relative h-10 '>
                                <select className='block
                                                    pl-8
                                                    pr-6
                                                    py-3
                                                    w-full
                                                    font-light
                                                    text-md bg-white rounded-md
                                                    text-slate-700 text-md appearance-none focus:outline-none focus:ring-0 relative'>

                                    <option defaultChecked className=' text-gray-text ' value=""> Sélectionner la région..</option>
                                    {
                                        LIST_REGION.map((item, index) => (
                                            <option key={index} value={item}>{item}</option>
                                        ))
                                    }

                                </select>
                                <FaChevronDown className=' absolute text-light-primary  right-5 bottom-2  ' />
                            </div>
                        </div>


                        <div>
                            {/* <div className=' font-Roboto text-md font-normal text-light-primary'>
        Lieu d'incident
    </div> */}
                            <Input
                                id="lieu_incident"
                                type="text"
                                register={register}
                                label="Lieu de l'incident"
                                inputName="lieu_incident"
                                errors={errors}
                                validationSchema={{
                                    required: true
                                }}
                            />
                        </div>
                        <div>
                            {/* <div className=' font-Roboto text-md font-normal text-light-primary'>
        Date d'incident
    </div> */}
                            <Input
                                id="date_incident"
                                type="date"
                                register={register}
                                label="Date de l'incident"
                                inputName="date_incident"
                                errors={errors}
                                validationSchema={{
                                    required: true
                                }}
                            />
                        </div>
                    </form>

                    <h1 className=' text-light-primary font-Roboto text-xl font-medium my-4 '>
                        Identification du/des survivants
                    </h1>


                    <div className="flex flex-col  bg-gray-100 px-3 py-4 rounded-lg">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border-b font-light text-xs text-light-primary">
                                            <tr>
                                                <th scope="col" title='Code ID' className="px-2 py-4">Code ID</th>
                                                <th scope="col" title='Let' className="px-2 py-4">Let</th>
                                                <th scope="col" title='Occupation' className="px-2 py-4">Occupation</th>
                                                <th scope="col" title='Age' className="px-2 py-4">Age</th>
                                                <th scope="col" title='Résidence' className="px-2 py-4">Résidence</th>
                                                <th scope="col" title='Sexe' className="px-2 py-4">Sexe</th>
                                                <th scope="col" title="Genre et identité de genre" className="px-2 py-4">G . I .G</th>
                                                <th scope="col" className="px-2 py-4">OS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="">
                                                <td className="whitespace-nowrap px-6 py-4 ">1</td>
                                                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                                <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                                <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                                <td className="whitespace-nowrap px-6 py-4 ">1</td>
                                                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                                <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                                <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                            </tr>



                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className=' w-full flex justify-center '>
                            <ModalComponent
                                modalIsOpen={modalIsOpen}
                                setIsOpen={setIsOpen}
                                body={
                                    <div className=' w-full'>
                                        <div className=' h-16 flex justify-end place-items-center px-3 py-3'>
                                            <GrClose onClick={() => setIsOpen(false)} className=' text-white cursor-pointer' size={20} />
                                        </div>
                                        <h1 className=' text-lg text-white font-Roboto font-semibold mb-5  '>
                                            <span className=' underline-offset-2'>Ajouter</span> de l'identification d'un survivant
                                        </h1>
                                        <div className=' grid xl:grid-cols-2 gap-3 '>
                                            <Input
                                                id="lieu_de_couverture"
                                                type="lieu_de_couverture"
                                                register={register}
                                                label="Lieu de couverture"
                                                inputName="lieu_de_couverture"
                                                errors={errors}
                                                validationSchema={{
                                                    required: true
                                                }}
                                            /><Input
                                                id="lieu_de_couverture"
                                                type="lieu_de_couverture"
                                                register={register}
                                                label="Lieu de couverture"
                                                inputName="lieu_de_couverture"
                                                errors={errors}
                                                validationSchema={{
                                                    required: true
                                                }}
                                            /><Input
                                                id="lieu_de_couverture"
                                                type="lieu_de_couverture"
                                                register={register}
                                                label="Lieu de couverture"
                                                inputName="lieu_de_couverture"
                                                errors={errors}
                                                validationSchema={{
                                                    required: true
                                                }}
                                            /><Input
                                                id="lieu_de_couverture"
                                                type="lieu_de_couverture"
                                                register={register}
                                                label="Lieu de couverture"
                                                inputName="lieu_de_couverture"
                                                errors={errors}
                                                validationSchema={{
                                                    required: true
                                                }}
                                            /><Input
                                                id="lieu_de_couverture"
                                                type="lieu_de_couverture"
                                                register={register}
                                                label="Lieu de couverture"
                                                inputName="lieu_de_couverture"
                                                errors={errors}
                                                validationSchema={{
                                                    required: true
                                                }}
                                            /><Input
                                                id="lieu_de_couverture"
                                                type="lieu_de_couverture"
                                                register={register}
                                                label="Lieu de couverture"
                                                inputName="lieu_de_couverture"
                                                errors={errors}
                                                validationSchema={{
                                                    required: true
                                                }}
                                            /><Input
                                                id="lieu_de_couverture"
                                                type="lieu_de_couverture"
                                                register={register}
                                                label="Lieu de couverture"
                                                inputName="lieu_de_couverture"
                                                errors={errors}
                                                validationSchema={{
                                                    required: true
                                                }}
                                            /><Input
                                                id="lieu_de_couverture"
                                                type="lieu_de_couverture"
                                                register={register}
                                                label="Lieu de couverture"
                                                inputName="lieu_de_couverture"
                                                errors={errors}
                                                validationSchema={{
                                                    required: true
                                                }}
                                            />

                                        </div>
                                        <div className=' h-10 mt-7 mb-10  flex justify-end  place-items-center'>
                                            <div className=' flex gap-2'>
                                                <div onClick={() => setIsOpen(false)} className=' px-5 py-2 text-primary bg-red-200 w-40 flex justify-center place-items-center rounded-lg cursor-pointer'>
                                                    <h1>
                                                        Annuler
                                                    </h1>
                                                </div>
                                                <div className=' px-5 py-2 text-primary bg-white w-40 flex justify-center place-items-center rounded-lg cursor-pointer'>
                                                    <h1>
                                                        Enregistrer
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                }
                            >
                                <div onClick={() => setIsOpen(true)} className=' hover:scale-105 transition duration-200 cursor-pointer bg-light-primary flex justify-center w-20 h-10 place-items-center rounded-md'>
                                    <CiCirclePlus size={30} className='text-white' />
                                </div>

                            </ModalComponent>

                        </div>

                    </div>

                </div>

            </div>
        </Fragment >
    )
}

export default AddFichePage;
