import TabContent from "./TabContent";
import { useState,useEffect } from "react";
import "./TabsBar.css";
function TabsBar() {
   
    const localStorageData=JSON.parse(localStorage.getItem("currentTab"))||1;
    const [currentTab,setCurrentTab]=useState(localStorageData);
    // console.log("localStorageData",localStorageData);
    const descText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia debitis consequatur provident autem velit atque deserunt soluta ab sunt maxime!";
    const tabData={title:"Content",description:descText}
    const saveTolocalStorage=()=>{
        localStorage.setItem("currentTab",JSON.stringify(currentTab));
        // console.log(JSON.parse(localStorage.getItem("currentTab")));
        // console.log(currentTab);
    }
    useEffect(() => {
        localStorage.setItem("currentTab", JSON.stringify(currentTab));
      }, [currentTab]);

    const setFirstTabHandler =()=>{setCurrentTab(e=>e=1);}
    const setSecondTabHandler =()=>{setCurrentTab(e=>e=2);}
    const setThirdTabHandler =()=>{setCurrentTab(e=>e=3);}
    const setFourthTabHandler =()=>{setCurrentTab(e=>e=4);}
  return (
    <>
     <div className="tab-container">
        <button onClick={setFirstTabHandler} >Tab 1</button>
        <button onClick={setSecondTabHandler}>Tab 2</button>
        <button onClick={setThirdTabHandler}>Tab 3</button>
        <button onClick={setFourthTabHandler}>Tab 4</button>
    </div>
    <TabContent data={tabData} currentTab={currentTab}/>
    </>

    
  )
}

export default TabsBar;