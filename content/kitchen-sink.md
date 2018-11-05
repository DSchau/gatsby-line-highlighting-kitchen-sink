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
