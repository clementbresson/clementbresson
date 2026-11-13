import type { TagId } from "../data/tags";

const line = `fill="none" stroke="currentColor" stroke-width="3"`;
const solid = `fill="currentColor"`;

export const motifs: Record<TagId, string> = {
  architecture: `<rect x="14" y="14" width="72" height="72" ${line}/><rect x="114" y="14" width="72" height="72" ${line}/><rect x="14" y="114" width="72" height="72" ${line}/><rect x="114" y="114" width="72" height="72" ${solid}/><path d="M86 50H114M50 86V114M150 86V114" ${line}/>`,
  "code-review": `<rect x="34" y="14" width="104" height="140" ${line}/><path d="M54 46H118M54 70H118M54 94H96" ${line}/><circle cx="132" cy="138" r="30" fill="#ffffff" stroke="currentColor" stroke-width="3"/><path d="M153 159L182 188" fill="none" stroke="currentColor" stroke-width="7"/>`,
  "ai-harnesses": `<path d="M20 60H180M20 140H180M40 60V140M80 60V140M120 60V140M160 60V140" ${line}/><circle cx="100" cy="100" r="16" ${solid}/>`,
  testing: `<rect x="24" y="30" width="34" height="34" ${line}/><rect x="24" y="83" width="34" height="34" ${line}/><rect x="24" y="136" width="34" height="34" ${solid}/><path d="M78 47H176M78 100H176M78 153H150M31 46L39 55L52 38M31 99L39 108L52 91" ${line}/>`,
  security: `<path d="M62 92V64a38 38 0 0 1 76 0V92" ${line}/><rect x="40" y="92" width="120" height="92" ${line}/><circle cx="100" cy="130" r="10" ${solid}/><path d="M100 140V160" fill="none" stroke="currentColor" stroke-width="5"/>`,
  "ai-era": `<circle cx="100" cy="100" r="26" ${solid}/><circle cx="100" cy="100" r="50" ${line}/><circle cx="100" cy="100" r="76" ${line} stroke-dasharray="6 10"/>`,
  product: `<path d="M100 22L170 60V140L100 178L30 140V60Z" ${line}/><path d="M30 60L100 98L170 60M100 98V178" ${line}/><path d="M100 98L170 60V140L100 178Z" ${solid}/>`,
  "design-system": `<circle cx="64" cy="64" r="42" ${line}/><rect x="104" y="22" width="80" height="80" ${solid}/><path d="M64 118L110 186H18Z" ${line}/><rect x="120" y="120" width="60" height="60" rx="30" ${line}/>`,
  "leading-devs": `<circle cx="100" cy="50" r="24" ${solid}/><circle cx="44" cy="146" r="24" ${line}/><circle cx="100" cy="146" r="24" ${line}/><circle cx="156" cy="146" r="24" ${line}/><path d="M100 74V122M84 68L56 124M116 68L144 124" ${line}/>`,
  fractional: `<circle cx="100" cy="100" r="80" ${line}/><path d="M100 100L100 20A80 80 0 0 1 176.1 75.3Z" ${solid}/><path d="M100 100L100 20M100 100L176.1 75.3M100 100L147 164.7M100 100L53 164.7M100 100L23.9 75.3" ${line}/>`,
  site: `<rect x="16" y="32" width="168" height="136" ${line}/><path d="M16 64H184" ${line}/><circle cx="34" cy="48" r="5" ${solid}/><circle cx="50" cy="48" r="5" ${line}/><path d="M40 96H120M40 120H160M40 144H100" ${line}/>`,
};

export function motifSvg(tag: TagId, color: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">${motifs[tag].replaceAll("currentColor", color)}</svg>`;
}
