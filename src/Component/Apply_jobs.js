import { getShoppingCart } from "../../Localstorage_function/fakedb";

const applyloaded=async()=>{
    let fetchdata=await fetch("data.json");
    let data=await fetchdata.json();
let newarray=[];
   let getshoppingcart=getShoppingCart();
   for(let id in getshoppingcart){
    let filterdata=data.find(index=>index.id==id);
    if(filterdata){
newarray.push(filterdata)
    }
   }
   return newarray;

}
export default applyloaded;