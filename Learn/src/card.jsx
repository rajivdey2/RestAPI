import profilePic from './assets/photo2.jpg'

function card(){
    return(
        <div className ="card">
            <img  className="card-image" src={profilePic} alt="profile picture" ></img>
            <h2 className="card-title">Bro code</h2>
            <p>I make websites</p>

        </div>

    );

}
export default card