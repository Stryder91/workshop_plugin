# Milo Plugin

Here is our Milo plugin!

### General Info
*
Milo allows you to pick several flowers. This plug-in allows you to automate in your chat mattermost two web-services by notifying your conversation of an event. So you can create a meeting following a survey made on Google form and know the impact of the meeting and the employees who would like to participate. 

**Maintainer:** [lionel](https://github.com/stryder91)
**Co-Maintainer:** [corentin](https://github.com/stryder91)
**Co-Maintainer:** [mickael](https://github.com/stryder91)

### Requirements

You need Golang v1.16 and Reactjs.

To add a plugin into your Mattermost instance you need to build by doing this command in the plugin repo:
```
make dist
```

Then grab the .tar.gz, go to system console > plugin > Upload plugin
and then select your .tar.gz which is in dist/

Don't forget to enable the plugin in the adminstrator panel.


## Releasing this plugin

In this plugin you will be able to use predefined scenarios or create or own custom scenarios
to interact with others webservices (at the same time) from the Mattermost chat.

For example in order to create a event and a drive in one command in chat:

```
milo project calendar 2021-06-24 10:18 4 drive workshop 
```
