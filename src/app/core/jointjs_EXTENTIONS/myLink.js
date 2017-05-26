/**
 *  MyLink
 *  estente i normali link di Jointjs
 * 
 *  Modifica rispetto al modelling:
 *  Per facilitare l'operazione di esportazioneXML (i Link devono essere numerati)
 *  abbiamo inserito un attributo nome, che (secondo ciò richiesto) sarà inserito nella forma:
 *  r_[numeroLink] -> es. r_12
 */

myLink = joint.shapes.devs.Link.extend({

    nome: "",
    

    esportaXML: function(){
        var out ='<relation name="' + this.nome + '" class="package.Relation"/>';
        var source = this.getSourceElement();
        var target = this.getTargetElement();
        
        out += '<link port="'+ source.nome +'_'+source.id+'.'+this.attributes.source.port
                +'" relation="'+this.nome+'"/>';
        out += '<link port="'+ target.nome +'_'+target.id+'.'+this.attributes.target.port
                +'" relation="'+this.nome+'"/>';
                        
        return out;
    },
    
    

});