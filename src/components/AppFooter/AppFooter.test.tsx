import * as Gatsby from 'gatsby';
import { vi } from 'vitest';
import createComponentWithIntl from '@/test/testHelpers';

import AppFooter from './AppFooter';

export const useStaticQuery = vi.spyOn(Gatsby, `useStaticQuery`);
export const mockUseStaticQuery = {
  allImageSharp: {
    totalCount: 19,
    edges: [
      {
        node: {
          id: `34192fac-6dc5-5609-b026-e17fed8caa7b`,
          original: {
            src: `/static/arc-475c466246c4936c59bc7c813e0fd6d1.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#089858`,
            images: {
              fallback: {
                src: `/static/475c466246c4936c59bc7c813e0fd6d1/96ad5/arc.png`,
                srcSet: `/static/475c466246c4936c59bc7c813e0fd6d1/b6368/arc.png 125w,\n/static/475c466246c4936c59bc7c813e0fd6d1/70b69/arc.png 250w,\n/static/475c466246c4936c59bc7c813e0fd6d1/96ad5/arc.png 500w`,
                sizes: `(min-width: 500px) 500px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/475c466246c4936c59bc7c813e0fd6d1/d4050/arc.webp 125w,\n/static/475c466246c4936c59bc7c813e0fd6d1/0ec85/arc.webp 250w,\n/static/475c466246c4936c59bc7c813e0fd6d1/ee66f/arc.webp 500w`,
                  type: `image/webp`,
                  sizes: `(min-width: 500px) 500px, 100vw`,
                },
              ],
            },
            width: 500,
            height: 505,
          },
        },
      },
      {
        node: {
          id: `eec07cc7-79d8-5e2a-870e-15890c4ec6cf`,
          original: {
            src: `/static/dot-468433d4802e3809dadad24d1a7f4a3c.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#080808`,
            images: {
              fallback: {
                src: `/static/468433d4802e3809dadad24d1a7f4a3c/1de3b/dot.png`,
                srcSet: `/static/468433d4802e3809dadad24d1a7f4a3c/bbc9f/dot.png 88w,\n/static/468433d4802e3809dadad24d1a7f4a3c/e6966/dot.png 175w,\n/static/468433d4802e3809dadad24d1a7f4a3c/1de3b/dot.png 350w`,
                sizes: `(min-width: 350px) 350px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/468433d4802e3809dadad24d1a7f4a3c/aa8de/dot.webp 88w,\n/static/468433d4802e3809dadad24d1a7f4a3c/c54d4/dot.webp 175w,\n/static/468433d4802e3809dadad24d1a7f4a3c/c6bc4/dot.webp 350w`,
                  type: `image/webp`,
                  sizes: `(min-width: 350px) 350px, 100vw`,
                },
              ],
            },
            width: 350,
            height: 351,
          },
        },
      },
      {
        node: {
          id: `77f4252a-6d57-5294-94a3-f77cd219d437`,
          original: {
            src: `/static/dotr-ee76fed718327edc937dbbfc1899f6a5.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#085898`,
            images: {
              fallback: {
                src: `/static/ee76fed718327edc937dbbfc1899f6a5/6f644/dotr.png`,
                srcSet: `/static/ee76fed718327edc937dbbfc1899f6a5/9703a/dotr.png 53w,\n/static/ee76fed718327edc937dbbfc1899f6a5/0ae7b/dotr.png 106w,\n/static/ee76fed718327edc937dbbfc1899f6a5/6f644/dotr.png 211w`,
                sizes: `(min-width: 211px) 211px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/ee76fed718327edc937dbbfc1899f6a5/ae675/dotr.webp 53w,\n/static/ee76fed718327edc937dbbfc1899f6a5/7a2a0/dotr.webp 106w,\n/static/ee76fed718327edc937dbbfc1899f6a5/16179/dotr.webp 211w`,
                  type: `image/webp`,
                  sizes: `(min-width: 211px) 211px, 100vw`,
                },
              ],
            },
            width: 211,
            height: 211,
          },
        },
      },
      {
        node: {
          id: `afb505a7-678b-5339-b5c4-e588caed3cb2`,
          original: {
            src: `/static/hud-868c500e4529ebc8f81a9d2fe75cec21.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#f8f8f8`,
            images: {
              fallback: {
                src: `/static/868c500e4529ebc8f81a9d2fe75cec21/d8461/hud.png`,
                srcSet: `/static/868c500e4529ebc8f81a9d2fe75cec21/342c3/hud.png 56w,\n/static/868c500e4529ebc8f81a9d2fe75cec21/e101a/hud.png 113w,\n/static/868c500e4529ebc8f81a9d2fe75cec21/d8461/hud.png 225w`,
                sizes: `(min-width: 225px) 225px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/868c500e4529ebc8f81a9d2fe75cec21/f8744/hud.webp 56w,\n/static/868c500e4529ebc8f81a9d2fe75cec21/26b1c/hud.webp 113w,\n/static/868c500e4529ebc8f81a9d2fe75cec21/252a0/hud.webp 225w`,
                  type: `image/webp`,
                  sizes: `(min-width: 225px) 225px, 100vw`,
                },
              ],
            },
            width: 225,
            height: 225,
          },
        },
      },
      {
        node: {
          id: `72408185-a0a9-5f3f-9a5f-165d69d7ba71`,
          original: {
            src: `/static/sba-b784e0520f83fb757b0a8824b527a42c.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#080808`,
            images: {
              fallback: {
                src: `/static/b784e0520f83fb757b0a8824b527a42c/82c11/sba.png`,
                srcSet: `/static/b784e0520f83fb757b0a8824b527a42c/2fd20/sba.png 125w,\n/static/b784e0520f83fb757b0a8824b527a42c/de391/sba.png 250w,\n/static/b784e0520f83fb757b0a8824b527a42c/82c11/sba.png 500w`,
                sizes: `(min-width: 500px) 500px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/b784e0520f83fb757b0a8824b527a42c/d66e1/sba.webp 125w,\n/static/b784e0520f83fb757b0a8824b527a42c/e7160/sba.webp 250w,\n/static/b784e0520f83fb757b0a8824b527a42c/5f169/sba.webp 500w`,
                  type: `image/webp`,
                  sizes: `(min-width: 500px) 500px, 100vw`,
                },
              ],
            },
            width: 500,
            height: 500,
          },
        },
      },
      {
        node: {
          id: `0c6a1e0d-b32f-5b24-bf0b-3bb0caa1b8b8`,
          original: {
            src: `/static/tva-47630853a975190e83106fc33c4020aa.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#083878`,
            images: {
              fallback: {
                src: `/static/47630853a975190e83106fc33c4020aa/88313/tva.png`,
                srcSet: `/static/47630853a975190e83106fc33c4020aa/ad998/tva.png 70w,\n/static/47630853a975190e83106fc33c4020aa/ba5dd/tva.png 140w,\n/static/47630853a975190e83106fc33c4020aa/88313/tva.png 280w`,
                sizes: `(min-width: 280px) 280px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/47630853a975190e83106fc33c4020aa/299bc/tva.webp 70w,\n/static/47630853a975190e83106fc33c4020aa/29111/tva.webp 140w,\n/static/47630853a975190e83106fc33c4020aa/ad5f4/tva.webp 280w`,
                  type: `image/webp`,
                  sizes: `(min-width: 280px) 280px, 100vw`,
                },
              ],
            },
            width: 280,
            height: 280,
          },
        },
      },
      {
        node: {
          id: `9f8da72f-8357-5202-9aa6-d3e153c15913`,
          original: {
            src: `/static/usda-245a6593ddecefd9ee7dafcaf4f72681.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#f8f8f8`,
            images: {
              fallback: {
                src: `/static/245a6593ddecefd9ee7dafcaf4f72681/82c11/usda.png`,
                srcSet: `/static/245a6593ddecefd9ee7dafcaf4f72681/2fd20/usda.png 125w,\n/static/245a6593ddecefd9ee7dafcaf4f72681/de391/usda.png 250w,\n/static/245a6593ddecefd9ee7dafcaf4f72681/82c11/usda.png 500w`,
                sizes: `(min-width: 500px) 500px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/245a6593ddecefd9ee7dafcaf4f72681/d66e1/usda.webp 125w,\n/static/245a6593ddecefd9ee7dafcaf4f72681/e7160/usda.webp 250w,\n/static/245a6593ddecefd9ee7dafcaf4f72681/5f169/usda.webp 500w`,
                  type: `image/webp`,
                  sizes: `(min-width: 500px) 500px, 100vw`,
                },
              ],
            },
            width: 500,
            height: 500,
          },
        },
      },
      {
        node: {
          id: `19081ab4-0280-5dd5-a23d-ed9a918b46bf`,
          original: {
            src: `/static/doc-7c29cc75f22c4aadd64b089da022132e.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#f8f8f8`,
            images: {
              fallback: {
                src: `/static/7c29cc75f22c4aadd64b089da022132e/88e48/doc.png`,
                srcSet: `/static/7c29cc75f22c4aadd64b089da022132e/bbc9f/doc.png 88w,\n/static/7c29cc75f22c4aadd64b089da022132e/41cc8/doc.png 175w,\n/static/7c29cc75f22c4aadd64b089da022132e/88e48/doc.png 350w`,
                sizes: `(min-width: 350px) 350px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/7c29cc75f22c4aadd64b089da022132e/aa8de/doc.webp 88w,\n/static/7c29cc75f22c4aadd64b089da022132e/51bad/doc.webp 175w,\n/static/7c29cc75f22c4aadd64b089da022132e/6cac9/doc.webp 350w`,
                  type: `image/webp`,
                  sizes: `(min-width: 350px) 350px, 100vw`,
                },
              ],
            },
            width: 350,
            height: 350,
          },
        },
      },
      {
        node: {
          id: `6bfaac55-356b-5b71-8083-1afcdc86203d`,
          original: {
            src: `/static/doed-3ce7614243938f631c566e76111a995f.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#080808`,
            images: {
              fallback: {
                src: `/static/3ce7614243938f631c566e76111a995f/88e48/doed.png`,
                srcSet: `/static/3ce7614243938f631c566e76111a995f/bbc9f/doed.png 88w,\n/static/3ce7614243938f631c566e76111a995f/41cc8/doed.png 175w,\n/static/3ce7614243938f631c566e76111a995f/88e48/doed.png 350w`,
                sizes: `(min-width: 350px) 350px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/3ce7614243938f631c566e76111a995f/aa8de/doed.webp 88w,\n/static/3ce7614243938f631c566e76111a995f/51bad/doed.webp 175w,\n/static/3ce7614243938f631c566e76111a995f/6cac9/doed.webp 350w`,
                  type: `image/webp`,
                  sizes: `(min-width: 350px) 350px, 100vw`,
                },
              ],
            },
            width: 350,
            height: 350,
          },
        },
      },
      {
        node: {
          id: `fb4f8e3d-4542-5e95-9182-a5f5176c79d7`,
          original: {
            src: `/static/epa-1f8cd5011dfc3c427e83e48027f879f5.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#f8f8f8`,
            images: {
              fallback: {
                src: `/static/1f8cd5011dfc3c427e83e48027f879f5/82c11/epa.png`,
                srcSet: `/static/1f8cd5011dfc3c427e83e48027f879f5/2fd20/epa.png 125w,\n/static/1f8cd5011dfc3c427e83e48027f879f5/de391/epa.png 250w,\n/static/1f8cd5011dfc3c427e83e48027f879f5/82c11/epa.png 500w`,
                sizes: `(min-width: 500px) 500px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/1f8cd5011dfc3c427e83e48027f879f5/d66e1/epa.webp 125w,\n/static/1f8cd5011dfc3c427e83e48027f879f5/e7160/epa.webp 250w,\n/static/1f8cd5011dfc3c427e83e48027f879f5/5f169/epa.webp 500w`,
                  type: `image/webp`,
                  sizes: `(min-width: 500px) 500px, 100vw`,
                },
              ],
            },
            width: 500,
            height: 500,
          },
        },
      },
      {
        node: {
          id: `35920894-58ec-5525-b8a0-572e1e36c9d2`,
          original: {
            src: `/static/hhs-3423cb76c708b7fc9b83b7ba39af670a.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#080808`,
            images: {
              fallback: {
                src: `/static/3423cb76c708b7fc9b83b7ba39af670a/82c11/hhs.png`,
                srcSet: `/static/3423cb76c708b7fc9b83b7ba39af670a/2fd20/hhs.png 125w,\n/static/3423cb76c708b7fc9b83b7ba39af670a/de391/hhs.png 250w,\n/static/3423cb76c708b7fc9b83b7ba39af670a/82c11/hhs.png 500w`,
                sizes: `(min-width: 500px) 500px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/3423cb76c708b7fc9b83b7ba39af670a/d66e1/hhs.webp 125w,\n/static/3423cb76c708b7fc9b83b7ba39af670a/e7160/hhs.webp 250w,\n/static/3423cb76c708b7fc9b83b7ba39af670a/5f169/hhs.webp 500w`,
                  type: `image/webp`,
                  sizes: `(min-width: 500px) 500px, 100vw`,
                },
              ],
            },
            width: 500,
            height: 500,
          },
        },
      },
      {
        node: {
          id: `11e1696a-4fdd-5bc5-809d-8d5be8730724`,
          original: {
            src: `/static/nasa-2e8ec149761226d66403deb7785b2eb6.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#080808`,
            images: {
              fallback: {
                src: `/static/2e8ec149761226d66403deb7785b2eb6/82c11/nasa.png`,
                srcSet: `/static/2e8ec149761226d66403deb7785b2eb6/2fd20/nasa.png 125w,\n/static/2e8ec149761226d66403deb7785b2eb6/de391/nasa.png 250w,\n/static/2e8ec149761226d66403deb7785b2eb6/82c11/nasa.png 500w`,
                sizes: `(min-width: 500px) 500px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/2e8ec149761226d66403deb7785b2eb6/d66e1/nasa.webp 125w,\n/static/2e8ec149761226d66403deb7785b2eb6/e7160/nasa.webp 250w,\n/static/2e8ec149761226d66403deb7785b2eb6/5f169/nasa.webp 500w`,
                  type: `image/webp`,
                  sizes: `(min-width: 500px) 500px, 100vw`,
                },
              ],
            },
            width: 500,
            height: 500,
          },
        },
      },
      {
        node: {
          id: `caa32196-ece7-5ae8-8e80-0083336c9c84`,
          original: {
            src: `/static/nsf-6fbb705e52ec16caa1f4e8c784f985da.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#080808`,
            images: {
              fallback: {
                src: `/static/6fbb705e52ec16caa1f4e8c784f985da/82c11/nsf.png`,
                srcSet: `/static/6fbb705e52ec16caa1f4e8c784f985da/2fd20/nsf.png 125w,\n/static/6fbb705e52ec16caa1f4e8c784f985da/de391/nsf.png 250w,\n/static/6fbb705e52ec16caa1f4e8c784f985da/82c11/nsf.png 500w`,
                sizes: `(min-width: 500px) 500px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/6fbb705e52ec16caa1f4e8c784f985da/d66e1/nsf.webp 125w,\n/static/6fbb705e52ec16caa1f4e8c784f985da/e7160/nsf.webp 250w,\n/static/6fbb705e52ec16caa1f4e8c784f985da/5f169/nsf.webp 500w`,
                  type: `image/webp`,
                  sizes: `(min-width: 500px) 500px, 100vw`,
                },
              ],
            },
            width: 500,
            height: 500,
          },
        },
      },
      {
        node: {
          id: `548e3c37-3bda-5c9a-bf05-6e225be016fc`,
          original: {
            src: `/static/agency-a-064d2eacbbb428770b4480c1b13587b4.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#f8f8f8`,
            images: {
              fallback: {
                src: `/static/064d2eacbbb428770b4480c1b13587b4/65c86/agency-a.png`,
                srcSet: `/static/064d2eacbbb428770b4480c1b13587b4/71213/agency-a.png 125w,\n/static/064d2eacbbb428770b4480c1b13587b4/0ffb6/agency-a.png 250w,\n/static/064d2eacbbb428770b4480c1b13587b4/65c86/agency-a.png 500w`,
                sizes: `(min-width: 500px) 500px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/064d2eacbbb428770b4480c1b13587b4/4a7bd/agency-a.webp 125w,\n/static/064d2eacbbb428770b4480c1b13587b4/34055/agency-a.webp 250w,\n/static/064d2eacbbb428770b4480c1b13587b4/94d7f/agency-a.webp 500w`,
                  type: `image/webp`,
                  sizes: `(min-width: 500px) 500px, 100vw`,
                },
              ],
            },
            width: 500,
            height: 416,
          },
        },
      },
      {
        node: {
          id: `71ee94ef-5cbb-5cc6-8dd6-b6d03128a8b7`,
          original: {
            src: `/static/dra-d2b6eb6d13f14aa322c299482f55f0a1.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#080808`,
            images: {
              fallback: {
                src: `/static/d2b6eb6d13f14aa322c299482f55f0a1/5716f/dra.png`,
                srcSet: `/static/d2b6eb6d13f14aa322c299482f55f0a1/1e010/dra.png 110w,\n/static/d2b6eb6d13f14aa322c299482f55f0a1/43be6/dra.png 220w,\n/static/d2b6eb6d13f14aa322c299482f55f0a1/5716f/dra.png 440w`,
                sizes: `(min-width: 440px) 440px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/d2b6eb6d13f14aa322c299482f55f0a1/8c6ff/dra.webp 110w,\n/static/d2b6eb6d13f14aa322c299482f55f0a1/4c27b/dra.webp 220w,\n/static/d2b6eb6d13f14aa322c299482f55f0a1/262c3/dra.webp 440w`,
                  type: `image/webp`,
                  sizes: `(min-width: 440px) 440px, 100vw`,
                },
              ],
            },
            width: 440,
            height: 440,
          },
        },
      },
      {
        node: {
          id: `51071f5d-61cd-5b0d-839e-f3da02623c25`,
          original: {
            src: `/static/footer-seal-0b564c52880012d2cf2cf2ead8582803.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#f8f8f8`,
            images: {
              fallback: {
                src: `/static/0b564c52880012d2cf2cf2ead8582803/82c11/footer-seal.png`,
                srcSet: `/static/0b564c52880012d2cf2cf2ead8582803/2fd20/footer-seal.png 125w,\n/static/0b564c52880012d2cf2cf2ead8582803/de391/footer-seal.png 250w,\n/static/0b564c52880012d2cf2cf2ead8582803/82c11/footer-seal.png 500w`,
                sizes: `(min-width: 500px) 500px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/0b564c52880012d2cf2cf2ead8582803/d66e1/footer-seal.webp 125w,\n/static/0b564c52880012d2cf2cf2ead8582803/e7160/footer-seal.webp 250w,\n/static/0b564c52880012d2cf2cf2ead8582803/5f169/footer-seal.webp 500w`,
                  type: `image/webp`,
                  sizes: `(min-width: 500px) 500px, 100vw`,
                },
              ],
            },
            width: 500,
            height: 500,
          },
        },
      },
      {
        node: {
          id: `f705fc15-cdfa-56d9-aa32-940011c75d96`,
          original: {
            src: `/static/va-768f0ce2e4afdc9452d88ba4ee3d8d48.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#f8f8f8`,
            images: {
              fallback: {
                src: `/static/768f0ce2e4afdc9452d88ba4ee3d8d48/d8461/va.png`,
                srcSet: `/static/768f0ce2e4afdc9452d88ba4ee3d8d48/342c3/va.png 56w,\n/static/768f0ce2e4afdc9452d88ba4ee3d8d48/e101a/va.png 113w,\n/static/768f0ce2e4afdc9452d88ba4ee3d8d48/d8461/va.png 225w`,
                sizes: `(min-width: 225px) 225px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/768f0ce2e4afdc9452d88ba4ee3d8d48/f8744/va.webp 56w,\n/static/768f0ce2e4afdc9452d88ba4ee3d8d48/26b1c/va.webp 113w,\n/static/768f0ce2e4afdc9452d88ba4ee3d8d48/252a0/va.webp 225w`,
                  type: `image/webp`,
                  sizes: `(min-width: 225px) 225px, 100vw`,
                },
              ],
            },
            width: 225,
            height: 225,
          },
        },
      },
      {
        node: {
          id: `472bd4c8-ebc7-5bbd-bc4b-9734684285ba`,
          original: {
            src: `/static/doj-59b7a4fdd5ad5f6bdc75b45bfe08c5db.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#080808`,
            images: {
              fallback: {
                src: `/static/59b7a4fdd5ad5f6bdc75b45bfe08c5db/ec333/doj.png`,
                srcSet: `/static/59b7a4fdd5ad5f6bdc75b45bfe08c5db/a8b52/doj.png 120w,\n/static/59b7a4fdd5ad5f6bdc75b45bfe08c5db/87351/doj.png 240w,\n/static/59b7a4fdd5ad5f6bdc75b45bfe08c5db/ec333/doj.png 480w`,
                sizes: `(min-width: 480px) 480px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/59b7a4fdd5ad5f6bdc75b45bfe08c5db/507b0/doj.webp 120w,\n/static/59b7a4fdd5ad5f6bdc75b45bfe08c5db/8d565/doj.webp 240w,\n/static/59b7a4fdd5ad5f6bdc75b45bfe08c5db/21b1a/doj.webp 480w`,
                  type: `image/webp`,
                  sizes: `(min-width: 480px) 480px, 100vw`,
                },
              ],
            },
            width: 480,
            height: 480,
          },
        },
      },
      {
        node: {
          id: `ba8803fe-f122-5f4a-ac7c-a8080d585641`,
          original: {
            src: `/static/dod-fa0583e002bc233ff75b7f24cd6de725.png`,
          },
          gatsbyImageData: {
            layout: `constrained`,
            backgroundColor: `#080808`,
            images: {
              fallback: {
                src: `/static/fa0583e002bc233ff75b7f24cd6de725/82c11/dod.png`,
                srcSet: `/static/fa0583e002bc233ff75b7f24cd6de725/2fd20/dod.png 125w,\n/static/fa0583e002bc233ff75b7f24cd6de725/de391/dod.png 250w,\n/static/fa0583e002bc233ff75b7f24cd6de725/82c11/dod.png 500w`,
                sizes: `(min-width: 500px) 500px, 100vw`,
              },
              sources: [
                {
                  srcSet: `/static/fa0583e002bc233ff75b7f24cd6de725/d66e1/dod.webp 125w,\n/static/fa0583e002bc233ff75b7f24cd6de725/e7160/dod.webp 250w,\n/static/fa0583e002bc233ff75b7f24cd6de725/5f169/dod.webp 500w`,
                  type: `image/webp`,
                  sizes: `(min-width: 500px) 500px, 100vw`,
                },
              ],
            },
            width: 500,
            height: 500,
          },
        },
      },
    ],
  },
};

describe(`rendering of AppFooter Component`, () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
  it(`checks if component renders`, () => {
    const component = createComponentWithIntl(<AppFooter />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
