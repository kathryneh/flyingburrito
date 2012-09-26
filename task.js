/* Task
*
* Models independent work items that are a part of the project
*
*/
var Task = function(title, shortDescription, longDescription, priority) {
	this.title = title;
	this.shortDescription = shortDescription;
	this.longDescription = longDescription;
	this.priority = priority;
	this.owner = [];

	// Each work Task will have a unique ID between 0-100 (placeholder) which will be checked against the database first
	this.workID = Math.floor(Math.random()*101);

	this.startDate = new Date();
}
Task.prototype.getPriority = function() {
	var result = "";
	result += this.title;
	return result;
}

Task.prototype.setPriority = function(newPriority) {
	this.priority = newPriority;
}

Task.prototype.getShortDescription = function() {
	var result = "";
	result += this.shortDescription;
	return result;
}

Task.prototype.getLongDescription = function() {
	var result = "";
	result += this.LongDescription;
	return result;
}

Task.prototype.getOwner = function(){
	return this.owner;
}

Task.prototype.setOwner = fuction(/*object*/ newOwner){
	//If we choose to use an array of owners, we need to iterate through the array until we find an empty slot
	for(int i = 0; i < this.owner.length; i++){
		if(this.owner[i] == null) {
			this.owner[i] = newOwner;
			break;
			}
	}
}

Task.prototype.taskCompleted = function(){
	this.endDate = new Date();
}