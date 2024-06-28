import React,{useEffect, useState}from 'react'
import { deleteRepairRequest, listRepairRequest } from '../services/RepairRequestService'
import { useNavigate } from 'react-router-dom'



const ListRepairRequestComponent = () => {

   const [repairrequest, setRepairRequest]= useState([])

   const navigator = useNavigate();

   useEffect(() => {
        getAllRepairRequest();
   }, [])

   function getAllRepairRequest(){
    listRepairRequest().then((response) => {
        setRepairRequest(response.data);
      }).catch(error => {
        console.error(error);
      })
   }

   function addNewRepair(){
        navigator('/add-repair')
   }
   function updateRepairRequest(id){
        navigator(`/edit-repairrequest/${id}`)

   }
   function removeRepairRequest(id){
        console.log(id);
        deleteRepairRequest(id).then((response) =>{
            getAllRepairRequest();
        }).catch(error => {
            console.error(error);
        })

   }

  return (
    <div className='container'>
        
        <h2 className='text-center'>List of Repair Requests</h2>
        <button className='btn btn-success mb-2'onClick={addNewRepair}>Add Repair</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>CustomerName </th>
                    <th>Device</th>
                    <th>Issue</th>
                    <th>Action</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    repairrequest.map(RepairRequest =>
                        <tr key={RepairRequest.id}>
                            <td>{RepairRequest.id} </td>
                            <td>{RepairRequest.customerName} </td>
                            <td>{RepairRequest.device}</td>
                            <td>{RepairRequest.issue}</td>
                            <td><button className='btn btn-info' onClick={() => updateRepairRequest(RepairRequest.id)}> Update</button>
                            <button className='btn btn-danger' onClick={() => removeRepairRequest(RepairRequest.id)}
                                style={{marginLeft: '10px'}}                            
                            > Delete</button>
                            </td>
                         </tr>)
                }
               
            </tbody>
        </table>
    </div>
  )
}

export default ListRepairRequestComponent