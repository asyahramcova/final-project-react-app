
import React, { useState } from "react";

import TabInfoOne from "./TabInfoOne";
import TabInfoTwo from "./TabInfoTwo";
import TabInfoThree from "./TabInfoThree";
import TabsCard from "./TabsCard";
import TabInfoFour from "./TabInfoFour";
import TabInfoFive from "./TabInfoFIve";
import "./tabs.css"
import TabInfoStart from "./TabInfoStart ";





function StepsTab(){

  const[activeTab,setActiveTab] = useState(5);

  return(
    <div className="container" >
      <div className="tabs-wrapper" >

        <div className="tab-container">
          <TabsCard  setActiveTab = {setActiveTab}  />
            {activeTab ===5 && <TabInfoStart/> }
            {activeTab ===0 && <TabInfoOne  activeTab ={activeTab}/>}
            {activeTab ===1 && <TabInfoTwo  activeTab ={activeTab}/>}
            {activeTab ===2 && <TabInfoThree  activeTab ={activeTab}/>}
            {activeTab ===3 && <TabInfoFour  activeTab ={activeTab}/>}
            {activeTab ===4 && <TabInfoFive  activeTab ={activeTab}/>}
        </div>
   
    </div>
    </div>
  )
}

export default StepsTab;