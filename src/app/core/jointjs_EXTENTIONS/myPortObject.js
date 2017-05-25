/**
 *  MyPortObject
 *  è stato creato per dare una definizione di un tipo rappresentante una "porta"
 *  in Joint è usato solo come oggetto, senza una definizione di "classe" (rappresentato nel
 *  diagramma delle classi con la classe PortObject)
 *  Ovviamente, non avendo una "classe" non possiamo estendere nulla ma il MyPortObject
 *  comprenderà la definizione di dell'oggetto utilizzato come porta da joint "PortObject"
 */

myPortObject = function(){
    this.id = "";
    this.attrs = {".port-label":{"fill":"#000"},".port-body":{"fill":"#fff","stroke":"#000","r":10,"magnet":true}}
    this.group = "";
    this.tipo = "";

    /*
      Modifica rispetto alla fase di modelling:
      l'attributo qta, attribuito ad una porta si è rivelato essere superfluo 
    */
}