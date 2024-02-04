import "./tabs.css"


const TabInfoFour = ({activeTab})=>{
  return(
    <div className={activeTab ===3 ? "active-tab" : "tabs-item-container"}>
        <div class="tab-content">
          <p class="tabs-text">
              Осуществление переезда.<br/>
              Помощь в подготовке, транспортировке вещей ,<br/> домашних животных, активов.
            </p>
        </div>
    </div>
  )
}
export default TabInfoFour;