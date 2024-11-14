
import "./TabContent.css";
const TabContent=({data,currentTab})=>{
    // console.log(data.title,currentTab)
    return(
        <div className="tab-content">
            <h2>{`${data.title} ${currentTab}`}</h2>
            <p>{data.description}</p>
        </div>
    )
}

export default TabContent;