import "./tabs.css"


const TabInfoOne = ({activeTab})=>{
  return(
    <div className={activeTab ===0 ? "active-tab": "tabs-item-container" }>
        <div class="tab-content">
          <p class="tabs-text">
              Знакомство.<br/> Составление индивидуальной стратегии переезда.<br/>
              Продумывание рисков, шансов и необходимых действий.
            </p>
                  </div>
    </div>
  )
}
export default TabInfoOne;