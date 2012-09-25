/* Work Item
*
* Models independent work items that are a part of the project
*
*/
var Item = function(title, shortDescription, priority) {
	this.title = title;
	this.shortDescription = shortDescription;
	this.priority = priority;
	this.owner = "unassigned";
	this.sprint = "backlog";

	/* Each work item will have a unique id */ 
	this.workID = this.workID++;

}
Item.prototype.getPriority = function() {
	var result = "";
	result += this.title;
	return result;
}

Item.prototype.setPriority = function(newPriority) {
	this.priority = newPriority;
}

Item.prototype.getSprint = function() {
	return this.sprint;
}

Item.prototype.setPriority = function(newSprint) {
	this.sprint = newSprint;
}

Item.prototype.getDescription = function() {
	var result = "";
	result += this.shortDescription;
	return result;
}

Item.prototype.getOwner = function(){
	return this.owner;
}

Item.prototype.setOwner = fuction(/*object*/ newOwner){
	this.owner = newOwner;
}