/* Work Item
*
* Models independent work items that are a part of the project
*
*/
var Item = function(title, shortDescription, priority) {
	this.title = title;
	this.shortDescription = shortDescription;
	this.priority = priority;

	/* Each work item will have a unique ID between 0-100 (placeholder) */
	this.workID = Math.floor(Math.random()*101);

}
Item.prototype.getPriority = function() {
	var result = "";
	result += this.title;
	return result;
}
Item.prototype.getDescription = function() {
	var result = "";
	result += this.shortDescription;
	return result;
}