let kortlek = [];
function skapaKortlek(arr) {
    const typ = ["hjärter", "spader", "ruter", "klöver"];
    const spec = ["knekt", "dam", "kung", "ess"];
    for (a = 0; a < 4; a++) {
        for (b = 2; b < 15; b++) {
            if (b > 10) {
                kortlek.push([spec[b - 11], typ[a]]);
            } else {
                kortlek.push([b, typ[a]]);
            };
        };
    };
};
skapaKortlek(kortlek)

function addRandomCard(hand) {
    const num = Math.round(Math.random() * (kortlek.length - 1));
    hand.push(kortlek[num]);
    kortlek.splice(num, 1);

};

let spelareKort = [];
let datorKort = [];
for (i = 0; i < 2; i++) {
    addRandomCard(spelareKort);
    addRandomCard(datorKort);
};

function countScore(hand) {
    let count = 0;
    let essCount = 0;
    hand.forEach((kort) => {
        if (kort[0] == "knekt") {
            count += 10;
        } else if (kort[0] == "dam") {
            count += 10;
        } else if (kort[0] == "kung") {
            count += 10;
        } else if (kort[0] == "ess") {
            essCount++;
        } else {
            count += kort[0];
        };
    });
    if (essCount) {
        if (count + 10 + essCount < 22) {
            count += 10 + essCount;
        } else {
            count += essCount;
        };
    };
    return count;
};

let Run = true;
while (Run) {
    let val = prompt(`Datorns kort: ${datorKort[0]}
    Dina kort: ${spelareKort}
    t = ta ett kort; s = stå`);

    if (val == "t") {
        addRandomCard(spelareKort);
        if (countScore(spelareKort) > 21) {
            Run = false;
        };
    };
};