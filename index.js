// Code your solutions in this file
function writeCards(array, event) {
    let thankYou = []
    for (let i = 0; i < array.length; i++) {
        thankYou.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        }
        return thankYou;
}
function countDown(number) {
    while (number >= 0) {
        console.log (number);
        number -= 1;
    }

}