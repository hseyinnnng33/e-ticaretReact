import { useEffect, useRef, useState } from "react";
import SagBar from "./Compenets/SagBar";
import Urunler from "./Compenets/Urunler";
import SSS from "./Compenets/SSS";

function App() {

  const[openBtn, setOpenBtn] = useState(false)
  const[ekleBtn, setEkleBtn] = useState([])

  console.log(ekleBtn.length);

  return (
    <div className={`genel ${openBtn ? 'active' : ""}`}>

      <nav className="nav">
        <div className="navIcerik">
        <h2>E-Ticaret</h2>
        <button onClick={() => setOpenBtn(openBtn =>! openBtn)} >Sepet<span className="material-symbols-outlined">
shopping_cart
</span> {ekleBtn.length > 0 && <h2 className="sepetUrunSayisi">{ekleBtn.length}</h2>}
</button>
        </div>
      </nav>

      <header>
        <div className="headerIcerik">
          <h2>Binlerce Ürünü İstediğiniz An Alın Ve Kolay Ödeme Seçenekleri ile Fırsatlardan Yararlanın.</h2>
          <button>KEŞFET</button>
        </div>
      </header>
      

      <SagBar deger = {openBtn} urunler = {ekleBtn} urunlerProps = {setEkleBtn} />

      

      <Urunler ekleBtn = {setEkleBtn} />
    
      <SSS />

    </div>
  );
}

export default App;
