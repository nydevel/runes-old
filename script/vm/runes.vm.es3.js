(function () {

    var C = runes.vm.C;

    //var a = 1 + 1

    //R("VAR_DECLARATION", {
    //    R1: [L("RESERVED_WORD", "KEYWORD", "var"), L("SPACE"), L("WORD")]
    //});

    //R("ADDITION", {
    //    R1: [L("NUMBER"), L("SPACE"), L("SYMBOL", "ADD"), L("SPACE"), L("NUMBER")]
    //});

    //R("ASSIGMENT", {
    //    R1: [L("WORD"), L("SPACE"), L("SYMBOL", "ASSIGMENT")]
    //});

    C("DO_VAR_DECLARATION", {
        R: "VAR_DECLARATION",
        F: function (vm, lexList) {
            vm.defineVariable([lexList[2].lexValue], undefined);
        }
    });

    C("DO_ADDITION", {
        R: "ADDITION",
        F: function (vm, lexList) {
            vm.setStack(Number(lexList[0].lexValue) + Number(lexList[4].lexValue));
        }
    });

    C("DO_ASSIGMENT", {
        R: "ASSIGMENT",
        F: function (vm, lexList) {
            vm.defineVariable(lexList[0].lexValue, vm.getStack());
        }
    });



})();