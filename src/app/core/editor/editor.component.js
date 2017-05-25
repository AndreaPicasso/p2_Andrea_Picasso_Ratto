/**
 *  EditorComponent
 * 
 */
app.directive('editor', function () {
    return {
        restrict:'E',
        templateUrl: 'core/editor/editor.component.html',
    controller: ['$scope', "$log","$window", "ListaOperatoriService","FoglioDiLavoroService", EditorController]
    };
});



function EditorController($scope, $log,$window, ListaOperatoriService, FoglioDiLavoroService) {
    
    
    /*
    per scopi grafici, abbiamo bisogno di una variabile
    che ci indichi la presenza o meno di un foglio di lavoro
    */
    this.hasPaper = false;

//TOCHECK qui ho modificato l'ordine inserendo name poiche nel diagramma prima chiediamo il nome e poi creiamo 
//il foglio di lavoro
    this.nuovaRegola = function(){
        if(!this.hasPaper){
            this.hasPaper = true;
            var name=$window.prompt("Inserisci il nome della regola:", "rule_n");                                           
            $scope.operatori = ListaOperatoriService.loadJSONOperatori();
            //Funzione di "callback" con lo scopo grafico di modificare la descrizione
            //Una volta cliccato su un operatore di un foglio di lavoro
            FoglioDiLavoroService.creaFoglioDiLavoroRegola('fogliodilavoro', $scope.showDescription);
            FoglioDiLavoroService.nomeFoglioDiLavoro = name;
        }
        else{
            $window.alert("Chiudere foglio di lavoro corrente prima di procedere");
        }  
     }



    this.nuovoOpComplesso = function(){
        $scope.operatori = ListaOperatoriService.loadJSONOperatori();
        this.hasPaper = true;
        //... Operatore Complesso non implementato (vedi foglio-di-lavoro.service.js)
     }



     this.nuovaPortaOpCompl = function(){
         //... Operatore Complesso non implementato  (vedi foglio-di-lavoro.service.js)
     }



    /*
        Chiude il foglio di lavoro eliminando il grafo (model) e il paper
     */
     this.chiudiFoglioDiLavoro = function(){
        this.hasPaper = false;
        $scope.operatori = [];
        FoglioDiLavoroService.paper.model.clear();
        FoglioDiLavoroService.paper.remove();
        FoglioDiLavoroService.paper = "";
        FoglioDiLavoroService.nomeFoglioDiLavoro = "";
        $scope.descrizione='';
     }



     /*
        Verifica la correttezza della regola presente sul foglio di lavoro aperto
     */
     this.verificaCorrettezza = function(){    
        $window.alert(FoglioDiLavoroService.verificaCorrettezza());
     }



     /*
        Esporta in formato XML la regola presete su foglio di lavoro
     */
     this.esportaRegola = function(){
          FoglioDiLavoroService.esportaRegola();
     }
     
     
     
     //Binding ad elementi grafici
     $scope.nuovaRegola = this.nuovaRegola;
     $scope.nuovoOpComplesso = this.nuovoOpComplesso;
     $scope.nuovaPortaOpCompl = this.nuovaPortaOpCompl
     $scope.esportaRegola = this.esportaRegola;
     $scope.verificaCorrettezza = this.verificaCorrettezza;
     $scope.chiudiFoglioDiLavoro = this.chiudiFoglioDiLavoro;
     $scope.hasPaper = this.hasPaper;
    


}
    
