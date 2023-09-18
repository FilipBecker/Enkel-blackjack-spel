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