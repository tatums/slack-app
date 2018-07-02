# Aye-aye

![](./docs/aye.png)

This is a simple slack app.

### Development setup

#### [AWS CLI](https://aws.amazon.com/cli/)
This project uses cloudformation to build out infrastructure like API Gateway, lambda, and IAM permissions. Make sure you have the AWS cli setup first.

To find out if you're setup, try listing s3 buckets.

    $ aws s3 ls


#### Environment variables
* PROJECT_NAME
  - This is the a unique name that's used in cloudformation and used to disambiguate resources in AWS.
* S3_BUCKET
  - This is where your lambdas will deploy from.  This needs to be setup before cloudformation


## cloudformation

##### create the stack

    $ aws cloudformation create-stack \
      --stack-name $PROJECT_NAME \
      --parameters ParameterKey=S3Bucket,ParameterValue=$S3_BUCKET \
      --template-body file://cloudformation.yml \
      --capabilities CAPABILITY_NAMED_IAM && \

      aws cloudformation wait stack-create-complete \
        --stack-name $PROJECT_NAME

##### update the stack

    $ aws cloudformation update-stack \
      --stack-name $PROJECT_NAME \
      --parameters ParameterKey=S3Bucket,ParameterValue=$S3_BUCKET \
      --template-body file://cloudformation.yml \
      --capabilities CAPABILITY_NAMED_IAM && \

      aws cloudformation wait stack-update-complete \
      --stack-name $PROJECT_NAME



### Notes
* https://aws.amazon.com/premiumsupport/knowledge-center/malformed-502-api-gateway/
