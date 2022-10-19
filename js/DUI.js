var isDUI = function(str){
   var regex = /(^\d{8})-(\d$)/,
       parts = str.match(regex);
    // verficar formato y extraer digitos junto al digito verificador
    if(parts !== null){
      var digits = parts[1],
          dig_ve = parseInt(parts[2], 10),
          sum    = 0;
      // sumar producto de posiciones y digitos
      for(var i = 0, l = digits.length; i < l; i++){
        var d = parseInt(digits[i], 10);
        sum += ( 9 - i ) * d;
      }
      return dig_ve === (10 - ( sum % 10 ))%10;
    }else{
      return false;
    }
};


isDUI('00016297-5');    // true

isDUI('12345678-1');    // false
isDUI('123456789-1');   // false
isDUI('12345678-12');   // false