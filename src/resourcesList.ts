// src/resourcesList.ts
import resources from "./resourcesList.json";

export const MAIN_RESOURCES = resources.MAIN_RESOURCES;
export const DICT_RESOURCES = resources.DICT_RESOURCES;
export const ALL_RESOURCES = [...MAIN_RESOURCES, ...DICT_RESOURCES];
