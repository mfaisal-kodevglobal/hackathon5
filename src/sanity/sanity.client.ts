import { createClient } from "next-sanity";
import { ClientConfig } from "next-sanity";

const SanityClient:ClientConfig = {
    projectId: <string> process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: <string> process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion:"v2023-03-07",
    useCdn:false
}

export default createClient(SanityClient);