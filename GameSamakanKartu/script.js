let jumlahKartu = 5;
let kartuPertama = kartuKedua = 0;

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
        str += '<div class="kartu" nilai="'+ i +'">'+
                '<div class="belakang">'+ i +'</div>'+
                '<div class="depan">Kartu</div>'+
                '</div>';
    })

    $('#game').append(str);
}

function aturanMain(){
    $('.kartu').on('click', function(){
        $(this).addClass('buka');
    
        if(kartuPertama == 0){
            // Cara 1
            kartuPertama = $(this).attr('nilai');

            // Cara 2 - Jika ingin mengambil dari class belakang
            // kartuPertama = $(this).children('.belakang').text();
        }else{
            kartuKedua = $(this).attr('nilai');

            if(kartuPertama == kartuKedua){
                $(".buka").addClass('betul');
                $(".betul").removeClass('buka');
                kartuPertama = kartuKedua = 0;
            }else{
                kartuPertama = kartuKedua = 0;
                $(this).one("transitionend", function(){
                    $(".kartu").removeClass('buka');
                });
            }
        }
    });
}

$(document).ready(function(){
    let angkaBerurut = buatAngka();

    let angkaAcak = acakAngka(angkaBerurut);

    periapkanKartu(angkaAcak);

    aturanMain();

    // console.log("Angka Berurutan: " + angkaBerurut);
    // console.log("Angka Acak: " + angkaAcak);
})