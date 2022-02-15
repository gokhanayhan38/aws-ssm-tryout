// Returns detailed information about command execution for an invocation
// https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_GetCommandInvocation.html

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
  InstanceId: "i-08edcd91111111",
  CommandId: "11111111-e17a-4261-1111-3c168559283a",
  PluginName: "aws:runShellScript" // to test fail
};

ssm.getCommandInvocation(params, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  }
  else {
    console.log(data);
  }
});

// Example Response of getCommandInvocation:
// {
//   "CommandId": "11111111-e17a-4261-1111-3c168559283a",
//   "InstanceId": "i-08edcd9a1111111",
//   "Comment": "",
//   "DocumentName": "AWS-RunShellScript",
//   "DocumentVersion": "1",
//   "PluginName": "aws:runShellScript",
//   "ResponseCode": 2,
//   "ExecutionStartDateTime": "2021-05-20T07:08:22.297Z",
//   "ExecutionElapsedTime": "PT0.055S",
//   "ExecutionEndDateTime": "2021-05-20T07:08:22.297Z",
//   "Status": "Failed",
//   "StatusDetails": "Failed",
//   "StandardOutputContent": "",
//   "StandardOutputUrl": "",
//   "StandardErrorContent": "/var/lib/amazon/ssm/i-08edcd911111111/document/orchestration/11111111-e17a-4261-1111-3c168559283a/awsrunShellScript/0.awsrunShellScript/_script.sh: 1: cd: can't cd to ~\nfailed to run commands: exit status 2",
//   "StandardErrorUrl": "",
//   "CloudWatchOutputConfig": {
//   "CloudWatchLogGroupName": "",
//     "CloudWatchOutputEnabled": false
// }
// }
