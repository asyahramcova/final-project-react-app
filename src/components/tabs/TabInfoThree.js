import "./tabs.css"


const TabInfoThree = ({activeTab})=>{
  return(
    <div className={activeTab ===2 ? "active-tab" : "tabs-item-container"}>
        <div class="tab-content">
            <p class="tabs-text">Постпенное выполнение каждого пункта плана<br/> с фиксацией результата на каждом этапе.</p>
        </div>
    </div>
  )

}
export default TabInfoThree;