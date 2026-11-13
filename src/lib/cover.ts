import { readFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";
import sharp from "sharp";
import type { TagId } from "../data/tags";
import { motifSvg } from "./motifs.ts";

const INK = "#111111";
const MUTED = "#666666";

export const coverSizes = {
  cover: { width: 1200, height: 630 },
  "cover-4x3": { width: 1200, height: 900 },
  "cover-square": { width: 1200, height: 1200 },
} as const;

export type CoverName = keyof typeof coverSizes;

export const coverNames = Object.keys(coverSizes) as CoverName[];

export interface CoverInput {
  title: string;
  tag?: { id: TagId; label: string };
  site: string;
}

type Node = { type: string; props: Record<string, unknown> };

const fontFile = (pkg: string, file: string) =>
  readFileSync(
    join(process.cwd(), "node_modules/@fontsource", pkg, "files", file),
  );

let fonts: Parameters<typeof satori>[1]["fonts"] | undefined;

function loadFonts() {
  fonts ??= [
    ["Newsreader", 500, "newsreader", "newsreader-latin-500-normal.woff"],
    ["Newsreader", 500, "newsreader", "newsreader-latin-ext-500-normal.woff"],
    ["Geist", 400, "geist", "geist-latin-400-normal.woff"],
    ["Geist", 500, "geist", "geist-latin-500-normal.woff"],
  ].map(([name, weight, pkg, file]) => ({
    name: name as string,
    weight: weight as 400 | 500,
    style: "normal" as const,
    data: fontFile(pkg as string, file as string),
  }));
  return fonts;
}

function titleWords(title: string): string[] {
  const words: string[] = [];
  for (const word of title.split(" ")) {
    const previous = words.at(-1);
    const attaches =
      previous !== undefined &&
      (/^[:;!?»]+$/.test(word) || previous.endsWith("«"));
    if (attaches) words[words.length - 1] = `${previous} ${word}`;
    else words.push(word);
  }
  return words;
}

function titleSize(title: string, name: CoverName): number {
  const base = title.length <= 40 ? 70 : title.length <= 56 ? 62 : 56;
  return name === "cover-square" ? Math.round(base * 1.2) : base;
}

function titleNode(title: string, name: CoverName): Node {
  const size = titleSize(title, name);
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexWrap: "wrap",
        columnGap: `${Math.round(size * 0.26)}px`,
        fontFamily: "Newsreader",
        fontSize: size,
        lineHeight: 1.1,
        letterSpacing: "-0.01em",
      },
      children: titleWords(title).map((word) => ({
        type: "span",
        props: { style: { whiteSpace: "nowrap" }, children: word },
      })),
    },
  };
}

function metaNode({ tag, site }: CoverInput): Node {
  return {
    type: "div",
    props: {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        fontFamily: "Geist",
      },
      children: [
        ...(tag
          ? [
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 25,
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  },
                  children: tag.label,
                },
              },
            ]
          : []),
        {
          type: "div",
          props: { style: { fontSize: 27, color: MUTED }, children: site },
        },
      ],
    },
  };
}

function motifNode(tag: TagId, size: number): Node {
  const svg = motifSvg(tag, INK);
  return {
    type: "img",
    props: {
      src: `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`,
      width: size,
      height: size,
    },
  };
}

function layout(input: CoverInput, name: CoverName): Node {
  const { width, height } = coverSizes[name];
  const root = { width, height, backgroundColor: "#ffffff", color: INK };
  if (name === "cover") {
    const inner = height - 168;
    return {
      type: "div",
      props: {
        style: { ...root, display: "flex", padding: "84px 90px", gap: "64px" },
        children: [
          {
            type: "div",
            props: {
              style: {
                width: input.tag ? "616px" : "1020px",
                height: `${inner}px`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              },
              children: [titleNode(input.title, name), metaNode(input)],
            },
          },
          ...(input.tag
            ? [
                {
                  type: "div",
                  props: {
                    style: {
                      width: "340px",
                      height: `${inner}px`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    children: motifNode(input.tag.id, 340),
                  },
                },
              ]
            : []),
        ],
      },
    };
  }
  const padding = name === "cover-square" ? 96 : 84;
  return {
    type: "div",
    props: {
      style: { ...root, display: "flex", padding: `${padding}px` },
      children: {
        type: "div",
        props: {
          style: {
            width: `${width - 2 * padding}px`,
            height: `${height - 2 * padding}px`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
          children: [
            ...(input.tag
              ? [motifNode(input.tag.id, name === "cover-square" ? 260 : 190)]
              : []),
            titleNode(input.title, name),
            metaNode(input),
          ],
        },
      },
    },
  };
}

export async function renderCover(
  input: CoverInput,
  name: CoverName,
): Promise<Buffer> {
  const { width, height } = coverSizes[name];
  const svg = await satori(layout(input, name), {
    width,
    height,
    fonts: loadFonts(),
  });
  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
}
