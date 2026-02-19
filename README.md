# Portfolio

Built using Next.js and Tailwind CSS, utilizing Static Site Generation (SSG) for optimized performance and deployment on GitHub Pages.

## SVGR Integration

The project utilizes [`@svgr/webpack`](https://www.npmjs.com/package/@svgr/webpack) to transform SVG files into React components. The icons are primarily utilized within the skill badges.

- **Single Source of Truth**: A centralized directory at `src/assets/icons` houses all SVG files, ensuring consistency across the application.
- **Tailwind CSS Styling**: To enable dynamic styling, hardcoded properties (such as `fill`) are removed from the raw SVG source. This allows the icons to be styled using Tailwind classes (e.g., `fill-accent`) rather than being restricted by fixed attributes.
- **Statically Typed Icons**: An `index.ts` file maps the SVG components to a central `icons` object. By using `keyof typeof icons`, the available icon names are statically typed, preventing runtime errors and improving developer experience.

### Implementation Example

Icons are exported and mapped in [`src/assets/icons/index.ts`](https://github.com/Bitstachio/portfolio/blob/main/src/assets/icons/index.ts):

```typescript
import GitHubIcon from "./social/github.svg";

export const icons = {
  github: {
    label: "GitHub",
    svg: GitHubIcon,
  },
  // ... other icons
} satisfies Record<string, TIcon>;

export type TIconName = keyof typeof icons;
```

These are then used via a generic [`Icon`](https://github.com/Bitstachio/portfolio/blob/main/src/components/ui/Icon/Icon.tsx) component:

```typescript
<Icon name={"github"} className="fill-accent h-3 w-3 sm:h-4 sm:w-4" />
```
