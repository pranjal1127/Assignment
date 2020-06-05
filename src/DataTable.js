import React from 'react'
import {useState} from 'react'
import './App.css';
const $ = require('jquery');
$.DataTable = require('datatables.net');


export default function DataTable() {

  const [sort, setSort] = useState('last seen')


  return (
    <div className='container   '>
      <div className="datatable shadow-sm p-3 mb-5 bg-light rounded">
      <center className="   d-lg-flex">    
        <h3 className="text-left mr-auto">Issues(115)</h3>
        <div class="dropdown">
          <button class="btn btn-light bg-white border dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            sort by : {sort}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">Last Seen</button>
            <button class="dropdown-item" type="button"> Last day</button>  
            <button class="dropdown-item" type="button">Last Month</button>
          </div>
        </div>
        <div class="dropdown">
          <button class="btn btn-light bg-white border dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Issues
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">Resolved</button>
            <button class="dropdown-item" type="button"> UnResolve</button>  
          </div>
        </div>
        <input type="text" class="form-control w-25" id="basic-url" aria-describedby="basic-addon3"></input>
        <div className="btn"><i class="fa fa-refresh" aria-hidden="true"></i></div>
    </center>
    <br/><br/>
    <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col"  ><input type="checkbox" name="" id=""/></th>
      <th scope="col" className='text-left'  colSpan='1'> <i class="fa fa-check text-success" aria-hidden="true"></i> 52 Resolved  &nbsp; <i class="fa fa-exclamation-circle text-danger" aria-hidden="true"></i> 67 Unresolved</th>
      <th scope="col">Event </th>
      <th scope="col">User </th>
      <th scope="col">Assignee </th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
    <td scope="col" ><input type="checkbox" name="" id=""/></td>
      <td scope="col" className='text-left' colSpan='1'> 
        <div className="text-primary">
          Listen Faliure : Could not listen on 0.0.0.0 ...
        </div>
        <small>
          #25888  &nbsp;  <i class="fa fa-university" aria-hidden="true"> Security Lit-By</i>
          &nbsp;  <i class="fa fa-clock-o" aria-hidden="true"></i> <i class="" aria-hidden="true"></i> 2 Hours ago 
        </small>
      </td>
      <td scope="col">12 </td>
      <td scope="col">0 </td>
      <td scope="col"> <div className="btn"><i class="fa fa-user-circle-o text-center" aria-hidden="true"></i></div> <a href="#" target="_blank"><i class="fa fa-angle-down" aria-hidden="true"></i> </a></td>
    </tr>
    <tr>
    <td scope="col" ><input type="checkbox" name="" id=""/></td>
      <td scope="col" className='text-left' colSpan='1'> 
        <div className="text-primary">
          To access the notebook, open this file in a ...
        </div>
        <small>
          #25889  &nbsp;  <i class="fa fa-university" aria-hidden="true"> Security Lit-3k</i>
          &nbsp;  <i class="fa fa-clock-o" aria-hidden="true"></i> <i class="" aria-hidden="true"></i> 5 Hours ago 
        </small>
      </td>
      <td scope="col">112 </td>
      <td scope="col">10 </td>
      <td scope="col"> <div className="btn"><i class="fa fa-user-circle-o text-center" aria-hidden="true"></i></div> <a href="#" target="_blank"><i class="fa fa-angle-down" aria-hidden="true"></i> </a></td>
    </tr>
    <tr>
    <td scope="col" ><input type="checkbox" name="" id=""/></td>
      <td scope="col" className='text-left' colSpan='1'> 
        <div className="text-primary">
          Listen Faliure : Could not listen on 0.0.0.0 ...
        </div>
        <small>
          #25888  &nbsp;  <i class="fa fa-university" aria-hidden="true"> Security Lit-By</i>
          &nbsp;  <i class="fa fa-clock-o" aria-hidden="true"></i> <i class="" aria-hidden="true"></i> 2 Hours ago 
        </small>
      </td>
      <td scope="col">12 </td>
      <td scope="col">0 </td>
      <td scope="col"> <div className="btn"><i class="fa fa-user-circle-o text-center" aria-hidden="true"></i></div> <a href="#" target="_blank"><i class="fa fa-angle-down" aria-hidden="true"></i> </a></td>
    </tr>
    <tr>
    <td scope="col" ><input type="checkbox" name="" id=""/></td>
      <td scope="col" className='text-left' colSpan='1'> 
        <div className="text-primary">
          To access the notebook, open this file in a ...
        </div>
        <small>
          #25889  &nbsp;  <i class="fa fa-university" aria-hidden="true"> Security Lit-3k</i>
          &nbsp;  <i class="fa fa-clock-o" aria-hidden="true"></i> <i class="" aria-hidden="true"></i> 5 Hours ago 
        </small>
      </td>
      <td scope="col">112 </td>
      <td scope="col">10 </td>
      <td scope="col"> <div className="btn"><i class="fa fa-user-circle-o text-center" aria-hidden="true"></i></div> <a href="#" target="_blank"><i class="fa fa-angle-down" aria-hidden="true"></i> </a></td>
    </tr>
  
  </tbody>

  <tfoot className='text-right'>
    Rows per 
  </tfoot>
</table>
      </div>
    </div>
  )
}
