"use client"
import sanityConfig from "@/sanity/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function SanityStudio(){
    return (<NextStudio config={sanityConfig}/>)
}