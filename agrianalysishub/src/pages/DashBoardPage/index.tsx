import axios from 'axios';
import React, { Fragment, ChangeEvent, FocusEvent } from 'react'
import { CiImageOn } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { v4 as uuidv4 } from 'uuid';
import PuffCustom from '../../components/PuffCustom';
import { PredictionType } from '../../types';
import { callApi } from '../../utils';


function DashboardPage() {
  const [image, setImage] = React.useState<any>(null);
  const [imageBase64, setImageBase64] = React.useState<string>('');
  const [prediction, setPrediction] = React.useState<PredictionType | null>()
  const [imageUploaded, setImageUploaded] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");


  const convertToBase64 = (file: File) => {
    const reader = new FileReader();
    let data: any;
    reader.onload = async (e) => {
      const imgElement = document.querySelector('[data-place=img]') as HTMLImageElement;
      if (imgElement) {
        setImageBase64(e.target?.result as string)
        imgElement.src = e.target?.result as string;
      }
    };

    reader.readAsDataURL(file);

  };
  async function fetchImage(e: ChangeEvent<HTMLInputElement>) {
    const image: any = document.getElementById("previewImage");
    const file = e.target.files?.[0];
    if (file) {
      convertToBase64(file);

    }

    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      const render = new FileReader();
      render.onload = (e: any) => {
        image.src = e.target.result
      }
      render.readAsDataURL(e.target.files[0])

    }

  }

  async function analyseImage(data: string) {
    setLoading(true);
    const requestData = {
      uid: uuidv4(),
      base64: data
    }
    const response = await callApi("api/analyse/analyse-plante", "post", requestData)
    if (response.status === 200) {
      setPrediction(response.data)
      setLoading(false);
    }
    else {
      setLoading(false);
      setError("Erreur : Un problème est survenu lors de la prediction de votre image !!!")
    }

  }

  React.useEffect(() => {
    if (imageBase64 !== '') {
      analyseImage(imageBase64)
    }
  }, [imageBase64])
  return (
    <Fragment>
      {loading && <PuffCustom />}
      <div className={`pt-10 flex md:flex-row flex-col gap-10 place-items-center justify-center  ${!loading ? "block" : "hidden"}`}>

        <div className=' flex flex-col basis-1/2 place-items-center gap-3 justify-center lg:h-full'>
          <div className=" bg-[url('./assets/images/untitled-design-294.webp')] h-80 w-80 bg-no-repeat bg-cover bg-center rounded-2xl  ">
            <div className="bg-gradient-to-r from-yellow-500 via-yellow-100 to-white h-full w-full opacity-35 rounded-2xl " >
            </div>
          </div>
          <h1 className=' lg:text-4xl  text-2xl font-Poppins font-bold text-dark-primary text-center px-20 '>
            Detectez des maladies sur  vos plantes en chargeant une image!
          </h1>
          <p className=' text-slate-600 text-lg font-Poppins font-bold'>
            100 % automatique et
            <span className=" bg-[url('https://static.remove.bg/deco-brush.svg')]  bg-cover bg-no-repeat bg-center py-3 px-3.5">
              gratuit
            </span>
          </p>
        </div>

        <div className=' w-96 h-96  p-3 bg-slate-100 rounded-xl'>
          {
            image === null ?
              <label
                className="flex justify-center w-full h-full px-2 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">

                <span className="flex flex-col items-center space-x-2 place-items-center h-full justify-center">
                  <CiImageOn size={100} className="text-yellow-500" />

                  <span className=" flex font-medium text-gray-600">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </span>
                    Déposer l'image à joindre, ou
                    <span className="text-blue-600 underline">Téléchargez</span>
                  </span>
                </span>
                <input type="file" accept='image/*' name="file_upload" onChange={(e) => fetchImage(e)} className="hidden" />
              </label>
              :
              ""
          }


          <img src="" alt="preview image" id='previewImage' className={` h-full w-full ${image === null ? "hidden" : "block rounded-xl "}`} />
          <img data-place="img" alt="Selected Image" className=' hidden' />

        </div>
        {
          image !== null && (
            <div>
              <GrPowerReset onClick={() => {
                setImage(null);
                setImageBase64('');
                setPrediction(null);
              }} size={30} className="cursor-pointer text-dark-primary" />
            </div>
          )
        }
      </div>

      {
        prediction?.categorie &&
        (
          <div className=' px-10 py-16 text-dark-primary  font-Poppins font-semibold text-xl'>
            Prediction : La est <span className=' text-yellow-500'>{prediction?.categorie}</span>   avec une précision de <span className=' text-yellow-500'>{(prediction?.precision * 100).toFixed(2)}%</span>
          </div>
        )
      }

    </Fragment>
  )
}

export default DashboardPage;