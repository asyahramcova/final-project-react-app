import "./tabs.css"


const TabInfoStart  = ({activeTab})=>{
  return(
    <div className={activeTab ===2 ? "active-tab" : "tabs-item-container"}>
        <div class="tab-content">
          <div className="tabs-heading">
            <p class="tabs-start-heading">Этапы воплощения вашей мечты</p>
        </div>
      </div>
    </div>
  )

}
export default TabInfoStart;