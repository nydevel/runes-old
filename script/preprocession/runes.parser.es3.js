(function() {

    var R = runes.parser.R;
    var L = runes.lexer.L;

    //var a = 1 + 1

    R("VAR_DECLARATION", {
        R1: [ L("RESERVED_WORD", "KEYWORD", "var"), L("SPACE"), L("WORD") ]
    });

    R("ASSIGMENT", {
        R1: [ R("VAR_DECLARATION"), L("SPACE"), L("SYMBOL", "ASSIGMENT") ]
    });

    R("ADDITION", {
        R1: [ L("NUMBER"), L("SPACE"), L("SYMBOL", "ADD"), L("SPACE"), L("NUMBER") ]
    });

})();