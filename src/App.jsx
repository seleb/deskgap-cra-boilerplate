import React from 'react';
import { Helmet } from "react-helmet";

import './styles.scss';
import pkg from '../package.json';
import ContextMenu from './ContextMenu';
import Dialog from './Dialog';
import DraggableArea from './DraggableArea';
import Window from './Window';
import Messages from './Messages';
import Node from './Node';

export default function App()
{
	const sections = [
		['ContextMenu', ContextMenu],
		['Dialog', Dialog],
		['DraggableArea', DraggableArea],
		['Window', Window],
		['Messages', Messages],
		['Node', Node],
	];

	return (
		<>
			<Helmet>
				<title>{pkg.name}</title>
			</Helmet>

			<nav>
				<ul>
					{sections.map(([section]) => <li><a href={`#h-${section}`}>{section}</a></li>)}
				</ul>
			</nav>
			<main>
				<h1>{pkg.name}</h1>
				<h2>DeskGap API Demo</h2>

				{sections.map(([section, Component]) => (
					<section>
						<h2 id={`h-${section}`}>{section}</h2>
						<Component />
					</section>
				))}
			</main>
		</>
	);
}
