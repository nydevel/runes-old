(function () {

    if (runes) {

        var ruleRegistrationArray = [];


        var getArrayOfRules = function (rule, lexArrayToAnalize) {
            var matchedRules = [];
            for (var i = 0; i < lexArrayToAnalize.length; i++) {
                var j = 0;
                var isThisRuleMatched = true;
                var currentRuleLexs = [];
                while (j < rule.ruleDescription.R1.length) {
                    var currentLex = lexArrayToAnalize[i + j];
                    if (!currentLex) {
                        isThisRuleMatched = false;
                        break;
                    }
                    var subRule = rule.ruleDescription.R1[j];
                    if (subRule.lexName !== currentLex.lexName) {
                        isThisRuleMatched = false;
                    }
                    currentRuleLexs.push(currentLex);
                    j++;
                }
                if (isThisRuleMatched) {
                    matchedRules.push({
                        ruleLexs: currentRuleLexs,
                        ruleName: rule.ruleName,
                        ruleDescription: rule.ruleDescription
                    });
                }
            }
            return matchedRules;
        }

        runes.parser = {
            analize: function (lexArrayToAnalize) {
                var resultRuleArray = [];
                for (var i = 0; i < ruleRegistrationArray.length; i++) {
                    var currentRulesArray = getArrayOfRules(ruleRegistrationArray[i], lexArrayToAnalize);
                    if (currentRulesArray) {
                        for (var j = 0; j < currentRulesArray.length; j++) {
                            resultRuleArray.push(currentRulesArray[j]);
                        }
                    }
                }
                return resultRuleArray;
            }
        }

        runes.parser.R = function (ruleName, ruleDescription) {
            ruleRegistrationArray.push({ "ruleName": ruleName, "ruleDescription": ruleDescription });
        }

    } else {
        throw new Error("runes module didn't loaded");
    }

})();