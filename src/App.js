import React from 'react';
import { Helmet } from "react-helmet";

import './styles.scss';
import pkg from '../package.json';

export default function App()
{
	return (
		<>
			<Helmet>
				<title>{pkg.name}</title>
			</Helmet>
		</>
	);
}
