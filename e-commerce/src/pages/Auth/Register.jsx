import Layout from "../../components/layout/Layout";
import { useState } from "react";
import { toast } from "react-toastify";


const Register = () => {
  //state management in the form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address,setAddress]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Form Submitted",name,email,password,phone,address);
    toast.success("Registered Successfully")
  }

	return (
		<Layout title="Registration">
			<div className="register">
				<h1>Register Page</h1>
				<form className="registerForm" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="exampleInputName1" className="form-label">
							Name
						</label>
						<input
							type="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
							className="form-control"
							id="exampleInputName1"
							placeholder="Enter Your Name"
							required={true}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Email address
						</label>
						<input
							type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
							className="form-control"
							id="exampleInputEmail1"
							placeholder="Enter Your Email"
							required={true}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPassword1" className="form-label">
							Password
						</label>
						<input
							type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Enter Your Password"
							required={true}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputPhone1" className="form-label">
							Phone
						</label>
						<input
							type="tel"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
							className="form-control"
							id="exampleInputPhone1"
							placeholder="Enter Your Phone"
							required={true}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="exampleInputAddress1" className="form-label">
							Address
						</label>
						<input
							type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
							className="form-control"
							id="exampleInputAddress1"
							placeholder="Enter Your Address"
							required={true}
						/>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</Layout>
	);
};
export default Register;
