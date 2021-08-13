function upperCase(str_input) {
    var arr = str_input.split(' ');
    for (i=0;i<arr.length;i++) {
        var newArr = [];
        newArr = arr[i].split('');
        newArr[0] = newArr[0].toUpperCase()
        arr[i] = newArr.join('');
    }
    return arr.join(' ')
}
console.log(upperCase('this is me'));