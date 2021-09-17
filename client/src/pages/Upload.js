import "./Upload.css"
import React, { useState } from "react";
import upload_file from "../fetchs/upload_file"

export default function App() {

  const [file, setFile] = useState(null);

  const [flash, setFlash] = useState("");
  const onChangeHandler = (e) => {
    
    if(e.target.files[0].size > 300000){
      setFlash({ "status": false, "key": "File is too big" })
      
    }
    else{
      setFile(e.target.files[0])
    }
    


  }
  const onSubmitHandler = (e) => {


    const formData = new FormData()
    formData.append("file", file, file.name)

    upload_file(formData)
      .then(req => {

        setFlash({ "status": true, "key": req.data.key })
        
      })
      .catch(err => {
        console.log(err)
        setFlash({ "status": false, "key": "Try Again" })
      })

    e.preventDefault()

  }

  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div id="upload_panel" className="col-12 col-lg-3  bg-danger d-flex flex-column justify-content-center align-items-center">

              <div className=" d-flex flex-column justify-content-around align-items-center h-50">


                <div className="w-75">

                  <h1 className="display-1">File-Share</h1>
                  <h3 className="fw-light">Upload Your Files And Share With People</h3>

                </div>

                <form onSubmit={onSubmitHandler}>
                  <div class="mb-3">
                    <label for="formFile" className="form-label"> {flash === "" && "Upload Your Files"}
                    </label>


                    {
                      flash === "" && <input className="form-control" type="file" onChange={onChangeHandler} id="formFile" />
                    }
                    
                    {
                      flash === "" &&  <input className="btn btn-primary my-2 mx-auto" type="submit" />  
                    }
                    {
                      flash !== "" && flash.status === true && <div class="alert alert-success text-center my-2 " role="alert"> <a href={`http://127.0.0.1:3000/${flash.key}`} >http://127.0.0.1:3000/{flash.key}</a> </div> 
                    }
                    {
                      flash !== "" && flash.status === false && <div class="alert alert-danger text-center my-2 " role="alert">{flash.key} </div>
                    }




                  </div>
                </form>
              </div>


            </div>
            <div id="bg" className="col-9 ">


            </div>


          </div>
        </div>
      </section>


    </div>
  );
}


