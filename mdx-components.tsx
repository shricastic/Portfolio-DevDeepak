import type { MDXComponents } from "mdx/types";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-white">{children}</h1>,
    h2: ({ children }) => <h2 className="text-white">{children}</h2>,
    h3: ({ children }) => <h3 className="text-white">{children}</h3>,
    h4: ({ children }) => <h4 className="text-white">{children}</h4>,
    h5: ({ children }) => <h5 className="text-white">{children}</h5>,
    h6: ({ children }) => <h6 className="text-white">{children}</h6>,
    ...components,
  };
}
