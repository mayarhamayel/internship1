import "./ServiceCard.css";

function ServiceCard ({title,description}){

    return<>

    <div className="card">

        <h3>{title}</h3>
        <p>{description} </p>


    </div>
    
    
    
    </>

}
export default ServiceCard;