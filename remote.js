import { getShoppingCart } from "./Localstorage_function/fakedb";

    const getlocaldata=async()=>{
        let newarray=[];
        const fetchdata=await fetch("data.json");
        const resdata=await fetchdata.json();
        
        let localvalue=getShoppingCart();
        for(let id in localvalue){
            let filterdata=resdata.find(index=>index.id==id)
            if(filterdata.jobtype=="Remote"){
             
                newarray.push(filterdata);
            }

        }
        return newarray;

    }

export default getlocaldata;
