# Aye-aye
<img src="./docs/aye.png" width="150" height="100">


This is a simple slack app. There are no servers here 💪. This app uses [AWS Lambda](https://aws.amazon.com/lambda/), [API Gateway](https://aws.amazon.com/api-gateway/), and [CloudFormation](https://aws.amazon.com/cloudformation/) to build all the resources -- [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_Code) 

### Development setup

#### [AWS CLI](https://aws.amazon.com/cli/)
You'll want to ensure you have the AWS cli setup first.

You can try a bash command to find out if you're setup. This will try listing s3 buckets in AWS.

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
