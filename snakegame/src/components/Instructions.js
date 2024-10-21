export default function Instructions () {
    return <div style={{display:"flex", flexDirection:"column",
        alignItems:"center",
        width:"400px",
        height:"400px"
    }}>
    
    <img  src={require("./snakeimg.png")} alt="snake logo"></img>
    <h4 id="instruction-text">
        Press Space Bar to start the Game.
        
        </h4>
        </div>
}