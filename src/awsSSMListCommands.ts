// Lists the commands requested by users of the AWS account.
// https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_ListCommands.html
// Listing all running commands on AWS SSM: Filters key: value value: Executing
// Listing all done commands on AWS SSM: Filters key: value value: Complete

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

// How to list commands in run between a date range
// Use InvokedAfter and InvokedBefore filter attributes in Filters array

// NextToken used for for pagination it works like dynamoDB to fetch next page

let params = {
  MaxResults: 2,
  Filters: [
    {
      key: "DocumentName",
      value: "AWS-RunPowerShellScript"
    }
  ],
  // NextToken: "aToken"
};

ssm.listCommands(params, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  }
  else {
    console.log(data);
  }
});


// Example Response of listCommands:
// {
// "Commands": [
//   {
//     "CommandId": "11111111-87b1-4c8f-1111-586ba03eb2c1",
//     "DocumentName": "AWS-RunPowerShellScript",
//     "DocumentVersion": "1",
//     "Comment": "",
//     "ExpiresAfter": "2021-05-24T12:49:55.245Z",
//     "Parameters": {
//       "commands": [
//         "Set-Location -Path C:\\Users\\Administrator",
//         "$url = 'http://adomain/api/asset/download/msi'",
//         "$response = Invoke-WebRequest $url -UseBasicParsing",
//         "$filename = $response.Headers.'Content-Disposition' -replace '.*\\bfilename=(.+)(?: |$)', '$1' -replace '\"', ''",
//         "$outDir = Convert-Path $pwd",
//         "[IO.File]::WriteAllBytes(\"$outDir/$filename\", $response.Content)",
//         "msiexec /i \"$outDir\\$filename\" /quiet"
//       ],
//       "executionTimeout": [
//         "3600"
//       ],
//       "workingDirectory": [
//         ""
//       ]
//     },
//     "InstanceIds": [],
//     "Targets": [
//       {
//         "Key": "InstanceIds",
//         "Values": [
//           "i-008b3b8cc111111111"
//         ]
//       }
//     ],
//     "RequestedDateTime": "2021-05-24T11:39:55.245Z",
//     "Status": "Success",
//     "StatusDetails": "Success",
//     "OutputS3BucketName": "",
//     "OutputS3KeyPrefix": "",
//     "MaxConcurrency": "100%",
//     "MaxErrors": "0",
//     "TargetCount": 1,
//     "CompletedCount": 1,
//     "ErrorCount": 0,
//     "DeliveryTimedOutCount": 0,
//     "ServiceRole": "",
//     "NotificationConfig": {
//       "NotificationArn": "",
//       "NotificationEvents": [],
//       "NotificationType": ""
//     },
//     "CloudWatchOutputConfig": {
//       "CloudWatchLogGroupName": "",
//       "CloudWatchOutputEnabled": false
//     },
//     "TimeoutSeconds": 600
//   },
//   {
//     "CommandId": "11111111-5fec-4a5c-1111-610c8de9ee98",
//     "DocumentName": "AWS-RunPowerShellScript",
//     "DocumentVersion": "1",
//     "Comment": "",
//     "ExpiresAfter": "2021-05-24T08:44:27.544Z",
//     "Parameters": {
//       "commands": [
//         "Set-Location -Path C:\\Users\\Administrator",
//         "$url = 'http://adomain/api/asset/download/msi'",
//         "$response = Invoke-WebRequest $url -UseBasicParsing",
//         "$filename = $response.Headers.'Content-Disposition' -replace '.*\\bfilename=(.+)(?: |$)', '$1' -replace '\"', ''",
//         "$outDir = Convert-Path $pwd",
//         "[IO.File]::WriteAllBytes(\"$outDir/$filename\", $response.Content)",
//         "msiexec /i \"$outDir\\$filename\" /quiet"
//       ],
//       "executionTimeout": [
//         "3600"
//       ],
//       "workingDirectory": [
//         ""
//       ]
//     },
//     "InstanceIds": [],
//     "Targets": [
//       {
//         "Key": "InstanceIds",
//         "Values": [
//           "i-008b3b811111111"
//         ]
//       }
//     ],
//     "RequestedDateTime": "2021-05-24T07:34:27.544Z",
//     "Status": "Success",
//     "StatusDetails": "Success",
//     "OutputS3BucketName": "",
//     "OutputS3KeyPrefix": "",
//     "MaxConcurrency": "100%",
//     "MaxErrors": "0",
//     "TargetCount": 1,
//     "CompletedCount": 1,
//     "ErrorCount": 0,
//     "DeliveryTimedOutCount": 0,
//     "ServiceRole": "",
//     "NotificationConfig": {
//       "NotificationArn": "",
//       "NotificationEvents": [],
//       "NotificationType": ""
//     },
//     "CloudWatchOutputConfig": {
//       "CloudWatchLogGroupName": "",
//       "CloudWatchOutputEnabled": false
//     },
//     "TimeoutSeconds": 600
//   }
// ],
//   "NextToken": "aToken"
// }
