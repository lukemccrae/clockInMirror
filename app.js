  function WhatIsTheTime(time)
  {
    var minuteZero = false;
    var hourZero = false;
    var noColon = time.replace(/:/g,'')
    var hour = noColon[0] + noColon[1]
    var minute = noColon[2] + noColon[3]
    var minuteReturn = Math.abs(minute - 60) + ''
    var hourReturn;

    if(hour + minute === '1200') {
      return '12:00'
    }

    if(hour === '11') {
      hourReturn = '12'
    } else if(hour === '12') {
      hourReturn = '11'
    } else {
      var hourReturn = Math.abs(hour - 11)
    }

    if(minuteReturn === '60') {
      hourReturn = hourReturn + 1
      minuteReturn = '00'
    }

    hourReturn = hourReturn + ''

    if(hourReturn.length === 1) {
      hourReturn = '0' + hourReturn
    }

    if(minuteReturn.length === 1) {
      minuteReturn = '0' + minuteReturn
    }

    return hourReturn + ':' + minuteReturn
  }

  console.log(WhatIsTheTime("12:00"));
