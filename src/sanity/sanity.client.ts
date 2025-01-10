import { createClient } from "next-sanity";
import { ClientConfig } from "next-sanity";

const SanityClient:ClientConfig = {
    projectId: "nxzkoyp0",
    dataset: "hackathonnextjsweld",
    apiVersion:"v2023-03-07",
    useCdn:false
}

export default createClient(SanityClient);