var oddButton=document.getElementById('odd');
var evenButton=document.getElementById('even');
var oddLi=document.querySelectorAll('li:nth-child(odd)');
var evenLi=document.querySelectorAll('li:nth-child(even)');

  oddButton.addEventListener('mouseenter',()=>{
      console.log('oddentered');
      
    
    oddLi.forEach(y=>
        {
            y.classList.add('odd');
        });
        evenLi.forEach(x =>{
            x.classList.remove('even');
        });
});
 evenButton.addEventListener('mouseenter',()=>{
    console.log('even entered');
    
 evenLi.forEach(x =>
     {
        x.classList.add('even');
     
     });
  
     oddLi.forEach(y =>{
         y.classList.remove('odd');
        
    });
});
