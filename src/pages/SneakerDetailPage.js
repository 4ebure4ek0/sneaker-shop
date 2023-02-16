import { useParams } from "react-router-dom";
import React from 'react';
import Sneaker from "../components/sneaker";


export default function SneakerDetailPage(){
    const {brand, id} = useParams() //считывание параметров из адресной строки
    return(
        <>
        <Sneaker id={id}/>
        </>
    )
}