import { createClient } from "@sanity/client";

// type SanityClient = {
//   projectId: string,
//   dataset: string,
//   apiVersion: string,
//   useCdn: boolean,
// }

export const sanityClient = createClient({
  projectId: "n4vkm074", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2024-01-05",
  useCdn: true,
});
