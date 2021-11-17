import React,{useState,useEffect} from 'react'
//import {useNavigate} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from '../../node_modules/axios'
//import {useParams} from 'react-router-dom'
//import Test from './Test'

function Index1() {
    const [repo,setRepo]=useState([])
    //let navigate=useNavigate()
   // let {id}=useParams();
   // let index_value=0
const getRepo=()=>{

    axios.get('http://interviewapi.stgbuild.com/getQuizData' )
    .then(response => {
        console.log(response.data.tests )
        const myRepo=response.data.tests;
       setRepo(myRepo);
        
    });
};


 useEffect(() => {
    localStorage.setItem('repo', JSON.stringify(null));

 getRepo()    
 
    }, [])

    localStorage.setItem('alltest',JSON.stringify(repo))

   let items = (notequestions) => {
    let parameters = {
        answer:[],
        prevState:[],
      questions:notequestions,
      
      
    }
    localStorage.setItem('repo', JSON.stringify(parameters))
    }
    return (
        <div>
                <div className="container">
        <div class="row">
            <h1>My Interview Portal</h1>
            <hr/>
            <div class="col-md-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Test</th>
                            <th>No of Questions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                     {repo.map((note,index)=>(
                        
                         <tr key={note._id}>
                         <td>{note.name}</td>
                         <td>{note.questions.length}</td>
                          <td> <a class="btn btn-warning" onClick={()=>items(note.questions)} href={'test/'+note._id+'/'+0}  >Start Test</a></td>
                     </tr>
                     ))}
                  

                      
                    </tbody>
                </table>
            </div>
            
        </div>

        
    </div>
        </div>
    )
}

export default Index1
