let jumlahKartu = 5;

function buatAngka(){
    let angkaBerurutan = [];

    for (let i = 1; i <= jumlahKartu; i++) {
        angkaBerurutan.push(i, i);
    }

    // console.log(angkaBerurutan);
    return angkaBerurutan;
}

function acakAngka(angkaBerurutan){
    let angkaAcak = angkaBerurutan.sort(function(){
                        return 0.5 - Math.random();
                    });
    
    return angkaAcak;
}

function periapkanKartu(angkaAcak){
    let str = '';

    angkaAcak.forEach(function(i){
        str += '<div class="kartu">'+
                '<div class="belakang">'+ i +'</div>'+
                '<div class="depan">Kartu</div>'+
                '</div>';
    })

    $('#game').append(str);
}

$(document).ready(function(){
    let angkaBerurut = buatAngka();

    let angkaAcak = acakAngka(angkaBerurut);

    periapkanKartu(angkaAcak);

    // console.log("Angka Berurutan: " + angkaBerurut);
    console.log("Angka Acak: " + angkaAcak);
})