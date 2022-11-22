import axios from 'axios';

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
        console.log("🚀 ~ file: dataServer.js ~ line 23 ~ findAll ~ val", val)
        
        
    });

    return listGuitar;
}
export default findAll;
