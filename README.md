# [@firere/roact-hooked](https://www.npmjs.com/package/@firere/roact-hooked)

Roact hooks based on [Kampfkarren's hooks](https://github.com/Kampfkarren/roact-hooks) & [React Hooks](https://reactjs.org/docs/hooks-intro.html)

## Note

This fork exists purely for use with [my version of Roact](https://www.npmjs.com/package/@firere/roact) and is not compatible with [`@rbxts/roact`](https://www.npmjs.com/package/@rbxts/roact).

## Install

```
npm install @firere/roact-hooked
```

## Usage with hook detection

Version 2.4.0 adds the `withHookDetection` function to allow hooks in function components without manually using HOCs.

It modifies `Roact.createElement` to detect hook use and wrap them in `withHooks` or `withHooksPure` HOCs.

```tsx
// MyComponent.tsx
import Roact from "@firere/roact";
import { markPureComponent, useEffect, useState } from "@firere/roact-hooked";

interface Props {
	name?: string;
}

export default function MyComponent({ name = "David Baszucki" }: Props) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		print("Counter: " + count);
	}, [count]);

	return (
		<textbutton
			Size={new UDim2(1, 0, 1, 0)}
			Text={`${name} pressed ${count} times`}
			Event={{
				Activated: () => setCount((value) => value + 1),
			}}
		/>
	);
}

// Optional: mark the component as a PureComponent
markPureComponent(MyComponent);
```

```tsx
// mount.client.ts
import Roact from "@firere/roact";
import { withHookDetection } from "@firere/roact-hooked";
import { Players } from "@rbxts/services";
import MyComponent from "./MyComponent";

withHookDetection(Roact);

Roact.mount(<MyComponent />, Players.LocalPlayer.WaitForChild("PlayerGui"));
```

## Usage with HOCs

Using the HOCs directly is still possible if you do not want to modify `Roact.createElement` for hook detection.

```tsx
import Roact from "@firere/roact";
import { withHooks, withHooksPure, useEffect, useState } from "@firere/roact-hooked";

interface Props {
	name?: string;
}

function MyComponent({ name = "David Baszucki" }: Props) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		print("Counter: " + count);
	}, [count]);

	return (
		<textbutton
			Size={new UDim2(1, 0, 1, 0)}
			Text={`${name} pressed ${count} times`}
			Event={{
				Activated: () => setCount((value) => value + 1),
			}}
		/>
	);
}

export default withHooks(MyComponent);

// Optional: wrap the FC in a PureComponent instead
export default withHooksPure(MyComponent);
```
