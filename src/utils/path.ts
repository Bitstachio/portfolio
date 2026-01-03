// Required for GitHub Pages
// Static export does not rewrite `basePath` for dynamic asset paths, so prepend it manually in production
export const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
