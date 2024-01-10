import { useEffect, useRef, useState } from 'react';
import './App.css';
// import CLOUDS from 'vanta/src/vanta.clouds';
// import TOPOLOGY from 'vanta/src/vanta.topology';
import WAVES from 'vanta/src/vanta.waves';

function App() {
	const [vantaEffect, setVantaEffect] = useState(null);
	const myRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				WAVES({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					waveSpeed: 2.5
				})
			);
		} else {
			return () => {
				if (vantaEffect) vantaEffect.destroy();
			};
		}
	}, []);

	return (
		<main>
			<div className="bg" ref={myRef}>
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
