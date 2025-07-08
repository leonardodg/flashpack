// JavaScript Document
var Rollar = "sim";
var roll =-250;
function Fmarquee(){
var Marquee = document.getElementById("meio");
roll+=10;
     if(Rollar == "sim"){
	   Marquee.style.marginLeft =roll+"px";
	   setTimeout("Fmarquee()",1);
	  	if(Marquee.style.marginLeft=="0px")
		  Rollar = "nao";
	 }
}

interval = 10;
function Texto(){
  if(document.getElementById) {
    t = document.getElementById("mexer");
    if(t.innerHTML) {
      typingBuffer = "";
      it = 0;
      mytext = t.innerHTML;
      t.innerHTML = "";
      typeit();
    } 
  }
}

function typeit() {
  mytext = mytext.replace(/<([^<])*>/, "");  
  if(it < mytext.length) {
    typingBuffer += mytext.charAt(it);
    t.innerHTML = typingBuffer;
    it++;
    setTimeout("typeit()", interval);
  }
}

function links(){
  $('#container').tabs();	
  $('<p align="center"><a href="#"> Pr&oacute;ximo <\/a><\/p>').prependTo('#prox-1').find('a').click(function() {
  $('div').eq(1).triggerTab(2);return false;});	
  $('<p align="center"><a href="#"> Pr&oacute;ximo <\/a><\/p>').prependTo('#prox-2').find('a').click(function() {
  $('div').eq(1).triggerTab(3);return false;});	
  $('<p align="center"><a href="#"> Voltar <\/a><\/p>').prependTo('#ante-1').find('a').click(function() {
  $('div').eq(1).triggerTab(1);return false;});	
  $('<p align="center"><a href="#"> Voltar <\/a><\/p>').prependTo('#ante-2').find('a').click(function() {
  $('div').eq(1).triggerTab(2);return false;});		
}

function ajustar(){
	document.getElementById("page").height = page.document.getElementById("contLoja").scrollHeight + 10;
	document.getElementById("page").width  = page.document.getElementById("contLoja").scrollWidth + 50;  
}

function fotos() {
    $('#slideshow').cycle({
        fx:     'turnDown',
        speed:  'fast',
        timeout: 0,
        pager:  '#nav',
        pagerAnchorBuilder: function(idx, slide) {
            // return sel string for existing anchor
            return '#nav li:eq(' + (idx) + ') a';
        }
    });
}


qtd=0;
function chamar(qtd){
 if(qtd==1) fotos();
 else{
   if(qtd==2)
	 initTabs("dhtmlgoodies_tabView1",Array("RIO DO SUL","S&Atilde;O BENTO DO SUL"),0,"99%","95%",Array(false,false));
   if(qtd==3)
 initTabs("dhtmlgoodies_tabView1",Array("ESTRUTURA","HIST&Oacute;RICO","IDEOL&Oacute;GIA"),0,"99%","95%",Array(false,false,false));
     showTab("dhtmlgoodies_tabView1",1);// abas 0 nao funcionam direito nao sei pq...........
 }
}

function escrever(x){
  qtd=0;
  n=Request.QueryString("x");
  texto='';
  if(x>0&&n>0) n=0;
  if( x == 1 || n == 1){
    document.getElementById("meio").style.overflow="auto";
	document.title="PRODUTOS - Flash Pack Embalagens";
	texto = '<center><h2>PRODUTOS</h2><font size="4" color="#000000" face="Times New Roman, Times, serif">Caixas com impress&atilde;o com at&eacute; 3 cores. Papel&atilde;o micro-ondulado, onda simples, dupla e tripla.<br>Acess&oacute;rios em papel&atilde;o (tabuleiros, bups, cantoneiras). Cantoneiras de papel&atilde;o ou fibra de madeira.<br>Caixa corte e vinco, quebra sol, cesta de natal, caixa para pizza... Grandes e pequenos formatos.</font><br><font size="5"  color="#000099" face="Times New Roman, Times, serif">Desenvolvemos solu&ccedil;&otilde;es tecnol&oacute;gicas para garantir a imagem e prote&ccedil;&atilde;o do seu produto. <a href="javascript:escrever(3);"target="_self">Consute-nos!</a></font><br><img src="imagem/produto.jpg"></center>';
  }if( x == 2 || n == 2){
   qtd=3;
   	document.title="EMPRESA - Flash Pack Embalagens";
   document.getElementById("meio").style.overflow="hidden";
   texto = '<div id="dhtmlgoodies_tabView1"><div class="dhtmlgoodies_aTab"><iframe src="estrutura.html" frameborder="0"></iframe></div><div class="dhtmlgoodies_aTab" ><iframe src="historico.html" frameborder="0"></iframe></div><div class="dhtmlgoodies_aTab"><iframe src="ideologia.html" frameborder="0"></iframe></div></div>';
  }if( x == 3 || n == 3){
    qtd=2;
	document.title="CONTATOS - Flash Pack Embalagens";
    document.getElementById("meio").style.overflow="hidden";
	document.getElementById("meio").style.textAlign="center";
	texto = '<div id="dhtmlgoodies_tabView1"><div class="dhtmlgoodies_aTab"><iframe src="riodosul.html" frameborder="0"></iframe></div><div class="dhtmlgoodies_aTab"><iframe src="saobento.html" frameborder="0"></iframe></div></div>';
  }if( x == 4 || n == 4){
    qtd=1;
    document.getElementById("meio").style.overflow="auto";
	document.getElementById("meio").style.left="-5px";
   texto = '<ul id="nav"><li><a href="#"><img src="fersul/fersul.jpg" width="50" height="50"></a></li><li><a href="#"><img src="fersul/fersul2009_op1.jpg" width="50" height="50"></a></li><li><a href="#"><img src="fersul/fersul2009_op2.jpg" width="50" height="50"></a></li><li><a href="#"><img src="fersul/fersul2009_op3.jpg" width="50" height="50"></a></li><li><a href="#"><img src="fersul/fersul2009_op4.jpg" width="50" height="50"></a></li><li><a href="#"><img src="fersul/fersul2009_op5.jpg" width="50" height="50"></a></li><li><a href="#"><img src="fersul/fersul2009_op6.jpg" width="50" height="50"></a></li><li><a href="#"><img src="fersul/fersul2009_op7.jpg" width="50" height="50"></a></li><li><a href="#"><img src="fersul/fersul2009_op8.jpg" width="50" height="50"></a></li><li><a href="#"><img src="fersul/fersul2009_op9.jpg" width="50" height="50"></a></li><li><a href="#"><img src="fersul/fersul2009_op10.jpg" width="50" height="50"></a></li></ul><div id="slideshow" class="pics"><img src="fersul/fersul.jpg"><img src="fersul/fersul2009_c1.jpg"><img src="fersul/fersul2009_c2.jpg"><img src="fersul/fersul2009_c3.jpg"><img src="fersul/fersul2009_c4.jpg"><img src="fersul/fersul2009_c5.jpg"><img src="fersul/fersul2009_c6.jpg"><img src="fersul/fersul2009_c7.jpg"><img src="fersul/fersul2009_c8.jpg"><img src="fersul/fersul2009_c9.jpg"><img src="fersul/fersul2009_c10.jpg"></div>';
  }
  if(x == 5 || n == 5){
  	texto='<img src="imagem/natal.jpg" id="imagem">';
  	document.getElementById("meio").style.overflow="auto";
  	document.getElementById("meio").style.left="-5px";
  }
 document.getElementById("meio").innerHTML = texto ;
 if(qtd==3) chamar(3);
 if(qtd==2) chamar(2);
 if(qtd==1) chamar(1);
}
