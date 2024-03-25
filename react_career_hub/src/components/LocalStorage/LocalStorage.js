import toast from "react-hot-toast";
const getDataFromStorage = ()=>{
    let data = [];
    const getData = localStorage.getItem('categoryJob');
    if(getData){
        data = JSON.parse(getData);
    }
    return data; 
}



const setDataToStorage = (blog)=>{
    const setData = getDataFromStorage();
    const findData = setData.find(dataId => dataId.id === blog.id);
    if(findData){
        return toast.error("already Exist");
    }
    setData.push(blog);
    localStorage.setItem('categoryJob', JSON.stringify(setData));

    return toast.success("Added Successfully");
}

const removeJob = (id) =>{
    const jobs = getDataFromStorage();
    const remaining = jobs.filter(job => job.id !== id);
    localStorage.setItem('categoryJob', JSON.stringify(remaining));
    return toast.success("remove item successfully");
}
export {getDataFromStorage,setDataToStorage,removeJob};