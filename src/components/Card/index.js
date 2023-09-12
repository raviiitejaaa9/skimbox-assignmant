
import "./index.css"

const Card = (props) => {
    const {eachObject} = props
    const {id, type, category, description, price, benefits } = eachObject
    // console.log(category) 
    const listCss = id === 1 ? "list-item list-dec" : "list-item"
    
    return(
        <div className= {listCss} >
            <div className="details" >
                <h1 className="type" > {type} </h1>
                <p className="category" > {category} </p>
                <p className="description" > {description} </p>
                <div className="price-container" > 
                    <h1 className="price" > ₹{price} </h1> 
                    <p className="price-type" > INR <br/>/mo </p>
                </div>
            </div>
            <div className="trail-offer" >
                <p className="trail-details" > Get your first 3 months for ₹20/mo  </p>
            </div>
            <div className="details" >
                <h6 className="details-head" > What's included on {type} </h6>
                <ul>
                {
                    benefits.map(eachItem => <li> {eachItem} </li>)
                }
                </ul>
            </div>
            <button className="try-free-button btn btn-dark " > Try for free </button>
        </div>
    )
}

export default Card