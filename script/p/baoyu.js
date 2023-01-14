var modifiedHeaders = $request.headers;


modifiedHeaders['authorization'] = 'bearer 9fddbf3fb8ce8ef6c200bcb9e070b84a';

$done({headers : modifiedHeaders});
