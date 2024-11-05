import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { dataContext } from "./context/dataContext";
import Model from "./components/Model";
import Page from "./components/Page";
import { Route, Routes } from "react-router-dom";

function App() {
    const [elem, setElem] = useState([])
    
    sessionStorage.setItem('data', JSON.stringify(
        [
            { "id": 1, "title": "Menu", "url": "/menu" },
            { "id": 2, "title": "New Properties", "url": "/new_properties" },
            { "id": 3, "title": "Props", "url": "/prop" }
        ]
    ))

    useEffect(() => {
        const data = sessionStorage.getItem('data')
        console.log(data);
        
        setElem(prev => JSON.parse(data))
        
    },[])
    
    const [isModel, setIsModel] = useState(false)

    return (
        <dataContext.Provider value={{ elem, setElem, isModel, setIsModel }}>
            <fieldset className="flex flex-col items-center rounded-md border-black border-[5px] mx-[2em] h-[60vh]">
                <legend className="font-semibold">Nav Section</legend>
                <NavBar />
                {/* <Routes>
                    <Route path="/" element={<Page />} />
                    <Route path=":id" element={<Page />} />
                </Routes> */}
            </fieldset>
            {isModel && <Model />}
        </dataContext.Provider>
    );
}

export default App;
