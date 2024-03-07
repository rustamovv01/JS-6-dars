let user = +prompt(`Biror bir sonni tanlang \n 1.Quduq \n 2.Qaychi \n 3.Qog'oz`);
let comp = Math.floor(Math.random()*3);

if (comp === 0 && user === 1 || comp === 1 && user === 2 || comp === 2 && user === 0) {
    alert(`Comp ${comp} : ${user} User \n Comp win`);
} else if (comp === user) {
    alert(`Comp ${comp} : ${user} User \n Draw`);
} else {
    alert(`Comp ${comp} : ${user} User \n User win`);
}

// let ism = prompt('Ism kitiring: ');

// if (ism === 'Muhammadaziz') {
//     alert('Xush kelipsiz siz ismni togri kiritdingiz!');
// } else {
//     alert('Siz ismni notogri kiritdingiz qaytadan urinip koring!')
// }
