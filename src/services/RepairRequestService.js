import axios from "axios";

const REST_API_BASE_URL ='http://localhost:8080/api/repairrequest';

export const listRepairRequest =() => axios.get(REST_API_BASE_URL);

export const createRepairRequest = (repairrequest) => axios.post(REST_API_BASE_URL, repairrequest);

export const getRepairRequest = (repairrequestId) => axios.get(REST_API_BASE_URL + '/' + repairrequestId);

export const updateRepairRequest =(repairrequestId,repairrequest) => axios.put(REST_API_BASE_URL +'/'+repairrequestId, repairrequest);

export const deleteRepairRequest = (repairrequestId) => axios.delete(REST_API_BASE_URL + '/' + repairrequestId);