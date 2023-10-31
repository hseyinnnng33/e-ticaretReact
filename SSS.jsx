import { useState } from "react";

function SSS(){

    const[openSoru, setOpenSoru] = useState(null)

    const toggleSoru = (index)=>{
        if(openSoru === index){
            setOpenSoru(null)
        }
        else{
            setOpenSoru(index)
        }
    }

    const sorular = [
        {
          baslik: "E-ticaret nedir?",
          aciklama: "SSS websitelerinde soru kısımlarıdır SSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdır"
        },
        {
          baslik: "Burası Güvenli Mi?",
          aciklama: "SSS websitelerinde soru kısımlarıdır SSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdır"
        },
        {
          baslik: "Dolandırıcı Mısınız?",
          aciklama: "SSS websitelerinde soru kısımlarıdır SSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdır"
        },
        {
            baslik: "Hadi Diyelim Ürün Aldım Beğenmedim Geri Alıyor Musunuz?",
            aciklama: "SSS websitelerinde soru kısımlarıdır SSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdır"
        },
        {
            baslik: "Karar Verdim Alacağım",
            aciklama: "SSS websitelerinde soru kısımlarıdır SSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdır"
        },
        {
            baslik: "Yok Ya Vazgeçtim",
            aciklama: "SSS websitelerinde soru kısımlarıdır SSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdırSSS websitelerinde soru kısımlarıdır"
        }
      ];


    return(
        <div className="sss">
            <div className="sorular">
                <h2 className="h2">Sıkça Sorulan Saçma Sapan Sorular Kısımı</h2>
                {sorular.map((soru, index) =>(
               <div onClick={() => toggleSoru(index)} className={`soru ${openSoru === index ? "acik" : ""}`} key={index}>
                <h2>{soru.baslik}</h2>
                {openSoru === index && (
                    <p>{soru.aciklama}</p>
                    )}
            </div>
           ))}
            </div>
        </div>
    )
}

export default SSS;