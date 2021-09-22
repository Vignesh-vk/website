import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.png';
import img4 from './img/img4.jpg';
const data={
    productData:[
        {
        "id":1,
        "price":30,
        img:img1,
        "name":"Potato",
        "desc":'',
        "available":"1 item available",
        "vendor":"Himachal Pvt Ltd",
        "category":"Vegtables"
        },
        {
        "id":2,
        "price":50,
        img:img2,
        "name":"Banana",
        "desc":'',
        "available":"1 item available",
        "category":"Fruits",
        "vendor": "Organic farms"
        },
        {
        "id":3,
        "price":20,
        img:img3,
        "name":"Drumsticks",
        "available":"out of stock",
        "category":"Vegetables",
        "vendor":"Mallikarjuna farms"
        },
        { 
        "id":4, 
        "price":25,
        img:img4,
        "name":"Orange",
        "desc":'',  
        "available":"1 item available", 
        "vendor":"Nagpur farms", 
        "category":"Fruits" 
        } 
    ],
};
export default data;