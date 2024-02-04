import "./tabs.css"

const TabInfoFive = ({activeTab})=>{
  return(
    <div className={activeTab ===4 ? "active-tab" : "tabs-item-container"}>
        <div class="tab-content">
            <p class="tabs-text">
              Помощь в обустройстве после переезда . 
              </p>
        </div>
    </div>
  )
}
export default TabInfoFive;