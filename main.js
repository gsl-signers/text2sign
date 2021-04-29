let words = [' ',"sen", "işitme-engelli", "söylemek", "sevmek", "seyretmek", "süper", "sorun", "saat", "sormak", "su", "susmak", "son", "sevinmek", "sıkılmak", "ses", "spor", "sınav", "sınıf", "surat", "sonra", "sebep","şimdi",
"şans",
"şarkı",
"şok",
"şeker",
"şampiyon",
"şu",
"şubat",
"şahit",
"şapka",
"şehir",
"şöyle-böyle",
"şeytan",
"şifre",
"tamam",
"telefon",
"tam",
"tümce",
"televizyon",
"turizm",
"tek",
"trafik",
"tat",
"türk",
"tekrar",
"tren",
"tatlı",
"taraf",
"top",
"ters",
"tuşlamak",
"tahmin",
"teşekkür",
"türkçe ",
"tabi",
"takmak",
"taşınmak",
"tembel",
"temizlemek",
"taksi",
"tarih",
"temiz",
"tabak",
"tanımak",
"taş",
"tatil",
"tutmak",
"üniversite",
"üç",
"üzülmek",
"üçüncü",
"ücret",
"üst",
"ünlü",
"üye",
"üflemek",
"üçgen",
"ışık",
"ızgara",
"walkman",
"zor",
"zaman",
"zarar",
"zevk",
"zorlamak",
"zeki",
"zeytin",
"zamanla",
"zayıf",
"zengin",
"zil",
"zorlanmak",
"zam",
"zihinsel",
"zannetmek",
"zevk-almak",
"zarf",
"zenci",
"zil-çalmak",
]


let autocomplete = document.getElementById("autocomplete");
let search = document.getElementById("search_");
let btn = document.getElementsByClassName("btn")[0]

search.addEventListener("keyup", (e) => {
    if (search.value.length > 0) {
        let input = search.value;
        input = input.split(" ").join(", ,").split(",");
        input = input[input.length - 1];
        console.log(e);
        autocomplete.innerHTML = search.value;

        let regex = new RegExp("^" + input + ".*", "i");

        for (let i = 0; i < words.length; i++) {
            if (words[i].match(regex)) {
                autocomplete.innerHTML += words[i].slice(
                    input.length,
                    words[i].length
                );
                break;
            }
        }
        if (e.key == "ArrowRight" || e.key ==  "Tab") {
            search.value = autocomplete.innerHTML;
        }
    }
});

search.addEventListener("keydown", (e) => {
    if (e.keyCode == 8) {
        autocomplete.innerHTML = "";
    } 
});

btn.onclick = () => {
    let ul = document.getElementById("translation");
    ul.innerHTML = ""
    let inputText = search.value.split(" ")
    for (let i = 0; i < inputText.length; i++) {
        ul.innerHTML += "<li><img src='https://www.calpardo.com/gsl/" + inputText[i] + ".gif'></img></li>"
        
    }
}