import "./left.side.styles.scss";

const LeftSide = () => {
    return (
       <div className="left-side-container">
        <img className="img" src="cvpicture/me.jpg"></img>
        <div className="left-info">
            <h1>Personal details:</h1>
            <div className="line-top"></div>
            <h2>Name: </h2>
            <p>Sara Vuletic</p>
            <h2>Date of Birth: </h2>
            <p>03.07.1997</p>
            <h2>
                Adress:   
            </h2>
            <p>Hajduk Veljkova 035 <br/>
               Aleksinac 18220
            </p>
            <h2>
                Contact:   
            </h2>
            <p>mob:+381 642337621 <br/>
               018/807-384</p>
            <h2>
                Email adreess:
            </h2>
            <p>angeldeborah997@gmail.com</p>
        </div>
        </div>
    )
}
export default LeftSide;