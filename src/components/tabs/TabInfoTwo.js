import "./tabs.css"

const TabInfoTwo = ({activeTab})=>{
  return(
    <div className={activeTab ===1 ? "active-tab" : "tabs-item-container"}>
        <div class="tab-content">
          <p class="tabs-text">Подготовка списка необходимых документов.<br/>Планирование сроков.</p>
      </div>
    </div>
  )

}
export default TabInfoTwo;