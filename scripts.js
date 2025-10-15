

function autoResizeTextarea(el) {
    el.style.height = 'auto';
    el.style.height = (el.scrollHeight+20) + 'px';
}

const formattedJson= CodeMirror(document.getElementById("formattedJson"), {
    mode: { name: "javascript", json: true }, // JSON mode
    theme: "default",
    lineNumbers: true,
    tabSize: 2,
    styleActiveLine: true,
    foldGutter: true,
    gutters: ["CodeMirror-foldgutter"]
});

const ele = document.getElementsByClassName("CodeMirror")
ele[0].style.height = "100%";


const rawJson = document.getElementById('rawJson');
    

rawJson.addEventListener('paste', (event) => {
    event.preventDefault();
    const pastedText = (event.clipboardData || window.Clipboard).getData('text');
    rawJson.value = pastedText;
    formattedJson.setValue(pastedText);
    autoResizeTextarea(rawJson);

});



