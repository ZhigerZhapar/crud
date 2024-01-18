import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Add = () => {

    const [book,setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:"",
    })

    const navigate = useNavigate()


    const handleChange = (e) =>{
        setBook((prev)=>({...prev,[e.target.name]: e.target.value}))
    }

    const handleClick = async e =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/books",book)
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    }
    console.log(book);
    return (<>
        <div className="form">
            <h1>Add New Book</h1>
            <input type="text" onChange={handleChange} placeholder='title' name="title"/>
            <input type="text" onChange={handleChange} placeholder='desc' name="desc"/>
            <input type="number" onChange={handleChange} placeholder='price'  name="price"/>
            <input type="text" onChange={handleChange} placeholder='cover'  name="cover"/>
        </div>
        <button onClick={handleClick}>Add</button>
        </>
    );
}
 
export default Add;