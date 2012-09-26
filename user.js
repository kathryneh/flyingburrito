/* User
* 
* Models users that are working on the current project.
* Includes role in the project and light biographical information.
*
* The methods defined pertain to the manipulation of activity objects
*
*/

var User = function(first, last, username, role, imgLocation, permissions) {
	this.firstName = first;
	this.lastName = last;

	//Check to see if database has username first, if not then set the given username
	this.username = username;

	this.role = role;

	//We will load image files into Image objects here
	userImage = new Image();
	this.userImage.src = ""imgLocation"";
	
	//Check to see if database has username first, if not then set the given username
	this.username = username;
	
	this.role = role;
	
	//We will load image files into Image objects here
	this.userImage = new Image();
	this.userImage.src = ""imgLocation"";
	
	//A string array of permissions will be set
	this.permissions = permissions[];

	//Each user will have a string array of the titles of their activities
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
}

User.prototype.removeActivity() = function(item){
	this.activityLog[this.getIndexOf(item)] = null;
}

User.prototype.updatePermissions() = function(permissions[i]){
	this.permissions[i] = permissions[i];
}


}

