(function(a){a(["underscore","collections/col_general"],function(a,b){function e(){var a=c[this.cid];a.push((new Date).getTime())}var c={},d=b.prototype.constructor.prototype.add,f=b.extend({initialize:function(){this.cid="c"+a.uniqueId(),c[this.cid]=[],this.on("add remove",a.bind(e,this))},add:function(b){var c=a.isArray(b)?b.length:1,e=this.models.length+c,f;if(this.settings.limit&&e>this.settings.limit){f=a.isArray(b)?a.pluck(b,"id"):b.id,this.trigger("selectionlimitexceed",f);return!1}d.apply(this,arguments)},hasChanges:function(){return!!c[this.cid].length}});return f})})(this.define)