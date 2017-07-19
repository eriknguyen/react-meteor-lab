// Only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
	// generate some data
	
	// check to see if data exists in the collection
	const numberRecords = Employees.find({}).count();
	console.log(numberRecords);
	if (!numberRecords) {
		// generate some data
		_.times(5000, () => {
			const { name, email, phone } = helpers.createCard();

			Employees.insert({
				name, //name: name,
				email, //email: email,
				phone, //phone: phone
				avatar: image.avatar()
			});
		}); 
	}

	Meteor.publish('employees', function() {
		// return the cursor to subscriber (client) to do more with the data
		return Employees.find({}, {limit: 20});
	});
});