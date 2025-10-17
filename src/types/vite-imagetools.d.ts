/* src/types/vite-imagetools.d.ts */

declare module "*?*" {
  const out: {
    sources?: Array<{
      srcset: string;
      type: string;
      sizes?: string;
    }>;
    img: { src: string; width: number; height: number };
  };
  export default out;
}
