import React,{useState,useEffect} from 'react'
import axios from  "axios"
import styles from "./login.module.css"
import { useNavigate,Link} from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login} from "../actions/userAction"
import { useAlert } from "react-alert";

export const Login = () => {
	const {isAuthenticated,user,error,loading} = useSelector((state)=>state.user)
	const [inputdata, setInputData] = useState({ email: "", password: "" });
	const alert = useAlert();
     const navigate = useNavigate()
	 const dispatch = useDispatch()
     

	const handleChange = ({ currentTarget: input }) => {
		setInputData({ ...inputdata, [input.name]: input.value });
		console.log(inputdata)
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
    dispatch(login(inputdata))
		
const res = await axios.post("http://localhost:5000/api/auth/login",inputdata)

localStorage.setItem("nftuser", JSON.stringify({ ...res.data}))

		console.log(res.data)
		if(localStorage.getItem("nftuser")){
			alert.success("login successfull")
			navigate("/profile")
			
		}else{
			alert.error("login unsuccessfull")
		}
		
		setInputData({
		   email:"",
		   password:""
		  });
			

	}


	useEffect(()=>{
if(error){
	alert.eror(error)
}
	},[error])

  return (
<>

<Container >

<Row md={6}>

<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="email"
							name="email"
							onChange={handleChange}
							value={inputdata.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={inputdata.password}
							required
							className={styles.input}
						/>
					
						<button type="submit" className={styles.green_btn}>
					LogIn
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/Register">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>

</Row>

</Container>

</>
  )
}
