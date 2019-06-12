const ConsoleStyle = require('./lib/ConsoleStyle')
const program = require('commander');
const fs = require('fs-extra');
const path = require('path');

module.exports = class CreateComponent {
    constructor(name = '', temp = 'default') {
        this.name = name;
        this.temp = temp;
        if (this.name) {
            this.newComponent = path.join(process.cwd(), this.name + '.js');
            this.init();
        }
    }
    async init() {
        try {
            const res = await fs.exists(this.newComponent);
            if (!res) {
                await this.create();
            } else {
                console.log(ConsoleStyle.red.join('%s'), `${this.name} 已存在！`);
            }
        } catch (error) {
            console.warn(error);
        }
    }
    async create() {

        const tempUrl = path.join(__dirname, `./temp/${this.temp}.js`);
        const componentFile = await fs.readFile(tempUrl, 'utf8');
        const componentContent = componentFile.replace(/\$NAME\$/g, this.name);
        if (program.read) {
            console.log(ConsoleStyle.yellow.join('%s'), componentContent);
        } else {
            await fs.outputFile(this.newComponent, componentContent);
            this.log();
        }


    }
    log() {
        console.log();
        console.log(`== ${this.name} ==`);
        console.log();
        console.log(ConsoleStyle.green.join('%s'), this.newComponent);
        console.log();
        console.log('== end ==');
        console.log();
    }
}