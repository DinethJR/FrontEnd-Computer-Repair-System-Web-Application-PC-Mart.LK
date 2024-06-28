import React, { useEffect, useState } from 'react'
import { createRepairRequest, getRepairRequest, updateRepairRequest } from '../services/RepairRequestService'
import { useNavigate,useParams} from 'react-router-dom'

const RepairRequestComponent = () => {

    const [customerName, setCustomerName] = useState('')
    const [device, setDevice] = useState('')
    const [issue, setIssue] = useState('')

    const {id} = useParams();
    const [errors, setErrors] = useState({
        customerName:'',
        device:'',
        issue:''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if(id){
            getRepairRequest(id).then((response) =>{
                setCustomerName(response.data.customerName);
                setDevice(response.data.device);
                setIssue(response.data.issue);
            }).catch(error =>{
                console.error(error);
            })
        }
    },[id])
    
    function saveOrUpdateRepairRequest(e){
        e.preventDefault ();

        if(validateForm()){

            const repairequest = {customerName, device,issue}
            console.log(repairequest)

            if(id){
                updateRepairRequest(id, repairequest).then((response) => {
                    console.log(response.data);
                    navigator('/repairrequest');
                }).catch(error => {
                    console.error(error);
                })
            }else{

                createRepairRequest(repairequest).then((response) => {
                    console.log(response.data);
                    navigator('/repairrequest')
                }).catch(error => {
                    console.error(error);
                })
            }

        }
 
    }
    
    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(customerName.trim()){
            errorsCopy.customerName = '';
        } else {
            errorsCopy.customerName = 'Customer Name is Required';
            valid = false;
        }
        
        if(device.trim()){
            errorsCopy.device = '';
        } else {
            errorsCopy.device = 'Device Name is Required';
            valid = false;
        }
        
        if(issue.trim()){
            errorsCopy.issue = '';
        } else {
            errorsCopy.issue = 'Describe is Required';
            valid = false;
        }
        setErrors(errorsCopy);
        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Repair Request</h2>
        }else{
            <h2 className='text-center'>Add Repair Request</h2>
        }
    }
  return (
    <div className='container'>
        <br/><br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-lable '>Customer Name</label>
                            <input
                                type='text'
                                placeholder='Enter Customer Name'
                                name='customerName'
                                value={customerName}
                                className={`form-control ${ errors.customerName ? 'is-invalid':''}`}
                                onChange={(e) => setCustomerName(e.target.value)}
                            >
                            </input>
                            {errors.customerName && <div className='invalid-feedback'>{errors.customerName} </div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-lable'>Device</label>
                            <input
                                type='text'
                                placeholder='Enter Device'
                                name='device'
                                value={device}
                                className={`form-control ${ errors.device ? 'is-invalid':''}`}
                                onChange={(e) => setDevice(e.target.value)}
                            ></input>
                            {errors.device && <div className='invalid-feedback'>{errors.device} </div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-lable'>Issue</label>
                            <input
                                type='text'
                                placeholder='Describe the Issue'
                                name='issue'
                                value={issue}
                                className={`form-control ${ errors.issue ? 'is-invalid':''}`}
                                onChange={(e) => setIssue(e.target.value)}
                            ></input>
                            {errors.issue && <div className='invalid-feedback'>{errors.issue} </div>}
                        </div>
                        <button className='btn btn-success' onClick={saveOrUpdateRepairRequest}>Submit</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default RepairRequestComponent