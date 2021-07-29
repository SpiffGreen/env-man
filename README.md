## Env-Manager

### Methods
* `config` - This method will load environment variables into process.env object from the `/folder/.env` where folder is a parameter passed to the config method.
* `set` - This method accepts two parameters:
    
    * `parameter 1` key - set on process.env object
    * `parameter 2` the value to be stored on process.env[key]
* `get` - This method accepts one parameter: `key` and returns the value of `process.env[key]`;
* `loadFromFile` - Accepts one parameter: `filePath`, this method loads environment variables from specified filePath into the process.env object for use in the current executing program.

### Installation
```sh
npm install env-manager
```

### Examples
#### Basic Usage
The example below will load environment variables from a `.env` file in the current folder.
```js
require("env-manager").config();
```

#### Set values
```js
const envManager = require("env-manager");
envManager.set("DB_HOST", "...."); // process.env.DB_HOST = "...."
```

#### Get values
```js
const envManager = require("env-manager");
console.log(envManager.get("DB_HOST"));
// outputs value of process.env.DB_HOST
```

### Contributions
Your contributions are welcome no matter how small.

### License
[MIT](./LICENSE) Licensed.