/* Sprint 
 * a list of the activities for a particular time period
 * can add items and remove items from the list;
 * also keeps separate lists of current items and completed items
 *
 */
 var Sprint = function(startDate, endDate){
 	this.startDate = startDate;
 	this.endDate = endDate;
 	this.items = []
 	this.completedItems = [];
 }

//add an item to the present list
 Sprint.prototype.addItem(item){
 	this.items.push(item);
 	item.setSprint = this;
 }

//remove an item from the present list
 Sprint.prototype.removeItem(item){
 	this.items[this.items.indexOf(item)] = null;
 }

//adds item to a completed item list and removes it from the present list
 Sprint.prototype.completeItem(item){
 	//add a new item to the completed item list
 	this.completedItems.push(this.items[this.items.indexOf(item)]);
 	//and remove it from the present itemList
 	this.removeItem(item);
 }

//returns present list
 Sprint.prototype.getItems = function(){
 	return items();
 }
//returns completed list
 Sprint.prototype.getCompletedItems = function(){
 	return completedItems();
 }