function read(arr) {
    var n = +prompt('Nhập số thứ tự: ');
    n = n-1
    console.log('Tên: ',arr[n].name,', Tuổi: ', arr[n].age, ', Lương: ',arr[n].salary,', Chức vụ: ', arr[n].posi )
}

function create(arr) {
    var newStr = prompt('Nhập tên, tuổi, mức lương, chức vụ của nhân viên: ');
    var newArr = newStr.split(',');
    for (i = 0; i<newArr.length; i++) {
        newArr[i] = newArr[i].trim();
    }
    var newObj = {
        name: newArr[0],
        age: parseInt(newArr[1]),
        salary: newArr[2],
        posi: newArr[3]
    }
    arr.push(newObj);
    console.log(arr);
}

function update(arr) {
    var n = +prompt('Nhập số thứ tự: ');
    n = n - 1;
    var item = prompt('Bạn muốn sửa gì?');
    item = item.trim();
    item = item.toLowerCase();
    switch (item) {
       case 'tên':
           var newName = prompt('Nhập tên mới: ');
           arr[n].name = newName;
           break;
       case 'tuổi':
           var newAge = prompt('Nhập tuổi mới: ');
           arr[n].age = newAge; 
           break;
       case 'mức lương':
           var newSalary = prompt('Nhập mức lương mới: ');
           arr[n].salary = newSalary;
           break;
        case 'chức vụ' :
            var newPosi = prompt('Nhập chức vụ mới: ');
            arr[n].posi = newPosi;
            break;
    }
    console.log(arr);
}

function xoa(arr) {
    var n = +prompt('Nhập số thứ tự bạn muốn xóa: ');
    n = n - 1;
    arr.splice(n, 1);
    console.log(arr);
}

var id = [
    {name: 'Harry', age: 30, salary: '10k', posi: 'ceo'},
    {name: 'Alex',  age: 40, salary: '8k' , posi: 'coo'},
    {name: 'Simon', age: 36, salary: '12k', posi: 'president'}
]

read(id)
