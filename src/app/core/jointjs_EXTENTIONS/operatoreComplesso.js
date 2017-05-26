/**
 *  Operatore Complesso
 *  estende operatore
 *  Come già citato in altre sezioni (vedi foglio-di-lavoro.service.js), abbiamo deciso
 *  di non implementare la parte relativa all'operatore complesso
 * 
 */

operatoreComplesso = operatore.extend({

    grafoOperatoreComplesso:'',
    

    esportaXML: function(){
    },



    fromJSON: function(){
    },



    isOperatoreElementare: function(){
        return false;
    },



    isOperatoreComplesso: function(){
        return true;
    },


    isOperatoreIO: function(){
        return false;
    }
});