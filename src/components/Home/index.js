import { useState } from "react";
import NavbarComponent from "../NavbarComponent"
import Card from "../Card"
import "./index.css"

const data = [
    {
        "id" : 1,
        "type" : "Basic",
        "category" : "FOR INDIVIDUALS & SMALL BUSINESSES",
        "description" : "Everything you need to create for store, ship products, and process payments",
        "price" : "1,994",
        "benefits" : ["Basic reports", "up to 1,000 inventory locations", "2 staff accounts"]
    },
    {
        "id" : 2,
        "type" : "Shopify",
        "category" : "FOR SMALL BUSINESSES",
        "description" : "Level up your business with professional reporting and more staff accounts",
        "price" : "7,447",
        "benefits" : ["Professional reports", "up to 1,000 inventory locations", "5 staff accounts"]
    },
    {
        "id" : 3,
        "type" : "Advanced",
        "category" : "FOR MEDIUM TO LARGE BUSINESSES",
        "description" : "Get the best out of Shopify with custom reporting and our low transaction fees",
        "price" : "30,164",
        "benefits" : ["Custom report builder", "up to 1,000 inventory locations", "15 staff accounts"]
    }
]


const stateConstants = {
    basic : "Basic",
    shopify : "Shopify",
    advanced : "Advanced"
}

function Home () { 

    const [activeType, setActiveType] = useState(stateConstants.basic)
    // console.log(activeType);

    const changeType = (type) => {
        setActiveType(type)
    }

    const requiredData = data.filter(eachObject => 
        eachObject.type === activeType
        )
    // console.log(requiredData)    

    return(
    <div className="app-container" >
        <NavbarComponent/>
        <div className="home-container" >
            <div className="pay-container" >
                <p className="pay-monthly" > Pay Monthly </p> 
                <p className="pay-yearly" > Pay Yearly (Save 25%)  </p>
            </div>
            <div className="cards-sec">
                {data.map(each => <Card key={each.id} eachObject={each} />)}
            </div>

            <button className="btn btn-outline-dark day-trail-btn " > 3-Day Free Trail   </button>
        </div>
        <div className="mobile-home-container" > 
            <div className="btns-container">
                <button
                    onClick={() => changeType(stateConstants.basic)}
                    className={activeType === stateConstants.basic ? "active" : ""}
                >
                    Basic
                </button>
                <button
                    onClick={() => changeType(stateConstants.shopify)}
                    className={activeType === stateConstants.shopify ? "active" : ""}
                >
                    Shopify
                </button>
                <button
                    onClick={() => changeType(stateConstants.advanced)}
                    className={activeType === stateConstants.advanced ? "active" : ""}
                >
                    Advanced
                </button>
            </div>
            {requiredData.map(eachItem => <Card key = {eachItem.id} eachObject = {eachItem} /> )}
        </div>
    </div>
)
}

export default Home