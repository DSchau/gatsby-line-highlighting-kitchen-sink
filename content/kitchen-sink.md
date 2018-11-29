---
title: Kitchen Sink
---

## JavaScript

### `highlight-line`

```js
function Hello() {
  return `hello world`; // highlight-line
}
```

````
```js
function Hello() {
  return `hello world`; // highlight-line
}
```
````

### `highlight-next-line`

```js
function Hello() {
  // highlight-next-line
  return `hello world`;
}
```

````
```js
function Hello() {
  // highlight-next-line
  return `hello world`;
}
```
````

### `highlight-start` & `highlight-end`

```js
function Hello() {
  // highlight-start
  var a = 'b';
  return a + 'b';
  // highlight-end
}
```

````
```js
function Hello() {
  // highlight-start
  var a = 'b';
  return a + 'b';
  // highlight-end
}
```
````

### Multiple `highlight-start` & `highlight-end` in snippet

```js
if (highlights.length > 0) {
  return split.map((line, i) => {
    if (highlights.includes(i + 1)) {
      // highlight-start
      return {
        highlighted: true,
        code: wrap(line),
      }
      // highlight-end
    }
    // highlight-start
    return {
      code: line,
    }
    // highlight-end
  })
}
```

````
```js
if (highlights.length > 0) {
  return split.map((line, i) => {
    if (highlights.includes(i + 1)) {
      // highlight-start
      return {
        highlighted: true,
        code: wrap(line),
      }
      // highlight-end
    }
    // highlight-start
    return {
      code: line,
    }
    // highlight-end
  })
}
```
````

### `highlight-range`

```js
function Hello() {
  // highlight-range{1,2,4-5}
  var a = 'b';
  var c = 'd';
  var e = 'f';
  var g = 'h';
  return a + c + e + g;
}
```

````
```js
function Hello() {
  // highlight-range{1, 2, 4-5}
  var a = 'b';
  var c = 'd';
  var e = 'f';
  var g = 'h';
  return a + c + e + g;
}
```
````

## HTML

```html
<div>
  <h1>Hello World</h1> <!-- highlight-line -->
</div>
```

````
```html
<div>
  <h1>Hello World</h1> <!-- highlight-line -->
</div>
```
````

## CSS

```css
.red {
  /* highlight-start */
  background-color: blue;
  color: red;
  /* highlight-end */
}
```

````
```css
.red {
  /* highlight-start */
  background-color: blue;
  color: red;
  /* highlight-end */
}
```
````

## YAML

```yaml
- thing: true
# highlight-next-line
- thing: false
```

````
```yaml
- thing: true
# highlight-next-line
- thing: false
```
````

## JSX

```jsx
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}{/* highlight-line */}
      </button>
    );
  }
}
```

````
```jsx
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}{/* highlight-line */}
      </button>
    );
  }
}
```
````

### Start/end

```jsx
class Square extends React.Component {
  render() {
    // highlight-start
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
    // highlight-end
  }
}
```

````
```jsx
class Square extends React.Component {
  render() {
    // highlight-start
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
    // highlight-end
  }
}
```
````

### highlight-range

```jsx
class Square extends React.Component {
  render() {
    // highlight-range{2-4}
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

````
```jsx
class Square extends React.Component {
  render() {
    // highlight-range{2-4}
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```
````

### kitchen-sink

```jsx
class FlavorForm extends React.Component { // highlight-line
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // highlight-next-line
    this.setState({value: event.target.value});
  }

  // highlight-start
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  // highlight-end

  render() {
    return (
      { /* highlight-range{1,4-9,12} */ }
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

````
```jsx
class FlavorForm extends React.Component { // highlight-line
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // highlight-next-line
    this.setState({value: event.target.value});
  }

  // highlight-start
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  // highlight-end

  render() {
    return (
      // highlight-range{1,4-9,12}
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
````

```css
html {
  /* highlight-range{1,2} */
  height: 100%;
  width: 100%;
}
```

````
```css
html {
  /* highlight-range{1,2} */
  height: 100%;
  width: 100%;
}
```
````

## Existing Behavior (ranges)

```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

````
```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```
````

# Gatsby Remark Embed Snippet

## CSS

`embed:css-range.css`

```
html {
  /* highlight-range{1,2} */
  height: 100%;
  width: 100%;
}
```

`embed:css-line-next-line.css`

```
html {
  /* highlight-next-line */
  height: 100%;
}

* {
  box-sizing: border-box; /* highlight-line */
}
```

## HTML

`embed:html-range.html`

```
<html>
    <body>
    <!-- highlight-range{2} -->
    <p>
        highlighted
    </p>
    </body>
</html>
```

`embed:html-line-next-line.html`

```
<html>
  <body>
    <h1>highlighted</h1> <!-- highlight-line -->
    <p>
      <!-- highlight-next-line -->
      highlighted
    </p>
  </body>
</html>
```

## JSX

### Line range

`embed:jsx-range.jsx`

```
<ul>
  {/* highlight-range{2-4} */}
  <li>Not highlighted</li>
  <li>Highlighted</li>
  <li>Highlighted</li>
  <li>Highlighted</li>
  <li>Not highlighted</li>
</div>
```

### Line & next-line

`embed:jsx-line-next-line.jsx`

```
<div>
<button>Add Item</button> {/* highlight-line */}

<ReactCSSTransitionGroup
  transitionName="example"
  transitionEnterTimeout={500}
  transitionLeaveTimeout={300}>
  {/* highlight-next-line */}
  {items}
</ReactCSSTransitionGroup>
</div>
```

## YAML

`embed:yaml-line-next-line.yaml`

```
foo: "highlighted" # highlight-line
bar: "not highlighted"
# highlight-next-line
baz: "highlighted"
qux: "not highlighted"
```
## highlight-line (jsx and html)

Re: [this comment](https://github.com/gatsbyjs/gatsby/pull/10202#issuecomment-442890458)

```jsx
import React from 'react';

export default function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1> {/* highlight-line */}
    </React.Fragment>
  )
}
```

````

```jsx
import React from 'react';

export default function App() {
  return (
    <React.Fragment>
      <h1>Hello World</h1> {/* highlight-line */}
    </React.Fragment>
  )
}
```

````

```html
<div>
  <h1>Hello World</h1> <!-- highlight-line -->
</div>
```

````
```html
<div>
  <h1>Hello World</h1> <!-- highlight-line -->
</div>
```
````
