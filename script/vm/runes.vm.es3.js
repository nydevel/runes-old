(function () {

    var C = runes.vm.C;

    //var a = 1 + 1

    C("DO_VAR_DECLARATION", {
        R: "VAR_DECLARATION",
        F: function (vm, lexList) {
            vm.defineVariable([lexList[2].lexValue], undefined);
        },
        P: function (vm, lexList) {
            return "window." + lexList[2].lexValue + "=undefined;";
        }
    });

    C("DO_ADDITION", {
        R: "ADDITION",
        F: function (vm, lexList) {
            vm.setStack(Number(lexList[0].lexValue) + Number(lexList[4].lexValue));
        },
        P: function (vm, lexList) {
            return "var stack = " + lexList[0].lexValue + " + " + lexList[4].lexValue + ";";
        }
    });

    C("DO_ASSIGMENT", {
        R: "ASSIGMENT",
        F: function (vm, lexList) {
            vm.defineVariable(lexList[0].lexValue, vm.getStack());
        },
        P: function (vm, lexList) {
            return "window." + lexList[0].lexValue + " = stack;";
        }
    });

    C("DO_NEXTLINE", {
        R: "NEXTLINE",
        F: function (vm, lexList) {
            vm.setStack(null);
        },
        P: function (vm, lexList) {
            return "stack = null";
        }
    });



})();