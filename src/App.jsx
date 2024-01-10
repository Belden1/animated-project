import { useEffect } from 'react';
import './App.css';
import CLOUDS from 'vanta/src/vanta.clouds';

function App() {
	useEffect(() => {
		CLOUDS({
			el: '#vanta',
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200.0,
			minWidth: 200.0
		});
	});

	return (
		<main>
			<div className="bg" id="vanta">
				<h1>Cloudy Days</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis delectus temporibus!
					Quaerat beatae dicta animi at fugit doloribus amet eveniet accusamus? Nihil, officia alias.
				</p>
			</div>
		</main>
	);
}

export default App;
