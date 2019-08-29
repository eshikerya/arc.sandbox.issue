@app
test

@http
get /

@tables
table
  key *Number

@indexes
table
  idx *Number

## Uncomment the following lines to deploy to AWS!
@aws
profile default
region us-west-1
# bucket your-private-deploy-bucket
