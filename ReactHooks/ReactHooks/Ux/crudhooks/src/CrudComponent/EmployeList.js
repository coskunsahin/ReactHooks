import React from 'react'  
import { Card, CardBody, Col, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react'  
function EmployeList(props) {  
  const [data, setData] = useState([]);  
  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://localhost:44311/api/Hooks/employee');  
      setData(result.data);  
    };  
  
    GetData();  
  }, []);  
  const deleteeployee = (id) => {  
    debugger;  
    axios.delete('https://localhost:44311/api/Hooks?id=' + id)  
      .then((result) => {  
        props.history.push('/EmployeList')  
      });  
  };  
  const editemployee = (id) => {  
    props.history.push({  
      pathname: '/edit/' + id  
    });  
  };  
  
  return (  
   
    <div className="animated fadeIn">  
    <h1>Employee List </h1>
    <Row>  
      <Col>  
        <Card>  
          
          <CardBody>  

            
          <Table striped>
      <thead className="thead-dark">
                <tr>  
                  <th>First Name</th> 
                  <th>Last Name</th>   
                  <th>ReportsTo</th>  
                  <th>Birth Date</th>
                  <th>Hire Date</th>
                  <th>Title</th>  
                  <th>City</th>  
                  <th>Country</th>  
                  <th>TitleOfCourtesy</th>  
                  <th>Action</th>  
                </tr>  
              </thead>  
              <tbody>  
                {  
                  data.map((item, idx) => {  
                    return <tr>  
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.reportNumber}</td>  
                      <td>{item.birthDate}</td> 
                      <td>{item.hireDate}</td> 
                      <td>{item.title}</td>  
                      <td>{item.city}</td>  
                      <td>{item.country}</td>  
                      <td>  
                        {item.titleOfCourtesy}  
                      </td>  
                      <td>  
                        <div class="btn-group">  
                          <button className="btn btn-warning" onClick={() => { editemployee(item.id) }}>Edit</button>  
                          <button className="btn btn-warning" onClick={() => { deleteeployee(item.id) }}>Delete</button>  
                        </div>  
                      </td>  
                    </tr>  
                  })}  
              </tbody>  
            </Table>  
          </CardBody>  
        </Card>  
      </Col>  
    </Row>  
  </div>  
  )  
}  
  
export default EmployeList