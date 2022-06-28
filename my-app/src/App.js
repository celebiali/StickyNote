import {useRef,useState,useEffect} from "react";
import İmg from "./img/alicelebiblog.jpg"
import './App.css';
function App() {

    const screen = useRef(null)
    const [mode,setMode] = useState(false)
    const [position,setPosition] = useState({
        x:0,
        y:0
    })
    useEffect(()=> {
        screen.current.focus()
    },[])
    const handleKeyUp = (e) => {
    if (e.key === 'c'){
        setMode(!mode)
    }
    }
    const handleMouseMove = (e) => {
        setPosition(
            {
                x: e.pageX,
                y: e.pageY
            }
        )
    }
    return (
    <div ref={screen} tabIndex={0} onMouseMove={handleMouseMove} onKeyUp={handleKeyUp} className="screen">
        <img src={İmg}/>
        <div style={{position:'fixed',top:position.y,left:position.x}}>Yorum yazmak için tıkla</div>
        {mode && (<div>Yorum modu aktif!</div>)}
    </div>
  );
}

export default App;
