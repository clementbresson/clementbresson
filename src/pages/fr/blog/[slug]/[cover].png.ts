import { coverRoute, coverStaticPaths } from "../../../../lib/cover-pages";

export const getStaticPaths = () => coverStaticPaths("fr");
export const GET = coverRoute;
