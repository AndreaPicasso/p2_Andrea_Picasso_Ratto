/**
 *  MyLink
 *  estente i normali link di Jointjs
 * 
 */

myLink = joint.shapes.devs.Link.extend({
    

    esportaXML: function(){
        var out ='<relation name="r_' + this.id + '" class="package.Relation"/>';
        var source = this.getSourceElement();
        var target = this.getTargetElement();
        
        out += '<link port="'+ source.nome +'_'+source.id+'.'+this.attributes.source.port
                +'" relation="r_' + this.id +'"/>';
        out += '<link port="'+ target.nome +'_'+target.id+'.'+this.attributes.target.port
                +'" relation="r_' + this.id +'"/>';
                        
        return out;
    },
    
    

});