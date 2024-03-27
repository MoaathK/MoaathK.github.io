import profilePic from './assets/IMG1_1813.jpg'
function Card(){
    return(
        <div className="Card">
            <img className="card-image" alt="Profile Picture" src={profilePic}></img>
            <h2 className="card-title">Moath</h2>
            <p className="card-text">Information Technology Student</p>

        </div>
    );

    
}
export default Card