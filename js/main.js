document.addEventListener("DOMContentLoaded", () => {

    const cursor = document.querySelector("#cursor");
    const logo = document.querySelector("#logo");
    const logoMask = document.querySelector("#logoMask");

    const mouse = { x: 0, y: 0 };
    let isLight = true;

    /* ========================= */
    /* Animation Loop */
    /* ========================= */

    const animate = () => {
        cursor.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;

        const rect = logoMask.getBoundingClientRect();
        logoMask.style.clipPath = `circle(calc(var(--cursorSize) * 0.48) at 
            ${mouse.x - rect.left}px 
            ${mouse.y - rect.top}px)`;

        requestAnimationFrame(animate);
    };

    animate();

    /* ========================= */
    /* Mouse Move */
    /* ========================= */

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    /* ========================= */
    /* Theme Toggle */
    /* ========================= */

    const toggleTheme = () => {
        isLight = !isLight;

        document.body.style.setProperty(
            "--textColor",
            isLight ? "black" : "white"
        );

        document.body.style.setProperty(
            "--bgColor",
            isLight ? "white" : "black"
        );

        logo.textContent = isLight ? "LIGHT" : "DARK";
        logoMask.textContent = isLight ? "DARK" : "LIGHT";
    };

    logo.addEventListener("click", toggleTheme);

    /* ========================= */
    /* Cursor Hover Effect */
    /* ========================= */

    const handleHover = (e) => {
        document.body.style.setProperty(
            "--cursorSize",
            e.type === "mouseenter" ? "12vw" : "6vw"
        );
    };

    logo.addEventListener("mouseenter", handleHover);
    logo.addEventListener("mouseleave", handleHover);

});