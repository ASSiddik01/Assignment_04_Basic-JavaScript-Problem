// Problem-1

function seerToMon(seer) {
    if (typeof seer != "number") {
        return "Please! give a number";
    } 
    if (seer < 40) {
        return "Please! give a number greater than 40 or equal to 40";
    }
    let mon = seer / 40;
    return mon;
}

const result = seerToMon(800);
console.log(result);