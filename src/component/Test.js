import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from '../../node_modules/axios'
import {useNavigate} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Finish from './Finish'


function Test() {
let {id}=useParams();
let {qnumber}=useParams();
let navigate=useNavigate()
let displayprev=[]
let type='Multiple-Response'
let name1;
let option1=[];
//let type1=[];
let intnumber;
let inc;
let strinc;
let prevarray=[]
const [repo,setRepo]=useState([])
let [seloption,setSeloption]=useState('null')
let modifyseloption=seloption
let [checkoption,setCheckoption]=useState([])


 intnumber=parseInt(qnumber)
 inc=1+intnumber
 strinc=inc.toString()

let idvalue


let textValue1=React.createRef();

   let text1=[]
const getRepo=()=>{
  
    axios.get('http://interviewapi.stgbuild.com/getQuizData' )
    .then(response => {
        const myRepo=response.data.tests;
       setRepo(myRepo);
        
    });
};


let len
 useEffect(() => {
  let notes=localStorage.getItem('repo')
let myLeads=JSON.parse(notes)

 getRepo()    
    }, [])
    let notes=localStorage.getItem('repo')
    let myLeads=JSON.parse(notes)
    let index

for(let i=0;i<repo.length;i++){
  if(repo[i]._id == id){
    index=i
        name1=repo[i].name
      text1=repo[i].questions[qnumber]
      option1=repo[i].questions[qnumber].options
    // type=repo[i].questions[qnumber].type
     
        if(repo[i].questions[qnumber].type == type){
          type="Multiple-Response"
        }else{
          type="Radio"
        }
        //console.log(type)
   len=repo[i].questions.length
   idvalue=repo[i].questions[qnumber]._id
//localStorage.setItem('abc',JSON.stringify(option1))
  }
}
//console.log(repo)
let index1;


let temp1=[]
let indexofquestion=(myLeads.questions[qnumber])
 let indexvalueofquestion=myLeads.questions.indexOf(indexofquestion)

function previous(e){
  intnumber=parseInt(qnumber)
  inc=intnumber-1
  strinc=inc.toString()
index1=myLeads.answer.indexOf(e.target.value)
  //myLeads.prevState.splice(index1,0)
myLeads.answer.splice(index1,1)

  localStorage.setItem('repo',JSON.stringify(myLeads))
    navigate("/test/"+id+"/"+strinc)
}


function next(){
  intnumber=parseInt(qnumber)
  inc=1+intnumber
  strinc=inc.toString()
let updateradiooption
  console.log(modifyseloption)
  //console.log(displayprev)
  //localStorage('abc',JSON.stringify(radiovalue))
let temp_value



   /* for(let indexvalueofquestion=0;indexvalueofquestion<strinc;indexvalueofquestion++){
          if(indexvalueofquestion == (strinc-1)){
            if(type == 'Multiple-Response'){
              myLeads.prevState[indexvalueofquestion]=checkoption
              myLeads.prevState.push(myLeads.prevState[indexvalueofquestion])
              console.log(myLeads.prevState)
            }else{
              myLeads.prevState[indexvalueofquestion]=seloption
              temp1=myLeads.prevState[indexvalueofquestion]
              console.log(myLeads.prevState)

            }
            
          }
    }   */

  // if(myLeads.prevState[indexofquestion] != 'null'){
  //   temp1=myLeads.prevState
  // }


  if(type == 'Multiple-Response'){
            let tempvar=parseInt(strinc)
           for(let i=0;i<=tempvar;i++){
           // console.log(indexvalueofquestion)
            if(indexvalueofquestion == (tempvar-i)){
              myLeads.prevState[indexvalueofquestion]=checkoption
              temp1=myLeads.prevState[indexvalueofquestion]
                }
          }
         }else if(type == 'Radio'){
           let tempvar=parseInt(strinc)
            for(let i=0;i<=tempvar;i++){
            if(indexvalueofquestion == (tempvar-i)){
              myLeads.prevState[indexvalueofquestion]=modifyseloption
              console.log(myLeads.prevState)
             // temp1=myLeads.prevState[indexvalueofquestion]
            }
          } 
        
      }
   //console.log(myLeads.prevState)
   localStorage.setItem('repo',JSON.stringify(myLeads.prevState))


  if(type =='Multiple-Response'){
    //console.log(checkoption)
    let correctoptionlength=repo[index].questions[qnumber].correctOptionIndex.length
    //console.log(correctoptionlength)

    for(let i=0;i<correctoptionlength;i++){
    if(repo[index].questions[qnumber].correctOptionIndex[i] == checkoption[i]){
      temp_value='correct'
    }else{
     temp_value='wrong'
    }
  }
  myLeads.answer.push(temp_value)
  }
  else{
   
  if(repo[index].questions[qnumber].correctOptionIndex != seloption){
          myLeads.answer.push('wrong')
      }else{
myLeads.answer.push('correct')
 }

}

localStorage.setItem('repo',JSON.stringify(myLeads))
navigate("/test/"+id+"/"+strinc)

}


let temp=[]
function clickableRadio(e){
 setSeloption(e.target.value)
}


let tempcheck=[]
function clickableCheckbox(e){
  
  setCheckoption(e.target.value)

tempcheck=checkoption
let checkindex
let eventv=e.target.value
if(tempcheck.includes(eventv) == true){
  checkindex=tempcheck.indexOf(e.target.value)
  tempcheck.splice(checkindex,1)
}else{
  tempcheck.push(eventv)
  tempcheck.sort()
}
//console.log(tempcheck)
setCheckoption(tempcheck)
 }

  

function finish(){
  if((repo[index].questions[qnumber].correctOptionIndex) == seloption){
  
     myLeads.answer.push('correct')
  }else{
  
myLeads.answer.push('wrong')
  }
  localStorage.setItem('repo',JSON.stringify(myLeads))


  navigate('/finish')
}
prevarray=myLeads.prevState
{displayprev=myLeads.questions.indexOf(myLeads.questions[qnumber])}


    return (
      <>
    
      <div class="row">
      <h1>My Interview Portal</h1>
          <hr/>
          <div class="col-md-12">
              <div class="panel panel-default">
                  <div class="panel-heading">{name1} </div>
                  <div class="panel-body">
                  <form style={{textAlign:'left'}}> 
                            <label>{text1.questionText}</label>
                            
                            {
                              
                            type === 'Multiple-Response' ?
                            <>
                               {option1.map((note,index)=>(
                                typeof prevarray[displayprev] == 'undefined'?
                               <>
                            <div class="checkbox">
                              { myLeads.prevState[indexvalueofquestion] }
                                 <input  onChange={clickableCheckbox} ref={textValue1}  key={note.id} type="checkbox" name="option" value={index} /> {option1[index]}
                            </div>
                            </>
                            :
                                 prevarray[displayprev] == myLeads[displayprev]?
                            <>
                            <div class="checkbox">
                            {myLeads.prevState[displayprev]}
                               <input  onChange={clickableCheckbox} defaultChecked={true} ref={textValue1}  key={note.id} type="checkbox" name="option" value={index} /> {option1[index]}
                          </div>
                          </>
                          :
                              <>
                            <div class="checkbox">
                            {myLeads.prevState[indexvalueofquestion] }
                               <input  onChange={clickableCheckbox}  ref={textValue1}  key={note.id} type="checkbox" name="option" value={index} /> {option1[index]}
                          </div>
                          </>

                                ))
                               }
                               </>
                              :
                              <>
                       
                              {/* { {displayprev=repo[index].questions[indexvalueofquestion]} } */}
                              
                            {option1.map((note,index)=>(
                              
                              typeof prevarray[displayprev] == 'undefined' ?(
                                <>
                              <div class="radio">
                                {/* {console.log('abcd')} */}
                                
                                  <input onChange={clickableRadio}  ref={textValue1} key={note.id} type="radio" name="option" value={index} style={{backgroundColor:'blue'}}/> {option1[index]}
                              </div>
                                </>
                              )
                            :
                               
                              parseInt(prevarray[displayprev]) === index ?
                                      <>
                                       <div style={{display:'none'}}>{seloption = myLeads.prevState[indexvalueofquestion]}</div>
                                      <div class="radio">
                                      {/* {prevarray[index]+"radioc"} */}
                                      <input onChange={clickableRadio} defaultChecked={true} ref={textValue1} key={note.id} type="radio" name="option" value={index} /> {option1[index]}
                                     
                                      </div> 
                                      </>
                                    :
                              
                                      <>
                                      <div class="radio">
                                      {/* {prevarray[index]+"radiouc"} */}

                                      <input onChange={clickableRadio} ref={textValue1} key={note.id} type="radio" name="option" value={index} /> {option1[index]}
                                      </div> 
                                      </>
                            ))
                       }
                            </>
                            }
       
                        </form>
                  </div>
                  <div class="panel-footer">
                      {(len) == (strinc)?
                      <>
                       <a   class="btn btn-success" style={{textAlign:'left'}} onClick={previous} >Previous</a>
                        <a style={{textAlign:'right'}} class=" btn btn-danger"   onClick={()=>finish()} >Finish</a>  
                        </>
                        : strinc >1 ?
                        <>
                          <a   class="btn btn-success" style={{textAlign:'left'}} onClick={previous} >Previous</a>
                       <a   class="btn btn-success" style={{textAlign:'left'}} onClick={next} >Next</a>
                       
                    
                        </>
                        :
                        <>
                       
                        <a   class="btn btn-success" style={{textAlign:'left'}} onClick={next} >Next</a>
                        </>
                    }
                                         

                  </div>
              </div>
          </div>
      </div>
 
  </>
    )
}

export default Test
