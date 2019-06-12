#!/usr/bin/env node
var program = require('commander');
var appInfo = require('./package.json');
const CreateComponent = require('./src/CreateComponent');

program
    .version(appInfo.version)
    .option('-c, --comp <lang>', '创建一个组件')
    .option('-t, --temp <lang>', '指定一个组件模板')
    .option('-r, --read', '仅仅输出文件的内容，而不是创建它')
program.parse(process.argv);
if (program.comp) {
    new CreateComponent(program.comp, program.temp);
}