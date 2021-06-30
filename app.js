var AWS = require('aws-sdk');

AWS.config.update({ accessKeyId: AWSAccessKeyId, secretAccessKey: AWSSecretKey, region: 'us-east-1' });


let s3 = new AWS.S3({ apiVersion: '2006-03-01' });

s3.listBuckets(function (err, data) {
    if (err) {
        console.log("Error", err);
    }
    else {
        console.log("Success", data.Buckets);
    }
})

var bucketParams = {
    Bucket: 'bla-bla-2'
};

s3.createBucket(bucketParams, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Location);
    }
});

  var bucketParams2 = {
    Bucket : 'bla-bla-2'
  };

  s3.createBucket(bucketParams2, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Location);
    }
  });

  s3.deleteBucket(bucketParams2, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
