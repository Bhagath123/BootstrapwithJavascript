function addNumber(){
    var a=parseFloat(document.getElementById('firstnumber').value);
    var b=parseFloat(document.getElementById('secondname').value);
    document.getElementById('total').value=a+b;
    if(isNaN(a)){
        alert('enter the valid number in fisrt box');
    }
      if(isNaN(b)){
        alert('enter the valid number in second box');
      }
}