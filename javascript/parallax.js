

(function() {
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");

    function parallax(e) {
        let _w = window.innerWidth;
        let _h = window.innerHeight;
        let _mouseX = e.clientX / _w;
        let _mouseY = e.clientY / _h;

        // Smaller movement values to avoid big jumps
        let _depth1 = `${50 + (_mouseX - 0.5) * 10}% ${50 + (_mouseY - 0.5) * 10}%`;
        let _depth2 = `${50 + (_mouseX - 0.5) * 20}% ${50 + (_mouseY - 0.5) * 20}%`;
        let _depth3 = `${50 + (_mouseX - 0.5) * 30}% ${50 + (_mouseY - 0.5) * 30}%`;

        elem.style.backgroundPosition = `${_depth3}, ${_depth2}, ${_depth1}`;
    }
})();