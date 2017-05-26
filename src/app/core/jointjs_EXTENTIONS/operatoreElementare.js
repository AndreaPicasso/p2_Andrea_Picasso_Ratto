/**
 *  Operatore Elementare
 *  estende il nostro operatore
 * 
 */

operatoreElementare = operatore.extend({
  
   /*
   MODIFICA RISPETTO ALLA FASE DI MODELLING,
   per aggevolare il controllo della correttezza dei parametri inseriti, abbiamo deciso di aggiungere un 
   tipo al parametro
   */ 
    hasParametro: false,
    nomeParametro: "",
    paramValue: "",
    paramType: "",
    descrizione: "",



    /*
       Funzione che si occupa di costruire la parte dell'xml relativa all'operatore Elementare in questione
    */
    esportaXML: function(){
        var out ='<entity name="'+this.nome+'_'+ this.id +'" class="package.'+this.nome+'">';
        if(this.hasParametro == "true"){
            out += '<property name="'+ this.nomeParametro + '" value="' +this.paramValue+ '"/>';
        }
        var ports = this.getPorts();
        for(var i = 0; i<ports.length; i++){
            if(ports[i].group == 'in'){
                out += '<port name="'+ports[i].id+'" class="package.IPort"/>';
            } else {
                out += '<port name="'+ports[i].id+'" class="package.OPort"/>';
            }
        }
        out += ' </entity>';
        return out;
    },
    
    
    
    /*
        Generiamo l'elemento operatore che verrà renderizzato sul foglio di lavoro
        a partire dal JSON della listaOperatori
    */
    fromJSON: function(JSONtype, JSONoperatore, nome){
    var operatore = new joint.shapes.devs.Atomic({
        position: {
            x: 50 + Math.floor(Math.random()*(51)),
            y: 50 + Math.floor(Math.random()*(51))
        },
        inPorts: [],
        outPorts:  [],
        attrs:{
            '.body': {
                'rx': 6,
                'ry': 6
            },
        }
      });
      operatore.attr('.label/text', nome);
      // setto attributi relativi a joint js
      this.attributes = operatore.attributes;
      this.changed = operatore.changed;
      this.cid = operatore.cid;
      this.id = operatore.id;
      this.ports = operatore.ports;
      var ports = JSONtype.ports.items;
        var port = '';
        for(i = 0; i<ports.length; i++){
            port = new myPortObject();
            port.group = ports[i].group;
            port.attrs = ports[i].attrs;
            port.tipo = ports[i].tipo;
            port.id = ports[i].id;
            this.addPort(port);
        }
      //setto attributi relativi alle nostre funzionalità
      this.hasParametro = JSONoperatore.hasParam;
      this.paramValue = JSONoperatore.paramValue;
      this.nomeParametro = JSONoperatore.nomeParametro;
      this.descrizione = JSONoperatore.descrizione;
      this.nome = JSONoperatore.nome;
      this.paramType=JSONoperatore.paramType;
    },



    isOperatoreElementare: function(){
        return true;
    },



    isOperatoreComplesso: function(){
        return false;
    },



    isOperatoreIO: function(){
        return false;
    }
});