let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL = require('slappforge-aws');
const rds = new SL.RDS(connectionManager);
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
	console.log("Event triggered ", event);

	// Replace the query with the actual query
	rds.query({
		identifier: 'nuwanthi',
		query: '<query>',
		transactional: true
	}, function (error, results, fields) {
		if (error) {
			console.log("Error occurred");
			throw error;
		} else {
			console.log("Success")
			console.log(results);
		}
	});

	ddb.put({
		TableName: 'nuwanthi_table',
		Item: {
			first_name: 'nuwanthi',
			last_name: 'yapa',
			id: '1'
		}
	}, function (err, data) {
		if (err) {
			console.log("Error ", err);
		} else {
			console.log("Data ", data);
		}
	});



	callback(null, 'Successfully executed');
}