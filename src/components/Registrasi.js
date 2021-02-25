import React, {useState} from 'react';

const Registrasi = () => {
	const[username, setUsername] = useState('');
	const[email, setEmail] = useState('');
	const[password, setPassword] = useState('');

	const onChangeUsername = (e) => {
		const value = e.target.value
		setUsername(value)
	}

	const onChangePassword = (e) => {
		const value = e.target.value
		setPassword(value)
	}

	const onChangeEmail = (e) => {
		const value = e.target.value
		setEmail(value)
	}

	return(
		<div style={{marginTop: "100px"}}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card p-4">
								<h5>Halaman Registrasi</h5>
							<div className="card-body">
								<div className="form-group">
									<label>Username</label>
									<input type="text" placeholder="Username" className="form-control" value={username} onChange={onChangeUsername}/>
								</div>
								<br/>

								<div className="form-group">
									<label>Email</label>
									<input type="email" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail}/>
								</div>


								<br/>
								<div className="form-group">
									<label>Password</label>
									<input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}/>
								</div>


								<br/>
								<div className="row">
									<div className="col-md-6">
									<button className="btn btn-primary" >Registrasi</button>
									</div>

									<div className="col-md-6 text-right">
									 Sudah ada akun? <a href="/">Login Disini</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> 
		</div>
		)

} 

export default Registrasi;