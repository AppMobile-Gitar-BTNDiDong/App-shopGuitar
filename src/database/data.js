import axios from 'axios';

let z_item = {
    id: 1,
    name: 'Guitar Acoustic Station HD-199',
    price: 1990,
    favourite: true,
    sale: 30,
    img: 'https://guitar.station.vn/wp-content/uploads/2015/11/HD-300-Top-vertical-Copy-2-500x500.jpg',
}

let listItem = [
    {
        id: 1,
        name: 'Guitar Acoustic Station HD-199',
        price: 1990,
        favourite: false,
        sale: 30,
        img: 'https://guitar.station.vn/wp-content/uploads/2015/11/HD-300-Top-vertical-Copy-2-500x500.jpg',
    },
    {
        id: 2,
        name: 'Guitar Acoustic EKO D-Blue',
        price: 2990,
        favourite: true,
        sale: 9,
        img: 'https://guitar.station.vn/wp-content/uploads/2018/03/EKO-D-BLUE-TOP-Copy-360x360.png',
    },
    {
        id: 3,
        name: 'Guitar Acoustic EKO ONE 018 CW EQ Sunbust',
        price: 4500,
        favourite: false,
        sale: 30,
        img: 'https://guitar.station.vn/wp-content/uploads/2018/12/dan-guitar-acoustic-eko-one-series-sunbust-3-500x500.jpg',
    },
    {
        id: 4,
        name: 'Guitar Classic Station C-199',
        price: 1990,
        favourite: true,
        sale: 0,
        img: 'https://guitar.station.vn/wp-content/uploads/2015/11/guitar-classic-cl-150-500x500.jpg',
    },
    {
        id: 5,
        name: 'Guitar Classic Station CL450',
        price: 5500,
        favourite: true,
        sale: 6,
        img: 'https://guitar.station.vn/wp-content/uploads/2016/04/CL-150-TOP-vertical-500x500.jpg',
    },
    {
        id: 6,
        name: 'Guitar Acoustic EKO ONE 018 CW EQ Natural',
        price: 4500,
        favourite: true,
        sale: 30,
        img: 'https://guitar.station.vn/wp-content/uploads/2018/12/dan-guitar-acoustic-eko-one-series-sunbust-3-500x500.jpg',
    },
    {
        id: 7,
        name: 'Guitar Acoustic Epiphone DR-100-Natural',
        price: 3190,
        favourite: false,
        sale: 15,
        img: 'https://guitar.station.vn/wp-content/uploads/2018/01/dan-guitar-acoustic-epiphone-dr100-chinh-hang-1-360x360.jpg',
    },
    {
        id: 8,
        name: 'Guitar Classic Admira Malaga',
        price: 7500,
        favourite: true,
        sale: 5,
        img: 'https://guitar.station.vn/wp-content/uploads/2018/12/dan-guitar-classic-malaga-3-500x500.jpg',
    },
    {
        id: 9,
        name: 'Guitar Classic Station CL-350',
        price: 3000,
        favourite: false,
        sale: 45,
        img: 'https://guitar.station.vn/wp-content/uploads/2018/03/Untitled-1-Copy-2-1-500x500.jpg',
    },
    {
        id: 10,
        name: 'Guitar Acoustic Station CC300A',
        price: 6500,
        favourite: true,
        sale: 12,
        img: 'https://guitar.station.vn/wp-content/uploads/2016/04/CC-300A-Top-vertical-500x500.jpg',
    },
    {
        id: 11,
        name: 'Guitar Acoustic EKO-EQ-Black-OM',
        price: 3990,
        favourite: false,
        sale: 20,
        img: 'https://guitar.station.vn/wp-content/uploads/2018/03/EKO-A-EQ-BLACK-OM-TOP-Copy-500x500.png',
    },
    {
        id: 12,
        name: 'Guitar Acoustic Xanh Lá Diduo',
        price: 3200,
        favourite: true,
        sale: 25,
        img: 'https://guitar.station.vn/wp-content/uploads/2020/05/dan-guitar-xanh-la-1-Copy-500x500.jpg',
    },
]
///
let listContactUs = [
    {
        id: 19504781,
        name: 'Nguyễn việt Anh',
        email: ''
    },
    {
        id: 19507081,
        name: 'Nguyễn dức Duy',
        email: ''
    },
    {
        id: 19508981,
        name: 'Nguyễn văn Hoàng',
        email: 'hoangkc35@gmail.com'
    },
    {
        id: 19508951,
        name: 'Nguyễn hữu Nghị',
        email: ''
    },
]

///
let rootUrl = 'https://json-server-guitar.herokuapp.com/listGuitar';


/**
* get all theo axios
*/
const findAll = async () => {
    console.log('call... findAll() ');
    let listGuitar = [];
    try {
        let res = await axios.get(rootUrl);
        
        listGuitar = res.data;
        
    } catch (error) {
        console.log("🚀 ~ file: ComponentHome.js ~ line 41 ~ findAll ~ error", error)
    }
    
    listGuitar.forEach(val => {
        console.log("🚀 ~ file: data.js ~ line 130 ~ findAll ~ val", val)
        
    });

    return listGuitar;
}

export default {
    z_item: z_item,
    listItem,
    listContactUs
}
