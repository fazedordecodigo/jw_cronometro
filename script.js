function time() {
    var contM = 00;
    today = new Date();
    m = today.getMinutes();
    s = 59 - today.getSeconds();

    setTimeout('time()', 500);
    
    if (m > 29) {
      contM = 59 - m;
    } else {
      contM = 29 - m;
    }
    if (s < 10) {
      s = "0" + s
    }

    document.getElementById('relogio').innerHTML = contM + ':' + s;
  }