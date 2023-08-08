const H5guard = require('./mt.js');
const {workerData,parentPort} = require("worker_threads");
!((async () => {
    const {cookieStr, userAgent, fullUrl, data} = workerData;
    const h5guard = new H5guard(cookieStr, userAgent);
    const result = await h5guard.sign(fullUrl, data);
    // console.log(result);
    parentPort.postMessage(result);
})());
