var term = {
    Belarus: 3,
    Ukraine: 8,
    Baskiria: 20,
    USA: 54,
    Russia: -20
}


var i = 0;
var sum = 0;
for (var strana in term) {
    sum += term[strana]
    i++;
}
console.log(sum / i);

function MaxTerm(obj) {
    var max;
    for (var key in obj) {
        if (max < obj[key] || max == undefined) {
            max = obj[key];
        }
    }
    return max;
}

console.log(MaxTerm(term));