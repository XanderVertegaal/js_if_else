const AGE = 20;
const ISFEMALE = true;
const DRIVERSTATUS = 'nobob';

if (AGE > 17 & ISFEMALE == true) {
    console.log('Alright, go in then!');
} else if (AGE < 18) {
    console.log('Oi! You\'re too young!');
} else if (ISFEMALE == false) {
    console.log('Oi! No men allowed on ladies\' night!');
}

if (DRIVERSTATUS == 'bob') {
    console.log('Drive safely!');
} else {
    console.log('Who is your designated driver?');
}