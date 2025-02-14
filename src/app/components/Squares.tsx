interface SquaresProps{
    color1: string;
    color2: string;
}

export default function Squares({color1, color2}: SquaresProps){
    return <div className="grid grid-cols-3 gap-0">
        <div className={`w-32 h-32 bg-${color1}-700`}></div>
        <div className={`w-32 h-32 bg-${color2}-700`}></div>
        <div className={`w-32 h-32 bg-${color1}-700`}></div>
        <div className={`w-32 h-32 bg-${color2}-700`}></div>
        <div className={`w-32 h-32 bg-${color1}-700`}></div>
        <div className={`w-32 h-32 bg-${color2}-700`}></div>
        <div className={`w-32 h-32 bg-${color1}-700`}></div>
        <div className={`w-32 h-32 bg-${color2}-700`}></div>
        <div className={`w-32 h-32 bg-${color1}-700`}></div>
        

    </div>;
    
}
