let product_data=document.querySelector(".product_data");
let kart_data=document.querySelector(".add_kart");
let total_price=0;
async function api_data(){
    let data=await fetch('https://fakestoreapi.com/products');
    let json_data=await data.json();
    //console.log(json_data);
    json_data.map((val)=>{
        let imgelement=document.createElement("img");
        let titleelement=document.createElement("p");
        let priceelement=document.createElement("p");
        let btnelement= document.createElement("button");
        let btntext=document.createTextNode("add_to_cart");
        btnelement.appendChild(btntext);
        let pricetext=document.createTextNode(val.price);
        priceelement.appendChild(pricetext);
        let titletext=document.createTextNode(val.title);
        titleelement.appendChild(titletext);
        imgelement.setAttribute("src",val.image);
        imgelement.setAttribute("class","product_image");
        product_data.appendChild(btnelement);
        product_data.appendChild(imgelement);
        product_data.appendChild(titleelement);
        product_data.appendChild(priceelement);


        function add_to_cart(price,img){
            total_price+=parseFloat(price);
            let kartimgelement=document.createElement("img");
            kartimgelement.setAttribute("src",img);
            kartimgelement.setAttribute("class","kartimage");
            let kartelement =document.createElement("p");
            let karttext=document.createTextNode(price);
            kartelement.appendChild(karttext);
            kart_data.appendChild(kartimgelement);
            kart_data.appendChild(kartelement)
            //alert(total_price)
            document.getElementById("total").innerHTML=total_price;
            let kart_btn=document.createElement("button");
            let kart_btn_text=document.createTextNode("add more");
            kart_btn.appendChild(kart_btn_text);
            kart_data.append(kart_btn);
            const buy_more=(kart_price)=>{
                alert(kart_price);
            }
            kart_btn.addEventListener("click",()=>buy_more (price));
        }
        btnelement.addEventListener("click",()=>add_to_cart(val.price,val.image));
    })


}
api_data();