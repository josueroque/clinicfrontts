import React,{Fragment} from 'react';
 import Sidebar from './Sidebar';
import { Container } from '@material-ui/core';
//import {UsersContext} from '../context/UsersContext'; 
//import RegisterImage from '../Register.png';
 import Image from '../images/clinica.png';

const Home=(props: any)=>{
 //   const {auth}=useContext(UsersContext);
    
 //   console.log(auth);
    return(
        
        <Fragment>
                     
            <Sidebar></Sidebar>
            <Container className="Container-Home">
                {/* <h1 className="HistoryTitle">GYNECOLOGYST INFORMATION SYSTEM</h1> */}
                <br></br>
               
                    <img src={Image} className="HomeImage"></img>
               
                   
                
            </Container>
             {/* <h2>Improving your patients atention</h2> */}
        </Fragment>
    )


}

export default Home; 