
const datas=async()=>{
    const fetchdata=await fetch('data.json');
    const data=await fetchdata.json();
    let newarray=[];
    let storedCart = sessionStorage.getItem('shop-cart');
let storecartint=JSON.parse(storedCart);
for(let id in storecartint){
    let filterdata=data.find(index=>index.id==id);
    if(filterdata){
        newarray.push(filterdata);
    }  }
    // for(let id in getsessiondata){
    //    
    //     if(filterdata){
    //     newarray.push(filterdata);
    //     }
    // }
    return newarray;
}
// datas();
export default datas;