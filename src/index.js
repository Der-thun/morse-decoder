const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const decodTable = {
	'00': '',
  '10': '.',
  '11': '-',
};  


function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i += 10) {
    if (expr[i] === '*') {result += ' '; continue }
        let tempResult = '';
        for(let j = 0; j < 10; j += 2) {
        	let temp = expr.slice((i + j), (i + j + 2));
        	tempResult += decodTable[temp];          
        };
        
        result += MORSE_TABLE[tempResult];
    };
    return result;
};

module.exports = {
    decode
}