var modifiedHeaders = $request.headers;
modifiedHeaders.X-RevenueCat-ETag = undefined;
$done({
    headers: modifiedHeaders
});