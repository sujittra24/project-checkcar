import http from "../http-common"

const getAll = () =>{
    return http.get("/queue");
}
const get = (id) =>{
    return http.get("/queue/"+ id);
}
const create = (queue) =>{
    return http.post("/queue",queue);
}
const update =(id,queue) =>{
    return http.put("/queue/"+id,queue);
}
const remove = (id) =>{
    return http.delete("/queue/"+ id);
}
const QueueService = {
    getAll,
    get,
    create,
    update,
    remove
}
export default QueueService