// src/lib/image.ts
export type PictureLike = {
  sources?: Array<{
    srcset: string;
    type: string;
    sizes?: string;
  }>;
  img?: { src: string; width: number; height: number };
};

export type ImgLike = string | PictureLike;

export function imgUrl(img?: ImgLike) {
  if (!img) return undefined;
  return typeof img === "string" ? img : img.img?.src;
}
