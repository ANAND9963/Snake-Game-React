export default function Snake({pixel, index}){
    return <>
    
    <div className="snake"
        style={{gridColumn: pixel.y,
            gridRow:pixel.x
        }}>  

       

    </div>

    </>
}