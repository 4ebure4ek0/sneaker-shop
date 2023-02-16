import React from "react";
import SneakerList from "../components/sneakerList";

export default class CatalogPage extends React.Component{
    constructor(){
        super()
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSort = this.handleSort.bind(this)
        this.state = {
            searchValue: '', //введенные параметры в поисковике
            sortValue: '' //выбранные параметры сортировки
        }
    }
    handleSearch(event){
        this.setState({searchValue: event.target.value}) //считывание параметров поиска по странице
    }
    handleSort(event){
        this.setState({sortValue: event.target.value}) //считывание параметров сортировки
    }
    render(){
        return(
            <div className="container">
                <div className='catalog_header'>
                    <h1>All sneakers</h1>
                    <div className='sort'>
                        <select value={this.state.sortValue} onChange={this.handleSort}>
                            <option>Sort</option>
                            <option value='asc' >Price ↑</option>
                            <option value='desc'>Price ↓</option>
                        </select>
                    </div>
                    <div className='search'>
                        <input type='text' placeholder='Search...' onChange={this.handleSearch}/>
                    </div>
                </div>
                <div className="sneakers">
                    <SneakerList search={this.state.searchValue} sort={this.state.sortValue}/>
                </div>
            </div>
        )
    }
}