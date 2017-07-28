// See http://tc39.github.io/ecmascript-asyncawait/#desugaring
// async function <name>?<argumentlist><body> => 
//     function <name>?<argumentlist>{ return spawn(function*() <body>, this); }

function spawn(genF, self) {
    return new Promise(function (resolve, reject) {

        // TODO: add remaining annotated details.

    });
}
