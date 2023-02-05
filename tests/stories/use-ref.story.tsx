import Roact from "@firere/roact";
import { useEffect, useRef, withHookDetection } from "@firere/roact-hooked";

function Clipboard() {
	const ref = useRef<TextBox>();

	useEffect(() => {
		const input = ref.getValue();
		if (input) {
			input.CaptureFocus();
			print(input.Parent);
		}
	}, []);

	return <textbox Ref={ref} Size={new UDim2(1, 0, 1, 0)} Text="Edit me" TextSize={32} />;
}

export = (target: Frame) => {
	withHookDetection(Roact);

	const handle = Roact.mount(<Clipboard />, target, "Clipboard");

	return () => Roact.unmount(handle);
};
