/**
 *  ListaOperatori
 * 
 *      MODIFICA RISPETTO ALLA FASE DI MODELLING
 *      Si è scelto di fare a meno del drag&drop
 *      L'inserimento di un operatore avverrà semplicemente selezionando un operatore 
 *      dalla lista presente
 *      Si è scelto di continuare a chiamare la funzione del foglio di lavoro "onDrop"
 *      per coerenza con i modelli.
 *      La rimozione del drag&drop ci ha costretto ad aggiungere la dependency del FoglioDiLavoroService
 *      che non è presente all'interno del diagrama delle classi.
 */

app.service('ListaOperatoriService', function($http, $q, FoglioDiLavoroService){

    this.operatori = [];


    //Richiesta AJAX JSON
    var myJSON = $q.defer();
    $http.get('core/lista-operatori/JSONOperatori.json') 
    .then(function(res){
        myJSON.resolve(res); 
    }); 
    this.JSONOperatori = myJSON.promise.$$state;
   
    

    this.loadJSONOperatori = function(){
        this.operatori = this.JSONOperatori.value.data;
        return this.operatori;
    }


    
    this.onClickLista=function($event,JSONop,opT){
        FoglioDiLavoroService.onDrop(JSONop, opT);
    }


});