const staticPaths = new Set(["/","/@qwik-city-not-found-paths.js","/@qwik-city-plan.mjs","/@qwik-city-static-paths.js","/entry.ssr.js","/entry.ssr.mjs","/flower/","/package.json","/sitemap.xml"]);
function isStaticPath(p) {
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  return false;
}
export { isStaticPath };