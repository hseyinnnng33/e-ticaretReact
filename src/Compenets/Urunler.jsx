import { useState } from "react";

function Urunler({ekleBtn}){

    // UseState içinde tutmadık çünkü çalışmıyor
    const urunler = [
            {
            urunAdi: "AirFryer",
            resim: "https://productimages.hepsiburada.net/s/239/550/110000223531324.jpg/format:webp",
            aciklama: "Üşengeç misin? İşte tam sana göre bir cihaz. Yemeği içine at gerisini boşver(arada sırada kontrol et, ev yanar).",
            fiyat: "1000",
            id: Math.random() * 1
            },
            {
                urunAdi: "Kadın Kazak",
                resim: "https://productimages.hepsiburada.net/s/439/550/110000472685050.jpg/format:webp",
                aciklama: "Bisiklet yaka oversize kadın triko kazak, zarif tasarımı ve önden çift yırtmaç detaylarıyla sadece rahatlığınızı değil aynı zamanda tarzınızı da ön plana çıkarıyor.",
                fiyat: "100",
                id: Math.random() * 1
            },
            {
                urunAdi: "Bere",
                resim: "https://img-lcwaikiki.mncdn.com/mnresize/1020/1360/pim/productimages/20232/6552726/v1/l_20232-w37842z1-lsj_a.jpg",
                aciklama: "Esnek pamuklu kumaştan baskılı bere. Penye kumaş, bebeklerin hassas cildine nazikçe dokunan yumuşak bir malzemedir.",
                fiyat: "200",
                id: Math.random() * 1
            },
            {
                urunAdi: "Kadın Kazak",
                resim: "https://img-lcwaikiki.mncdn.com/mnresize/1020/1360/pim/productimages/20232/6875128/v1/l_20232-w3hi71z8-ehw_u.jpg",
                aciklama: "Bisiklet yaka oversize kadın triko kazak, zarif tasarımı ve önden çift yırtmaç detaylarıyla sadece rahatlığınızı değil aynı zamanda tarzınızı da ön plana çıkarıyor.",
                fiyat: "300",
                id: Math.random() * 1
            },
            {
                urunAdi: "Spor Çanta",
                resim: "https://img-lcwaikiki.mncdn.com/mnresize/1020/1360/pim/productimages/20232/6553138/v1/l_20232-w37882z8-huc_a1.jpg",
                aciklama: "Spor çanta, ayakkabı, spor giyim, su şişesi ve diğer spor malzemeleri için ayrı bölmeler içerir, böylece spor eşyalarınızı düzenli tutar. 50x25x21 cm boyutundadır.",
                fiyat: "400",
                id: Math.random() * 1
            },
            {
                urunAdi: "İphone 11",
                resim: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/113144-1-1_large.jpg",
                aciklama: "Yılın en çok beklenen telefonu. Bu model ile kamera çekimlerinizi daha profesyonel ve kaliteli çekebilirsiniz.",
                fiyat: "5000",
                id: Math.random() * 1
            },
            {
                urunAdi: "Samsung Z Flip",
                resim: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/samsung/thumb/134763-1_large.jpg",
                aciklama: "Bu telefon niye çıktı bende bilmiyorum. Hangi sorunumuza çözüm oluyor acaba çok merak ediyorum.",
                fiyat: "2000",
                id: Math.random() * 1
            },
            {
                urunAdi: "Apple Watch",
                resim: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/135218-1-1_large.jpg",
                aciklama: "Akıllı saat ile kişisel ve özel hayatınıza dair tüm her şeyi gönül rahatlığıyla şirketlere verebilirsiniz. Sizi izleyebilir, dinleyebilir ve sizin özel bilgilerinizi haberiniz olmadan satabilir.",
                fiyat: "4000",
                id: Math.random() * 1
            }
        ]

    const fiyatAl = (fiyat, urunAdi, urunResim, urunId) =>{
        ekleBtn((prevUrunler) =>[
            ...prevUrunler,
            { fiyat: fiyat, urunAdi: urunAdi, urunResim: urunResim, urunId: urunId },
        ])
        console.log(urunId);
    }
    
    return(
        <div className="urunler">
            {urunler.map((item) =>(
                <div key={item.id} className="kart">
                <img src={item.resim} alt="resim" />
                <h2>{item.urunAdi}</h2>
                <p>{item.aciklama}</p>
                <div className="yildizlar">
                    <div className="yildiz">
                    <span style={{color: "orange"}}>&#9733;</span>
                    <span style={{color: "orange"}}>&#9733;</span>
                    <span style={{color: "orange"}}>&#9733;</span>
                    <span style={{color: "orange"}}>&#9733;</span>
                    <span>&#9733;</span>
                    </div>
                <div className="fiyat">
                    <h2>{item.fiyat} TL</h2>
                </div>
                </div>
                <button onClick={() => fiyatAl(item.fiyat, item.urunAdi, item.resim, item.id)} className="ekle">Sepete Ekle</button>
            </div>
            ))}
            
        </div>
    )
}

export default Urunler;