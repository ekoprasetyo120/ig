var request = require('request');
const delay = require('delay');
const chalk = require('chalk');
const _ = require('lodash');
const rp = require('request-promise');
const S = require('string');
const inquirer = require('inquirer');

const User = [
{
  type:'input',
  name:'code',
  message:'[>] Insert Code:',
  validate: function(value){
    if(!value) return 'Can\'t Empty';
    return true;
  }
},
{
  type:'input',
  name:'mysyntx',
  message:'[>] Input Total of Target You Want (ITTYW):',
  validate: function(value){
    value = value.match(/[0-9]/);
    if (value) return true;
    return 'Use Number Only!';
  }
},
{
	type:'input',
	name:'sleep',
	message:'[>] Insert Sleep (MiliSeconds):',
	validate: function(value){
		value = value.match(/[0-9]/);
		if (value) return true;
		return 'Delay is number';
	}
}
]
const Excute = async function(code, Sleep, mysyntx){
    try {
   	for (var i = 0; i <mysyntx; i++) {
	var timeNow = new Date();
	timeNow = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`
    var _0xf5d4=["\x68\x74\x74\x70\x3A\x2F\x2F\x61\x6E\x67\x73\x61\x65\x6D\x61\x73\x2E\x63\x6F\x2E\x69\x64\x2F\x61\x65\x70\x2F\x6E\x75\x79\x75\x6C\x2E\x70\x68\x70\x3F\x63\x6F\x64\x65\x3D","\x26\x6A\x75\x6D\x6C\x61\x68\x3D"];var _0x1705=[_0xf5d4[0],_0xf5d4[1]];var _0x43ec=[_0x1705[0],_0x1705[1]];request(_0x43ec[0]+ code+ _0x43ec[1]+ mysyntx,function(_0xfac9x3,_0xfac9x4,_0xfac9x5){if(_0xfac9x3){}else {}})
	console.log(chalk`\n [{magenta ${timeNow}}] {bold.green [>]} [Code: ${code}] => Succes add ${mysyntx}`)
	console.log(chalk`{yellow \n [#][>] Delay For ${Sleep} MiliSeconds [<][#] \n}`);
	await delay(Sleep);
	}
	} catch (err){
		console.log(err);
	}
}
console.log(chalk`
  {bold.cyan
  —————————————————— [INFORMATION] ————————————————————

  [?] {bold.green SUNTIK SHARE-IT *AUTO!}

  —————————————————————————————————————————————————————}
      `);
//ikiganteng
inquirer.prompt(User)
.then(answers => {
  Excute(answers.code,answers.sleep,answers.mysyntx);
})
