# Lambda Project
## Node JS template lambda function
```sls create -t aws-nodejs```
```npm init -y```

## Running your lambda functions to your local machine
```sls offline```

## Running cron jobs
just insert a schedule event and you can use either the rate or the old school cron

## Deploy lambda function to aws with any stage
```sls deploy -s [stage] -f [function-name]```

## Display logs from aws 10 mins ago
```sls logs -f [function-name] -s [stage] --startTime 10m```

## Display logs from aws in realtime
```sls logs -f [function-name] -s [stage] -t```

## Remove deployed lambda functions by stage
```sls remove -s [stage]```