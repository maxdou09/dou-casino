var a;
var i =0 ;
    var images=['../chiffre/0.jpg','../chiffre/1.jpg','../chiffre/2.jpg','../chiffre/3.jpg',
    '../chiffre/4.jpg','../chiffre/5.jpg','../chiffre/6.jpg','../chiffre/7.jpg',
    '../chiffre/8.jpg','../chiffre/9.jpg','../chiffre/10.jpg','../chiffre/11.jpg',
    '../chiffre/12.jpg','../chiffre/13.jpg','../chiffre/14.jpg','../chiffre/15.jpg',
    '../chiffre/16.jpg','../chiffre/17.jpg','../chiffre/18.jpg','../chiffre/19.jpg',
    '../chiffre/20.jpg','../chiffre/21.jpg', '../chiffre/22.jpg','../chiffre/23.jpg',
    '../chiffre/24.jpg','../chiffre/25.jpg','../chiffre/26.jpg','../chiffre/27.jpg',
    '../chiffre/28.jpg','../chiffre/29.jpg','../chiffre/30.jpg','../chiffre/31.jpg',
    '../chiffre/32.jpg','../chiffre/33.jpg','../chiffre/34.jpg','../chiffre/35.jpg',
    '../chiffre/36.jpg'];
    
    function nb_aleatoire()
    
{
    var nombreroulette=Math.random();
    return Math.floor(nombreroulette*36);
}  
  var nombreroulette = nb_aleatoire(nombreroulette) ;



  
  function diapo()
{    
    document.images.slide.src=images[i];
    var a; 
    
    
    if(i<images.length-1)
    {
        i++;
    }
    else 
    {
        i=0;
    }
    
    

      
        
        a = setInterval("diapo()",100);
        

    
        clearTimeout(a);
        c=setTimeout("roulette()",50)
      document.getElementById("N0").src=images[nombreroulette];
  
}
    
  








function roulette()

{
    var b = document.querySelector("#gain").value ;
    var c = document.querySelector("#perte").value ;
    
    var a = document.querySelector(".pari:checked").value;
    var d = document.querySelector("#number").value ;
    if(1*d>1*b)
    {
        d=b;
        alert("Mise supérieure à la valeur du porte monnaie, la mise sera donc maximale !")
    }
    if (a==nombreroulette)
    {
        alert("Vous avez gagné "+36*d+" mille francs !");
        b=1*b+36*d;
        c=1*c-1*d;
        document.querySelector("#gain").value = b ;
        document.querySelector("#perte").value = c;
    }
    
    else if ((a=="pair" && nombreroulette%2==0 ) || (a=="impair" && nombreroulette%2==1)) 
    {
        alert("Vous avez gagné "+d+" mille francs !");
        b=1*b+1*d;
        c=1*c-1*d;
        document.querySelector("#gain").value = b ;
        document.querySelector("#perte").value = c;
    }
    else
    {
        alert("Mise perdue");
        b=1*b-1*d;
        c=1*c+1*d;
        document.querySelector("#gain").value = b ;
        document.querySelector("#perte").value = c;
    }
    
    if(b==0)
        {
            alert("Game Over ! Rafraîchissez la page pour rejouer .");
            document.querySelector("#number").disabled=true;
            document.querySelector("#number").value=0;
            
        }
    nombreroulette=nb_aleatoire(nombreroulette);



}



