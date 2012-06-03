(function () {

    if (runes) {

        var commandRegistrationArray = [];

        var executeCommand = function(rule) {
            for (var i = 0; i < commandRegistrationArray.length; i++) {
                if (commandRegistrationArray[i].commandDescription.R === rule.ruleName) {
                    commandRegistrationArray[i].commandDescription.F(runes.vm, rule.ruleLexs);
                }
            }
        }

        runes.vm = {
            run: function (parsedRules, mode) {
                vm_mode = mode || "onHostDOM";
                for (var i = 0; i < parsedRules.length; i++) {
                    executeCommand(parsedRules[i]);
                }
            }
        }

        var stack = undefined;
        var vm_mode = undefined;

        runes.vm.defineVariable = function(name, value) {
            if (vm_mode === "onHostDOM") {
                window[name] = value;
            } else {
                throw new Error("unsuported mode");
            }
        }

        runes.vm.setStack = function (value) {
            stack = value;
        }

        runes.vm.getStack = function () {
            return stack;
        }

        runes.vm.C = function (commandName, commandDescription) {
            commandRegistrationArray.push({ "commandName": commandName, "commandDescription": commandDescription });
        }

    } else {
        throw new Error("runes module didn't loaded");
    }

})();