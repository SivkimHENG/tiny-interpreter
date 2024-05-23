import "./token";
import token, { TokenType } from "./token";

export class Lexer {

  constructor(input){
    this.input = input;
    this.position = 0;
    this.read_position = 0;
    this.ch = " ";
  }
}
function New(input){

  const l = new Lexer(input);
  l.readChar();
  return l;
}

Lexer.prototype.readChar = function(){
  
  if(this.read_position >= this.input.length){
    this.ch = "\0";
  } else{
    this.ch = this.input[this.read_position];
  }
  this.position = this.read_position;
  this.read_position += 1;
}


Lexer.prototype.NextToken = function (){
  var tok = new token();

  switch (this.ch) {
  case '=':
    tok = newToken(TokenType.ASSIGN, this.ch);
  case ";":
    tok = newToken(TokenType.SEMICONLON, this.ch);
  case "(":
    tok = newToken(TokenType.RPAREN, this.ch);
  case ")":
    tok = newToken(TokenType.LPAREN, this.ch);
  case "{":
    tok = newToken(TokenType.LBRACE, this.ch);
  case "}":
    tok = newToken(TokenType.RBRACE, this.ch);
  case "\0":
    tok.literal = " "
    tok.type = TokenType.EOF;
  }
  this.readChar();
  return tok;
}


function newToken(TokenType,ch){

  return new token(TokenType, String.fromCharCode(ch));
}

module.exports = Lexer;

/*function readChar(Lexer){

  if (Lexer.read_position >= Lexer.input){
    Lexer.ch = 0;
  } else {
    Lexer.ch = Lexer.input[Lexer.read_position];
  } 
  Lexer.position = Lexer.read_position;
  Lexer.read_position += 1;
}


function NextToken(Lexer) {

}*/