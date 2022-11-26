
document.getElementById("next").disabled=true;
document.getElementById("code").style.display="none";
document.getElementById("forma").style.display="block";
document.getElementById("formino").style.display="none";
document.getElementById("nexti").disabled=true;
document.getElementById("back").disabled=true;



function indietro(){
document.getElementById("forma").style.display="block";
document.getElementById("formino").style.display="none";
document.body.style.backgroundImage = "url('https://www.juventus.com/images/image/private/t_album/dev/idztatiis9lkyro3zahb.jpg')";



}











//Inizializzo le variabili

document.getElementById("next").disabled=true;



document.getElementById("pets-name").value="";
document.getElementById("pets-breed").value="";
document.getElementById("pets-birthday").value="";
document.getElementById("pet-gender-female").checked=true;
document.getElementById("pet-gender-male").checked=false;
document.getElementById("pet-spayed").checked=true;
document.getElementById("pet-neutered").checked=false;
document.getElementById("numero").value="";
document.getElementById("email").value="";
document.getElementById("password").value="";
document.getElementById("lettura").value="";
document.getElementById("robot").value="";
document.getElementById("bottone2").disabled=false;

messaggio="";





function funzione(){
   
    document.getElementById("nexti").disabled=true;
    document.getElementById("risultato").value="";
    document.getElementById("forma").style.display="none";
    document.getElementById("formino").style.display="block";
    document.body.style.backgroundImage = "url('https://www.juventus.com/images/image/private/t_album/dev/qlrkdpxszvfd1h8ynzgj.jpg')"; 
    nome=document.getElementById("pets-name").value;
    cognome=document.getElementById("pets-breed").value;

    
         robotto=0;
        robottino();
         function robottino(){


                num1 = Math.round(Math.random() * 10);//numeri casuali da 0 a 9
                num2 = Math.round(Math.random() * 10);
                op= Math.round(Math.random() * 3);//somma, sottrazione e moltiplicazione
             if (op==0)
            {
           document.getElementById("rbt").value=num1+"+"+num2; 
           robotto=num1+num2;
        }
        if (op==1)
        {
            if (num1>num2)
            {
                document.getElementById("rbt").value=num1+"-"+num2; 
           robotto=num1-num2;
            }
            else
            {
                document.getElementById("rbt").value=num2+"-"+num1; 
                robotto=num2-num1;
            }
        }
        if (op==2)
        {
            document.getElementById("rbt").value=num2+"x"+num1; 
                robotto=num2*num1;
        }


        
        
}









        utente="";
        utente="Benvenuto ";
        utente=utente+nome;
        utente=utente+" ";
        utente=utente+cognome;
        document.getElementById("lettura").value=utente;


    }




    function controlloemail(){
        // recupero il valore della email indicata nel form
        var email=document.getElementById("email").value;
        // se non ho inserito nulla nel campo
        if(email==''){alert("Devi indicare un indirizzo email"); return false;}
        // verifico se è un indirizzo valido
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
        {
            controllofinale();
        }
        else {
           alert("L'indirizzo email che hai inserito non e' valido");
           document.getElementById("email").value=" ";
        }
        return false;
            
    }





    function controllontelefono(){
	
        var tel=document.getElementById("numero").value;  
         if (!isNaN(tel))
        {
            controllofinale();
        }
        else {
           alert("Nel mondo non esistono numeri di telefono con lettere o caratteri speciali... Inserisci un numero di telefono valido! Ricontrolla gli altri campi!");
    
        }
        return false;
      
            
    }









    function ctrobot(){
        if (document.getElementById("risultato").value==robotto){
        controllofinale();
        }
else
{
 alert("Valore errato, ma sei un robot?");
 document.getElementById("risultato").value=" ";
 document.getElementById("nexti").disabled=true;
 document.getElementById("next").style.background="red";
 robottino();
}	 
}





function controllo(){

    nome=document.getElementById("pets-name").value;
    cognome=document.getElementById("pets-breed").value;
    data=document.getElementById("pets-birthday").value;
    
    if((nome!="") && (cognome!="") && (data!="")){
    
        document.getElementById("next").disabled=false;
        document.getElementById("next").style.background="green";
    }
    else
    document.getElementById("next").disabled=true;
    }












function controllofinale(){
    nome=document.getElementById("pets-name").value;
    cognome=document.getElementById("pets-breed").value;
    data=document.getElementById("pets-birthday").value;
    tel=document.getElementById("numero").value;
    email=document.getElementById("email").value;
    p=document.getElementById("password").value;
    risultato=document.getElementById("risultato").value;
    if((nome!="") && (cognome!="") && (data!="") && (tel!="") && (email!="") && (p!="") && (risultato!="") ){

        document.getElementById("nexti").disabled=false;
        document.getElementById("nexti").style.background="green"

    }
    else

    document.getElementById("nexti").disabled=true;




}






    function finale(){
        nome=document.getElementById("pets-name").value;
        cognome=document.getElementById("pets-breed").value;
        data=document.getElementById("pets-birthday").value;

        if(document.getElementById("pet-gender-female").checked)
        sesso="Maschio";
        else
        sesso="Femmina";


        if(document.getElementById("pet-spayed").checked){
            abbonamento="Base"
        }
        else
        abbonamento="Premium";


        cellulare=document.getElementById("numero").value;
        email=document.getElementById("email").value;
        partite=document.getElementById("demo").innerHTML;
        password="La password e' sempre segreta :)";
        messaggio="";
        messaggio=messaggio+"Nome: "+nome;
        messaggio=messaggio+" Cognome: "+cognome;
        messaggio=messaggio+" Data: "+data;
        messaggio=messaggio+" Sesso: "+sesso;
        messaggio=messaggio+" Tipo Abbonamento: "+abbonamento;
        messaggio=messaggio+" N:Telefonico: "+cellulare;
        messaggio=messaggio+" Email: "+email;
        messaggio=messaggio+" Partite: "+partite;

        document.getElementById("forma").style.display="none";
        document.getElementById("formino").style.display="none";
        document.getElementById("code").style.display="block";
        document.body.style.background="url('https://www.welcometoitalia.com/wp-content/uploads/2021/01/TORINO_Allianz-Stadium.jpg')";

        jQuery('#code2').qrcode({
            render	: "table",		
            text	: messaggio
        });	








    }
    

    function genera_qrcode(){
	
        window.location.reload();		
            
        }