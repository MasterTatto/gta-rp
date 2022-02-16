import React from 'react';
import background_login from '../../../assets/images/background_auth.png';
import s from './style.module.css';
import InterestingFacts from './InterestingFacts';
import Authorization from './authorization';
import Container from '../../../helpers/container/container';

const Login = () => {
	return (
		<div className={s.login} style={{ backgroundImage: `url(${background_login})` }}>
			<Container>
				<InterestingFacts />
				<Authorization />
			</Container>
		</div>
	);
};

export default Login;
