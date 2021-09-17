import React from 'react'
import { useParams  } from 'react-router'

import download from "../assets/download.png"
import "./Download.css"

export default function Download() {
    const { key } = useParams()
    
    return (
        <div>
          
            <section>
                <div id="bg" className="container-fluid ">
                    <div  className="row">
                        <div id="download_panel" className="col-12 d-flex justify-content-center align-items-center">

                            

                                <a href={"http://127.0.0.1:3001/download/" + key} target="_blank" rel="noreferrer" className="col-12 col-md-6  mx-auto bg-white btn ">
                                    <img className="w-50" src={download} alt="" />
                                    <p>Click And Download</p>
                                    {key}
                                
                                </a>
                                
                     



                        </div>
                        
                    </div>
                    

                </div>
            </section>
        </div>
    )
}
