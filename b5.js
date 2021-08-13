function validDateTime(day,month,year) {
    var check = false;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (day>0 && day <= 31) {
                check = true;
            }
            break;
        case 2:
            if (year%4!=0 && year&100==0 && year&400!=0) {
                if (day>0 && day<=28) {
                    check = true;
                }
            } else {if (day<0 && day<=29) {
                check = true;
            }}
            break;
        default:
            if (day>0 && day<=30) {
                check = true;
            }
            break;
    }
    if (check) {
        var newDay = day + 1;
        var newMonth = month;
        var newYear = year;
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
               if (day==31) {
                   newDay = 1;
                   newMonth = month + 1
               }
               break;
            case 2:
                if (year%4!=0 && year&100==0 && year&400!=0) {
                    if (day==28) {
                        newDay = 1;
                        newMonth = month + 1
                    } 
                } else {
                    if (day==29) {
                        newDay = 1;
                        newMonth = month + 1
                    }
                }
                break;
            case 12:
                if (day == 31) {
                    newDay = 1;
                    newMonth = 1;
                    newYear = year + 1;
                }
                break;
            default:
                if (day == 30) {
                    newDay = 1;
                    month += 1;
                }
                break;
        }
        console.log('Ngày ',day,'/',month,'/',year,' là ngày hợp lệ');
        console.log('Ngày tiếp theo là: ',newDay,'/',newMonth,'/',newYear);
    }
} 
validDateTime(31,12,2019)