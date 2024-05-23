class token {
  constructor(type,literal){
    this.type = type;
    this.literal = literal;
  }

}
const TokenType = {

  ILLEGAL : "ILLEGAL",
  EOF : "EOF",

  IDEN : "IDEN" ,
  INT : "INT",

  ASSIGN : "=",
  PLUS : "+",


  COMMA : ",",
  SEMICONLON : ";",

  LPAREN : "(",
  RPAREN : ")",

  LBRACE : "{",
  RBRACE : "}", 

  FUNCTION : "FUNCTION",
  LET : "LET",
}
 
module.exports = {TokenType,token} ;