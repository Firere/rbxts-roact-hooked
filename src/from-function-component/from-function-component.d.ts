import type { Effect, FC, LayoutEffect, LinkedList } from "../index";
import type { Hook, prepareHooks, resetHooks } from "../work-in-progress-hook";
import type Roact from "@rbxts/roact";

export = FromFunctionComponent;
export as namespace FromFunctionComponent;

declare const FromFunctionComponent: {
	dependencies: {
		Roact: typeof Roact;
		prepareHooks: typeof prepareHooks;
		resetHooks: typeof resetHooks;
	};

	fromFunctionComponent: <P = {}>(
		render: FC<P>,
		componentType: typeof Roact.Component,
	) => FromFunctionComponent.FunctionComponentConstructor<P>;
};

// Function Component
declare namespace FromFunctionComponent {
	interface FunctionComponentState {
		[id: number]: unknown;
	}

	interface FunctionComponent<P = {}> extends Roact.Component<P, FunctionComponentState> {
		/**
		 * The first hook in the linked list.
		 */
		firstHook?: Hook;

		/**
		 * A linked list of effects.
		 */
		readonly effects: LinkedList<Effect>;

		/**
		 * A linked list of layout effects.
		 */
		readonly layoutEffects: LinkedList<LayoutEffect>;

		/**
		 * Sets the memoized state of a hook. Calls the updater function with the current state.
		 *
		 * @param id - The numerical id of the hook.
		 * @param reducer - Returns a new state from the current state.
		 */
		setHookState<T>(id: number, reducer: (currentState: T) => T): void;

		/**
		 * Sets up hooks & calls the render function passed to `create`.
		 */
		render(): Roact.Element;
	}

	interface FunctionComponentConstructor<P = {}> extends Roact.ComponentConstructor<P, FunctionComponentState> {
		defaultProps: Partial<P>;
		validateProps?: (props: P) => LuaTuple<[boolean, string?]>;
	}
}
