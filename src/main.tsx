import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle 404.html redirect for GitHub Pages SPA
window.addEventListener('load', function () {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
        history.replaceState(null, null, redirect);
    }
});

createRoot(document.getElementById("root")!).render(<App />);