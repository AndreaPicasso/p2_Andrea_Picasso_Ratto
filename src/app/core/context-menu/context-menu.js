/**
 * ContextMenu
 *  
 */

function ContextMenu(){


    this.operatore = "";


    /*
          Costruttore context menu richiamato al right click su di un operatore renderizzato sul
          foglio di lavoro  
    */
    this.createContextMenu = function(cellView,evt,x,y,$window){
            this.operatore = cellView.model;
            evt.stopPropagation();
            evt.preventDefault(); 
            var $contextMenu = $('<div id="context-menu"></div>');
            var height = Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
            $contextMenu.css({
                width: '100%',
                height: height + 'px',
                position: 'absolute',
                top: evt.clientY+'px',
                left: evt.clientX+'px',
                zIndex: 9999,
                "max-height" : window.innerHeight - 3,
            });
            $contextMenu.addClass('angular-bootstrap-contextmenu dropdown clearfix');
            var $ul = $('<ul>');
                $ul.css({
                    display: 'block',
                    position: 'relative',
                    left: 0,
                    top: 0,
                    "z-index": 10000
                });
            $ul.addClass('dropdown-menu');
            var $elimina = $('<button class="btn dropdown-toggle" style="width:100%">Elimina</button>');

            //Elimina l'operatore selezionato dal foglio di lavoro
            $elimina.on('mousedown', function (e) {
                elimina(cellView);
            });
            $ul.append($elimina);
            var $settaparam = $('<button class="btn dropdown-toggle" style="width:100%">Setta Parametri</button>');
            
            //Setta i parametri dell'operatore selezionato
            $settaparam.on('mousedown', function (e) {
                setParam(cellView, $window);
            });
            $ul.append($settaparam);
            $contextMenu.append($ul);
            $(document).find('body').append($contextMenu);

            $(document.body).on('mousedown', function (e) {
                $("#context-menu").remove();
            });
    }



    var elimina = function(cellView){
        //L'eliminazione dei link ad esso attaccati viene fatta in automatico da joint 
        cellView.model.remove();
        
    }



    /*
     Richiede il parametro in input e verifica se il suo valore è accetabile
    */
    var setParam = function(cellView, $window){
        if(cellView.model.hasParametro == 'true'){
            var corretto = false;            
            while(!corretto){
                var newValue = $window.prompt("Inserisci "+cellView.model.nomeParametro+":",
                        cellView.model.paramValue);
                if(cellView.model.paramType=="all"){
                   corretto=true;
                }
                if(cellView.model.paramType=="boolean" && (newValue=="false" || newValue=="true")){
                   corretto=true;
                }
                if(cellView.model.paramType=="numeric" && !isNaN(newValue)){
                   corretto=true;
                }

                if(!corretto){
                    $window.alert("Valore non compatibile al tipo: "+cellView.model.paramType);
                    break;
                }
            }
            if(corretto){
                cellView.model.paramValue = newValue;
            }
            
        }
        else{
            $window.alert("L'operatore selezionato non ha parametri");
        }

    }


}