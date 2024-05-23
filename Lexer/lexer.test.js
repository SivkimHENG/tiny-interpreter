const Lexer = require("@test/lexer");

test('test lexer', () => {
    const input = `=+(){},;`;
    const tests = [
        { expectedType: 'ASSIGN', expectedLiteral: "=" },
        { expectedType: 'PLUS', expectedLiteral: "+" },
        { expectedType: 'LPAREN', expectedLiteral: "(" },
        { expectedType: 'RPAREN', expectedLiteral: ")" },
        { expectedType: 'LBRACE', expectedLiteral: "{" },
        { expectedType: 'RBRACE', expectedLiteral: "}" },
        { expectedType: 'COMMA', expectedLiteral: "," },
        { expectedType: 'SEMICOLON', expectedLiteral: ";" },
        { expectedType: 'EOF', expectedLiteral: "" }
    ];

    const l = new Lexer(input);
    for (let i = 0; i < tests.length; i++) {
        const tt = tests[i];
        const tok = l.NextToken();
        expect(tok.type).toBe(tt.expectedType);
        expect(tok.literal).toBe(tt.expectedLiteral);
    }
});

