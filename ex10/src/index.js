function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"

            },
            gold: true
        },
        002: {
            artist: "Edo Maajka",
            title: "Slusaj mater",
            release_year: 2000,
            id: 3,
            formats: {
                1: "CD",
                2: "Kaseta",
                3: "Digital"
            }
        }
        
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction;