/* User
* 
* Models users that are working on the current project.
* Includes role in the project and light biographical information.
*
* The methods defined pertain to the manipulation of activity    *objects.
*
*/

var User = function(userid, first, last, role, imgLocation) {
	this.firstName = first;
	this.lastName = last;
	this.role = role;
	this.picture = imgLocation;
	this.userID = userid;

	/*Each user will have a string array of the titles of their activities*/
	this.activityLog = [];
}

User.prototype.getName = function(){
	return this.first + " " + this.last;
}

User.prototype.updateRole = function(newRole){
	this.role = newRole;
}

User.prototype.updateImg = function(newImgLocation){
	this.imgLocation = newImgLocation;
}


User.prototype.addActivity() = function(item){
	this.activityLog.push(item);
	item.setOwner = this;
}

User.prototype.removeActivity() = function(item){
	this.activityLog[this.getIndexOf(item)] = null;

}

