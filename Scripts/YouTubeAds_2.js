/**
 * By iceparis
 */

if ($request.url.indexOf("&ctier") != -1) {
  let url = $request.url.replace(/ctier=[A-Z]/, "ctier=A");
  $done({ response: { status: 307, headers: { Location: url } } });
} else {
  $done({})
}
