(function() {

    var L = runes.lexer.L;

    //var a = 1 + 1

    L("RESERVED_WORD", {
        "KEYWORD": [ "var" ]
    });

    L("SYMBOL", {
        "ASSIGMENT": /=/,
        "ADD": /\+/
    });

    L("WORD", {
        "INDETIFICATOR": /[a-z,A-Z]/
    });
    
    L("NUMBER", {
        "INTEGER": /\d/
    });

    L("SPACE", {
        "WHITESPACE": / /
    });

})();