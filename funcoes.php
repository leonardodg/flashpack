<? 
function leconteudo($n){
   if(!function_exists('file_get_contents')){
    $fp = fopen( "$n.html", 'r' ); 
    return fread( $fp, filesize("$n.html" ) );

   }else{
    return file_get_contents( "$n.html" );
   }
}



/*
Lê o conteúdo de índice n. Aqui estou lendo de arquivos
html no disco, para não perdermos tempo com coisas que
fogem ao escopo do artigo. No mundo real, geralmente você
vai ler isso aqui do banco de dados, ou usar uma função
pronta disponibilizada por seu CMS.

function leconteudo($n){
    return file_get_contents("$n.html");
}
*/

function classi($n){
global $i;
if($n==$i)echo ' class="selected"';
}

if(isset($_GET["n"])){
$t=leconteudo(intval($_GET["n"]));
echo(urlencode($t));
}
?>
