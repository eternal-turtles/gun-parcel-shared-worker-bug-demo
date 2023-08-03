new SharedWorker(
  new URL("./shared-worker.js", import.meta.url),
  {type: 'module', name: 'gun-parcel-shared-worker-bug-demo'} // Compiled by parcel to "classic" module type.
);
