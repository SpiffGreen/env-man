/**
 * @package env-manager
 * @author  Spiff Jekey-Green
 * @version 0.0.0
 */

const path = require("path");
const fs = require("fs");

class EnvManger {
    constuctor() {
        this.set = this.set.bind(this);
        this.get = this.get.bind(this);
        this.loadFromFile = this.loadFromFile.bind(this);
        this.config = this.config.bind(this);
    }

    config(envFolderPath) {
        this.loadFromFile(path.join(envFolderPath, '.env'));
    }

    set(key, value) {
        process.env[key] = value;
    }

    get(key) {
        return process.env[key];
    }

    loadFromFile(pathToEnvFile) {
        try {
            let content = fs.readFileSync(pathToEnvFile, {encoding: "utf-8"});
            content = content.split("\n");
            content.forEach(i => {
                const idx = i.indexOf("=");
                const key = i.slice(0, idx);
                const value = i.slice(idx+1);
                process.env[key.trim()] = value.trim();
            });
        } catch {
            return;
        }
    }
}

module.exports = new EnvManger();

/*
Sample usage
require("./index").config(__dirname);

console.log(process.env.SECRET);
console.log(process.env.DB_URL);
*/