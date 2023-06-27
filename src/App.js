import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Route, Routes } from "react-router-dom";
import route from 'color-convert/route';
import Spinner from './components/Spinner';



const App = ()=>{

    const pageSize = 8;

    return (
        
        <>
        <Navbar/>
        
            <Routes>
                <Route path="/" element = {<News key = {1} country = "in" pageSize = {pageSize} category = "general" />}></Route>
                <Route path="/sports" element = {<News key = {2} country = "in" pageSize = {pageSize} category = "sports"/>}></Route>
                <Route path="/entertainment" element = {<News key = {3}  country = "in" pageSize = {pageSize} category = "entertainment"/>}></Route>
                <Route path="/science" element = {<News key = {4} country = "in" pageSize = {pageSize} category = "science"/>}></Route>
                <Route path="/health" element = {<News key = {5} country = "in" pageSize = {pageSize} category = "health"/>}></Route>
                <Route path="/business" element = {<News key = {6} country = "in" pageSize = {pageSize} category = "business"/>}></Route>
                <Route path="/technology" element = {<News key = {7} country = "in" pageSize = {pageSize} category = "technology"/>}></Route>
            </Routes>
        </>
    )
          
        
    
    
    

}

export default App;