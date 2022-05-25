# Content-Security-Policy (CSP) compliance in order to avoid the usage of unsafe-inline policy while in production.

### \*unsafe-inline policy shall be avoided at all costs, as it could open the door to unwanted XSS attacks

##### Learn more about [unsafe-inline policy](https://content-security-policy.com/unsafe-inline/)

1. Remove inline `<style>` tag generated in `<head>` from bundled index.html
2. Remove `<link rel="...">` having `...onload="this.media='all'"` of bundled css file
3. Use the snippet below instead, to inject the bundled css after the page has loaded
4. Move the snippet into its own js file and call `<script src="SNIPPET_PATH.js" defer/>` from index.html's `<head>`
5. Finally, you may start serving the bundled resources using npm start

Snippet:

```javascript
window.onload = () => {
    document
        .getElementsByTagName('head')[0]
        .insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="/bundle.BUNDLE_HASH_VALUE.css" media="all" />'
        )
    this.media = 'all'
}
```
