import type { APIRoute } from "astro";
import { tagCopy } from "../data/tags";
import type { Locale } from "../i18n";
import { getPosts, type Post } from "./blog";
import { coverNames, renderCover, type CoverName } from "./cover";

export async function coverStaticPaths(locale: Locale) {
  const posts = await getPosts(locale);
  return posts.flatMap((post) =>
    coverNames.map((cover) => ({
      params: { slug: post.slug, cover },
      props: { post },
    })),
  );
}

export const coverRoute: APIRoute = async ({ params, props, site }) => {
  const { post } = props as { post: Post };
  const tag = post.data.tags[0];
  const png = await renderCover(
    {
      title: post.data.title,
      tag: tag && { id: tag, label: tagCopy(tag, post.locale).label },
      site: site?.host ?? "",
    },
    params.cover as CoverName,
  );
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
