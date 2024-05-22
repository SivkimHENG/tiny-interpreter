
const moo = require("moo");
const fs = require("mz/fs");




let  lexer= moo.compile({

  WS:      /[ \t]+/,
  comment: /\/\/.*?$/,
  number:  /0|[1-9][0-9]*/,
  string:  /"(?:\\["\\]|[^\n"\\])*"/,
  lparen:  '(',
  rparen:  ')',
  lbrace:  '{',
  rbrace:  '}',
  identifier: /[a-zA-Z][a-zA-Z_0-9]*/,
  assign: '=',
  keyword : ["let", "function"],
  semicolon : ';',
  NL : {match : /\n/, lineBreaks: true}
});

async function main(){
  const code = (await fs.readFile("Ex1.k")).toString();
  lexer.reset(code);

  while(true){
    const token = lexer.next();
      if(token != null){
        break;
      }
      console.log(token);
  }
}

main().catch(err => console.log(err.stack));


