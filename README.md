# gun-parcel-shared-worker-bug-demo

Inspecting the worker logs reveals a stack trace:

```
Hello wonderful person! :) Thanks for using GUN, please ask for help on http://chat.gun.eco if anything takes you longer than 5min to figure out!
shared-worker.6ba9b1e7.js?1691033369980:63 Uncaught Error: Cannot find module './gun'
    at newRequire (shared-worker.6ba9b1e7.js?1691033369980:61:19)
    at newRequire (shared-worker.6ba9b1e7.js?1691033369980:45:18)
    at localRequire (shared-worker.6ba9b1e7.js?1691033369980:84:35)
    at USE (sea.js:5:17)
    at sea.js:848:60
    at sea.js:6:7
    at sea.js:855:3
    at gjHjA.109fe070e0a80d54 (sea.js:1537:1)
    at newRequire (shared-worker.6ba9b1e7.js?1691033369980:71:24)
    at localRequire (shared-worker.6ba9b1e7.js?1691033369980:84:35)
```

See:

* [https://parceljs.org/languages/javascript/#web-workers](https://parceljs.org/languages/javascript/#web-workers)
