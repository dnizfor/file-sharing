import axios from "axios";

export default function upload_file(file){

    const response = axios.post(process.env.REACT_APP_UPLOAD,file)

    return response
 
}