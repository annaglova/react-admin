// src/resourcesList.ts
import resources from "./resourcesList.json";

export const MAIN_RESOURCES = resources.MAIN_RESOURCES;
export const LOOKUP_RESOURCES = resources.LOOKUP_RESOURCES;
export const ALL_RESOURCES = [...MAIN_RESOURCES, ...LOOKUP_RESOURCES];
