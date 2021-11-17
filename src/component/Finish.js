import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Finish() {
    let correct=0
let wrong=0

let notes=localStorage.getItem('repo')
let myLeads=JSON.parse(notes)


for(let i=0;i<myLeads.answer.length;i++){
    if(myLeads.answer[i] == 'wrong'){
        wrong++
    }else {
        correct++
    }
}
    return (
        <div>
            

<div class="container">
        <div class="row">
            <h1>My Interview Portal</h1>
            <hr/>
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">AngularJS Test - Result</div>
                    <div class="panel-body">
                        <center>
                            <h2 class="">Total no of Questions: {myLeads.questions.length}</h2>
                            <h3 class="text-success">Correct Answers: {correct}
                            <span class="text-danger">Wrong Answers: {wrong}</span></h3>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
            /* <div class="container">
        <div class="row">
            <h1>My Interview Portal</h1>
            <hr/>
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-heading">AngularJS Test - Result</div>
                    <div class="panel-body">
                        <center>
                            <h2 class="">Total no of Questions: 10</h2>
                            <h3 class="text-success">Correct Answers: 6
                            <span class="text-danger">Wrong Answers: 4</span></h3>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div> */
    )
}

export default Finish
