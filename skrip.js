document.getElementById('SubmitBtn').addEventListener('click', function() {
    dataPerson(); 
});

function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.nama.value.trim();
    let hobi = forms.Hoby.value.trim(); 
    let pekerjaan = forms.pekerjaan.value.trim(); 


    if (nama === '' || hobi === '' || pekerjaan === '') {
       
        let hasilDiv = document.getElementById('hasil');
        hasilDiv.innerHTML = '<p>Mohon Lengkapi Data Anda</p>';
    } else {
      
        let hasilDiv = document.getElementById('hasil');
        hasilDiv.innerHTML = `
            <p> Hasil Data Yang Anda Inputkan : </p>
            <p>Nama: ${nama}</p>
            <p>Pekerjaan: ${pekerjaan}</p>
            <p>Hobi: ${hobi}</p>
            
        `;
    }
}