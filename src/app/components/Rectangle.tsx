interface RectangleProps{
    color: string;
}

export default function Rectangle({color}: RectangleProps){
    return <div className={`w-32 h-32 bg-${color}-700`}></div>;
    
}
