import React from "react";
import Table from 'react-bootstrap/Table';
function TableData(props){
    return(
        <div>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Title</th>
        
          <th>Price</th>
          <th>Rating</th>
          <th>Description</th>
          <th>Image</th>
         
        
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.data.id}</td>
          <td>{props.data.category}</td>
          <td>{props.data.title}</td>
         
          <td>₹{props.data.price}</td>
             
          <td>{props.data.rating.rate}</td>
       
          <td>{props.data.description}</td>
          <td><img src={props.data.image} alt="" height="200px" width="200px"></img></td>
        
    
        </tr>
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr> */}
        {/* <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
        </div>
    )
}
export default TableData;