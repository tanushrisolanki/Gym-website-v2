import React from "react";
import {useState} from "react";
import {ClipLoader} from "react-spinners";
const Contact = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [loading,setLoading] = useState();

    const sendMail = async(e) =>{
        e.preventDefault();
        setLoading(true);
        try{
            const{data} = await axios.post(
                "http://localhost:4000/send/mail",
                { name,email,message },
                { withCredentials:true, headers:{"Content-Type": "application/json"},}
            );
            setName("");
            setEmail("");
            setMessage("");
            toast.success(data.message);
            setLoading(false);
        }catch(error){
            setLoading(false);
            toast.error(error.response.data.message);
        }
    };

    return(
        <section className="contact">
            <form onSubmit={sendMail}>
                <h1>CONTACT US</h1>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={ (e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" value={message} onChange={ (e) => setMessage(e.target.value)}/>
                </div>
                <button type="submit" disabled={loading} className="query" >    
                     {loading && <ClipLoader size={20} color="white"/>}
                     Submit
                </button>
            </form>
        </section>
    );
};

export default Contact