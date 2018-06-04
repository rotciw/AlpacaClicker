 $(document).ready(function(){
        
        var x = 0;
        var y = 1;
        var q = 50;
        var z = 1000;
        var p = 25000;
        var bond = 1;
        var pol = 20;
        var pols = 0;
        var polEff =1;
        var bedre = 100;
        var totBo = 0;
        var totPo = 0;
        var totBed = 0;
        var totSm = 0;
     
        $("#opgBo").hide();
        $("#opgPo").hide();
        $("#opgSm").hide();
        $("#opgBed").hide();
        $("#kjoptBo").hide();
        $("#kjoptPo").hide();
        $("#kjoptSm").hide();
        $("#kjoptBed").hide();
     
        $("#clicker").click(function() {
            x=x+y;
            ull = x.toFixed(0);
            if (ull>=1000000000000) {
                    ull = ull/1000000000000;
                    ull = ull.toFixed(3);
                    document.getElementById("par").innerHTML =  ull + "t<img src='images/ull.png' id='alpakkaull'> <br>";
        }
			else if (ull>=1000000000) {
                    ull = ull/1000000000;
                    ull = ull.toFixed(3);
                    document.getElementById("par").innerHTML =  ull + "b<img src='images/ull.png' id='alpakkaull'> <br>";
        }
				else if (ull>=1000000) {
                    ull = ull/1000000;
                    ull = ull.toFixed(3);
                    document.getElementById("par").innerHTML =  ull + "m<img src='images/ull.png' id='alpakkaull'> <br>";
        }
                    else {
                    document.getElementById("par").innerHTML =  ull + " <img src='images/ull.png' id='alpakkaull'> <br>";}
       });   
        //Klikk alpakka
     
     
            
     //LYD HER
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'audio.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        var audioElement2 = document.createElement('audio');
        audioElement2.setAttribute('src', 'audio.mp3');
       
        var audioElement3 = document.createElement('audio');
        audioElement3.setAttribute('src', 'audio.mp3');
	  var audioElement4 = document.createElement('audio');
        audioElement4.setAttribute('src', 'audio.mp3');
      
        //audioElement.load()
        audioElement.src="lama-soundtrack.mp3";
        audioElement2.src="Horge.mp3";
        audioElement3.src="Claus.mp3";
	 	 audioElement4.src="upgrade.mp3";
        $(".play").hide();
        
        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);


        $('.play').click(function() {
            audioElement.play();
			audioElement2.volume = 1;
			audioElement3.volume = 1;
			audioElement4.volume = 1;
            $(".play").hide();
            $(".pause").show();
        });
        $('.pause').click(function() {
            audioElement.pause();
			audioElement2.volume = 0.0;
			audioElement3.volume = 0.0;
			audioElement4.volume = 0.0;
            $(".play").show();
            $(".pause").hide();
        });
       
        //klikke lyd
        $('#clicker').click(function() {
			audioElement2 .play();    
        });
      // Oppgrader lyd
        $('#opgBo').click(function(){
          
	
		audioElement4 .play();
        });
        $('#opgPo').click(function(){
           audioElement4 .play();
        });
        $('#opgSm').click(function(){
           audioElement4 .play();
        });
        $('#opgBed').click(function(){
           audioElement4 .play();
        });
        // Kjøp lyd
       $('#kjopBo').click(function(){
           audioElement3 .play();
        });
        $('#kjopPo').click(function(){
           audioElement3 .play();
        });
        $('#kjopSm').click(function(){
           audioElement3 .play();
        });
        $('#kjopBed').click(function(){
           audioElement3 .play();
        });
     
        //Repeat soundtrack
        audioElement.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        audioElement.play();
     
     if (Modernizr.localstorage) {
         
        $("#kjopBed").click(function(e){
            localStorage.setItem('kjopBed',true);
            if (x>=bedre) {
            x=x-bedre;
            bedre= bedre*1.9;
            y=y*2;
            $("#kjopBed").hide();
            $("#kjoptBed").show();
            $("#opgBed").show();
            }
            var ull = x.toFixed(0);
             if (ull>=1000000) {
                    ull = ull/1000000;
                    ull = ull.toFixed(3);
                    document.getElementById("par").innerHTML =  ull + "m <img src='images/ull.png' id='alpakkaull'> <br>";
        }
                    else {
                    document.getElementById("par").innerHTML =  ull + " <img src='images/ull.png' id='alpakkaull'> <br>";}
        });
         
           var kjopBedd = localStorage.getItem('kjopBed');
         if (kjopBedd) {
             console.log('localStorage')
               $("#kjopBed").hide();
            $("#kjoptBed").show();
            $("#opgBed").show();
            
            var ull = x.toFixed(0);
             if (ull>=1000000) {
                    ull = ull/1000000;
                    ull = ull.toFixed(3);
                    document.getElementById("par").innerHTML =  ull + "m <img src='images/ull.png' id='alpakkaull'> <br>";
        }
                    else {
                    document.getElementById("par").innerHTML =  ull + " <img src='images/ull.png' id='alpakkaull'> <br>";}
         }
            
       //OPPGRADER SAKS
        $("#opgBed").click(function(){
             localStorage.setItem('opgBed',true);
            if (x>=bedre) {
            x=x-bedre;
            bedre= bedre.toFixed(0)*1.9;
            totBed = totBed +1;
            y=y*2;
             if (bedre>=1000000) {
                    bedre = bedre/1000000;
                    bedre = bedre.toFixed(0);
                $("#opgBed").html("<img id='upgrade'  src='images/Upgrade.png'><br>Cost: " + bedre.toFixed(0) + "m <img src='images/ull.png' id='alpakkaull2'>" + 
                                 " Wool/click: " + y.toFixed(0) + " -  Upgrades: " + totBed)}
                else {
                $("#opgBed").html("<img id='upgrade'  src='images/Upgrade.png'><br>Cost: " + bedre.toFixed(0) + "<img src='images/ull.png' id='alpakkaull2'>" + 
                                 " Wool/click: " + y.toFixed(0) + " -  Upgrades: " + totBed)
                }
            }
            var ull = x.toFixed(0);
             if (ull>=1000000) {
                    ull = ull/1000000;
                    ull = ull.toFixed(3);
                    document.getElementById("par").innerHTML =  ull + "m <img src='images/ull.png' id='alpakkaull'> <br>";
        }
                    else {
                    document.getElementById("par").innerHTML =  ull + " <img src='images/ull.png' id='alpakkaull'> <br>";}
        });
         
           var opgBedd = localStorage.getItem('opgBed');
         if (opgBedd) {
             console.log('localStorage')
             
            
            
         }
        //Kjøp bonde
      $("#kjopBo").click(function(e){
         localStorage.setItem('kjopBo',true);
            if (x>=20){
                x=x-20;
                $("#kjopBo").hide();
                $("#kjoptBo").show();
                $("#opgBo").show();                
                setInterval(function(){ 
                    x=x+bond;   
                    ull = x.toFixed(0);
                    if (ull>=1000000) {
                    ull = ull/1000000;
                    ull = ull.toFixed(3);
                    document.getElementById("par").innerHTML =  ull + "m <img src='images/ull.png' id='alpakkaull'> <br>";
        }
                    else {
                    document.getElementById("par").innerHTML =  ull + " <img src='images/ull.png' id='alpakkaull'> <br>";}
                }, 1000);
            }
        });
        //Load save KjopBo
         var kjopBoo = localStorage.getItem('kjopBo');
         if (kjopBoo) {
             console.log('localStorage')
              $("#kjopBo").hide();
                $("#kjoptBo").show();
                $("#opgBo").show(); 
              setInterval(function(){ 
                    x=x+bond;   
                    ull = x.toFixed(0);
                    if (ull>=1000000) {
                    ull = ull/1000000;
                    ull = ull.toFixed(3);
                    document.getElementById("par").innerHTML =  ull + "m <img src='images/ull.png' id='alpakkaull'> <br>";
        }
                    else {
                    document.getElementById("par").innerHTML =  ull + " <img src='images/ull.png' id='alpakkaull'> <br>";}
                }, 1000);
         }
               
        $("#kjopPo").click(function(){
            localStorage.setItem('kjopPo',true);
            if (x>=1000){
                x=x-1000;
                $("#kjopPo").hide();
                $("#kjoptPo").show();
                $("#opgPo").show();
                setInterval(function(){ 
                    x=x+(pol*polEff);   
                    ull = x.toFixed(0);
                    if (ull>=1000000) {
                    ull = ull/1000000;
                    ull = ull.toFixed(3);
                    document.getElementById("par").innerHTML =  ull + "m <img src='images/ull.png' id='alpakkaull'> <br>";
        }
                    else {
                    document.getElementById("par").innerHTML =  ull + " <img src='images/ull.png' id='alpakkaull'> <br>";}
                }, 1000);
            }
        });
         //LOAD SAVE KJOPPO
         var kjopPoo = localStorage.getItem('kjopPo');
         if (kjopPoo) {
             console.log('localStorage')
                 $("#kjopPo").hide();
                $("#kjoptPo").show();
                $("#opgPo").show();
                setInterval(function(){ 
                    x=x+(pol*polEff);   
                    ull = x.toFixed(0);
                    if (ull>=1000000) {
                    ull = ull/1000000;
                    ull = ull.toFixed(3);
                    document.getElementById("par").innerHTML =  ull + "m <img src='images/ull.png' id='alpakkaull'> <br>";
        }
                    else {
                    document.getElementById("par").innerHTML =  ull + " <img src='images/ull.png' id='alpakkaull'> <br>";}
                }, 1000);
         }
         
         
        $("#kjopSm").click(function(){
            localStorage.setItem('kjopSm',true);
            if (x>=20000){
                x=x-20000;
                $(this).hide();
                $("#kjoptSm").show();
                $("#opgSm").show();
                pol = pol+200;    
            }
        });
         
         
           //LOAD SAVE KJOPPO
         var kjopSmm = localStorage.getItem('kjopSm');
         if (kjopSmm) {
             console.log('localStorage')
               $("#kjopSm").hide();
                $("#kjoptSm").show();
                $("#opgSm").show();
                pol = pol+200;  
                   
         }
        $("#opgBo").click(function(){
            if (x>=q){
                x=x-q;
                q=q*1.4;
                totBo = totBo + 1;
                bond=bond*1.4;
                pris = q.toFixed(0);
                if (pris>=1000000) {
                    pris = pris/1000000;
                    pris=pris.toFixed(2);
                $("#opgBo").html("<img id='upgrade'  src='images/Upgrade.png'><br>Cost: " + pris + "m <img src='images/ull.png' id='alpakkaull2'>" + 
                                 " Wool/s: " + bond.toFixed(0) + " -  Upgrades: " + totBo)}
                else {
                $("#opgBo").html("<img id='upgrade'  src='images/Upgrade.png'><br>Cost: " + pris + "<img src='images/ull.png' id='alpakkaull2'>" + 
                                 " Wool/s: " + bond.toFixed(1) + " -  Upgrades: " + totBo)
                }
            }
        });
        $("#opgPo").click(function(){
            if (x>=z){
                x=x-z;
                z=z*1.4;
                totPo = totPo +1;
                polEff=polEff*1.2;
                pols = polEff * 20;
                pris = z.toFixed(0);
                   if (pris>=1000000) {
                    pris = pris/1000000;
                    pris=pris.toFixed(2);
                $("#opgPo").html("<img id='upgrade'  src='images/Upgrade.png'><br>Cost: " + pris + "m <img src='images/ull.png' id='alpakkaull2'>" + 
                                 " Wool/s: " + pols.toFixed(0) + " -  Upgrades: " + totPo)}
                else {
                $("#opgPo").html("<img id='upgrade'  src='images/Upgrade.png'><br>Cost: " + pris + "<img src='images/ull.png' id='alpakkaull2'>" + 
                                 " Wool/s: " + pols.toFixed(1) + " -  Upgrades: " + totPo)
                }
               
            }
       
        });
        $("#opgSm").click(function(){
            if (x>=p){
                x=x-p;
                pol=pol+200;
                totSm = totSm + 1;
                p=p*1.5;
                pris = p.toFixed(0);
                     if (pris>=1000000) {
                    pris = pris/1000000;
                    pris=pris.toFixed(2);
                $("#opgSm").html("<img id='upgrade'  src='images/Upgrade.png'><br>Cost: " + pris + "m <img src='images/ull.png' id='alpakkaull2'> " + 
                                pol/20 + " Polish Men: " +  " -  Upgrades: " + totSm)}
                else {
                $("#opgSm").html("<img id='upgrade'  src='images/Upgrade.png'><br>Cost: " + pris + "<img src='images/ull.png' id='alpakkaull2'> " + 
                                 pol/20 + " Polish Men: " +  " -  Upgrades: " + totSm)
                }
               
            }
       
        });
 
	 
 
     
//INFO
  var moveLeft = 20;
  var moveDown = 10;
	//info 1
  $('#info1').hover(function(e) {
    $('div#pop-up').show()
	.css('top', e.pageY + moveDown)
	.css('left', e.pageX + moveLeft)
	.appendTo ('body');
  }, function() {
    $('div#pop-up').hide();
  });
	 
	$('#info1').mousemove(function(e){
		$('div#pop-up').css('top', e.pageY + moveDown).css ('left', e.pageX + moveLeft);
	});
 //INFO 2
  $('#info2').hover(function(e) {
    $('div#pop-up2').show()
	.css('top', e.pageY + moveDown)
	.css('left', e.pageX + moveLeft)
	.appendTo ('body');
  }, function() {
    $('div#pop-up2').hide();
  });
	 
	$('#info2').mousemove(function(e){
		$('div#pop-up2').css('top', e.pageY + moveDown).css ('left', e.pageX + moveLeft);
	});
	 //INFO 3
  $('#info3').hover(function(e) {
    $('div#pop-up3').show()
	.css('top', e.pageY + moveDown)
	.css('left', e.pageX + moveLeft)
	.appendTo ('body');
  }, function() {
    $('div#pop-up3').hide();
  });
	 
	$('#info3').mousemove(function(e){
		$('div#pop-up3').css('top', e.pageY + moveDown).css ('left', e.pageX + moveLeft);
	});
	 //INFO 4
  $('#info4').hover(function(e) {
    $('div#pop-up4').show()
	.css('top', e.pageY + moveDown)
	.css('left', e.pageX + moveLeft)
	.appendTo ('body');
  }, function() {
    $('div#pop-up4').hide();
  });
	 
	$('#info4').mousemove(function(e){
		$('div#pop-up4').css('top', e.pageY + moveDown).css ('left', e.pageX + moveLeft);
	});
	 
	 //CHANGELOG
	
	 // Get the modal
var modal = document.getElementById('changepop');
// Get the button that opens the modal
var btn = document.getElementById("changelog");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


    //SAVE!!!!!!!!!!!! 
    $("#save").click(function(){
        
	var save = {
    x: x,
	y: y,
	q: q,
	z: z,
	p: p,
	bond: bond,
	pol: pol,
	pols: pols,
	polEff: polEff,
	bedre: bedre,
	totBo: totBo,
	totPo: totPo,
	totBed: totBed,
	totSm: totSm,
	
}
	
    
    //SAVE
	localStorage.setItem("save",JSON.stringify(save));
	alert("You have successfully saved.");
	
	});

	
	var savegame = JSON.parse(localStorage.getItem("save"));
	
	if (typeof savegame.x !== "undefined") x = savegame.x;
	if (typeof savegame.y !== "undefined") y = savegame.y;
	if (typeof savegame.q !== "undefined") q = savegame.q;
	if (typeof savegame.z !== "undefined") z = savegame.z;
	 if (typeof savegame.p !== "undefined") p = savegame.p;
	 if (typeof savegame.bond !== "undefined") bond = savegame.bond;
	 if (typeof savegame.pol !== "undefined") pol = savegame.pol;
	 if (typeof savegame.pols !== "undefined") pols = savegame.pols;
	 if (typeof savegame.polEff !== "undefined") polEff = savegame.polEff;
	 if (typeof savegame.bedre !== "undefined") bedre = savegame.bedre;
	 if (typeof savegame.totBo !== "undefined") totBo = savegame.totBo;
	 if (typeof savegame.totPo !== "undefined") totPo = savegame.totPo;
	 if (typeof savegame.totBed !== "undefined") totBed = savegame.totBed;
	 if (typeof savegame.totSm !== "undefined") totSm = savegame.totSm;




  




  }  
   
  

	
  });
