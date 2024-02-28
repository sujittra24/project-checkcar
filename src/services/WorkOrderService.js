import http from "../http-common"

const getAll = () =>{
    return http.get("/workorder");
}
const get = (id) =>{
    return http.get("/workorder/"+ id);
}
const create = (workOrder) =>{
    return http.post("/workorder", workOrder);
}
const remove = (id) =>{
    return http.delete("/workorder/"+ id);
}
const update =(id,workOrder) =>{
    return http.put("/workorder/"+id,workOrder);
}
const search =(firstname) =>{
    return http.get("/workorder/firstname/"+firstname);
}
const WorkOrderService = {
    getAll,
    get,
    create,
    remove,
    update,
    search
}
export default WorkOrderService;