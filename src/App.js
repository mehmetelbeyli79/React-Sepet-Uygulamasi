import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "MSI Laptop",
      image: "https://picsum.photos/id/118/1500/1000",
      info: "16GB RAM i7 İşlemci 8gb Ekran Kartı",
      adet: 1,
    },
    {
      id: 2,
      title: "Lenovo Laptop",
      image: "https://picsum.photos/id/119/3264/2176",
      info: "8GB RAM i5 İşlemci 8gb Ekran Kartı",
      adet: 1,
    },
    {
      id: 3,
      title: "RAM",
      image: "https://picsum.photos/id/12/2500/1667",
      info: "Kingston 8GB",
      adet: 1,
    },
    {
      id: 4,
      title: "Ekran Kartı",
      image: "https://picsum.photos/id/120/4928/3264",
      info: "8GB Nvdia",
      adet: 1,
    },
    {
      id: 5,
      title: "Iphone",
      image: "https://picsum.photos/id/100/2500/1656",
      info: "12",
      adet: 1,
    },
    {
      id: 6,
      title: "Kasa",
      image: "https://picsum.photos/id/1006/3000/2000",
      info: "Zalman",
      adet: 1,
    },
    {
      id: 7,
      title: "Klavye",
      image: "https://picsum.photos/id/101/2621/1747",
      info: "Logitech",
      adet: 1,
    },
  ]);

  const [basket, setBasket] = useState([]);
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "white" }}>
        REACT SEPET UYGULAMASI
      </h1>
      <h2>Listelenen Ürünler</h2>
      <div className="urunler">
        {product.map((item, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...basket];
                //console.log(arr);
                //const arr = [...basket, item];
                if (
                  arr.findIndex((ind) => {
                    return item.id == ind.id;
                  }) === -1
                ) {
                  arr.push(item);
                  setBasket(arr);
                } else {
                  arr.map((eleman) => {
                    if (eleman.id === item.id) {
                      return (eleman.adet += 1);
                    }
                  });
                  setBasket(arr);
                }
              }}
              key={index}
              title={item.title}
              info={item.info}
              image={item.image}
            />
          );
        })}
      </div>
      <div className="basket">
        <h2>SEPETİMİZ</h2>
        <ul className="sepet">
          {basket.map((eleman, index) => {
            return (
              <li key={index}>
                {eleman.title + "--->" + eleman.info + " Adet:"}
                <b style={{ fontSize: "24px", color: "yellow" }}>
                  {eleman.adet}
                </b>
              </li>
            );
          })}
        </ul>
        {basket.length > 0 ? (
          <button
            className="sepet-temizle"
            onClick={() => {
              // const arr = [...basket];
              // const result = arr.filter((el) => {
              //   return null;
              // });
              setBasket([]);
            }}>
            Sepeti Temizle
          </button>
        ) : (
          <p style={{ padding: "20px" }}>Sepetinizde Ürün Bulunmamaktadır</p>
        )}
      </div>
    </div>
  );
}

export default App;
