const html_code = document.querySelector(".html-code textarea");
const css_code = document.querySelector(".css-code textarea");
const js_code = document.querySelector(".js-code textarea");

const result = document.querySelector("#result");

function run() {
    localStorage.setItem('html_code', html_code.value);
    result.contDocument.body.innerHtml = `<style>${css_code.value}</style>` + html_code.value; 
}

html_code.onkeyup = () => run();
css_code.onkeyup = () => run();
js_code.onkeyup = () => run();