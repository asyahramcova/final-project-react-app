import TabItem from "./TabItem";
import "./tabs.css"

const TabsCard = ({setActiveTab}) =>{

  return(
    <div className="tabs-card-container">
      {
        ["1", "2" , "3", "4" , "5"].map((tab, index) =>(
      
        <TabItem
          key = {index}
          tab = {tab}
          index = {index}
          setActiveTab = {setActiveTab}
      
        />
      )
      )

      }
    </div>
  )

}
export default TabsCard;