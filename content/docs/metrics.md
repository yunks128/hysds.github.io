---
title: 'SDS Watch'
order: 10
page_id: 'sds_watch'
warning: false
contextual_links:
  - type: section
    name: 'Prerequisites'
  - type: link
    name: 'Name of a prerequisite'
    url: '/docs/path/to/prerequisite'
  - type: section
    name: 'Additional Resources'
  - type: subtitle
    name: 'Related Blog Posts'
  - type: link
    name: 'Name of a related blog post'
    url: 'External link to a blog post'
  - type: link
    name: 'Name of a related blog post'
    url: 'External link to a blog post'
  - type: section
    name: 'Next Steps'
  - type: link
    name: 'Name of a next guide'
    url: '/docs/path/to/next/guide'
---

# Installation

## Requirements

[ElasticSearch](https://www.elastic.co/elasticsearch/) 7.6.0+
[Logstash](https://www.elastic.co/logstash) 7.5.2+
[Kibana](https://www.elastic.co/kibana) 7.6.0+

## Getting Started

### Installing Elastic (ELK) Stack on macOS with Homebrew

SDS Watch relies on the Elastic Stack: Elasticsearch, Logstash, and Kibana. On macOS, you can install them using [Homebrew](https://brew.sh/).

First tap the Elastic Homebrew repository.

```
brew tap elastic/tap
```

Then use `brew install` to install the default distributions of Elasticsearch, Logstash, and Kibana.

```
brew install elastic/tap/elasticsearch-full
brew install elastic/tap/logstash-full
brew install elastic/tap/kibana-full
```

### Running Elasticsearch and Kibana from the command line

If you have installed Elasticsearch with Homebrew, run the following command to start Elasticsearch.

```
elasticsearch
```

Then to verify that your Elasticsearch node is running, go to [http://localhost:9200](http://localhost:9200).

Likewise, run the following command to start Kibana.

```
kibana
```

You will see your Kibana dashboard on [http://localhost:5601](http://localhost:5601).

Note that Elasticsearch and Kibana by default run in the foreground and print their logs to the standard output, `stdout`. If you want to start them as background services, run the following commands.

```
brew services start elasticsearch
brew services start kibana
```

### Parsing sample logs with Logstash

Before running Logstash, you must set the input file path in `sample_logstash.conf`

```
input {
  file {
    path => "/path/to/this/project/logs/**/*.sdswatch.csv"
    start_position => "beginning"
    sincedb_path => "/path/to/this/project/null"
  }
}
```

Then inside the project directory, run

```
logstash -f sample_logstash.conf
```

Or, run it as a background service

```
brew services start logstash -f sample_logstash.conf
```

Logstash will listen to any updates being made on log files stored inside the `logs` directory, parse and ingest the logs into Elasticsearch. To see this in action, run `job1.py`, `job2.py`, and `job3.py` to generate sample log (CSV) files.

```
python3 job1.py
python3 job2.py     # maybe in a new terminal instance
python3 job3.py     # in yet another terminal instance
```

### To-do

- [ ] Table of availlable package managers to install ELK on different platforms
- [ ] Setting up Kibana to visualize data stored in Elasticsearch
- [ ] Sample Kibana visualizations
