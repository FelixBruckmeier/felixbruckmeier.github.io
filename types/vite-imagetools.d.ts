/// <reference types="vite/client" />

declare module '*&as=picture' {
  const src: {
    sources: {
      srcset: string;
      type: string;
      sizes?: string;
    }[];
    img: {
      src: string;
      width: number;
      height: number;
    };
  };
  export default src;
}

declare module '*?w=*' {
  const src: string;
  export default src;
}
