function prayerTime(latitude, longitude) {
    // Penejalasan method untuk tipe yang digunakan dapat dilihat pada website aladhan.com
    fetch('http://api.aladhan.com/v1/calendar?latitude=' + latitude + '&longitude=' + longitude + '&method=4')
    .then(response => response.json())
    .then(function(response){
        // Akses Tanggal Sekarang
        let date = new Date();
        // -1 karena array API nya dimulai dari 0
        let today = date.getDate() - 1;
        let data = response.data[0].timings;

        // console.log(response.data[today]);

        let app = document.getElementById('app');
        let table = document.createElement('table');
        let tableTbody = document.createElement('tbody');

        for (let i in data){
            let row = tableTbody.insertRow();
            let name = row.insertCell(0);
            let time = row.insertCell(1);

            name.innerHTML = i;
            time.innerHTML = data[i];

            tableTbody.appendChild(row);
        }

        table.appendChild(tableTbody);
        app.appendChild(table);
    });
}

function success(position){
    // coords.latitude & coords.longtitude dapat dilihat pada
    // console.log(position);

    prayerTime(position.coords.latitude, position.coords.longitude);
}

function error(){
    // Default latitude & longitude Jakarta
    prayerTime('-6.200000', '106.816666');

    // Default latitude & longitude Makassar supaya terlihat perbedaan saat block akses lokasi 
    // prayerTime('-5.135399', '119.423790');
}

function userLocation(){
    if (!navigator.geolocation){
        alert('Geolocation tidak didukung didalam browser anda, silahkan gunakan browser lain');
    }else{
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index(){
    let app = document.getElementById('app');
    let h3 = document.createElement('h3');
    h3.innerHTML = 'Prayer Times';

    app.appendChild(h3);

    userLocation();
}

index();