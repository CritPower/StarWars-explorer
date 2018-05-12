function OnLoadHandler() {
    if (document.readyState === "complete") {
        let element = document.querySelectorAll("h1");
        element[0].innerText = document.readyState;
    }
}

export { OnLoadHandler };
