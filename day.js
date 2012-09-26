/* Day
*
* Models Day objects, which will each contain information about 
* different Item objects that occurred during each specific Day
* Consider exactly what the Day objects mean.
*/

var Day = function(date, items) {
	this.date = date;
	this.items = items;

	this.currentDay = true;
}


Day.prototype.listItems = function(){
	return items;

}

Day.prototype.endDay = function(){
	this.currentDay = false;

}