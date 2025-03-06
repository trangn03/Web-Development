# Code
```
npm create vite@latest
```

# CSS Template Setting

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  padding:0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

body {
  background-color: #c5d8f7;
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
```

# Shortcut for React

rafc 
```
import React from 'react';

const ComponentName = () => {
    return <div>ComponentName</div>;
};

export default ComponentName;
```

rafce
```
import React from 'react';

const ComponentName = () => {
    return <div>ComponentName</div>;
};

export default ComponentName;
```

rfc
```
import React from 'react';

function ComponentName() {
    return <div>ComponentName</div>;
}

export default ComponentName;
```

# Flask setup
```
from flask import Flask

app = Flask(__name__)

@app.route("/")

def index():
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True)
```