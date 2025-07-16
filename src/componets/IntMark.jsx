import axios from 'axios';
import React, { useState } from 'react'

const IntMark = () => {


    const [input, changeInput] = useState({
        name: "",
        admno: ''
        , subject: ''
        , present: '',
        totalpresent: '',
        getexam1: '',
        getexam2: '',
        getassmark1: '',
        getassmark2: ''

    });
    const [result, setResult] = useState({
        Name: "",
        Adminno: "",
        Subject: "",
        TotalInternalMarks: "",
        Attendance: "",
        ExamMarks: "",
        AssignmentMarks: "",
        email: ''
    })

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value });
    };

    // Accepts an operation parameter
    const readvalues = (operation) => {
        console.log(input);

        axios.post(`http://localhost:4000/calculate`, input)
            .then((response) => {
                setResult(response.data.result);
                console.log("Response", response.data.result);
            })
            .catch((error) => {
                console.log("Error", error);
                setResult("error");
            });
    };


    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Name </label>
                                <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler} />


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Admission No </label>
                                <input type="text" className="form-control" name='admno' value={input.admno} onChange={inputHandler} />



                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Subject </label>
                                <input type="text" className="form-control" name='subject' value={input.subject} onChange={inputHandler} />


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Present </label>
                                <input type="text" className="form-control" name='present' value={input.present} onChange={inputHandler} />



                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Total Present </label>
                                <input type="text" className="form-control" name='totalpresent' value={input.totalpresent} onChange={inputHandler} />



                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Exam 1 </label>
                                <input type="text" className="form-control" name='getexam1' value={input.getexam1} onChange={inputHandler} />


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Exam 2 </label>
                                <input type="text" className="form-control" name='getexam2' value={input.getexam2} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Assignment 1 </label>
                                <input type="text" className="form-control" name='getassmark1' value={input.getassmark1} onChange={inputHandler} />


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">
                                    Assignment 2

                                </label>
                                <input type="text" className="form-control" name='getassmark2' value={input.getassmark2} onChange={inputHandler} />



                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readvalues}>SUBMIT</button>

                            </div>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <div class="card" >
                                <div class="card-body">
                                    <h4 class="card-title">Name: {result.Name} </h4>
                                    <h4 class="card-title">Admission Number: {result.Adminno} </h4>
                                    <h4 class="card-title">Total Internal Marks: {result.TotalInternalMarks} </h4>
                                    <h4 class="text-danger">Subject: {result.Subject} </h4>
                                    <h4 class="card-title">Attandance Mark: {result.AssignmentMarks} </h4>
                                    <h4 class="card-title">Assignment Mark: {result.AssignmentMarks} </h4>
                                    <h4 class="card-title">Exam Mark: {result.ExamMarks} </h4>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>




            </div>


        </div>
    )
}

export default IntMark