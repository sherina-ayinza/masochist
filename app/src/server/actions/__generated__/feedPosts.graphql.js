/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule feedPosts.graphql
 * @generated SignedSource<<37862aca49f4b3c03c268be09e1a302b>>
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type feedPosts = {
  posts?: ?feedPosts_posts;
};

export type feedPosts_posts_edges_node_body = {
  html?: ?string;
};

export type feedPosts_posts_edges_node = {
  body?: ?feedPosts_posts_edges_node_body;
  createdAt?: ?any;
  title?: ?string;
  url: string;
};

export type feedPosts_posts_edges = {
  node?: ?feedPosts_posts_edges_node;
};

export type feedPosts_posts = {
  edges?: ?Array<?feedPosts_posts_edges>;
};
*/

/* eslint-disable comma-dangle, quotes */

const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "feedPosts",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10,
          "type": "Int"
        }
      ],
      "concreteType": "PostConnection",
      "name": "posts",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "PostEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Post",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "Markup",
                  "name": "body",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "html",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "createdAt",
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "title",
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "url",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "posts{\"first\":10}"
    }
  ],
  "type": "Root"
};

module.exports = fragment;
