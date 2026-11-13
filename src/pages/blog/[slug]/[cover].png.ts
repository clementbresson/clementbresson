import { coverRoute, coverStaticPaths } from "../../../lib/cover-pages";

export const getStaticPaths = () => coverStaticPaths("en");
export const GET = coverRoute;
