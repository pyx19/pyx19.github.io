function loaiPhanTuTrung (arr_input) {
    for (i=0;i<arr_input.length;i++) {
        var a = arr_input[i];
        if (arr_input.indexOf(a)!=arr_input.lastIndexOf(a)) {
            arr_input.splice(arr_input.lastIndexOf(a),1);
        }
    }
    return arr_input;
}
console.log(loaiPhanTuTrung([1,5,6,7,3,5,7,6]));