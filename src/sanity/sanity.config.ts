import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./schema";

export default defineConfig({
    name:"default",
    title:"studio",
    projectId: "nxzkoyp0",
    dataset: "hackathonnextjsweld",
    plugins:[structureTool(), visionTool()],
    basePath:"/studio",
    schema:{
        types:schemaTypes
    }
});