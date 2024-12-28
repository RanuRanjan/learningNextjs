Router uses
<!-- Use Link:

For links and buttons in the UI.
For static or predictable navigation paths.
Use redirect:

For automatic navigation based on server-side conditions (e.g., getServerSideProps or next.config.js).
When enforcing SEO-friendly redirects like 301 or 302.
Use useRouter:

When navigation is triggered programmatically (e.g., after an API call or button click).
When you need dynamic access to router properties (e.g., current path, query params). -->

<!-- Onclick handle
In Code 1, the function testingFn is directly passed as the event handler, which is correct.

In the new code, an unnecessary arrow function is used, and it doesn't actually call testingFn. As a result, clicking on the element won't trigger any action. -->