# What I did?

 - Imported React and ReactDOM through CDN and rendered HTML elements using React.

# What I learnt?

## About React.createElement(type, props, child):
- It creates an **object** with following main properties: type (type of element), props (attributes of that element) (is an object) and ref (which is `'null'`).
- Internal structure of this object:

		{
			"$$typeof": Symbol("react.element"),
			props: {
				"attribute-1": "...",
				"attribute-2": "...",
				"children": "can be a single element, node or array of it"
			},
			ref: null
			}

- It has type of `Symbol.for('react.element')`.

## Nested elements:
- Created nested elements using `React.createElement()` and saw how nesting creates messy code and makes difficult maintaining elements. Hence the need of using **JSX** and **Babel**.
