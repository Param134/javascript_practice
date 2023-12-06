//localStorage and sessionStorage allow you to store key-value pairs in the browser, persisting even after the page is reloaded (localStorage) or cleared when the session ends (sessionStorage).

// Local Storage
localStorage.setItem("user", JSON.stringify({ name: "Bob" }));
const storedUser = JSON.parse(localStorage.getItem("user"));

// Session Storage
sessionStorage.setItem("token", "abcd1234");
const storedToken = sessionStorage.getItem("token");
