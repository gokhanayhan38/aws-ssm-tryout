// Runs commands on one or more managed nodes.
// https://docs.aws.amazon.com/systems-manager/latest/APIReference/API_SendCommand.html

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

// Run given commands on a windows machine
let params = {
  "DocumentName": "AWS-RunPowerShellScript",
  "DocumentVersion": "1",
  "Targets": [
    {
      "Key": "InstanceIds",
      "Values": [
        "i-008b3b81111111"
      ]
    }
  ],
  "Parameters": {
    "commands": [
      "Set-Location -Path C:\\Users\\Administrator",
      "$url = 'http://adomain/api/asset/download/msi'",
      "$response = Invoke-WebRequest $url -UseBasicParsing",
      "$filename = $response.Headers.'Content-Disposition' -replace '.*\\bfilename=(.+)(?: |$)', '$1' -replace '\"', ''",
      "$outDir = Convert-Path $pwd",
      "[IO.File]::WriteAllBytes(\"$outDir/$filename\", $response.Content)",
      "msiexec /i \"$outDir\\$filename\" /quiet"
    ],
    "workingDirectory": [
      ""
    ],
    "executionTimeout": [
      "3600"
    ]
  },
  "MaxErrors": "0",
  "MaxConcurrency": "1%",
  "TimeoutSeconds": 600
};

ssm.sendCommand(params, function(err, data) {
  if (err) {
    console.log(err, err.stack);
  }
  else {
    console.log(data);
  }
});
