local hoc = require(script.hoc)
local hooks = require(script.hooks)
local wrapCreateElement = require(script.wrapCreateElement)
local Roact = require(script.Roact)

-- Wrap Roact.createElement to support hooks in function components
wrapCreateElement(Roact)

return {
	-- HOC
	withHooks = hoc.withHooks,
	withHooksPure = hoc.withHooksPure,

	-- Hooks
	useBinding = hooks.useBinding,
	useCallback = hooks.useCallback,
	useContext = hooks.useContext,
	useEffect = hooks.useEffect,
	useMemo = hooks.useMemo,
	useMutable = hooks.useMutable,
	useReducer = hooks.useReducer,
	useRef = hooks.useRef,
	useState = hooks.useState,
}
