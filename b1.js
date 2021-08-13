function reverse(str_input) {
    var arr = str_input.split('');
    var newArr = arr.slice()
    for (i=0;i<arr.length; i++) {
        newArr[i] = arr[arr.length-i-1]
    }
    var newString = newArr.join('')
    return (newString);
}
console.log(reverse('program'))