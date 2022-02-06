import * as React from 'react'
import * as Server from 'react-dom/server'

let Greet = () => <div>
  <h1>Hello, world!</h1>
</div>
console.log(Server.renderToString(<Greet />))