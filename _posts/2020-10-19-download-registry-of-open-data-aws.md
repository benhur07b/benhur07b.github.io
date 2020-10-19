---
layout: post
title: Download from the the Registry of Open Data on AWS
description: Here's how to get data from the Registry of Open Data on AWS, particularly the Ookla Global Fixed and Mobile Network Performance Maps but these methods can work for any dataset there.
tags: [aws, data, open data, ookla, speedtest]
pinned: false
comments: true
og_type: article
image:
    facebook: /img/posts/2020-10-19-download-registry-of-open-data-aws/main.png
    twitter: /img/posts/2020-10-19-download-registry-of-open-data-aws/main.png
---

Recently, Ookla released [Global Fixed and Mobile Network Performance Maps based on Speedtest](https://registry.opendata.aws/speedtest-global-performance/) on the [Registry of Open Data on AWS](https://registry.opendata.aws/). There's actually quite a lot of data in the said registry and they can easily be downloaded to your machine, if needed. Here's how:

### Download and install the AWS CLI on your machine
 
The first thing you need is to install the [AWS CLI](https://aws.amazon.com/cli/) on your machine: [Windows](https://awscli.amazonaws.com/AWSCLIV2.msi), [MacOS](https://awscli.amazonaws.com/AWSCLIV2.pkg), or [Linux](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html#cliv2-linux-install).

Once you've installed the AWS CLI on your machine, you should be able to access the data using simple terminal commands. 

### Access the data from the terminal

First, you need to know where the data is on AWS. Thankfully, you can easily find this in the homepage of the dataset. Look for **AWS CLI Access (No AWS account required)**.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-19-download-registry-of-open-data-aws/aws-data-home.png" alt="Registry of Open Data on AWS AWS CLI Access"><figcaption class="figure-caption text-center">AWS CLI Access (No AWS account required)</figcaption></div>


For this [dataset](https://registry.opendata.aws/speedtest-global-performance/), we find:
```bash
aws s3 ls s3://ookla-open-data/ --no-sign-request
```

This command just lists (ls) the contents of the directory. You need some basic terminal command knowledge to download the data you need. I run a Linux machine so I use **cp** to copy data from a bucket. For me, that command is:

```bash
aws s3 cp <file-i-need-to-download> <file-to-store-it-on-my-computer> --no-sign-request
```


### Copy the file you need from the AWS bucket

From the documentation of the [Ookla open data](https://github.com/teamookla/ookla-open-data), the data files are are "provided in both Shapefile format as well as Apache Parquet, and can be accessed on Amazon Web Services (AWS) object storage service, S3, at the following paths:"

* s3://ookla-open-data/parquet/performance/
* s3://ookla-open-data/shapefiles/performance/

using the key names for the **type**, **year**, **quarter**, and **data layer**.


For example, to access mobile tiles in the parquet format for the second quarter of the year 2020, one would use the bucket, 

```bash
s3://ookla-open-data/parquet/performance/type=mobile/year=2020/quarter=2/2020-04-01_performance_mobile_tiles.parquet
```

Since I will be downloading the shapefile version, I will use the bucket:

```bash
s3://ookla-open-data/shapefiles/performance/type=mobile/year=2020/quarter=2/2020-04-01_performance_mobile_tiles.zip
```

So, to download the mobile tiles in the zipped shapefile format for the second quarter of the year 2020, I would use:

```bash
aws s3 cp s3://ookla-open-data/shapefiles/performance/type=mobile/year=2020/quarter=2/2020-04-01_performance_mobile_tiles.zip output.zip --no-sign-request
```

This should start the download process and save the downloaded data in the output.zip file.

Since the downloaded data is a zipped shapefile, I should be able to open it in QGIS.

<div class="col-lg-12 img-container"><img class="img-fluid post-img img-shadow" src="{{ site.assets }}/img/posts/2020-10-19-download-registry-of-open-data-aws/data-in-qgis.png" alt="Ookla Global Fixed and Mobile Network Performance Maps in QGIS"><figcaption class="figure-caption text-center">Ookla Global Fixed and Mobile Network Performance Maps</figcaption></div>

That's it! There's a lot of other datasets available in AWS that we can check out, download, and use. Good luck!