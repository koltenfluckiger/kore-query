# Sass CSS Class Mapper

<h1>Features</h1>
<ul>
<li>Allows to map custom CSS/SASS classes for CSS/SASS Modules with Webpack</li>
<li>Preserves SASS/CSS classes that might be globally applied through other SASS/CSS files. EX: FontAwesome</li>
<li>Easy to use</li>
</ul>
<br>
<h1>How to use with React</h1>
<br>
<pre><code>
npm i --save react-scss-style-module
</pre></code>

```javascript
import React, {Component} from "react";
import ReactSCSS from 'react-scss-style-module';

import styles from './icon.module.css';

class Icon extends Component {

  constructor(props) {
    super(props);
    this.variant = ReactSCSS.bind(styles, {classes: props.variant});
  }

  render() {
    return (<span>
      <i className={this.variant}></i>
    </span>)
  }
}

export default Icon;
```

```javascript
import React, {Component} from "react";
import Mapper from 'react-scss-style-module';

import styles from './icon.module.css';

class Icon extends Component {

  constructor(props) {
    super(props);
    this.variant = ReactSCSS.bind(styles, {defaults: "rounded-icon"});
  }

  render() {
    return (<span>
      <i className={this.variant}></i>
    </span>)
  }
}

export default Icon;
```

<h1>icon.module.css</h1>
<br>

```css
.red {
  color: red;
}
```

<br>
<h1>App.js</h1>
<br>

```javascript
import React, {Component} from 'react';

import Icon from '../icon';

class App extends Component {

  render() {
    return (
      <div><Icon variant="red fas fa-home"/></div>
    )
  }
}

export default App;

```

<h1>Rendered in browser</h1>

```html
<i class="icon_red__m8-68 fas fa-home"></i>
```

```javascript
import React, {Component} from 'react';

import Icon from '../icon';

class App extends Component {

  render() {
    return (
      <div><Icon/></div>
    )
  }
}

export default App;

```
