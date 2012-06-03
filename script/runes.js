(function () {

    var errorCallback = undefined;

    runes = {
        run: function(source) {
            try {
                if (typeof source === "string") {
                    //preprocess code
                    var lexList = runes.lexer.analize(source);
                    var languageNodes = runes.parser.analize(lexList);
                    //code is valid. now we can run it
                    runes.vm.run(languageNodes);
                } else {
                    throw new Error("for the moment only compilation from string is supported");
                }
            } catch (e) {
                if (this.onError) {
                    this.onError(e);
                } else {
                    throw e;
                }
            }
        },
        onError: undefined
    }

})();