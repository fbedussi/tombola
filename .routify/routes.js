
/**
 * @roxi/routify 2.8.5
 * File generated Wed Jan 13 2021 22:41:35 GMT+0100 (Central European Standard Time)
 */

export const __version = "2.8.5"
export const __timestamp = "2021-01-13T21:41:35.446Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "bank.svelte",
      "filepath": "/bank.svelte",
      "name": "bank",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/francesco/repo/personal/tombola/src/pages/bank.svelte",
      "importPath": "../src/pages/bank.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/bank",
      "id": "_bank",
      "component": () => import('../src/pages/bank.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/francesco/repo/personal/tombola/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "player.svelte",
      "filepath": "/player.svelte",
      "name": "player",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/francesco/repo/personal/tombola/src/pages/player.svelte",
      "importPath": "../src/pages/player.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/player",
      "id": "_player",
      "component": () => import('../src/pages/player.svelte').then(m => m.default)
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

