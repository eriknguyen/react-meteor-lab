import React from 'react';

const EmployeeDetail = ({ employee }) => {
	// get employee attribute from props by { employee }
	const { name, email, phone, avatar } = employee;
	return (
		<div className="thumbnail">
			<img src={avatar} alt=""/>
			<div className="caption">
				<h3>{name}</h3>
				<ul className="list-group">
					<li className="list-group-item">Email: {email}</li>
					<li className="list-group-item">Phone: {phone}</li>
				</ul>
			</div>
		</div>
	);
};

export default EmployeeDetail;