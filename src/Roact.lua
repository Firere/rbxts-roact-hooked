local modules = script:FindFirstAncestor("node_modules")

if modules:FindFirstChild("roact") then
	return require(modules.roact.src)
elseif modules:FindFirstChild("@firere") then
	return require(modules["@firere"].roact.src)
elseif script.Parent.Parent:FindFirstChild("Roact") then
	return require(script.Parent.Parent.Roact)
else
	error("Could not find Roact or @firere/roact in the parent hierarchy.")
end
