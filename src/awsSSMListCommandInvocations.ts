// An invocation is copy of a command sent to a specific managed node. A command can apply to one or more managed nodes.
// A command invocation applies to one managed node. For example, if a user runs SendCommand against three managed nodes,
// then a command invocation is created for each requested managed node ID. ListCommandInvocations provide status about command execution.
// https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommandInvocations.html

import * as AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: "anAccessKeyId",
  secretAccessKey: "aSecretAccessKey",
  region: "aRegion",
});

AWS.config.apiVersions = {
  ssm: '2014-11-06',
};
let ssm = new AWS.SSM();

let params = {
  MaxResults: 50,
  CommandId: "11111111-87b1-4c8f-1111-586ba03eb2c1",
  Details: true
};

ssm.listCommandInvocations(params, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  }
  else {
    console.log(data);
  }
});

// Example Response of listCommandInvocations:
// {
//   "CommandInvocations": [
//   {
//     "CommandId": "11111111-87b1-4c8f-1111-586ba03eb2c1",
//     "InstanceId": "i-008b3b8c1111111",
//     "InstanceName": "",
//     "Comment": "",
//     "DocumentName": "AWS-RunPowerShellScript",
//     "DocumentVersion": "1",
//     "RequestedDateTime": "2021-05-24T11:39:55.349Z",
//     "Status": "Success",
//     "StatusDetails": "Success",
//     "StandardOutputUrl": "",
//     "StandardErrorUrl": "",
//     "CommandPlugins": [
//       {
//         "Name": "aws:runPowerShellScript",
//         "Status": "Success",
//         "StatusDetails": "Success",
//         "ResponseCode": 0,
//         "ResponseStartDateTime": "2021-05-24T11:39:56.391Z",
//         "ResponseFinishDateTime": "2021-05-24T11:40:21.559Z",
//         "Output": "",
//         "StandardOutputUrl": "",
//         "StandardErrorUrl": "",
//         "OutputS3Region": "eu-west-1",
//         "OutputS3BucketName": "",
//         "OutputS3KeyPrefix": ""
//       }
//     ],
//     "ServiceRole": "",
//     "NotificationConfig": {
//       "NotificationArn": "",
//       "NotificationEvents": [],
//       "NotificationType": ""
//     },
//     "CloudWatchOutputConfig": {
//       "CloudWatchLogGroupName": "",
//       "CloudWatchOutputEnabled": false
//     }
//   }
// ]
// }
