let kortlek = [];
function skapaKortlek(arr) {
    const typ = ["hjärter ", "spader ", "ruter ", "klöver "];
    const spec = ["knekt", "dam", "kung", "ess"];
    typ.forEach((t) => {
        for (b = 2; b < 15; b++) {
            if (b > 10) {
                kortlek.push([spec[b - 11], t]);
            } else {
                kortlek.push([b, t]);
            };
        };
    });
};
skapaKortlek(kortlek);

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

    if (val == "s") {
        while (countScore(datorKort) < 17) {
            addRandomCard(datorKort);
        };
        Run = false;
    };
};

let Vinnare = "";
if (countScore(spelareKort) > 21) {
    Vinnare = "Dator";
} else if (countScore(spelareKort) > countScore(datorKort) || countScore(datorKort) > 21) {
    Vinnare = "Spelaren";
} else if (countScore(datorKort) > countScore(spelareKort)) {
    Vinnare = "Dator";
} else {
    Vinnare = "Oavgjort";
};

prompt(`Datorns kort: ${datorKort}
Dina kort: ${spelareKort}
Vinnare: ${Vinnare}
enter = exit`);