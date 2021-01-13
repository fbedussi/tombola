import { writable } from "svelte/store";

export const lastExtractedNumber = writable(0);

export const gameName = writable("pippo");
