export default function Food({pixel}){

    
    return <>
    
    <div className="food"
         style={{gridColumn: pixel.x,
            gridRow:pixel.y
        }}>  
    
    </div>

    </>
}