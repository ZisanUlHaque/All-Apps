import { toast } from "react-toastify";

const getStroedApp = () =>{
    const storeAPP = localStorage.getItem('installList')

    if(storeAPP){
        const storeAPPData = JSON.parse(storeAPP);
        return storeAPPData;
    }
    else{
        return [];
    }
}

const addToStoredDB = (id) =>{
    const storeAPPData = getStroedApp();

    if(storeAPPData.includes(id)){
        toast('ID exist')
    }
    else{
        storeAPPData.push(id);
        
        const data = JSON.stringify(storeAPPData);
        localStorage.setItem('installList',data)
    }

}

export {addToStoredDB, getStroedApp};