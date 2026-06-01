/** @type {import('zudoku').ZudokuConfig} */
const config = {
  basePath: "/hotel-booking-api-system",
  
  router: {
    type: "hash"
  },

  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Zudoku",
      width: "130px",
    },
  },
  
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            "/installation",  
            "/authorization",
            "/about-project", 
          ],
        },
        {
          type: "category",
          label: "API Reference",
          icon: "folder-cog",
          items: [
            {
              type: "link",
              label: "All Endpoints",
              to: "/api",
            },
          ],
        },
      ],
    },

    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
    {
      type: "link",
      to: "/about-author", 
      label: "About",
    },
  ],
  
  redirects: [{ from: "/", to: "/introduction" }],
  
  apis: [
    {
      type: "file",
      input: "./openapi.yaml", 
      path: "/api",
    },
  ],
};

export default config;