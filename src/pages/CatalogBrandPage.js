import SneakerBrandList from "../components/sneakerBrandList";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CatalogBrandPage (){
    const {brand} = useParams() //считывание параметров из адресной строки
    const[searchValue, setSearchValue] = useState('') //введенные параметры в поисковике
    const[sortValue, setSortValue] = useState('') //выбранные параметры сортировки
    return(
        <div className="container">
            <div className='catalog_header'>
                <h1>All sneakers</h1>
                <div className='sort'>
                        <select value={sortValue} onChange={(event) => setSortValue(event.target.value)}>
                            <option>Sort</option>
                            <option value='asc' >Price ↑</option>
                            <option value='desc'>Price ↓</option>
                        </select>
                    </div>
                <div className='search'>
                    <input placeholder='Search...' onChange={(event) => setSearchValue(event.target.value)}/>
                </div>
            </div>
            <div className="sneakers">
                <SneakerBrandList brand={brand} search={searchValue} sort={sortValue} />
            </div>
        </div>
    )

}