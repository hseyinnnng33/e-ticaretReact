import { useState, useEffect, useRef } from "react";

function SagBar({deger, urunler, urunlerProps, menuRef}){

    console.log(urunler);

    const toplamFiyat = urunler.reduce((toplam, urun) => toplam + parseInt(urun.fiyat), 0)

    const urunSil = (sil) =>{
        const yeniUrunler = urunler.filter((urun) => urun.urunId !== sil)
        urunlerProps(yeniUrunler)
    }

    const urunlerTemizle = () =>{
        urunlerProps([])
    }
    

    return(
        <div ref={menuRef}  className={`sagBar ${deger ? 'active' : ""}`}>
            <div className="ust">
            <h2 className="firstH2">SEPETİM <span style={{
                marginLeft: "5px",
                color: "#05c46b"
            }} className="material-symbols-outlined">shopping_cart</span></h2>
        <h2 className="toplam">Sepet Toplamı: {toplamFiyat} TL</h2>
            </div>
            <div className="sagUrunler">
            {urunler.map((item) =>(
                <div key={item.urunId} className="kartBar">
                    <img src={item.urunResim} alt="resim" />
                    <p>{item.urunAdi}</p>
                    <h2>{item.fiyat} TL</h2>
                    <button onClick={() => urunSil(item.urunId)} className="silBtn">X</button>
                </div>
            ))}
            </div>
            
            <button className="siparis">Sipariş Ver</button>
            <button className="tumunuSil" onClick={urunlerTemizle}>Tümünü Sil</button>

                
        </div>
    )

}

export default SagBar;
