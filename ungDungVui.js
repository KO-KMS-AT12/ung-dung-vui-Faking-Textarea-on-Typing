var arr = ['T', 'Ô', 'I', ' ', 'L', 'À', ' ', 'M', 'Ộ', 'T', ' ', 'C', 'O', 'D', 'E', 'R', ' ', '!', '!', '!']

function nhapTuBanPhim() {
    var txt = document.getElementById("txt");
    var demKiTu = txt.value.length;
    console.log(demKiTu);
    if (demKiTu > 0) {
        for (let i = 0; i < arr.length; i++) {
            // txt.value += arr[i];
            //
            // if (demKiTu == 15) {
            //     txt.value === '';
            // }

            if (demKiTu === 1) {
                txt.value = "T"
            }
            if (demKiTu === 2) {
                txt.value = "TO"
            }
            if (demKiTu === 3) {
                txt.value = 'TOI'
            }
            if (demKiTu === 4) {
                txt.value = 'TOI '
            }
            if (demKiTu === 5) {
                txt.value = 'TOI L'
            }
            if (demKiTu === 6) {
                txt.value = "TOI LA"
            }
            if (demKiTu === 7) {
                txt.value = "TOI LA "
            }
            if (demKiTu === 8) {
                txt.value = "TOI LA M"
            }
            if (demKiTu === 9) {
                txt.value = "TOI LA MO"
            }
            if (demKiTu === 10) {
                txt.value = "TOI LA MOT"
            }
            if (demKiTu === 11) {
                txt.value = "TOI LA MOT "
            }
            if (demKiTu === 12) {
                txt.value = "TOI LA MOT C"
            }
            if (demKiTu === 13) {
                txt.value = "TOI LA MOT CO"
            }
            if (demKiTu === 14) {
                txt.value = "TOI LA MOT COD"
            }
            if (demKiTu === 15) {
                txt.value = "TOI LA MOT CODE"
            }
            if (demKiTu === 16) {
                txt.value = "TOI LA MOT CODER"
            }
            if (demKiTu > 16) {
                txt.value = '';
            }
        }
    }
}

nhapTuBanPhim();