import Roact from "@firere/roact";
import { useEffect, useState, withHookDetection } from "@firere/roact-hooked";

function Counter() {
	const [state, setState] = useState(1);

	print("Current State: " + state);

	useEffect(() => {
		print("The following should not trigger a re-render");
		for (let i = 0; i < 10; i++) {
			setState(state);
		}

		const promise = Promise.delay(0.25).then(() => {
			print("The following should only trigger one re-render");
			for (let i = 0; i < 10; i++) {
				setState(5);
			}
		});

		return () => promise.cancel();
	}, []);

	return <frame BackgroundTransparency={1} Size={UDim2.fromScale(1, 1)} BackgroundColor3={new Color3()} />;
}

export = (target: Frame) => {
	withHookDetection(Roact);

	const handle = Roact.mount(<Counter />, target, "Counter");

	return () => Roact.unmount(handle);
};
