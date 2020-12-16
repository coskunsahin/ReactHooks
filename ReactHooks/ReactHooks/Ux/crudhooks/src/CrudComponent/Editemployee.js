
import React, { useState, useEffect } from 'react'  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  
function Editemployee(props) {  
        const [employee, setemployee]= useState({id:'',firstName: '',lastName:'', reportNumber: '',title: '', city: '', country: '', titleOfCourtesy: '' ,birthDate:'',hireDate:'',countrydata:[],});  
        const Url = "https://localhost:44311/api/Hooks/employeedetails?id=" + props.match.params.id;  
        
        useEffect(() => {  
          const GetData = async () => {  
            const result = await axios(Url);  
            setemployee(result.data);  
            
          };  
        
          GetData();  
        }, []);  
        const[data ,setData]=useState([]);
  useEffect(() => {  
    const GetData = async () => {  
      const countrydata = await axios('https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json');  
      setData(countrydata.data);  
    };  
  
    GetData();  
  },[]); 
        const UpdateEmployee = (e) => {  
          e.preventDefault();  
          const data = {id:props.match.params.id, firstName:employee.firstName,lastName:employee.lastName, reportNumber: employee.reportNumber, title: employee.title, city:employee.city, country: employee.country,birthDate:employee.birthDate,hireDate:employee.hireDate, titleOfCourtesy: employee.titleOfCourtesy };  
          axios.post("https://localhost:44311/api/Hooks/CreateEmps", data)  
            .then((result) => {  
              props.history.push('/EmployeList')  
            });  
        };  
        
        const onChange = (e) => {  
          e.persist();  
          setemployee({...employee, [e.target.name]: e.target.value});  
        }  
        
        return (  
          
          <div className="app flex-row align-items-center">  
           <h1>Update Employee</h1>  
          <Container>  
            <Row className="justify-content-center">  
              <Col md="12" lg="1" xl="8">  
                <Card className="mx-4">  
                  <CardBody className="p-4">  
                    <Form onSubmit={UpdateEmployee}>  
                     
                  
                      <InputGroup className="mb-3">  
      
                      


                        <Input type="text" name="firstName" id="firstName" placeholder="firstName" value={employee.firstName} onChange={ onChange }  />  
                      </InputGroup>  
                       <InputGroup className="mb-3">  
      
                       <Input type="text" name="lastName" id="lastName" placeholder="lastName" value={employee.lastName} onChange={ onChange }  />  
                      </InputGroup>  
                       <InputGroup className="mb-3">  
                        <Input type="text" placeholder="reportNumber" name="reportNumber" id="reportNumber" value={employee.reportNumber} onChange={ onChange }/>  
                      </InputGroup>  
                     
                      <InputGroup className="mb-3"> 
                  <Input type="date" placeholder="date" name="birthDate" id="birthDate" value={employee.birthDate} onChange={ onChange }/>  
                </InputGroup> 
                 <InputGroup className="mb-3"> 
                  <Input type="date" placeholder="date" name="hireDate" id="hireDate" value={employee.hireDate} onChange={ onChange }/>  
                </InputGroup>  
                     
                     
                     
                      <InputGroup className="mb-3">  
      
                        <Input type="text" placeholder="title" name="title" id="title"  value={employee.title} onChange={ onChange }  />  
                      </InputGroup>  
                       

                      <InputGroup className="mb-4">  

<select class="form-control" value={employee.city} id="city" name="city"onChange={onChange}>
<option>1</option>
    {data.map(e =>
        <option key={e.name}>{e.capital}</option>
    )}
               </select>                
                </InputGroup>  
<InputGroup className="mb-4">  
  <select class="form-control" value={employee.country} id="country" name="country"onChange={onChange}>
    {data.map(e =>
        <option key={e.id}>{e.name}</option>
    )}

</select>

</InputGroup>  






                      
                       
                      <InputGroup className="mb-4">   
      
                         <Input type="text" placeholder="titleOfCourtesy" name="titleOfCourtesy" id= "titleOfCourtesy" value={employee.titleOfCourtesy} onChange={ onChange } />  
                      </InputGroup>   
                       
                <CardFooter className="p-4">  
                    <Row>  
                    <Col xs="12" sm="26">  
                  <Button type="submit"  className="btn btn-danger mb-1" block><span>Save</span></Button>  
                </Col>  
                      
                    </Row>  
                  </CardFooter>  
                    </Form>  
                  </CardBody>                 
                </Card>  
              </Col>  
            </Row>  
          </Container>  
        </div>  
          
          
          )  
}  
  
export default Editemployee;