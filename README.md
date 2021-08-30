# @rbxts/roact-hooked

Roact hooks based on [Kampfkarren's hooks](https://github.com/Kampfkarren/roact-hooks) & [React Hooks](https://reactjs.org/docs/hooks-intro.html)

> ✋🏾 This is a work in progress!

## Usage

```tsx
import Hooked, { useEffect, useState } from "../index";
import Roact from "@rbxts/roact";

interface MyComponentProps {
	name: string;
}

export const MyComponent = Hooked.FC<MyComponentProps>((props) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		print("Counter: " + count);
	}, [count]);

	return (
		<textbutton
			Size={new UDim2(1, 0, 1, 0)}
			Text={`${props.name} pressed ${count} times`}
			Event={{
				Activated: () => setCount((value) => value + 1),
			}}
		/>
	);
});

MyComponent.defaultProps = {
	name: "David Baszucki",
};
```
