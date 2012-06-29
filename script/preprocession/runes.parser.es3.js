(function() {

    var R = runes.parser.R;
    var L = runes.lexer.LD;

    //var a = 1 + 1

    R("VAR_DECLARATION", {
        R1: [ L("RESERVED_WORD", "KEYWORD", "var"), L("SPACE"), L("WORD") ]
    });

    R("ADDITION", {
        R1: [ L("NUMBER"), L("SPACE"), L("SYMBOL", "ADD"), L("SPACE"), L("NUMBER") ]
    });

    R("ASSIGMENT", {
        R1: [ L("WORD"), L("SPACE"), L("SYMBOL", "ASSIGMENT") ]
    });

    R("NEXTLINE", {
        R1: [ L("NEXTLINE", "SEMICOLON") ]
    });

    

})();