import React, { useRef, useEffect } from 'react';
import Layout from '../Layout';
import postStyles from '../Post/Post.module.scss';
import styles from './Notebook.module.scss';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

function createMarkup() {

    return { __html: `
    <!DOCTYPE html>
<html>
<head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>comm_detection_comparison</title><script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>




<style type="text/css">
    
    .matthew-wrapper {
    
    width: 50% !important;
    margin: 0 auto !important;
}
    
    
    
    .highlight .hll { background-color: var(--jp-cell-editor-active-background) }
.highlight  { background: var(--jp-cell-editor-background); color: var(--jp-mirror-editor-variable-color) }
.highlight .c { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment */
.highlight .err { color: var(--jp-mirror-editor-error-color) } /* Error */
.highlight .k { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword */
.highlight .o { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator */
.highlight .p { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation */
.highlight .ch { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Hashbang */
.highlight .cm { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Multiline */
.highlight .cp { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Preproc */
.highlight .cpf { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.PreprocFile */
.highlight .c1 { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Single */
.highlight .cs { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Special */
.highlight .kc { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Declaration */
.highlight .kn { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Namespace */
.highlight .kp { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Pseudo */
.highlight .kr { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Type */
.highlight .m { color: var(--jp-mirror-editor-number-color) } /* Literal.Number */
.highlight .s { color: var(--jp-mirror-editor-string-color) } /* Literal.String */
.highlight .ow { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator.Word */
.highlight .w { color: var(--jp-mirror-editor-variable-color) } /* Text.Whitespace */
.highlight .mb { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Bin */
.highlight .mf { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Float */
.highlight .mh { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Hex */
.highlight .mi { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer */
.highlight .mo { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Oct */
.highlight .sa { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Affix */
.highlight .sb { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Backtick */
.highlight .sc { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Char */
.highlight .dl { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Delimiter */
.highlight .sd { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Doc */
.highlight .s2 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Double */
.highlight .se { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Escape */
.highlight .sh { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Heredoc */
.highlight .si { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Interpol */
.highlight .sx { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Other */
.highlight .sr { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Regex */
.highlight .s1 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Single */
.highlight .ss { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Symbol */
.highlight .il { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer.Long */
  </style>
<style type="text/css">
    @font-face {
 font-family: "Lora";
 font-weight: normal;
 font-style: normal;
 src: local('"Lora"'), url('fonts/Lora-Regular.ttf') format('truetype');
}

<script>
    MathJax.Hub.Config({
        "HTML-CSS": {
            /*preferredFont: "TeX",*/
            /*availableFonts: ["TeX", "STIX"],*/
            styles: {
                scale: 100,
                ".MathJax_Display": {
                    "font-size": "100%",
                }
            }
        }
    });
</script>
    
  </style>



<style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*
 * Mozilla scrollbar styling
 */

/* use standard opaque scrollbars for most nodes */
[data-jp-theme-scrollbars='true'] {
  scrollbar-color: rgb(var(--jp-scrollbar-thumb-color))
    var(--jp-scrollbar-background-color);
}

/* for code nodes, use a transparent style of scrollbar. These selectors
 * will match lower in the tree, and so will override the above */
[data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar,
[data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar {
  scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
}

/*
 * Webkit scrollbar styling
 */

/* use standard opaque scrollbars for most nodes */

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar,
[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-corner {
  background: var(--jp-scrollbar-background-color);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-thumb {
  background: rgb(var(--jp-scrollbar-thumb-color));
  border: var(--jp-scrollbar-thumb-margin) solid transparent;
  background-clip: content-box;
  border-radius: var(--jp-scrollbar-thumb-radius);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-track:horizontal {
  border-left: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
  border-right: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-track:vertical {
  border-top: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
  border-bottom: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
}

/* for code nodes, use a transparent style of scrollbar */

[data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar::-webkit-scrollbar,
[data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar::-webkit-scrollbar,
[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-corner,
[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-corner {
  background-color: transparent;
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-thumb,
[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-thumb {
  background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
  border: var(--jp-scrollbar-thumb-margin) solid transparent;
  background-clip: content-box;
  border-radius: var(--jp-scrollbar-thumb-radius);
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-track:horizontal {
  border-left: var(--jp-scrollbar-endpad) solid transparent;
  border-right: var(--jp-scrollbar-endpad) solid transparent;
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-track:vertical {
  border-top: var(--jp-scrollbar-endpad) solid transparent;
  border-bottom: var(--jp-scrollbar-endpad) solid transparent;
}

/*
 * Phosphor
 */

.lm-ScrollBar[data-orientation='horizontal'] {
  min-height: 16px;
  max-height: 16px;
  min-width: 45px;
  border-top: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] {
  min-width: 16px;
  max-width: 16px;
  min-height: 45px;
  border-left: 1px solid #a0a0a0;
}

.lm-ScrollBar-button {
  background-color: #f0f0f0;
  background-position: center center;
  min-height: 15px;
  max-height: 15px;
  min-width: 15px;
  max-width: 15px;
}

.lm-ScrollBar-button:hover {
  background-color: #dadada;
}

.lm-ScrollBar-button.lm-mod-active {
  background-color: #cdcdcd;
}

.lm-ScrollBar-track {
  background: #f0f0f0;
}

.lm-ScrollBar-thumb {
  background: #cdcdcd;
}

.lm-ScrollBar-thumb:hover {
  background: #bababa;
}

.lm-ScrollBar-thumb.lm-mod-active {
  background: #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal'] .lm-ScrollBar-thumb {
  height: 100%;
  min-width: 15px;
  border-left: 1px solid #a0a0a0;
  border-right: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] .lm-ScrollBar-thumb {
  width: 100%;
  min-height: 15px;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-left);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-right);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-up);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-down);
  background-size: 17px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-Widget, /* </DEPRECATED> */
.lm-Widget {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: default;
}


/* <DEPRECATED> */ .p-Widget.p-mod-hidden, /* </DEPRECATED> */
.lm-Widget.lm-mod-hidden {
  display: none !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-CommandPalette, /* </DEPRECATED> */
.lm-CommandPalette {
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-CommandPalette-search, /* </DEPRECATED> */
.lm-CommandPalette-search {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-content, /* </DEPRECATED> */
.lm-CommandPalette-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  min-height: 0;
  overflow: auto;
  list-style-type: none;
}


/* <DEPRECATED> */ .p-CommandPalette-header, /* </DEPRECATED> */
.lm-CommandPalette-header {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


/* <DEPRECATED> */ .p-CommandPalette-item, /* </DEPRECATED> */
.lm-CommandPalette-item {
  display: flex;
  flex-direction: row;
}


/* <DEPRECATED> */ .p-CommandPalette-itemIcon, /* </DEPRECATED> */
.lm-CommandPalette-itemIcon {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-itemContent, /* </DEPRECATED> */
.lm-CommandPalette-itemContent {
  flex: 1 1 auto;
  overflow: hidden;
}


/* <DEPRECATED> */ .p-CommandPalette-itemShortcut, /* </DEPRECATED> */
.lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-itemLabel, /* </DEPRECATED> */
.lm-CommandPalette-itemLabel {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-DockPanel, /* </DEPRECATED> */
.lm-DockPanel {
  z-index: 0;
}


/* <DEPRECATED> */ .p-DockPanel-widget, /* </DEPRECATED> */
.lm-DockPanel-widget {
  z-index: 0;
}


/* <DEPRECATED> */ .p-DockPanel-tabBar, /* </DEPRECATED> */
.lm-DockPanel-tabBar {
  z-index: 1;
}


/* <DEPRECATED> */ .p-DockPanel-handle, /* </DEPRECATED> */
.lm-DockPanel-handle {
  z-index: 2;
}


/* <DEPRECATED> */ .p-DockPanel-handle.p-mod-hidden, /* </DEPRECATED> */
.lm-DockPanel-handle.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-DockPanel-handle:after, /* </DEPRECATED> */
.lm-DockPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='horizontal'],
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='horizontal'] {
  cursor: ew-resize;
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='vertical'],
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='vertical'] {
  cursor: ns-resize;
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='horizontal']:after,
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='horizontal']:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='vertical']:after,
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='vertical']:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}


/* <DEPRECATED> */ .p-DockPanel-overlay, /* </DEPRECATED> */
.lm-DockPanel-overlay {
  z-index: 3;
  box-sizing: border-box;
  pointer-events: none;
}


/* <DEPRECATED> */ .p-DockPanel-overlay.p-mod-hidden, /* </DEPRECATED> */
.lm-DockPanel-overlay.lm-mod-hidden {
  display: none !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-Menu, /* </DEPRECATED> */
.lm-Menu {
  z-index: 10000;
  position: absolute;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: auto;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-Menu-content, /* </DEPRECATED> */
.lm-Menu-content {
  margin: 0;
  padding: 0;
  display: table;
  list-style-type: none;
}


/* <DEPRECATED> */ .p-Menu-item, /* </DEPRECATED> */
.lm-Menu-item {
  display: table-row;
}


/* <DEPRECATED> */
.p-Menu-item.p-mod-hidden,
.p-Menu-item.p-mod-collapsed,
/* </DEPRECATED> */
.lm-Menu-item.lm-mod-hidden,
.lm-Menu-item.lm-mod-collapsed {
  display: none !important;
}


/* <DEPRECATED> */
.p-Menu-itemIcon,
.p-Menu-itemSubmenuIcon,
/* </DEPRECATED> */
.lm-Menu-itemIcon,
.lm-Menu-itemSubmenuIcon {
  display: table-cell;
  text-align: center;
}


/* <DEPRECATED> */ .p-Menu-itemLabel, /* </DEPRECATED> */
.lm-Menu-itemLabel {
  display: table-cell;
  text-align: left;
}


/* <DEPRECATED> */ .p-Menu-itemShortcut, /* </DEPRECATED> */
.lm-Menu-itemShortcut {
  display: table-cell;
  text-align: right;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-MenuBar, /* </DEPRECATED> */
.lm-MenuBar {
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-MenuBar-content, /* </DEPRECATED> */
.lm-MenuBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
}


/* <DEPRECATED> */ .p--MenuBar-item, /* </DEPRECATED> */
.lm-MenuBar-item {
  box-sizing: border-box;
}


/* <DEPRECATED> */
.p-MenuBar-itemIcon,
.p-MenuBar-itemLabel,
/* </DEPRECATED> */
.lm-MenuBar-itemIcon,
.lm-MenuBar-itemLabel {
  display: inline-block;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-ScrollBar, /* </DEPRECATED> */
.lm-ScrollBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */
.p-ScrollBar[data-orientation='horizontal'],
/* </DEPRECATED> */
.lm-ScrollBar[data-orientation='horizontal'] {
  flex-direction: row;
}


/* <DEPRECATED> */
.p-ScrollBar[data-orientation='vertical'],
/* </DEPRECATED> */
.lm-ScrollBar[data-orientation='vertical'] {
  flex-direction: column;
}


/* <DEPRECATED> */ .p-ScrollBar-button, /* </DEPRECATED> */
.lm-ScrollBar-button {
  box-sizing: border-box;
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-ScrollBar-track, /* </DEPRECATED> */
.lm-ScrollBar-track {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  flex: 1 1 auto;
}


/* <DEPRECATED> */ .p-ScrollBar-thumb, /* </DEPRECATED> */
.lm-ScrollBar-thumb {
  box-sizing: border-box;
  position: absolute;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-SplitPanel-child, /* </DEPRECATED> */
.lm-SplitPanel-child {
  z-index: 0;
}


/* <DEPRECATED> */ .p-SplitPanel-handle, /* </DEPRECATED> */
.lm-SplitPanel-handle {
  z-index: 1;
}


/* <DEPRECATED> */ .p-SplitPanel-handle.p-mod-hidden, /* </DEPRECATED> */
.lm-SplitPanel-handle.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-SplitPanel-handle:after, /* </DEPRECATED> */
.lm-SplitPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle {
  cursor: ew-resize;
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle {
  cursor: ns-resize;
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle:after,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle:after,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-TabBar, /* </DEPRECATED> */
.lm-TabBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-TabBar[data-orientation='horizontal'], /* </DEPRECATED> */
.lm-TabBar[data-orientation='horizontal'] {
  flex-direction: row;
}


/* <DEPRECATED> */ .p-TabBar[data-orientation='vertical'], /* </DEPRECATED> */
.lm-TabBar[data-orientation='vertical'] {
  flex-direction: column;
}


/* <DEPRECATED> */ .p-TabBar-content, /* </DEPRECATED> */
.lm-TabBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1 1 auto;
  list-style-type: none;
}


/* <DEPRECATED> */
.p-TabBar[data-orientation='horizontal'] > .p-TabBar-content,
/* </DEPRECATED> */
.lm-TabBar[data-orientation='horizontal'] > .lm-TabBar-content {
  flex-direction: row;
}


/* <DEPRECATED> */
.p-TabBar[data-orientation='vertical'] > .p-TabBar-content,
/* </DEPRECATED> */
.lm-TabBar[data-orientation='vertical'] > .lm-TabBar-content {
  flex-direction: column;
}


/* <DEPRECATED> */ .p-TabBar-tab, /* </DEPRECATED> */
.lm-TabBar-tab {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  overflow: hidden;
}


/* <DEPRECATED> */
.p-TabBar-tabIcon,
.p-TabBar-tabCloseIcon,
/* </DEPRECATED> */
.lm-TabBar-tabIcon,
.lm-TabBar-tabCloseIcon {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-TabBar-tabLabel, /* </DEPRECATED> */
.lm-TabBar-tabLabel {
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
}


/* <DEPRECATED> */ .p-TabBar-tab.p-mod-hidden, /* </DEPRECATED> */
.lm-TabBar-tab.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-TabBar.p-mod-dragging .p-TabBar-tab, /* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging .lm-TabBar-tab {
  position: relative;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging[data-orientation='horizontal'] .p-TabBar-tab,
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging[data-orientation='horizontal'] .lm-TabBar-tab {
  left: 0;
  transition: left 150ms ease;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging[data-orientation='vertical'] .p-TabBar-tab,
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging[data-orientation='vertical'] .lm-TabBar-tab {
  top: 0;
  transition: top 150ms ease;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging .p-TabBar-tab.p-mod-dragging
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging .lm-TabBar-tab.lm-mod-dragging {
  transition: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-TabPanel-tabBar, /* </DEPRECATED> */
.lm-TabPanel-tabBar {
  z-index: 1;
}


/* <DEPRECATED> */ .p-TabPanel-stackedPanel, /* </DEPRECATED> */
.lm-TabPanel-stackedPanel {
  z-index: 0;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

@charset "UTF-8";
/*!

Copyright 2015-present Palantir Technologies, Inc. All rights reserved.
Licensed under the Apache License, Version 2.0.

*/
html{
  -webkit-box-sizing:border-box;
          box-sizing:border-box; }

*,
*::before,
*::after{
  -webkit-box-sizing:inherit;
          box-sizing:inherit; }

body{
  text-transform:none;
  line-height:1.28581;
  letter-spacing:0;
  font-size:14px;
  font-weight:400;
  color:#182026;
  font-family:-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif; }

p{
  margin-top:0;
  margin-bottom:10px; }

small{
  font-size:12px; }

strong{
  font-weight:600; }

::-moz-selection{
  background:rgba(125, 188, 255, 0.6); }

::selection{
  background:rgba(125, 188, 255, 0.6); }
.bp3-heading{
  color:#182026;
  font-weight:600;
  margin:0 0 10px;
  padding:0; }
  .bp3-dark .bp3-heading{
    color:#f5f8fa; }

h1.bp3-heading, .bp3-running-text h1{
  line-height:40px;
  font-size:36px; }

h2.bp3-heading, .bp3-running-text h2{
  line-height:32px;
  font-size:28px; }

h3.bp3-heading, .bp3-running-text h3{
  line-height:25px;
  font-size:22px; }

h4.bp3-heading, .bp3-running-text h4{
  line-height:21px;
  font-size:18px; }

h5.bp3-heading, .bp3-running-text h5{
  line-height:19px;
  font-size:16px; }

h6.bp3-heading, .bp3-running-text h6{
  line-height:16px;
  font-size:14px; }
.bp3-ui-text{
  text-transform:none;
  line-height:1.28581;
  letter-spacing:0;
  font-size:14px;
  font-weight:400; }

.bp3-monospace-text{
  text-transform:none;
  font-family:monospace; }

.bp3-text-muted{
  color:#5c7080; }
  .bp3-dark .bp3-text-muted{
    color:#a7b6c2; }

.bp3-text-disabled{
  color:rgba(92, 112, 128, 0.6); }
  .bp3-dark .bp3-text-disabled{
    color:rgba(167, 182, 194, 0.6); }

.bp3-text-overflow-ellipsis{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal; }
.bp3-running-text{
  line-height:1.5;
  font-size:14px; }
  .bp3-running-text h1{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h1{
      color:#f5f8fa; }
  .bp3-running-text h2{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h2{
      color:#f5f8fa; }
  .bp3-running-text h3{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h3{
      color:#f5f8fa; }
  .bp3-running-text h4{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h4{
      color:#f5f8fa; }
  .bp3-running-text h5{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h5{
      color:#f5f8fa; }
  .bp3-running-text h6{
    color:#182026;
    font-weight:600;
    margin-top:40px;
    margin-bottom:20px; }
    .bp3-dark .bp3-running-text h6{
      color:#f5f8fa; }
  .bp3-running-text hr{
    margin:20px 0;
    border:none;
    border-bottom:1px solid rgba(16, 22, 26, 0.15); }
    .bp3-dark .bp3-running-text hr{
      border-color:rgba(255, 255, 255, 0.15); }
  .bp3-running-text p{
    margin:0 0 10px;
    padding:0; }

.bp3-text-large{
  font-size:16px; }

.bp3-text-small{
  font-size:12px; }
a{
  text-decoration:none;
  color:#106ba3; }
  a:hover{
    cursor:pointer;
    text-decoration:underline;
    color:#106ba3; }
  a .bp3-icon, a .bp3-icon-standard, a .bp3-icon-large{
    color:inherit; }
  a code,
  .bp3-dark a code{
    color:inherit; }
  .bp3-dark a,
  .bp3-dark a:hover{
    color:#48aff0; }
    .bp3-dark a .bp3-icon, .bp3-dark a .bp3-icon-standard, .bp3-dark a .bp3-icon-large,
    .bp3-dark a:hover .bp3-icon,
    .bp3-dark a:hover .bp3-icon-standard,
    .bp3-dark a:hover .bp3-icon-large{
      color:inherit; }
.bp3-running-text code, .bp3-code{
  text-transform:none;
  font-family:monospace;
  border-radius:3px;
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);
  background:rgba(255, 255, 255, 0.7);
  padding:2px 5px;
  color:#5c7080;
  font-size:smaller; }
  .bp3-dark .bp3-running-text code, .bp3-running-text .bp3-dark code, .bp3-dark .bp3-code{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
    background:rgba(16, 22, 26, 0.3);
    color:#a7b6c2; }
  .bp3-running-text a > code, a > .bp3-code{
    color:#137cbd; }
    .bp3-dark .bp3-running-text a > code, .bp3-running-text .bp3-dark a > code, .bp3-dark a > .bp3-code{
      color:inherit; }

.bp3-running-text pre, .bp3-code-block{
  text-transform:none;
  font-family:monospace;
  display:block;
  margin:10px 0;
  border-radius:3px;
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
  background:rgba(255, 255, 255, 0.7);
  padding:13px 15px 12px;
  line-height:1.4;
  color:#182026;
  font-size:13px;
  word-break:break-all;
  word-wrap:break-word; }
  .bp3-dark .bp3-running-text pre, .bp3-running-text .bp3-dark pre, .bp3-dark .bp3-code-block{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
    background:rgba(16, 22, 26, 0.3);
    color:#f5f8fa; }
  .bp3-running-text pre > code, .bp3-code-block > code{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:none;
    padding:0;
    color:inherit;
    font-size:inherit; }

.bp3-running-text kbd, .bp3-key{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  background:#ffffff;
  min-width:24px;
  height:24px;
  padding:3px 6px;
  vertical-align:middle;
  line-height:24px;
  color:#5c7080;
  font-family:inherit;
  font-size:12px; }
  .bp3-running-text kbd .bp3-icon, .bp3-key .bp3-icon, .bp3-running-text kbd .bp3-icon-standard, .bp3-key .bp3-icon-standard, .bp3-running-text kbd .bp3-icon-large, .bp3-key .bp3-icon-large{
    margin-right:5px; }
  .bp3-dark .bp3-running-text kbd, .bp3-running-text .bp3-dark kbd, .bp3-dark .bp3-key{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
    background:#394b59;
    color:#a7b6c2; }
.bp3-running-text blockquote, .bp3-blockquote{
  margin:0 0 10px;
  border-left:solid 4px rgba(167, 182, 194, 0.5);
  padding:0 20px; }
  .bp3-dark .bp3-running-text blockquote, .bp3-running-text .bp3-dark blockquote, .bp3-dark .bp3-blockquote{
    border-color:rgba(115, 134, 148, 0.5); }
.bp3-running-text ul,
.bp3-running-text ol, .bp3-list{
  margin:10px 0;
  padding-left:30px; }
  .bp3-running-text ul li:not(:last-child), .bp3-running-text ol li:not(:last-child), .bp3-list li:not(:last-child){
    margin-bottom:5px; }
  .bp3-running-text ul ol, .bp3-running-text ol ol, .bp3-list ol,
  .bp3-running-text ul ul,
  .bp3-running-text ol ul,
  .bp3-list ul{
    margin-top:5px; }

.bp3-list-unstyled{
  margin:0;
  padding:0;
  list-style:none; }
  .bp3-list-unstyled li{
    padding:0; }
.bp3-rtl{
  text-align:right; }

.bp3-dark{
  color:#f5f8fa; }

:focus{
  outline:rgba(19, 124, 189, 0.6) auto 2px;
  outline-offset:2px;
  -moz-outline-radius:6px; }

.bp3-focus-disabled :focus{
  outline:none !important; }
  .bp3-focus-disabled :focus ~ .bp3-control-indicator{
    outline:none !important; }

.bp3-alert{
  max-width:400px;
  padding:20px; }

.bp3-alert-body{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex; }
  .bp3-alert-body .bp3-icon{
    margin-top:0;
    margin-right:20px;
    font-size:40px; }

.bp3-alert-footer{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:reverse;
      -ms-flex-direction:row-reverse;
          flex-direction:row-reverse;
  margin-top:10px; }
  .bp3-alert-footer .bp3-button{
    margin-left:10px; }
.bp3-breadcrumbs{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:wrap;
      flex-wrap:wrap;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  margin:0;
  cursor:default;
  height:30px;
  padding:0;
  list-style:none; }
  .bp3-breadcrumbs > li{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center; }
    .bp3-breadcrumbs > li::after{
      display:block;
      margin:0 5px;
      background:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.71 7.29l-4-4a1.003 1.003 0 0 0-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z' fill='%235C7080'/%3e%3c/svg%3e");
      width:16px;
      height:16px;
      content:""; }
    .bp3-breadcrumbs > li:last-of-type::after{
      display:none; }

.bp3-breadcrumb,
.bp3-breadcrumb-current,
.bp3-breadcrumbs-collapsed{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  font-size:16px; }

.bp3-breadcrumb,
.bp3-breadcrumbs-collapsed{
  color:#5c7080; }

.bp3-breadcrumb:hover{
  text-decoration:none; }

.bp3-breadcrumb.bp3-disabled{
  cursor:not-allowed;
  color:rgba(92, 112, 128, 0.6); }

.bp3-breadcrumb .bp3-icon{
  margin-right:5px; }

.bp3-breadcrumb-current{
  color:inherit;
  font-weight:600; }
  .bp3-breadcrumb-current .bp3-input{
    vertical-align:baseline;
    font-size:inherit;
    font-weight:inherit; }

.bp3-breadcrumbs-collapsed{
  margin-right:2px;
  border:none;
  border-radius:3px;
  background:#ced9e0;
  cursor:pointer;
  padding:1px 5px;
  vertical-align:text-bottom; }
  .bp3-breadcrumbs-collapsed::before{
    display:block;
    background:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cg fill='%235C7080'%3e%3ccircle cx='2' cy='8.03' r='2'/%3e%3ccircle cx='14' cy='8.03' r='2'/%3e%3ccircle cx='8' cy='8.03' r='2'/%3e%3c/g%3e%3c/svg%3e") center no-repeat;
    width:16px;
    height:16px;
    content:""; }
  .bp3-breadcrumbs-collapsed:hover{
    background:#bfccd6;
    text-decoration:none;
    color:#182026; }

.bp3-dark .bp3-breadcrumb,
.bp3-dark .bp3-breadcrumbs-collapsed{
  color:#a7b6c2; }

.bp3-dark .bp3-breadcrumbs > li::after{
  color:#a7b6c2; }

.bp3-dark .bp3-breadcrumb.bp3-disabled{
  color:rgba(167, 182, 194, 0.6); }

.bp3-dark .bp3-breadcrumb-current{
  color:#f5f8fa; }

.bp3-dark .bp3-breadcrumbs-collapsed{
  background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-breadcrumbs-collapsed:hover{
    background:rgba(16, 22, 26, 0.6);
    color:#f5f8fa; }
.bp3-button{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  border:none;
  border-radius:3px;
  cursor:pointer;
  padding:5px 10px;
  vertical-align:middle;
  text-align:left;
  font-size:14px;
  min-width:30px;
  min-height:30px; }
  .bp3-button > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-button > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-button::before,
  .bp3-button > *{
    margin-right:7px; }
  .bp3-button:empty::before,
  .bp3-button > :last-child{
    margin-right:0; }
  .bp3-button:empty{
    padding:0 !important; }
  .bp3-button:disabled, .bp3-button.bp3-disabled{
    cursor:not-allowed; }
  .bp3-button.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-button.bp3-align-right,
  .bp3-align-right .bp3-button{
    text-align:right; }
  .bp3-button.bp3-align-left,
  .bp3-align-left .bp3-button{
    text-align:left; }
  .bp3-button:not([class*="bp3-intent-"]){
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    color:#182026; }
    .bp3-button:not([class*="bp3-intent-"]):hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
      background-clip:padding-box;
      background-color:#ebf1f5; }
    .bp3-button:not([class*="bp3-intent-"]):active, .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#d8e1e8;
      background-image:none; }
    .bp3-button:not([class*="bp3-intent-"]):disabled, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled{
      outline:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(206, 217, 224, 0.5);
      background-image:none;
      cursor:not-allowed;
      color:rgba(92, 112, 128, 0.6); }
      .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active, .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active:hover, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active:hover{
        background:rgba(206, 217, 224, 0.7); }
  .bp3-button.bp3-intent-primary{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
    .bp3-button.bp3-intent-primary:hover, .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-primary:hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
      background-color:#106ba3; }
    .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#0e5a8a;
      background-image:none; }
    .bp3-button.bp3-intent-primary:disabled, .bp3-button.bp3-intent-primary.bp3-disabled{
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(19, 124, 189, 0.5);
      background-image:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-success{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#0f9960;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
    .bp3-button.bp3-intent-success:hover, .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-success:hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
      background-color:#0d8050; }
    .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#0a6640;
      background-image:none; }
    .bp3-button.bp3-intent-success:disabled, .bp3-button.bp3-intent-success.bp3-disabled{
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(15, 153, 96, 0.5);
      background-image:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-warning{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#d9822b;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
    .bp3-button.bp3-intent-warning:hover, .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-warning:hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
      background-color:#bf7326; }
    .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#a66321;
      background-image:none; }
    .bp3-button.bp3-intent-warning:disabled, .bp3-button.bp3-intent-warning.bp3-disabled{
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(217, 130, 43, 0.5);
      background-image:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-danger{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#db3737;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
    .bp3-button.bp3-intent-danger:hover, .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-danger:hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
      background-color:#c23030; }
    .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#a82a2a;
      background-image:none; }
    .bp3-button.bp3-intent-danger:disabled, .bp3-button.bp3-intent-danger.bp3-disabled{
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(219, 55, 55, 0.5);
      background-image:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head{
    stroke:#ffffff; }
  .bp3-button.bp3-large,
  .bp3-large .bp3-button{
    min-width:40px;
    min-height:40px;
    padding:5px 15px;
    font-size:16px; }
    .bp3-button.bp3-large::before,
    .bp3-button.bp3-large > *,
    .bp3-large .bp3-button::before,
    .bp3-large .bp3-button > *{
      margin-right:10px; }
    .bp3-button.bp3-large:empty::before,
    .bp3-button.bp3-large > :last-child,
    .bp3-large .bp3-button:empty::before,
    .bp3-large .bp3-button > :last-child{
      margin-right:0; }
  .bp3-button.bp3-small,
  .bp3-small .bp3-button{
    min-width:24px;
    min-height:24px;
    padding:0 7px; }
  .bp3-button.bp3-loading{
    position:relative; }
    .bp3-button.bp3-loading[class*="bp3-icon-"]::before{
      visibility:hidden; }
    .bp3-button.bp3-loading .bp3-button-spinner{
      position:absolute;
      margin:0; }
    .bp3-button.bp3-loading > :not(.bp3-button-spinner){
      visibility:hidden; }
  .bp3-button[class*="bp3-icon-"]::before{
    line-height:1;
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-weight:400;
    font-style:normal;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    color:#5c7080; }
  .bp3-button .bp3-icon, .bp3-button .bp3-icon-standard, .bp3-button .bp3-icon-large{
    color:#5c7080; }
    .bp3-button .bp3-icon.bp3-align-right, .bp3-button .bp3-icon-standard.bp3-align-right, .bp3-button .bp3-icon-large.bp3-align-right{
      margin-left:7px; }
  .bp3-button .bp3-icon:first-child:last-child,
  .bp3-button .bp3-spinner + .bp3-icon:last-child{
    margin:0 -7px; }
  .bp3-dark .bp3-button:not([class*="bp3-intent-"]){
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background-color:#394b59;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
    color:#f5f8fa; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover, .bp3-dark .bp3-button:not([class*="bp3-intent-"]):active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      color:#f5f8fa; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      background-color:#30404d; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#202b33;
      background-image:none; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(57, 75, 89, 0.5);
      background-image:none;
      color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active{
        background:rgba(57, 75, 89, 0.7); }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-button-spinner .bp3-spinner-head{
      background:rgba(16, 22, 26, 0.5);
      stroke:#8a9ba8; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"])[class*="bp3-icon-"]::before{
      color:#a7b6c2; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-standard, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-large{
      color:#a7b6c2; }
  .bp3-dark .bp3-button[class*="bp3-intent-"]{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:hover{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:active, .bp3-dark .bp3-button[class*="bp3-intent-"].bp3-active{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:disabled, .bp3-dark .bp3-button[class*="bp3-intent-"].bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background-image:none;
      color:rgba(255, 255, 255, 0.3); }
    .bp3-dark .bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head{
      stroke:#8a9ba8; }
  .bp3-button:disabled::before,
  .bp3-button:disabled .bp3-icon, .bp3-button:disabled .bp3-icon-standard, .bp3-button:disabled .bp3-icon-large, .bp3-button.bp3-disabled::before,
  .bp3-button.bp3-disabled .bp3-icon, .bp3-button.bp3-disabled .bp3-icon-standard, .bp3-button.bp3-disabled .bp3-icon-large, .bp3-button[class*="bp3-intent-"]::before,
  .bp3-button[class*="bp3-intent-"] .bp3-icon, .bp3-button[class*="bp3-intent-"] .bp3-icon-standard, .bp3-button[class*="bp3-intent-"] .bp3-icon-large{
    color:inherit !important; }
  .bp3-button.bp3-minimal{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:none; }
    .bp3-button.bp3-minimal:hover{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(167, 182, 194, 0.3);
      text-decoration:none;
      color:#182026; }
    .bp3-button.bp3-minimal:active, .bp3-button.bp3-minimal.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(115, 134, 148, 0.3);
      color:#182026; }
    .bp3-button.bp3-minimal:disabled, .bp3-button.bp3-minimal:disabled:hover, .bp3-button.bp3-minimal.bp3-disabled, .bp3-button.bp3-minimal.bp3-disabled:hover{
      background:none;
      cursor:not-allowed;
      color:rgba(92, 112, 128, 0.6); }
      .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{
        background:rgba(115, 134, 148, 0.3); }
    .bp3-dark .bp3-button.bp3-minimal{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:inherit; }
      .bp3-dark .bp3-button.bp3-minimal:hover, .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none; }
      .bp3-dark .bp3-button.bp3-minimal:hover{
        background:rgba(138, 155, 168, 0.15); }
      .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{
        background:rgba(138, 155, 168, 0.3);
        color:#f5f8fa; }
      .bp3-dark .bp3-button.bp3-minimal:disabled, .bp3-dark .bp3-button.bp3-minimal:disabled:hover, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover{
        background:none;
        cursor:not-allowed;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{
          background:rgba(138, 155, 168, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-primary{
      color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:hover, .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.15);
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(16, 107, 163, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
        stroke:#106ba3; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary{
        color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:hover{
          background:rgba(19, 124, 189, 0.2);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
          background:rgba(19, 124, 189, 0.3);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{
          background:none;
          color:rgba(72, 175, 240, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{
            background:rgba(19, 124, 189, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-success{
      color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:hover, .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.15);
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(13, 128, 80, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
        stroke:#0d8050; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success{
        color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:hover{
          background:rgba(15, 153, 96, 0.2);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
          background:rgba(15, 153, 96, 0.3);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{
          background:none;
          color:rgba(61, 204, 145, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{
            background:rgba(15, 153, 96, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-warning{
      color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:hover, .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.15);
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(191, 115, 38, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
        stroke:#bf7326; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning{
        color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:hover{
          background:rgba(217, 130, 43, 0.2);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
          background:rgba(217, 130, 43, 0.3);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{
          background:none;
          color:rgba(255, 179, 102, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{
            background:rgba(217, 130, 43, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-danger{
      color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:hover, .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.15);
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(194, 48, 48, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
        stroke:#c23030; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger{
        color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:hover{
          background:rgba(219, 55, 55, 0.2);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
          background:rgba(219, 55, 55, 0.3);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{
          background:none;
          color:rgba(255, 115, 115, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{
            background:rgba(219, 55, 55, 0.3); }

a.bp3-button{
  text-align:center;
  text-decoration:none;
  -webkit-transition:none;
  transition:none; }
  a.bp3-button, a.bp3-button:hover, a.bp3-button:active{
    color:#182026; }
  a.bp3-button.bp3-disabled{
    color:rgba(92, 112, 128, 0.6); }

.bp3-button-text{
  -webkit-box-flex:0;
      -ms-flex:0 1 auto;
          flex:0 1 auto; }

.bp3-button.bp3-align-left .bp3-button-text, .bp3-button.bp3-align-right .bp3-button-text,
.bp3-button-group.bp3-align-left .bp3-button-text,
.bp3-button-group.bp3-align-right .bp3-button-text{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto; }
.bp3-button-group{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex; }
  .bp3-button-group .bp3-button{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    position:relative;
    z-index:4; }
    .bp3-button-group .bp3-button:focus{
      z-index:5; }
    .bp3-button-group .bp3-button:hover{
      z-index:6; }
    .bp3-button-group .bp3-button:active, .bp3-button-group .bp3-button.bp3-active{
      z-index:7; }
    .bp3-button-group .bp3-button:disabled, .bp3-button-group .bp3-button.bp3-disabled{
      z-index:3; }
    .bp3-button-group .bp3-button[class*="bp3-intent-"]{
      z-index:9; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:focus{
        z-index:10; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:hover{
        z-index:11; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:active, .bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-active{
        z-index:12; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:disabled, .bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-disabled{
        z-index:8; }
  .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:first-child) .bp3-button,
  .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:first-child){
    border-top-left-radius:0;
    border-bottom-left-radius:0; }
  .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){
    margin-right:-1px;
    border-top-right-radius:0;
    border-bottom-right-radius:0; }
  .bp3-button-group.bp3-minimal .bp3-button{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:none; }
    .bp3-button-group.bp3-minimal .bp3-button:hover{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(167, 182, 194, 0.3);
      text-decoration:none;
      color:#182026; }
    .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(115, 134, 148, 0.3);
      color:#182026; }
    .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{
      background:none;
      cursor:not-allowed;
      color:rgba(92, 112, 128, 0.6); }
      .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{
        background:rgba(115, 134, 148, 0.3); }
    .bp3-dark .bp3-button-group.bp3-minimal .bp3-button{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:inherit; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover{
        background:rgba(138, 155, 168, 0.15); }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
        background:rgba(138, 155, 168, 0.3);
        color:#f5f8fa; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{
        background:none;
        cursor:not-allowed;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{
          background:rgba(138, 155, 168, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{
      color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.15);
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(16, 107, 163, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
        stroke:#106ba3; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{
        color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{
          background:rgba(19, 124, 189, 0.2);
          color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
          background:rgba(19, 124, 189, 0.3);
          color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{
          background:none;
          color:rgba(72, 175, 240, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{
            background:rgba(19, 124, 189, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{
      color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.15);
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(13, 128, 80, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
        stroke:#0d8050; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{
        color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{
          background:rgba(15, 153, 96, 0.2);
          color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
          background:rgba(15, 153, 96, 0.3);
          color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{
          background:none;
          color:rgba(61, 204, 145, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{
            background:rgba(15, 153, 96, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{
      color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.15);
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(191, 115, 38, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
        stroke:#bf7326; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{
        color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{
          background:rgba(217, 130, 43, 0.2);
          color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
          background:rgba(217, 130, 43, 0.3);
          color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{
          background:none;
          color:rgba(255, 179, 102, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{
            background:rgba(217, 130, 43, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{
      color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:none;
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.15);
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(194, 48, 48, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
        stroke:#c23030; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{
        color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{
          background:rgba(219, 55, 55, 0.2);
          color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
          background:rgba(219, 55, 55, 0.3);
          color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{
          background:none;
          color:rgba(255, 115, 115, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{
            background:rgba(219, 55, 55, 0.3); }
  .bp3-button-group .bp3-popover-wrapper,
  .bp3-button-group .bp3-popover-target{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-button-group.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-button-group .bp3-button.bp3-fill,
  .bp3-button-group.bp3-fill .bp3-button:not(.bp3-fixed){
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-button-group.bp3-vertical{
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    -webkit-box-align:stretch;
        -ms-flex-align:stretch;
            align-items:stretch;
    vertical-align:top; }
    .bp3-button-group.bp3-vertical.bp3-fill{
      width:unset;
      height:100%; }
    .bp3-button-group.bp3-vertical .bp3-button{
      margin-right:0 !important;
      width:100%; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:first-child .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:first-child{
      border-radius:3px 3px 0 0; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:last-child .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:last-child{
      border-radius:0 0 3px 3px; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:not(:last-child){
      margin-bottom:-1px; }
  .bp3-button-group.bp3-align-left .bp3-button{
    text-align:left; }
  .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){
    margin-right:1px; }
  .bp3-dark .bp3-button-group.bp3-vertical > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-dark .bp3-button-group.bp3-vertical > .bp3-button:not(:last-child){
    margin-bottom:1px; }
.bp3-callout{
  line-height:1.5;
  font-size:14px;
  position:relative;
  border-radius:3px;
  background-color:rgba(138, 155, 168, 0.15);
  width:100%;
  padding:10px 12px 9px; }
  .bp3-callout[class*="bp3-icon-"]{
    padding-left:40px; }
    .bp3-callout[class*="bp3-icon-"]::before{
      line-height:1;
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-weight:400;
      font-style:normal;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased;
      position:absolute;
      top:10px;
      left:10px;
      color:#5c7080; }
  .bp3-callout.bp3-callout-icon{
    padding-left:40px; }
    .bp3-callout.bp3-callout-icon > .bp3-icon:first-child{
      position:absolute;
      top:10px;
      left:10px;
      color:#5c7080; }
  .bp3-callout .bp3-heading{
    margin-top:0;
    margin-bottom:5px;
    line-height:20px; }
    .bp3-callout .bp3-heading:last-child{
      margin-bottom:0; }
  .bp3-dark .bp3-callout{
    background-color:rgba(138, 155, 168, 0.2); }
    .bp3-dark .bp3-callout[class*="bp3-icon-"]::before{
      color:#a7b6c2; }
  .bp3-callout.bp3-intent-primary{
    background-color:rgba(19, 124, 189, 0.15); }
    .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-primary .bp3-heading{
      color:#106ba3; }
    .bp3-dark .bp3-callout.bp3-intent-primary{
      background-color:rgba(19, 124, 189, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-primary .bp3-heading{
        color:#48aff0; }
  .bp3-callout.bp3-intent-success{
    background-color:rgba(15, 153, 96, 0.15); }
    .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-success > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-success .bp3-heading{
      color:#0d8050; }
    .bp3-dark .bp3-callout.bp3-intent-success{
      background-color:rgba(15, 153, 96, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-success > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-success .bp3-heading{
        color:#3dcc91; }
  .bp3-callout.bp3-intent-warning{
    background-color:rgba(217, 130, 43, 0.15); }
    .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-warning .bp3-heading{
      color:#bf7326; }
    .bp3-dark .bp3-callout.bp3-intent-warning{
      background-color:rgba(217, 130, 43, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-warning .bp3-heading{
        color:#ffb366; }
  .bp3-callout.bp3-intent-danger{
    background-color:rgba(219, 55, 55, 0.15); }
    .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-danger .bp3-heading{
      color:#c23030; }
    .bp3-dark .bp3-callout.bp3-intent-danger{
      background-color:rgba(219, 55, 55, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-danger .bp3-heading{
        color:#ff7373; }
  .bp3-running-text .bp3-callout{
    margin:20px 0; }
.bp3-card{
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
  background-color:#ffffff;
  padding:20px;
  -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-card.bp3-dark,
  .bp3-dark .bp3-card{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
    background-color:#30404d; }

.bp3-elevation-0{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }
  .bp3-elevation-0.bp3-dark,
  .bp3-dark .bp3-elevation-0{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }

.bp3-elevation-1{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-1.bp3-dark,
  .bp3-dark .bp3-elevation-1{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-elevation-2{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-2.bp3-dark,
  .bp3-dark .bp3-elevation-2{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4); }

.bp3-elevation-3{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-3.bp3-dark,
  .bp3-dark .bp3-elevation-3{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }

.bp3-elevation-4{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-4.bp3-dark,
  .bp3-dark .bp3-elevation-4{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4); }

.bp3-card.bp3-interactive:hover{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  cursor:pointer; }
  .bp3-card.bp3-interactive:hover.bp3-dark,
  .bp3-dark .bp3-card.bp3-interactive:hover{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }

.bp3-card.bp3-interactive:active{
  opacity:0.9;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  -webkit-transition-duration:0;
          transition-duration:0; }
  .bp3-card.bp3-interactive:active.bp3-dark,
  .bp3-dark .bp3-card.bp3-interactive:active{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-collapse{
  height:0;
  overflow-y:hidden;
  -webkit-transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-collapse .bp3-collapse-body{
    -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-collapse .bp3-collapse-body[aria-hidden="true"]{
      display:none; }

.bp3-context-menu .bp3-popover-target{
  display:block; }

.bp3-context-menu-popover-target{
  position:fixed; }

.bp3-divider{
  margin:5px;
  border-right:1px solid rgba(16, 22, 26, 0.15);
  border-bottom:1px solid rgba(16, 22, 26, 0.15); }
  .bp3-dark .bp3-divider{
    border-color:rgba(16, 22, 26, 0.4); }
.bp3-dialog-container{
  opacity:1;
  -webkit-transform:scale(1);
          transform:scale(1);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  width:100%;
  min-height:100%;
  pointer-events:none;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-dialog-container.bp3-overlay-enter > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear > .bp3-dialog{
    opacity:0;
    -webkit-transform:scale(0.5);
            transform:scale(0.5); }
  .bp3-dialog-container.bp3-overlay-enter-active > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear-active > .bp3-dialog{
    opacity:1;
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-property:opacity, -webkit-transform;
    transition-property:opacity, -webkit-transform;
    transition-property:opacity, transform;
    transition-property:opacity, transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-dialog-container.bp3-overlay-exit > .bp3-dialog{
    opacity:1;
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-dialog-container.bp3-overlay-exit-active > .bp3-dialog{
    opacity:0;
    -webkit-transform:scale(0.5);
            transform:scale(0.5);
    -webkit-transition-property:opacity, -webkit-transform;
    transition-property:opacity, -webkit-transform;
    transition-property:opacity, transform;
    transition-property:opacity, transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }

.bp3-dialog{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:30px 0;
  border-radius:6px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  background:#ebf1f5;
  width:500px;
  padding-bottom:20px;
  pointer-events:all;
  -webkit-user-select:text;
     -moz-user-select:text;
      -ms-user-select:text;
          user-select:text; }
  .bp3-dialog:focus{
    outline:0; }
  .bp3-dialog.bp3-dark,
  .bp3-dark .bp3-dialog{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
    background:#293742;
    color:#f5f8fa; }

.bp3-dialog-header{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  border-radius:6px 6px 0 0;
  -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
  background:#ffffff;
  min-height:40px;
  padding-right:5px;
  padding-left:20px; }
  .bp3-dialog-header .bp3-icon-large,
  .bp3-dialog-header .bp3-icon{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    margin-right:10px;
    color:#5c7080; }
  .bp3-dialog-header .bp3-heading{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    margin:0;
    line-height:inherit; }
    .bp3-dialog-header .bp3-heading:last-child{
      margin-right:20px; }
  .bp3-dark .bp3-dialog-header{
    -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
    background:#30404d; }
    .bp3-dark .bp3-dialog-header .bp3-icon-large,
    .bp3-dark .bp3-dialog-header .bp3-icon{
      color:#a7b6c2; }

.bp3-dialog-body{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  margin:20px;
  line-height:18px; }

.bp3-dialog-footer{
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  margin:0 20px; }

.bp3-dialog-footer-actions{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:end;
      -ms-flex-pack:end;
          justify-content:flex-end; }
  .bp3-dialog-footer-actions .bp3-button{
    margin-left:10px; }
.bp3-drawer{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:0;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  background:#ffffff;
  padding:0; }
  .bp3-drawer:focus{
    outline:0; }
  .bp3-drawer.bp3-position-top{
    top:0;
    right:0;
    left:0;
    height:50%; }
    .bp3-drawer.bp3-position-top.bp3-overlay-enter, .bp3-drawer.bp3-position-top.bp3-overlay-appear{
      -webkit-transform:translateY(-100%);
              transform:translateY(-100%); }
    .bp3-drawer.bp3-position-top.bp3-overlay-enter-active, .bp3-drawer.bp3-position-top.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer.bp3-position-top.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer.bp3-position-top.bp3-overlay-exit-active{
      -webkit-transform:translateY(-100%);
              transform:translateY(-100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer.bp3-position-bottom{
    right:0;
    bottom:0;
    left:0;
    height:50%; }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-enter, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear{
      -webkit-transform:translateY(100%);
              transform:translateY(100%); }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-enter-active, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-exit-active{
      -webkit-transform:translateY(100%);
              transform:translateY(100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer.bp3-position-left{
    top:0;
    bottom:0;
    left:0;
    width:50%; }
    .bp3-drawer.bp3-position-left.bp3-overlay-enter, .bp3-drawer.bp3-position-left.bp3-overlay-appear{
      -webkit-transform:translateX(-100%);
              transform:translateX(-100%); }
    .bp3-drawer.bp3-position-left.bp3-overlay-enter-active, .bp3-drawer.bp3-position-left.bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer.bp3-position-left.bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer.bp3-position-left.bp3-overlay-exit-active{
      -webkit-transform:translateX(-100%);
              transform:translateX(-100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer.bp3-position-right{
    top:0;
    right:0;
    bottom:0;
    width:50%; }
    .bp3-drawer.bp3-position-right.bp3-overlay-enter, .bp3-drawer.bp3-position-right.bp3-overlay-appear{
      -webkit-transform:translateX(100%);
              transform:translateX(100%); }
    .bp3-drawer.bp3-position-right.bp3-overlay-enter-active, .bp3-drawer.bp3-position-right.bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer.bp3-position-right.bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer.bp3-position-right.bp3-overlay-exit-active{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
  .bp3-position-right):not(.bp3-vertical){
    top:0;
    right:0;
    bottom:0;
    width:50%; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear{
      -webkit-transform:translateX(100%);
              transform:translateX(100%); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit-active{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
  .bp3-position-right).bp3-vertical{
    right:0;
    bottom:0;
    left:0;
    height:50%; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-appear{
      -webkit-transform:translateY(100%);
              transform:translateY(100%); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-exit-active{
      -webkit-transform:translateY(100%);
              transform:translateY(100%);
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
      -webkit-transition-delay:0;
              transition-delay:0; }
  .bp3-drawer.bp3-dark,
  .bp3-dark .bp3-drawer{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
    background:#30404d;
    color:#f5f8fa; }

.bp3-drawer-header{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  position:relative;
  border-radius:0;
  -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
  min-height:40px;
  padding:5px;
  padding-left:20px; }
  .bp3-drawer-header .bp3-icon-large,
  .bp3-drawer-header .bp3-icon{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    margin-right:10px;
    color:#5c7080; }
  .bp3-drawer-header .bp3-heading{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    margin:0;
    line-height:inherit; }
    .bp3-drawer-header .bp3-heading:last-child{
      margin-right:20px; }
  .bp3-dark .bp3-drawer-header{
    -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:0 1px 0 rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-drawer-header .bp3-icon-large,
    .bp3-dark .bp3-drawer-header .bp3-icon{
      color:#a7b6c2; }

.bp3-drawer-body{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  overflow:auto;
  line-height:18px; }

.bp3-drawer-footer{
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  position:relative;
  -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
  padding:10px 20px; }
  .bp3-dark .bp3-drawer-footer{
    -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4); }
.bp3-editable-text{
  display:inline-block;
  position:relative;
  cursor:text;
  max-width:100%;
  vertical-align:top;
  white-space:nowrap; }
  .bp3-editable-text::before{
    position:absolute;
    top:-3px;
    right:-3px;
    bottom:-3px;
    left:-3px;
    border-radius:3px;
    content:"";
    -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-editable-text:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-editable-text.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
    background-color:#ffffff; }
  .bp3-editable-text.bp3-disabled::before{
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-editable-text.bp3-intent-primary .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{
    color:#137cbd; }
  .bp3-editable-text.bp3-intent-primary:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4); }
  .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-success .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{
    color:#0f9960; }
  .bp3-editable-text.bp3-intent-success:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4); }
  .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-warning .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{
    color:#d9822b; }
  .bp3-editable-text.bp3-intent-warning:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4); }
  .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-danger .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{
    color:#db3737; }
  .bp3-editable-text.bp3-intent-danger:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4); }
  .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-editable-text:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15); }
  .bp3-dark .bp3-editable-text.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background-color:rgba(16, 22, 26, 0.3); }
  .bp3-dark .bp3-editable-text.bp3-disabled::before{
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-dark .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{
    color:#48aff0; }
  .bp3-dark .bp3-editable-text.bp3-intent-primary:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4);
            box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{
    color:#3dcc91; }
  .bp3-dark .bp3-editable-text.bp3-intent-success:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4);
            box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{
    color:#ffb366; }
  .bp3-dark .bp3-editable-text.bp3-intent-warning:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4);
            box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{
    color:#ff7373; }
  .bp3-dark .bp3-editable-text.bp3-intent-danger:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4);
            box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-editable-text-input,
.bp3-editable-text-content{
  display:inherit;
  position:relative;
  min-width:inherit;
  max-width:inherit;
  vertical-align:top;
  text-transform:inherit;
  letter-spacing:inherit;
  color:inherit;
  font:inherit;
  resize:none; }

.bp3-editable-text-input{
  border:none;
  -webkit-box-shadow:none;
          box-shadow:none;
  background:none;
  width:100%;
  padding:0;
  white-space:pre-wrap; }
  .bp3-editable-text-input::-webkit-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-editable-text-input::-moz-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-editable-text-input:-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-editable-text-input::-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-editable-text-input::placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-editable-text-input:focus{
    outline:none; }
  .bp3-editable-text-input::-ms-clear{
    display:none; }

.bp3-editable-text-content{
  overflow:hidden;
  padding-right:2px;
  text-overflow:ellipsis;
  white-space:pre; }
  .bp3-editable-text-editing > .bp3-editable-text-content{
    position:absolute;
    left:0;
    visibility:hidden; }
  .bp3-editable-text-placeholder > .bp3-editable-text-content{
    color:rgba(92, 112, 128, 0.6); }
    .bp3-dark .bp3-editable-text-placeholder > .bp3-editable-text-content{
      color:rgba(167, 182, 194, 0.6); }

.bp3-editable-text.bp3-multiline{
  display:block; }
  .bp3-editable-text.bp3-multiline .bp3-editable-text-content{
    overflow:auto;
    white-space:pre-wrap;
    word-wrap:break-word; }
.bp3-control-group{
  -webkit-transform:translateZ(0);
          transform:translateZ(0);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:stretch;
      -ms-flex-align:stretch;
          align-items:stretch; }
  .bp3-control-group > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-control-group > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-control-group .bp3-button,
  .bp3-control-group .bp3-html-select,
  .bp3-control-group .bp3-input,
  .bp3-control-group .bp3-select{
    position:relative; }
  .bp3-control-group .bp3-input{
    z-index:2;
    border-radius:inherit; }
    .bp3-control-group .bp3-input:focus{
      z-index:14;
      border-radius:3px; }
    .bp3-control-group .bp3-input[class*="bp3-intent"]{
      z-index:13; }
      .bp3-control-group .bp3-input[class*="bp3-intent"]:focus{
        z-index:15; }
    .bp3-control-group .bp3-input[readonly], .bp3-control-group .bp3-input:disabled, .bp3-control-group .bp3-input.bp3-disabled{
      z-index:1; }
  .bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input{
    z-index:13; }
    .bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input:focus{
      z-index:15; }
  .bp3-control-group .bp3-button,
  .bp3-control-group .bp3-html-select select,
  .bp3-control-group .bp3-select select{
    -webkit-transform:translateZ(0);
            transform:translateZ(0);
    z-index:4;
    border-radius:inherit; }
    .bp3-control-group .bp3-button:focus,
    .bp3-control-group .bp3-html-select select:focus,
    .bp3-control-group .bp3-select select:focus{
      z-index:5; }
    .bp3-control-group .bp3-button:hover,
    .bp3-control-group .bp3-html-select select:hover,
    .bp3-control-group .bp3-select select:hover{
      z-index:6; }
    .bp3-control-group .bp3-button:active,
    .bp3-control-group .bp3-html-select select:active,
    .bp3-control-group .bp3-select select:active{
      z-index:7; }
    .bp3-control-group .bp3-button[readonly], .bp3-control-group .bp3-button:disabled, .bp3-control-group .bp3-button.bp3-disabled,
    .bp3-control-group .bp3-html-select select[readonly],
    .bp3-control-group .bp3-html-select select:disabled,
    .bp3-control-group .bp3-html-select select.bp3-disabled,
    .bp3-control-group .bp3-select select[readonly],
    .bp3-control-group .bp3-select select:disabled,
    .bp3-control-group .bp3-select select.bp3-disabled{
      z-index:3; }
    .bp3-control-group .bp3-button[class*="bp3-intent"],
    .bp3-control-group .bp3-html-select select[class*="bp3-intent"],
    .bp3-control-group .bp3-select select[class*="bp3-intent"]{
      z-index:9; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:focus,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:focus,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:focus{
        z-index:10; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:hover,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:hover,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:hover{
        z-index:11; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:active,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:active,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:active{
        z-index:12; }
      .bp3-control-group .bp3-button[class*="bp3-intent"][readonly], .bp3-control-group .bp3-button[class*="bp3-intent"]:disabled, .bp3-control-group .bp3-button[class*="bp3-intent"].bp3-disabled,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"][readonly],
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:disabled,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"].bp3-disabled,
      .bp3-control-group .bp3-select select[class*="bp3-intent"][readonly],
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:disabled,
      .bp3-control-group .bp3-select select[class*="bp3-intent"].bp3-disabled{
        z-index:8; }
  .bp3-control-group .bp3-input-group > .bp3-icon,
  .bp3-control-group .bp3-input-group > .bp3-button,
  .bp3-control-group .bp3-input-group > .bp3-input-action{
    z-index:16; }
  .bp3-control-group .bp3-select::after,
  .bp3-control-group .bp3-html-select::after,
  .bp3-control-group .bp3-select > .bp3-icon,
  .bp3-control-group .bp3-html-select > .bp3-icon{
    z-index:17; }
  .bp3-control-group:not(.bp3-vertical) > *{
    margin-right:-1px; }
  .bp3-dark .bp3-control-group:not(.bp3-vertical) > *{
    margin-right:0; }
  .bp3-dark .bp3-control-group:not(.bp3-vertical) > .bp3-button + .bp3-button{
    margin-left:1px; }
  .bp3-control-group .bp3-popover-wrapper,
  .bp3-control-group .bp3-popover-target{
    border-radius:inherit; }
  .bp3-control-group > :first-child{
    border-radius:3px 0 0 3px; }
  .bp3-control-group > :last-child{
    margin-right:0;
    border-radius:0 3px 3px 0; }
  .bp3-control-group > :only-child{
    margin-right:0;
    border-radius:3px; }
  .bp3-control-group .bp3-input-group .bp3-button{
    border-radius:3px; }
  .bp3-control-group > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-control-group.bp3-fill > *:not(.bp3-fixed){
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-control-group.bp3-vertical{
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column; }
    .bp3-control-group.bp3-vertical > *{
      margin-top:-1px; }
    .bp3-control-group.bp3-vertical > :first-child{
      margin-top:0;
      border-radius:3px 3px 0 0; }
    .bp3-control-group.bp3-vertical > :last-child{
      border-radius:0 0 3px 3px; }
.bp3-control{
  display:block;
  position:relative;
  margin-bottom:10px;
  cursor:pointer;
  text-transform:none; }
  .bp3-control input:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
  .bp3-control:hover input:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#106ba3; }
  .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background:#0e5a8a; }
  .bp3-control input:disabled:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(19, 124, 189, 0.5); }
  .bp3-dark .bp3-control input:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control:hover input:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background-color:#106ba3; }
  .bp3-dark .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#0e5a8a; }
  .bp3-dark .bp3-control input:disabled:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(14, 90, 138, 0.5); }
  .bp3-control:not(.bp3-align-right){
    padding-left:26px; }
    .bp3-control:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-26px; }
  .bp3-control.bp3-align-right{
    padding-right:26px; }
    .bp3-control.bp3-align-right .bp3-control-indicator{
      margin-right:-26px; }
  .bp3-control.bp3-disabled{
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-control.bp3-inline{
    display:inline-block;
    margin-right:20px; }
  .bp3-control input{
    position:absolute;
    top:0;
    left:0;
    opacity:0;
    z-index:-1; }
  .bp3-control .bp3-control-indicator{
    display:inline-block;
    position:relative;
    margin-top:-3px;
    margin-right:10px;
    border:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-clip:padding-box;
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    cursor:pointer;
    width:1em;
    height:1em;
    vertical-align:middle;
    font-size:16px;
    -webkit-user-select:none;
       -moz-user-select:none;
        -ms-user-select:none;
            user-select:none; }
    .bp3-control .bp3-control-indicator::before{
      display:block;
      width:1em;
      height:1em;
      content:""; }
  .bp3-control:hover .bp3-control-indicator{
    background-color:#ebf1f5; }
  .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background:#d8e1e8; }
  .bp3-control input:disabled ~ .bp3-control-indicator{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(206, 217, 224, 0.5);
    cursor:not-allowed; }
  .bp3-control input:focus ~ .bp3-control-indicator{
    outline:rgba(19, 124, 189, 0.6) auto 2px;
    outline-offset:2px;
    -moz-outline-radius:6px; }
  .bp3-control.bp3-align-right .bp3-control-indicator{
    float:right;
    margin-top:1px;
    margin-left:10px; }
  .bp3-control.bp3-large{
    font-size:16px; }
    .bp3-control.bp3-large:not(.bp3-align-right){
      padding-left:30px; }
      .bp3-control.bp3-large:not(.bp3-align-right) .bp3-control-indicator{
        margin-left:-30px; }
    .bp3-control.bp3-large.bp3-align-right{
      padding-right:30px; }
      .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{
        margin-right:-30px; }
    .bp3-control.bp3-large .bp3-control-indicator{
      font-size:20px; }
    .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{
      margin-top:0; }
  .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    color:#ffffff; }
  .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    background-color:#106ba3; }
  .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background:#0e5a8a; }
  .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(19, 124, 189, 0.5); }
  .bp3-dark .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background-color:#106ba3; }
  .bp3-dark .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#0e5a8a; }
  .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(14, 90, 138, 0.5); }
  .bp3-control.bp3-checkbox .bp3-control-indicator{
    border-radius:3px; }
  .bp3-control.bp3-checkbox input:checked ~ .bp3-control-indicator::before{
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0 0 12 5z' fill='white'/%3e%3c/svg%3e"); }
  .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator::before{
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z' fill='white'/%3e%3c/svg%3e"); }
  .bp3-control.bp3-radio .bp3-control-indicator{
    border-radius:50%; }
  .bp3-control.bp3-radio input:checked ~ .bp3-control-indicator::before{
    background-image:radial-gradient(#ffffff, #ffffff 28%, transparent 32%); }
  .bp3-control.bp3-radio input:checked:disabled ~ .bp3-control-indicator::before{
    opacity:0.5; }
  .bp3-control.bp3-radio input:focus ~ .bp3-control-indicator{
    -moz-outline-radius:16px; }
  .bp3-control.bp3-switch input ~ .bp3-control-indicator{
    background:rgba(167, 182, 194, 0.5); }
  .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{
    background:rgba(115, 134, 148, 0.5); }
  .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{
    background:rgba(92, 112, 128, 0.5); }
  .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{
    background:rgba(206, 217, 224, 0.5); }
    .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{
      background:rgba(255, 255, 255, 0.8); }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{
    background:#137cbd; }
  .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{
    background:#106ba3; }
  .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{
    background:#0e5a8a; }
  .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{
    background:rgba(19, 124, 189, 0.5); }
    .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{
      background:rgba(255, 255, 255, 0.8); }
  .bp3-control.bp3-switch:not(.bp3-align-right){
    padding-left:38px; }
    .bp3-control.bp3-switch:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-38px; }
  .bp3-control.bp3-switch.bp3-align-right{
    padding-right:38px; }
    .bp3-control.bp3-switch.bp3-align-right .bp3-control-indicator{
      margin-right:-38px; }
  .bp3-control.bp3-switch .bp3-control-indicator{
    border:none;
    border-radius:1.75em;
    -webkit-box-shadow:none !important;
            box-shadow:none !important;
    width:auto;
    min-width:1.75em;
    -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-control.bp3-switch .bp3-control-indicator::before{
      position:absolute;
      left:0;
      margin:2px;
      border-radius:50%;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
      background:#ffffff;
      width:calc(1em - 4px);
      height:calc(1em - 4px);
      -webkit-transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{
    left:calc(100% - 1em); }
  .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right){
    padding-left:45px; }
    .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-45px; }
  .bp3-control.bp3-switch.bp3-large.bp3-align-right{
    padding-right:45px; }
    .bp3-control.bp3-switch.bp3-large.bp3-align-right .bp3-control-indicator{
      margin-right:-45px; }
  .bp3-dark .bp3-control.bp3-switch input ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.5); }
  .bp3-dark .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.7); }
  .bp3-dark .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.9); }
  .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{
    background:rgba(57, 75, 89, 0.5); }
    .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{
      background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{
    background:#137cbd; }
  .bp3-dark .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{
    background:#106ba3; }
  .bp3-dark .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{
    background:#0e5a8a; }
  .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{
    background:rgba(14, 90, 138, 0.5); }
    .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{
      background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-switch .bp3-control-indicator::before{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background:#394b59; }
  .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-control.bp3-switch .bp3-switch-inner-text{
    text-align:center;
    font-size:0.7em; }
  .bp3-control.bp3-switch .bp3-control-indicator-child:first-child{
    visibility:hidden;
    margin-right:1.2em;
    margin-left:0.5em;
    line-height:0; }
  .bp3-control.bp3-switch .bp3-control-indicator-child:last-child{
    visibility:visible;
    margin-right:0.5em;
    margin-left:1.2em;
    line-height:1em; }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:first-child{
    visibility:visible;
    line-height:1em; }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:last-child{
    visibility:hidden;
    line-height:0; }
  .bp3-dark .bp3-control{
    color:#f5f8fa; }
    .bp3-dark .bp3-control.bp3-disabled{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-control .bp3-control-indicator{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      background-color:#394b59;
      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0)); }
    .bp3-dark .bp3-control:hover .bp3-control-indicator{
      background-color:#30404d; }
    .bp3-dark .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background:#202b33; }
    .bp3-dark .bp3-control input:disabled ~ .bp3-control-indicator{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(57, 75, 89, 0.5);
      cursor:not-allowed; }
    .bp3-dark .bp3-control.bp3-checkbox input:disabled:checked ~ .bp3-control-indicator, .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
      color:rgba(167, 182, 194, 0.6); }
.bp3-file-input{
  display:inline-block;
  position:relative;
  cursor:pointer;
  height:30px; }
  .bp3-file-input input{
    opacity:0;
    margin:0;
    min-width:200px; }
    .bp3-file-input input:disabled + .bp3-file-upload-input,
    .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(206, 217, 224, 0.5);
      cursor:not-allowed;
      color:rgba(92, 112, 128, 0.6);
      resize:none; }
      .bp3-file-input input:disabled + .bp3-file-upload-input::after,
      .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{
        outline:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        background-color:rgba(206, 217, 224, 0.5);
        background-image:none;
        cursor:not-allowed;
        color:rgba(92, 112, 128, 0.6); }
        .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active:hover,
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active,
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active:hover{
          background:rgba(206, 217, 224, 0.7); }
      .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input, .bp3-dark
      .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{
        -webkit-box-shadow:none;
                box-shadow:none;
        background:rgba(57, 75, 89, 0.5);
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after, .bp3-dark
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{
          -webkit-box-shadow:none;
                  box-shadow:none;
          background-color:rgba(57, 75, 89, 0.5);
          background-image:none;
          color:rgba(167, 182, 194, 0.6); }
          .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-dark
          .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active{
            background:rgba(57, 75, 89, 0.7); }
  .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{
    color:#182026; }
  .bp3-dark .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{
    color:#f5f8fa; }
  .bp3-file-input.bp3-fill{
    width:100%; }
  .bp3-file-input.bp3-large,
  .bp3-large .bp3-file-input{
    height:40px; }
  .bp3-file-input .bp3-file-upload-input-custom-text::after{
    content:attr(bp3-button-text); }

.bp3-file-upload-input{
  outline:none;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  background:#ffffff;
  height:30px;
  padding:0 10px;
  vertical-align:middle;
  line-height:30px;
  color:#182026;
  font-size:14px;
  font-weight:400;
  -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  -webkit-appearance:none;
     -moz-appearance:none;
          appearance:none;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  position:absolute;
  top:0;
  right:0;
  left:0;
  padding-right:80px;
  color:rgba(92, 112, 128, 0.6);
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-file-upload-input::-webkit-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-file-upload-input::-moz-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-file-upload-input:-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-file-upload-input::-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-file-upload-input::placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-file-upload-input:focus, .bp3-file-upload-input.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-file-upload-input[type="search"], .bp3-file-upload-input.bp3-round{
    border-radius:30px;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    padding-left:10px; }
  .bp3-file-upload-input[readonly]{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-file-upload-input:disabled, .bp3-file-upload-input.bp3-disabled{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(206, 217, 224, 0.5);
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6);
    resize:none; }
  .bp3-file-upload-input::after{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    color:#182026;
    min-width:24px;
    min-height:24px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    position:absolute;
    top:0;
    right:0;
    margin:3px;
    border-radius:3px;
    width:70px;
    text-align:center;
    line-height:24px;
    content:"Browse"; }
    .bp3-file-upload-input::after:hover{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
      background-clip:padding-box;
      background-color:#ebf1f5; }
    .bp3-file-upload-input::after:active, .bp3-file-upload-input::after.bp3-active{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#d8e1e8;
      background-image:none; }
    .bp3-file-upload-input::after:disabled, .bp3-file-upload-input::after.bp3-disabled{
      outline:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(206, 217, 224, 0.5);
      background-image:none;
      cursor:not-allowed;
      color:rgba(92, 112, 128, 0.6); }
      .bp3-file-upload-input::after:disabled.bp3-active, .bp3-file-upload-input::after:disabled.bp3-active:hover, .bp3-file-upload-input::after.bp3-disabled.bp3-active, .bp3-file-upload-input::after.bp3-disabled.bp3-active:hover{
        background:rgba(206, 217, 224, 0.7); }
  .bp3-file-upload-input:hover::after{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-clip:padding-box;
    background-color:#ebf1f5; }
  .bp3-file-upload-input:active::after{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#d8e1e8;
    background-image:none; }
  .bp3-large .bp3-file-upload-input{
    height:40px;
    line-height:40px;
    font-size:16px;
    padding-right:95px; }
    .bp3-large .bp3-file-upload-input[type="search"], .bp3-large .bp3-file-upload-input.bp3-round{
      padding:0 15px; }
    .bp3-large .bp3-file-upload-input::after{
      min-width:30px;
      min-height:30px;
      margin:5px;
      width:85px;
      line-height:30px; }
  .bp3-dark .bp3-file-upload-input{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background:rgba(16, 22, 26, 0.3);
    color:#f5f8fa;
    color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-file-upload-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-file-upload-input:disabled, .bp3-dark .bp3-file-upload-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(57, 75, 89, 0.5);
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::after{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      background-color:#394b59;
      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
      color:#f5f8fa; }
      .bp3-dark .bp3-file-upload-input::after:hover, .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{
        color:#f5f8fa; }
      .bp3-dark .bp3-file-upload-input::after:hover{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
        background-color:#30404d; }
      .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
        background-color:#202b33;
        background-image:none; }
      .bp3-dark .bp3-file-upload-input::after:disabled, .bp3-dark .bp3-file-upload-input::after.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none;
        background-color:rgba(57, 75, 89, 0.5);
        background-image:none;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-upload-input::after:disabled.bp3-active, .bp3-dark .bp3-file-upload-input::after.bp3-disabled.bp3-active{
          background:rgba(57, 75, 89, 0.7); }
      .bp3-dark .bp3-file-upload-input::after .bp3-button-spinner .bp3-spinner-head{
        background:rgba(16, 22, 26, 0.5);
        stroke:#8a9ba8; }
    .bp3-dark .bp3-file-upload-input:hover::after{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      background-color:#30404d; }
    .bp3-dark .bp3-file-upload-input:active::after{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#202b33;
      background-image:none; }

.bp3-file-upload-input::after{
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
.bp3-form-group{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:0 0 15px; }
  .bp3-form-group label.bp3-label{
    margin-bottom:5px; }
  .bp3-form-group .bp3-control{
    margin-top:7px; }
  .bp3-form-group .bp3-form-helper-text{
    margin-top:5px;
    color:#5c7080;
    font-size:12px; }
  .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{
    color:#106ba3; }
  .bp3-form-group.bp3-intent-success .bp3-form-helper-text{
    color:#0d8050; }
  .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{
    color:#bf7326; }
  .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{
    color:#c23030; }
  .bp3-form-group.bp3-inline{
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start; }
    .bp3-form-group.bp3-inline.bp3-large label.bp3-label{
      margin:0 10px 0 0;
      line-height:40px; }
    .bp3-form-group.bp3-inline label.bp3-label{
      margin:0 10px 0 0;
      line-height:30px; }
  .bp3-form-group.bp3-disabled .bp3-label,
  .bp3-form-group.bp3-disabled .bp3-text-muted,
  .bp3-form-group.bp3-disabled .bp3-form-helper-text{
    color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-dark .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{
    color:#48aff0; }
  .bp3-dark .bp3-form-group.bp3-intent-success .bp3-form-helper-text{
    color:#3dcc91; }
  .bp3-dark .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{
    color:#ffb366; }
  .bp3-dark .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{
    color:#ff7373; }
  .bp3-dark .bp3-form-group .bp3-form-helper-text{
    color:#a7b6c2; }
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-label,
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-text-muted,
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-form-helper-text{
    color:rgba(167, 182, 194, 0.6) !important; }
.bp3-input-group{
  display:block;
  position:relative; }
  .bp3-input-group .bp3-input{
    position:relative;
    width:100%; }
    .bp3-input-group .bp3-input:not(:first-child){
      padding-left:30px; }
    .bp3-input-group .bp3-input:not(:last-child){
      padding-right:30px; }
  .bp3-input-group .bp3-input-action,
  .bp3-input-group > .bp3-button,
  .bp3-input-group > .bp3-icon{
    position:absolute;
    top:0; }
    .bp3-input-group .bp3-input-action:first-child,
    .bp3-input-group > .bp3-button:first-child,
    .bp3-input-group > .bp3-icon:first-child{
      left:0; }
    .bp3-input-group .bp3-input-action:last-child,
    .bp3-input-group > .bp3-button:last-child,
    .bp3-input-group > .bp3-icon:last-child{
      right:0; }
  .bp3-input-group .bp3-button{
    min-width:24px;
    min-height:24px;
    margin:3px;
    padding:0 7px; }
    .bp3-input-group .bp3-button:empty{
      padding:0; }
  .bp3-input-group > .bp3-icon{
    z-index:1;
    color:#5c7080; }
    .bp3-input-group > .bp3-icon:empty{
      line-height:1;
      font-family:"Icons16", sans-serif;
      font-size:16px;
      font-weight:400;
      font-style:normal;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased; }
  .bp3-input-group > .bp3-icon,
  .bp3-input-group .bp3-input-action > .bp3-spinner{
    margin:7px; }
  .bp3-input-group .bp3-tag{
    margin:5px; }
  .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus),
  .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){
    color:#5c7080; }
    .bp3-dark .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus), .bp3-dark
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){
      color:#a7b6c2; }
    .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large{
      color:#5c7080; }
  .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled,
  .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled{
    color:rgba(92, 112, 128, 0.6) !important; }
    .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-large,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-standard,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-large{
      color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-input-group.bp3-disabled{
    cursor:not-allowed; }
    .bp3-input-group.bp3-disabled .bp3-icon{
      color:rgba(92, 112, 128, 0.6); }
  .bp3-input-group.bp3-large .bp3-button{
    min-width:30px;
    min-height:30px;
    margin:5px; }
  .bp3-input-group.bp3-large > .bp3-icon,
  .bp3-input-group.bp3-large .bp3-input-action > .bp3-spinner{
    margin:12px; }
  .bp3-input-group.bp3-large .bp3-input{
    height:40px;
    line-height:40px;
    font-size:16px; }
    .bp3-input-group.bp3-large .bp3-input[type="search"], .bp3-input-group.bp3-large .bp3-input.bp3-round{
      padding:0 15px; }
    .bp3-input-group.bp3-large .bp3-input:not(:first-child){
      padding-left:40px; }
    .bp3-input-group.bp3-large .bp3-input:not(:last-child){
      padding-right:40px; }
  .bp3-input-group.bp3-small .bp3-button{
    min-width:20px;
    min-height:20px;
    margin:2px; }
  .bp3-input-group.bp3-small .bp3-tag{
    min-width:20px;
    min-height:20px;
    margin:2px; }
  .bp3-input-group.bp3-small > .bp3-icon,
  .bp3-input-group.bp3-small .bp3-input-action > .bp3-spinner{
    margin:4px; }
  .bp3-input-group.bp3-small .bp3-input{
    height:24px;
    padding-right:8px;
    padding-left:8px;
    line-height:24px;
    font-size:12px; }
    .bp3-input-group.bp3-small .bp3-input[type="search"], .bp3-input-group.bp3-small .bp3-input.bp3-round{
      padding:0 12px; }
    .bp3-input-group.bp3-small .bp3-input:not(:first-child){
      padding-left:24px; }
    .bp3-input-group.bp3-small .bp3-input:not(:last-child){
      padding-right:24px; }
  .bp3-input-group.bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    width:100%; }
  .bp3-input-group.bp3-round .bp3-button,
  .bp3-input-group.bp3-round .bp3-input,
  .bp3-input-group.bp3-round .bp3-tag{
    border-radius:30px; }
  .bp3-dark .bp3-input-group .bp3-icon{
    color:#a7b6c2; }
  .bp3-dark .bp3-input-group.bp3-disabled .bp3-icon{
    color:rgba(167, 182, 194, 0.6); }
  .bp3-input-group.bp3-intent-primary .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-primary .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-primary .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #137cbd;
              box-shadow:inset 0 0 0 1px #137cbd; }
    .bp3-input-group.bp3-intent-primary .bp3-input:disabled, .bp3-input-group.bp3-intent-primary .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-primary > .bp3-icon{
    color:#106ba3; }
    .bp3-dark .bp3-input-group.bp3-intent-primary > .bp3-icon{
      color:#48aff0; }
  .bp3-input-group.bp3-intent-success .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-success .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-success .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #0f9960;
              box-shadow:inset 0 0 0 1px #0f9960; }
    .bp3-input-group.bp3-intent-success .bp3-input:disabled, .bp3-input-group.bp3-intent-success .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-success > .bp3-icon{
    color:#0d8050; }
    .bp3-dark .bp3-input-group.bp3-intent-success > .bp3-icon{
      color:#3dcc91; }
  .bp3-input-group.bp3-intent-warning .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-warning .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-warning .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #d9822b;
              box-shadow:inset 0 0 0 1px #d9822b; }
    .bp3-input-group.bp3-intent-warning .bp3-input:disabled, .bp3-input-group.bp3-intent-warning .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-warning > .bp3-icon{
    color:#bf7326; }
    .bp3-dark .bp3-input-group.bp3-intent-warning > .bp3-icon{
      color:#ffb366; }
  .bp3-input-group.bp3-intent-danger .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-danger .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-danger .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #db3737;
              box-shadow:inset 0 0 0 1px #db3737; }
    .bp3-input-group.bp3-intent-danger .bp3-input:disabled, .bp3-input-group.bp3-intent-danger .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-danger > .bp3-icon{
    color:#c23030; }
    .bp3-dark .bp3-input-group.bp3-intent-danger > .bp3-icon{
      color:#ff7373; }
.bp3-input{
  outline:none;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  background:#ffffff;
  height:30px;
  padding:0 10px;
  vertical-align:middle;
  line-height:30px;
  color:#182026;
  font-size:14px;
  font-weight:400;
  -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  -webkit-appearance:none;
     -moz-appearance:none;
          appearance:none; }
  .bp3-input::-webkit-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input::-moz-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input:-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input::-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input::placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input:focus, .bp3-input.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-input[type="search"], .bp3-input.bp3-round{
    border-radius:30px;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    padding-left:10px; }
  .bp3-input[readonly]{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-input:disabled, .bp3-input.bp3-disabled{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(206, 217, 224, 0.5);
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6);
    resize:none; }
  .bp3-input.bp3-large{
    height:40px;
    line-height:40px;
    font-size:16px; }
    .bp3-input.bp3-large[type="search"], .bp3-input.bp3-large.bp3-round{
      padding:0 15px; }
  .bp3-input.bp3-small{
    height:24px;
    padding-right:8px;
    padding-left:8px;
    line-height:24px;
    font-size:12px; }
    .bp3-input.bp3-small[type="search"], .bp3-input.bp3-small.bp3-round{
      padding:0 12px; }
  .bp3-input.bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    width:100%; }
  .bp3-dark .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background:rgba(16, 22, 26, 0.3);
    color:#f5f8fa; }
    .bp3-dark .bp3-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-input:disabled, .bp3-dark .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(57, 75, 89, 0.5);
      color:rgba(167, 182, 194, 0.6); }
  .bp3-input.bp3-intent-primary{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-primary:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-primary[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #137cbd;
              box-shadow:inset 0 0 0 1px #137cbd; }
    .bp3-input.bp3-intent-primary:disabled, .bp3-input.bp3-intent-primary.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-primary:focus{
        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-primary[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #137cbd;
                box-shadow:inset 0 0 0 1px #137cbd; }
      .bp3-dark .bp3-input.bp3-intent-primary:disabled, .bp3-dark .bp3-input.bp3-intent-primary.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-success{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-success:focus{
      -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-success[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #0f9960;
              box-shadow:inset 0 0 0 1px #0f9960; }
    .bp3-input.bp3-intent-success:disabled, .bp3-input.bp3-intent-success.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-success{
      -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-success:focus{
        -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-success[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #0f9960;
                box-shadow:inset 0 0 0 1px #0f9960; }
      .bp3-dark .bp3-input.bp3-intent-success:disabled, .bp3-dark .bp3-input.bp3-intent-success.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-warning{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-warning:focus{
      -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-warning[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #d9822b;
              box-shadow:inset 0 0 0 1px #d9822b; }
    .bp3-input.bp3-intent-warning:disabled, .bp3-input.bp3-intent-warning.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-warning:focus{
        -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-warning[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #d9822b;
                box-shadow:inset 0 0 0 1px #d9822b; }
      .bp3-dark .bp3-input.bp3-intent-warning:disabled, .bp3-dark .bp3-input.bp3-intent-warning.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-danger{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-danger:focus{
      -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-danger[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #db3737;
              box-shadow:inset 0 0 0 1px #db3737; }
    .bp3-input.bp3-intent-danger:disabled, .bp3-input.bp3-intent-danger.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-danger:focus{
        -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-danger[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #db3737;
                box-shadow:inset 0 0 0 1px #db3737; }
      .bp3-dark .bp3-input.bp3-intent-danger:disabled, .bp3-dark .bp3-input.bp3-intent-danger.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input::-ms-clear{
    display:none; }
textarea.bp3-input{
  max-width:100%;
  padding:10px; }
  textarea.bp3-input, textarea.bp3-input.bp3-large, textarea.bp3-input.bp3-small{
    height:auto;
    line-height:inherit; }
  textarea.bp3-input.bp3-small{
    padding:8px; }
  .bp3-dark textarea.bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background:rgba(16, 22, 26, 0.3);
    color:#f5f8fa; }
    .bp3-dark textarea.bp3-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark textarea.bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark textarea.bp3-input:disabled, .bp3-dark textarea.bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:rgba(57, 75, 89, 0.5);
      color:rgba(167, 182, 194, 0.6); }
label.bp3-label{
  display:block;
  margin-top:0;
  margin-bottom:15px; }
  label.bp3-label .bp3-html-select,
  label.bp3-label .bp3-input,
  label.bp3-label .bp3-select,
  label.bp3-label .bp3-slider,
  label.bp3-label .bp3-popover-wrapper{
    display:block;
    margin-top:5px;
    text-transform:none; }
  label.bp3-label .bp3-button-group{
    margin-top:5px; }
  label.bp3-label .bp3-select select,
  label.bp3-label .bp3-html-select select{
    width:100%;
    vertical-align:top;
    font-weight:400; }
  label.bp3-label.bp3-disabled,
  label.bp3-label.bp3-disabled .bp3-text-muted{
    color:rgba(92, 112, 128, 0.6); }
  label.bp3-label.bp3-inline{
    line-height:30px; }
    label.bp3-label.bp3-inline .bp3-html-select,
    label.bp3-label.bp3-inline .bp3-input,
    label.bp3-label.bp3-inline .bp3-input-group,
    label.bp3-label.bp3-inline .bp3-select,
    label.bp3-label.bp3-inline .bp3-popover-wrapper{
      display:inline-block;
      margin:0 0 0 5px;
      vertical-align:top; }
    label.bp3-label.bp3-inline .bp3-button-group{
      margin:0 0 0 5px; }
    label.bp3-label.bp3-inline .bp3-input-group .bp3-input{
      margin-left:0; }
    label.bp3-label.bp3-inline.bp3-large{
      line-height:40px; }
  label.bp3-label:not(.bp3-inline) .bp3-popover-target{
    display:block; }
  .bp3-dark label.bp3-label{
    color:#f5f8fa; }
    .bp3-dark label.bp3-label.bp3-disabled,
    .bp3-dark label.bp3-label.bp3-disabled .bp3-text-muted{
      color:rgba(167, 182, 194, 0.6); }
.bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button{
  -webkit-box-flex:1;
      -ms-flex:1 1 14px;
          flex:1 1 14px;
  width:30px;
  min-height:0;
  padding:0; }
  .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:first-child{
    border-radius:0 3px 0 0; }
  .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:last-child{
    border-radius:0 0 3px 0; }

.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:first-child{
  border-radius:3px 0 0 0; }

.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:last-child{
  border-radius:0 0 0 3px; }

.bp3-numeric-input.bp3-large .bp3-button-group.bp3-vertical > .bp3-button{
  width:40px; }

form{
  display:block; }
.bp3-html-select select,
.bp3-select select{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  border:none;
  border-radius:3px;
  cursor:pointer;
  padding:5px 10px;
  vertical-align:middle;
  text-align:left;
  font-size:14px;
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  background-color:#f5f8fa;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  color:#182026;
  border-radius:3px;
  width:100%;
  height:30px;
  padding:0 25px 0 10px;
  -moz-appearance:none;
  -webkit-appearance:none; }
  .bp3-html-select select > *, .bp3-select select > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-html-select select > .bp3-fill, .bp3-select select > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-html-select select::before,
  .bp3-select select::before, .bp3-html-select select > *, .bp3-select select > *{
    margin-right:7px; }
  .bp3-html-select select:empty::before,
  .bp3-select select:empty::before,
  .bp3-html-select select > :last-child,
  .bp3-select select > :last-child{
    margin-right:0; }
  .bp3-html-select select:hover,
  .bp3-select select:hover{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-clip:padding-box;
    background-color:#ebf1f5; }
  .bp3-html-select select:active,
  .bp3-select select:active, .bp3-html-select select.bp3-active,
  .bp3-select select.bp3-active{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#d8e1e8;
    background-image:none; }
  .bp3-html-select select:disabled,
  .bp3-select select:disabled, .bp3-html-select select.bp3-disabled,
  .bp3-select select.bp3-disabled{
    outline:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    background-color:rgba(206, 217, 224, 0.5);
    background-image:none;
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
    .bp3-html-select select:disabled.bp3-active,
    .bp3-select select:disabled.bp3-active, .bp3-html-select select:disabled.bp3-active:hover,
    .bp3-select select:disabled.bp3-active:hover, .bp3-html-select select.bp3-disabled.bp3-active,
    .bp3-select select.bp3-disabled.bp3-active, .bp3-html-select select.bp3-disabled.bp3-active:hover,
    .bp3-select select.bp3-disabled.bp3-active:hover{
      background:rgba(206, 217, 224, 0.7); }

.bp3-html-select.bp3-minimal select,
.bp3-select.bp3-minimal select{
  -webkit-box-shadow:none;
          box-shadow:none;
  background:none; }
  .bp3-html-select.bp3-minimal select:hover,
  .bp3-select.bp3-minimal select:hover{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(167, 182, 194, 0.3);
    text-decoration:none;
    color:#182026; }
  .bp3-html-select.bp3-minimal select:active,
  .bp3-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal select.bp3-active,
  .bp3-select.bp3-minimal select.bp3-active{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:rgba(115, 134, 148, 0.3);
    color:#182026; }
  .bp3-html-select.bp3-minimal select:disabled,
  .bp3-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal select:disabled:hover,
  .bp3-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal select.bp3-disabled,
  .bp3-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal select.bp3-disabled:hover,
  .bp3-select.bp3-minimal select.bp3-disabled:hover{
    background:none;
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
    .bp3-html-select.bp3-minimal select:disabled.bp3-active,
    .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active,
    .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active,
    .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active,
    .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active{
      background:rgba(115, 134, 148, 0.3); }
  .bp3-dark .bp3-html-select.bp3-minimal select, .bp3-html-select.bp3-minimal .bp3-dark select,
  .bp3-dark .bp3-select.bp3-minimal select, .bp3-select.bp3-minimal .bp3-dark select{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:none;
    color:inherit; }
    .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,
    .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover, .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,
    .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none; }
    .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,
    .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover{
      background:rgba(138, 155, 168, 0.15); }
    .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,
    .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{
      background:rgba(138, 155, 168, 0.3);
      color:#f5f8fa; }
    .bp3-dark .bp3-html-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal .bp3-dark select:disabled,
    .bp3-dark .bp3-select.bp3-minimal select:disabled, .bp3-select.bp3-minimal .bp3-dark select:disabled, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover,
    .bp3-dark .bp3-select.bp3-minimal select:disabled:hover, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover{
      background:none;
      cursor:not-allowed;
      color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-html-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active{
        background:rgba(138, 155, 168, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-primary,
  .bp3-select.bp3-minimal select.bp3-intent-primary{
    color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,
    .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,
    .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,
    .bp3-select.bp3-minimal select.bp3-intent-primary:hover{
      background:rgba(19, 124, 189, 0.15);
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,
    .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{
      background:rgba(19, 124, 189, 0.3);
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled{
      background:none;
      color:rgba(16, 107, 163, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active{
        background:rgba(19, 124, 189, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
      stroke:#106ba3; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary{
      color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.2);
        color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(72, 175, 240, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-success,
  .bp3-select.bp3-minimal select.bp3-intent-success{
    color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,
    .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal select.bp3-intent-success:active,
    .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,
    .bp3-select.bp3-minimal select.bp3-intent-success:hover{
      background:rgba(15, 153, 96, 0.15);
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:active,
    .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{
      background:rgba(15, 153, 96, 0.3);
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled{
      background:none;
      color:rgba(13, 128, 80, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active{
        background:rgba(15, 153, 96, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
      stroke:#0d8050; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success{
      color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.2);
        color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(61, 204, 145, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-warning,
  .bp3-select.bp3-minimal select.bp3-intent-warning{
    color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,
    .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,
    .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,
    .bp3-select.bp3-minimal select.bp3-intent-warning:hover{
      background:rgba(217, 130, 43, 0.15);
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,
    .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{
      background:rgba(217, 130, 43, 0.3);
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled{
      background:none;
      color:rgba(191, 115, 38, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active{
        background:rgba(217, 130, 43, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
      stroke:#bf7326; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning{
      color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.2);
        color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(255, 179, 102, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-danger,
  .bp3-select.bp3-minimal select.bp3-intent-danger{
    color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,
    .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,
    .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{
      -webkit-box-shadow:none;
              box-shadow:none;
      background:none;
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,
    .bp3-select.bp3-minimal select.bp3-intent-danger:hover{
      background:rgba(219, 55, 55, 0.15);
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,
    .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{
      background:rgba(219, 55, 55, 0.3);
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled{
      background:none;
      color:rgba(194, 48, 48, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active{
        background:rgba(219, 55, 55, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
      stroke:#c23030; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger{
      color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.2);
        color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(255, 115, 115, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }

.bp3-html-select.bp3-large select,
.bp3-select.bp3-large select{
  height:40px;
  padding-right:35px;
  font-size:16px; }

.bp3-dark .bp3-html-select select, .bp3-dark .bp3-select select{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
  background-color:#394b59;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
  color:#f5f8fa; }
  .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover, .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{
    color:#f5f8fa; }
  .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background-color:#30404d; }
  .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#202b33;
    background-image:none; }
  .bp3-dark .bp3-html-select select:disabled, .bp3-dark .bp3-select select:disabled, .bp3-dark .bp3-html-select select.bp3-disabled, .bp3-dark .bp3-select select.bp3-disabled{
    -webkit-box-shadow:none;
            box-shadow:none;
    background-color:rgba(57, 75, 89, 0.5);
    background-image:none;
    color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-html-select select:disabled.bp3-active, .bp3-dark .bp3-select select:disabled.bp3-active, .bp3-dark .bp3-html-select select.bp3-disabled.bp3-active, .bp3-dark .bp3-select select.bp3-disabled.bp3-active{
      background:rgba(57, 75, 89, 0.7); }
  .bp3-dark .bp3-html-select select .bp3-button-spinner .bp3-spinner-head, .bp3-dark .bp3-select select .bp3-button-spinner .bp3-spinner-head{
    background:rgba(16, 22, 26, 0.5);
    stroke:#8a9ba8; }

.bp3-html-select select:disabled,
.bp3-select select:disabled{
  -webkit-box-shadow:none;
          box-shadow:none;
  background-color:rgba(206, 217, 224, 0.5);
  cursor:not-allowed;
  color:rgba(92, 112, 128, 0.6); }

.bp3-html-select .bp3-icon,
.bp3-select .bp3-icon, .bp3-select::after{
  position:absolute;
  top:7px;
  right:7px;
  color:#5c7080;
  pointer-events:none; }
  .bp3-html-select .bp3-disabled.bp3-icon,
  .bp3-select .bp3-disabled.bp3-icon, .bp3-disabled.bp3-select::after{
    color:rgba(92, 112, 128, 0.6); }
.bp3-html-select,
.bp3-select{
  display:inline-block;
  position:relative;
  vertical-align:middle;
  letter-spacing:normal; }
  .bp3-html-select select::-ms-expand,
  .bp3-select select::-ms-expand{
    display:none; }
  .bp3-html-select .bp3-icon,
  .bp3-select .bp3-icon{
    color:#5c7080; }
    .bp3-html-select .bp3-icon:hover,
    .bp3-select .bp3-icon:hover{
      color:#182026; }
    .bp3-dark .bp3-html-select .bp3-icon, .bp3-dark
    .bp3-select .bp3-icon{
      color:#a7b6c2; }
      .bp3-dark .bp3-html-select .bp3-icon:hover, .bp3-dark
      .bp3-select .bp3-icon:hover{
        color:#f5f8fa; }
  .bp3-html-select.bp3-large::after,
  .bp3-html-select.bp3-large .bp3-icon,
  .bp3-select.bp3-large::after,
  .bp3-select.bp3-large .bp3-icon{
    top:12px;
    right:12px; }
  .bp3-html-select.bp3-fill,
  .bp3-html-select.bp3-fill select,
  .bp3-select.bp3-fill,
  .bp3-select.bp3-fill select{
    width:100%; }
  .bp3-dark .bp3-html-select option, .bp3-dark
  .bp3-select option{
    background-color:#30404d;
    color:#f5f8fa; }
  .bp3-dark .bp3-html-select::after, .bp3-dark
  .bp3-select::after{
    color:#a7b6c2; }

.bp3-select::after{
  line-height:1;
  font-family:"Icons16", sans-serif;
  font-size:16px;
  font-weight:400;
  font-style:normal;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  content:""; }
.bp3-running-text table, table.bp3-html-table{
  border-spacing:0;
  font-size:14px; }
  .bp3-running-text table th, table.bp3-html-table th,
  .bp3-running-text table td,
  table.bp3-html-table td{
    padding:11px;
    vertical-align:top;
    text-align:left; }
  .bp3-running-text table th, table.bp3-html-table th{
    color:#182026;
    font-weight:600; }
  
  .bp3-running-text table td,
  table.bp3-html-table td{
    color:#182026; }
  .bp3-running-text table tbody tr:first-child th, table.bp3-html-table tbody tr:first-child th,
  .bp3-running-text table tbody tr:first-child td,
  table.bp3-html-table tbody tr:first-child td{
    -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }
  .bp3-dark .bp3-running-text table th, .bp3-running-text .bp3-dark table th, .bp3-dark table.bp3-html-table th{
    color:#f5f8fa; }
  .bp3-dark .bp3-running-text table td, .bp3-running-text .bp3-dark table td, .bp3-dark table.bp3-html-table td{
    color:#f5f8fa; }
  .bp3-dark .bp3-running-text table tbody tr:first-child th, .bp3-running-text .bp3-dark table tbody tr:first-child th, .bp3-dark table.bp3-html-table tbody tr:first-child th,
  .bp3-dark .bp3-running-text table tbody tr:first-child td,
  .bp3-running-text .bp3-dark table tbody tr:first-child td,
  .bp3-dark table.bp3-html-table tbody tr:first-child td{
    -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }

table.bp3-html-table.bp3-html-table-condensed th,
table.bp3-html-table.bp3-html-table-condensed td, table.bp3-html-table.bp3-small th,
table.bp3-html-table.bp3-small td{
  padding-top:6px;
  padding-bottom:6px; }

table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{
  background:rgba(191, 204, 214, 0.15); }

table.bp3-html-table.bp3-html-table-bordered th:not(:first-child){
  -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-html-table-bordered tbody tr td{
  -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }
  table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child){
    -webkit-box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{
  -webkit-box-shadow:none;
          box-shadow:none; }
  table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:not(:first-child){
    -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-interactive tbody tr:hover td{
  background-color:rgba(191, 204, 214, 0.3);
  cursor:pointer; }

table.bp3-html-table.bp3-interactive tbody tr:active td{
  background-color:rgba(191, 204, 214, 0.4); }

.bp3-dark table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{
  background:rgba(92, 112, 128, 0.15); }

.bp3-dark table.bp3-html-table.bp3-html-table-bordered th:not(:first-child){
  -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
          box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }

.bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td{
  -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
          box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }
  .bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child){
    -webkit-box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15); }

.bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{
  -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
          box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }
  .bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:first-child{
    -webkit-box-shadow:none;
            box-shadow:none; }

.bp3-dark table.bp3-html-table.bp3-interactive tbody tr:hover td{
  background-color:rgba(92, 112, 128, 0.3);
  cursor:pointer; }

.bp3-dark table.bp3-html-table.bp3-interactive tbody tr:active td{
  background-color:rgba(92, 112, 128, 0.4); }

.bp3-key-combo{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center; }
  .bp3-key-combo > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-key-combo > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-key-combo::before,
  .bp3-key-combo > *{
    margin-right:5px; }
  .bp3-key-combo:empty::before,
  .bp3-key-combo > :last-child{
    margin-right:0; }

.bp3-hotkey-dialog{
  top:40px;
  padding-bottom:0; }
  .bp3-hotkey-dialog .bp3-dialog-body{
    margin:0;
    padding:0; }
  .bp3-hotkey-dialog .bp3-hotkey-label{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1; }

.bp3-hotkey-column{
  margin:auto;
  max-height:80vh;
  overflow-y:auto;
  padding:30px; }
  .bp3-hotkey-column .bp3-heading{
    margin-bottom:20px; }
    .bp3-hotkey-column .bp3-heading:not(:first-child){
      margin-top:40px; }

.bp3-hotkey{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  margin-right:0;
  margin-left:0; }
  .bp3-hotkey:not(:last-child){
    margin-bottom:10px; }
.bp3-icon{
  display:inline-block;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  vertical-align:text-bottom; }
  .bp3-icon:not(:empty)::before{
    content:"" !important;
    content:unset !important; }
  .bp3-icon > svg{
    display:block; }
    .bp3-icon > svg:not([fill]){
      fill:currentColor; }

.bp3-icon.bp3-intent-primary, .bp3-icon-standard.bp3-intent-primary, .bp3-icon-large.bp3-intent-primary{
  color:#106ba3; }
  .bp3-dark .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-icon-large.bp3-intent-primary{
    color:#48aff0; }

.bp3-icon.bp3-intent-success, .bp3-icon-standard.bp3-intent-success, .bp3-icon-large.bp3-intent-success{
  color:#0d8050; }
  .bp3-dark .bp3-icon.bp3-intent-success, .bp3-dark .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-icon-large.bp3-intent-success{
    color:#3dcc91; }

.bp3-icon.bp3-intent-warning, .bp3-icon-standard.bp3-intent-warning, .bp3-icon-large.bp3-intent-warning{
  color:#bf7326; }
  .bp3-dark .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-icon-large.bp3-intent-warning{
    color:#ffb366; }

.bp3-icon.bp3-intent-danger, .bp3-icon-standard.bp3-intent-danger, .bp3-icon-large.bp3-intent-danger{
  color:#c23030; }
  .bp3-dark .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-icon-large.bp3-intent-danger{
    color:#ff7373; }

span.bp3-icon-standard{
  line-height:1;
  font-family:"Icons16", sans-serif;
  font-size:16px;
  font-weight:400;
  font-style:normal;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  display:inline-block; }

span.bp3-icon-large{
  line-height:1;
  font-family:"Icons20", sans-serif;
  font-size:20px;
  font-weight:400;
  font-style:normal;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  display:inline-block; }

span.bp3-icon:empty{
  line-height:1;
  font-family:"Icons20";
  font-size:inherit;
  font-weight:400;
  font-style:normal; }
  span.bp3-icon:empty::before{
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased; }

.bp3-icon-add::before{
  content:""; }

.bp3-icon-add-column-left::before{
  content:""; }

.bp3-icon-add-column-right::before{
  content:""; }

.bp3-icon-add-row-bottom::before{
  content:""; }

.bp3-icon-add-row-top::before{
  content:""; }

.bp3-icon-add-to-artifact::before{
  content:""; }

.bp3-icon-add-to-folder::before{
  content:""; }

.bp3-icon-airplane::before{
  content:""; }

.bp3-icon-align-center::before{
  content:""; }

.bp3-icon-align-justify::before{
  content:""; }

.bp3-icon-align-left::before{
  content:""; }

.bp3-icon-align-right::before{
  content:""; }

.bp3-icon-alignment-bottom::before{
  content:""; }

.bp3-icon-alignment-horizontal-center::before{
  content:""; }

.bp3-icon-alignment-left::before{
  content:""; }

.bp3-icon-alignment-right::before{
  content:""; }

.bp3-icon-alignment-top::before{
  content:""; }

.bp3-icon-alignment-vertical-center::before{
  content:""; }

.bp3-icon-annotation::before{
  content:""; }

.bp3-icon-application::before{
  content:""; }

.bp3-icon-applications::before{
  content:""; }

.bp3-icon-archive::before{
  content:""; }

.bp3-icon-arrow-bottom-left::before{
  content:"↙"; }

.bp3-icon-arrow-bottom-right::before{
  content:"↘"; }

.bp3-icon-arrow-down::before{
  content:"↓"; }

.bp3-icon-arrow-left::before{
  content:"←"; }

.bp3-icon-arrow-right::before{
  content:"→"; }

.bp3-icon-arrow-top-left::before{
  content:"↖"; }

.bp3-icon-arrow-top-right::before{
  content:"↗"; }

.bp3-icon-arrow-up::before{
  content:"↑"; }

.bp3-icon-arrows-horizontal::before{
  content:"↔"; }

.bp3-icon-arrows-vertical::before{
  content:"↕"; }

.bp3-icon-asterisk::before{
  content:"*"; }

.bp3-icon-automatic-updates::before{
  content:""; }

.bp3-icon-badge::before{
  content:""; }

.bp3-icon-ban-circle::before{
  content:""; }

.bp3-icon-bank-account::before{
  content:""; }

.bp3-icon-barcode::before{
  content:""; }

.bp3-icon-blank::before{
  content:""; }

.bp3-icon-blocked-person::before{
  content:""; }

.bp3-icon-bold::before{
  content:""; }

.bp3-icon-book::before{
  content:""; }

.bp3-icon-bookmark::before{
  content:""; }

.bp3-icon-box::before{
  content:""; }

.bp3-icon-briefcase::before{
  content:""; }

.bp3-icon-bring-data::before{
  content:""; }

.bp3-icon-build::before{
  content:""; }

.bp3-icon-calculator::before{
  content:""; }

.bp3-icon-calendar::before{
  content:""; }

.bp3-icon-camera::before{
  content:""; }

.bp3-icon-caret-down::before{
  content:"⌄"; }

.bp3-icon-caret-left::before{
  content:"〈"; }

.bp3-icon-caret-right::before{
  content:"〉"; }

.bp3-icon-caret-up::before{
  content:"⌃"; }

.bp3-icon-cell-tower::before{
  content:""; }

.bp3-icon-changes::before{
  content:""; }

.bp3-icon-chart::before{
  content:""; }

.bp3-icon-chat::before{
  content:""; }

.bp3-icon-chevron-backward::before{
  content:""; }

.bp3-icon-chevron-down::before{
  content:""; }

.bp3-icon-chevron-forward::before{
  content:""; }

.bp3-icon-chevron-left::before{
  content:""; }

.bp3-icon-chevron-right::before{
  content:""; }

.bp3-icon-chevron-up::before{
  content:""; }

.bp3-icon-circle::before{
  content:""; }

.bp3-icon-circle-arrow-down::before{
  content:""; }

.bp3-icon-circle-arrow-left::before{
  content:""; }

.bp3-icon-circle-arrow-right::before{
  content:""; }

.bp3-icon-circle-arrow-up::before{
  content:""; }

.bp3-icon-citation::before{
  content:""; }

.bp3-icon-clean::before{
  content:""; }

.bp3-icon-clipboard::before{
  content:""; }

.bp3-icon-cloud::before{
  content:"☁"; }

.bp3-icon-cloud-download::before{
  content:""; }

.bp3-icon-cloud-upload::before{
  content:""; }

.bp3-icon-code::before{
  content:""; }

.bp3-icon-code-block::before{
  content:""; }

.bp3-icon-cog::before{
  content:""; }

.bp3-icon-collapse-all::before{
  content:""; }

.bp3-icon-column-layout::before{
  content:""; }

.bp3-icon-comment::before{
  content:""; }

.bp3-icon-comparison::before{
  content:""; }

.bp3-icon-compass::before{
  content:""; }

.bp3-icon-compressed::before{
  content:""; }

.bp3-icon-confirm::before{
  content:""; }

.bp3-icon-console::before{
  content:""; }

.bp3-icon-contrast::before{
  content:""; }

.bp3-icon-control::before{
  content:""; }

.bp3-icon-credit-card::before{
  content:""; }

.bp3-icon-cross::before{
  content:"✗"; }

.bp3-icon-crown::before{
  content:""; }

.bp3-icon-cube::before{
  content:""; }

.bp3-icon-cube-add::before{
  content:""; }

.bp3-icon-cube-remove::before{
  content:""; }

.bp3-icon-curved-range-chart::before{
  content:""; }

.bp3-icon-cut::before{
  content:""; }

.bp3-icon-dashboard::before{
  content:""; }

.bp3-icon-data-lineage::before{
  content:""; }

.bp3-icon-database::before{
  content:""; }

.bp3-icon-delete::before{
  content:""; }

.bp3-icon-delta::before{
  content:"Δ"; }

.bp3-icon-derive-column::before{
  content:""; }

.bp3-icon-desktop::before{
  content:""; }

.bp3-icon-diagram-tree::before{
  content:""; }

.bp3-icon-direction-left::before{
  content:""; }

.bp3-icon-direction-right::before{
  content:""; }

.bp3-icon-disable::before{
  content:""; }

.bp3-icon-document::before{
  content:""; }

.bp3-icon-document-open::before{
  content:""; }

.bp3-icon-document-share::before{
  content:""; }

.bp3-icon-dollar::before{
  content:"$"; }

.bp3-icon-dot::before{
  content:"•"; }

.bp3-icon-double-caret-horizontal::before{
  content:""; }

.bp3-icon-double-caret-vertical::before{
  content:""; }

.bp3-icon-double-chevron-down::before{
  content:""; }

.bp3-icon-double-chevron-left::before{
  content:""; }

.bp3-icon-double-chevron-right::before{
  content:""; }

.bp3-icon-double-chevron-up::before{
  content:""; }

.bp3-icon-doughnut-chart::before{
  content:""; }

.bp3-icon-download::before{
  content:""; }

.bp3-icon-drag-handle-horizontal::before{
  content:""; }

.bp3-icon-drag-handle-vertical::before{
  content:""; }

.bp3-icon-draw::before{
  content:""; }

.bp3-icon-drive-time::before{
  content:""; }

.bp3-icon-duplicate::before{
  content:""; }

.bp3-icon-edit::before{
  content:"✎"; }

.bp3-icon-eject::before{
  content:"⏏"; }

.bp3-icon-endorsed::before{
  content:""; }

.bp3-icon-envelope::before{
  content:"✉"; }

.bp3-icon-equals::before{
  content:""; }

.bp3-icon-eraser::before{
  content:""; }

.bp3-icon-error::before{
  content:""; }

.bp3-icon-euro::before{
  content:"€"; }

.bp3-icon-exchange::before{
  content:""; }

.bp3-icon-exclude-row::before{
  content:""; }

.bp3-icon-expand-all::before{
  content:""; }

.bp3-icon-export::before{
  content:""; }

.bp3-icon-eye-off::before{
  content:""; }

.bp3-icon-eye-on::before{
  content:""; }

.bp3-icon-eye-open::before{
  content:""; }

.bp3-icon-fast-backward::before{
  content:""; }

.bp3-icon-fast-forward::before{
  content:""; }

.bp3-icon-feed::before{
  content:""; }

.bp3-icon-feed-subscribed::before{
  content:""; }

.bp3-icon-film::before{
  content:""; }

.bp3-icon-filter::before{
  content:""; }

.bp3-icon-filter-keep::before{
  content:""; }

.bp3-icon-filter-list::before{
  content:""; }

.bp3-icon-filter-open::before{
  content:""; }

.bp3-icon-filter-remove::before{
  content:""; }

.bp3-icon-flag::before{
  content:"⚑"; }

.bp3-icon-flame::before{
  content:""; }

.bp3-icon-flash::before{
  content:""; }

.bp3-icon-floppy-disk::before{
  content:""; }

.bp3-icon-flow-branch::before{
  content:""; }

.bp3-icon-flow-end::before{
  content:""; }

.bp3-icon-flow-linear::before{
  content:""; }

.bp3-icon-flow-review::before{
  content:""; }

.bp3-icon-flow-review-branch::before{
  content:""; }

.bp3-icon-flows::before{
  content:""; }

.bp3-icon-folder-close::before{
  content:""; }

.bp3-icon-folder-new::before{
  content:""; }

.bp3-icon-folder-open::before{
  content:""; }

.bp3-icon-folder-shared::before{
  content:""; }

.bp3-icon-folder-shared-open::before{
  content:""; }

.bp3-icon-follower::before{
  content:""; }

.bp3-icon-following::before{
  content:""; }

.bp3-icon-font::before{
  content:""; }

.bp3-icon-fork::before{
  content:""; }

.bp3-icon-form::before{
  content:""; }

.bp3-icon-full-circle::before{
  content:""; }

.bp3-icon-full-stacked-chart::before{
  content:""; }

.bp3-icon-fullscreen::before{
  content:""; }

.bp3-icon-function::before{
  content:""; }

.bp3-icon-gantt-chart::before{
  content:""; }

.bp3-icon-geolocation::before{
  content:""; }

.bp3-icon-geosearch::before{
  content:""; }

.bp3-icon-git-branch::before{
  content:""; }

.bp3-icon-git-commit::before{
  content:""; }

.bp3-icon-git-merge::before{
  content:""; }

.bp3-icon-git-new-branch::before{
  content:""; }

.bp3-icon-git-pull::before{
  content:""; }

.bp3-icon-git-push::before{
  content:""; }

.bp3-icon-git-repo::before{
  content:""; }

.bp3-icon-glass::before{
  content:""; }

.bp3-icon-globe::before{
  content:""; }

.bp3-icon-globe-network::before{
  content:""; }

.bp3-icon-graph::before{
  content:""; }

.bp3-icon-graph-remove::before{
  content:""; }

.bp3-icon-greater-than::before{
  content:""; }

.bp3-icon-greater-than-or-equal-to::before{
  content:""; }

.bp3-icon-grid::before{
  content:""; }

.bp3-icon-grid-view::before{
  content:""; }

.bp3-icon-group-objects::before{
  content:""; }

.bp3-icon-grouped-bar-chart::before{
  content:""; }

.bp3-icon-hand::before{
  content:""; }

.bp3-icon-hand-down::before{
  content:""; }

.bp3-icon-hand-left::before{
  content:""; }

.bp3-icon-hand-right::before{
  content:""; }

.bp3-icon-hand-up::before{
  content:""; }

.bp3-icon-header::before{
  content:""; }

.bp3-icon-header-one::before{
  content:""; }

.bp3-icon-header-two::before{
  content:""; }

.bp3-icon-headset::before{
  content:""; }

.bp3-icon-heart::before{
  content:"♥"; }

.bp3-icon-heart-broken::before{
  content:""; }

.bp3-icon-heat-grid::before{
  content:""; }

.bp3-icon-heatmap::before{
  content:""; }

.bp3-icon-help::before{
  content:"?"; }

.bp3-icon-helper-management::before{
  content:""; }

.bp3-icon-highlight::before{
  content:""; }

.bp3-icon-history::before{
  content:""; }

.bp3-icon-home::before{
  content:"⌂"; }

.bp3-icon-horizontal-bar-chart::before{
  content:""; }

.bp3-icon-horizontal-bar-chart-asc::before{
  content:""; }

.bp3-icon-horizontal-bar-chart-desc::before{
  content:""; }

.bp3-icon-horizontal-distribution::before{
  content:""; }

.bp3-icon-id-number::before{
  content:""; }

.bp3-icon-image-rotate-left::before{
  content:""; }

.bp3-icon-image-rotate-right::before{
  content:""; }

.bp3-icon-import::before{
  content:""; }

.bp3-icon-inbox::before{
  content:""; }

.bp3-icon-inbox-filtered::before{
  content:""; }

.bp3-icon-inbox-geo::before{
  content:""; }

.bp3-icon-inbox-search::before{
  content:""; }

.bp3-icon-inbox-update::before{
  content:""; }

.bp3-icon-info-sign::before{
  content:"ℹ"; }

.bp3-icon-inheritance::before{
  content:""; }

.bp3-icon-inner-join::before{
  content:""; }

.bp3-icon-insert::before{
  content:""; }

.bp3-icon-intersection::before{
  content:""; }

.bp3-icon-ip-address::before{
  content:""; }

.bp3-icon-issue::before{
  content:""; }

.bp3-icon-issue-closed::before{
  content:""; }

.bp3-icon-issue-new::before{
  content:""; }

.bp3-icon-italic::before{
  content:""; }

.bp3-icon-join-table::before{
  content:""; }

.bp3-icon-key::before{
  content:""; }

.bp3-icon-key-backspace::before{
  content:""; }

.bp3-icon-key-command::before{
  content:""; }

.bp3-icon-key-control::before{
  content:""; }

.bp3-icon-key-delete::before{
  content:""; }

.bp3-icon-key-enter::before{
  content:""; }

.bp3-icon-key-escape::before{
  content:""; }

.bp3-icon-key-option::before{
  content:""; }

.bp3-icon-key-shift::before{
  content:""; }

.bp3-icon-key-tab::before{
  content:""; }

.bp3-icon-known-vehicle::before{
  content:""; }

.bp3-icon-label::before{
  content:""; }

.bp3-icon-layer::before{
  content:""; }

.bp3-icon-layers::before{
  content:""; }

.bp3-icon-layout::before{
  content:""; }

.bp3-icon-layout-auto::before{
  content:""; }

.bp3-icon-layout-balloon::before{
  content:""; }

.bp3-icon-layout-circle::before{
  content:""; }

.bp3-icon-layout-grid::before{
  content:""; }

.bp3-icon-layout-group-by::before{
  content:""; }

.bp3-icon-layout-hierarchy::before{
  content:""; }

.bp3-icon-layout-linear::before{
  content:""; }

.bp3-icon-layout-skew-grid::before{
  content:""; }

.bp3-icon-layout-sorted-clusters::before{
  content:""; }

.bp3-icon-learning::before{
  content:""; }

.bp3-icon-left-join::before{
  content:""; }

.bp3-icon-less-than::before{
  content:""; }

.bp3-icon-less-than-or-equal-to::before{
  content:""; }

.bp3-icon-lifesaver::before{
  content:""; }

.bp3-icon-lightbulb::before{
  content:""; }

.bp3-icon-link::before{
  content:""; }

.bp3-icon-list::before{
  content:"☰"; }

.bp3-icon-list-columns::before{
  content:""; }

.bp3-icon-list-detail-view::before{
  content:""; }

.bp3-icon-locate::before{
  content:""; }

.bp3-icon-lock::before{
  content:""; }

.bp3-icon-log-in::before{
  content:""; }

.bp3-icon-log-out::before{
  content:""; }

.bp3-icon-manual::before{
  content:""; }

.bp3-icon-manually-entered-data::before{
  content:""; }

.bp3-icon-map::before{
  content:""; }

.bp3-icon-map-create::before{
  content:""; }

.bp3-icon-map-marker::before{
  content:""; }

.bp3-icon-maximize::before{
  content:""; }

.bp3-icon-media::before{
  content:""; }

.bp3-icon-menu::before{
  content:""; }

.bp3-icon-menu-closed::before{
  content:""; }

.bp3-icon-menu-open::before{
  content:""; }

.bp3-icon-merge-columns::before{
  content:""; }

.bp3-icon-merge-links::before{
  content:""; }

.bp3-icon-minimize::before{
  content:""; }

.bp3-icon-minus::before{
  content:"−"; }

.bp3-icon-mobile-phone::before{
  content:""; }

.bp3-icon-mobile-video::before{
  content:""; }

.bp3-icon-moon::before{
  content:""; }

.bp3-icon-more::before{
  content:""; }

.bp3-icon-mountain::before{
  content:""; }

.bp3-icon-move::before{
  content:""; }

.bp3-icon-mugshot::before{
  content:""; }

.bp3-icon-multi-select::before{
  content:""; }

.bp3-icon-music::before{
  content:""; }

.bp3-icon-new-drawing::before{
  content:""; }

.bp3-icon-new-grid-item::before{
  content:""; }

.bp3-icon-new-layer::before{
  content:""; }

.bp3-icon-new-layers::before{
  content:""; }

.bp3-icon-new-link::before{
  content:""; }

.bp3-icon-new-object::before{
  content:""; }

.bp3-icon-new-person::before{
  content:""; }

.bp3-icon-new-prescription::before{
  content:""; }

.bp3-icon-new-text-box::before{
  content:""; }

.bp3-icon-ninja::before{
  content:""; }

.bp3-icon-not-equal-to::before{
  content:""; }

.bp3-icon-notifications::before{
  content:""; }

.bp3-icon-notifications-updated::before{
  content:""; }

.bp3-icon-numbered-list::before{
  content:""; }

.bp3-icon-numerical::before{
  content:""; }

.bp3-icon-office::before{
  content:""; }

.bp3-icon-offline::before{
  content:""; }

.bp3-icon-oil-field::before{
  content:""; }

.bp3-icon-one-column::before{
  content:""; }

.bp3-icon-outdated::before{
  content:""; }

.bp3-icon-page-layout::before{
  content:""; }

.bp3-icon-panel-stats::before{
  content:""; }

.bp3-icon-panel-table::before{
  content:""; }

.bp3-icon-paperclip::before{
  content:""; }

.bp3-icon-paragraph::before{
  content:""; }

.bp3-icon-path::before{
  content:""; }

.bp3-icon-path-search::before{
  content:""; }

.bp3-icon-pause::before{
  content:""; }

.bp3-icon-people::before{
  content:""; }

.bp3-icon-percentage::before{
  content:""; }

.bp3-icon-person::before{
  content:""; }

.bp3-icon-phone::before{
  content:"☎"; }

.bp3-icon-pie-chart::before{
  content:""; }

.bp3-icon-pin::before{
  content:""; }

.bp3-icon-pivot::before{
  content:""; }

.bp3-icon-pivot-table::before{
  content:""; }

.bp3-icon-play::before{
  content:""; }

.bp3-icon-plus::before{
  content:"+"; }

.bp3-icon-polygon-filter::before{
  content:""; }

.bp3-icon-power::before{
  content:""; }

.bp3-icon-predictive-analysis::before{
  content:""; }

.bp3-icon-prescription::before{
  content:""; }

.bp3-icon-presentation::before{
  content:""; }

.bp3-icon-print::before{
  content:"⎙"; }

.bp3-icon-projects::before{
  content:""; }

.bp3-icon-properties::before{
  content:""; }

.bp3-icon-property::before{
  content:""; }

.bp3-icon-publish-function::before{
  content:""; }

.bp3-icon-pulse::before{
  content:""; }

.bp3-icon-random::before{
  content:""; }

.bp3-icon-record::before{
  content:""; }

.bp3-icon-redo::before{
  content:""; }

.bp3-icon-refresh::before{
  content:""; }

.bp3-icon-regression-chart::before{
  content:""; }

.bp3-icon-remove::before{
  content:""; }

.bp3-icon-remove-column::before{
  content:""; }

.bp3-icon-remove-column-left::before{
  content:""; }

.bp3-icon-remove-column-right::before{
  content:""; }

.bp3-icon-remove-row-bottom::before{
  content:""; }

.bp3-icon-remove-row-top::before{
  content:""; }

.bp3-icon-repeat::before{
  content:""; }

.bp3-icon-reset::before{
  content:""; }

.bp3-icon-resolve::before{
  content:""; }

.bp3-icon-rig::before{
  content:""; }

.bp3-icon-right-join::before{
  content:""; }

.bp3-icon-ring::before{
  content:""; }

.bp3-icon-rotate-document::before{
  content:""; }

.bp3-icon-rotate-page::before{
  content:""; }

.bp3-icon-satellite::before{
  content:""; }

.bp3-icon-saved::before{
  content:""; }

.bp3-icon-scatter-plot::before{
  content:""; }

.bp3-icon-search::before{
  content:""; }

.bp3-icon-search-around::before{
  content:""; }

.bp3-icon-search-template::before{
  content:""; }

.bp3-icon-search-text::before{
  content:""; }

.bp3-icon-segmented-control::before{
  content:""; }

.bp3-icon-select::before{
  content:""; }

.bp3-icon-selection::before{
  content:"⦿"; }

.bp3-icon-send-to::before{
  content:""; }

.bp3-icon-send-to-graph::before{
  content:""; }

.bp3-icon-send-to-map::before{
  content:""; }

.bp3-icon-series-add::before{
  content:""; }

.bp3-icon-series-configuration::before{
  content:""; }

.bp3-icon-series-derived::before{
  content:""; }

.bp3-icon-series-filtered::before{
  content:""; }

.bp3-icon-series-search::before{
  content:""; }

.bp3-icon-settings::before{
  content:""; }

.bp3-icon-share::before{
  content:""; }

.bp3-icon-shield::before{
  content:""; }

.bp3-icon-shop::before{
  content:""; }

.bp3-icon-shopping-cart::before{
  content:""; }

.bp3-icon-signal-search::before{
  content:""; }

.bp3-icon-sim-card::before{
  content:""; }

.bp3-icon-slash::before{
  content:""; }

.bp3-icon-small-cross::before{
  content:""; }

.bp3-icon-small-minus::before{
  content:""; }

.bp3-icon-small-plus::before{
  content:""; }

.bp3-icon-small-tick::before{
  content:""; }

.bp3-icon-snowflake::before{
  content:""; }

.bp3-icon-social-media::before{
  content:""; }

.bp3-icon-sort::before{
  content:""; }

.bp3-icon-sort-alphabetical::before{
  content:""; }

.bp3-icon-sort-alphabetical-desc::before{
  content:""; }

.bp3-icon-sort-asc::before{
  content:""; }

.bp3-icon-sort-desc::before{
  content:""; }

.bp3-icon-sort-numerical::before{
  content:""; }

.bp3-icon-sort-numerical-desc::before{
  content:""; }

.bp3-icon-split-columns::before{
  content:""; }

.bp3-icon-square::before{
  content:""; }

.bp3-icon-stacked-chart::before{
  content:""; }

.bp3-icon-star::before{
  content:"★"; }

.bp3-icon-star-empty::before{
  content:"☆"; }

.bp3-icon-step-backward::before{
  content:""; }

.bp3-icon-step-chart::before{
  content:""; }

.bp3-icon-step-forward::before{
  content:""; }

.bp3-icon-stop::before{
  content:""; }

.bp3-icon-stopwatch::before{
  content:""; }

.bp3-icon-strikethrough::before{
  content:""; }

.bp3-icon-style::before{
  content:""; }

.bp3-icon-swap-horizontal::before{
  content:""; }

.bp3-icon-swap-vertical::before{
  content:""; }

.bp3-icon-symbol-circle::before{
  content:""; }

.bp3-icon-symbol-cross::before{
  content:""; }

.bp3-icon-symbol-diamond::before{
  content:""; }

.bp3-icon-symbol-square::before{
  content:""; }

.bp3-icon-symbol-triangle-down::before{
  content:""; }

.bp3-icon-symbol-triangle-up::before{
  content:""; }

.bp3-icon-tag::before{
  content:""; }

.bp3-icon-take-action::before{
  content:""; }

.bp3-icon-taxi::before{
  content:""; }

.bp3-icon-text-highlight::before{
  content:""; }

.bp3-icon-th::before{
  content:""; }

.bp3-icon-th-derived::before{
  content:""; }

.bp3-icon-th-disconnect::before{
  content:""; }

.bp3-icon-th-filtered::before{
  content:""; }

.bp3-icon-th-list::before{
  content:""; }

.bp3-icon-thumbs-down::before{
  content:""; }

.bp3-icon-thumbs-up::before{
  content:""; }

.bp3-icon-tick::before{
  content:"✓"; }

.bp3-icon-tick-circle::before{
  content:""; }

.bp3-icon-time::before{
  content:"⏲"; }

.bp3-icon-timeline-area-chart::before{
  content:""; }

.bp3-icon-timeline-bar-chart::before{
  content:""; }

.bp3-icon-timeline-events::before{
  content:""; }

.bp3-icon-timeline-line-chart::before{
  content:""; }

.bp3-icon-tint::before{
  content:""; }

.bp3-icon-torch::before{
  content:""; }

.bp3-icon-tractor::before{
  content:""; }

.bp3-icon-train::before{
  content:""; }

.bp3-icon-translate::before{
  content:""; }

.bp3-icon-trash::before{
  content:""; }

.bp3-icon-tree::before{
  content:""; }

.bp3-icon-trending-down::before{
  content:""; }

.bp3-icon-trending-up::before{
  content:""; }

.bp3-icon-truck::before{
  content:""; }

.bp3-icon-two-columns::before{
  content:""; }

.bp3-icon-unarchive::before{
  content:""; }

.bp3-icon-underline::before{
  content:"⎁"; }

.bp3-icon-undo::before{
  content:"⎌"; }

.bp3-icon-ungroup-objects::before{
  content:""; }

.bp3-icon-unknown-vehicle::before{
  content:""; }

.bp3-icon-unlock::before{
  content:""; }

.bp3-icon-unpin::before{
  content:""; }

.bp3-icon-unresolve::before{
  content:""; }

.bp3-icon-updated::before{
  content:""; }

.bp3-icon-upload::before{
  content:""; }

.bp3-icon-user::before{
  content:""; }

.bp3-icon-variable::before{
  content:""; }

.bp3-icon-vertical-bar-chart-asc::before{
  content:""; }

.bp3-icon-vertical-bar-chart-desc::before{
  content:""; }

.bp3-icon-vertical-distribution::before{
  content:""; }

.bp3-icon-video::before{
  content:""; }

.bp3-icon-volume-down::before{
  content:""; }

.bp3-icon-volume-off::before{
  content:""; }

.bp3-icon-volume-up::before{
  content:""; }

.bp3-icon-walk::before{
  content:""; }

.bp3-icon-warning-sign::before{
  content:""; }

.bp3-icon-waterfall-chart::before{
  content:""; }

.bp3-icon-widget::before{
  content:""; }

.bp3-icon-widget-button::before{
  content:""; }

.bp3-icon-widget-footer::before{
  content:""; }

.bp3-icon-widget-header::before{
  content:""; }

.bp3-icon-wrench::before{
  content:""; }

.bp3-icon-zoom-in::before{
  content:""; }

.bp3-icon-zoom-out::before{
  content:""; }

.bp3-icon-zoom-to-fit::before{
  content:""; }
.bp3-submenu > .bp3-popover-wrapper{
  display:block; }

.bp3-submenu .bp3-popover-target{
  display:block; }

.bp3-submenu.bp3-popover{
  -webkit-box-shadow:none;
          box-shadow:none;
  padding:0 5px; }
  .bp3-submenu.bp3-popover > .bp3-popover-content{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-submenu.bp3-popover, .bp3-submenu.bp3-popover.bp3-dark{
    -webkit-box-shadow:none;
            box-shadow:none; }
    .bp3-dark .bp3-submenu.bp3-popover > .bp3-popover-content, .bp3-submenu.bp3-popover.bp3-dark > .bp3-popover-content{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
.bp3-menu{
  margin:0;
  border-radius:3px;
  background:#ffffff;
  min-width:180px;
  padding:5px;
  list-style:none;
  text-align:left;
  color:#182026; }

.bp3-menu-divider{
  display:block;
  margin:5px;
  border-top:1px solid rgba(16, 22, 26, 0.15); }
  .bp3-dark .bp3-menu-divider{
    border-top-color:rgba(255, 255, 255, 0.15); }

.bp3-menu-item{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  border-radius:2px;
  padding:5px 7px;
  text-decoration:none;
  line-height:20px;
  color:inherit;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-menu-item > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-menu-item > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-menu-item::before,
  .bp3-menu-item > *{
    margin-right:7px; }
  .bp3-menu-item:empty::before,
  .bp3-menu-item > :last-child{
    margin-right:0; }
  .bp3-menu-item > .bp3-fill{
    word-break:break-word; }
  .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
    background-color:rgba(167, 182, 194, 0.3);
    cursor:pointer;
    text-decoration:none; }
  .bp3-menu-item.bp3-disabled{
    background-color:inherit;
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-dark .bp3-menu-item{
    color:inherit; }
    .bp3-dark .bp3-menu-item:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
      background-color:rgba(138, 155, 168, 0.15);
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-disabled{
      background-color:inherit;
      color:rgba(167, 182, 194, 0.6); }
  .bp3-menu-item.bp3-intent-primary{
    color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-primary::before, .bp3-menu-item.bp3-intent-primary::after,
    .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{
      color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary.bp3-active{
      background-color:#137cbd; }
    .bp3-menu-item.bp3-intent-primary:active{
      background-color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary:active, .bp3-menu-item.bp3-intent-primary:active::before, .bp3-menu-item.bp3-intent-primary:active::after,
    .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-menu-item.bp3-intent-primary.bp3-active::after,
    .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-success{
    color:#0d8050; }
    .bp3-menu-item.bp3-intent-success .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-success::before, .bp3-menu-item.bp3-intent-success::after,
    .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{
      color:#0d8050; }
    .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success.bp3-active{
      background-color:#0f9960; }
    .bp3-menu-item.bp3-intent-success:active{
      background-color:#0d8050; }
    .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-menu-item.bp3-intent-success:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success:active, .bp3-menu-item.bp3-intent-success:active::before, .bp3-menu-item.bp3-intent-success:active::after,
    .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-menu-item.bp3-intent-success.bp3-active::after,
    .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-warning{
    color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-warning::before, .bp3-menu-item.bp3-intent-warning::after,
    .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{
      color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning.bp3-active{
      background-color:#d9822b; }
    .bp3-menu-item.bp3-intent-warning:active{
      background-color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning:active, .bp3-menu-item.bp3-intent-warning:active::before, .bp3-menu-item.bp3-intent-warning:active::after,
    .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-menu-item.bp3-intent-warning.bp3-active::after,
    .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-danger{
    color:#c23030; }
    .bp3-menu-item.bp3-intent-danger .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-danger::before, .bp3-menu-item.bp3-intent-danger::after,
    .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{
      color:#c23030; }
    .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger.bp3-active{
      background-color:#db3737; }
    .bp3-menu-item.bp3-intent-danger:active{
      background-color:#c23030; }
    .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger:active, .bp3-menu-item.bp3-intent-danger:active::before, .bp3-menu-item.bp3-intent-danger:active::after,
    .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-menu-item.bp3-intent-danger.bp3-active::after,
    .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item::before{
    line-height:1;
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-weight:400;
    font-style:normal;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    margin-right:7px; }
  .bp3-menu-item::before,
  .bp3-menu-item > .bp3-icon{
    margin-top:2px;
    color:#5c7080; }
  .bp3-menu-item .bp3-menu-item-label{
    color:#5c7080; }
  .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
    color:inherit; }
  .bp3-menu-item.bp3-active, .bp3-menu-item:active{
    background-color:rgba(115, 134, 148, 0.3); }
  .bp3-menu-item.bp3-disabled{
    outline:none !important;
    background-color:inherit !important;
    cursor:not-allowed !important;
    color:rgba(92, 112, 128, 0.6) !important; }
    .bp3-menu-item.bp3-disabled::before,
    .bp3-menu-item.bp3-disabled > .bp3-icon,
    .bp3-menu-item.bp3-disabled .bp3-menu-item-label{
      color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-large .bp3-menu-item{
    padding:9px 7px;
    line-height:22px;
    font-size:16px; }
    .bp3-large .bp3-menu-item .bp3-icon{
      margin-top:3px; }
    .bp3-large .bp3-menu-item::before{
      line-height:1;
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-weight:400;
      font-style:normal;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased;
      margin-top:1px;
      margin-right:10px; }

button.bp3-menu-item{
  border:none;
  background:none;
  width:100%;
  text-align:left; }
.bp3-menu-header{
  display:block;
  margin:5px;
  border-top:1px solid rgba(16, 22, 26, 0.15);
  cursor:default;
  padding-left:2px; }
  .bp3-dark .bp3-menu-header{
    border-top-color:rgba(255, 255, 255, 0.15); }
  .bp3-menu-header:first-of-type{
    border-top:none; }
  .bp3-menu-header > h6{
    color:#182026;
    font-weight:600;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    margin:0;
    padding:10px 7px 0 1px;
    line-height:17px; }
    .bp3-dark .bp3-menu-header > h6{
      color:#f5f8fa; }
  .bp3-menu-header:first-of-type > h6{
    padding-top:0; }
  .bp3-large .bp3-menu-header > h6{
    padding-top:15px;
    padding-bottom:5px;
    font-size:18px; }
  .bp3-large .bp3-menu-header:first-of-type > h6{
    padding-top:0; }

.bp3-dark .bp3-menu{
  background:#30404d;
  color:#f5f8fa; }

.bp3-dark .bp3-menu-item.bp3-intent-primary{
  color:#48aff0; }
  .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-icon{
    color:inherit; }
  .bp3-dark .bp3-menu-item.bp3-intent-primary::before, .bp3-dark .bp3-menu-item.bp3-intent-primary::after,
  .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{
    color:#48aff0; }
  .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active{
    background-color:#137cbd; }
  .bp3-dark .bp3-menu-item.bp3-intent-primary:active{
    background-color:#106ba3; }
  .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,
  .bp3-dark .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,
  .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label,
  .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary:active, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{
    color:#ffffff; }

.bp3-dark .bp3-menu-item.bp3-intent-success{
  color:#3dcc91; }
  .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-icon{
    color:inherit; }
  .bp3-dark .bp3-menu-item.bp3-intent-success::before, .bp3-dark .bp3-menu-item.bp3-intent-success::after,
  .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{
    color:#3dcc91; }
  .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active{
    background-color:#0f9960; }
  .bp3-dark .bp3-menu-item.bp3-intent-success:active{
    background-color:#0d8050; }
  .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,
  .bp3-dark .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,
  .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label,
  .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success:active, .bp3-dark .bp3-menu-item.bp3-intent-success:active::before, .bp3-dark .bp3-menu-item.bp3-intent-success:active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{
    color:#ffffff; }

.bp3-dark .bp3-menu-item.bp3-intent-warning{
  color:#ffb366; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-icon{
    color:inherit; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning::before, .bp3-dark .bp3-menu-item.bp3-intent-warning::after,
  .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{
    color:#ffb366; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active{
    background-color:#d9822b; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning:active{
    background-color:#bf7326; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,
  .bp3-dark .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,
  .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label,
  .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning:active, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{
    color:#ffffff; }

.bp3-dark .bp3-menu-item.bp3-intent-danger{
  color:#ff7373; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-icon{
    color:inherit; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger::before, .bp3-dark .bp3-menu-item.bp3-intent-danger::after,
  .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{
    color:#ff7373; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active{
    background-color:#db3737; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger:active{
    background-color:#c23030; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,
  .bp3-dark .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,
  .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label,
  .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger:active, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::after,
  .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{
    color:#ffffff; }

.bp3-dark .bp3-menu-item::before,
.bp3-dark .bp3-menu-item > .bp3-icon{
  color:#a7b6c2; }

.bp3-dark .bp3-menu-item .bp3-menu-item-label{
  color:#a7b6c2; }

.bp3-dark .bp3-menu-item.bp3-active, .bp3-dark .bp3-menu-item:active{
  background-color:rgba(138, 155, 168, 0.3); }

.bp3-dark .bp3-menu-item.bp3-disabled{
  color:rgba(167, 182, 194, 0.6) !important; }
  .bp3-dark .bp3-menu-item.bp3-disabled::before,
  .bp3-dark .bp3-menu-item.bp3-disabled > .bp3-icon,
  .bp3-dark .bp3-menu-item.bp3-disabled .bp3-menu-item-label{
    color:rgba(167, 182, 194, 0.6) !important; }

.bp3-dark .bp3-menu-divider,
.bp3-dark .bp3-menu-header{
  border-color:rgba(255, 255, 255, 0.15); }

.bp3-dark .bp3-menu-header > h6{
  color:#f5f8fa; }

.bp3-label .bp3-menu{
  margin-top:5px; }
.bp3-navbar{
  position:relative;
  z-index:10;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  background-color:#ffffff;
  width:100%;
  height:50px;
  padding:0 15px; }
  .bp3-navbar.bp3-dark,
  .bp3-dark .bp3-navbar{
    background-color:#394b59; }
  .bp3-navbar.bp3-dark{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-navbar{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-navbar.bp3-fixed-top{
    position:fixed;
    top:0;
    right:0;
    left:0; }

.bp3-navbar-heading{
  margin-right:15px;
  font-size:16px; }

.bp3-navbar-group{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  height:50px; }
  .bp3-navbar-group.bp3-align-left{
    float:left; }
  .bp3-navbar-group.bp3-align-right{
    float:right; }

.bp3-navbar-divider{
  margin:0 10px;
  border-left:1px solid rgba(16, 22, 26, 0.15);
  height:20px; }
  .bp3-dark .bp3-navbar-divider{
    border-left-color:rgba(255, 255, 255, 0.15); }
.bp3-non-ideal-state{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  width:100%;
  height:100%;
  text-align:center; }
  .bp3-non-ideal-state > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-non-ideal-state > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-non-ideal-state::before,
  .bp3-non-ideal-state > *{
    margin-bottom:20px; }
  .bp3-non-ideal-state:empty::before,
  .bp3-non-ideal-state > :last-child{
    margin-bottom:0; }
  .bp3-non-ideal-state > *{
    max-width:400px; }

.bp3-non-ideal-state-visual{
  color:rgba(92, 112, 128, 0.6);
  font-size:60px; }
  .bp3-dark .bp3-non-ideal-state-visual{
    color:rgba(167, 182, 194, 0.6); }

.bp3-overflow-list{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  min-width:0; }

.bp3-overflow-list-spacer{
  -ms-flex-negative:1;
      flex-shrink:1;
  width:1px; }

body.bp3-overlay-open{
  overflow:hidden; }

.bp3-overlay{
  position:static;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index:20; }
  .bp3-overlay:not(.bp3-overlay-open){
    pointer-events:none; }
  .bp3-overlay.bp3-overlay-container{
    position:fixed;
    overflow:hidden; }
    .bp3-overlay.bp3-overlay-container.bp3-overlay-inline{
      position:absolute; }
  .bp3-overlay.bp3-overlay-scroll-container{
    position:fixed;
    overflow:auto; }
    .bp3-overlay.bp3-overlay-scroll-container.bp3-overlay-inline{
      position:absolute; }
  .bp3-overlay.bp3-overlay-inline{
    display:inline;
    overflow:visible; }

.bp3-overlay-content{
  position:fixed;
  z-index:20; }
  .bp3-overlay-inline .bp3-overlay-content,
  .bp3-overlay-scroll-container .bp3-overlay-content{
    position:absolute; }

.bp3-overlay-backdrop{
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  opacity:1;
  z-index:20;
  background-color:rgba(16, 22, 26, 0.7);
  overflow:auto;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-overlay-backdrop.bp3-overlay-enter, .bp3-overlay-backdrop.bp3-overlay-appear{
    opacity:0; }
  .bp3-overlay-backdrop.bp3-overlay-enter-active, .bp3-overlay-backdrop.bp3-overlay-appear-active{
    opacity:1;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-overlay-backdrop.bp3-overlay-exit{
    opacity:1; }
  .bp3-overlay-backdrop.bp3-overlay-exit-active{
    opacity:0;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-overlay-backdrop:focus{
    outline:none; }
  .bp3-overlay-inline .bp3-overlay-backdrop{
    position:absolute; }
.bp3-panel-stack{
  position:relative;
  overflow:hidden; }

.bp3-panel-stack-header{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-negative:0;
      flex-shrink:0;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  z-index:1;
  -webkit-box-shadow:0 1px rgba(16, 22, 26, 0.15);
          box-shadow:0 1px rgba(16, 22, 26, 0.15);
  height:30px; }
  .bp3-dark .bp3-panel-stack-header{
    -webkit-box-shadow:0 1px rgba(255, 255, 255, 0.15);
            box-shadow:0 1px rgba(255, 255, 255, 0.15); }
  .bp3-panel-stack-header > span{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1;
    -webkit-box-align:stretch;
        -ms-flex-align:stretch;
            align-items:stretch; }
  .bp3-panel-stack-header .bp3-heading{
    margin:0 5px; }

.bp3-button.bp3-panel-stack-header-back{
  margin-left:5px;
  padding-left:0;
  white-space:nowrap; }
  .bp3-button.bp3-panel-stack-header-back .bp3-icon{
    margin:0 2px; }

.bp3-panel-stack-view{
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin-right:-1px;
  border-right:1px solid rgba(16, 22, 26, 0.15);
  background-color:#ffffff;
  overflow-y:auto; }
  .bp3-dark .bp3-panel-stack-view{
    background-color:#30404d; }

.bp3-panel-stack-push .bp3-panel-stack-enter, .bp3-panel-stack-push .bp3-panel-stack-appear{
  -webkit-transform:translateX(100%);
          transform:translateX(100%);
  opacity:0; }

.bp3-panel-stack-push .bp3-panel-stack-enter-active, .bp3-panel-stack-push .bp3-panel-stack-appear-active{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease;
  -webkit-transition-delay:0;
          transition-delay:0; }

.bp3-panel-stack-push .bp3-panel-stack-exit{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1; }

.bp3-panel-stack-push .bp3-panel-stack-exit-active{
  -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
  opacity:0;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease;
  -webkit-transition-delay:0;
          transition-delay:0; }

.bp3-panel-stack-pop .bp3-panel-stack-enter, .bp3-panel-stack-pop .bp3-panel-stack-appear{
  -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
  opacity:0; }

.bp3-panel-stack-pop .bp3-panel-stack-enter-active, .bp3-panel-stack-pop .bp3-panel-stack-appear-active{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease;
  -webkit-transition-delay:0;
          transition-delay:0; }

.bp3-panel-stack-pop .bp3-panel-stack-exit{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1; }

.bp3-panel-stack-pop .bp3-panel-stack-exit-active{
  -webkit-transform:translateX(100%);
          transform:translateX(100%);
  opacity:0;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease;
  -webkit-transition-delay:0;
          transition-delay:0; }
.bp3-popover{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  -webkit-transform:scale(1);
          transform:scale(1);
  display:inline-block;
  z-index:20;
  border-radius:3px; }
  .bp3-popover .bp3-popover-arrow{
    position:absolute;
    width:30px;
    height:30px; }
    .bp3-popover .bp3-popover-arrow::before{
      margin:5px;
      width:20px;
      height:20px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover{
    margin-top:-17px;
    margin-bottom:17px; }
    .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{
      bottom:-11px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(-90deg);
                transform:rotate(-90deg); }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover{
    margin-left:17px; }
    .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{
      left:-11px; }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(0);
                transform:rotate(0); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover{
    margin-top:17px; }
    .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{
      top:-11px; }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(90deg);
                transform:rotate(90deg); }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover{
    margin-right:17px;
    margin-left:-17px; }
    .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{
      right:-11px; }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(180deg);
                transform:rotate(180deg); }
  .bp3-tether-element-attached-middle > .bp3-popover > .bp3-popover-arrow{
    top:50%;
    -webkit-transform:translateY(-50%);
            transform:translateY(-50%); }
  .bp3-tether-element-attached-center > .bp3-popover > .bp3-popover-arrow{
    right:50%;
    -webkit-transform:translateX(50%);
            transform:translateX(50%); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{
    top:-0.3934px; }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{
    right:-0.3934px; }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{
    left:-0.3934px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{
    bottom:-0.3934px; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:top left;
            transform-origin:top left; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:top center;
            transform-origin:top center; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:top right;
            transform-origin:top right; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:center left;
            transform-origin:center left; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:center center;
            transform-origin:center center; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:center right;
            transform-origin:center right; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:bottom left;
            transform-origin:bottom left; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:bottom center;
            transform-origin:bottom center; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:bottom right;
            transform-origin:bottom right; }
  .bp3-popover .bp3-popover-content{
    background:#ffffff;
    color:inherit; }
  .bp3-popover .bp3-popover-arrow::before{
    -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);
            box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }
  .bp3-popover .bp3-popover-arrow-border{
    fill:#10161a;
    fill-opacity:0.1; }
  .bp3-popover .bp3-popover-arrow-fill{
    fill:#ffffff; }
  .bp3-popover-enter > .bp3-popover, .bp3-popover-appear > .bp3-popover{
    -webkit-transform:scale(0.3);
            transform:scale(0.3); }
  .bp3-popover-enter-active > .bp3-popover, .bp3-popover-appear-active > .bp3-popover{
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-popover-exit > .bp3-popover{
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-popover-exit-active > .bp3-popover{
    -webkit-transform:scale(0.3);
            transform:scale(0.3);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-popover .bp3-popover-content{
    position:relative;
    border-radius:3px; }
  .bp3-popover.bp3-popover-content-sizing .bp3-popover-content{
    max-width:350px;
    padding:20px; }
  .bp3-popover-target + .bp3-overlay .bp3-popover.bp3-popover-content-sizing{
    width:350px; }
  .bp3-popover.bp3-minimal{
    margin:0 !important; }
    .bp3-popover.bp3-minimal .bp3-popover-arrow{
      display:none; }
    .bp3-popover.bp3-minimal.bp3-popover{
      -webkit-transform:scale(1);
              transform:scale(1); }
      .bp3-popover-enter > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1); }
      .bp3-popover-enter-active > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear-active > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1);
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
        -webkit-transition-delay:0;
                transition-delay:0; }
      .bp3-popover-exit > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1); }
      .bp3-popover-exit-active > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1);
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
        -webkit-transition-delay:0;
                transition-delay:0; }
  .bp3-popover.bp3-dark,
  .bp3-dark .bp3-popover{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    .bp3-popover.bp3-dark .bp3-popover-content,
    .bp3-dark .bp3-popover .bp3-popover-content{
      background:#30404d;
      color:inherit; }
    .bp3-popover.bp3-dark .bp3-popover-arrow::before,
    .bp3-dark .bp3-popover .bp3-popover-arrow::before{
      -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);
              box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }
    .bp3-popover.bp3-dark .bp3-popover-arrow-border,
    .bp3-dark .bp3-popover .bp3-popover-arrow-border{
      fill:#10161a;
      fill-opacity:0.2; }
    .bp3-popover.bp3-dark .bp3-popover-arrow-fill,
    .bp3-dark .bp3-popover .bp3-popover-arrow-fill{
      fill:#30404d; }

.bp3-popover-arrow::before{
  display:block;
  position:absolute;
  -webkit-transform:rotate(45deg);
          transform:rotate(45deg);
  border-radius:2px;
  content:""; }

.bp3-tether-pinned .bp3-popover-arrow{
  display:none; }

.bp3-popover-backdrop{
  background:rgba(255, 255, 255, 0); }

.bp3-transition-container{
  opacity:1;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  z-index:20; }
  .bp3-transition-container.bp3-popover-enter, .bp3-transition-container.bp3-popover-appear{
    opacity:0; }
  .bp3-transition-container.bp3-popover-enter-active, .bp3-transition-container.bp3-popover-appear-active{
    opacity:1;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-transition-container.bp3-popover-exit{
    opacity:1; }
  .bp3-transition-container.bp3-popover-exit-active{
    opacity:0;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-transition-container:focus{
    outline:none; }
  .bp3-transition-container.bp3-popover-leave .bp3-popover-content{
    pointer-events:none; }
  .bp3-transition-container[data-x-out-of-boundaries]{
    display:none; }

span.bp3-popover-target{
  display:inline-block; }

.bp3-popover-wrapper.bp3-fill{
  width:100%; }

.bp3-portal{
  position:absolute;
  top:0;
  right:0;
  left:0; }
@-webkit-keyframes linear-progress-bar-stripes{
  from{
    background-position:0 0; }
  to{
    background-position:30px 0; } }
@keyframes linear-progress-bar-stripes{
  from{
    background-position:0 0; }
  to{
    background-position:30px 0; } }

.bp3-progress-bar{
  display:block;
  position:relative;
  border-radius:40px;
  background:rgba(92, 112, 128, 0.2);
  width:100%;
  height:8px;
  overflow:hidden; }
  .bp3-progress-bar .bp3-progress-meter{
    position:absolute;
    border-radius:40px;
    background:linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%);
    background-color:rgba(92, 112, 128, 0.8);
    background-size:30px 30px;
    width:100%;
    height:100%;
    -webkit-transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-progress-bar:not(.bp3-no-animation):not(.bp3-no-stripes) .bp3-progress-meter{
    animation:linear-progress-bar-stripes 300ms linear infinite reverse; }
  .bp3-progress-bar.bp3-no-stripes .bp3-progress-meter{
    background-image:none; }

.bp3-dark .bp3-progress-bar{
  background:rgba(16, 22, 26, 0.5); }
  .bp3-dark .bp3-progress-bar .bp3-progress-meter{
    background-color:#8a9ba8; }

.bp3-progress-bar.bp3-intent-primary .bp3-progress-meter{
  background-color:#137cbd; }

.bp3-progress-bar.bp3-intent-success .bp3-progress-meter{
  background-color:#0f9960; }

.bp3-progress-bar.bp3-intent-warning .bp3-progress-meter{
  background-color:#d9822b; }

.bp3-progress-bar.bp3-intent-danger .bp3-progress-meter{
  background-color:#db3737; }
@-webkit-keyframes skeleton-glow{
  from{
    border-color:rgba(206, 217, 224, 0.2);
    background:rgba(206, 217, 224, 0.2); }
  to{
    border-color:rgba(92, 112, 128, 0.2);
    background:rgba(92, 112, 128, 0.2); } }
@keyframes skeleton-glow{
  from{
    border-color:rgba(206, 217, 224, 0.2);
    background:rgba(206, 217, 224, 0.2); }
  to{
    border-color:rgba(92, 112, 128, 0.2);
    background:rgba(92, 112, 128, 0.2); } }
.bp3-skeleton{
  border-color:rgba(206, 217, 224, 0.2) !important;
  border-radius:2px;
  -webkit-box-shadow:none !important;
          box-shadow:none !important;
  background:rgba(206, 217, 224, 0.2);
  background-clip:padding-box !important;
  cursor:default;
  color:transparent !important;
  -webkit-animation:1000ms linear infinite alternate skeleton-glow;
          animation:1000ms linear infinite alternate skeleton-glow;
  pointer-events:none;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-skeleton::before, .bp3-skeleton::after,
  .bp3-skeleton *{
    visibility:hidden !important; }
.bp3-slider{
  width:100%;
  min-width:150px;
  height:40px;
  position:relative;
  outline:none;
  cursor:default;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-slider:hover{
    cursor:pointer; }
  .bp3-slider:active{
    cursor:-webkit-grabbing;
    cursor:grabbing; }
  .bp3-slider.bp3-disabled{
    opacity:0.5;
    cursor:not-allowed; }
  .bp3-slider.bp3-slider-unlabeled{
    height:16px; }

.bp3-slider-track,
.bp3-slider-progress{
  top:5px;
  right:0;
  left:0;
  height:6px;
  position:absolute; }

.bp3-slider-track{
  border-radius:3px;
  overflow:hidden; }

.bp3-slider-progress{
  background:rgba(92, 112, 128, 0.2); }
  .bp3-dark .bp3-slider-progress{
    background:rgba(16, 22, 26, 0.5); }
  .bp3-slider-progress.bp3-intent-primary{
    background-color:#137cbd; }
  .bp3-slider-progress.bp3-intent-success{
    background-color:#0f9960; }
  .bp3-slider-progress.bp3-intent-warning{
    background-color:#d9822b; }
  .bp3-slider-progress.bp3-intent-danger{
    background-color:#db3737; }

.bp3-slider-handle{
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  background-color:#f5f8fa;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  color:#182026;
  position:absolute;
  top:0;
  left:0;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
  cursor:pointer;
  width:16px;
  height:16px; }
  .bp3-slider-handle:hover{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-clip:padding-box;
    background-color:#ebf1f5; }
  .bp3-slider-handle:active, .bp3-slider-handle.bp3-active{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#d8e1e8;
    background-image:none; }
  .bp3-slider-handle:disabled, .bp3-slider-handle.bp3-disabled{
    outline:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    background-color:rgba(206, 217, 224, 0.5);
    background-image:none;
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
    .bp3-slider-handle:disabled.bp3-active, .bp3-slider-handle:disabled.bp3-active:hover, .bp3-slider-handle.bp3-disabled.bp3-active, .bp3-slider-handle.bp3-disabled.bp3-active:hover{
      background:rgba(206, 217, 224, 0.7); }
  .bp3-slider-handle:focus{
    z-index:1; }
  .bp3-slider-handle:hover{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    background-clip:padding-box;
    background-color:#ebf1f5;
    z-index:2;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
    cursor:-webkit-grab;
    cursor:grab; }
  .bp3-slider-handle.bp3-active{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    background-color:#d8e1e8;
    background-image:none;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);
    cursor:-webkit-grabbing;
    cursor:grabbing; }
  .bp3-disabled .bp3-slider-handle{
    -webkit-box-shadow:none;
            box-shadow:none;
    background:#bfccd6;
    pointer-events:none; }
  .bp3-dark .bp3-slider-handle{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    background-color:#394b59;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
    color:#f5f8fa; }
    .bp3-dark .bp3-slider-handle:hover, .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{
      color:#f5f8fa; }
    .bp3-dark .bp3-slider-handle:hover{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      background-color:#30404d; }
    .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
      background-color:#202b33;
      background-image:none; }
    .bp3-dark .bp3-slider-handle:disabled, .bp3-dark .bp3-slider-handle.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none;
      background-color:rgba(57, 75, 89, 0.5);
      background-image:none;
      color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-slider-handle:disabled.bp3-active, .bp3-dark .bp3-slider-handle.bp3-disabled.bp3-active{
        background:rgba(57, 75, 89, 0.7); }
    .bp3-dark .bp3-slider-handle .bp3-button-spinner .bp3-spinner-head{
      background:rgba(16, 22, 26, 0.5);
      stroke:#8a9ba8; }
    .bp3-dark .bp3-slider-handle, .bp3-dark .bp3-slider-handle:hover{
      background-color:#394b59; }
    .bp3-dark .bp3-slider-handle.bp3-active{
      background-color:#293742; }
  .bp3-dark .bp3-disabled .bp3-slider-handle{
    border-color:#5c7080;
    -webkit-box-shadow:none;
            box-shadow:none;
    background:#5c7080; }
  .bp3-slider-handle .bp3-slider-label{
    margin-left:8px;
    border-radius:3px;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
    background:#394b59;
    color:#f5f8fa; }
    .bp3-dark .bp3-slider-handle .bp3-slider-label{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
      background:#e1e8ed;
      color:#394b59; }
    .bp3-disabled .bp3-slider-handle .bp3-slider-label{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-slider-handle.bp3-start, .bp3-slider-handle.bp3-end{
    width:8px; }
  .bp3-slider-handle.bp3-start{
    border-top-right-radius:0;
    border-bottom-right-radius:0; }
  .bp3-slider-handle.bp3-end{
    margin-left:8px;
    border-top-left-radius:0;
    border-bottom-left-radius:0; }
    .bp3-slider-handle.bp3-end .bp3-slider-label{
      margin-left:0; }

.bp3-slider-label{
  -webkit-transform:translate(-50%, 20px);
          transform:translate(-50%, 20px);
  display:inline-block;
  position:absolute;
  padding:2px 5px;
  vertical-align:top;
  line-height:1;
  font-size:12px; }

.bp3-slider.bp3-vertical{
  width:40px;
  min-width:40px;
  height:150px; }
  .bp3-slider.bp3-vertical .bp3-slider-track,
  .bp3-slider.bp3-vertical .bp3-slider-progress{
    top:0;
    bottom:0;
    left:5px;
    width:6px;
    height:auto; }
  .bp3-slider.bp3-vertical .bp3-slider-progress{
    top:auto; }
  .bp3-slider.bp3-vertical .bp3-slider-label{
    -webkit-transform:translate(20px, 50%);
            transform:translate(20px, 50%); }
  .bp3-slider.bp3-vertical .bp3-slider-handle{
    top:auto; }
    .bp3-slider.bp3-vertical .bp3-slider-handle .bp3-slider-label{
      margin-top:-8px;
      margin-left:0; }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end, .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{
      margin-left:0;
      width:16px;
      height:8px; }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{
      border-top-left-radius:0;
      border-bottom-right-radius:3px; }
      .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start .bp3-slider-label{
        -webkit-transform:translate(20px);
                transform:translate(20px); }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end{
      margin-bottom:8px;
      border-top-left-radius:3px;
      border-bottom-left-radius:0;
      border-bottom-right-radius:0; }

@-webkit-keyframes pt-spinner-animation{
  from{
    -webkit-transform:rotate(0deg);
            transform:rotate(0deg); }
  to{
    -webkit-transform:rotate(360deg);
            transform:rotate(360deg); } }

@keyframes pt-spinner-animation{
  from{
    -webkit-transform:rotate(0deg);
            transform:rotate(0deg); }
  to{
    -webkit-transform:rotate(360deg);
            transform:rotate(360deg); } }

.bp3-spinner{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  overflow:visible;
  vertical-align:middle; }
  .bp3-spinner svg{
    display:block; }
  .bp3-spinner path{
    fill-opacity:0; }
  .bp3-spinner .bp3-spinner-head{
    -webkit-transform-origin:center;
            transform-origin:center;
    -webkit-transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    stroke:rgba(92, 112, 128, 0.8);
    stroke-linecap:round; }
  .bp3-spinner .bp3-spinner-track{
    stroke:rgba(92, 112, 128, 0.2); }

.bp3-spinner-animation{
  -webkit-animation:pt-spinner-animation 500ms linear infinite;
          animation:pt-spinner-animation 500ms linear infinite; }
  .bp3-no-spin > .bp3-spinner-animation{
    -webkit-animation:none;
            animation:none; }

.bp3-dark .bp3-spinner .bp3-spinner-head{
  stroke:#8a9ba8; }

.bp3-dark .bp3-spinner .bp3-spinner-track{
  stroke:rgba(16, 22, 26, 0.5); }

.bp3-spinner.bp3-intent-primary .bp3-spinner-head{
  stroke:#137cbd; }

.bp3-spinner.bp3-intent-success .bp3-spinner-head{
  stroke:#0f9960; }

.bp3-spinner.bp3-intent-warning .bp3-spinner-head{
  stroke:#d9822b; }

.bp3-spinner.bp3-intent-danger .bp3-spinner-head{
  stroke:#db3737; }
.bp3-tabs.bp3-vertical{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex; }
  .bp3-tabs.bp3-vertical > .bp3-tab-list{
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start; }
    .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab{
      border-radius:3px;
      width:100%;
      padding:0 10px; }
      .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab[aria-selected="true"]{
        -webkit-box-shadow:none;
                box-shadow:none;
        background-color:rgba(19, 124, 189, 0.2); }
    .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab-indicator-wrapper .bp3-tab-indicator{
      top:0;
      right:0;
      bottom:0;
      left:0;
      border-radius:3px;
      background-color:rgba(19, 124, 189, 0.2);
      height:auto; }
  .bp3-tabs.bp3-vertical > .bp3-tab-panel{
    margin-top:0;
    padding-left:20px; }

.bp3-tab-list{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  -webkit-box-align:end;
      -ms-flex-align:end;
          align-items:flex-end;
  position:relative;
  margin:0;
  border:none;
  padding:0;
  list-style:none; }
  .bp3-tab-list > *:not(:last-child){
    margin-right:20px; }

.bp3-tab{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  position:relative;
  cursor:pointer;
  max-width:100%;
  vertical-align:top;
  line-height:30px;
  color:#182026;
  font-size:14px; }
  .bp3-tab a{
    display:block;
    text-decoration:none;
    color:inherit; }
  .bp3-tab-indicator-wrapper ~ .bp3-tab{
    -webkit-box-shadow:none !important;
            box-shadow:none !important;
    background-color:transparent !important; }
  .bp3-tab[aria-disabled="true"]{
    cursor:not-allowed;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-tab[aria-selected="true"]{
    border-radius:0;
    -webkit-box-shadow:inset 0 -3px 0 #106ba3;
            box-shadow:inset 0 -3px 0 #106ba3; }
  .bp3-tab[aria-selected="true"], .bp3-tab:not([aria-disabled="true"]):hover{
    color:#106ba3; }
  .bp3-tab:focus{
    -moz-outline-radius:0; }
  .bp3-large > .bp3-tab{
    line-height:40px;
    font-size:16px; }

.bp3-tab-panel{
  margin-top:20px; }
  .bp3-tab-panel[aria-hidden="true"]{
    display:none; }

.bp3-tab-indicator-wrapper{
  position:absolute;
  top:0;
  left:0;
  -webkit-transform:translateX(0), translateY(0);
          transform:translateX(0), translateY(0);
  -webkit-transition:height, width, -webkit-transform;
  transition:height, width, -webkit-transform;
  transition:height, transform, width;
  transition:height, transform, width, -webkit-transform;
  -webkit-transition-duration:200ms;
          transition-duration:200ms;
  -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
          transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
  pointer-events:none; }
  .bp3-tab-indicator-wrapper .bp3-tab-indicator{
    position:absolute;
    right:0;
    bottom:0;
    left:0;
    background-color:#106ba3;
    height:3px; }
  .bp3-tab-indicator-wrapper.bp3-no-animation{
    -webkit-transition:none;
    transition:none; }

.bp3-dark .bp3-tab{
  color:#f5f8fa; }
  .bp3-dark .bp3-tab[aria-disabled="true"]{
    color:rgba(167, 182, 194, 0.6); }
  .bp3-dark .bp3-tab[aria-selected="true"]{
    -webkit-box-shadow:inset 0 -3px 0 #48aff0;
            box-shadow:inset 0 -3px 0 #48aff0; }
  .bp3-dark .bp3-tab[aria-selected="true"], .bp3-dark .bp3-tab:not([aria-disabled="true"]):hover{
    color:#48aff0; }

.bp3-dark .bp3-tab-indicator{
  background-color:#48aff0; }

.bp3-flex-expander{
  -webkit-box-flex:1;
      -ms-flex:1 1;
          flex:1 1; }
.bp3-tag{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  position:relative;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:none;
          box-shadow:none;
  background-color:#5c7080;
  min-width:20px;
  max-width:100%;
  min-height:20px;
  padding:2px 6px;
  line-height:16px;
  color:#f5f8fa;
  font-size:12px; }
  .bp3-tag.bp3-interactive{
    cursor:pointer; }
    .bp3-tag.bp3-interactive:hover{
      background-color:rgba(92, 112, 128, 0.85); }
    .bp3-tag.bp3-interactive.bp3-active, .bp3-tag.bp3-interactive:active{
      background-color:rgba(92, 112, 128, 0.7); }
  .bp3-tag > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-tag > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-tag::before,
  .bp3-tag > *{
    margin-right:4px; }
  .bp3-tag:empty::before,
  .bp3-tag > :last-child{
    margin-right:0; }
  .bp3-tag:focus{
    outline:rgba(19, 124, 189, 0.6) auto 2px;
    outline-offset:0;
    -moz-outline-radius:6px; }
  .bp3-tag.bp3-round{
    border-radius:30px;
    padding-right:8px;
    padding-left:8px; }
  .bp3-dark .bp3-tag{
    background-color:#bfccd6;
    color:#182026; }
    .bp3-dark .bp3-tag.bp3-interactive{
      cursor:pointer; }
      .bp3-dark .bp3-tag.bp3-interactive:hover{
        background-color:rgba(191, 204, 214, 0.85); }
      .bp3-dark .bp3-tag.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-interactive:active{
        background-color:rgba(191, 204, 214, 0.7); }
    .bp3-dark .bp3-tag > .bp3-icon, .bp3-dark .bp3-tag .bp3-icon-standard, .bp3-dark .bp3-tag .bp3-icon-large{
      fill:currentColor; }
  .bp3-tag > .bp3-icon, .bp3-tag .bp3-icon-standard, .bp3-tag .bp3-icon-large{
    fill:#ffffff; }
  .bp3-tag.bp3-large,
  .bp3-large .bp3-tag{
    min-width:30px;
    min-height:30px;
    padding:0 10px;
    line-height:20px;
    font-size:14px; }
    .bp3-tag.bp3-large::before,
    .bp3-tag.bp3-large > *,
    .bp3-large .bp3-tag::before,
    .bp3-large .bp3-tag > *{
      margin-right:7px; }
    .bp3-tag.bp3-large:empty::before,
    .bp3-tag.bp3-large > :last-child,
    .bp3-large .bp3-tag:empty::before,
    .bp3-large .bp3-tag > :last-child{
      margin-right:0; }
    .bp3-tag.bp3-large.bp3-round,
    .bp3-large .bp3-tag.bp3-round{
      padding-right:12px;
      padding-left:12px; }
  .bp3-tag.bp3-intent-primary{
    background:#137cbd;
    color:#ffffff; }
    .bp3-tag.bp3-intent-primary.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-primary.bp3-interactive:hover{
        background-color:rgba(19, 124, 189, 0.85); }
      .bp3-tag.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-primary.bp3-interactive:active{
        background-color:rgba(19, 124, 189, 0.7); }
  .bp3-tag.bp3-intent-success{
    background:#0f9960;
    color:#ffffff; }
    .bp3-tag.bp3-intent-success.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-success.bp3-interactive:hover{
        background-color:rgba(15, 153, 96, 0.85); }
      .bp3-tag.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-success.bp3-interactive:active{
        background-color:rgba(15, 153, 96, 0.7); }
  .bp3-tag.bp3-intent-warning{
    background:#d9822b;
    color:#ffffff; }
    .bp3-tag.bp3-intent-warning.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-warning.bp3-interactive:hover{
        background-color:rgba(217, 130, 43, 0.85); }
      .bp3-tag.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-warning.bp3-interactive:active{
        background-color:rgba(217, 130, 43, 0.7); }
  .bp3-tag.bp3-intent-danger{
    background:#db3737;
    color:#ffffff; }
    .bp3-tag.bp3-intent-danger.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-danger.bp3-interactive:hover{
        background-color:rgba(219, 55, 55, 0.85); }
      .bp3-tag.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-danger.bp3-interactive:active{
        background-color:rgba(219, 55, 55, 0.7); }
  .bp3-tag.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-tag.bp3-minimal > .bp3-icon, .bp3-tag.bp3-minimal .bp3-icon-standard, .bp3-tag.bp3-minimal .bp3-icon-large{
    fill:#5c7080; }
  .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]){
    background-color:rgba(138, 155, 168, 0.2);
    color:#182026; }
    .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover{
        background-color:rgba(92, 112, 128, 0.3); }
      .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active, .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active{
        background-color:rgba(92, 112, 128, 0.4); }
    .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]){
      color:#f5f8fa; }
      .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover{
          background-color:rgba(191, 204, 214, 0.3); }
        .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active{
          background-color:rgba(191, 204, 214, 0.4); }
      .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) > .bp3-icon, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-standard, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-large{
        fill:#a7b6c2; }
  .bp3-tag.bp3-minimal.bp3-intent-primary{
    background-color:rgba(19, 124, 189, 0.15);
    color:#106ba3; }
    .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{
        background-color:rgba(19, 124, 189, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{
        background-color:rgba(19, 124, 189, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-primary > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-large{
      fill:#137cbd; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary{
      background-color:rgba(19, 124, 189, 0.25);
      color:#48aff0; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{
          background-color:rgba(19, 124, 189, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{
          background-color:rgba(19, 124, 189, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-success{
    background-color:rgba(15, 153, 96, 0.15);
    color:#0d8050; }
    .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{
        background-color:rgba(15, 153, 96, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{
        background-color:rgba(15, 153, 96, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-success > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-large{
      fill:#0f9960; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success{
      background-color:rgba(15, 153, 96, 0.25);
      color:#3dcc91; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{
          background-color:rgba(15, 153, 96, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{
          background-color:rgba(15, 153, 96, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-warning{
    background-color:rgba(217, 130, 43, 0.15);
    color:#bf7326; }
    .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{
        background-color:rgba(217, 130, 43, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{
        background-color:rgba(217, 130, 43, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-warning > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-large{
      fill:#d9822b; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning{
      background-color:rgba(217, 130, 43, 0.25);
      color:#ffb366; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{
          background-color:rgba(217, 130, 43, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{
          background-color:rgba(217, 130, 43, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-danger{
    background-color:rgba(219, 55, 55, 0.15);
    color:#c23030; }
    .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{
        background-color:rgba(219, 55, 55, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{
        background-color:rgba(219, 55, 55, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-danger > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-large{
      fill:#db3737; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger{
      background-color:rgba(219, 55, 55, 0.25);
      color:#ff7373; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{
          background-color:rgba(219, 55, 55, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{
          background-color:rgba(219, 55, 55, 0.45); }

.bp3-tag-remove{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  opacity:0.5;
  margin-top:-2px;
  margin-right:-6px !important;
  margin-bottom:-2px;
  border:none;
  background:none;
  cursor:pointer;
  padding:2px;
  padding-left:0;
  color:inherit; }
  .bp3-tag-remove:hover{
    opacity:0.8;
    background:none;
    text-decoration:none; }
  .bp3-tag-remove:active{
    opacity:1; }
  .bp3-tag-remove:empty::before{
    line-height:1;
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-weight:400;
    font-style:normal;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    content:""; }
  .bp3-large .bp3-tag-remove{
    margin-right:-10px !important;
    padding:5px;
    padding-left:0; }
    .bp3-large .bp3-tag-remove:empty::before{
      line-height:1;
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-weight:400;
      font-style:normal; }
.bp3-tag-input{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  cursor:text;
  height:auto;
  min-height:30px;
  padding-right:0;
  padding-left:5px;
  line-height:inherit; }
  .bp3-tag-input > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-tag-input > .bp3-tag-input-values{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-tag-input .bp3-tag-input-icon{
    margin-top:7px;
    margin-right:7px;
    margin-left:2px;
    color:#5c7080; }
  .bp3-tag-input .bp3-tag-input-values{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    -ms-flex-item-align:stretch;
        align-self:stretch;
    margin-top:5px;
    margin-right:7px;
    min-width:0; }
    .bp3-tag-input .bp3-tag-input-values > *{
      -webkit-box-flex:0;
          -ms-flex-positive:0;
              flex-grow:0;
      -ms-flex-negative:0;
          flex-shrink:0; }
    .bp3-tag-input .bp3-tag-input-values > .bp3-fill{
      -webkit-box-flex:1;
          -ms-flex-positive:1;
              flex-grow:1;
      -ms-flex-negative:1;
          flex-shrink:1; }
    .bp3-tag-input .bp3-tag-input-values::before,
    .bp3-tag-input .bp3-tag-input-values > *{
      margin-right:5px; }
    .bp3-tag-input .bp3-tag-input-values:empty::before,
    .bp3-tag-input .bp3-tag-input-values > :last-child{
      margin-right:0; }
    .bp3-tag-input .bp3-tag-input-values:first-child .bp3-input-ghost:first-child{
      padding-left:5px; }
    .bp3-tag-input .bp3-tag-input-values > *{
      margin-bottom:5px; }
  .bp3-tag-input .bp3-tag{
    overflow-wrap:break-word; }
    .bp3-tag-input .bp3-tag.bp3-active{
      outline:rgba(19, 124, 189, 0.6) auto 2px;
      outline-offset:0;
      -moz-outline-radius:6px; }
  .bp3-tag-input .bp3-input-ghost{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    width:80px;
    line-height:20px; }
    .bp3-tag-input .bp3-input-ghost:disabled, .bp3-tag-input .bp3-input-ghost.bp3-disabled{
      cursor:not-allowed; }
  .bp3-tag-input .bp3-button,
  .bp3-tag-input .bp3-spinner{
    margin:3px;
    margin-left:0; }
  .bp3-tag-input .bp3-button{
    min-width:24px;
    min-height:24px;
    padding:0 7px; }
  .bp3-tag-input.bp3-large{
    height:auto;
    min-height:40px; }
    .bp3-tag-input.bp3-large::before,
    .bp3-tag-input.bp3-large > *{
      margin-right:10px; }
    .bp3-tag-input.bp3-large:empty::before,
    .bp3-tag-input.bp3-large > :last-child{
      margin-right:0; }
    .bp3-tag-input.bp3-large .bp3-tag-input-icon{
      margin-top:10px;
      margin-left:5px; }
    .bp3-tag-input.bp3-large .bp3-input-ghost{
      line-height:30px; }
    .bp3-tag-input.bp3-large .bp3-button{
      min-width:30px;
      min-height:30px;
      padding:5px 10px;
      margin:5px;
      margin-left:0; }
    .bp3-tag-input.bp3-large .bp3-spinner{
      margin:8px;
      margin-left:0; }
  .bp3-tag-input.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
    background-color:#ffffff; }
    .bp3-tag-input.bp3-active.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-success{
      -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-tag-input .bp3-tag-input-icon, .bp3-tag-input.bp3-dark .bp3-tag-input-icon{
    color:#a7b6c2; }
  .bp3-dark .bp3-tag-input .bp3-input-ghost, .bp3-tag-input.bp3-dark .bp3-input-ghost{
    color:#f5f8fa; }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-webkit-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-moz-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost:-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::placeholder{
      color:rgba(167, 182, 194, 0.6); }
  .bp3-dark .bp3-tag-input.bp3-active, .bp3-tag-input.bp3-dark.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    background-color:rgba(16, 22, 26, 0.3); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-primary, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-success, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-success{
      -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-warning, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-danger, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-input-ghost{
  border:none;
  -webkit-box-shadow:none;
          box-shadow:none;
  background:none;
  padding:0; }
  .bp3-input-ghost::-webkit-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input-ghost::-moz-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input-ghost:-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input-ghost::-ms-input-placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input-ghost::placeholder{
    opacity:1;
    color:rgba(92, 112, 128, 0.6); }
  .bp3-input-ghost:focus{
    outline:none !important; }
.bp3-toast{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  position:relative !important;
  margin:20px 0 0;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  background-color:#ffffff;
  min-width:300px;
  max-width:500px;
  pointer-events:all; }
  .bp3-toast.bp3-toast-enter, .bp3-toast.bp3-toast-appear{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px); }
  .bp3-toast.bp3-toast-enter-active, .bp3-toast.bp3-toast-appear-active{
    -webkit-transform:translateY(0);
            transform:translateY(0);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-toast.bp3-toast-enter ~ .bp3-toast, .bp3-toast.bp3-toast-appear ~ .bp3-toast{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px); }
  .bp3-toast.bp3-toast-enter-active ~ .bp3-toast, .bp3-toast.bp3-toast-appear-active ~ .bp3-toast{
    -webkit-transform:translateY(0);
            transform:translateY(0);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-toast.bp3-toast-exit{
    opacity:1;
    -webkit-filter:blur(0);
            filter:blur(0); }
  .bp3-toast.bp3-toast-exit-active{
    opacity:0;
    -webkit-filter:blur(10px);
            filter:blur(10px);
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:opacity, filter;
    transition-property:opacity, filter, -webkit-filter;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-toast.bp3-toast-exit ~ .bp3-toast{
    -webkit-transform:translateY(0);
            transform:translateY(0); }
  .bp3-toast.bp3-toast-exit-active ~ .bp3-toast{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:50ms;
            transition-delay:50ms; }
  .bp3-toast .bp3-button-group{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    padding:5px;
    padding-left:0; }
  .bp3-toast > .bp3-icon{
    margin:12px;
    margin-right:0;
    color:#5c7080; }
  .bp3-toast.bp3-dark,
  .bp3-dark .bp3-toast{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
    background-color:#394b59; }
    .bp3-toast.bp3-dark > .bp3-icon,
    .bp3-dark .bp3-toast > .bp3-icon{
      color:#a7b6c2; }
  .bp3-toast[class*="bp3-intent-"] a{
    color:rgba(255, 255, 255, 0.7); }
    .bp3-toast[class*="bp3-intent-"] a:hover{
      color:#ffffff; }
  .bp3-toast[class*="bp3-intent-"] > .bp3-icon{
    color:#ffffff; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button, .bp3-toast[class*="bp3-intent-"] .bp3-button::before,
  .bp3-toast[class*="bp3-intent-"] .bp3-button .bp3-icon, .bp3-toast[class*="bp3-intent-"] .bp3-button:active{
    color:rgba(255, 255, 255, 0.7) !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:focus{
    outline-color:rgba(255, 255, 255, 0.5); }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:hover{
    background-color:rgba(255, 255, 255, 0.15) !important;
    color:#ffffff !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:active{
    background-color:rgba(255, 255, 255, 0.3) !important;
    color:#ffffff !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button::after{
    background:rgba(255, 255, 255, 0.3) !important; }
  .bp3-toast.bp3-intent-primary{
    background-color:#137cbd;
    color:#ffffff; }
  .bp3-toast.bp3-intent-success{
    background-color:#0f9960;
    color:#ffffff; }
  .bp3-toast.bp3-intent-warning{
    background-color:#d9822b;
    color:#ffffff; }
  .bp3-toast.bp3-intent-danger{
    background-color:#db3737;
    color:#ffffff; }

.bp3-toast-message{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  padding:11px;
  word-break:break-word; }

.bp3-toast-container{
  display:-webkit-box !important;
  display:-ms-flexbox !important;
  display:flex !important;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  position:fixed;
  right:0;
  left:0;
  z-index:40;
  overflow:hidden;
  padding:0 20px 20px;
  pointer-events:none; }
  .bp3-toast-container.bp3-toast-container-top{
    top:0;
    bottom:auto; }
  .bp3-toast-container.bp3-toast-container-bottom{
    -webkit-box-orient:vertical;
    -webkit-box-direction:reverse;
        -ms-flex-direction:column-reverse;
            flex-direction:column-reverse;
    top:auto;
    bottom:0; }
  .bp3-toast-container.bp3-toast-container-left{
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start; }
  .bp3-toast-container.bp3-toast-container-right{
    -webkit-box-align:end;
        -ms-flex-align:end;
            align-items:flex-end; }

.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active),
.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active) ~ .bp3-toast, .bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active),
.bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active) ~ .bp3-toast,
.bp3-toast-container-bottom .bp3-toast.bp3-toast-leave-active ~ .bp3-toast{
  -webkit-transform:translateY(60px);
          transform:translateY(60px); }
.bp3-tooltip{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  -webkit-transform:scale(1);
          transform:scale(1); }
  .bp3-tooltip .bp3-popover-arrow{
    position:absolute;
    width:22px;
    height:22px; }
    .bp3-tooltip .bp3-popover-arrow::before{
      margin:4px;
      width:14px;
      height:14px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip{
    margin-top:-11px;
    margin-bottom:11px; }
    .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{
      bottom:-8px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(-90deg);
                transform:rotate(-90deg); }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip{
    margin-left:11px; }
    .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{
      left:-8px; }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(0);
                transform:rotate(0); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip{
    margin-top:11px; }
    .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{
      top:-8px; }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(90deg);
                transform:rotate(90deg); }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip{
    margin-right:11px;
    margin-left:-11px; }
    .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{
      right:-8px; }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(180deg);
                transform:rotate(180deg); }
  .bp3-tether-element-attached-middle > .bp3-tooltip > .bp3-popover-arrow{
    top:50%;
    -webkit-transform:translateY(-50%);
            transform:translateY(-50%); }
  .bp3-tether-element-attached-center > .bp3-tooltip > .bp3-popover-arrow{
    right:50%;
    -webkit-transform:translateX(50%);
            transform:translateX(50%); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{
    top:-0.22183px; }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{
    right:-0.22183px; }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{
    left:-0.22183px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{
    bottom:-0.22183px; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:top left;
            transform-origin:top left; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:top center;
            transform-origin:top center; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:top right;
            transform-origin:top right; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:center left;
            transform-origin:center left; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:center center;
            transform-origin:center center; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:center right;
            transform-origin:center right; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:bottom left;
            transform-origin:bottom left; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:bottom center;
            transform-origin:bottom center; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:bottom right;
            transform-origin:bottom right; }
  .bp3-tooltip .bp3-popover-content{
    background:#394b59;
    color:#f5f8fa; }
  .bp3-tooltip .bp3-popover-arrow::before{
    -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);
            box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }
  .bp3-tooltip .bp3-popover-arrow-border{
    fill:#10161a;
    fill-opacity:0.1; }
  .bp3-tooltip .bp3-popover-arrow-fill{
    fill:#394b59; }
  .bp3-popover-enter > .bp3-tooltip, .bp3-popover-appear > .bp3-tooltip{
    -webkit-transform:scale(0.8);
            transform:scale(0.8); }
  .bp3-popover-enter-active > .bp3-tooltip, .bp3-popover-appear-active > .bp3-tooltip{
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-popover-exit > .bp3-tooltip{
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-popover-exit-active > .bp3-tooltip{
    -webkit-transform:scale(0.8);
            transform:scale(0.8);
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-tooltip .bp3-popover-content{
    padding:10px 12px; }
  .bp3-tooltip.bp3-dark,
  .bp3-dark .bp3-tooltip{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    .bp3-tooltip.bp3-dark .bp3-popover-content,
    .bp3-dark .bp3-tooltip .bp3-popover-content{
      background:#e1e8ed;
      color:#394b59; }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow::before,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow::before{
      -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);
              box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow-border,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow-border{
      fill:#10161a;
      fill-opacity:0.2; }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow-fill,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow-fill{
      fill:#e1e8ed; }
  .bp3-tooltip.bp3-intent-primary .bp3-popover-content{
    background:#137cbd;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-primary .bp3-popover-arrow-fill{
    fill:#137cbd; }
  .bp3-tooltip.bp3-intent-success .bp3-popover-content{
    background:#0f9960;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-success .bp3-popover-arrow-fill{
    fill:#0f9960; }
  .bp3-tooltip.bp3-intent-warning .bp3-popover-content{
    background:#d9822b;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-warning .bp3-popover-arrow-fill{
    fill:#d9822b; }
  .bp3-tooltip.bp3-intent-danger .bp3-popover-content{
    background:#db3737;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-danger .bp3-popover-arrow-fill{
    fill:#db3737; }

.bp3-tooltip-indicator{
  border-bottom:dotted 1px;
  cursor:help; }
.bp3-tree .bp3-icon, .bp3-tree .bp3-icon-standard, .bp3-tree .bp3-icon-large{
  color:#5c7080; }
  .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-tree .bp3-icon-large.bp3-intent-primary{
    color:#137cbd; }
  .bp3-tree .bp3-icon.bp3-intent-success, .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-tree .bp3-icon-large.bp3-intent-success{
    color:#0f9960; }
  .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-tree .bp3-icon-large.bp3-intent-warning{
    color:#d9822b; }
  .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-tree .bp3-icon-large.bp3-intent-danger{
    color:#db3737; }

.bp3-tree-node-list{
  margin:0;
  padding-left:0;
  list-style:none; }

.bp3-tree-root{
  position:relative;
  background-color:transparent;
  cursor:default;
  padding-left:0; }

.bp3-tree-node-content-0{
  padding-left:0px; }

.bp3-tree-node-content-1{
  padding-left:23px; }

.bp3-tree-node-content-2{
  padding-left:46px; }

.bp3-tree-node-content-3{
  padding-left:69px; }

.bp3-tree-node-content-4{
  padding-left:92px; }

.bp3-tree-node-content-5{
  padding-left:115px; }

.bp3-tree-node-content-6{
  padding-left:138px; }

.bp3-tree-node-content-7{
  padding-left:161px; }

.bp3-tree-node-content-8{
  padding-left:184px; }

.bp3-tree-node-content-9{
  padding-left:207px; }

.bp3-tree-node-content-10{
  padding-left:230px; }

.bp3-tree-node-content-11{
  padding-left:253px; }

.bp3-tree-node-content-12{
  padding-left:276px; }

.bp3-tree-node-content-13{
  padding-left:299px; }

.bp3-tree-node-content-14{
  padding-left:322px; }

.bp3-tree-node-content-15{
  padding-left:345px; }

.bp3-tree-node-content-16{
  padding-left:368px; }

.bp3-tree-node-content-17{
  padding-left:391px; }

.bp3-tree-node-content-18{
  padding-left:414px; }

.bp3-tree-node-content-19{
  padding-left:437px; }

.bp3-tree-node-content-20{
  padding-left:460px; }

.bp3-tree-node-content{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  width:100%;
  height:30px;
  padding-right:5px; }
  .bp3-tree-node-content:hover{
    background-color:rgba(191, 204, 214, 0.4); }

.bp3-tree-node-caret,
.bp3-tree-node-caret-none{
  min-width:30px; }

.bp3-tree-node-caret{
  color:#5c7080;
  -webkit-transform:rotate(0deg);
          transform:rotate(0deg);
  cursor:pointer;
  padding:7px;
  -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-tree-node-caret:hover{
    color:#182026; }
  .bp3-dark .bp3-tree-node-caret{
    color:#a7b6c2; }
    .bp3-dark .bp3-tree-node-caret:hover{
      color:#f5f8fa; }
  .bp3-tree-node-caret.bp3-tree-node-caret-open{
    -webkit-transform:rotate(90deg);
            transform:rotate(90deg); }
  .bp3-tree-node-caret.bp3-icon-standard::before{
    content:""; }

.bp3-tree-node-icon{
  position:relative;
  margin-right:7px; }

.bp3-tree-node-label{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  position:relative;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-tree-node-label span{
    display:inline; }

.bp3-tree-node-secondary-label{
  padding:0 5px;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-tree-node-secondary-label .bp3-popover-wrapper,
  .bp3-tree-node-secondary-label .bp3-popover-target{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center; }

.bp3-tree-node.bp3-disabled .bp3-tree-node-content{
  background-color:inherit;
  cursor:not-allowed;
  color:rgba(92, 112, 128, 0.6); }

.bp3-tree-node.bp3-disabled .bp3-tree-node-caret,
.bp3-tree-node.bp3-disabled .bp3-tree-node-icon{
  cursor:not-allowed;
  color:rgba(92, 112, 128, 0.6); }

.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{
  background-color:#137cbd; }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content,
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-standard, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-large{
    color:#ffffff; }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret::before{
    color:rgba(255, 255, 255, 0.7); }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret:hover::before{
    color:#ffffff; }

.bp3-dark .bp3-tree-node-content:hover{
  background-color:rgba(92, 112, 128, 0.3); }

.bp3-dark .bp3-tree .bp3-icon, .bp3-dark .bp3-tree .bp3-icon-standard, .bp3-dark .bp3-tree .bp3-icon-large{
  color:#a7b6c2; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-primary{
    color:#137cbd; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-success{
    color:#0f9960; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-warning{
    color:#d9822b; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-danger{
    color:#db3737; }

.bp3-dark .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{
  background-color:#137cbd; }
/*!

Copyright 2017-present Palantir Technologies, Inc. All rights reserved.
Licensed under the Apache License, Version 2.0.

*/
.bp3-omnibar{
  -webkit-filter:blur(0);
          filter:blur(0);
  opacity:1;
  top:20vh;
  left:calc(50% - 250px);
  z-index:21;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  background-color:#ffffff;
  width:500px; }
  .bp3-omnibar.bp3-overlay-enter, .bp3-omnibar.bp3-overlay-appear{
    -webkit-filter:blur(20px);
            filter:blur(20px);
    opacity:0.2; }
  .bp3-omnibar.bp3-overlay-enter-active, .bp3-omnibar.bp3-overlay-appear-active{
    -webkit-filter:blur(0);
            filter:blur(0);
    opacity:1;
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:filter, opacity;
    transition-property:filter, opacity, -webkit-filter;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-omnibar.bp3-overlay-exit{
    -webkit-filter:blur(0);
            filter:blur(0);
    opacity:1; }
  .bp3-omnibar.bp3-overlay-exit-active{
    -webkit-filter:blur(20px);
            filter:blur(20px);
    opacity:0.2;
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:filter, opacity;
    transition-property:filter, opacity, -webkit-filter;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
    -webkit-transition-delay:0;
            transition-delay:0; }
  .bp3-omnibar .bp3-input{
    border-radius:0;
    background-color:transparent; }
    .bp3-omnibar .bp3-input, .bp3-omnibar .bp3-input:focus{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-omnibar .bp3-menu{
    border-radius:0;
    -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
    background-color:transparent;
    max-height:calc(60vh - 40px);
    overflow:auto; }
    .bp3-omnibar .bp3-menu:empty{
      display:none; }
  .bp3-dark .bp3-omnibar, .bp3-omnibar.bp3-dark{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
    background-color:#30404d; }

.bp3-omnibar-overlay .bp3-overlay-backdrop{
  background-color:rgba(16, 22, 26, 0.2); }

.bp3-select-popover .bp3-popover-content{
  padding:5px; }

.bp3-select-popover .bp3-input-group{
  margin-bottom:0; }

.bp3-select-popover .bp3-menu{
  max-width:400px;
  max-height:300px;
  overflow:auto;
  padding:0; }
  .bp3-select-popover .bp3-menu:not(:first-child){
    padding-top:5px; }

.bp3-multi-select{
  min-width:150px; }

.bp3-multi-select-popover .bp3-menu{
  max-width:400px;
  max-height:300px;
  overflow:auto; }

.bp3-select-popover .bp3-popover-content{
  padding:5px; }

.bp3-select-popover .bp3-input-group{
  margin-bottom:0; }

.bp3-select-popover .bp3-menu{
  max-width:400px;
  max-height:300px;
  overflow:auto;
  padding:0; }
  .bp3-select-popover .bp3-menu:not(:first-child){
    padding-top:5px; }
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensureUiComponents() in @jupyterlab/buildutils */

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

/* Icons urls */

:root {
  --jp-icon-add: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-bug: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDhoLTIuODFjLS40NS0uNzgtMS4wNy0xLjQ1LTEuODItMS45NkwxNyA0LjQxIDE1LjU5IDNsLTIuMTcgMi4xN0MxMi45NiA1LjA2IDEyLjQ5IDUgMTIgNWMtLjQ5IDAtLjk2LjA2LTEuNDEuMTdMOC40MSAzIDcgNC40MWwxLjYyIDEuNjNDNy44OCA2LjU1IDcuMjYgNy4yMiA2LjgxIDhINHYyaDIuMDljLS4wNS4zMy0uMDkuNjYtLjA5IDF2MUg0djJoMnYxYzAgLjM0LjA0LjY3LjA5IDFINHYyaDIuODFjMS4wNCAxLjc5IDIuOTcgMyA1LjE5IDNzNC4xNS0xLjIxIDUuMTktM0gyMHYtMmgtMi4wOWMuMDUtLjMzLjA5LS42Ni4wOS0xdi0xaDJ2LTJoLTJ2LTFjMC0uMzQtLjA0LS42Ny0uMDktMUgyMFY4em0tNiA4aC00di0yaDR2MnptMC00aC00di0yaDR2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-build: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE0LjkgMTcuNDVDMTYuMjUgMTcuNDUgMTcuMzUgMTYuMzUgMTcuMzUgMTVDMTcuMzUgMTMuNjUgMTYuMjUgMTIuNTUgMTQuOSAxMi41NUMxMy41NCAxMi41NSAxMi40NSAxMy42NSAxMi40NSAxNUMxMi40NSAxNi4zNSAxMy41NCAxNy40NSAxNC45IDE3LjQ1Wk0yMC4xIDE1LjY4TDIxLjU4IDE2Ljg0QzIxLjcxIDE2Ljk1IDIxLjc1IDE3LjEzIDIxLjY2IDE3LjI5TDIwLjI2IDE5LjcxQzIwLjE3IDE5Ljg2IDIwIDE5LjkyIDE5LjgzIDE5Ljg2TDE4LjA5IDE5LjE2QzE3LjczIDE5LjQ0IDE3LjMzIDE5LjY3IDE2LjkxIDE5Ljg1TDE2LjY0IDIxLjdDMTYuNjIgMjEuODcgMTYuNDcgMjIgMTYuMyAyMkgxMy41QzEzLjMyIDIyIDEzLjE4IDIxLjg3IDEzLjE1IDIxLjdMMTIuODkgMTkuODVDMTIuNDYgMTkuNjcgMTIuMDcgMTkuNDQgMTEuNzEgMTkuMTZMOS45NjAwMiAxOS44NkM5LjgxMDAyIDE5LjkyIDkuNjIwMDIgMTkuODYgOS41NDAwMiAxOS43MUw4LjE0MDAyIDE3LjI5QzguMDUwMDIgMTcuMTMgOC4wOTAwMiAxNi45NSA4LjIyMDAyIDE2Ljg0TDkuNzAwMDIgMTUuNjhMOS42NTAwMSAxNUw5LjcwMDAyIDE0LjMxTDguMjIwMDIgMTMuMTZDOC4wOTAwMiAxMy4wNSA4LjA1MDAyIDEyLjg2IDguMTQwMDIgMTIuNzFMOS41NDAwMiAxMC4yOUM5LjYyMDAyIDEwLjEzIDkuODEwMDIgMTAuMDcgOS45NjAwMiAxMC4xM0wxMS43MSAxMC44NEMxMi4wNyAxMC41NiAxMi40NiAxMC4zMiAxMi44OSAxMC4xNUwxMy4xNSA4LjI4OTk4QzEzLjE4IDguMTI5OTggMTMuMzIgNy45OTk5OCAxMy41IDcuOTk5OThIMTYuM0MxNi40NyA3Ljk5OTk4IDE2LjYyIDguMTI5OTggMTYuNjQgOC4yODk5OEwxNi45MSAxMC4xNUMxNy4zMyAxMC4zMiAxNy43MyAxMC41NiAxOC4wOSAxMC44NEwxOS44MyAxMC4xM0MyMCAxMC4wNyAyMC4xNyAxMC4xMyAyMC4yNiAxMC4yOUwyMS42NiAxMi43MUMyMS43NSAxMi44NiAyMS43MSAxMy4wNSAyMS41OCAxMy4xNkwyMC4xIDE0LjMxTDIwLjE1IDE1TDIwLjEgMTUuNjhaIi8+CiAgICA8cGF0aCBkPSJNNy4zMjk2NiA3LjQ0NDU0QzguMDgzMSA3LjAwOTU0IDguMzM5MzIgNi4wNTMzMiA3LjkwNDMyIDUuMjk5ODhDNy40NjkzMiA0LjU0NjQzIDYuNTA4MSA0LjI4MTU2IDUuNzU0NjYgNC43MTY1NkM1LjM5MTc2IDQuOTI2MDggNS4xMjY5NSA1LjI3MTE4IDUuMDE4NDkgNS42NzU5NEM0LjkxMDA0IDYuMDgwNzEgNC45NjY4MiA2LjUxMTk4IDUuMTc2MzQgNi44NzQ4OEM1LjYxMTM0IDcuNjI4MzIgNi41NzYyMiA3Ljg3OTU0IDcuMzI5NjYgNy40NDQ1NFpNOS42NTcxOCA0Ljc5NTkzTDEwLjg2NzIgNC45NTE3OUMxMC45NjI4IDQuOTc3NDEgMTEuMDQwMiA1LjA3MTMzIDExLjAzODIgNS4xODc5M0wxMS4wMzg4IDYuOTg4OTNDMTEuMDQ1NSA3LjEwMDU0IDEwLjk2MTYgNy4xOTUxOCAxMC44NTUgNy4yMTA1NEw5LjY2MDAxIDcuMzgwODNMOS4yMzkxNSA4LjEzMTg4TDkuNjY5NjEgOS4yNTc0NUM5LjcwNzI5IDkuMzYyNzEgOS42NjkzNCA5LjQ3Njk5IDkuNTc0MDggOS41MzE5OUw4LjAxNTIzIDEwLjQzMkM3LjkxMTMxIDEwLjQ5MiA3Ljc5MzM3IDEwLjQ2NzcgNy43MjEwNSAxMC4zODI0TDYuOTg3NDggOS40MzE4OEw2LjEwOTMxIDkuNDMwODNMNS4zNDcwNCAxMC4zOTA1QzUuMjg5MDkgMTAuNDcwMiA1LjE3MzgzIDEwLjQ5MDUgNS4wNzE4NyAxMC40MzM5TDMuNTEyNDUgOS41MzI5M0MzLjQxMDQ5IDkuNDc2MzMgMy4zNzY0NyA5LjM1NzQxIDMuNDEwNzUgOS4yNTY3OUwzLjg2MzQ3IDguMTQwOTNMMy42MTc0OSA3Ljc3NDg4TDMuNDIzNDcgNy4zNzg4M0wyLjIzMDc1IDcuMjEyOTdDMi4xMjY0NyA3LjE5MjM1IDIuMDQwNDkgNy4xMDM0MiAyLjA0MjQ1IDYuOTg2ODJMMi4wNDE4NyA1LjE4NTgyQzIuMDQzODMgNS4wNjkyMiAyLjExOTA5IDQuOTc5NTggMi4yMTcwNCA0Ljk2OTIyTDMuNDIwNjUgNC43OTM5M0wzLjg2NzQ5IDQuMDI3ODhMMy40MTEwNSAyLjkxNzMxQzMuMzczMzcgMi44MTIwNCAzLjQxMTMxIDIuNjk3NzYgMy41MTUyMyAyLjYzNzc2TDUuMDc0MDggMS43Mzc3NkM1LjE2OTM0IDEuNjgyNzYgNS4yODcyOSAxLjcwNzA0IDUuMzU5NjEgMS43OTIzMUw2LjExOTE1IDIuNzI3ODhMNi45ODAwMSAyLjczODkzTDcuNzI0OTYgMS43ODkyMkM3Ljc5MTU2IDEuNzA0NTggNy45MTU0OCAxLjY3OTIyIDguMDA4NzkgMS43NDA4Mkw5LjU2ODIxIDIuNjQxODJDOS42NzAxNyAyLjY5ODQyIDkuNzEyODUgMi44MTIzNCA5LjY4NzIzIDIuOTA3OTdMOS4yMTcxOCA0LjAzMzgzTDkuNDYzMTYgNC4zOTk4OEw5LjY1NzE4IDQuNzk1OTNaIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOS45LDEzLjYgMy42LDcuNCA0LjQsNi42IDkuOSwxMi4yIDE1LjQsNi43IDE2LjEsNy40ICIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNS45TDksOS43bDMuOC0zLjhsMS4yLDEuMmwtNC45LDVsLTQuOS01TDUuMiw1Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNy41TDksMTEuMmwzLjgtMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-left: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik0xMC44LDEyLjhMNy4xLDlsMy44LTMuOGwwLDcuNkgxMC44eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-right: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik03LjIsNS4yTDEwLjksOWwtMy44LDMuOFY1LjJINy4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-up-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTUuNCwxMy4zIDkuOSw3LjcgNC40LDEzLjIgMy42LDEyLjUgOS45LDYuMyAxNi4xLDEyLjYgIi8+Cgk8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-up: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik01LjIsMTAuNUw5LDYuOGwzLjgsMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-case-sensitive: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWFjY2VudDIiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTcuNiw4aDAuOWwzLjUsOGgtMS4xTDEwLDE0SDZsLTAuOSwySDRMNy42LDh6IE04LDkuMUw2LjQsMTNoMy4yTDgsOS4xeiIvPgogICAgPHBhdGggZD0iTTE2LjYsOS44Yy0wLjIsMC4xLTAuNCwwLjEtMC43LDAuMWMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjEtMC4xLTAuMi0wLjQtMC4yLTAuNyBjLTAuMywwLjMtMC42LDAuNS0wLjksMC43Yy0wLjMsMC4xLTAuNywwLjItMS4xLDAuMmMtMC4zLDAtMC41LDAtMC43LTAuMWMtMC4yLTAuMS0wLjQtMC4yLTAuNi0wLjNjLTAuMi0wLjEtMC4zLTAuMy0wLjQtMC41IGMtMC4xLTAuMi0wLjEtMC40LTAuMS0wLjdjMC0wLjMsMC4xLTAuNiwwLjItMC44YzAuMS0wLjIsMC4zLTAuNCwwLjQtMC41QzEyLDcsMTIuMiw2LjksMTIuNSw2LjhjMC4yLTAuMSwwLjUtMC4xLDAuNy0wLjIgYzAuMy0wLjEsMC41LTAuMSwwLjctMC4xYzAuMiwwLDAuNC0wLjEsMC42LTAuMWMwLjIsMCwwLjMtMC4xLDAuNC0wLjJjMC4xLTAuMSwwLjItMC4yLDAuMi0wLjRjMC0xLTEuMS0xLTEuMy0xIGMtMC40LDAtMS40LDAtMS40LDEuMmgtMC45YzAtMC40LDAuMS0wLjcsMC4yLTFjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjZjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNDMTMuMyw0LDEzLjYsNCwxMy45LDQgYzAuMywwLDAuNSwwLDAuOCwwLjFjMC4zLDAsMC41LDAuMSwwLjcsMC4yYzAuMiwwLjEsMC40LDAuMywwLjUsMC41QzE2LDUsMTYsNS4yLDE2LDUuNnYyLjljMCwwLjIsMCwwLjQsMCwwLjUgYzAsMC4xLDAuMSwwLjIsMC4zLDAuMmMwLjEsMCwwLjIsMCwwLjMsMFY5Ljh6IE0xNS4yLDYuOWMtMS4yLDAuNi0zLjEsMC4yLTMuMSwxLjRjMCwxLjQsMy4xLDEsMy4xLTAuNVY2Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-circle-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-circle: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-clear: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8bWFzayBpZD0iZG9udXRIb2xlIj4KICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBmaWxsPSJibGFjayIvPgogIDwvbWFzaz4KCiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxyZWN0IGhlaWdodD0iMTgiIHdpZHRoPSIyIiB4PSIxMSIgeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1LCAxMiwgMTIpIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgbWFzaz0idXJsKCNkb251dEhvbGUpIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-close: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1ub25lIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIGpwLWljb24zLWhvdmVyIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIi8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIGpwLWljb24tYWNjZW50Mi1ob3ZlciIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgogIDwvZz4KCiAgPGcgY2xhc3M9ImpwLWljb24tbm9uZSBqcC1pY29uLWJ1c3kiIGZpbGw9Im5vbmUiPgogICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-console: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwMCAyMDAiPgogIDxnIGNsYXNzPSJqcC1pY29uLWJyYW5kMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMjg4RDEiPgogICAgPHBhdGggZD0iTTIwIDE5LjhoMTYwdjE1OS45SDIweiIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNmZmYiPgogICAgPHBhdGggZD0iTTEwNSAxMjcuM2g0MHYxMi44aC00MHpNNTEuMSA3N0w3NCA5OS45bC0yMy4zIDIzLjMgMTAuNSAxMC41IDIzLjMtMjMuM0w5NSA5OS45IDg0LjUgODkuNCA2MS42IDY2LjV6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-copy: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTExLjksMUgzLjJDMi40LDEsMS43LDEuNywxLjcsMi41djEwLjJoMS41VjIuNWg4LjdWMXogTTE0LjEsMy45aC04Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTAuMmMwLDAuOCwwLjcsMS41LDEuNSwxLjVoOCBjMC44LDAsMS41LTAuNywxLjUtMS41VjUuNEMxNS41LDQuNiwxNC45LDMuOSwxNC4xLDMuOXogTTE0LjEsMTUuNWgtOFY1LjRoOFYxNS41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-cut: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkuNjQgNy42NGMuMjMtLjUuMzYtMS4wNS4zNi0xLjY0IDAtMi4yMS0xLjc5LTQtNC00UzIgMy43OSAyIDZzMS43OSA0IDQgNGMuNTkgMCAxLjE0LS4xMyAxLjY0LS4zNkwxMCAxMmwtMi4zNiAyLjM2QzcuMTQgMTQuMTMgNi41OSAxNCA2IDE0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRjMC0uNTktLjEzLTEuMTQtLjM2LTEuNjRMMTIgMTRsNyA3aDN2LTFMOS42NCA3LjY0ek02IDhjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTAgMTJjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTYtNy41Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpNMTkgM2wtNiA2IDIgMiA3LTdWM3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-download: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-edit: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-ellipses: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIyIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-extension: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-fast-forward: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTQgMThsOC41LTZMNCA2djEyem05LTEydjEybDguNS02TDEzIDZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-file-upload: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-file: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuMyA4LjJsLTUuNS01LjVjLS4zLS4zLS43LS41LTEuMi0uNUgzLjljLS44LjEtMS42LjktMS42IDEuOHYxNC4xYzAgLjkuNyAxLjYgMS42IDEuNmgxNC4yYy45IDAgMS42LS43IDEuNi0xLjZWOS40Yy4xLS41LS4xLS45LS40LTEuMnptLTUuOC0zLjNsMy40IDMuNmgtMy40VjQuOXptMy45IDEyLjdINC43Yy0uMSAwLS4yIDAtLjItLjJWNC43YzAtLjIuMS0uMy4yLS4zaDcuMnY0LjRzMCAuOC4zIDEuMWMuMy4zIDEuMS4zIDEuMS4zaDQuM3Y3LjJzLS4xLjItLjIuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-filter-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEwIDE4aDR2LTJoLTR2MnpNMyA2djJoMThWNkgzem0zIDdoMTJ2LTJINnYyeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-html5: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMDAiIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzbTUzLjUtNjloMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjgtMTYuMS0yNC44VjY5aC0yMi42bTg5LjItNjloMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2U0NGQyNiIgZD0iTTEwNy42IDQ3MWwtMzMtMzcwLjRoMzYyLjhsLTMzIDM3MC4yTDI1NS43IDUxMiIvPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNmMTY1MjkiIGQ9Ik0yNTYgNDgwLjVWMTMxaDE0OC4zTDM3NiA0NDciLz4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNlYmViZWIiIGQ9Ik0xNDIgMTc2LjNoMTE0djQ1LjRoLTY0LjJsNC4yIDQ2LjVoNjB2NDUuM0gxNTQuNG0yIDIyLjhIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNm0tNC4xIDQ2LjVIMjU1Ljh2NDUuNGg1NmwtNS4zIDU5LTUwLjcgMTMuNnY0Ny4ybDkzLTI1LjgiLz4KPC9zdmc+Cg==);
  --jp-icon-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1icmFuZDQganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNGRkYiIGQ9Ik0yLjIgMi4yaDE3LjV2MTcuNUgyLjJ6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzNGNTFCNSIgZD0iTTIuMiAyLjJ2MTcuNWgxNy41bC4xLTE3LjVIMi4yem0xMi4xIDIuMmMxLjIgMCAyLjIgMSAyLjIgMi4ycy0xIDIuMi0yLjIgMi4yLTIuMi0xLTIuMi0yLjIgMS0yLjIgMi4yLTIuMnpNNC40IDE3LjZsMy4zLTguOCAzLjMgNi42IDIuMi0zLjIgNC40IDUuNEg0LjR6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-inspector: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNSAxNEg0di00aDExdjR6bTAtNUg0VjloMTF2NHptNSA1aC00VjloNHY5eiIvPgo8L3N2Zz4K);
  --jp-icon-json: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNGOUE4MjUiPgogICAgPHBhdGggZD0iTTIwLjIgMTEuOGMtMS42IDAtMS43LjUtMS43IDEgMCAuNC4xLjkuMSAxLjMuMS41LjEuOS4xIDEuMyAwIDEuNy0xLjQgMi4zLTMuNSAyLjNoLS45di0xLjloLjVjMS4xIDAgMS40IDAgMS40LS44IDAtLjMgMC0uNi0uMS0xIDAtLjQtLjEtLjgtLjEtMS4yIDAtMS4zIDAtMS44IDEuMy0yLTEuMy0uMi0xLjMtLjctMS4zLTIgMC0uNC4xLS44LjEtMS4yLjEtLjQuMS0uNy4xLTEgMC0uOC0uNC0uNy0xLjQtLjhoLS41VjQuMWguOWMyLjIgMCAzLjUuNyAzLjUgMi4zIDAgLjQtLjEuOS0uMSAxLjMtLjEuNS0uMS45LS4xIDEuMyAwIC41LjIgMSAxLjcgMXYxLjh6TTEuOCAxMC4xYzEuNiAwIDEuNy0uNSAxLjctMSAwLS40LS4xLS45LS4xLTEuMy0uMS0uNS0uMS0uOS0uMS0xLjMgMC0xLjYgMS40LTIuMyAzLjUtMi4zaC45djEuOWgtLjVjLTEgMC0xLjQgMC0xLjQuOCAwIC4zIDAgLjYuMSAxIDAgLjIuMS42LjEgMSAwIDEuMyAwIDEuOC0xLjMgMkM2IDExLjIgNiAxMS43IDYgMTNjMCAuNC0uMS44LS4xIDEuMi0uMS4zLS4xLjctLjEgMSAwIC44LjMuOCAxLjQuOGguNXYxLjloLS45Yy0yLjEgMC0zLjUtLjYtMy41LTIuMyAwLS40LjEtLjkuMS0xLjMuMS0uNS4xLS45LjEtMS4zIDAtLjUtLjItMS0xLjctMXYtMS45eiIvPgogICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMy44IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY3g9IjExIiBjeT0iOC4yIiByPSIyLjEiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-jupyter-favicon: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE2NSIgdmlld0JveD0iMCAwIDE1MiAxNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3ODk0NywgMTEwLjU4MjkyNykiIGQ9Ik03NS45NDIyODQyLDI5LjU4MDQ1NjEgQzQzLjMwMjM5NDcsMjkuNTgwNDU2MSAxNC43OTY3ODMyLDE3LjY1MzQ2MzQgMCwwIEM1LjUxMDgzMjExLDE1Ljg0MDY4MjkgMTUuNzgxNTM4OSwyOS41NjY3NzMyIDI5LjM5MDQ5NDcsMzkuMjc4NDE3MSBDNDIuOTk5Nyw0OC45ODk4NTM3IDU5LjI3MzcsNTQuMjA2NzgwNSA3NS45NjA1Nzg5LDU0LjIwNjc4MDUgQzkyLjY0NzQ1NzksNTQuMjA2NzgwNSAxMDguOTIxNDU4LDQ4Ljk4OTg1MzcgMTIyLjUzMDY2MywzOS4yNzg0MTcxIEMxMzYuMTM5NDUzLDI5LjU2Njc3MzIgMTQ2LjQxMDI4NCwxNS44NDA2ODI5IDE1MS45MjExNTgsMCBDMTM3LjA4Nzg2OCwxNy42NTM0NjM0IDEwOC41ODI1ODksMjkuNTgwNDU2MSA3NS45NDIyODQyLDI5LjU4MDQ1NjEgTDc1Ljk0MjI4NDIsMjkuNTgwNDU2MSBaIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMzczNjgsIDAuNzA0ODc4KSIgZD0iTTc1Ljk3ODQ1NzksMjQuNjI2NDA3MyBDMTA4LjYxODc2MywyNC42MjY0MDczIDEzNy4xMjQ0NTgsMzYuNTUzNDQxNSAxNTEuOTIxMTU4LDU0LjIwNjc4MDUgQzE0Ni40MTAyODQsMzguMzY2MjIyIDEzNi4xMzk0NTMsMjQuNjQwMTMxNyAxMjIuNTMwNjYzLDE0LjkyODQ4NzggQzEwOC45MjE0NTgsNS4yMTY4NDM5IDkyLjY0NzQ1NzksMCA3NS45NjA1Nzg5LDAgQzU5LjI3MzcsMCA0Mi45OTk3LDUuMjE2ODQzOSAyOS4zOTA0OTQ3LDE0LjkyODQ4NzggQzE1Ljc4MTUzODksMjQuNjQwMTMxNyA1LjUxMDgzMjExLDM4LjM2NjIyMiAwLDU0LjIwNjc4MDUgQzE0LjgzMzA4MTYsMzYuNTg5OTI5MyA0My4zMzg1Njg0LDI0LjYyNjQwNzMgNzUuOTc4NDU3OSwyNC42MjY0MDczIEw3NS45Nzg0NTc5LDI0LjYyNjQwNzMgWiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-jupyter: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAzOSA1MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzOCAtMjI4MSkiPgogICAgPGcgY2xhc3M9ImpwLWljb24td2FybjAiIGZpbGw9IiNGMzc3MjYiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5Ljc0IDIzMTEuOTgpIiBkPSJNIDE4LjI2NDYgNy4xMzQxMUMgMTAuNDE0NSA3LjEzNDExIDMuNTU4NzIgNC4yNTc2IDAgMEMgMS4zMjUzOSAzLjgyMDQgMy43OTU1NiA3LjEzMDgxIDcuMDY4NiA5LjQ3MzAzQyAxMC4zNDE3IDExLjgxNTIgMTQuMjU1NyAxMy4wNzM0IDE4LjI2OSAxMy4wNzM0QyAyMi4yODIzIDEzLjA3MzQgMjYuMTk2MyAxMS44MTUyIDI5LjQ2OTQgOS40NzMwM0MgMzIuNzQyNCA3LjEzMDgxIDM1LjIxMjYgMy44MjA0IDM2LjUzOCAwQyAzMi45NzA1IDQuMjU3NiAyNi4xMTQ4IDcuMTM0MTEgMTguMjY0NiA3LjEzNDExWiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5LjczIDIyODUuNDgpIiBkPSJNIDE4LjI3MzMgNS45MzkzMUMgMjYuMTIzNSA1LjkzOTMxIDMyLjk3OTMgOC44MTU4MyAzNi41MzggMTMuMDczNEMgMzUuMjEyNiA5LjI1MzAzIDMyLjc0MjQgNS45NDI2MiAyOS40Njk0IDMuNjAwNEMgMjYuMTk2MyAxLjI1ODE4IDIyLjI4MjMgMCAxOC4yNjkgMEMgMTQuMjU1NyAwIDEwLjM0MTcgMS4yNTgxOCA3LjA2ODYgMy42MDA0QyAzLjc5NTU2IDUuOTQyNjIgMS4zMjUzOSA5LjI1MzAzIDAgMTMuMDczNEMgMy41Njc0NSA4LjgyNDYzIDEwLjQyMzIgNS45MzkzMSAxOC4yNzMzIDUuOTM5MzFaIi8+CiAgICA8L2c+CiAgICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjY5LjMgMjI4MS4zMSkiIGQ9Ik0gNS44OTM1MyAyLjg0NEMgNS45MTg4OSAzLjQzMTY1IDUuNzcwODUgNC4wMTM2NyA1LjQ2ODE1IDQuNTE2NDVDIDUuMTY1NDUgNS4wMTkyMiA0LjcyMTY4IDUuNDIwMTUgNC4xOTI5OSA1LjY2ODUxQyAzLjY2NDMgNS45MTY4OCAzLjA3NDQ0IDYuMDAxNTEgMi40OTgwNSA1LjkxMTcxQyAxLjkyMTY2IDUuODIxOSAxLjM4NDYzIDUuNTYxNyAwLjk1NDg5OCA1LjE2NDAxQyAwLjUyNTE3IDQuNzY2MzMgMC4yMjIwNTYgNC4yNDkwMyAwLjA4MzkwMzcgMy42Nzc1N0MgLTAuMDU0MjQ4MyAzLjEwNjExIC0wLjAyMTIzIDIuNTA2MTcgMC4xNzg3ODEgMS45NTM2NEMgMC4zNzg3OTMgMS40MDExIDAuNzM2ODA5IDAuOTIwODE3IDEuMjA3NTQgMC41NzM1MzhDIDEuNjc4MjYgMC4yMjYyNTkgMi4yNDA1NSAwLjAyNzU5MTkgMi44MjMyNiAwLjAwMjY3MjI5QyAzLjYwMzg5IC0wLjAzMDcxMTUgNC4zNjU3MyAwLjI0OTc4OSA0Ljk0MTQyIDAuNzgyNTUxQyA1LjUxNzExIDEuMzE1MzEgNS44NTk1NiAyLjA1Njc2IDUuODkzNTMgMi44NDRaIi8+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MzkuOCAyMzIzLjgxKSIgZD0iTSA3LjQyNzg5IDMuNTgzMzhDIDcuNDYwMDggNC4zMjQzIDcuMjczNTUgNS4wNTgxOSA2Ljg5MTkzIDUuNjkyMTNDIDYuNTEwMzEgNi4zMjYwNyA1Ljk1MDc1IDYuODMxNTYgNS4yODQxMSA3LjE0NDZDIDQuNjE3NDcgNy40NTc2MyAzLjg3MzcxIDcuNTY0MTQgMy4xNDcwMiA3LjQ1MDYzQyAyLjQyMDMyIDcuMzM3MTIgMS43NDMzNiA3LjAwODcgMS4yMDE4NCA2LjUwNjk1QyAwLjY2MDMyOCA2LjAwNTIgMC4yNzg2MSA1LjM1MjY4IDAuMTA1MDE3IDQuNjMyMDJDIC0wLjA2ODU3NTcgMy45MTEzNSAtMC4wMjYyMzYxIDMuMTU0OTQgMC4yMjY2NzUgMi40NTg1NkMgMC40Nzk1ODcgMS43NjIxNyAwLjkzMTY5NyAxLjE1NzEzIDEuNTI1NzYgMC43MjAwMzNDIDIuMTE5ODMgMC4yODI5MzUgMi44MjkxNCAwLjAzMzQzOTUgMy41NjM4OSAwLjAwMzEzMzQ0QyA0LjU0NjY3IC0wLjAzNzQwMzMgNS41MDUyOSAwLjMxNjcwNiA2LjIyOTYxIDAuOTg3ODM1QyA2Ljk1MzkzIDEuNjU4OTYgNy4zODQ4NCAyLjU5MjM1IDcuNDI3ODkgMy41ODMzOEwgNy40Mjc4OSAzLjU4MzM4WiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM4LjM2IDIyODYuMDYpIiBkPSJNIDIuMjc0NzEgNC4zOTYyOUMgMS44NDM2MyA0LjQxNTA4IDEuNDE2NzEgNC4zMDQ0NSAxLjA0Nzk5IDQuMDc4NDNDIDAuNjc5MjY4IDMuODUyNCAwLjM4NTMyOCAzLjUyMTE0IDAuMjAzMzcxIDMuMTI2NTZDIDAuMDIxNDEzNiAyLjczMTk4IC0wLjA0MDM3OTggMi4yOTE4MyAwLjAyNTgxMTYgMS44NjE4MUMgMC4wOTIwMDMxIDEuNDMxOCAwLjI4MzIwNCAxLjAzMTI2IDAuNTc1MjEzIDAuNzEwODgzQyAwLjg2NzIyMiAwLjM5MDUxIDEuMjQ2OTEgMC4xNjQ3MDggMS42NjYyMiAwLjA2MjA1OTJDIDIuMDg1NTMgLTAuMDQwNTg5NyAyLjUyNTYxIC0wLjAxNTQ3MTQgMi45MzA3NiAwLjEzNDIzNUMgMy4zMzU5MSAwLjI4Mzk0MSAzLjY4NzkyIDAuNTUxNTA1IDMuOTQyMjIgMC45MDMwNkMgNC4xOTY1MiAxLjI1NDYyIDQuMzQxNjkgMS42NzQzNiA0LjM1OTM1IDIuMTA5MTZDIDQuMzgyOTkgMi42OTEwNyA0LjE3Njc4IDMuMjU4NjkgMy43ODU5NyAzLjY4NzQ2QyAzLjM5NTE2IDQuMTE2MjQgMi44NTE2NiA0LjM3MTE2IDIuMjc0NzEgNC4zOTYyOUwgMi4yNzQ3MSA0LjM5NjI5WiIvPgogICAgPC9nPgogIDwvZz4+Cjwvc3ZnPgo=);
  --jp-icon-jupyterlab-wordmark: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIHZpZXdCb3g9IjAgMCAxODYwLjggNDc1Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0RTRFNEUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4MC4xMzY0MDEsIDY0LjI3MTQ5MykiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDU4Ljg3NTU2NikiPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4NzYwMywgMC4xNDAyOTQpIj4KICAgICAgICA8cGF0aCBkPSJNLTQyNi45LDE2OS44YzAsNDguNy0zLjcsNjQuNy0xMy42LDc2LjRjLTEwLjgsMTAtMjUsMTUuNS0zOS43LDE1LjVsMy43LDI5IGMyMi44LDAuMyw0NC44LTcuOSw2MS45LTIzLjFjMTcuOC0xOC41LDI0LTQ0LjEsMjQtODMuM1YwSC00Mjd2MTcwLjFMLTQyNi45LDE2OS44TC00MjYuOSwxNjkuOHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU1LjA0NTI5NiwgNTYuODM3MTA0KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTYyNDUzLCAxLjc5OTg0MikiPgogICAgICAgIDxwYXRoIGQ9Ik0tMzEyLDE0OGMwLDIxLDAsMzkuNSwxLjcsNTUuNGgtMzEuOGwtMi4xLTMzLjNoLTAuOGMtNi43LDExLjYtMTYuNCwyMS4zLTI4LDI3LjkgYy0xMS42LDYuNi0yNC44LDEwLTM4LjIsOS44Yy0zMS40LDAtNjktMTcuNy02OS04OVYwaDM2LjR2MTEyLjdjMCwzOC43LDExLjYsNjQuNyw0NC42LDY0LjdjMTAuMy0wLjIsMjAuNC0zLjUsMjguOS05LjQgYzguNS01LjksMTUuMS0xNC4zLDE4LjktMjMuOWMyLjItNi4xLDMuMy0xMi41LDMuMy0xOC45VjAuMmgzNi40VjE0OEgtMzEyTC0zMTIsMTQ4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTAuMDEzMzIyLCA1My40Nzk2MzgpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS43MDY0NTgsIDAuMjMxNDI1KSI+CiAgICAgICAgPHBhdGggZD0iTS00NzguNiw3MS40YzAtMjYtMC44LTQ3LTEuNy02Ni43aDMyLjdsMS43LDM0LjhoMC44YzcuMS0xMi41LDE3LjUtMjIuOCwzMC4xLTI5LjcgYzEyLjUtNywyNi43LTEwLjMsNDEtOS44YzQ4LjMsMCw4NC43LDQxLjcsODQuNywxMDMuM2MwLDczLjEtNDMuNywxMDkuMi05MSwxMDkuMmMtMTIuMSwwLjUtMjQuMi0yLjItMzUtNy44IGMtMTAuOC01LjYtMTkuOS0xMy45LTI2LjYtMjQuMmgtMC44VjI5MWgtMzZ2LTIyMEwtNDc4LjYsNzEuNEwtNDc4LjYsNzEuNHogTS00NDIuNiwxMjUuNmMwLjEsNS4xLDAuNiwxMC4xLDEuNywxNS4xIGMzLDEyLjMsOS45LDIzLjMsMTkuOCwzMS4xYzkuOSw3LjgsMjIuMSwxMi4xLDM0LjcsMTIuMWMzOC41LDAsNjAuNy0zMS45LDYwLjctNzguNWMwLTQwLjctMjEuMS03NS42LTU5LjUtNzUuNiBjLTEyLjksMC40LTI1LjMsNS4xLTM1LjMsMTMuNGMtOS45LDguMy0xNi45LDE5LjctMTkuNiwzMi40Yy0xLjUsNC45LTIuMywxMC0yLjUsMTUuMVYxMjUuNkwtNDQyLjYsMTI1LjZMLTQ0Mi42LDEyNS42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDYuNzQwNzI2LCA1Ni44MzcxMDQpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43NTEyMjYsIDEuOTg5Mjk5KSI+CiAgICAgICAgPHBhdGggZD0iTS00NDAuOCwwbDQzLjcsMTIwLjFjNC41LDEzLjQsOS41LDI5LjQsMTIuOCw0MS43aDAuOGMzLjctMTIuMiw3LjktMjcuNywxMi44LTQyLjQgbDM5LjctMTE5LjJoMzguNUwtMzQ2LjksMTQ1Yy0yNiw2OS43LTQzLjcsMTA1LjQtNjguNiwxMjcuMmMtMTIuNSwxMS43LTI3LjksMjAtNDQuNiwyMy45bC05LjEtMzEuMSBjMTEuNy0zLjksMjIuNS0xMC4xLDMxLjgtMTguMWMxMy4yLTExLjEsMjMuNy0yNS4yLDMwLjYtNDEuMmMxLjUtMi44LDIuNS01LjcsMi45LTguOGMtMC4zLTMuMy0xLjItNi42LTIuNS05LjdMLTQ4MC4yLDAuMSBoMzkuN0wtNDQwLjgsMEwtNDQwLjgsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODIyLjc0ODEwNCwgMC4wMDAwMDApIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS40NjQwNTAsIDAuMzc4OTE0KSI+CiAgICAgICAgPHBhdGggZD0iTS00MTMuNywwdjU4LjNoNTJ2MjguMmgtNTJWMTk2YzAsMjUsNywzOS41LDI3LjMsMzkuNWM3LjEsMC4xLDE0LjItMC43LDIxLjEtMi41IGwxLjcsMjcuN2MtMTAuMywzLjctMjEuMyw1LjQtMzIuMiw1Yy03LjMsMC40LTE0LjYtMC43LTIxLjMtMy40Yy02LjgtMi43LTEyLjktNi44LTE3LjktMTIuMWMtMTAuMy0xMC45LTE0LjEtMjktMTQuMS01Mi45IFY4Ni41aC0zMVY1OC4zaDMxVjkuNkwtNDEzLjcsMEwtNDEzLjcsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTc0LjQzMzI4NiwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTkwMDM0LCAwLjYxMDMzOSkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDQ1LjgsMTEzYzAuOCw1MCwzMi4yLDcwLjYsNjguNiw3MC42YzE5LDAuNiwzNy45LTMsNTUuMy0xMC41bDYuMiwyNi40IGMtMjAuOSw4LjktNDMuNSwxMy4xLTY2LjIsMTIuNmMtNjEuNSwwLTk4LjMtNDEuMi05OC4zLTEwMi41Qy00ODAuMiw0OC4yLTQ0NC43LDAtMzg2LjUsMGM2NS4yLDAsODIuNyw1OC4zLDgyLjcsOTUuNyBjLTAuMSw1LjgtMC41LDExLjUtMS4yLDE3LjJoLTE0MC42SC00NDUuOEwtNDQ1LjgsMTEzeiBNLTMzOS4yLDg2LjZjMC40LTIzLjUtOS41LTYwLjEtNTAuNC02MC4xIGMtMzYuOCwwLTUyLjgsMzQuNC01NS43LDYwLjFILTMzOS4yTC0zMzkuMiw4Ni42TC0zMzkuMiw4Ni42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAxLjk2MTA1OCwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMTc5NjQwLCAwLjcwNTA2OCkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDc4LjYsNjhjMC0yMy45LTAuNC00NC41LTEuNy02My40aDMxLjhsMS4yLDM5LjloMS43YzkuMS0yNy4zLDMxLTQ0LjUsNTUuMy00NC41IGMzLjUtMC4xLDcsMC40LDEwLjMsMS4ydjM0LjhjLTQuMS0wLjktOC4yLTEuMy0xMi40LTEuMmMtMjUuNiwwLTQzLjcsMTkuNy00OC43LDQ3LjRjLTEsNS43LTEuNiwxMS41LTEuNywxNy4ydjEwOC4zaC0zNlY2OCBMLTQ3OC42LDY4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCBkPSJNMTM1Mi4zLDMyNi4yaDM3VjI4aC0zN1YzMjYuMnogTTE2MDQuOCwzMjYuMmMtMi41LTEzLjktMy40LTMxLjEtMy40LTQ4Ljd2LTc2IGMwLTQwLjctMTUuMS04My4xLTc3LjMtODMuMWMtMjUuNiwwLTUwLDcuMS02Ni44LDE4LjFsOC40LDI0LjRjMTQuMy05LjIsMzQtMTUuMSw1My0xNS4xYzQxLjYsMCw0Ni4yLDMwLjIsNDYuMiw0N3Y0LjIgYy03OC42LTAuNC0xMjIuMywyNi41LTEyMi4zLDc1LjZjMCwyOS40LDIxLDU4LjQsNjIuMiw1OC40YzI5LDAsNTAuOS0xNC4zLDYyLjItMzAuMmgxLjNsMi45LDI1LjZIMTYwNC44eiBNMTU2NS43LDI1Ny43IGMwLDMuOC0wLjgsOC0yLjEsMTEuOGMtNS45LDE3LjItMjIuNywzNC00OS4yLDM0Yy0xOC45LDAtMzQuOS0xMS4zLTM0LjktMzUuM2MwLTM5LjUsNDUuOC00Ni42LDg2LjItNDUuOFYyNTcuN3ogTTE2OTguNSwzMjYuMiBsMS43LTMzLjZoMS4zYzE1LjEsMjYuOSwzOC43LDM4LjIsNjguMSwzOC4yYzQ1LjQsMCw5MS4yLTM2LjEsOTEuMi0xMDguOGMwLjQtNjEuNy0zNS4zLTEwMy43LTg1LjctMTAzLjcgYy0zMi44LDAtNTYuMywxNC43LTY5LjMsMzcuNGgtMC44VjI4aC0zNi42djI0NS43YzAsMTguMS0wLjgsMzguNi0xLjcsNTIuNUgxNjk4LjV6IE0xNzA0LjgsMjA4LjJjMC01LjksMS4zLTEwLjksMi4xLTE1LjEgYzcuNi0yOC4xLDMxLjEtNDUuNCw1Ni4zLTQ1LjRjMzkuNSwwLDYwLjUsMzQuOSw2MC41LDc1LjZjMCw0Ni42LTIzLjEsNzguMS02MS44LDc4LjFjLTI2LjksMC00OC4zLTE3LjYtNTUuNS00My4zIGMtMC44LTQuMi0xLjctOC44LTEuNy0xMy40VjIwOC4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzYxNjE2MSIgZD0iTTE1IDlIOXY2aDZWOXptLTIgNGgtMnYtMmgydjJ6bTgtMlY5aC0yVjdjMC0xLjEtLjktMi0yLTJoLTJWM2gtMnYyaC0yVjNIOXYySDdjLTEuMSAwLTIgLjktMiAydjJIM3YyaDJ2MkgzdjJoMnYyYzAgMS4xLjkgMiAyIDJoMnYyaDJ2LTJoMnYyaDJ2LTJoMmMxLjEgMCAyLS45IDItMnYtMmgydi0yaC0ydi0yaDJ6bS00IDZIN1Y3aDEwdjEweiIvPgo8L3N2Zz4K);
  --jp-icon-keyboard: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMTdjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0tOSAzaDJ2MmgtMlY4em0wIDNoMnYyaC0ydi0yek04IDhoMnYySDhWOHptMCAzaDJ2Mkg4di0yem0tMSAySDV2LTJoMnYyem0wLTNINVY4aDJ2MnptOSA3SDh2LTJoOHYyem0wLTRoLTJ2LTJoMnYyem0wLTNoLTJWOGgydjJ6bTMgM2gtMnYtMmgydjJ6bTAtM2gtMlY4aDJ2MnoiLz4KPC9zdmc+Cg==);
  --jp-icon-launcher: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkgMTlINVY1aDdWM0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3oiLz4KPC9zdmc+Cg==);
  --jp-icon-line-form: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNS44OCA0LjEyTDEzLjc2IDEybC03Ljg4IDcuODhMOCAyMmwxMC0xMEw4IDJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-link: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xOSA1djE0SDVWNWgxNG0xLjEtMkgzLjljLS41IDAtLjkuNC0uOS45djE2LjJjMCAuNC40LjkuOS45aDE2LjJjLjQgMCAuOS0uNS45LS45VjMuOWMwLS41LS41LS45LS45LS45ek0xMSA3aDZ2MmgtNlY3em0wIDRoNnYyaC02di0yem0wIDRoNnYyaC02ek03IDdoMnYySDd6bTAgNGgydjJIN3ptMCA0aDJ2Mkg3eiIvPgo8L3N2Zz4=);
  --jp-icon-listings-info: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTAuOTc4IDUwLjk3OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAuOTc4IDUwLjk3ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik00My41Miw3LjQ1OEMzOC43MTEsMi42NDgsMzIuMzA3LDAsMjUuNDg5LDBDMTguNjcsMCwxMi4yNjYsMi42NDgsNy40NTgsNy40NTgNCgkJCQljLTkuOTQzLDkuOTQxLTkuOTQzLDI2LjExOSwwLDM2LjA2MmM0LjgwOSw0LjgwOSwxMS4yMTIsNy40NTYsMTguMDMxLDcuNDU4YzAsMCwwLjAwMSwwLDAuMDAyLDANCgkJCQljNi44MTYsMCwxMy4yMjEtMi42NDgsMTguMDI5LTcuNDU4YzQuODA5LTQuODA5LDcuNDU3LTExLjIxMiw3LjQ1Ny0xOC4wM0M1MC45NzcsMTguNjcsNDguMzI4LDEyLjI2Niw0My41Miw3LjQ1OHoNCgkJCQkgTTQyLjEwNiw0Mi4xMDVjLTQuNDMyLDQuNDMxLTEwLjMzMiw2Ljg3Mi0xNi42MTUsNi44NzJoLTAuMDAyYy02LjI4NS0wLjAwMS0xMi4xODctMi40NDEtMTYuNjE3LTYuODcyDQoJCQkJYy05LjE2Mi05LjE2My05LjE2Mi0yNC4wNzEsMC0zMy4yMzNDMTMuMzAzLDQuNDQsMTkuMjA0LDIsMjUuNDg5LDJjNi4yODQsMCwxMi4xODYsMi40NCwxNi42MTcsNi44NzINCgkJCQljNC40MzEsNC40MzEsNi44NzEsMTAuMzMyLDYuODcxLDE2LjYxN0M0OC45NzcsMzEuNzcyLDQ2LjUzNiwzNy42NzUsNDIuMTA2LDQyLjEwNXoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjMuNTc4LDMyLjIxOGMtMC4wMjMtMS43MzQsMC4xNDMtMy4wNTksMC40OTYtMy45NzJjMC4zNTMtMC45MTMsMS4xMS0xLjk5NywyLjI3Mi0zLjI1Mw0KCQkJCWMwLjQ2OC0wLjUzNiwwLjkyMy0xLjA2MiwxLjM2Ny0xLjU3NWMwLjYyNi0wLjc1MywxLjEwNC0xLjQ3OCwxLjQzNi0yLjE3NWMwLjMzMS0wLjcwNywwLjQ5NS0xLjU0MSwwLjQ5NS0yLjUNCgkJCQljMC0xLjA5Ni0wLjI2LTIuMDg4LTAuNzc5LTIuOTc5Yy0wLjU2NS0wLjg3OS0xLjUwMS0xLjMzNi0yLjgwNi0xLjM2OWMtMS44MDIsMC4wNTctMi45ODUsMC42NjctMy41NSwxLjgzMg0KCQkJCWMtMC4zMDEsMC41MzUtMC41MDMsMS4xNDEtMC42MDcsMS44MTRjLTAuMTM5LDAuNzA3LTAuMjA3LDEuNDMyLTAuMjA3LDIuMTc0aC0yLjkzN2MtMC4wOTEtMi4yMDgsMC40MDctNC4xMTQsMS40OTMtNS43MTkNCgkJCQljMS4wNjItMS42NCwyLjg1NS0yLjQ4MSw1LjM3OC0yLjUyN2MyLjE2LDAuMDIzLDMuODc0LDAuNjA4LDUuMTQxLDEuNzU4YzEuMjc4LDEuMTYsMS45MjksMi43NjQsMS45NSw0LjgxMQ0KCQkJCWMwLDEuMTQyLTAuMTM3LDIuMTExLTAuNDEsMi45MTFjLTAuMzA5LDAuODQ1LTAuNzMxLDEuNTkzLTEuMjY4LDIuMjQzYy0wLjQ5MiwwLjY1LTEuMDY4LDEuMzE4LTEuNzMsMi4wMDINCgkJCQljLTAuNjUsMC42OTctMS4zMTMsMS40NzktMS45ODcsMi4zNDZjLTAuMjM5LDAuMzc3LTAuNDI5LDAuNzc3LTAuNTY1LDEuMTk5Yy0wLjE2LDAuOTU5LTAuMjE3LDEuOTUxLTAuMTcxLDIuOTc5DQoJCQkJQzI2LjU4OSwzMi4yMTgsMjMuNTc4LDMyLjIxOCwyMy41NzgsMzIuMjE4eiBNMjMuNTc4LDM4LjIydi0zLjQ4NGgzLjA3NnYzLjQ4NEgyMy41Nzh6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==);
  --jp-icon-markdown: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjN0IxRkEyIiBkPSJNNSAxNC45aDEybC02LjEgNnptOS40LTYuOGMwLTEuMy0uMS0yLjktLjEtNC41LS40IDEuNC0uOSAyLjktMS4zIDQuM2wtMS4zIDQuM2gtMkw4LjUgNy45Yy0uNC0xLjMtLjctMi45LTEtNC4zLS4xIDEuNi0uMSAzLjItLjIgNC42TDcgMTIuNEg0LjhsLjctMTFoMy4zTDEwIDVjLjQgMS4yLjcgMi43IDEgMy45LjMtMS4yLjctMi42IDEtMy45bDEuMi0zLjdoMy4zbC42IDExaC0yLjRsLS4zLTQuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-new-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDZoLThsLTItMkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS0xIDhoLTN2M2gtMnYtM2gtM3YtMmgzVjloMnYzaDN2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-not-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMTkgMTcuMTg0NCAyLjk2OTY4IDE0LjMwMzIgMS44NjA5NCAxMS40NDA5WiIvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24yIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4zMTU5MiA5LjMyMDMxKSIgZD0iTTcuMzY4NDIgMEwwIDcuMzY0NzkiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMzE1OTIgMTYuNjgzNikgc2NhbGUoMSAtMSkiIGQ9Ik03LjM2ODQyIDBMMCA3LjM2NDc5Ii8+Cjwvc3ZnPgo=);
  --jp-icon-notebook: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNFRjZDMDAiPgogICAgPHBhdGggZD0iTTE4LjcgMy4zdjE1LjRIMy4zVjMuM2gxNS40bTEuNS0xLjVIMS44djE4LjNoMTguM2wuMS0xOC4zeiIvPgogICAgPHBhdGggZD0iTTE2LjUgMTYuNWwtNS40LTQuMy01LjYgNC4zdi0xMWgxMXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-palette: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE4IDEzVjIwSDRWNkg5LjAyQzkuMDcgNS4yOSA5LjI0IDQuNjIgOS41IDRINEMyLjkgNCAyIDQuOSAyIDZWMjBDMiAyMS4xIDIuOSAyMiA0IDIySDE4QzE5LjEgMjIgMjAgMjEuMSAyMCAyMFYxNUwxOCAxM1pNMTkuMyA4Ljg5QzE5Ljc0IDguMTkgMjAgNy4zOCAyMCA2LjVDMjAgNC4wMSAxNy45OSAyIDE1LjUgMkMxMy4wMSAyIDExIDQuMDEgMTEgNi41QzExIDguOTkgMTMuMDEgMTEgMTUuNDkgMTFDMTYuMzcgMTEgMTcuMTkgMTAuNzQgMTcuODggMTAuM0wyMSAxMy40MkwyMi40MiAxMkwxOS4zIDguODlaTTE1LjUgOUMxNC4xMiA5IDEzIDcuODggMTMgNi41QzEzIDUuMTIgMTQuMTIgNCAxNS41IDRDMTYuODggNCAxOCA1LjEyIDE4IDYuNUMxOCA3Ljg4IDE2Ljg4IDkgMTUuNSA5WiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDZIOS4wMTg5NEM5LjAwNjM5IDYuMTY1MDIgOSA2LjMzMTc2IDkgNi41QzkgOC44MTU3NyAxMC4yMTEgMTAuODQ4NyAxMi4wMzQzIDEySDlWMTRIMTZWMTIuOTgxMUMxNi41NzAzIDEyLjkzNzcgMTcuMTIgMTIuODIwNyAxNy42Mzk2IDEyLjYzOTZMMTggMTNWMjBINFY2Wk04IDhINlYxMEg4VjhaTTYgMTJIOFYxNEg2VjEyWk04IDE2SDZWMThIOFYxNlpNOSAxNkgxNlYxOEg5VjE2WiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-paste: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-python: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1icmFuZDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMEQ0N0ExIj4KICAgIDxwYXRoIGQ9Ik0xMS4xIDYuOVY1LjhINi45YzAtLjUgMC0xLjMuMi0xLjYuNC0uNy44LTEuMSAxLjctMS40IDEuNy0uMyAyLjUtLjMgMy45LS4xIDEgLjEgMS45LjkgMS45IDEuOXY0LjJjMCAuNS0uOSAxLjYtMiAxLjZIOC44Yy0xLjUgMC0yLjQgMS40LTIuNCAyLjh2Mi4ySDQuN0MzLjUgMTUuMSAzIDE0IDMgMTMuMVY5Yy0uMS0xIC42LTIgMS44LTIgMS41LS4xIDYuMy0uMSA2LjMtLjF6Ii8+CiAgICA8cGF0aCBkPSJNMTAuOSAxNS4xdjEuMWg0LjJjMCAuNSAwIDEuMy0uMiAxLjYtLjQuNy0uOCAxLjEtMS43IDEuNC0xLjcuMy0yLjUuMy0zLjkuMS0xLS4xLTEuOS0uOS0xLjktMS45di00LjJjMC0uNS45LTEuNiAyLTEuNmgzLjhjMS41IDAgMi40LTEuNCAyLjQtMi44VjYuNmgxLjdDMTguNSA2LjkgMTkgOCAxOSA4LjlWMTNjMCAxLS43IDIuMS0xLjkgMi4xaC02LjJ6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-r-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjE5NkYzIiBkPSJNNC40IDIuNWMxLjItLjEgMi45LS4zIDQuOS0uMyAyLjUgMCA0LjEuNCA1LjIgMS4zIDEgLjcgMS41IDEuOSAxLjUgMy41IDAgMi0xLjQgMy41LTIuOSA0LjEgMS4yLjQgMS43IDEuNiAyLjIgMyAuNiAxLjkgMSAzLjkgMS4zIDQuNmgtMy44Yy0uMy0uNC0uOC0xLjctMS4yLTMuN3MtMS4yLTIuNi0yLjYtMi42aC0uOXY2LjRINC40VjIuNXptMy43IDYuOWgxLjRjMS45IDAgMi45LS45IDIuOS0yLjNzLTEtMi4zLTIuOC0yLjNjLS43IDAtMS4zIDAtMS42LjJ2NC41aC4xdi0uMXoiLz4KPC9zdmc+Cg==);
  --jp-icon-react: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMTUwIDE1MCA1NDEuOSAyOTUuMyI+CiAgPGcgY2xhc3M9ImpwLWljb24tYnJhbmQyIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxREFGQiI+CiAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgPGNpcmNsZSBjeD0iNDIwLjkiIGN5PSIyOTYuNSIgcj0iNDUuNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-refresh: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTkgMTMuNWMtMi40OSAwLTQuNS0yLjAxLTQuNS00LjVTNi41MSA0LjUgOSA0LjVjMS4yNCAwIDIuMzYuNTIgMy4xNyAxLjMzTDEwIDhoNVYzbC0xLjc2IDEuNzZDMTIuMTUgMy42OCAxMC42NiAzIDkgMyA1LjY5IDMgMy4wMSA1LjY5IDMuMDEgOVM1LjY5IDE1IDkgMTVjMi45NyAwIDUuNDMtMi4xNiA1LjktNWgtMS41MmMtLjQ2IDItMi4yNCAzLjUtNC4zOCAzLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-regex: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiBmaWxsPSIjRkZGIj4KICAgIDxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjUuNSIgY3k9IjE0LjUiIHI9IjEuNSIvPgogICAgPHJlY3QgeD0iMTIiIHk9IjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIxIiBoZWlnaHQ9IjgiLz4KICAgIDxyZWN0IHg9IjguNSIgeT0iNy41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NiAtMC41IDAuNSAwLjg2NiAtMi4zMjU1IDcuMzIxOSkiIGNsYXNzPSJzdDIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEiLz4KICAgIDxyZWN0IHg9IjEyIiB5PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgLTAuODY2IDAuODY2IDAuNSAtMC42Nzc5IDE0LjgyNTIpIiBjbGFzcz0ic3QyIiB3aWR0aD0iMSIgaGVpZ2h0PSI4Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-run: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTggNXYxNGwxMS03eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-running: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptOTYgMzI4YzAgOC44LTcuMiAxNi0xNiAxNkgxNzZjLTguOCAwLTE2LTcuMi0xNi0xNlYxNzZjMC04LjggNy4yLTE2IDE2LTE2aDE2MGM4LjggMCAxNiA3LjIgMTYgMTZ2MTYweiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-save: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjdsLTQtNHptLTUgMTZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0zLTEwSDVWNWgxMHY0eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-search: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-settings: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVBLjQ4OC40ODggMCAwMDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXoiLz4KPC9zdmc+Cg==);
  --jp-icon-spreadsheet: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNENBRjUwIiBkPSJNMi4yIDIuMnYxNy42aDE3LjZWMi4ySDIuMnptMTUuNCA3LjdoLTUuNVY0LjRoNS41djUuNXpNOS45IDQuNHY1LjVINC40VjQuNGg1LjV6bS01LjUgNy43aDUuNXY1LjVINC40di01LjV6bTcuNyA1LjV2LTUuNWg1LjV2NS41aC01LjV6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-stop: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik02IDZoMTJ2MTJINnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-tab: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-terminal: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiA+CiAgICA8cmVjdCBjbGFzcz0ianAtaWNvbjIganAtaWNvbi1zZWxlY3RhYmxlIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiIGZpbGw9IiMzMzMzMzMiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uLWFjY2VudDIganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGQ9Ik01LjA1NjY0IDguNzYxNzJDNS4wNTY2NCA4LjU5NzY2IDUuMDMxMjUgOC40NTMxMiA0Ljk4MDQ3IDguMzI4MTJDNC45MzM1OSA4LjE5OTIyIDQuODU1NDcgOC4wODIwMyA0Ljc0NjA5IDcuOTc2NTZDNC42NDA2MiA3Ljg3MTA5IDQuNSA3Ljc3NTM5IDQuMzI0MjIgNy42ODk0NUM0LjE1MjM0IDcuNTk5NjEgMy45NDMzNiA3LjUxMTcyIDMuNjk3MjcgNy40MjU3OEMzLjMwMjczIDcuMjg1MTYgMi45NDMzNiA3LjEzNjcyIDIuNjE5MTQgNi45ODA0N0MyLjI5NDkyIDYuODI0MjIgMi4wMTc1OCA2LjY0MjU4IDEuNzg3MTEgNi40MzU1NUMxLjU2MDU1IDYuMjI4NTIgMS4zODQ3NyA1Ljk4ODI4IDEuMjU5NzcgNS43MTQ4NEMxLjEzNDc3IDUuNDM3NSAxLjA3MjI3IDUuMTA5MzggMS4wNzIyNyA0LjczMDQ3QzEuMDcyMjcgNC4zOTg0NCAxLjEyODkxIDQuMDk1NyAxLjI0MjE5IDMuODIyMjdDMS4zNTU0NyAzLjU0NDkyIDEuNTE1NjIgMy4zMDQ2OSAxLjcyMjY2IDMuMTAxNTZDMS45Mjk2OSAyLjg5ODQ0IDIuMTc5NjkgMi43MzQzNyAyLjQ3MjY2IDIuNjA5MzhDMi43NjU2MiAyLjQ4NDM4IDMuMDkxOCAyLjQwNDMgMy40NTExNyAyLjM2OTE0VjEuMTA5MzhINC4zODg2N1YyLjM4MDg2QzQuNzQwMjMgMi40Mjc3MyA1LjA1NjY0IDIuNTIzNDQgNS4zMzc4OSAyLjY2Nzk3QzUuNjE5MTQgMi44MTI1IDUuODU3NDIgMy4wMDE5NSA2LjA1MjczIDMuMjM2MzNDNi4yNTE5NSAzLjQ2NjggNi40MDQzIDMuNzQwMjMgNi41MDk3NyA0LjA1NjY0QzYuNjE5MTQgNC4zNjkxNCA2LjY3MzgzIDQuNzIwNyA2LjY3MzgzIDUuMTExMzNINS4wNDQ5MkM1LjA0NDkyIDQuNjM4NjcgNC45Mzc1IDQuMjgxMjUgNC43MjI2NiA0LjAzOTA2QzQuNTA3ODEgMy43OTI5NyA0LjIxNjggMy42Njk5MiAzLjg0OTYxIDMuNjY5OTJDMy42NTAzOSAzLjY2OTkyIDMuNDc2NTYgMy42OTcyNyAzLjMyODEyIDMuNzUxOTVDMy4xODM1OSAzLjgwMjczIDMuMDY0NDUgMy44NzY5NSAyLjk3MDcgMy45NzQ2MUMyLjg3Njk1IDQuMDY4MzYgMi44MDY2NCA0LjE3OTY5IDIuNzU5NzcgNC4zMDg1OUMyLjcxNjggNC40Mzc1IDIuNjk1MzEgNC41NzgxMiAyLjY5NTMxIDQuNzMwNDdDMi42OTUzMSA0Ljg4MjgxIDIuNzE2OCA1LjAxOTUzIDIuNzU5NzcgNS4xNDA2MkMyLjgwNjY0IDUuMjU3ODEgMi44ODI4MSA1LjM2NzE5IDIuOTg4MjggNS40Njg3NUMzLjA5NzY2IDUuNTcwMzEgMy4yNDAyMyA1LjY2Nzk3IDMuNDE2MDIgNS43NjE3MkMzLjU5MTggNS44NTE1NiAzLjgxMDU1IDUuOTQzMzYgNC4wNzIyNyA2LjAzNzExQzQuNDY2OCA2LjE4NTU1IDQuODI0MjIgNi4zMzk4NCA1LjE0NDUzIDYuNUM1LjQ2NDg0IDYuNjU2MjUgNS43MzgyOCA2LjgzOTg0IDUuOTY0ODQgNy4wNTA3OEM2LjE5NTMxIDcuMjU3ODEgNi4zNzEwOSA3LjUgNi40OTIxOSA3Ljc3NzM0QzYuNjE3MTkgOC4wNTA3OCA2LjY3OTY5IDguMzc1IDYuNjc5NjkgOC43NUM2LjY3OTY5IDkuMDkzNzUgNi42MjMwNSA5LjQwNDMgNi41MDk3NyA5LjY4MTY0QzYuMzk2NDggOS45NTUwOCA2LjIzNDM4IDEwLjE5MTQgNi4wMjM0NCAxMC4zOTA2QzUuODEyNSAxMC41ODk4IDUuNTU4NTkgMTAuNzUgNS4yNjE3MiAxMC44NzExQzQuOTY0ODQgMTAuOTg4MyA0LjYzMjgxIDExLjA2NDUgNC4yNjU2MiAxMS4wOTk2VjEyLjI0OEgzLjMzMzk4VjExLjA5OTZDMy4wMDE5NSAxMS4wNjg0IDIuNjc5NjkgMTAuOTk2MSAyLjM2NzE5IDEwLjg4MjhDMi4wNTQ2OSAxMC43NjU2IDEuNzc3MzQgMTAuNTk3NyAxLjUzNTE2IDEwLjM3ODlDMS4yOTY4OCAxMC4xNjAyIDEuMTA1NDcgOS44ODQ3NyAwLjk2MDkzOCA5LjU1MjczQzAuODE2NDA2IDkuMjE2OCAwLjc0NDE0MSA4LjgxNDQ1IDAuNzQ0MTQxIDguMzQ1N0gyLjM3ODkxQzIuMzc4OTEgOC42MjY5NSAyLjQxOTkyIDguODYzMjggMi41MDE5NSA5LjA1NDY5QzIuNTgzOTggOS4yNDIxOSAyLjY4OTQ1IDkuMzkyNTggMi44MTgzNiA5LjUwNTg2QzIuOTUxMTcgOS42MTUyMyAzLjEwMTU2IDkuNjkzMzYgMy4yNjk1MyA5Ljc0MDIzQzMuNDM3NSA5Ljc4NzExIDMuNjA5MzggOS44MTA1NSAzLjc4NTE2IDkuODEwNTVDNC4yMDMxMiA5LjgxMDU1IDQuNTE5NTMgOS43MTI4OSA0LjczNDM4IDkuNTE3NThDNC45NDkyMiA5LjMyMjI3IDUuMDU2NjQgOS4wNzAzMSA1LjA1NjY0IDguNzYxNzJaTTEzLjQxOCAxMi4yNzE1SDguMDc0MjJWMTFIMTMuNDE4VjEyLjI3MTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjk1MjY0IDYpIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
  --jp-icon-text-editor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTUgMTVIM3YyaDEydi0yem0wLThIM3YyaDEyVjd6TTMgMTNoMTh2LTJIM3Yyem0wIDhoMTh2LTJIM3Yyek0zIDN2MmgxOFYzSDN6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMiAxNy4xODQ0IDIuOTY5NjggMTQuMzAzMiAxLjg2MDk0IDExLjQ0MDlaIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA5Ljg2NzE5KSIgZD0iTTIuODYwMTUgNC44NjUzNUwwLjcyNjU0OSAyLjk5OTU5TDAgMy42MzA0NUwyLjg2MDE1IDYuMTMxNTdMOCAwLjYzMDg3Mkw3LjI3ODU3IDBMMi44NjAxNSA0Ljg2NTM1WiIvPgo8L3N2Zz4K);
  --jp-icon-undo: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjUgOGMtMi42NSAwLTUuMDUuOTktNi45IDIuNkwyIDd2OWg5bC0zLjYyLTMuNjJjMS4zOS0xLjE2IDMuMTYtMS44OCA1LjEyLTEuODggMy41NCAwIDYuNTUgMi4zMSA3LjYgNS41bDIuMzctLjc4QzIxLjA4IDExLjAzIDE3LjE1IDggMTIuNSA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-vega: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbjEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjEyMTIxIj4KICAgIDxwYXRoIGQ9Ik0xMC42IDUuNGwyLjItMy4ySDIuMnY3LjNsNC02LjZ6Ii8+CiAgICA8cGF0aCBkPSJNMTUuOCAyLjJsLTQuNCA2LjZMNyA2LjNsLTQuOCA4djUuNWgxNy42VjIuMmgtNHptLTcgMTUuNEg1LjV2LTQuNGgzLjN2NC40em00LjQgMEg5LjhWOS44aDMuNHY3Ljh6bTQuNCAwaC0zLjRWNi41aDMuNHYxMS4xeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-yaml: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1jb250cmFzdDIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjRDgxQjYwIj4KICAgIDxwYXRoIGQ9Ik03LjIgMTguNnYtNS40TDMgNS42aDMuM2wxLjQgMy4xYy4zLjkuNiAxLjYgMSAyLjUuMy0uOC42LTEuNiAxLTIuNWwxLjQtMy4xaDMuNGwtNC40IDcuNnY1LjVsLTIuOS0uMXoiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxNi41IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxMSIgcj0iMi4xIi8+CiAgPC9nPgo8L3N2Zz4K);
}

/* Icon CSS class declarations */

.jp-AddIcon {
  background-image: var(--jp-icon-add);
}
.jp-BugIcon {
  background-image: var(--jp-icon-bug);
}
.jp-BuildIcon {
  background-image: var(--jp-icon-build);
}
.jp-CaretDownEmptyIcon {
  background-image: var(--jp-icon-caret-down-empty);
}
.jp-CaretDownEmptyThinIcon {
  background-image: var(--jp-icon-caret-down-empty-thin);
}
.jp-CaretDownIcon {
  background-image: var(--jp-icon-caret-down);
}
.jp-CaretLeftIcon {
  background-image: var(--jp-icon-caret-left);
}
.jp-CaretRightIcon {
  background-image: var(--jp-icon-caret-right);
}
.jp-CaretUpEmptyThinIcon {
  background-image: var(--jp-icon-caret-up-empty-thin);
}
.jp-CaretUpIcon {
  background-image: var(--jp-icon-caret-up);
}
.jp-CaseSensitiveIcon {
  background-image: var(--jp-icon-case-sensitive);
}
.jp-CheckIcon {
  background-image: var(--jp-icon-check);
}
.jp-CircleEmptyIcon {
  background-image: var(--jp-icon-circle-empty);
}
.jp-CircleIcon {
  background-image: var(--jp-icon-circle);
}
.jp-ClearIcon {
  background-image: var(--jp-icon-clear);
}
.jp-CloseIcon {
  background-image: var(--jp-icon-close);
}
.jp-ConsoleIcon {
  background-image: var(--jp-icon-console);
}
.jp-CopyIcon {
  background-image: var(--jp-icon-copy);
}
.jp-CutIcon {
  background-image: var(--jp-icon-cut);
}
.jp-DownloadIcon {
  background-image: var(--jp-icon-download);
}
.jp-EditIcon {
  background-image: var(--jp-icon-edit);
}
.jp-EllipsesIcon {
  background-image: var(--jp-icon-ellipses);
}
.jp-ExtensionIcon {
  background-image: var(--jp-icon-extension);
}
.jp-FastForwardIcon {
  background-image: var(--jp-icon-fast-forward);
}
.jp-FileIcon {
  background-image: var(--jp-icon-file);
}
.jp-FileUploadIcon {
  background-image: var(--jp-icon-file-upload);
}
.jp-FilterListIcon {
  background-image: var(--jp-icon-filter-list);
}
.jp-FolderIcon {
  background-image: var(--jp-icon-folder);
}
.jp-Html5Icon {
  background-image: var(--jp-icon-html5);
}
.jp-ImageIcon {
  background-image: var(--jp-icon-image);
}
.jp-InspectorIcon {
  background-image: var(--jp-icon-inspector);
}
.jp-JsonIcon {
  background-image: var(--jp-icon-json);
}
.jp-JupyterFaviconIcon {
  background-image: var(--jp-icon-jupyter-favicon);
}
.jp-JupyterIcon {
  background-image: var(--jp-icon-jupyter);
}
.jp-JupyterlabWordmarkIcon {
  background-image: var(--jp-icon-jupyterlab-wordmark);
}
.jp-KernelIcon {
  background-image: var(--jp-icon-kernel);
}
.jp-KeyboardIcon {
  background-image: var(--jp-icon-keyboard);
}
.jp-LauncherIcon {
  background-image: var(--jp-icon-launcher);
}
.jp-LineFormIcon {
  background-image: var(--jp-icon-line-form);
}
.jp-LinkIcon {
  background-image: var(--jp-icon-link);
}
.jp-ListIcon {
  background-image: var(--jp-icon-list);
}
.jp-ListingsInfoIcon {
  background-image: var(--jp-icon-listings-info);
}
.jp-MarkdownIcon {
  background-image: var(--jp-icon-markdown);
}
.jp-NewFolderIcon {
  background-image: var(--jp-icon-new-folder);
}
.jp-NotTrustedIcon {
  background-image: var(--jp-icon-not-trusted);
}
.jp-NotebookIcon {
  background-image: var(--jp-icon-notebook);
}
.jp-PaletteIcon {
  background-image: var(--jp-icon-palette);
}
.jp-PasteIcon {
  background-image: var(--jp-icon-paste);
}
.jp-PythonIcon {
  background-image: var(--jp-icon-python);
}
.jp-RKernelIcon {
  background-image: var(--jp-icon-r-kernel);
}
.jp-ReactIcon {
  background-image: var(--jp-icon-react);
}
.jp-RefreshIcon {
  background-image: var(--jp-icon-refresh);
}
.jp-RegexIcon {
  background-image: var(--jp-icon-regex);
}
.jp-RunIcon {
  background-image: var(--jp-icon-run);
}
.jp-RunningIcon {
  background-image: var(--jp-icon-running);
}
.jp-SaveIcon {
  background-image: var(--jp-icon-save);
}
.jp-SearchIcon {
  background-image: var(--jp-icon-search);
}
.jp-SettingsIcon {
  background-image: var(--jp-icon-settings);
}
.jp-SpreadsheetIcon {
  background-image: var(--jp-icon-spreadsheet);
}
.jp-StopIcon {
  background-image: var(--jp-icon-stop);
}
.jp-TabIcon {
  background-image: var(--jp-icon-tab);
}
.jp-TerminalIcon {
  background-image: var(--jp-icon-terminal);
}
.jp-TextEditorIcon {
  background-image: var(--jp-icon-text-editor);
}
.jp-TrustedIcon {
  background-image: var(--jp-icon-trusted);
}
.jp-UndoIcon {
  background-image: var(--jp-icon-undo);
}
.jp-VegaIcon {
  background-image: var(--jp-icon-vega);
}
.jp-YamlIcon {
  background-image: var(--jp-icon-yaml);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

:root {
  --jp-icon-search-white: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
}

.jp-Icon,
.jp-MaterialIcon {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-cover {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/**
 * (DEPRECATED) Support for specific CSS icon sizes
 */

.jp-Icon-16 {
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-18 {
  background-size: 18px;
  min-width: 18px;
  min-height: 18px;
}

.jp-Icon-20 {
  background-size: 20px;
  min-width: 20px;
  min-height: 20px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for icons as inline SVG HTMLElements
 */

/* recolor the primary elements of an icon */
.jp-icon0[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon1[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon2[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon3[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}
/* recolor the accent elements of an icon */
.jp-icon-accent0[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-accent1[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-accent2[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-accent3[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-accent4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-accent0[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-accent1[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-accent2[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-accent3[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-accent4[stroke] {
  stroke: var(--jp-layout-color4);
}
/* set the color of an icon to transparent */
.jp-icon-none[fill] {
  fill: none;
}

.jp-icon-none[stroke] {
  stroke: none;
}
/* brand icon colors. Same for light and dark */
.jp-icon-brand0[fill] {
  fill: var(--jp-brand-color0);
}
.jp-icon-brand1[fill] {
  fill: var(--jp-brand-color1);
}
.jp-icon-brand2[fill] {
  fill: var(--jp-brand-color2);
}
.jp-icon-brand3[fill] {
  fill: var(--jp-brand-color3);
}
.jp-icon-brand4[fill] {
  fill: var(--jp-brand-color4);
}

.jp-icon-brand0[stroke] {
  stroke: var(--jp-brand-color0);
}
.jp-icon-brand1[stroke] {
  stroke: var(--jp-brand-color1);
}
.jp-icon-brand2[stroke] {
  stroke: var(--jp-brand-color2);
}
.jp-icon-brand3[stroke] {
  stroke: var(--jp-brand-color3);
}
.jp-icon-brand4[stroke] {
  stroke: var(--jp-brand-color4);
}
/* warn icon colors. Same for light and dark */
.jp-icon-warn0[fill] {
  fill: var(--jp-warn-color0);
}
.jp-icon-warn1[fill] {
  fill: var(--jp-warn-color1);
}
.jp-icon-warn2[fill] {
  fill: var(--jp-warn-color2);
}
.jp-icon-warn3[fill] {
  fill: var(--jp-warn-color3);
}

.jp-icon-warn0[stroke] {
  stroke: var(--jp-warn-color0);
}
.jp-icon-warn1[stroke] {
  stroke: var(--jp-warn-color1);
}
.jp-icon-warn2[stroke] {
  stroke: var(--jp-warn-color2);
}
.jp-icon-warn3[stroke] {
  stroke: var(--jp-warn-color3);
}
/* icon colors that contrast well with each other and most backgrounds */
.jp-icon-contrast0[fill] {
  fill: var(--jp-icon-contrast-color0);
}
.jp-icon-contrast1[fill] {
  fill: var(--jp-icon-contrast-color1);
}
.jp-icon-contrast2[fill] {
  fill: var(--jp-icon-contrast-color2);
}
.jp-icon-contrast3[fill] {
  fill: var(--jp-icon-contrast-color3);
}

.jp-icon-contrast0[stroke] {
  stroke: var(--jp-icon-contrast-color0);
}
.jp-icon-contrast1[stroke] {
  stroke: var(--jp-icon-contrast-color1);
}
.jp-icon-contrast2[stroke] {
  stroke: var(--jp-icon-contrast-color2);
}
.jp-icon-contrast3[stroke] {
  stroke: var(--jp-icon-contrast-color3);
}

/* CSS for icons in selected items in the settings editor */
#setting-editor .jp-PluginList .jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}
#setting-editor
  .jp-PluginList
  .jp-mod-selected
  .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* CSS for icons in selected filebrowser listing items */
.jp-DirListing-item.jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}
.jp-DirListing-item.jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* CSS for icons in selected tabs in the sidebar tab manager */
#tab-manager .lm-TabBar-tab.jp-mod-active .jp-icon-selectable[fill] {
  fill: #fff;
}

#tab-manager .lm-TabBar-tab.jp-mod-active .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}
#tab-manager
  .lm-TabBar-tab.jp-mod-active
  .jp-icon-hover
  :hover
  .jp-icon-selectable[fill] {
  fill: var(--jp-brand-color1);
}

#tab-manager
  .lm-TabBar-tab.jp-mod-active
  .jp-icon-hover
  :hover
  .jp-icon-selectable-inverse[fill] {
  fill: #fff;
}

/**
 * TODO: come up with non css-hack solution for showing the busy icon on top
 *  of the close icon
 * CSS for complex behavior of close icon of tabs in the sidebar tab manager
 */
#tab-manager
  .lm-TabBar-tab.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon3[fill] {
  fill: none;
}
#tab-manager
  .lm-TabBar-tab.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: var(--jp-inverse-layout-color3);
}

#tab-manager
  .lm-TabBar-tab.jp-mod-dirty.jp-mod-active
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: #fff;
}

/**
* TODO: come up with non css-hack solution for showing the busy icon on top
*  of the close icon
* CSS for complex behavior of close icon of tabs in the main area tabbar
*/
.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon3[fill] {
  fill: none;
}
.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: var(--jp-inverse-layout-color3);
}

/* CSS for icons in status bar */
#jp-main-statusbar .jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}

#jp-main-statusbar .jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}
/* special handling for splash icon CSS. While the theme CSS reloads during
   splash, the splash icon can loose theming. To prevent that, we set a
   default for its color variable */
:root {
  --jp-warn-color0: var(--md-orange-700);
}

/* not sure what to do with this one, used in filebrowser listing */
.jp-DragIcon {
  margin-right: 4px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for alt colors for icons as inline SVG HTMLElements
 */

/* alt recolor the primary elements of an icon */
.jp-icon-alt .jp-icon0[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-alt .jp-icon1[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-alt .jp-icon2[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-alt .jp-icon3[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-alt .jp-icon4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-alt .jp-icon0[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-alt .jp-icon1[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-alt .jp-icon2[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-alt .jp-icon3[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-alt .jp-icon4[stroke] {
  stroke: var(--jp-layout-color4);
}

/* alt recolor the accent elements of an icon */
.jp-icon-alt .jp-icon-accent0[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-alt .jp-icon-accent1[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-alt .jp-icon-accent2[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-alt .jp-icon-accent3[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-alt .jp-icon-accent4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-alt .jp-icon-accent0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-alt .jp-icon-accent1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-alt .jp-icon-accent2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-alt .jp-icon-accent3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-alt .jp-icon-accent4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-icon-hoverShow:not(:hover) svg {
  display: none !important;
}

/**
 * Support for hover colors for icons as inline SVG HTMLElements
 */

/**
 * regular colors
 */

/* recolor the primary elements of an icon */
.jp-icon-hover :hover .jp-icon0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-hover :hover .jp-icon1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-hover :hover .jp-icon2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-hover :hover .jp-icon3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-hover :hover .jp-icon4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-hover :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-hover :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-hover :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-hover :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/* recolor the accent elements of an icon */
.jp-icon-hover :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-hover :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-hover :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-hover :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-hover :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-hover :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-hover :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-hover :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-hover :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* set the color of an icon to transparent */
.jp-icon-hover :hover .jp-icon-none-hover[fill] {
  fill: none;
}

.jp-icon-hover :hover .jp-icon-none-hover[stroke] {
  stroke: none;
}

/**
 * inverse colors
 */

/* inverse recolor the primary elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* inverse recolor the accent elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* Sibling imports */

/* Override Blueprint's _reset.scss styles */
html {
  box-sizing: unset;
}

*,
*::before,
*::after {
  box-sizing: unset;
}

body {
  color: unset;
  font-family: var(--jp-ui-font-family);
}

p {
  margin-top: unset;
  margin-bottom: unset;
}

small {
  font-size: unset;
}

strong {
  font-weight: unset;
}

/* Override Blueprint's _typography.scss styles */
a {
  text-decoration: unset;
  color: unset;
}
a:hover {
  text-decoration: unset;
  color: unset;
}

/* Override Blueprint's _accessibility.scss styles */
:focus {
  outline: unset;
  outline-offset: unset;
  -moz-outline-radius: unset;
}

/* Styles for ui-components */
.jp-Button {
  border-radius: var(--jp-border-radius);
  padding: 0px 12px;
  font-size: var(--jp-ui-font-size1);
}

/* Use our own theme for hover styles */
button.jp-Button.bp3-button.bp3-minimal:hover {
  background-color: var(--jp-layout-color2);
}
.jp-Button.minimal {
  color: unset !important;
}

.jp-Button.jp-ToolbarButtonComponent {
  text-transform: none;
}

.jp-InputGroup input {
  box-sizing: border-box;
  border-radius: 0;
  background-color: transparent;
  color: var(--jp-ui-font-color0);
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
}

.jp-InputGroup input:focus {
  box-shadow: inset 0 0 0 var(--jp-border-width)
      var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.jp-InputGroup input::placeholder,
input::placeholder {
  color: var(--jp-ui-font-color3);
}

.jp-BPIcon {
  display: inline-block;
  vertical-align: middle;
  margin: auto;
}

/* Stop blueprint futzing with our icon fills */
.bp3-icon.jp-BPIcon > svg:not([fill]) {
  fill: var(--jp-inverse-layout-color3);
}

.jp-InputGroupAction {
  padding: 6px;
}

.jp-HTMLSelect.jp-DefaultStyle select {
  background-color: initial;
  border: none;
  border-radius: 0;
  box-shadow: none;
  color: var(--jp-ui-font-color0);
  display: block;
  font-size: var(--jp-ui-font-size1);
  height: 24px;
  line-height: 14px;
  padding: 0 25px 0 10px;
  text-align: left;
  -moz-appearance: none;
  -webkit-appearance: none;
}

/* Use our own theme for hover and option styles */
.jp-HTMLSelect.jp-DefaultStyle select:hover,
.jp-HTMLSelect.jp-DefaultStyle select > option {
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color0);
}
select {
  box-sizing: border-box;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapse {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-top: 1px solid var(--jp-border-color2);
  border-bottom: 1px solid var(--jp-border-color2);
}

.jp-Collapse-header {
  padding: 1px 12px;
  color: var(--jp-ui-font-color1);
  background-color: var(--jp-layout-color1);
  font-size: var(--jp-ui-font-size2);
}

.jp-Collapse-header:hover {
  background-color: var(--jp-layout-color2);
}

.jp-Collapse-contents {
  padding: 0px 12px 0px 12px;
  background-color: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  overflow: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-commandpalette-search-height: 28px;
}

/*-----------------------------------------------------------------------------
| Overall styles
|----------------------------------------------------------------------------*/

.lm-CommandPalette {
  padding-bottom: 0px;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Search
|----------------------------------------------------------------------------*/

.lm-CommandPalette-search {
  padding: 4px;
  background-color: var(--jp-layout-color1);
  z-index: 2;
}

.lm-CommandPalette-wrapper {
  overflow: overlay;
  padding: 0px 9px;
  background-color: var(--jp-input-active-background);
  height: 30px;
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
}

.lm-CommandPalette.lm-mod-focused .lm-CommandPalette-wrapper {
  box-shadow: inset 0 0 0 1px var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.lm-CommandPalette-wrapper::after {
  content: ' ';
  color: white;
  background-color: var(--jp-brand-color1);
  position: absolute;
  top: 4px;
  right: 4px;
  height: 30px;
  width: 10px;
  padding: 0px 10px;
  background-image: var(--jp-icon-search-white);
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
}

.lm-CommandPalette-input {
  background: transparent;
  width: calc(100% - 18px);
  float: left;
  border: none;
  outline: none;
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  line-height: var(--jp-private-commandpalette-search-height);
}

.lm-CommandPalette-input::-webkit-input-placeholder,
.lm-CommandPalette-input::-moz-placeholder,
.lm-CommandPalette-input:-ms-input-placeholder {
  color: var(--jp-ui-font-color3);
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Results
|----------------------------------------------------------------------------*/

.lm-CommandPalette-header:first-child {
  margin-top: 0px;
}

.lm-CommandPalette-header {
  border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
  color: var(--jp-ui-font-color1);
  cursor: pointer;
  display: flex;
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 8px;
  padding: 8px 0 8px 12px;
  text-transform: uppercase;
}

.lm-CommandPalette-header.lm-mod-active {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-header > mark {
  background-color: transparent;
  font-weight: bold;
  color: var(--jp-ui-font-color1);
}

.lm-CommandPalette-item {
  padding: 4px 12px 4px 4px;
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  font-weight: 400;
  display: flex;
}

.lm-CommandPalette-item.lm-mod-disabled {
  color: var(--jp-ui-font-color3);
}

.lm-CommandPalette-item.lm-mod-active {
  background: var(--jp-layout-color3);
}

.lm-CommandPalette-item.lm-mod-active:hover:not(.lm-mod-disabled) {
  background: var(--jp-layout-color4);
}

.lm-CommandPalette-item:hover:not(.lm-mod-active):not(.lm-mod-disabled) {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-itemContent {
  overflow: hidden;
}

.lm-CommandPalette-itemLabel > mark {
  color: var(--jp-ui-font-color0);
  background-color: transparent;
  font-weight: bold;
}

.lm-CommandPalette-item.lm-mod-disabled mark {
  color: var(--jp-ui-font-color3);
}

.lm-CommandPalette-item .lm-CommandPalette-itemIcon {
  margin: 0 4px 0 0;
  position: relative;
  width: 16px;
  top: 2px;
  flex: 0 0 auto;
}

.lm-CommandPalette-item.lm-mod-disabled .lm-CommandPalette-itemIcon {
  opacity: 0.4;
}

.lm-CommandPalette-item .lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}

.lm-CommandPalette-itemCaption {
  display: none;
}

.lm-CommandPalette-content {
  background-color: var(--jp-layout-color1);
}

.lm-CommandPalette-content:empty:after {
  content: 'No results';
  margin: auto;
  margin-top: 20px;
  width: 100px;
  display: block;
  font-size: var(--jp-ui-font-size2);
  font-family: var(--jp-ui-font-family);
  font-weight: lighter;
}

.lm-CommandPalette-emptyMessage {
  text-align: center;
  margin-top: 24px;
  line-height: 1.32;
  padding: 0px 8px;
  color: var(--jp-content-font-color3);
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Dialog {
  position: absolute;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-dialog-background);
}

.jp-Dialog-content {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background: var(--jp-layout-color1);
  padding: 24px;
  padding-bottom: 12px;
  min-width: 300px;
  min-height: 150px;
  max-width: 1000px;
  max-height: 500px;
  box-sizing: border-box;
  box-shadow: var(--jp-elevation-z20);
  word-wrap: break-word;
  border-radius: var(--jp-border-radius);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color1);
}

.jp-Dialog-button {
  overflow: visible;
}

button.jp-Dialog-button:focus {
  outline: 1px solid var(--jp-brand-color1);
  outline-offset: 4px;
  -moz-outline-radius: 0px;
}

button.jp-Dialog-button:focus::-moz-focus-inner {
  border: 0;
}

.jp-Dialog-header {
  flex: 0 0 auto;
  padding-bottom: 12px;
  font-size: var(--jp-ui-font-size3);
  font-weight: 400;
  color: var(--jp-ui-font-color0);
}

.jp-Dialog-body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  font-size: var(--jp-ui-font-size1);
  background: var(--jp-layout-color1);
  overflow: auto;
}

.jp-Dialog-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 0 0 auto;
  margin-left: -12px;
  margin-right: -12px;
  padding: 12px;
}

.jp-Dialog-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.jp-Dialog-body > .jp-select-wrapper {
  width: 100%;
}

.jp-Dialog-body > button {
  padding: 0px 16px;
}

.jp-Dialog-body > label {
  line-height: 1.4;
  color: var(--jp-ui-font-color0);
}

.jp-Dialog-button.jp-mod-styled:not(:last-child) {
  margin-right: 12px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-HoverBox {
  position: fixed;
}

.jp-HoverBox.jp-mod-outofview {
  display: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-IFrame {
  width: 100%;
  height: 100%;
}

.jp-IFrame > iframe {
  border: none;
}

body.lm-mod-override-cursor .jp-IFrame {
  position: relative;
}

body.lm-mod-override-cursor .jp-IFrame:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MainAreaWidget > :focus {
  outline: none;
}

/**
 * google-material-color v1.2.6
 * https://github.com/danlevan/google-material-color
 */
:root {
  --md-red-50: #ffebee;
  --md-red-100: #ffcdd2;
  --md-red-200: #ef9a9a;
  --md-red-300: #e57373;
  --md-red-400: #ef5350;
  --md-red-500: #f44336;
  --md-red-600: #e53935;
  --md-red-700: #d32f2f;
  --md-red-800: #c62828;
  --md-red-900: #b71c1c;
  --md-red-A100: #ff8a80;
  --md-red-A200: #ff5252;
  --md-red-A400: #ff1744;
  --md-red-A700: #d50000;

  --md-pink-50: #fce4ec;
  --md-pink-100: #f8bbd0;
  --md-pink-200: #f48fb1;
  --md-pink-300: #f06292;
  --md-pink-400: #ec407a;
  --md-pink-500: #e91e63;
  --md-pink-600: #d81b60;
  --md-pink-700: #c2185b;
  --md-pink-800: #ad1457;
  --md-pink-900: #880e4f;
  --md-pink-A100: #ff80ab;
  --md-pink-A200: #ff4081;
  --md-pink-A400: #f50057;
  --md-pink-A700: #c51162;

  --md-purple-50: #f3e5f5;
  --md-purple-100: #e1bee7;
  --md-purple-200: #ce93d8;
  --md-purple-300: #ba68c8;
  --md-purple-400: #ab47bc;
  --md-purple-500: #9c27b0;
  --md-purple-600: #8e24aa;
  --md-purple-700: #7b1fa2;
  --md-purple-800: #6a1b9a;
  --md-purple-900: #4a148c;
  --md-purple-A100: #ea80fc;
  --md-purple-A200: #e040fb;
  --md-purple-A400: #d500f9;
  --md-purple-A700: #aa00ff;

  --md-deep-purple-50: #ede7f6;
  --md-deep-purple-100: #d1c4e9;
  --md-deep-purple-200: #b39ddb;
  --md-deep-purple-300: #9575cd;
  --md-deep-purple-400: #7e57c2;
  --md-deep-purple-500: #673ab7;
  --md-deep-purple-600: #5e35b1;
  --md-deep-purple-700: #512da8;
  --md-deep-purple-800: #4527a0;
  --md-deep-purple-900: #311b92;
  --md-deep-purple-A100: #b388ff;
  --md-deep-purple-A200: #7c4dff;
  --md-deep-purple-A400: #651fff;
  --md-deep-purple-A700: #6200ea;

  --md-indigo-50: #e8eaf6;
  --md-indigo-100: #c5cae9;
  --md-indigo-200: #9fa8da;
  --md-indigo-300: #7986cb;
  --md-indigo-400: #5c6bc0;
  --md-indigo-500: #3f51b5;
  --md-indigo-600: #3949ab;
  --md-indigo-700: #303f9f;
  --md-indigo-800: #283593;
  --md-indigo-900: #1a237e;
  --md-indigo-A100: #8c9eff;
  --md-indigo-A200: #536dfe;
  --md-indigo-A400: #3d5afe;
  --md-indigo-A700: #304ffe;

  --md-blue-50: #e3f2fd;
  --md-blue-100: #bbdefb;
  --md-blue-200: #90caf9;
  --md-blue-300: #64b5f6;
  --md-blue-400: #42a5f5;
  --md-blue-500: #2196f3;
  --md-blue-600: #1e88e5;
  --md-blue-700: #1976d2;
  --md-blue-800: #1565c0;
  --md-blue-900: #0d47a1;
  --md-blue-A100: #82b1ff;
  --md-blue-A200: #448aff;
  --md-blue-A400: #2979ff;
  --md-blue-A700: #2962ff;

  --md-light-blue-50: #e1f5fe;
  --md-light-blue-100: #b3e5fc;
  --md-light-blue-200: #81d4fa;
  --md-light-blue-300: #4fc3f7;
  --md-light-blue-400: #29b6f6;
  --md-light-blue-500: #03a9f4;
  --md-light-blue-600: #039be5;
  --md-light-blue-700: #0288d1;
  --md-light-blue-800: #0277bd;
  --md-light-blue-900: #01579b;
  --md-light-blue-A100: #80d8ff;
  --md-light-blue-A200: #40c4ff;
  --md-light-blue-A400: #00b0ff;
  --md-light-blue-A700: #0091ea;

  --md-cyan-50: #e0f7fa;
  --md-cyan-100: #b2ebf2;
  --md-cyan-200: #80deea;
  --md-cyan-300: #4dd0e1;
  --md-cyan-400: #26c6da;
  --md-cyan-500: #00bcd4;
  --md-cyan-600: #00acc1;
  --md-cyan-700: #0097a7;
  --md-cyan-800: #00838f;
  --md-cyan-900: #006064;
  --md-cyan-A100: #84ffff;
  --md-cyan-A200: #18ffff;
  --md-cyan-A400: #00e5ff;
  --md-cyan-A700: #00b8d4;

  --md-teal-50: #e0f2f1;
  --md-teal-100: #b2dfdb;
  --md-teal-200: #80cbc4;
  --md-teal-300: #4db6ac;
  --md-teal-400: #26a69a;
  --md-teal-500: #009688;
  --md-teal-600: #00897b;
  --md-teal-700: #00796b;
  --md-teal-800: #00695c;
  --md-teal-900: #004d40;
  --md-teal-A100: #a7ffeb;
  --md-teal-A200: #64ffda;
  --md-teal-A400: #1de9b6;
  --md-teal-A700: #00bfa5;

  --md-green-50: #e8f5e9;
  --md-green-100: #c8e6c9;
  --md-green-200: #a5d6a7;
  --md-green-300: #81c784;
  --md-green-400: #66bb6a;
  --md-green-500: #4caf50;
  --md-green-600: #43a047;
  --md-green-700: #388e3c;
  --md-green-800: #2e7d32;
  --md-green-900: #1b5e20;
  --md-green-A100: #b9f6ca;
  --md-green-A200: #69f0ae;
  --md-green-A400: #00e676;
  --md-green-A700: #00c853;

  --md-light-green-50: #f1f8e9;
  --md-light-green-100: #dcedc8;
  --md-light-green-200: #c5e1a5;
  --md-light-green-300: #aed581;
  --md-light-green-400: #9ccc65;
  --md-light-green-500: #8bc34a;
  --md-light-green-600: #7cb342;
  --md-light-green-700: #689f38;
  --md-light-green-800: #558b2f;
  --md-light-green-900: #33691e;
  --md-light-green-A100: #ccff90;
  --md-light-green-A200: #b2ff59;
  --md-light-green-A400: #76ff03;
  --md-light-green-A700: #64dd17;

  --md-lime-50: #f9fbe7;
  --md-lime-100: #f0f4c3;
  --md-lime-200: #e6ee9c;
  --md-lime-300: #dce775;
  --md-lime-400: #d4e157;
  --md-lime-500: #cddc39;
  --md-lime-600: #c0ca33;
  --md-lime-700: #afb42b;
  --md-lime-800: #9e9d24;
  --md-lime-900: #827717;
  --md-lime-A100: #f4ff81;
  --md-lime-A200: #eeff41;
  --md-lime-A400: #c6ff00;
  --md-lime-A700: #aeea00;

  --md-yellow-50: #fffde7;
  --md-yellow-100: #fff9c4;
  --md-yellow-200: #fff59d;
  --md-yellow-300: #fff176;
  --md-yellow-400: #ffee58;
  --md-yellow-500: #ffeb3b;
  --md-yellow-600: #fdd835;
  --md-yellow-700: #fbc02d;
  --md-yellow-800: #f9a825;
  --md-yellow-900: #f57f17;
  --md-yellow-A100: #ffff8d;
  --md-yellow-A200: #ffff00;
  --md-yellow-A400: #ffea00;
  --md-yellow-A700: #ffd600;

  --md-amber-50: #fff8e1;
  --md-amber-100: #ffecb3;
  --md-amber-200: #ffe082;
  --md-amber-300: #ffd54f;
  --md-amber-400: #ffca28;
  --md-amber-500: #ffc107;
  --md-amber-600: #ffb300;
  --md-amber-700: #ffa000;
  --md-amber-800: #ff8f00;
  --md-amber-900: #ff6f00;
  --md-amber-A100: #ffe57f;
  --md-amber-A200: #ffd740;
  --md-amber-A400: #ffc400;
  --md-amber-A700: #ffab00;

  --md-orange-50: #fff3e0;
  --md-orange-100: #ffe0b2;
  --md-orange-200: #ffcc80;
  --md-orange-300: #ffb74d;
  --md-orange-400: #ffa726;
  --md-orange-500: #ff9800;
  --md-orange-600: #fb8c00;
  --md-orange-700: #f57c00;
  --md-orange-800: #ef6c00;
  --md-orange-900: #e65100;
  --md-orange-A100: #ffd180;
  --md-orange-A200: #ffab40;
  --md-orange-A400: #ff9100;
  --md-orange-A700: #ff6d00;

  --md-deep-orange-50: #fbe9e7;
  --md-deep-orange-100: #ffccbc;
  --md-deep-orange-200: #ffab91;
  --md-deep-orange-300: #ff8a65;
  --md-deep-orange-400: #ff7043;
  --md-deep-orange-500: #ff5722;
  --md-deep-orange-600: #f4511e;
  --md-deep-orange-700: #e64a19;
  --md-deep-orange-800: #d84315;
  --md-deep-orange-900: #bf360c;
  --md-deep-orange-A100: #ff9e80;
  --md-deep-orange-A200: #ff6e40;
  --md-deep-orange-A400: #ff3d00;
  --md-deep-orange-A700: #dd2c00;

  --md-brown-50: #efebe9;
  --md-brown-100: #d7ccc8;
  --md-brown-200: #bcaaa4;
  --md-brown-300: #a1887f;
  --md-brown-400: #8d6e63;
  --md-brown-500: #795548;
  --md-brown-600: #6d4c41;
  --md-brown-700: #5d4037;
  --md-brown-800: #4e342e;
  --md-brown-900: #3e2723;

  --md-grey-50: #fafafa;
  --md-grey-100: #f5f5f5;
  --md-grey-200: #eeeeee;
  --md-grey-300: #e0e0e0;
  --md-grey-400: #bdbdbd;
  --md-grey-500: #9e9e9e;
  --md-grey-600: #757575;
  --md-grey-700: #616161;
  --md-grey-800: #424242;
  --md-grey-900: #212121;

  --md-blue-grey-50: #eceff1;
  --md-blue-grey-100: #cfd8dc;
  --md-blue-grey-200: #b0bec5;
  --md-blue-grey-300: #90a4ae;
  --md-blue-grey-400: #78909c;
  --md-blue-grey-500: #607d8b;
  --md-blue-grey-600: #546e7a;
  --md-blue-grey-700: #455a64;
  --md-blue-grey-800: #37474f;
  --md-blue-grey-900: #263238;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Spinner {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-layout-color0);
  outline: none;
}

.jp-SpinnerContent {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: var(--jp-brand-color3);
  background: linear-gradient(
    to right,
    #f37626 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  animation: load3 1s infinite linear, fadeIn 1s;
}

.jp-SpinnerContent:before {
  width: 50%;
  height: 50%;
  background: #f37626;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}

.jp-SpinnerContent:after {
  background: var(--jp-layout-color0);
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes load3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

button.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: none;
  box-sizing: border-box;
  text-align: center;
  line-height: 32px;
  height: 32px;
  padding: 0px 12px;
  letter-spacing: 0.8px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input.jp-mod-styled {
  background: var(--jp-input-background);
  height: 28px;
  box-sizing: border-box;
  border: var(--jp-border-width) solid var(--jp-border-color1);
  padding-left: 7px;
  padding-right: 7px;
  font-size: var(--jp-ui-font-size2);
  color: var(--jp-ui-font-color0);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input.jp-mod-styled:focus {
  border: var(--jp-border-width) solid var(--md-blue-500);
  box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-select-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1px;
  background-color: var(--jp-layout-color1);
  height: 28px;
  box-sizing: border-box;
  margin-bottom: 12px;
}

.jp-select-wrapper.jp-mod-focused select.jp-mod-styled {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-input-active-background);
}

select.jp-mod-styled:hover {
  background-color: var(--jp-layout-color1);
  cursor: pointer;
  color: var(--jp-ui-font-color0);
  background-color: var(--jp-input-hover-background);
  box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.5);
}

select.jp-mod-styled {
  flex: 1 1 auto;
  height: 32px;
  width: 100%;
  font-size: var(--jp-ui-font-size2);
  background: var(--jp-input-background);
  color: var(--jp-ui-font-color0);
  padding: 0 25px 0 8px;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

:root {
  --jp-private-toolbar-height: calc(
    28px + var(--jp-border-width)
  ); /* leave 28px for content */
}

.jp-Toolbar {
  color: var(--jp-ui-font-color1);
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  box-shadow: var(--jp-toolbar-box-shadow);
  background: var(--jp-toolbar-background);
  min-height: var(--jp-toolbar-micro-height);
  padding: 2px;
  z-index: 1;
}

/* Toolbar items */

.jp-Toolbar > .jp-Toolbar-item.jp-Toolbar-spacer {
  flex-grow: 1;
  flex-shrink: 1;
}

.jp-Toolbar-item.jp-Toolbar-kernelStatus {
  display: inline-block;
  width: 32px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
}

.jp-Toolbar > .jp-Toolbar-item {
  flex: 0 0 auto;
  display: flex;
  padding-left: 1px;
  padding-right: 1px;
  font-size: var(--jp-ui-font-size1);
  line-height: var(--jp-private-toolbar-height);
  height: 100%;
}

/* Toolbar buttons */

/* This is the div we use to wrap the react component into a Widget */
div.jp-ToolbarButton {
  color: transparent;
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0px;
  margin: 0px;
}

button.jp-ToolbarButtonComponent {
  background: var(--jp-layout-color1);
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0px 6px;
  margin: 0px;
  height: 24px;
  border-radius: var(--jp-border-radius);
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  min-width: unset;
  min-height: unset;
}

button.jp-ToolbarButtonComponent:disabled {
  opacity: 0.4;
}

button.jp-ToolbarButtonComponent span {
  padding: 0px;
  flex: 0 0 auto;
}

button.jp-ToolbarButtonComponent .jp-ToolbarButtonComponent-label {
  font-size: var(--jp-ui-font-size1);
  line-height: 100%;
  padding-left: 2px;
  color: var(--jp-ui-font-color1);
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ body.p-mod-override-cursor *, /* </DEPRECATED> */
body.lm-mod-override-cursor * {
  cursor: inherit !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-JSONEditor {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.jp-JSONEditor-host {
  flex: 1 1 auto;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0px;
  background: var(--jp-layout-color0);
  min-height: 50px;
  padding: 1px;
}

.jp-JSONEditor.jp-mod-error .jp-JSONEditor-host {
  border-color: red;
  outline-color: red;
}

.jp-JSONEditor-header {
  display: flex;
  flex: 1 0 auto;
  padding: 0 0 0 12px;
}

.jp-JSONEditor-header label {
  flex: 0 0 auto;
}

.jp-JSONEditor-commitButton {
  height: 16px;
  width: 16px;
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: center;
}

.jp-JSONEditor-host.jp-mod-focused {
  background-color: var(--jp-input-active-background);
  border: 1px solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

.jp-Editor.jp-mod-dropTarget {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* BASICS */

.CodeMirror {
  /* Set height, width, borders, and global font properties here */
  font-family: monospace;
  height: 300px;
  color: black;
  direction: ltr;
}

/* PADDING */

.CodeMirror-lines {
  padding: 4px 0; /* Vertical padding around content */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  padding: 0 4px; /* Horizontal padding of content */
}

.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  background-color: white; /* The little square between H and V scrollbars */
}

/* GUTTER */

.CodeMirror-gutters {
  border-right: 1px solid #ddd;
  background-color: #f7f7f7;
  white-space: nowrap;
}
.CodeMirror-linenumbers {}
.CodeMirror-linenumber {
  padding: 0 3px 0 5px;
  min-width: 20px;
  text-align: right;
  color: #999;
  white-space: nowrap;
}

.CodeMirror-guttermarker { color: black; }
.CodeMirror-guttermarker-subtle { color: #999; }

/* CURSOR */

.CodeMirror-cursor {
  border-left: 1px solid black;
  border-right: none;
  width: 0;
}
/* Shown when moving in bi-directional text */
.CodeMirror div.CodeMirror-secondarycursor {
  border-left: 1px solid silver;
}
.cm-fat-cursor .CodeMirror-cursor {
  width: auto;
  border: 0 !important;
  background: #7e7;
}
.cm-fat-cursor div.CodeMirror-cursors {
  z-index: 1;
}
.cm-fat-cursor-mark {
  background-color: rgba(20, 255, 20, 0.5);
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
}
.cm-animate-fat-cursor {
  width: auto;
  border: 0;
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
  background-color: #7e7;
}
@-moz-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@-webkit-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}

/* Can style cursor different in overwrite (non-insert) mode */
.CodeMirror-overwrite .CodeMirror-cursor {}

.cm-tab { display: inline-block; text-decoration: inherit; }

.CodeMirror-rulers {
  position: absolute;
  left: 0; right: 0; top: -50px; bottom: 0;
  overflow: hidden;
}
.CodeMirror-ruler {
  border-left: 1px solid #ccc;
  top: 0; bottom: 0;
  position: absolute;
}

/* DEFAULT THEME */

.cm-s-default .cm-header {color: blue;}
.cm-s-default .cm-quote {color: #090;}
.cm-negative {color: #d44;}
.cm-positive {color: #292;}
.cm-header, .cm-strong {font-weight: bold;}
.cm-em {font-style: italic;}
.cm-link {text-decoration: underline;}
.cm-strikethrough {text-decoration: line-through;}

.cm-s-default .cm-keyword {color: #708;}
.cm-s-default .cm-atom {color: #219;}
.cm-s-default .cm-number {color: #164;}
.cm-s-default .cm-def {color: #00f;}
.cm-s-default .cm-variable,
.cm-s-default .cm-punctuation,
.cm-s-default .cm-property,
.cm-s-default .cm-operator {}
.cm-s-default .cm-variable-2 {color: #05a;}
.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}
.cm-s-default .cm-comment {color: #a50;}
.cm-s-default .cm-string {color: #a11;}
.cm-s-default .cm-string-2 {color: #f50;}
.cm-s-default .cm-meta {color: #555;}
.cm-s-default .cm-qualifier {color: #555;}
.cm-s-default .cm-builtin {color: #30a;}
.cm-s-default .cm-bracket {color: #997;}
.cm-s-default .cm-tag {color: #170;}
.cm-s-default .cm-attribute {color: #00c;}
.cm-s-default .cm-hr {color: #999;}
.cm-s-default .cm-link {color: #00c;}

.cm-s-default .cm-error {color: #f00;}
.cm-invalidchar {color: #f00;}

.CodeMirror-composing { border-bottom: 2px solid; }

/* Default styles for common addons */

div.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}
div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}
.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }
.CodeMirror-activeline-background {background: #e8f2ff;}

/* STOP */

/* The rest of this file contains styles related to the mechanics of
   the editor. You probably shouldn't touch them. */

.CodeMirror {
  position: relative;
  overflow: hidden;
  background: white;
}

.CodeMirror-scroll {
  overflow: scroll !important; /* Things will break if this is overridden */
  /* 30px is the magic margin used to hide the element's real scrollbars */
  /* See overflow: hidden in .CodeMirror */
  margin-bottom: -30px; margin-right: -30px;
  padding-bottom: 30px;
  height: 100%;
  outline: none; /* Prevent dragging from highlighting the element */
  position: relative;
}
.CodeMirror-sizer {
  position: relative;
  border-right: 30px solid transparent;
}

/* The fake, visible scrollbars. Used to force redraw during scrolling
   before actual scrolling happens, thus preventing shaking and
   flickering artifacts. */
.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  position: absolute;
  z-index: 6;
  display: none;
}
.CodeMirror-vscrollbar {
  right: 0; top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.CodeMirror-hscrollbar {
  bottom: 0; left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
}
.CodeMirror-scrollbar-filler {
  right: 0; bottom: 0;
}
.CodeMirror-gutter-filler {
  left: 0; bottom: 0;
}

.CodeMirror-gutters {
  position: absolute; left: 0; top: 0;
  min-height: 100%;
  z-index: 3;
}
.CodeMirror-gutter {
  white-space: normal;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: -30px;
}
.CodeMirror-gutter-wrapper {
  position: absolute;
  z-index: 4;
  background: none !important;
  border: none !important;
}
.CodeMirror-gutter-background {
  position: absolute;
  top: 0; bottom: 0;
  z-index: 4;
}
.CodeMirror-gutter-elt {
  position: absolute;
  cursor: default;
  z-index: 4;
}
.CodeMirror-gutter-wrapper ::selection { background-color: transparent }
.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }

.CodeMirror-lines {
  cursor: text;
  min-height: 1px; /* prevents collapsing before first draw */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  /* Reset some styles that the rest of the page might have set */
  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
  border-width: 0;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  white-space: pre;
  word-wrap: normal;
  line-height: inherit;
  color: inherit;
  z-index: 2;
  position: relative;
  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-variant-ligatures: contextual;
  font-variant-ligatures: contextual;
}
.CodeMirror-wrap pre.CodeMirror-line,
.CodeMirror-wrap pre.CodeMirror-line-like {
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
}

.CodeMirror-linebackground {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  z-index: 0;
}

.CodeMirror-linewidget {
  position: relative;
  z-index: 2;
  padding: 0.1px; /* Force widget margins to stay inside of the container */
}

.CodeMirror-widget {}

.CodeMirror-rtl pre { direction: rtl; }

.CodeMirror-code {
  outline: none;
}

/* Force content-box sizing for the elements where we expect it */
.CodeMirror-scroll,
.CodeMirror-sizer,
.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.CodeMirror-measure {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.CodeMirror-cursor {
  position: absolute;
  pointer-events: none;
}
.CodeMirror-measure pre { position: static; }

div.CodeMirror-cursors {
  visibility: hidden;
  position: relative;
  z-index: 3;
}
div.CodeMirror-dragcursors {
  visibility: visible;
}

.CodeMirror-focused div.CodeMirror-cursors {
  visibility: visible;
}

.CodeMirror-selected { background: #d9d9d9; }
.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }
.CodeMirror-crosshair { cursor: crosshair; }
.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }
.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }

.cm-searching {
  background-color: #ffa;
  background-color: rgba(255, 255, 0, .4);
}

/* Used to force a border model for a node */
.cm-force-border { padding-right: .1px; }

@media print {
  /* Hide the cursor when printing */
  .CodeMirror div.CodeMirror-cursors {
    visibility: hidden;
  }
}

/* See issue #2901 */
.cm-tab-wrap-hack:after { content: ''; }

/* Help users use markselection to safely style text background */
span.CodeMirror-selectedtext { background: none; }

.CodeMirror-dialog {
  position: absolute;
  left: 0; right: 0;
  background: inherit;
  z-index: 15;
  padding: .1em .8em;
  overflow: hidden;
  color: inherit;
}

.CodeMirror-dialog-top {
  border-bottom: 1px solid #eee;
  top: 0;
}

.CodeMirror-dialog-bottom {
  border-top: 1px solid #eee;
  bottom: 0;
}

.CodeMirror-dialog input {
  border: none;
  outline: none;
  background: transparent;
  width: 20em;
  color: inherit;
  font-family: monospace;
}

.CodeMirror-dialog button {
  font-size: 70%;
}

.CodeMirror-foldmarker {
  color: blue;
  text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;
  font-family: arial;
  line-height: .3;
  cursor: pointer;
}
.CodeMirror-foldgutter {
  width: .7em;
}
.CodeMirror-foldgutter-open,
.CodeMirror-foldgutter-folded {
  cursor: pointer;
}
.CodeMirror-foldgutter-open:after {
  content: "\\25BE";
}
.CodeMirror-foldgutter-folded:after {
  content: "\\25B8";
}

/*
  Name:       material
  Author:     Mattia Astorino (http://github.com/equinusocio)
  Website:    https://material-theme.site/
*/

.cm-s-material.CodeMirror {
  background-color: #263238;
  color: #EEFFFF;
}

.cm-s-material .CodeMirror-gutters {
  background: #263238;
  color: #546E7A;
  border: none;
}

.cm-s-material .CodeMirror-guttermarker,
.cm-s-material .CodeMirror-guttermarker-subtle,
.cm-s-material .CodeMirror-linenumber {
  color: #546E7A;
}

.cm-s-material .CodeMirror-cursor {
  border-left: 1px solid #FFCC00;
}

.cm-s-material div.CodeMirror-selected {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material.CodeMirror-focused div.CodeMirror-selected {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material .CodeMirror-line::selection,
.cm-s-material .CodeMirror-line>span::selection,
.cm-s-material .CodeMirror-line>span>span::selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material .CodeMirror-line::-moz-selection,
.cm-s-material .CodeMirror-line>span::-moz-selection,
.cm-s-material .CodeMirror-line>span>span::-moz-selection {
  background: rgba(128, 203, 196, 0.2);
}

.cm-s-material .CodeMirror-activeline-background {
  background: rgba(0, 0, 0, 0.5);
}

.cm-s-material .cm-keyword {
  color: #C792EA;
}

.cm-s-material .cm-operator {
  color: #89DDFF;
}

.cm-s-material .cm-variable-2 {
  color: #EEFFFF;
}

.cm-s-material .cm-variable-3,
.cm-s-material .cm-type {
  color: #f07178;
}

.cm-s-material .cm-builtin {
  color: #FFCB6B;
}

.cm-s-material .cm-atom {
  color: #F78C6C;
}

.cm-s-material .cm-number {
  color: #FF5370;
}

.cm-s-material .cm-def {
  color: #82AAFF;
}

.cm-s-material .cm-string {
  color: #C3E88D;
}

.cm-s-material .cm-string-2 {
  color: #f07178;
}

.cm-s-material .cm-comment {
  color: #546E7A;
}

.cm-s-material .cm-variable {
  color: #f07178;
}

.cm-s-material .cm-tag {
  color: #FF5370;
}

.cm-s-material .cm-meta {
  color: #FFCB6B;
}

.cm-s-material .cm-attribute {
  color: #C792EA;
}

.cm-s-material .cm-property {
  color: #C792EA;
}

.cm-s-material .cm-qualifier {
  color: #DECB6B;
}

.cm-s-material .cm-variable-3,
.cm-s-material .cm-type {
  color: #DECB6B;
}


.cm-s-material .cm-error {
  color: rgba(255, 255, 255, 1.0);
  background-color: #FF5370;
}

.cm-s-material .CodeMirror-matchingbracket {
  text-decoration: underline;
  color: white !important;
}
/**
 * "
 *  Using Zenburn color palette from the Emacs Zenburn Theme
 *  https://github.com/bbatsov/zenburn-emacs/blob/master/zenburn-theme.el
 *
 *  Also using parts of https://github.com/xavi/coderay-lighttable-theme
 * "
 * From: https://github.com/wisenomad/zenburn-lighttable-theme/blob/master/zenburn.css
 */

.cm-s-zenburn .CodeMirror-gutters { background: #3f3f3f !important; }
.cm-s-zenburn .CodeMirror-foldgutter-open, .CodeMirror-foldgutter-folded { color: #999; }
.cm-s-zenburn .CodeMirror-cursor { border-left: 1px solid white; }
.cm-s-zenburn { background-color: #3f3f3f; color: #dcdccc; }
.cm-s-zenburn span.cm-builtin { color: #dcdccc; font-weight: bold; }
.cm-s-zenburn span.cm-comment { color: #7f9f7f; }
.cm-s-zenburn span.cm-keyword { color: #f0dfaf; font-weight: bold; }
.cm-s-zenburn span.cm-atom { color: #bfebbf; }
.cm-s-zenburn span.cm-def { color: #dcdccc; }
.cm-s-zenburn span.cm-variable { color: #dfaf8f; }
.cm-s-zenburn span.cm-variable-2 { color: #dcdccc; }
.cm-s-zenburn span.cm-string { color: #cc9393; }
.cm-s-zenburn span.cm-string-2 { color: #cc9393; }
.cm-s-zenburn span.cm-number { color: #dcdccc; }
.cm-s-zenburn span.cm-tag { color: #93e0e3; }
.cm-s-zenburn span.cm-property { color: #dfaf8f; }
.cm-s-zenburn span.cm-attribute { color: #dfaf8f; }
.cm-s-zenburn span.cm-qualifier { color: #7cb8bb; }
.cm-s-zenburn span.cm-meta { color: #f0dfaf; }
.cm-s-zenburn span.cm-header { color: #f0efd0; }
.cm-s-zenburn span.cm-operator { color: #f0efd0; }
.cm-s-zenburn span.CodeMirror-matchingbracket { box-sizing: border-box; background: transparent; border-bottom: 1px solid; }
.cm-s-zenburn span.CodeMirror-nonmatchingbracket { border-bottom: 1px solid; background: none; }
.cm-s-zenburn .CodeMirror-activeline { background: #000000; }
.cm-s-zenburn .CodeMirror-activeline-background { background: #000000; }
.cm-s-zenburn div.CodeMirror-selected { background: #545454; }
.cm-s-zenburn .CodeMirror-focused div.CodeMirror-selected { background: #4f4f4f; }

.cm-s-abcdef.CodeMirror { background: #0f0f0f; color: #defdef; }
.cm-s-abcdef div.CodeMirror-selected { background: #515151; }
.cm-s-abcdef .CodeMirror-line::selection, .cm-s-abcdef .CodeMirror-line > span::selection, .cm-s-abcdef .CodeMirror-line > span > span::selection { background: rgba(56, 56, 56, 0.99); }
.cm-s-abcdef .CodeMirror-line::-moz-selection, .cm-s-abcdef .CodeMirror-line > span::-moz-selection, .cm-s-abcdef .CodeMirror-line > span > span::-moz-selection { background: rgba(56, 56, 56, 0.99); }
.cm-s-abcdef .CodeMirror-gutters { background: #555; border-right: 2px solid #314151; }
.cm-s-abcdef .CodeMirror-guttermarker { color: #222; }
.cm-s-abcdef .CodeMirror-guttermarker-subtle { color: azure; }
.cm-s-abcdef .CodeMirror-linenumber { color: #FFFFFF; }
.cm-s-abcdef .CodeMirror-cursor { border-left: 1px solid #00FF00; }

.cm-s-abcdef span.cm-keyword { color: darkgoldenrod; font-weight: bold; }
.cm-s-abcdef span.cm-atom { color: #77F; }
.cm-s-abcdef span.cm-number { color: violet; }
.cm-s-abcdef span.cm-def { color: #fffabc; }
.cm-s-abcdef span.cm-variable { color: #abcdef; }
.cm-s-abcdef span.cm-variable-2 { color: #cacbcc; }
.cm-s-abcdef span.cm-variable-3, .cm-s-abcdef span.cm-type { color: #def; }
.cm-s-abcdef span.cm-property { color: #fedcba; }
.cm-s-abcdef span.cm-operator { color: #ff0; }
.cm-s-abcdef span.cm-comment { color: #7a7b7c; font-style: italic;}
.cm-s-abcdef span.cm-string { color: #2b4; }
.cm-s-abcdef span.cm-meta { color: #C9F; }
.cm-s-abcdef span.cm-qualifier { color: #FFF700; }
.cm-s-abcdef span.cm-builtin { color: #30aabc; }
.cm-s-abcdef span.cm-bracket { color: #8a8a8a; }
.cm-s-abcdef span.cm-tag { color: #FFDD44; }
.cm-s-abcdef span.cm-attribute { color: #DDFF00; }
.cm-s-abcdef span.cm-error { color: #FF0000; }
.cm-s-abcdef span.cm-header { color: aquamarine; font-weight: bold; }
.cm-s-abcdef span.cm-link { color: blueviolet; }

.cm-s-abcdef .CodeMirror-activeline-background { background: #314151; }

/*

    Name:       Base16 Default Light
    Author:     Chris Kempson (http://chriskempson.com)

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-base16-light.CodeMirror { background: #f5f5f5; color: #202020; }
.cm-s-base16-light div.CodeMirror-selected { background: #e0e0e0; }
.cm-s-base16-light .CodeMirror-line::selection, .cm-s-base16-light .CodeMirror-line > span::selection, .cm-s-base16-light .CodeMirror-line > span > span::selection { background: #e0e0e0; }
.cm-s-base16-light .CodeMirror-line::-moz-selection, .cm-s-base16-light .CodeMirror-line > span::-moz-selection, .cm-s-base16-light .CodeMirror-line > span > span::-moz-selection { background: #e0e0e0; }
.cm-s-base16-light .CodeMirror-gutters { background: #f5f5f5; border-right: 0px; }
.cm-s-base16-light .CodeMirror-guttermarker { color: #ac4142; }
.cm-s-base16-light .CodeMirror-guttermarker-subtle { color: #b0b0b0; }
.cm-s-base16-light .CodeMirror-linenumber { color: #b0b0b0; }
.cm-s-base16-light .CodeMirror-cursor { border-left: 1px solid #505050; }

.cm-s-base16-light span.cm-comment { color: #8f5536; }
.cm-s-base16-light span.cm-atom { color: #aa759f; }
.cm-s-base16-light span.cm-number { color: #aa759f; }

.cm-s-base16-light span.cm-property, .cm-s-base16-light span.cm-attribute { color: #90a959; }
.cm-s-base16-light span.cm-keyword { color: #ac4142; }
.cm-s-base16-light span.cm-string { color: #f4bf75; }

.cm-s-base16-light span.cm-variable { color: #90a959; }
.cm-s-base16-light span.cm-variable-2 { color: #6a9fb5; }
.cm-s-base16-light span.cm-def { color: #d28445; }
.cm-s-base16-light span.cm-bracket { color: #202020; }
.cm-s-base16-light span.cm-tag { color: #ac4142; }
.cm-s-base16-light span.cm-link { color: #aa759f; }
.cm-s-base16-light span.cm-error { background: #ac4142; color: #505050; }

.cm-s-base16-light .CodeMirror-activeline-background { background: #DDDCDC; }
.cm-s-base16-light .CodeMirror-matchingbracket { color: #f5f5f5 !important; background-color: #6A9FB5 !important}

/*

    Name:       Base16 Default Dark
    Author:     Chris Kempson (http://chriskempson.com)

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-base16-dark.CodeMirror { background: #151515; color: #e0e0e0; }
.cm-s-base16-dark div.CodeMirror-selected { background: #303030; }
.cm-s-base16-dark .CodeMirror-line::selection, .cm-s-base16-dark .CodeMirror-line > span::selection, .cm-s-base16-dark .CodeMirror-line > span > span::selection { background: rgba(48, 48, 48, .99); }
.cm-s-base16-dark .CodeMirror-line::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span::-moz-selection, .cm-s-base16-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(48, 48, 48, .99); }
.cm-s-base16-dark .CodeMirror-gutters { background: #151515; border-right: 0px; }
.cm-s-base16-dark .CodeMirror-guttermarker { color: #ac4142; }
.cm-s-base16-dark .CodeMirror-guttermarker-subtle { color: #505050; }
.cm-s-base16-dark .CodeMirror-linenumber { color: #505050; }
.cm-s-base16-dark .CodeMirror-cursor { border-left: 1px solid #b0b0b0; }

.cm-s-base16-dark span.cm-comment { color: #8f5536; }
.cm-s-base16-dark span.cm-atom { color: #aa759f; }
.cm-s-base16-dark span.cm-number { color: #aa759f; }

.cm-s-base16-dark span.cm-property, .cm-s-base16-dark span.cm-attribute { color: #90a959; }
.cm-s-base16-dark span.cm-keyword { color: #ac4142; }
.cm-s-base16-dark span.cm-string { color: #f4bf75; }

.cm-s-base16-dark span.cm-variable { color: #90a959; }
.cm-s-base16-dark span.cm-variable-2 { color: #6a9fb5; }
.cm-s-base16-dark span.cm-def { color: #d28445; }
.cm-s-base16-dark span.cm-bracket { color: #e0e0e0; }
.cm-s-base16-dark span.cm-tag { color: #ac4142; }
.cm-s-base16-dark span.cm-link { color: #aa759f; }
.cm-s-base16-dark span.cm-error { background: #ac4142; color: #b0b0b0; }

.cm-s-base16-dark .CodeMirror-activeline-background { background: #202020; }
.cm-s-base16-dark .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }

/*

    Name:       dracula
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)

*/


.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {
  background-color: #282a36 !important;
  color: #f8f8f2 !important;
  border: none;
}
.cm-s-dracula .CodeMirror-gutters { color: #282a36; }
.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }
.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }
.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }
.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-dracula span.cm-comment { color: #6272a4; }
.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }
.cm-s-dracula span.cm-number { color: #bd93f9; }
.cm-s-dracula span.cm-variable { color: #50fa7b; }
.cm-s-dracula span.cm-variable-2 { color: white; }
.cm-s-dracula span.cm-def { color: #50fa7b; }
.cm-s-dracula span.cm-operator { color: #ff79c6; }
.cm-s-dracula span.cm-keyword { color: #ff79c6; }
.cm-s-dracula span.cm-atom { color: #bd93f9; }
.cm-s-dracula span.cm-meta { color: #f8f8f2; }
.cm-s-dracula span.cm-tag { color: #ff79c6; }
.cm-s-dracula span.cm-attribute { color: #50fa7b; }
.cm-s-dracula span.cm-qualifier { color: #50fa7b; }
.cm-s-dracula span.cm-property { color: #66d9ef; }
.cm-s-dracula span.cm-builtin { color: #50fa7b; }
.cm-s-dracula span.cm-variable-3, .cm-s-dracula span.cm-type { color: #ffb86c; }

.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }
.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }

/*

    Name:       Hopscotch
    Author:     Jan T. Sott

    CodeMirror template by Jan T. Sott (https://github.com/idleberg/base16-codemirror)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

*/

.cm-s-hopscotch.CodeMirror {background: #322931; color: #d5d3d5;}
.cm-s-hopscotch div.CodeMirror-selected {background: #433b42 !important;}
.cm-s-hopscotch .CodeMirror-gutters {background: #322931; border-right: 0px;}
.cm-s-hopscotch .CodeMirror-linenumber {color: #797379;}
.cm-s-hopscotch .CodeMirror-cursor {border-left: 1px solid #989498 !important;}

.cm-s-hopscotch span.cm-comment {color: #b33508;}
.cm-s-hopscotch span.cm-atom {color: #c85e7c;}
.cm-s-hopscotch span.cm-number {color: #c85e7c;}

.cm-s-hopscotch span.cm-property, .cm-s-hopscotch span.cm-attribute {color: #8fc13e;}
.cm-s-hopscotch span.cm-keyword {color: #dd464c;}
.cm-s-hopscotch span.cm-string {color: #fdcc59;}

.cm-s-hopscotch span.cm-variable {color: #8fc13e;}
.cm-s-hopscotch span.cm-variable-2 {color: #1290bf;}
.cm-s-hopscotch span.cm-def {color: #fd8b19;}
.cm-s-hopscotch span.cm-error {background: #dd464c; color: #989498;}
.cm-s-hopscotch span.cm-bracket {color: #d5d3d5;}
.cm-s-hopscotch span.cm-tag {color: #dd464c;}
.cm-s-hopscotch span.cm-link {color: #c85e7c;}

.cm-s-hopscotch .CodeMirror-matchingbracket { text-decoration: underline; color: white !important;}
.cm-s-hopscotch .CodeMirror-activeline-background { background: #302020; }

/****************************************************************/
/*   Based on mbonaci's Brackets mbo theme                      */
/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */
/*   Create your own: http://tmtheme-editor.herokuapp.com       */
/****************************************************************/

.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }
.cm-s-mbo div.CodeMirror-selected { background: #716C62; }
.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }
.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }
.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }
.cm-s-mbo .CodeMirror-guttermarker { color: white; }
.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }
.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }
.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }

.cm-s-mbo span.cm-comment { color: #95958a; }
.cm-s-mbo span.cm-atom { color: #00a8c6; }
.cm-s-mbo span.cm-number { color: #00a8c6; }

.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }
.cm-s-mbo span.cm-keyword { color: #ffb928; }
.cm-s-mbo span.cm-string { color: #ffcf6c; }
.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }

.cm-s-mbo span.cm-variable { color: #ffffec; }
.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }
.cm-s-mbo span.cm-def { color: #ffffec; }
.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }
.cm-s-mbo span.cm-tag { color: #9ddfe9; }
.cm-s-mbo span.cm-link { color: #f54b07; }
.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }
.cm-s-mbo span.cm-qualifier { color: #ffffec; }

.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }
.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }
.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }

/*
  MDN-LIKE Theme - Mozilla
  Ported to CodeMirror by Peter Kroon <plakroon@gmail.com>
  Report bugs/issues here: https://github.com/codemirror/CodeMirror/issues
  GitHub: @peterkroon

  The mdn-like theme is inspired on the displayed code examples at: https://developer.mozilla.org/en-US/docs/Web/CSS/animation

*/
.cm-s-mdn-like.CodeMirror { color: #999; background-color: #fff; }
.cm-s-mdn-like div.CodeMirror-selected { background: #cfc; }
.cm-s-mdn-like .CodeMirror-line::selection, .cm-s-mdn-like .CodeMirror-line > span::selection, .cm-s-mdn-like .CodeMirror-line > span > span::selection { background: #cfc; }
.cm-s-mdn-like .CodeMirror-line::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span::-moz-selection, .cm-s-mdn-like .CodeMirror-line > span > span::-moz-selection { background: #cfc; }

.cm-s-mdn-like .CodeMirror-gutters { background: #f8f8f8; border-left: 6px solid rgba(0,83,159,0.65); color: #333; }
.cm-s-mdn-like .CodeMirror-linenumber { color: #aaa; padding-left: 8px; }
.cm-s-mdn-like .CodeMirror-cursor { border-left: 2px solid #222; }

.cm-s-mdn-like .cm-keyword { color: #6262FF; }
.cm-s-mdn-like .cm-atom { color: #F90; }
.cm-s-mdn-like .cm-number { color:  #ca7841; }
.cm-s-mdn-like .cm-def { color: #8DA6CE; }
.cm-s-mdn-like span.cm-variable-2, .cm-s-mdn-like span.cm-tag { color: #690; }
.cm-s-mdn-like span.cm-variable-3, .cm-s-mdn-like span.cm-def, .cm-s-mdn-like span.cm-type { color: #07a; }

.cm-s-mdn-like .cm-variable { color: #07a; }
.cm-s-mdn-like .cm-property { color: #905; }
.cm-s-mdn-like .cm-qualifier { color: #690; }

.cm-s-mdn-like .cm-operator { color: #cda869; }
.cm-s-mdn-like .cm-comment { color:#777; font-weight:normal; }
.cm-s-mdn-like .cm-string { color:#07a; font-style:italic; }
.cm-s-mdn-like .cm-string-2 { color:#bd6b18; } /*?*/
.cm-s-mdn-like .cm-meta { color: #000; } /*?*/
.cm-s-mdn-like .cm-builtin { color: #9B7536; } /*?*/
.cm-s-mdn-like .cm-tag { color: #997643; }
.cm-s-mdn-like .cm-attribute { color: #d6bb6d; } /*?*/
.cm-s-mdn-like .cm-header { color: #FF6400; }
.cm-s-mdn-like .cm-hr { color: #AEAEAE; }
.cm-s-mdn-like .cm-link { color:#ad9361; font-style:italic; text-decoration:none; }
.cm-s-mdn-like .cm-error { border-bottom: 1px solid red; }

div.cm-s-mdn-like .CodeMirror-activeline-background { background: #efefff; }
div.cm-s-mdn-like span.CodeMirror-matchingbracket { outline:1px solid grey; color: inherit; }

.cm-s-mdn-like.CodeMirror { background-image: url(data:image/png;base64,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); }

/*

    Name:       seti
    Author:     Michael Kaminsky (http://github.com/mkaminsky11)

    Original seti color scheme by Jesse Weed (https://github.com/jesseweed/seti-syntax)

*/


.cm-s-seti.CodeMirror {
  background-color: #151718 !important;
  color: #CFD2D1 !important;
  border: none;
}
.cm-s-seti .CodeMirror-gutters {
  color: #404b53;
  background-color: #0E1112;
  border: none;
}
.cm-s-seti .CodeMirror-cursor { border-left: solid thin #f8f8f0; }
.cm-s-seti .CodeMirror-linenumber { color: #6D8A88; }
.cm-s-seti.CodeMirror-focused div.CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }
.cm-s-seti .CodeMirror-line::selection, .cm-s-seti .CodeMirror-line > span::selection, .cm-s-seti .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-seti .CodeMirror-line::-moz-selection, .cm-s-seti .CodeMirror-line > span::-moz-selection, .cm-s-seti .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }
.cm-s-seti span.cm-comment { color: #41535b; }
.cm-s-seti span.cm-string, .cm-s-seti span.cm-string-2 { color: #55b5db; }
.cm-s-seti span.cm-number { color: #cd3f45; }
.cm-s-seti span.cm-variable { color: #55b5db; }
.cm-s-seti span.cm-variable-2 { color: #a074c4; }
.cm-s-seti span.cm-def { color: #55b5db; }
.cm-s-seti span.cm-keyword { color: #ff79c6; }
.cm-s-seti span.cm-operator { color: #9fca56; }
.cm-s-seti span.cm-keyword { color: #e6cd69; }
.cm-s-seti span.cm-atom { color: #cd3f45; }
.cm-s-seti span.cm-meta { color: #55b5db; }
.cm-s-seti span.cm-tag { color: #55b5db; }
.cm-s-seti span.cm-attribute { color: #9fca56; }
.cm-s-seti span.cm-qualifier { color: #9fca56; }
.cm-s-seti span.cm-property { color: #a074c4; }
.cm-s-seti span.cm-variable-3, .cm-s-seti span.cm-type { color: #9fca56; }
.cm-s-seti span.cm-builtin { color: #9fca56; }
.cm-s-seti .CodeMirror-activeline-background { background: #101213; }
.cm-s-seti .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }

/*
Solarized theme for code-mirror
http://ethanschoonover.com/solarized
*/

/*
Solarized color palette
http://ethanschoonover.com/solarized/img/solarized-palette.png
*/

.solarized.base03 { color: #002b36; }
.solarized.base02 { color: #073642; }
.solarized.base01 { color: #586e75; }
.solarized.base00 { color: #657b83; }
.solarized.base0 { color: #839496; }
.solarized.base1 { color: #93a1a1; }
.solarized.base2 { color: #eee8d5; }
.solarized.base3  { color: #fdf6e3; }
.solarized.solar-yellow  { color: #b58900; }
.solarized.solar-orange  { color: #cb4b16; }
.solarized.solar-red { color: #dc322f; }
.solarized.solar-magenta { color: #d33682; }
.solarized.solar-violet  { color: #6c71c4; }
.solarized.solar-blue { color: #268bd2; }
.solarized.solar-cyan { color: #2aa198; }
.solarized.solar-green { color: #859900; }

/* Color scheme for code-mirror */

.cm-s-solarized {
  line-height: 1.45em;
  color-profile: sRGB;
  rendering-intent: auto;
}
.cm-s-solarized.cm-s-dark {
  color: #839496;
  background-color: #002b36;
  text-shadow: #002b36 0 1px;
}
.cm-s-solarized.cm-s-light {
  background-color: #fdf6e3;
  color: #657b83;
  text-shadow: #eee8d5 0 1px;
}

.cm-s-solarized .CodeMirror-widget {
  text-shadow: none;
}

.cm-s-solarized .cm-header { color: #586e75; }
.cm-s-solarized .cm-quote { color: #93a1a1; }

.cm-s-solarized .cm-keyword { color: #cb4b16; }
.cm-s-solarized .cm-atom { color: #d33682; }
.cm-s-solarized .cm-number { color: #d33682; }
.cm-s-solarized .cm-def { color: #2aa198; }

.cm-s-solarized .cm-variable { color: #839496; }
.cm-s-solarized .cm-variable-2 { color: #b58900; }
.cm-s-solarized .cm-variable-3, .cm-s-solarized .cm-type { color: #6c71c4; }

.cm-s-solarized .cm-property { color: #2aa198; }
.cm-s-solarized .cm-operator { color: #6c71c4; }

.cm-s-solarized .cm-comment { color: #586e75; font-style:italic; }

.cm-s-solarized .cm-string { color: #859900; }
.cm-s-solarized .cm-string-2 { color: #b58900; }

.cm-s-solarized .cm-meta { color: #859900; }
.cm-s-solarized .cm-qualifier { color: #b58900; }
.cm-s-solarized .cm-builtin { color: #d33682; }
.cm-s-solarized .cm-bracket { color: #cb4b16; }
.cm-s-solarized .CodeMirror-matchingbracket { color: #859900; }
.cm-s-solarized .CodeMirror-nonmatchingbracket { color: #dc322f; }
.cm-s-solarized .cm-tag { color: #93a1a1; }
.cm-s-solarized .cm-attribute { color: #2aa198; }
.cm-s-solarized .cm-hr {
  color: transparent;
  border-top: 1px solid #586e75;
  display: block;
}
.cm-s-solarized .cm-link { color: #93a1a1; cursor: pointer; }
.cm-s-solarized .cm-special { color: #6c71c4; }
.cm-s-solarized .cm-em {
  color: #999;
  text-decoration: underline;
  text-decoration-style: dotted;
}
.cm-s-solarized .cm-error,
.cm-s-solarized .cm-invalidchar {
  color: #586e75;
  border-bottom: 1px dotted #dc322f;
}

.cm-s-solarized.cm-s-dark div.CodeMirror-selected { background: #073642; }
.cm-s-solarized.cm-s-dark.CodeMirror ::selection { background: rgba(7, 54, 66, 0.99); }
.cm-s-solarized.cm-s-dark .CodeMirror-line::-moz-selection, .cm-s-dark .CodeMirror-line > span::-moz-selection, .cm-s-dark .CodeMirror-line > span > span::-moz-selection { background: rgba(7, 54, 66, 0.99); }

.cm-s-solarized.cm-s-light div.CodeMirror-selected { background: #eee8d5; }
.cm-s-solarized.cm-s-light .CodeMirror-line::selection, .cm-s-light .CodeMirror-line > span::selection, .cm-s-light .CodeMirror-line > span > span::selection { background: #eee8d5; }
.cm-s-solarized.cm-s-light .CodeMirror-line::-moz-selection, .cm-s-ligh .CodeMirror-line > span::-moz-selection, .cm-s-ligh .CodeMirror-line > span > span::-moz-selection { background: #eee8d5; }

/* Editor styling */



/* Little shadow on the view-port of the buffer view */
.cm-s-solarized.CodeMirror {
  -moz-box-shadow: inset 7px 0 12px -6px #000;
  -webkit-box-shadow: inset 7px 0 12px -6px #000;
  box-shadow: inset 7px 0 12px -6px #000;
}

/* Remove gutter border */
.cm-s-solarized .CodeMirror-gutters {
  border-right: 0;
}

/* Gutter colors and line number styling based of color scheme (dark / light) */

/* Dark */
.cm-s-solarized.cm-s-dark .CodeMirror-gutters {
  background-color: #073642;
}

.cm-s-solarized.cm-s-dark .CodeMirror-linenumber {
  color: #586e75;
  text-shadow: #021014 0 -1px;
}

/* Light */
.cm-s-solarized.cm-s-light .CodeMirror-gutters {
  background-color: #eee8d5;
}

.cm-s-solarized.cm-s-light .CodeMirror-linenumber {
  color: #839496;
}

/* Common */
.cm-s-solarized .CodeMirror-linenumber {
  padding: 0 5px;
}
.cm-s-solarized .CodeMirror-guttermarker-subtle { color: #586e75; }
.cm-s-solarized.cm-s-dark .CodeMirror-guttermarker { color: #ddd; }
.cm-s-solarized.cm-s-light .CodeMirror-guttermarker { color: #cb4b16; }

.cm-s-solarized .CodeMirror-gutter .CodeMirror-gutter-text {
  color: #586e75;
}

/* Cursor */
.cm-s-solarized .CodeMirror-cursor { border-left: 1px solid #819090; }

/* Fat cursor */
.cm-s-solarized.cm-s-light.cm-fat-cursor .CodeMirror-cursor { background: #77ee77; }
.cm-s-solarized.cm-s-light .cm-animate-fat-cursor { background-color: #77ee77; }
.cm-s-solarized.cm-s-dark.cm-fat-cursor .CodeMirror-cursor { background: #586e75; }
.cm-s-solarized.cm-s-dark .cm-animate-fat-cursor { background-color: #586e75; }

/* Active line */
.cm-s-solarized.cm-s-dark .CodeMirror-activeline-background {
  background: rgba(255, 255, 255, 0.06);
}
.cm-s-solarized.cm-s-light .CodeMirror-activeline-background {
  background: rgba(0, 0, 0, 0.06);
}

.cm-s-the-matrix.CodeMirror { background: #000000; color: #00FF00; }
.cm-s-the-matrix div.CodeMirror-selected { background: #2D2D2D; }
.cm-s-the-matrix .CodeMirror-line::selection, .cm-s-the-matrix .CodeMirror-line > span::selection, .cm-s-the-matrix .CodeMirror-line > span > span::selection { background: rgba(45, 45, 45, 0.99); }
.cm-s-the-matrix .CodeMirror-line::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span::-moz-selection, .cm-s-the-matrix .CodeMirror-line > span > span::-moz-selection { background: rgba(45, 45, 45, 0.99); }
.cm-s-the-matrix .CodeMirror-gutters { background: #060; border-right: 2px solid #00FF00; }
.cm-s-the-matrix .CodeMirror-guttermarker { color: #0f0; }
.cm-s-the-matrix .CodeMirror-guttermarker-subtle { color: white; }
.cm-s-the-matrix .CodeMirror-linenumber { color: #FFFFFF; }
.cm-s-the-matrix .CodeMirror-cursor { border-left: 1px solid #00FF00; }

.cm-s-the-matrix span.cm-keyword { color: #008803; font-weight: bold; }
.cm-s-the-matrix span.cm-atom { color: #3FF; }
.cm-s-the-matrix span.cm-number { color: #FFB94F; }
.cm-s-the-matrix span.cm-def { color: #99C; }
.cm-s-the-matrix span.cm-variable { color: #F6C; }
.cm-s-the-matrix span.cm-variable-2 { color: #C6F; }
.cm-s-the-matrix span.cm-variable-3, .cm-s-the-matrix span.cm-type { color: #96F; }
.cm-s-the-matrix span.cm-property { color: #62FFA0; }
.cm-s-the-matrix span.cm-operator { color: #999; }
.cm-s-the-matrix span.cm-comment { color: #CCCCCC; }
.cm-s-the-matrix span.cm-string { color: #39C; }
.cm-s-the-matrix span.cm-meta { color: #C9F; }
.cm-s-the-matrix span.cm-qualifier { color: #FFF700; }
.cm-s-the-matrix span.cm-builtin { color: #30a; }
.cm-s-the-matrix span.cm-bracket { color: #cc7; }
.cm-s-the-matrix span.cm-tag { color: #FFBD40; }
.cm-s-the-matrix span.cm-attribute { color: #FFF700; }
.cm-s-the-matrix span.cm-error { color: #FF0000; }

.cm-s-the-matrix .CodeMirror-activeline-background { background: #040; }

/*
Copyright (C) 2011 by MarkLogic Corporation
Author: Mike Brevoort <mike@brevoort.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }
.cm-s-xq-light span.cm-atom { color: #6C8CD5; }
.cm-s-xq-light span.cm-number { color: #164; }
.cm-s-xq-light span.cm-def { text-decoration:underline; }
.cm-s-xq-light span.cm-variable { color: black; }
.cm-s-xq-light span.cm-variable-2 { color:black; }
.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }
.cm-s-xq-light span.cm-property {}
.cm-s-xq-light span.cm-operator {}
.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }
.cm-s-xq-light span.cm-string { color: red; }
.cm-s-xq-light span.cm-meta { color: yellow; }
.cm-s-xq-light span.cm-qualifier { color: grey; }
.cm-s-xq-light span.cm-builtin { color: #7EA656; }
.cm-s-xq-light span.cm-bracket { color: #cc7; }
.cm-s-xq-light span.cm-tag { color: #3F7F7F; }
.cm-s-xq-light span.cm-attribute { color: #7F007F; }
.cm-s-xq-light span.cm-error { color: #f00; }

.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }
.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.CodeMirror {
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  border: 0;
  border-radius: 0;
  height: auto;
  /* Changed to auto to autogrow */
}

.CodeMirror pre {
  padding: 0 var(--jp-code-padding);
}

.jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-dialog {
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
}

/* This causes https://github.com/jupyter/jupyterlab/issues/522 */
/* May not cause it not because we changed it! */
.CodeMirror-lines {
  padding: var(--jp-code-padding) 0;
}

.CodeMirror-linenumber {
  padding: 0 8px;
}

.jp-CodeMirrorEditor-static {
  margin: var(--jp-code-padding);
}

.jp-CodeMirrorEditor,
.jp-CodeMirrorEditor-static {
  cursor: text;
}

.jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
  border-left: var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color);
}

/* When zoomed out 67% and 33% on a screen of 1440 width x 900 height */
@media screen and (min-width: 2138px) and (max-width: 4319px) {
  .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
    border-left: var(--jp-code-cursor-width1) solid
      var(--jp-editor-cursor-color);
  }
}

/* When zoomed out less than 33% */
@media screen and (min-width: 4320px) {
  .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
    border-left: var(--jp-code-cursor-width2) solid
      var(--jp-editor-cursor-color);
  }
}

.CodeMirror.jp-mod-readOnly .CodeMirror-cursor {
  display: none;
}

.CodeMirror-gutters {
  border-right: 1px solid var(--jp-border-color2);
  background-color: var(--jp-layout-color0);
}

.jp-CollaboratorCursor {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: none;
  border-bottom: 3px solid;
  background-clip: content-box;
  margin-left: -5px;
  margin-right: -5px;
}

.CodeMirror-selectedtext.cm-searching {
  background-color: var(--jp-search-selected-match-background-color) !important;
  color: var(--jp-search-selected-match-color) !important;
}

.cm-searching {
  background-color: var(
    --jp-search-unselected-match-background-color
  ) !important;
  color: var(--jp-search-unselected-match-color) !important;
}

.CodeMirror-focused .CodeMirror-selected {
  background-color: var(--jp-editor-selected-focused-background);
}

.CodeMirror-selected {
  background-color: var(--jp-editor-selected-background);
}

.jp-CollaboratorCursor-hover {
  position: absolute;
  z-index: 1;
  transform: translateX(-50%);
  color: white;
  border-radius: 3px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  text-align: center;
  font-size: var(--jp-ui-font-size1);
  white-space: nowrap;
}

.jp-CodeMirror-ruler {
  border-left: 1px dashed var(--jp-border-color2);
}

/**
 * Here is our jupyter theme for CodeMirror syntax highlighting
 * This is used in our marked.js syntax highlighting and CodeMirror itself
 * The string "jupyter" is set in ../codemirror/widget.DEFAULT_CODEMIRROR_THEME
 * This came from the classic notebook, which came form highlight.js/GitHub
 */

/**
 * CodeMirror themes are handling the background/color in this way. This works
 * fine for CodeMirror editors outside the notebook, but the notebook styles
 * these things differently.
 */
.CodeMirror.cm-s-jupyter {
  background: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
}

/* In the notebook, we want this styling to be handled by its container */
.jp-CodeConsole .CodeMirror.cm-s-jupyter,
.jp-Notebook .CodeMirror.cm-s-jupyter {
  background: transparent;
}

.cm-s-jupyter .CodeMirror-cursor {
  border-left: var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color);
}
.cm-s-jupyter span.cm-keyword {
  color: var(--jp-mirror-editor-keyword-color);
  font-weight: bold;
}
.cm-s-jupyter span.cm-atom {
  color: var(--jp-mirror-editor-atom-color);
}
.cm-s-jupyter span.cm-number {
  color: var(--jp-mirror-editor-number-color);
}
.cm-s-jupyter span.cm-def {
  color: var(--jp-mirror-editor-def-color);
}
.cm-s-jupyter span.cm-variable {
  color: var(--jp-mirror-editor-variable-color);
}
.cm-s-jupyter span.cm-variable-2 {
  color: var(--jp-mirror-editor-variable-2-color);
}
.cm-s-jupyter span.cm-variable-3 {
  color: var(--jp-mirror-editor-variable-3-color);
}
.cm-s-jupyter span.cm-punctuation {
  color: var(--jp-mirror-editor-punctuation-color);
}
.cm-s-jupyter span.cm-property {
  color: var(--jp-mirror-editor-property-color);
}
.cm-s-jupyter span.cm-operator {
  color: var(--jp-mirror-editor-operator-color);
  font-weight: bold;
}
.cm-s-jupyter span.cm-comment {
  color: var(--jp-mirror-editor-comment-color);
  font-style: italic;
}
.cm-s-jupyter span.cm-string {
  color: var(--jp-mirror-editor-string-color);
}
.cm-s-jupyter span.cm-string-2 {
  color: var(--jp-mirror-editor-string-2-color);
}
.cm-s-jupyter span.cm-meta {
  color: var(--jp-mirror-editor-meta-color);
}
.cm-s-jupyter span.cm-qualifier {
  color: var(--jp-mirror-editor-qualifier-color);
}
.cm-s-jupyter span.cm-builtin {
  color: var(--jp-mirror-editor-builtin-color);
}
.cm-s-jupyter span.cm-bracket {
  color: var(--jp-mirror-editor-bracket-color);
}
.cm-s-jupyter span.cm-tag {
  color: var(--jp-mirror-editor-tag-color);
}
.cm-s-jupyter span.cm-attribute {
  color: var(--jp-mirror-editor-attribute-color);
}
.cm-s-jupyter span.cm-header {
  color: var(--jp-mirror-editor-header-color);
}
.cm-s-jupyter span.cm-quote {
  color: var(--jp-mirror-editor-quote-color);
}
.cm-s-jupyter span.cm-link {
  color: var(--jp-mirror-editor-link-color);
}
.cm-s-jupyter span.cm-error {
  color: var(--jp-mirror-editor-error-color);
}
.cm-s-jupyter span.cm-hr {
  color: #999;
}

.cm-s-jupyter span.cm-tab {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=);
  background-position: right;
  background-repeat: no-repeat;
}

.cm-s-jupyter .CodeMirror-activeline-background,
.cm-s-jupyter .CodeMirror-gutter {
  background-color: var(--jp-layout-color2);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| RenderedText
|----------------------------------------------------------------------------*/

.jp-RenderedText {
  text-align: left;
  padding-left: var(--jp-code-padding);
  line-height: var(--jp-code-line-height);
  font-family: var(--jp-code-font-family);
}

.jp-RenderedText pre,
.jp-RenderedJavaScript pre,
.jp-RenderedHTMLCommon pre {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-code-font-size);
  border: none;
  margin: 0px;
  padding: 0px;
  line-height: normal;
}

.jp-RenderedText pre a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}
.jp-RenderedText pre a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}
.jp-RenderedText pre a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* console foregrounds and backgrounds */
.jp-RenderedText pre .ansi-black-fg {
  color: #3e424d;
}
.jp-RenderedText pre .ansi-red-fg {
  color: #e75c58;
}
.jp-RenderedText pre .ansi-green-fg {
  color: #00a250;
}
.jp-RenderedText pre .ansi-yellow-fg {
  color: #ddb62b;
}
.jp-RenderedText pre .ansi-blue-fg {
  color: #208ffb;
}
.jp-RenderedText pre .ansi-magenta-fg {
  color: #d160c4;
}
.jp-RenderedText pre .ansi-cyan-fg {
  color: #60c6c8;
}
.jp-RenderedText pre .ansi-white-fg {
  color: #c5c1b4;
}

.jp-RenderedText pre .ansi-black-bg {
  background-color: #3e424d;
}
.jp-RenderedText pre .ansi-red-bg {
  background-color: #e75c58;
}
.jp-RenderedText pre .ansi-green-bg {
  background-color: #00a250;
}
.jp-RenderedText pre .ansi-yellow-bg {
  background-color: #ddb62b;
}
.jp-RenderedText pre .ansi-blue-bg {
  background-color: #208ffb;
}
.jp-RenderedText pre .ansi-magenta-bg {
  background-color: #d160c4;
}
.jp-RenderedText pre .ansi-cyan-bg {
  background-color: #60c6c8;
}
.jp-RenderedText pre .ansi-white-bg {
  background-color: #c5c1b4;
}

.jp-RenderedText pre .ansi-black-intense-fg {
  color: #282c36;
}
.jp-RenderedText pre .ansi-red-intense-fg {
  color: #b22b31;
}
.jp-RenderedText pre .ansi-green-intense-fg {
  color: #007427;
}
.jp-RenderedText pre .ansi-yellow-intense-fg {
  color: #b27d12;
}
.jp-RenderedText pre .ansi-blue-intense-fg {
  color: #0065ca;
}
.jp-RenderedText pre .ansi-magenta-intense-fg {
  color: #a03196;
}
.jp-RenderedText pre .ansi-cyan-intense-fg {
  color: #258f8f;
}
.jp-RenderedText pre .ansi-white-intense-fg {
  color: #a1a6b2;
}

.jp-RenderedText pre .ansi-black-intense-bg {
  background-color: #282c36;
}
.jp-RenderedText pre .ansi-red-intense-bg {
  background-color: #b22b31;
}
.jp-RenderedText pre .ansi-green-intense-bg {
  background-color: #007427;
}
.jp-RenderedText pre .ansi-yellow-intense-bg {
  background-color: #b27d12;
}
.jp-RenderedText pre .ansi-blue-intense-bg {
  background-color: #0065ca;
}
.jp-RenderedText pre .ansi-magenta-intense-bg {
  background-color: #a03196;
}
.jp-RenderedText pre .ansi-cyan-intense-bg {
  background-color: #258f8f;
}
.jp-RenderedText pre .ansi-white-intense-bg {
  background-color: #a1a6b2;
}

.jp-RenderedText pre .ansi-default-inverse-fg {
  color: var(--jp-ui-inverse-font-color0);
}
.jp-RenderedText pre .ansi-default-inverse-bg {
  background-color: var(--jp-inverse-layout-color0);
}

.jp-RenderedText pre .ansi-bold {
  font-weight: bold;
}
.jp-RenderedText pre .ansi-underline {
  text-decoration: underline;
}

.jp-RenderedText[data-mime-type='application/vnd.jupyter.stderr'] {
  background: var(--jp-rendermime-error-background);
  padding-top: var(--jp-code-padding);
}

/*-----------------------------------------------------------------------------
| RenderedLatex
|----------------------------------------------------------------------------*/

.jp-RenderedLatex {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);
}

/* Left-justify outputs.*/
.jp-OutputArea-output.jp-RenderedLatex {
  padding: var(--jp-code-padding);
  text-align: left;
}

/*-----------------------------------------------------------------------------
| RenderedHTML
|----------------------------------------------------------------------------*/

.jp-RenderedHTMLCommon {
  color: var(--jp-content-font-color1);
  font-family: var(--jp-content-font-family);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);
  /* Give a bit more R padding on Markdown text to keep line lengths reasonable */
  padding-right: 20px;
}

.jp-RenderedHTMLCommon em {
  font-style: italic;
}

.jp-RenderedHTMLCommon strong {
  font-weight: bold;
}

.jp-RenderedHTMLCommon u {
  text-decoration: underline;
}

.jp-RenderedHTMLCommon a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* Headings */

.jp-RenderedHTMLCommon h1,
.jp-RenderedHTMLCommon h2,
.jp-RenderedHTMLCommon h3,
.jp-RenderedHTMLCommon h4,
.jp-RenderedHTMLCommon h5,
.jp-RenderedHTMLCommon h6 {
  line-height: var(--jp-content-heading-line-height);
  font-weight: var(--jp-content-heading-font-weight);
  font-style: normal;
  margin: var(--jp-content-heading-margin-top) 0
    var(--jp-content-heading-margin-bottom) 0;
}

.jp-RenderedHTMLCommon h1:first-child,
.jp-RenderedHTMLCommon h2:first-child,
.jp-RenderedHTMLCommon h3:first-child,
.jp-RenderedHTMLCommon h4:first-child,
.jp-RenderedHTMLCommon h5:first-child,
.jp-RenderedHTMLCommon h6:first-child {
  margin-top: calc(0.5 * var(--jp-content-heading-margin-top));
}

.jp-RenderedHTMLCommon h1:last-child,
.jp-RenderedHTMLCommon h2:last-child,
.jp-RenderedHTMLCommon h3:last-child,
.jp-RenderedHTMLCommon h4:last-child,
.jp-RenderedHTMLCommon h5:last-child,
.jp-RenderedHTMLCommon h6:last-child {
  margin-bottom: calc(0.5 * var(--jp-content-heading-margin-bottom));
}

.jp-RenderedHTMLCommon h1 {
  font-size: var(--jp-content-font-size5);
}

.jp-RenderedHTMLCommon h2 {
  font-size: var(--jp-content-font-size4);
}

.jp-RenderedHTMLCommon h3 {
  font-size: var(--jp-content-font-size3);
}

.jp-RenderedHTMLCommon h4 {
  font-size: var(--jp-content-font-size2);
}

.jp-RenderedHTMLCommon h5 {
  font-size: var(--jp-content-font-size1);
}

.jp-RenderedHTMLCommon h6 {
  font-size: var(--jp-content-font-size0);
}

/* Lists */

.jp-RenderedHTMLCommon ul:not(.list-inline),
.jp-RenderedHTMLCommon ol:not(.list-inline) {
  padding-left: 2em;
}

.jp-RenderedHTMLCommon ul {
  list-style: disc;
}

.jp-RenderedHTMLCommon ul ul {
  list-style: square;
}

.jp-RenderedHTMLCommon ul ul ul {
  list-style: circle;
}

.jp-RenderedHTMLCommon ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol ol {
  list-style: upper-alpha;
}

.jp-RenderedHTMLCommon ol ol ol {
  list-style: lower-alpha;
}

.jp-RenderedHTMLCommon ol ol ol ol {
  list-style: lower-roman;
}

.jp-RenderedHTMLCommon ol ol ol ol ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol,
.jp-RenderedHTMLCommon ul {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon ul ul,
.jp-RenderedHTMLCommon ul ol,
.jp-RenderedHTMLCommon ol ul,
.jp-RenderedHTMLCommon ol ol {
  margin-bottom: 0em;
}

.jp-RenderedHTMLCommon hr {
  color: var(--jp-border-color2);
  background-color: var(--jp-border-color1);
  margin-top: 1em;
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon > pre {
  margin: 1.5em 2em;
}

.jp-RenderedHTMLCommon pre,
.jp-RenderedHTMLCommon code {
  border: 0;
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  line-height: var(--jp-code-line-height);
  padding: 0;
  white-space: pre-wrap;
}

.jp-RenderedHTMLCommon :not(pre) > code {
  background-color: var(--jp-layout-color2);
  padding: 1px 5px;
}

/* Tables */

.jp-RenderedHTMLCommon table {
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  color: var(--jp-ui-font-color1);
  font-size: 12px;
  table-layout: fixed;
  margin-left: auto;
  margin-right: auto;
}

.jp-RenderedHTMLCommon thead {
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  vertical-align: bottom;
}

.jp-RenderedHTMLCommon td,
.jp-RenderedHTMLCommon th,
.jp-RenderedHTMLCommon tr {
  vertical-align: middle;
  padding: 0.5em 0.5em;
  line-height: normal;
  white-space: normal;
  max-width: none;
  border: none;
}

.jp-RenderedMarkdown.jp-RenderedHTMLCommon td,
.jp-RenderedMarkdown.jp-RenderedHTMLCommon th {
  max-width: none;
}

:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon td,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon th,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon tr {
  text-align: right;
}

.jp-RenderedHTMLCommon th {
  font-weight: bold;
}

.jp-RenderedHTMLCommon tbody tr:nth-child(odd) {
  background: var(--jp-layout-color0);
}

.jp-RenderedHTMLCommon tbody tr:nth-child(even) {
  background: var(--jp-rendermime-table-row-background);
}

.jp-RenderedHTMLCommon tbody tr:hover {
  background: var(--jp-rendermime-table-row-hover-background);
}

.jp-RenderedHTMLCommon table {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon p {
  text-align: left;
  margin: 0px;
}

.jp-RenderedHTMLCommon p {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon img {
  -moz-force-broken-image-icon: 1;
}

/* Restrict to direct children as other images could be nested in other content. */
.jp-RenderedHTMLCommon > img {
  display: block;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 1em;
}

/* Change color behind transparent images if they need it... */
[data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-light-background {
  background-color: var(--jp-inverse-layout-color1);
}
[data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-dark-background {
  background-color: var(--jp-inverse-layout-color1);
}
/* ...or leave it untouched if they don't */
[data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-dark-background {
}
[data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-light-background {
}

.jp-RenderedHTMLCommon img,
.jp-RenderedImage img,
.jp-RenderedHTMLCommon svg,
.jp-RenderedSVG svg {
  max-width: 100%;
  height: auto;
}

.jp-RenderedHTMLCommon img.jp-mod-unconfined,
.jp-RenderedImage img.jp-mod-unconfined,
.jp-RenderedHTMLCommon svg.jp-mod-unconfined,
.jp-RenderedSVG svg.jp-mod-unconfined {
  max-width: none;
}

.jp-RenderedHTMLCommon .alert {
  padding: var(--jp-notebook-padding);
  border: var(--jp-border-width) solid transparent;
  border-radius: var(--jp-border-radius);
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon .alert-info {
  color: var(--jp-info-color0);
  background-color: var(--jp-info-color3);
  border-color: var(--jp-info-color2);
}
.jp-RenderedHTMLCommon .alert-info hr {
  border-color: var(--jp-info-color3);
}
.jp-RenderedHTMLCommon .alert-info > p:last-child,
.jp-RenderedHTMLCommon .alert-info > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-warning {
  color: var(--jp-warn-color0);
  background-color: var(--jp-warn-color3);
  border-color: var(--jp-warn-color2);
}
.jp-RenderedHTMLCommon .alert-warning hr {
  border-color: var(--jp-warn-color3);
}
.jp-RenderedHTMLCommon .alert-warning > p:last-child,
.jp-RenderedHTMLCommon .alert-warning > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-success {
  color: var(--jp-success-color0);
  background-color: var(--jp-success-color3);
  border-color: var(--jp-success-color2);
}
.jp-RenderedHTMLCommon .alert-success hr {
  border-color: var(--jp-success-color3);
}
.jp-RenderedHTMLCommon .alert-success > p:last-child,
.jp-RenderedHTMLCommon .alert-success > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-danger {
  color: var(--jp-error-color0);
  background-color: var(--jp-error-color3);
  border-color: var(--jp-error-color2);
}
.jp-RenderedHTMLCommon .alert-danger hr {
  border-color: var(--jp-error-color3);
}
.jp-RenderedHTMLCommon .alert-danger > p:last-child,
.jp-RenderedHTMLCommon .alert-danger > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon blockquote {
  margin: 1em 2em;
  padding: 0 1em;
  border-left: 5px solid var(--jp-border-color2);
}

a.jp-InternalAnchorLink {
  visibility: hidden;
  margin-left: 8px;
  color: var(--md-blue-800);
}

h1:hover .jp-InternalAnchorLink,
h2:hover .jp-InternalAnchorLink,
h3:hover .jp-InternalAnchorLink,
h4:hover .jp-InternalAnchorLink,
h5:hover .jp-InternalAnchorLink,
h6:hover .jp-InternalAnchorLink {
  visibility: visible;
}

.jp-RenderedHTMLCommon kbd {
  background-color: var(--jp-rendermime-table-row-background);
  border: 1px solid var(--jp-border-color0);
  border-bottom-color: var(--jp-border-color2);
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  display: inline-block;
  font-size: 0.8em;
  line-height: 1em;
  padding: 0.2em 0.5em;
}

/* Most direct children of .jp-RenderedHTMLCommon have a margin-bottom of 1.0.
 * At the bottom of cells this is a bit too much as there is also spacing
 * between cells. Going all the way to 0 gets too tight between markdown and
 * code cells.
 */
.jp-RenderedHTMLCommon > *:last-child {
  margin-bottom: 0.5em;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MimeDocument {
  outline: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-filebrowser-button-height: 28px;
  --jp-private-filebrowser-button-width: 48px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-FileBrowser {
  display: flex;
  flex-direction: column;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
}

.jp-FileBrowser-toolbar.jp-Toolbar {
  border-bottom: none;
  height: auto;
  margin: var(--jp-toolbar-header-margin);
  box-shadow: none;
}

.jp-BreadCrumbs {
  flex: 0 0 auto;
  margin: 4px 12px;
}

.jp-BreadCrumbs-item {
  margin: 0px 2px;
  padding: 0px 2px;
  border-radius: var(--jp-border-radius);
  cursor: pointer;
}

.jp-BreadCrumbs-item:hover {
  background-color: var(--jp-layout-color2);
}

.jp-BreadCrumbs-item:first-child {
  margin-left: 0px;
}

.jp-BreadCrumbs-item.jp-mod-dropTarget {
  background-color: var(--jp-brand-color2);
  opacity: 0.7;
}

/*-----------------------------------------------------------------------------
| Buttons
|----------------------------------------------------------------------------*/

.jp-FileBrowser-toolbar.jp-Toolbar {
  padding: 0px;
}

.jp-FileBrowser-toolbar.jp-Toolbar {
  justify-content: space-evenly;
}

.jp-FileBrowser-toolbar.jp-Toolbar .jp-Toolbar-item {
  flex: 1;
}

.jp-FileBrowser-toolbar.jp-Toolbar .jp-ToolbarButtonComponent {
  width: 100%;
}

/*-----------------------------------------------------------------------------
| DirListing
|----------------------------------------------------------------------------*/

.jp-DirListing {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  outline: 0;
}

.jp-DirListing-header {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-top: var(--jp-border-width) solid var(--jp-border-color2);
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  box-shadow: var(--jp-toolbar-box-shadow);
  z-index: 2;
}

.jp-DirListing-headerItem {
  padding: 4px 12px 2px 12px;
  font-weight: 500;
}

.jp-DirListing-headerItem:hover {
  background: var(--jp-layout-color2);
}

.jp-DirListing-headerItem.jp-id-name {
  flex: 1 0 84px;
}

.jp-DirListing-headerItem.jp-id-modified {
  flex: 0 0 112px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
}

.jp-DirListing-narrow .jp-id-modified,
.jp-DirListing-narrow .jp-DirListing-itemModified {
  display: none;
}

.jp-DirListing-headerItem.jp-mod-selected {
  font-weight: 600;
}

/* increase specificity to override bundled default */
.jp-DirListing-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  background-color: var(--jp-layout-color1);
}

/* Style the directory listing content when a user drops a file to upload */
.jp-DirListing.jp-mod-native-drop .jp-DirListing-content {
  outline: 5px dashed rgba(128, 128, 128, 0.5);
  outline-offset: -10px;
  cursor: copy;
}

.jp-DirListing-item {
  display: flex;
  flex-direction: row;
  padding: 4px 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-DirListing-item.jp-mod-selected {
  color: white;
  background: var(--jp-brand-color1);
}

.jp-DirListing-item.jp-mod-dropTarget {
  background: var(--jp-brand-color3);
}

.jp-DirListing-item:hover:not(.jp-mod-selected) {
  background: var(--jp-layout-color2);
}

.jp-DirListing-itemIcon {
  flex: 0 0 20px;
  margin-right: 4px;
}

.jp-DirListing-itemText {
  flex: 1 0 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}

.jp-DirListing-itemModified {
  flex: 0 0 125px;
  text-align: right;
}

.jp-DirListing-editor {
  flex: 1 0 64px;
  outline: none;
  border: none;
}

.jp-DirListing-item.jp-mod-running .jp-DirListing-itemIcon:before {
  color: limegreen;
  content: '\\25CF';
  font-size: 8px;
  position: absolute;
  left: -8px;
}

.jp-DirListing-item.lm-mod-drag-image,
.jp-DirListing-item.jp-mod-selected.lm-mod-drag-image {
  font-size: var(--jp-ui-font-size1);
  padding-left: 4px;
  margin-left: 4px;
  width: 160px;
  background-color: var(--jp-ui-inverse-font-color2);
  box-shadow: var(--jp-elevation-z2);
  border-radius: 0px;
  color: var(--jp-ui-font-color1);
  transform: translateX(-40%) translateY(-58%);
}

.jp-DirListing-deadSpace {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  background-color: var(--jp-layout-color1);
}

.jp-Document {
  min-width: 120px;
  min-height: 120px;
  outline: none;
}

.jp-FileDialog.jp-mod-conflict input {
  color: red;
}

.jp-FileDialog .jp-new-name-title {
  margin-top: 12px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
}

/*-----------------------------------------------------------------------------
| Main OutputArea
| OutputArea has a list of Outputs
|----------------------------------------------------------------------------*/

.jp-OutputArea {
  overflow-y: auto;
}

.jp-OutputArea-child {
  display: flex;
  flex-direction: row;
}

.jp-OutputPrompt {
  flex: 0 0 var(--jp-cell-prompt-width);
  color: var(--jp-cell-outprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
  opacity: var(--jp-cell-prompt-opacity);
  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-OutputArea-output {
  height: auto;
  overflow: auto;
  user-select: text;
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
}

.jp-OutputArea-child .jp-OutputArea-output {
  flex-grow: 1;
  flex-shrink: 1;
}

/**
 * Isolated output.
 */
.jp-OutputArea-output.jp-mod-isolated {
  width: 100%;
  display: block;
}


body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated {
  position: relative;
}

body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

/* pre */

.jp-OutputArea-output pre {
  border: none;
  margin: 0px;
  padding: 0px;
  overflow-x: auto;
  overflow-y: auto;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* tables */

.jp-OutputArea-output.jp-RenderedHTMLCommon table {
  margin-left: 0;
  margin-right: 0;
}

/* description lists */

.jp-OutputArea-output dl,
.jp-OutputArea-output dt,
.jp-OutputArea-output dd {
  display: block;
}

.jp-OutputArea-output dl {
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dt {
  font-weight: bold;
  float: left;
  width: 20%;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dd {
  float: left;
  width: 80%;
  padding: 0;
  margin: 0;
}

/* Hide the gutter in case of
 *  - nested output areas (e.g. in the case of output widgets)
 *  - mirrored output areas
 */
.jp-OutputArea .jp-OutputArea .jp-OutputArea-prompt {
  display: none;
}

/*-----------------------------------------------------------------------------
| executeResult is added to any Output-result for the display of the object
| returned by a cell
|----------------------------------------------------------------------------*/

.jp-OutputArea-output.jp-OutputArea-executeResult {
  margin-left: 0px;
  flex: 1 1 auto;
}

.jp-OutputArea-executeResult.jp-RenderedText {
  padding-top: var(--jp-code-padding);
}

/*-----------------------------------------------------------------------------
| The Stdin output
|----------------------------------------------------------------------------*/

.jp-OutputArea-stdin {
  line-height: var(--jp-code-line-height);
  padding-top: var(--jp-code-padding);
  display: flex;
}

.jp-Stdin-prompt {
  color: var(--jp-content-font-color0);
  padding-right: var(--jp-code-padding);
  vertical-align: baseline;
  flex: 0 0 auto;
}

.jp-Stdin-input {
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  color: inherit;
  background-color: inherit;
  width: 42%;
  min-width: 200px;
  /* make sure input baseline aligns with prompt */
  vertical-align: baseline;
  /* padding + margin = 0.5em between prompt and cursor */
  padding: 0em 0.25em;
  margin: 0em 0.25em;
  flex: 0 0 70%;
}

.jp-Stdin-input:focus {
  box-shadow: none;
}

/*-----------------------------------------------------------------------------
| Output Area View
|----------------------------------------------------------------------------*/

.jp-LinkedOutputView .jp-OutputArea {
  height: 100%;
  display: block;
}

.jp-LinkedOutputView .jp-OutputArea-output:only-child {
  height: 100%;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapser {
  flex: 0 0 var(--jp-cell-collapser-width);
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
  border-radius: var(--jp-border-radius);
  opacity: 1;
}

.jp-Collapser-child {
  display: block;
  width: 100%;
  box-sizing: border-box;
  /* height: 100% doesn't work because the height of its parent is computed from content */
  position: absolute;
  top: 0px;
  bottom: 0px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Header/Footer
|----------------------------------------------------------------------------*/

/* Hidden by zero height by default */
.jp-CellHeader,
.jp-CellFooter {
  height: 0px;
  width: 100%;
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Input
|----------------------------------------------------------------------------*/

/* All input areas */
.jp-InputArea {
  display: flex;
  flex-direction: row;
}

.jp-InputArea-editor {
  flex: 1 1 auto;
}

.jp-InputArea-editor {
  /* This is the non-active, default styling */
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  border-radius: 0px;
  background: var(--jp-cell-editor-background);
}

.jp-InputPrompt {
  flex: 0 0 var(--jp-cell-prompt-width);
  color: var(--jp-cell-inprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  opacity: var(--jp-cell-prompt-opacity);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
  opacity: var(--jp-cell-prompt-opacity);
  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Placeholder
|----------------------------------------------------------------------------*/

.jp-Placeholder {
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
}

.jp-Placeholder-prompt {
  box-sizing: border-box;
}

.jp-Placeholder-content {
  flex: 1 1 auto;
  border: none;
  background: transparent;
  height: 20px;
  box-sizing: border-box;
}

.jp-Placeholder-content .jp-MoreHorizIcon {
  width: 32px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: var(--jp-border-radius);
}

.jp-Placeholder-content .jp-MoreHorizIcon:hover {
  border: 1px solid var(--jp-border-color1);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--jp-layout-color0);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-cell-scrolling-output-offset: 5px;
}

/*-----------------------------------------------------------------------------
| Cell
|----------------------------------------------------------------------------*/

.jp-Cell {
  padding: var(--jp-cell-padding);
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Common input/output
|----------------------------------------------------------------------------*/

.jp-Cell-inputWrapper,
.jp-Cell-outputWrapper {
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  /* Added to reveal the box-shadow on the input and output collapsers. */
  overflow: visible;
}

/* Only input/output areas inside cells */
.jp-Cell-inputArea,
.jp-Cell-outputArea {
  flex: 1 1 auto;
}

/*-----------------------------------------------------------------------------
| Collapser
|----------------------------------------------------------------------------*/

/* Make the output collapser disappear when there is not output, but do so
 * in a manner that leaves it in the layout and preserves its width.
 */
.jp-Cell.jp-mod-noOutputs .jp-Cell-outputCollapser {
  border: none !important;
  background: transparent !important;
}

.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputCollapser {
  min-height: var(--jp-cell-collapser-min-height);
}

/*-----------------------------------------------------------------------------
| Output
|----------------------------------------------------------------------------*/

/* Put a space between input and output when there IS output */
.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputWrapper {
  margin-top: 5px;
}

/* Text output with the Out[] prompt needs a top padding to match the
 * alignment of the Out[] prompt itself.
 */
.jp-OutputArea-executeResult .jp-RenderedText.jp-OutputArea-output {
  padding-top: var(--jp-code-padding);
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea {
  overflow-y: auto;
  max-height: 200px;
  box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, 0.3);
  margin-left: var(--jp-private-cell-scrolling-output-offset);
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-prompt {
  flex: 0 0
    calc(
      var(--jp-cell-prompt-width) -
        var(--jp-private-cell-scrolling-output-offset)
    );
}

/*-----------------------------------------------------------------------------
| CodeCell
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| MarkdownCell
|----------------------------------------------------------------------------*/

.jp-MarkdownOutput {
  flex: 1 1 auto;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: var(--jp-code-padding);
}

.jp-MarkdownOutput.jp-RenderedHTMLCommon {
  overflow: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------

/*-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------*/

.jp-NotebookPanel-toolbar {
  padding: 2px;
}

.jp-Toolbar-item.jp-Notebook-toolbarCellType .jp-select-wrapper.jp-mod-focused {
  border: none;
  box-shadow: none;
}

.jp-Notebook-toolbarCellTypeDropdown select {
  height: 24px;
  font-size: var(--jp-ui-font-size1);
  line-height: 14px;
  border-radius: 0;
  display: block;
}

.jp-Notebook-toolbarCellTypeDropdown span {
  top: 5px !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-notebook-dragImage-width: 304px;
  --jp-private-notebook-dragImage-height: 36px;
  --jp-private-notebook-selected-color: var(--md-blue-400);
  --jp-private-notebook-active-color: var(--md-green-400);
}

/*-----------------------------------------------------------------------------
| Imports
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Notebook
|----------------------------------------------------------------------------*/

.jp-NotebookPanel {
  display: block;
  height: 100%;
}

.jp-NotebookPanel.jp-Document {
  min-width: 240px;
  min-height: 120px;
}

.jp-Notebook {
  padding: var(--jp-notebook-padding);
  outline: none;
  overflow: auto;
  background: var(--jp-layout-color0);
}

.jp-Notebook.jp-mod-scrollPastEnd::after {
  display: block;
  content: '';
  min-height: var(--jp-notebook-scroll-padding);
}

.jp-Notebook .jp-Cell {
  overflow: visible;
}

.jp-Notebook .jp-Cell .jp-InputPrompt {
  cursor: move;
}

/*-----------------------------------------------------------------------------
| Notebook state related styling
|
| The notebook and cells each have states, here are the possibilities:
|
| - Notebook
|   - Command
|   - Edit
| - Cell
|   - None
|   - Active (only one can be active)
|   - Selected (the cells actions are applied to)
|   - Multiselected (when multiple selected, the cursor)
|   - No outputs
|----------------------------------------------------------------------------*/

/* Command or edit modes */

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-InputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-OutputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

/* cell is active */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser {
  background: var(--jp-brand-color1);
}

/* collapser is hovered */
.jp-Notebook .jp-Cell .jp-Collapser:hover {
  box-shadow: var(--jp-elevation-z2);
  background: var(--jp-brand-color1);
  opacity: var(--jp-cell-collapser-not-active-hover-opacity);
}

/* cell is active and collapser is hovered */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser:hover {
  background: var(--jp-brand-color0);
  opacity: 1;
}

/* Command mode */

.jp-Notebook.jp-mod-commandMode .jp-Cell.jp-mod-selected {
  background: var(--jp-notebook-multiselected-color);
}

.jp-Notebook.jp-mod-commandMode
  .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {
  background: transparent;
}

/* Edit mode */

.jp-Notebook.jp-mod-editMode .jp-Cell.jp-mod-active .jp-InputArea-editor {
  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-cell-editor-active-background);
}

/*-----------------------------------------------------------------------------
| Notebook drag and drop
|----------------------------------------------------------------------------*/

.jp-Notebook-cell.jp-mod-dropSource {
  opacity: 0.5;
}

.jp-Notebook-cell.jp-mod-dropTarget,
.jp-Notebook.jp-mod-commandMode
  .jp-Notebook-cell.jp-mod-active.jp-mod-selected.jp-mod-dropTarget {
  border-top-color: var(--jp-private-notebook-selected-color);
  border-top-style: solid;
  border-top-width: 2px;
}

.jp-dragImage {
  display: flex;
  flex-direction: row;
  width: var(--jp-private-notebook-dragImage-width);
  height: var(--jp-private-notebook-dragImage-height);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background);
  overflow: visible;
}

.jp-dragImage-singlePrompt {
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
}

.jp-dragImage .jp-dragImage-content {
  flex: 1 1 auto;
  z-index: 2;
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  line-height: var(--jp-code-line-height);
  padding: var(--jp-code-padding);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background-color);
  color: var(--jp-content-font-color3);
  text-align: left;
  margin: 4px 4px 4px 0px;
}

.jp-dragImage .jp-dragImage-prompt {
  flex: 0 0 auto;
  min-width: 36px;
  color: var(--jp-cell-inprompt-font-color);
  padding: var(--jp-code-padding);
  padding-left: 12px;
  font-family: var(--jp-cell-prompt-font-family);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: 1.9;
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
}

.jp-dragImage-multipleBack {
  z-index: -1;
  position: absolute;
  height: 32px;
  width: 300px;
  top: 8px;
  left: 8px;
  background: var(--jp-layout-color2);
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
}

/*-----------------------------------------------------------------------------
| Cell toolbar
|----------------------------------------------------------------------------*/

.jp-NotebookTools {
  display: block;
  min-width: var(--jp-sidebar-min-width);
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
    * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  overflow: auto;
}

.jp-NotebookTools-tool {
  padding: 0px 12px 0 12px;
}

.jp-ActiveCellTool {
  padding: 12px;
  background-color: var(--jp-layout-color1);
  border-top: none !important;
}

.jp-ActiveCellTool .jp-InputArea-prompt {
  flex: 0 0 auto;
  padding-left: 0px;
}

.jp-ActiveCellTool .jp-InputArea-editor {
  flex: 1 1 auto;
  background: var(--jp-cell-editor-background);
  border-color: var(--jp-cell-editor-border-color);
}

.jp-ActiveCellTool .jp-InputArea-editor .CodeMirror {
  background: transparent;
}

.jp-MetadataEditorTool {
  flex-direction: column;
  padding: 12px 0px 12px 0px;
}

.jp-RankedPanel > :not(:first-child) {
  margin-top: 12px;
}

.jp-KeySelector select.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: var(--jp-border-width) solid var(--jp-border-color1);
}

.jp-KeySelector label,
.jp-MetadataEditorTool label {
  line-height: 1.4;
}

/*-----------------------------------------------------------------------------
| Presentation Mode (.jp-mod-presentationMode)
|----------------------------------------------------------------------------*/

.jp-mod-presentationMode .jp-Notebook {
  --jp-content-font-size1: var(--jp-content-presentation-font-size1);
  --jp-code-font-size: var(--jp-code-presentation-font-size);
}

.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-InputPrompt,
.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-OutputPrompt {
  flex: 0 0 110px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensurePackage() in @jupyterlab/buildutils */

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

</style>

    <style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/



:root {
  /* Elevation
   *
   * We style box-shadows using Material Design's idea of elevation. These particular numbers are taken from here:
   *
   * https://github.com/material-components/material-components-web
   * https://material-components-web.appspot.com/elevation.html
   */

  --jp-shadow-base-lightness: 0;
  --jp-shadow-umbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.2
  );
  --jp-shadow-penumbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.14
  );
  --jp-shadow-ambient-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.12
  );
  --jp-elevation-z0: none;
  --jp-elevation-z1: 0px 2px 1px -1px var(--jp-shadow-umbra-color),
    0px 1px 1px 0px var(--jp-shadow-penumbra-color),
    0px 1px 3px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z2: 0px 3px 1px -2px var(--jp-shadow-umbra-color),
    0px 2px 2px 0px var(--jp-shadow-penumbra-color),
    0px 1px 5px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z4: 0px 2px 4px -1px var(--jp-shadow-umbra-color),
    0px 4px 5px 0px var(--jp-shadow-penumbra-color),
    0px 1px 10px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z6: 0px 3px 5px -1px var(--jp-shadow-umbra-color),
    0px 6px 10px 0px var(--jp-shadow-penumbra-color),
    0px 1px 18px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z8: 0px 5px 5px -3px var(--jp-shadow-umbra-color),
    0px 8px 10px 1px var(--jp-shadow-penumbra-color),
    0px 3px 14px 2px var(--jp-shadow-ambient-color);
  --jp-elevation-z12: 0px 7px 8px -4px var(--jp-shadow-umbra-color),
    0px 12px 17px 2px var(--jp-shadow-penumbra-color),
    0px 5px 22px 4px var(--jp-shadow-ambient-color);
  --jp-elevation-z16: 0px 8px 10px -5px var(--jp-shadow-umbra-color),
    0px 16px 24px 2px var(--jp-shadow-penumbra-color),
    0px 6px 30px 5px var(--jp-shadow-ambient-color);
  --jp-elevation-z20: 0px 10px 13px -6px var(--jp-shadow-umbra-color),
    0px 20px 31px 3px var(--jp-shadow-penumbra-color),
    0px 8px 38px 7px var(--jp-shadow-ambient-color);
  --jp-elevation-z24: 0px 11px 15px -7px var(--jp-shadow-umbra-color),
    0px 24px 38px 3px var(--jp-shadow-penumbra-color),
    0px 9px 46px 8px var(--jp-shadow-ambient-color);

  /* Borders
   *
   * The following variables, specify the visual styling of borders in JupyterLab.
   */

  --jp-border-width: 1px;
  --jp-border-color0: var(--md-grey-400);
  --jp-border-color1: var(--md-grey-400);
  --jp-border-color2: var(--md-grey-300);
  --jp-border-color3: var(--md-grey-200);
  --jp-border-radius: 2px;

  /* UI Fonts
   *
   * The UI font CSS variables are used for the typography all of the JupyterLab
   * user interface elements that are not directly user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-ui-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-ui-font-scale-factor: 1.2;
  --jp-ui-font-size0: 0.83333em;
  --jp-ui-font-size1: 13px; /* Base font size */
  --jp-ui-font-size2: 1.2em;
  --jp-ui-font-size3: 1.44em;

  --jp-ui-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  /*
   * Use these font colors against the corresponding main layout colors.
   * In a light theme, these go from dark to light.
   */

  /* Defaults use Material Design specification */
  --jp-ui-font-color0: rgba(0, 0, 0, 1);
  --jp-ui-font-color1: rgba(0, 0, 0, 0.87);
  --jp-ui-font-color2: rgba(0, 0, 0, 0.54);
  --jp-ui-font-color3: rgba(0, 0, 0, 0.38);

  /*
   * Use these against the brand/accent/warn/error colors.
   * These will typically go from light to darker, in both a dark and light theme.
   */

  --jp-ui-inverse-font-color0: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color1: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color2: rgba(255, 255, 255, 0.7);
  --jp-ui-inverse-font-color3: rgba(255, 255, 255, 0.5);

  /* Content Fonts
   *
   * Content font variables are used for typography of user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-content-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-content-line-height: 1.6;
  --jp-content-font-scale-factor: 1.2;
  --jp-content-font-size0: 0.83333em;
  --jp-content-font-size1: 14px; /* Base font size */
  --jp-content-font-size2: 1.2em;
  --jp-content-font-size3: 1.44em;
  --jp-content-font-size4: 1.728em;
  --jp-content-font-size5: 2.0736em;

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-content-presentation-font-size1: 17px;

  --jp-content-heading-line-height: 1;
  --jp-content-heading-margin-top: 1.2em;
  --jp-content-heading-margin-bottom: 0.8em;
  --jp-content-heading-font-weight: 500;

  /* Defaults use Material Design specification */
  --jp-content-font-color0: rgba(0, 0, 0, 1);
  --jp-content-font-color1: rgba(0, 0, 0, 0.87);
  --jp-content-font-color2: rgba(0, 0, 0, 0.54);
  --jp-content-font-color3: rgba(0, 0, 0, 0.38);

  --jp-content-link-color: var(--md-blue-700);

  --jp-content-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';

  /*
   * Code Fonts
   *
   * Code font variables are used for typography of code and other monospaces content.
   */

  --jp-code-font-size: 13px;
  --jp-code-line-height: 1.3077; /* 17px for 13px base */
  --jp-code-padding: 5px; /* 5px for 13px base, codemirror highlighting needs integer px value */
  --jp-code-font-family-default: Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  --jp-code-font-family: var(--jp-code-font-family-default);

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-code-presentation-font-size: 16px;

  /* may need to tweak cursor width if you change font size */
  --jp-code-cursor-width0: 1.4px;
  --jp-code-cursor-width1: 2px;
  --jp-code-cursor-width2: 4px;

  /* Layout
   *
   * The following are the main layout colors use in JupyterLab. In a light
   * theme these would go from light to dark.
   */

  --jp-layout-color0: white;
  --jp-layout-color1: white;
  --jp-layout-color2: var(--md-grey-200);
  --jp-layout-color3: var(--md-grey-400);
  --jp-layout-color4: var(--md-grey-600);

  /* Inverse Layout
   *
   * The following are the inverse layout colors use in JupyterLab. In a light
   * theme these would go from dark to light.
   */

  --jp-inverse-layout-color0: #111111;
  --jp-inverse-layout-color1: var(--md-grey-900);
  --jp-inverse-layout-color2: var(--md-grey-800);
  --jp-inverse-layout-color3: var(--md-grey-700);
  --jp-inverse-layout-color4: var(--md-grey-600);

  /* Brand/accent */

  --jp-brand-color0: var(--md-blue-700);
  --jp-brand-color1: var(--md-blue-500);
  --jp-brand-color2: var(--md-blue-300);
  --jp-brand-color3: var(--md-blue-100);
  --jp-brand-color4: var(--md-blue-50);

  --jp-accent-color0: var(--md-green-700);
  --jp-accent-color1: var(--md-green-500);
  --jp-accent-color2: var(--md-green-300);
  --jp-accent-color3: var(--md-green-100);

  /* State colors (warn, error, success, info) */

  --jp-warn-color0: var(--md-orange-700);
  --jp-warn-color1: var(--md-orange-500);
  --jp-warn-color2: var(--md-orange-300);
  --jp-warn-color3: var(--md-orange-100);

  --jp-error-color0: var(--md-red-700);
  --jp-error-color1: var(--md-red-500);
  --jp-error-color2: var(--md-red-300);
  --jp-error-color3: var(--md-red-100);

  --jp-success-color0: var(--md-green-700);
  --jp-success-color1: var(--md-green-500);
  --jp-success-color2: var(--md-green-300);
  --jp-success-color3: var(--md-green-100);

  --jp-info-color0: var(--md-cyan-700);
  --jp-info-color1: var(--md-cyan-500);
  --jp-info-color2: var(--md-cyan-300);
  --jp-info-color3: var(--md-cyan-100);

  /* Cell specific styles */

  --jp-cell-padding: 5px;

  --jp-cell-collapser-width: 8px;
  --jp-cell-collapser-min-height: 20px;
  --jp-cell-collapser-not-active-hover-opacity: 0.6;

  --jp-cell-editor-background: var(--md-grey-100);
  --jp-cell-editor-border-color: var(--md-grey-300);
  --jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-cell-editor-active-background: var(--jp-layout-color0);
  --jp-cell-editor-active-border-color: var(--jp-brand-color1);

  --jp-cell-prompt-width: 64px;
  --jp-cell-prompt-font-family: 'Source Code Pro', monospace;
  --jp-cell-prompt-letter-spacing: 0px;
  --jp-cell-prompt-opacity: 1;
  --jp-cell-prompt-not-active-opacity: 0.5;
  --jp-cell-prompt-not-active-font-color: var(--md-grey-700);
  /* A custom blend of MD grey and blue 600
   * See https://meyerweb.com/eric/tools/color-blend/#546E7A:1E88E5:5:hex */
  --jp-cell-inprompt-font-color: #307fc1;
  /* A custom blend of MD grey and orange 600
   * https://meyerweb.com/eric/tools/color-blend/#546E7A:F4511E:5:hex */
  --jp-cell-outprompt-font-color: #bf5b3d;

  /* Notebook specific styles */

  --jp-notebook-padding: 10px;
  --jp-notebook-select-background: var(--jp-layout-color1);
  --jp-notebook-multiselected-color: var(--md-blue-50);

  /* The scroll padding is calculated to fill enough space at the bottom of the
  notebook to show one single-line cell (with appropriate padding) at the top
  when the notebook is scrolled all the way to the bottom. We also subtract one
  pixel so that no scrollbar appears if we have just one single-line cell in the
  notebook. This padding is to enable a 'scroll past end' feature in a notebook.
  */
  --jp-notebook-scroll-padding: calc(
    100% - var(--jp-code-font-size) * var(--jp-code-line-height) -
      var(--jp-code-padding) - var(--jp-cell-padding) - 1px
  );

  /* Rendermime styles */

  --jp-rendermime-error-background: #fdd;
  --jp-rendermime-table-row-background: var(--md-grey-100);
  --jp-rendermime-table-row-hover-background: var(--md-light-blue-50);

  /* Dialog specific styles */

  --jp-dialog-background: rgba(0, 0, 0, 0.25);

  /* Console specific styles */

  --jp-console-padding: 10px;

  /* Toolbar specific styles */

  --jp-toolbar-border-color: var(--jp-border-color1);
  --jp-toolbar-micro-height: 8px;
  --jp-toolbar-background: var(--jp-layout-color1);
  --jp-toolbar-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.24);
  --jp-toolbar-header-margin: 4px 4px 0px 4px;
  --jp-toolbar-active-background: var(--md-grey-300);

  /* Input field styles */

  --jp-input-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-input-active-background: var(--jp-layout-color1);
  --jp-input-hover-background: var(--jp-layout-color1);
  --jp-input-background: var(--md-grey-100);
  --jp-input-border-color: var(--jp-border-color1);
  --jp-input-active-border-color: var(--jp-brand-color1);
  --jp-input-active-box-shadow-color: rgba(19, 124, 189, 0.3);

  /* General editor styles */

  --jp-editor-selected-background: #d9d9d9;
  --jp-editor-selected-focused-background: #d7d4f0;
  --jp-editor-cursor-color: var(--jp-ui-font-color0);

  /* Code mirror specific styles */

  --jp-mirror-editor-keyword-color: #008000;
  --jp-mirror-editor-atom-color: #88f;
  --jp-mirror-editor-number-color: #080;
  --jp-mirror-editor-def-color: #00f;
  --jp-mirror-editor-variable-color: var(--md-grey-900);
  --jp-mirror-editor-variable-2-color: #05a;
  --jp-mirror-editor-variable-3-color: #085;
  --jp-mirror-editor-punctuation-color: #05a;
  --jp-mirror-editor-property-color: #05a;
  --jp-mirror-editor-operator-color: #aa22ff;
  --jp-mirror-editor-comment-color: #408080;
  --jp-mirror-editor-string-color: #ba2121;
  --jp-mirror-editor-string-2-color: #708;
  --jp-mirror-editor-meta-color: #aa22ff;
  --jp-mirror-editor-qualifier-color: #555;
  --jp-mirror-editor-builtin-color: #008000;
  --jp-mirror-editor-bracket-color: #997;
  --jp-mirror-editor-tag-color: #170;
  --jp-mirror-editor-attribute-color: #00c;
  --jp-mirror-editor-header-color: blue;
  --jp-mirror-editor-quote-color: #090;
  --jp-mirror-editor-link-color: #00c;
  --jp-mirror-editor-error-color: #f00;
  --jp-mirror-editor-hr-color: #999;

  /* Vega extension styles */

  --jp-vega-background: white;

  /* Sidebar-related styles */

  --jp-sidebar-min-width: 180px;

  /* Search-related styles */

  --jp-search-toggle-off-opacity: 0.5;
  --jp-search-toggle-hover-opacity: 0.8;
  --jp-search-toggle-on-opacity: 1;
  --jp-search-selected-match-background-color: rgb(245, 200, 0);
  --jp-search-selected-match-color: black;
  --jp-search-unselected-match-background-color: var(
    --jp-inverse-layout-color0
  );
  --jp-search-unselected-match-color: var(--jp-ui-inverse-font-color0);

  /* Icon colors that work well with light or dark backgrounds */
  --jp-icon-contrast-color0: var(--md-purple-600);
  --jp-icon-contrast-color1: var(--md-green-600);
  --jp-icon-contrast-color2: var(--md-pink-600);
  --jp-icon-contrast-color3: var(--md-blue-600);
}
</style>

<style type="text/css">
a.anchor-link {
   display: none;
}
.highlight  {
    margin: 0.4em;
}
</style>



    </script>
    <!-- End of mathjax configuration --></head>
    <body class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">
    <div class='matthew-wrapper'>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h1 id="Benchmarking-community-detection-algorithms-in-Python">Benchmarking community detection algorithms in Python<a class="anchor-link" href="#Benchmarking-community-detection-algorithms-in-Python">&#182;</a></h1>
    </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>Nearly any type of data, whether it's a social graph, supply chain, or a collection of webpages, can be represented as a network. Very often, the best way to summarize a network is to describe its communities, or clusters of nodes that are densely interconnected but less connected to the rest of the network. These communities thus might be social circles on Facebook, or groups of webpages that are frequently visited together.</p>
    <p>The academic literature on community detection has thrived in the past fifteen years with the advent of large-scale computation. But only a few algorithms have been implemented in Python. For years, the <a href="https://github.com/taynaud/python-louvain">community</a> package, which is an implementation of the Louvain algorithm has been the best method for community detection in Python.<a href="#fn1"><sup>1</sup></a> In early 2020, the <a href="https://github.com/benedekrozemberczki/karateclub">karateclub</a><a href="#fn2"><sup>2</sup></a> package was released, accompanied by a comprehensive <a href="https://arxiv.org/abs/2003.04819">whitepaper</a>. Karateclub includes implementations of four community detection algorithms.<a href="#fn3"><sup>2</sup></a></p>
    <p>In this notebook I benchmark those algorithms against the Louvain method on three networks of varied size and density. I measure their speed and the modularity of their output. I also include networkx's implementation of Clauset, Newman, and Moore's Greedy Modularity algorithm.</p>
    <p>I use <code>networkx</code> to build and analyze the network, <code>community</code> and <code>karateclub</code> to run the community detection algorithms, and <code>matplotlib</code> for visualization.</p>
    <br/>
    <p><span id='#fn1'>1. I'm ignoring the <a href='https://igraph.org/python/'>igraph package</a>, which suffers from poor documentation and is not directly compatible with networkx. It appears to have its own implementation of the Louvain algorithm.</span>
    <br/>
    <span id='#fn3'>2. Named after <a href='https://en.wikipedia.org/wiki/Zachary%27s_karate_club'>the most famous dataset</a></span> in community detection.
    <br/>
    <span id='#fn3'>3. Karateclub also includes several methods for detecting overlapping communities, which I don't count here.</span></p>
    
    <h3 id="Sections">Sections<a class="anchor-link" href="#Sections">&#182;</a></h3><p>I. <a href='#datasets'>Datasets</a></p>
    <p>II. <a href='#models'>Models</a></p>
    <p>III. <a href='#community-detection'>Community Detection</a></p>
    <ol>
    <li><a href='#adding-gemsec'>Adding GEMSEC</a></li>
    </ol>
    <p>IV. <a href='#algorithm-evaluation'>Algorithm Evaluation</a></p>
    <ol>
    <li><p><a href='#modularity'>Modularity</a></p>
    </li>
    <li><p><a href='#algorithm-speed'>Algorithm Speed</a></p>
    </li>
    <li><p><a href='#stochasticity'>Stochasticity</a></p>
    </li>
    </ol>
    <p>V. <a href='#improving-label-prop'>Attempting to Improve Label Propagation</a></p>
    <ol>
    <li><p><a href='#iterations'>Number of iterations</a></p>
    </li>
    <li><p><a href='weighted-label-prop'>Weighted Label Propagation</a></p>
    </li>
    </ol>
    <p>VI. <a href='#comparison-summary'>Comparison Summary</a></p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[1]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="kn">from</span> <span class="nn">datetime</span> <span class="kn">import</span> <span class="n">datetime</span>
    <span class="kn">from</span> <span class="nn">itertools</span> <span class="kn">import</span> <span class="n">combinations</span>
    <span class="kn">from</span> <span class="nn">itertools</span> <span class="kn">import</span> <span class="n">product</span>
    <span class="kn">import</span> <span class="nn">pickle</span>
    <span class="kn">from</span> <span class="nn">random</span> <span class="kn">import</span> <span class="n">randint</span><span class="p">,</span> <span class="n">sample</span><span class="p">,</span> <span class="n">shuffle</span>
    
    <span class="kn">from</span> <span class="nn">community</span> <span class="kn">import</span> <span class="n">best_partition</span>
    <span class="kn">from</span> <span class="nn">community</span> <span class="kn">import</span> <span class="n">modularity</span>
    <span class="kn">from</span> <span class="nn">karateclub</span> <span class="kn">import</span> <span class="n">Estimator</span>
    <span class="kn">from</span> <span class="nn">karateclub</span> <span class="kn">import</span> <span class="n">GEMSEC</span>
    <span class="kn">from</span> <span class="nn">karateclub</span> <span class="kn">import</span> <span class="n">EdMot</span>
    <span class="kn">from</span> <span class="nn">karateclub</span> <span class="kn">import</span> <span class="n">SCD</span>
    <span class="kn">from</span> <span class="nn">karateclub</span> <span class="kn">import</span> <span class="n">LabelPropagation</span>
    <span class="kn">import</span> <span class="nn">matplotlib</span>
    <span class="kn">import</span> <span class="nn">matplotlib.pyplot</span> <span class="k">as</span> <span class="nn">plt</span>
    <span class="kn">import</span> <span class="nn">networkx</span> <span class="k">as</span> <span class="nn">nx</span>
    <span class="kn">from</span> <span class="nn">networkx.algorithms.community.modularity_max</span> <span class="kn">import</span> <span class="n">greedy_modularity_communities</span>
    <span class="kn">from</span> <span class="nn">networkx</span> <span class="kn">import</span> <span class="n">density</span><span class="p">,</span> <span class="n">Graph</span>
    <span class="kn">from</span> <span class="nn">networkx.relabel</span> <span class="kn">import</span> <span class="n">convert_node_labels_to_integers</span>
    <span class="kn">import</span> <span class="nn">numpy</span> <span class="k">as</span> <span class="nn">np</span>
    <span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
    <span class="kn">from</span> <span class="nn">sklearn.metrics</span> <span class="kn">import</span> <span class="n">normalized_mutual_info_score</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h2 id='datasets'>I. Datasets</h2><p>We'll use the following datasets to benchmark the community detection algorithms:</p>
    <h4 id="Airports-(small,-weighted)">Airports (small, weighted)<a class="anchor-link" href="#Airports-(small,-weighted)">&#182;</a></h4><p>A network of the primary airports in the US, with weighted links indicating the the number of flights between them. Retrieved from <a href="https://toreopsahl.com/datasets/#usairports">https://toreopsahl.com/datasets/#usairports</a>.</p>
    <h4 id="Facebook-(large,-unweighted)">Facebook (large, unweighted)<a class="anchor-link" href="#Facebook-(large,-unweighted)">&#182;</a></h4><p>A network of Facebook group pages linked by shared users; retrieved from <a href="https://snap.stanford.edu/data/facebook-large-page-page-network.html">https://snap.stanford.edu/data/facebook-large-page-page-network.html</a>.</p>
    <h4 id="Netscience-(small,-unweighted)">Netscience (small, unweighted)<a class="anchor-link" href="#Netscience-(small,-unweighted)">&#182;</a></h4><p>A network of authors on network science, linked if they have published an article together; retrieved from <a href="http://www-personal.umich.edu/~mejn/netdata/">http://www-personal.umich.edu/~mejn/netdata/</a>.</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[2]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">path</span> <span class="o">=</span> <span class="s1">&#39;data/&#39;</span>
    
    <span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="n">path</span> <span class="o">+</span> <span class="s1">&#39;network__airports&#39;</span><span class="p">,</span> <span class="s1">&#39;rb&#39;</span><span class="p">)</span> <span class="k">as</span> <span class="n">f</span><span class="p">:</span>
        <span class="n">airports</span> <span class="o">=</span> <span class="n">pickle</span><span class="o">.</span><span class="n">load</span><span class="p">(</span><span class="n">f</span><span class="p">)</span>
    
    <span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="n">path</span> <span class="o">+</span> <span class="s1">&#39;network__facebook&#39;</span><span class="p">,</span> <span class="s1">&#39;rb&#39;</span><span class="p">)</span> <span class="k">as</span> <span class="n">f</span><span class="p">:</span>
        <span class="n">fb</span> <span class="o">=</span> <span class="n">pickle</span><span class="o">.</span><span class="n">load</span><span class="p">(</span><span class="n">f</span><span class="p">)</span>
    
    <span class="k">with</span> <span class="nb">open</span><span class="p">(</span><span class="n">path</span> <span class="o">+</span> <span class="s1">&#39;network__netscience&#39;</span><span class="p">,</span> <span class="s1">&#39;rb&#39;</span><span class="p">)</span> <span class="k">as</span> <span class="n">f</span><span class="p">:</span>
        <span class="n">netscience</span> <span class="o">=</span> <span class="n">pickle</span><span class="o">.</span><span class="n">load</span><span class="p">(</span><span class="n">f</span><span class="p">)</span>
    
    <span class="n">networks</span> <span class="o">=</span> <span class="p">{</span>
        <span class="s1">&#39;airports&#39;</span><span class="p">:</span> <span class="n">airports</span><span class="p">,</span>
        <span class="s1">&#39;fb&#39;</span><span class="p">:</span> <span class="n">fb</span><span class="p">,</span> 
        <span class="s1">&#39;netscience&#39;</span><span class="p">:</span> <span class="n">netscience</span>
    <span class="p">}</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>Let's make sure that each network is composed of a single connected component:</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[3]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">d</span> <span class="o">=</span> <span class="p">[]</span>
    <span class="k">for</span> <span class="n">name</span><span class="p">,</span> <span class="n">nw</span> <span class="ow">in</span> <span class="n">networks</span><span class="o">.</span><span class="n">items</span><span class="p">():</span>
        <span class="n">main_component_nodes</span> <span class="o">=</span> <span class="nb">max</span><span class="p">(</span><span class="n">nx</span><span class="o">.</span><span class="n">connected_components</span><span class="p">(</span><span class="n">nw</span><span class="p">),</span> <span class="n">key</span><span class="o">=</span><span class="nb">len</span><span class="p">)</span>
        <span class="n">main_nw</span> <span class="o">=</span> <span class="n">nw</span><span class="o">.</span><span class="n">subgraph</span><span class="p">(</span><span class="n">main_component_nodes</span><span class="p">)</span>
        <span class="c1"># Wrap network in another Graph object to avoid freezing</span>
        <span class="n">networks</span><span class="p">[</span><span class="n">name</span><span class="p">]</span> <span class="o">=</span> <span class="n">convert_node_labels_to_integers</span><span class="p">(</span><span class="n">nx</span><span class="o">.</span><span class="n">Graph</span><span class="p">(</span><span class="n">main_nw</span><span class="p">))</span>
        <span class="n">d</span><span class="o">.</span><span class="n">append</span><span class="p">({</span>
            <span class="s1">&#39;network_name&#39;</span><span class="p">:</span> <span class="n">name</span><span class="p">,</span>
            <span class="s1">&#39;n_nodes&#39;</span><span class="p">:</span> <span class="nb">len</span><span class="p">(</span><span class="n">main_nw</span><span class="o">.</span><span class="n">nodes</span><span class="p">),</span>
            <span class="s1">&#39;n_edges&#39;</span><span class="p">:</span> <span class="nb">len</span><span class="p">(</span><span class="n">main_nw</span><span class="o">.</span><span class="n">edges</span><span class="p">),</span>
            <span class="s1">&#39;density&#39;</span><span class="p">:</span> <span class="n">np</span><span class="o">.</span><span class="n">round</span><span class="p">(</span><span class="n">nx</span><span class="o">.</span><span class="n">density</span><span class="p">(</span><span class="n">main_nw</span><span class="p">),</span> <span class="mi">5</span><span class="p">)</span>
        <span class="p">})</span>
        <span class="nb">print</span><span class="p">(</span><span class="n">name</span><span class="p">)</span>
        <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;-&#39;</span> <span class="o">*</span> <span class="mi">25</span><span class="p">)</span>
        <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;Number of nodes: </span><span class="si">{}</span><span class="s1">&#39;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">main_nw</span><span class="o">.</span><span class="n">nodes</span><span class="p">)))</span>
        <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;Number of edges: </span><span class="si">{}</span><span class="s1">&#39;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">main_nw</span><span class="o">.</span><span class="n">edges</span><span class="p">)))</span>
        <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;Density: </span><span class="si">{}</span><span class="se">\n</span><span class="s1">&#39;</span><span class="o">.</span><span class="n">format</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">round</span><span class="p">(</span><span class="n">nx</span><span class="o">.</span><span class="n">density</span><span class="p">(</span><span class="n">main_nw</span><span class="p">),</span> <span class="mi">5</span><span class="p">)))</span>
    
    <span class="n">nw_df</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">d</span><span class="p">)</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
    <pre>airports
    -------------------------
    Number of nodes: 1572
    Number of edges: 17214
    Density: 0.01394
    
    fb
    -------------------------
    Number of nodes: 22470
    Number of edges: 171002
    Density: 0.00068
    
    netscience
    -------------------------
    Number of nodes: 379
    Number of edges: 914
    Density: 0.01276
    
    </pre>
    </div>
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h2 id='models'>II. Models</h2><h4 id="1.-Louvain">1. Louvain<a class="anchor-link" href="#1.-Louvain">&#182;</a></h4><p><a href="https://arxiv.org/abs/0803.0476">"Fast unfolding of communities in large networks"</a>
    <em>(Blondel et al., 2008)</em></p>
    <p>The standard in community detection algorithms. The Louvain method optimizes modularity via repeated iterations of a two-step process: First, each node is moved into the neighboring community that maximizes modularity the most; this process continues until modularity cannot be increased. Second, a meta-community structure is built by creating a network of the communities found in the first step. As such, a "dendrogram" of partitions is created, of which the final one has the highest modularity score and the least granular communities.</p>
    <h4 id="2.-EdMot">2. EdMot<a class="anchor-link" href="#2.-EdMot">&#182;</a></h4><p><a href="https://arxiv.org/abs/1906.04560">EdMot: An Edge Enhancement Approach for Motif-aware Community Detection</a>
        <em>(Li et al., 2019)</em></p>
    <p>An augmented version of the Louvain method. EdMot constructs a network of "edge motifs" where nodes are connected if the overlap between their neighbors exceeds a certain threshold. The Louvain method is used to find communities in the resulting structure.</p>
    <h4 id="3.-Greedy-Modularity-(Clauset-Newman-Moore-Algorithm)">3. Greedy Modularity (Clauset-Newman-Moore Algorithm)<a class="anchor-link" href="#3.-Greedy-Modularity-(Clauset-Newman-Moore-Algorithm)">&#182;</a></h4><p><a href="https://arxiv.org/abs/cond-mat/0408187">Finding community structure in very large networks</a> <em>(Clauset et al., 2004)</em></p>
    <p>A precursor to the Louvain algorithm, and also based around modularity maximization.</p>
    <h4 id="4.-Label-Propagation">4. Label Propagation<a class="anchor-link" href="#4.-Label-Propagation">&#182;</a></h4><p><a href="https://arxiv.org/abs/0709.2938">Near linear time algorithm to detect community structures in large-scale networks</a>
        <em>(Raghavan et al., 2007)</em></p>
    <p>A dead simple method: No function to optimize, no complex structural model to build. Each node begins with a unique community label; in each subsequent iteration, each node takes the community label that is most common among its neighbors. The algorithm stops after a pre-determined number of iterations.</p>
    <h4 id="5.-SCD">5. SCD<a class="anchor-link" href="#5.-SCD">&#182;</a></h4><p><a href="http://www.cs.ucf.edu/~kienhua/classes/COP5711/Papers/CommunityDetection.pdf">"High Quality, Scalable and Parallel Community Detection for Large Real Graphs"</a>
        <em>(Prat-Perez et al., 2018(?))</em></p>
    <p>A novel method that eschews modularity optimization in favor of a triangle-based "Weighted Community Clustering" score:</p>
    <blockquote><p>By combining different strategies, SCD partitions the graph by maximizing the Weighted Community Clustering (WCC), a recently proposed community detection metric based on triangle analysis.</p>
    </blockquote>
    <h4 id="6.-GEMSEC">6. GEMSEC<a class="anchor-link" href="#6.-GEMSEC">&#182;</a></h4><p><a href="https://arxiv.org/abs/1802.03997">GEMSEC: Graph Embedding with Self Clustering</a>
        <em>(Rozemberczki et al., 2019)</em></p>
    <p>More a graph embedding and clustering method than a traditional community detection algorithm. From the paper:</p>
    <blockquote><p>GEMSEC places nodes in an abstract feature space where the vertex features minimize the negative log-likelihood of preserving sampled vertex neighborhoods, and it incorporates known social network properties through a machine learning regularization.</p>
    </blockquote>
    
    </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>Karateclub's has a nice simple interface for fitting its community detection methods. For consistency's sake, let's wrap the Louvain and GreedyModularity algorithms in a karateclub-style model class with <code>fit()</code> and <code>get_memberships()</code> methods:</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[27]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="k">class</span> <span class="nc">Louvain</span><span class="p">(</span><span class="n">Estimator</span><span class="p">):</span>
        <span class="k">def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">seed</span><span class="o">=</span><span class="mi">42</span><span class="p">,</span> <span class="n">resolution</span><span class="o">=</span><span class="mf">1.</span><span class="p">):</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">seed</span> <span class="o">=</span> <span class="n">seed</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">res</span> <span class="o">=</span> <span class="n">resolution</span>
    
        <span class="k">def</span> <span class="nf">_get_best_partition</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">_cluster_memberships</span> <span class="o">=</span> <span class="n">best_partition</span><span class="p">(</span>
                <span class="bp">self</span><span class="o">.</span><span class="n">_graph</span><span class="p">,</span> <span class="n">random_state</span><span class="o">=</span><span class="bp">self</span><span class="o">.</span><span class="n">seed</span><span class="p">,</span> <span class="n">resolution</span><span class="o">=</span><span class="bp">self</span><span class="o">.</span><span class="n">res</span><span class="p">)</span>
        
        <span class="k">def</span> <span class="nf">fit</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">graph</span><span class="p">):</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">_set_seed</span><span class="p">()</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">_check_graph</span><span class="p">(</span><span class="n">graph</span><span class="p">)</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">_graph</span> <span class="o">=</span> <span class="n">graph</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">_get_best_partition</span><span class="p">()</span>
        
        <span class="k">def</span> <span class="nf">get_memberships</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
            <span class="k">return</span> <span class="bp">self</span><span class="o">.</span><span class="n">_cluster_memberships</span>
    
    
    <span class="k">class</span> <span class="nc">GreedyModularity</span><span class="p">(</span><span class="n">Estimator</span><span class="p">):</span>
        <span class="k">def</span> <span class="fm">__init__</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">weight</span><span class="p">,</span> <span class="n">seed</span><span class="o">=</span><span class="mi">42</span><span class="p">):</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">seed</span> <span class="o">=</span> <span class="n">seed</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">weight</span> <span class="o">=</span> <span class="n">weight</span>
        
        <span class="k">def</span> <span class="nf">_get_partition</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
            <span class="n">partition</span> <span class="o">=</span> <span class="nb">list</span><span class="p">(</span><span class="n">greedy_modularity_communities</span><span class="p">(</span>
                <span class="bp">self</span><span class="o">.</span><span class="n">_graph</span><span class="p">,</span> <span class="n">weight</span><span class="o">=</span><span class="bp">self</span><span class="o">.</span><span class="n">weight</span><span class="p">))</span>
            <span class="n">new_part</span><span class="o">=</span> <span class="p">{}</span>
            <span class="k">for</span> <span class="n">i</span><span class="p">,</span> <span class="n">comm</span> <span class="ow">in</span> <span class="nb">enumerate</span><span class="p">(</span><span class="n">partition</span><span class="p">):</span>
                <span class="k">for</span> <span class="n">node</span> <span class="ow">in</span> <span class="n">comm</span><span class="p">:</span>
                    <span class="n">new_part</span><span class="p">[</span><span class="n">node</span><span class="p">]</span> <span class="o">=</span> <span class="n">i</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">_cluster_memberships</span> <span class="o">=</span> <span class="n">new_part</span>        
            
        <span class="k">def</span> <span class="nf">fit</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">graph</span><span class="p">):</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">_check_graph</span><span class="p">(</span><span class="n">graph</span><span class="p">)</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">_graph</span> <span class="o">=</span> <span class="n">graph</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">_get_partition</span><span class="p">()</span>
        
        <span class="k">def</span> <span class="nf">get_memberships</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
            <span class="k">return</span> <span class="bp">self</span><span class="o">.</span><span class="n">_cluster_memberships</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>Here are the models and their respective default parameters. We'll hold off on GEMSEC for the moment because it requires the number of communities as an input (more on that below).</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[5]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">models</span> <span class="o">=</span> <span class="p">[</span>
        <span class="p">(</span><span class="s1">&#39;EdMot&#39;</span><span class="p">,</span> 
         <span class="p">{</span><span class="s1">&#39;component_count&#39;</span><span class="p">:</span> <span class="mi">2</span><span class="p">,</span>
          <span class="s1">&#39;cutoff&#39;</span><span class="p">:</span> <span class="mi">50</span><span class="p">}),</span>
        <span class="p">(</span><span class="s1">&#39;GEMSEC&#39;</span><span class="p">,</span> 
         <span class="p">{</span><span class="s1">&#39;walk_number&#39;</span><span class="p">:</span> <span class="mi">5</span><span class="p">,</span>
          <span class="s1">&#39;walk_length&#39;</span><span class="p">:</span> <span class="mi">10</span><span class="p">,</span> <span class="c1"># Default is 80, but it&#39;s way too slow</span>
          <span class="s1">&#39;dimensions&#39;</span><span class="p">:</span> <span class="mi">32</span><span class="p">,</span>
          <span class="s1">&#39;learning_rate&#39;</span><span class="p">:</span> <span class="mf">0.1</span><span class="p">,</span>
          <span class="s1">&#39;clusters&#39;</span><span class="p">:</span> <span class="mi">10</span><span class="p">}),</span>
        <span class="p">(</span><span class="s1">&#39;GreedyModularity&#39;</span><span class="p">,</span>
         <span class="p">{</span><span class="s1">&#39;weight&#39;</span><span class="p">:</span> <span class="s1">&#39;weight&#39;</span><span class="p">}),</span>
        <span class="p">(</span><span class="s1">&#39;LabelPropagation&#39;</span><span class="p">,</span> 
         <span class="p">{</span><span class="s1">&#39;iterations&#39;</span><span class="p">:</span> <span class="mi">100</span><span class="p">}),</span>
        <span class="p">(</span><span class="s1">&#39;Louvain&#39;</span><span class="p">,</span> 
         <span class="p">{</span><span class="s1">&#39;resolution&#39;</span><span class="p">:</span> <span class="mf">1.</span><span class="p">}),</span>
        <span class="p">(</span><span class="s1">&#39;SCD&#39;</span><span class="p">,</span> 
         <span class="p">{</span><span class="s1">&#39;iterations&#39;</span><span class="p">:</span> <span class="mi">25</span><span class="p">}),</span>
    <span class="p">]</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p><h2 id='community-detection'>III. Community Detection</h2>
    This is a wrapper function that expects a <code>karateclub</code>-style model and returns a few metrics to evaluate the model's partition, as well as the partition itself.</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[6]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">do_comm_detection</span><span class="p">(</span><span class="n">model</span><span class="p">,</span> <span class="n">network</span><span class="p">):</span>
        <span class="n">model_name</span> <span class="o">=</span> <span class="n">model</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
        <span class="n">algo</span> <span class="o">=</span> <span class="nb">eval</span><span class="p">(</span><span class="n">model_name</span><span class="p">)</span>
        <span class="n">params</span> <span class="o">=</span> <span class="n">model</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span>
        
        <span class="n">start</span> <span class="o">=</span> <span class="n">datetime</span><span class="o">.</span><span class="n">now</span><span class="p">()</span>
        <span class="n">model_instance</span> <span class="o">=</span> <span class="n">algo</span><span class="p">(</span><span class="o">**</span><span class="n">params</span><span class="p">)</span>
        <span class="n">model_instance</span><span class="o">.</span><span class="n">fit</span><span class="p">(</span><span class="n">network</span><span class="p">)</span>
        <span class="n">partition</span> <span class="o">=</span> <span class="n">model_instance</span><span class="o">.</span><span class="n">get_memberships</span><span class="p">()</span>
        <span class="n">finish</span> <span class="o">=</span> <span class="n">datetime</span><span class="o">.</span><span class="n">now</span><span class="p">()</span>
        
        <span class="n">time_elapsed</span> <span class="o">=</span> <span class="p">(</span><span class="n">finish</span> <span class="o">-</span> <span class="n">start</span><span class="p">)</span><span class="o">.</span><span class="n">total_seconds</span><span class="p">()</span>
        <span class="n">n_comm</span> <span class="o">=</span> <span class="nb">len</span><span class="p">(</span><span class="nb">set</span><span class="p">(</span><span class="n">partition</span><span class="o">.</span><span class="n">values</span><span class="p">()))</span>
        <span class="n">mod</span> <span class="o">=</span> <span class="n">modularity</span><span class="p">(</span><span class="n">partition</span><span class="p">,</span> <span class="n">network</span><span class="p">)</span>
            
        <span class="n">metrics</span> <span class="o">=</span> <span class="p">{</span>
            <span class="s1">&#39;model_name&#39;</span><span class="p">:</span> <span class="n">model_name</span><span class="p">,</span>
            <span class="s1">&#39;time_elapsed&#39;</span><span class="p">:</span> <span class="n">time_elapsed</span><span class="p">,</span>
            <span class="s1">&#39;modularity&#39;</span><span class="p">:</span> <span class="n">mod</span><span class="p">,</span>
            <span class="s1">&#39;n_communities&#39;</span><span class="p">:</span> <span class="n">n_comm</span>    
        <span class="p">}</span>
        <span class="k">return</span> <span class="n">metrics</span><span class="p">,</span> <span class="n">partition</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>Let's run each algorithm with its default parameters on each network and evaluate each on a few simple metrics:</p>
    <ul>
    <li>Time elapsed (in seconds)</li>
    <li>Number of communities found</li>
    <li>Modularity of partition</li>
    </ul>
    <p>Note that where possible we'll use each algorithm's <strong>default parameters</strong>.</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[7]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">all_metrics</span> <span class="o">=</span> <span class="p">[]</span>
    <span class="k">for</span> <span class="n">network_name</span><span class="p">,</span> <span class="n">network</span> <span class="ow">in</span> <span class="n">networks</span><span class="o">.</span><span class="n">items</span><span class="p">():</span>
        <span class="k">for</span> <span class="n">model</span> <span class="ow">in</span> <span class="n">models</span><span class="p">:</span>
            <span class="k">if</span> <span class="n">model</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;GEMSEC&#39;</span><span class="p">:</span> <span class="k">continue</span> <span class="c1"># Skip GEMSEC for now</span>
            <span class="n">metrics</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="n">do_comm_detection</span><span class="p">(</span><span class="n">model</span><span class="p">,</span> <span class="n">network</span><span class="p">)</span>
            <span class="n">metrics</span><span class="p">[</span><span class="s1">&#39;network_name&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">network_name</span>
            <span class="n">all_metrics</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">metrics</span><span class="p">)</span>
    <span class="n">df</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">all_metrics</span><span class="p">)</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h3 id='adding-gemsec'>1. Adding GEMSEC</h3><p>As with other k-means-based methods like <a href="https://scikit-learn.org/stable/modules/generated/sklearn.cluster.SpectralClustering.html">Spectral Clustering</a>, GEMSEC requires that you input the number of desired clusters as a parameter to the model. This is a significant disadvantage: You must either have prior knowledge of the community structure, or you must have an external constraint to dictate how many clusters to look for (true if you're making tshirt sizes). In our case, we can use the other algorithms' output as a baseline for how many communities to look for. We'll take the median of the number of found communities across the other four algorithms.</p>
    <p>_Note: GEMSEC's default paramater of <code>walk_length=80</code> is too slow; with that value the algorithm drags on for hours on larger networks. I've shortened it to 20 here, with the full understanding that that may compromise the algorithm's effectiveness._</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[8]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">gemsec</span> <span class="o">=</span> <span class="n">models</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span>
    <span class="k">for</span> <span class="n">network_name</span><span class="p">,</span> <span class="n">network</span> <span class="ow">in</span> <span class="n">networks</span><span class="o">.</span><span class="n">items</span><span class="p">():</span>
        <span class="n">med_ncomm</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">round</span><span class="p">(</span><span class="n">df</span><span class="o">.</span><span class="n">loc</span><span class="p">[</span><span class="n">df</span><span class="o">.</span><span class="n">network_name</span> <span class="o">==</span> <span class="n">network_name</span><span class="p">]</span>
                             <span class="p">[</span><span class="s1">&#39;n_communities&#39;</span><span class="p">]</span><span class="o">.</span><span class="n">median</span><span class="p">())</span>
        <span class="n">gemsec</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="s1">&#39;clusters&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="n">med_ncomm</span><span class="p">)</span>
        <span class="n">metrics_gemsec</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="n">do_comm_detection</span><span class="p">(</span><span class="n">gemsec</span><span class="p">,</span> <span class="n">network</span><span class="p">)</span>
        <span class="n">metrics_gemsec</span><span class="p">[</span><span class="s1">&#39;network_name&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">network_name</span>
        <span class="n">all_metrics</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">metrics_gemsec</span><span class="p">)</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
    <pre>airports
    2020-09-03 11:11:35.665957
    fb
    2020-09-03 11:12:21.110774
    netscience
    2020-09-03 11:35:49.741813
    </pre>
    </div>
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>Here's our model evaluation data:</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[9]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">df</span> <span class="o">=</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">all_metrics</span><span class="p">)</span>
    <span class="n">df</span><span class="o">.</span><span class="n">sort_values</span><span class="p">(</span><span class="n">by</span><span class="o">=</span><span class="s1">&#39;model_name&#39;</span><span class="p">)</span><span class="o">.</span><span class="n">round</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[9]:</div>
    
    
    
    <div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
    <div>
    <style scoped>
        .dataframe tbody tr th:only-of-type {
            vertical-align: middle;
        }
    
        .dataframe tbody tr th {
            vertical-align: top;
        }
    
        .dataframe thead th {
            text-align: right;
        }
    </style>
    <table border="1" class="dataframe">
      <thead>
        <tr style="text-align: right;">
          <th></th>
          <th>model_name</th>
          <th>time_elapsed</th>
          <th>modularity</th>
          <th>n_communities</th>
          <th>network_name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>0</th>
          <td>EdMot</td>
          <td>0.66</td>
          <td>0.27</td>
          <td>14</td>
          <td>airports</td>
        </tr>
        <tr>
          <th>10</th>
          <td>EdMot</td>
          <td>0.03</td>
          <td>0.85</td>
          <td>19</td>
          <td>netscience</td>
        </tr>
        <tr>
          <th>5</th>
          <td>EdMot</td>
          <td>13.87</td>
          <td>0.59</td>
          <td>50</td>
          <td>fb</td>
        </tr>
        <tr>
          <th>15</th>
          <td>GEMSEC</td>
          <td>45.37</td>
          <td>0.07</td>
          <td>14</td>
          <td>airports</td>
        </tr>
        <tr>
          <th>16</th>
          <td>GEMSEC</td>
          <td>1407.63</td>
          <td>0.37</td>
          <td>172</td>
          <td>fb</td>
        </tr>
        <tr>
          <th>17</th>
          <td>GEMSEC</td>
          <td>11.19</td>
          <td>0.66</td>
          <td>19</td>
          <td>netscience</td>
        </tr>
        <tr>
          <th>6</th>
          <td>GreedyModularity</td>
          <td>500.93</td>
          <td>0.55</td>
          <td>172</td>
          <td>fb</td>
        </tr>
        <tr>
          <th>11</th>
          <td>GreedyModularity</td>
          <td>0.05</td>
          <td>0.84</td>
          <td>19</td>
          <td>netscience</td>
        </tr>
        <tr>
          <th>1</th>
          <td>GreedyModularity</td>
          <td>0.96</td>
          <td>-0.02</td>
          <td>694</td>
          <td>airports</td>
        </tr>
        <tr>
          <th>7</th>
          <td>LabelPropagation</td>
          <td>31.27</td>
          <td>0.42</td>
          <td>608</td>
          <td>fb</td>
        </tr>
        <tr>
          <th>2</th>
          <td>LabelPropagation</td>
          <td>2.32</td>
          <td>0.00</td>
          <td>12</td>
          <td>airports</td>
        </tr>
        <tr>
          <th>12</th>
          <td>LabelPropagation</td>
          <td>0.24</td>
          <td>0.76</td>
          <td>38</td>
          <td>netscience</td>
        </tr>
        <tr>
          <th>3</th>
          <td>Louvain</td>
          <td>0.47</td>
          <td>0.27</td>
          <td>14</td>
          <td>airports</td>
        </tr>
        <tr>
          <th>13</th>
          <td>Louvain</td>
          <td>0.03</td>
          <td>0.85</td>
          <td>19</td>
          <td>netscience</td>
        </tr>
        <tr>
          <th>8</th>
          <td>Louvain</td>
          <td>11.85</td>
          <td>0.59</td>
          <td>50</td>
          <td>fb</td>
        </tr>
        <tr>
          <th>9</th>
          <td>SCD</td>
          <td>274.71</td>
          <td>0.43</td>
          <td>8440</td>
          <td>fb</td>
        </tr>
        <tr>
          <th>14</th>
          <td>SCD</td>
          <td>0.43</td>
          <td>0.59</td>
          <td>141</td>
          <td>netscience</td>
        </tr>
        <tr>
          <th>4</th>
          <td>SCD</td>
          <td>11.67</td>
          <td>-0.00</td>
          <td>875</td>
          <td>airports</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h2 id='algorithm-evaluation'>IV. Algorithm Evaluation</h2><p>Interesting. Clearly some of these algorithms are not tuned correctly on these networks. Here are a couple of immediate observations:</p>
    <ul>
    <li>All of the algorithms perform adequately on the Facebook dataset, although Louvain achieves the best results.</li>
    <li>EdMot returns identical results to Louvain: In the current implementation, it appears to offer absolutely no advantage over the Louvain algorithm. In fact, it's slightly slower.</li>
    <li>The algorithms that don't take edge weight into account (all but Louvain and EdMot) whiff on the weighted airports dataset.</li>
    <li>The algorithms that require extensive tuning (GEMSEC and SCD, and to a certain extent Label Propagation) perform comparatively poorly.</li>
    </ul>
    <p>Now let's compare these models on speed, modularity, and stochasticity.</p>
    
    </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h3 id='modularity'>1. Modularity</h3><p><a href='https://en.wikipedia.org/wiki/Louvain_modularity'>Modularity</a> measures the extent to which a network is partitioned into meaningful communities. A network with nodes assigned to communities at random will have a modularity score near 0. A network of nearly perfectly separable communities (dense webs connected by thin strands) will have a modularity near 1, but reasonable community structures exist in networks with modularity as low as 0.15 - 0.2. Mathematically, modularity is defined as</p>
    
    </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p><img src="modularity.png" alt="Modularity Formula" style="width: 300px; float: left;"/></p>
    
    </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>where A is the adjacency matrix, k<sub>i</sub> is the degree of node i (the number of links that touch it), C<sub>i</sub> is the community node i belongs to, and &delta; cancels out the term by equaling 0 if C<sub>i</sub> and C<sub>j</sub> are not the same.</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[10]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">mod_by_algo</span> <span class="o">=</span> <span class="n">df</span><span class="o">.</span><span class="n">groupby</span><span class="p">(</span><span class="s1">&#39;model_name&#39;</span><span class="p">)[</span><span class="s1">&#39;modularity&#39;</span><span class="p">]</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span><span class="o">.</span><span class="n">round</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>Now let's plot modularity by algorithm for a side-by-side visual comparison:</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[11]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">matplotlib</span><span class="o">.</span><span class="n">rcParams</span><span class="p">[</span><span class="s1">&#39;figure.dpi&#39;</span><span class="p">]</span><span class="o">=</span> <span class="mi">200</span>
    <span class="n">fig</span><span class="p">,</span> <span class="n">ax</span> <span class="o">=</span> <span class="n">plt</span><span class="o">.</span><span class="n">subplots</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">15</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>
    <span class="n">x</span> <span class="o">=</span> <span class="p">[</span><span class="n">_</span> <span class="k">for</span> <span class="n">_</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">mod_by_algo</span><span class="p">))]</span>
    <span class="n">ax</span><span class="o">.</span><span class="n">bar</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">mod_by_algo</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">&#39;#4d8fac&#39;</span><span class="p">)</span>
    <span class="n">ax</span><span class="o">.</span><span class="n">title</span><span class="o">.</span><span class="n">set_text</span><span class="p">(</span><span class="s1">&#39;Mean modularity by algorithm&#39;</span><span class="p">);</span>
    
    <span class="n">rects</span> <span class="o">=</span> <span class="n">ax</span><span class="o">.</span><span class="n">patches</span>
    <span class="n">labels</span> <span class="o">=</span> <span class="n">mod_by_algo</span>
    <span class="k">for</span> <span class="n">rect</span><span class="p">,</span> <span class="n">label</span> <span class="ow">in</span> <span class="nb">zip</span><span class="p">(</span><span class="n">rects</span><span class="p">,</span> <span class="n">labels</span><span class="p">):</span>
        <span class="n">ax</span><span class="o">.</span><span class="n">text</span><span class="p">(</span><span class="n">rect</span><span class="o">.</span><span class="n">get_x</span><span class="p">()</span> <span class="o">+</span> <span class="n">rect</span><span class="o">.</span><span class="n">get_width</span><span class="p">()</span> <span class="o">/</span> <span class="mi">2</span><span class="p">,</span> 
                <span class="n">rect</span><span class="o">.</span><span class="n">get_height</span><span class="p">(),</span> <span class="n">label</span><span class="p">,</span>
                <span class="n">ha</span><span class="o">=</span><span class="s1">&#39;center&#39;</span><span class="p">,</span> <span class="n">va</span><span class="o">=</span><span class="s1">&#39;bottom&#39;</span><span class="p">)</span>
    
    <span class="n">xtick_labels</span> <span class="o">=</span> <span class="p">[</span><span class="n">model</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="k">for</span> <span class="n">model</span> <span class="ow">in</span> <span class="n">models</span><span class="p">]</span>
    <span class="n">ax</span><span class="o">.</span><span class="n">set_xticks</span><span class="p">(</span><span class="n">x</span><span class="p">)</span>
    <span class="n">ax</span><span class="o">.</span><span class="n">set_xticklabels</span><span class="p">(</span><span class="n">xtick_labels</span><span class="p">);</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,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3TnfDgW+Fs6jk6xc6kEAAAAAAAAAAADL0v5Jvj7fTkzpCAAAAAAAAAAAMCJU+Fo4Pxlb+drXvpYHP/jBSzkWAAAAAAAAAABgiV1zzTU54IADxh7+ZLq2wxL4Wjj3jK08+MEPzq677rqUYwEAAAAAAAAAAJaXe2ZuMjNTOgIAAAAAAAAAAIwIgS8AAAAAAAAAAIARIfAFAAAAAAAAAAAwIgS+AAAAAAAAAAAARoTAFwAAAAAAAAAAwIgQ+AIAAAAAAAAAABgRAl/ABufKK6/M8ccfn3322Sdbb711dtxxxxxwwAF55zvfmdWrV8+r78FraZoAACAASURBVBUrVqSqhlpWrFgxaR8nnHDC0H2MLSeccMK8xg0AAAAAwPLhe2wAAOZjk6UeAMBCOvfcc3PEEUfkpptuWrtt9erVWblyZVauXJmTTz455513Xvbcc88lHOXsPfKRj1zqIQAAAAAAsAB8jw0AwHxVa22px7BBqKpdk6xKklWrVmXXXXdd4hHBL56LL744T3rSk7J69epss802eeMb35hDDz00t99+ez72sY/lAx/4QJJk7733zsqVK7PNNtvM+hwrVqzIK1/5yiTJ5z73ueyyyy5Ttt11111zv/vd7z7br7/++lx//fXTnueee+7JU57ylNx8883Zbrvtcu2112bLLbec9XgBAAAAAFg+fI8NAPCL56qrrspuu+029nC31tpV8+1ThS9gg/H6178+q1evziabbJLPf/7zOfDAA9fue9rTnpaHP/zhecMb3pBLLrkk7373u/OWt7xlXud7xCMekT322GPWx+28887Zeeedp23z2c9+NjfffHOS5PDDD/dLMgAAAADABsD32AAALISNlnoAAAth5cqVueCCC5IkRx999Dq/JI857rjjss8++yRJ3vve9+auu+5an0OcldNPP33t+pFHHrmEIwEAAAAAYCH4HhsAgIUi8AVsED75yU+uXR8rVT3RRhtttPaXzp/97Gdrf7Febm6++eZ86lOfSpI89KEPzcEHH7zEIwIAAAAAYL58jw0AwEIR+AI2CF/84heTJFtvvXUe//jHT9nukEMOWbv+pS99adHHNRdnnXVWbr/99iTJy1/+8lTVEo8IAAAAAID58j02AAALReAL2CB8//vfT5Lstdde2WSTTaZst/fee9/nmLk66qij8sAHPjCbbbZZdtpppzzxiU/Mm9/85lx99dXz6lcZbAAAAACADY/vsQEAWCgCX8DIu+OOO3LDDTckSXbddddp2+6www7ZeuutkySrVq2a13kvvPDCXH/99bnrrrty44035qtf/Wre9ra3Za+99sr73//+OfX5ox/9aO1feR100EF52MMeNq8xAgAAAACw9HyPDQDAQpr6zwcARsQtt9yydn2bbbaZsf3WW2+d2267Lbfeeuuczrfnnnvm+c9/fg488MDstttuSZLLL788H//4x3P22WfnjjvuyGte85pUVY499thZ9X366aentZYkecUrXjGn8QEAAAAAsLz4HhsAgIVUY/9DxvxU1a5JViXdX1vM9NcZwMJZtWpVdt999yTJy1/+8nVKSU9m9913z6pVq/Kwhz0sP/jBD2Z1rptuuinbbbddqmrS/eecc06e//zn56677spWW22Vyy67LA960IOG7v+Rj3xkLr300myxxRa59tprs/32289qfAAAAAAALD++xwYA+MV11VVXrQ3hJ9mttXbVfPs0pSMw8rbYYou162vWrJmx/Z133pkk2XLLLWd9ru23337KX5KT5NnPfnbe+ta3JklWr16dU045Zei+v/KVr+TSSy9Nkjz3uc/1SzIAAAAAwAbC99gAACwkgS9g5G277bZr14cpb33bbbclGa5s9lwcc8wxa3+ZvvDCC4c+bvAvuo488sgFHxcAAAAAAEvD99gAACwkgS9g5G2xxRbZaaedknSlEKfzs5/9bO0vygMlExfUzjvvvHY8V1999VDHrFmzJmeccUaS5IEPfGAOO+ywRRkbAAAAAADrn++xAQBYSAJfwAZhn332SZL84Ac/yN133z1lu0suueQ+xyyG1tqs2p9zzjn56U9/miQ54ogjsvHGGy/GsAAAAAAAWCK+xwYAYKEIfAEbhCc/+clJujLX3/jGN6ZsN1ia+qCDDlqUsVx//fW58cYbkyS77LLLUMcogw0AAAAAsGHzPTYAAAtF4AvYIDzvec9bu37aaadN2ubee+9d+wvp/e53vxx66KGLMpaTTjpp7V9GHXLIITO2v/HGG3PeeeclSfbdd9/su+++izIuAAAAAACWju+xAQBYKAJfwAbhgAMOyMEHH5wkOeWUU3LRRRfdp8273vWufP/730+SvO51r8umm266zv4LLrggVZWqylFHHXWf46+44op885vfnHYc55xz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AAAAAAAAAIARIfAFAAAAAAAAAAAwIgS+AAAAAAAAAAAARoTAFwAAAAAAAAAAwIgQ+AIAAAAAAAAAABgRAl8AAAAAAAAAAAAjQuALAAAAAAAAAABgRAh8AQAAAAAAAAAAjAiBLwAAAGBaV155ZY4//vjss88+2XrrrbPjjjvmgAMOyDvf+c6sXr16Uc65evXq7LnnnqmqVFX22GOPoY+96667smLFijzrWc/K7rvvns033zw77bRTHv3oR+fVr351zjrrrEUZMwAAAADA+rDJUg8AAAAAWL7OPffcHHHEEbnpppvWblu9enVWrlyZlStX5uSTT855552XPffcc0HP+5a3vCU//OEPZ33ct7/97RxxxBH57ne/u872G2+8MTfeeGO++93v5uyzz87hhx++UEMFAAAAAFivBL4AAACASV188cV50YtelNWr/3/27j/Ky7rOG//zwgEHBlogNN3gRhBJjlZrJC47yg8zc3PZmzIt8ydr2ma1Yigmex/z7FkrTblh19IM4s6+Jrabq664G925IPijyK8HvxXoWqyA5Q9WRGAGELi+fzBMgwwDM8OH4aOPxzmf83lfn+t1vV+v8a8OPc/1bkjv3r1z7bXXZvz48WlsbMzcuXPzne98J88880zOPPPMLFmyJL17994vfZ966qnMmDEjtbW16d69e9avX79Pzz399NMZP358Xn311fTo0SOTJk3Kn//5n2fgwIF57bXX8vzzz+enP/1pFi1atF/mBAAAAADoCgJfAAAAQKsmT56choaG1NTUZP78+Rk9enTzvVNPPTXHHHNMpk6dmuXLl2f69Om57rrrOt1z27ZtufTSS7Nt27Z85StfyezZs/cp8LVp06acffbZefXVV3PkkUdm/vz5Of7443er+6u/+qts2bKl03MCAAAAAHSVbl09AAAAAHDwWbJkSRYsWJAkueSSS3YJe+00ZcqUjBgxIkkyY8aMvPHGG53uO3PmzDz55JN5z3vek2uuuWafn7v55pvz7LPPJkl+8IMftBr22qlHjx6dnhMAAAAAoKsIfAEAAAC7ue+++5rXkyZNarWmW7duufDCC5Mka9eubQ6IddTzzz/f/Jaw2267bZ+DWdu2bcvtt9+eJBk3blzGjRvXqTkAAAAAAA5mAl8AAADAbhYtWpQkqaury8iRI/dYN3bs2Ob14sWLO9Xz8ssvz8aNG3PBBRdk/Pjx+/zcY489lhdeeCFJcvbZZzf/3tDQkOeeey6///3vs3379k7NBgAAAABwsBD4AgAAAHazbNmyJMmwYcNSU1Ozx7pjjz12t2c6Yu7cuXnooYfSr1+/3Hzzze169oknnmhejx49Oj//+c/zkY98JH369MkxxxyTP/7jP85hhx2Wz3zmM3n++ec7PCMAAAAAwMFA4AsAAADYxaZNm7JmzZokycCBA9us7devX+rq6pIkq1at6lC/tWvXZvLkyUmSr3/96zn88MPb9fyvf/3r5vUTTzyR+vr6zJ8/f5e3er366quZPXt2/uRP/iSPPPJIh+YEAAAAADgYCHwBAAAAu1i/fn3zunfv3nut3xn42rBhQ4f6XX311XnppZcyevToXHrppe1+/tVXX21eX3nlldm2bVumTp2a3/zmN9m8eXOee+65XHXVVSmKIq+99lo+/vGPNx8BCQAAAABQbQS+AAAAgF1s2rSped2jR4+91h966KFJksbGxnb3euSRR/Ld7343NTU1uf3221MURbv32LhxY/N68+bNuemmm3LjjTdm6NCh6dGjR44++uh84xvfyA033JAk+e///u987Wtfa3cfAAAAAICDgcAXAAAAsIva2trm9ZYtW/Zav3nz5iRJz54929Vn8+bNueyyy1KWZa644oq8733va9+gTVrOO3DgwFx55ZWt1l199dU58sgjkyRz585NWZYd6gcAAAAA0JUEvgAAAIBd9OnTp3m9L8c07nzD1r4c/9jSDTfckGeeeSaDBg3K9ddf365nW2o574c//OEccsghrdbV1NTk1FNPTbLjLV8rVqzocE8AAAAAgK5S09UDAAAAAAeX2traDBgwIGvWrMnq1avbrF27dm1z4GvQoEHt6nPjjTcmSU477bQ8+OCDrdbs3Hvjxo2ZO3dukuTwww9vDm69ue/AgQPb7Nmy9uWXX87QoUPbNTMAAAAAQFcT+AIAAAB2M2LEiCxatCjPPfdctm7dmpqa1v8JYfny5bs80x47j4ucM2dO5syZ02btmjVrcu655yZJxo4du0vg67jjjmteb9u2rc19Wt7f098EAAAAAHAwc6QjAAAAsJuTTz45yY43az355JN7rFu4cGHzur6+vuJztWbMmDHN69/85jdt1ra8/+53v7tiMwEAAAAAVIrAFwAAALCbiRMnNq/39Pat7du3584770yS9O3bN+PHj29Xj7Is9/oZPHhwkmTw4MHNvy1YsGCXfYYMGZITTjghSfLjH/84DQ0NrfZbv359fvKTnyRJjj766Bx55JHtmhcAAAAA4GAg8AUAAADsZtSoUTnllFOSJLNnz87jjz++W80tt9ySZcuWJUmuuOKKdO/efZf7CxYsSFEUKYoiF198cUXn/fKXv5wkee211zJlypRWa6688sqsX78+SfLXf/3XFZ0HAAAAAKBSarp6AAAAAODgNHPmzNTX16exsTGnn356pk2blvHjx6exsTFz587NHXfckSQZPnz4HkNWB8o555yT733ve3nooYdy++23Z9WqVbnssssyaNCgrFy5Mrfffnv+/d//PUlywgkn5Atf+EKXzgsAAAAA0FECXwAAAECrTjjhhNxzzz05//zz8/rrr2fatGm71QwfPjzz5s1Lnz59umDCXd1zzz0566yzMn/+/MybNy/z5s3brebEE0/MAw88kNra2i6YEAAAAACg8xzpCAAAAOzRhAkT8vTTT+fKK6/M8OHD06tXr/Tt2zcf/OAHc+ONN+app57KsGHDunrMJEnv3r3z4x//OHfffXfOOOOMHHHEEenevXsOO+ywfPjDH853v/vdPP744zniiCO6elQAAAAAgA4ryrLs6hneEoqiGJhkVZKsWrUqAwcO7OKJaMtfzvhRV48AkAcmn9XVIwAAAABwEPJv2MDBwr9jA0DnrV69OoMGDdp5Oagsy9Wd3dMbvgAAAAAAAAAAAKqEwBcAAAAAAAAAAECVEPgCAAAAAAAAAACoEgJfAAAAAAAAAAAAVULgCwAAAAAAAAAAoErUdPUAAAAAVLe/nPGjrh4BIEnywOSzunoEAAAAAKg4b/gCAAAAAAAAAACoEgJfAAAAAAAAAAAAVULgCwAAAAAAAAAAoEoIfAEAAAAAAAAAAFQJgS8AAAAAAAAAAIAqIfAFAAAAAAAAAABQJQS+AAAAAAAAAAAAqoTAFwAAAAAAAAAAQJUQ+AIAAAAAAAAAAKgSAl8AAAAAAAAAAABVQuALAAAAAAAAAACgSgh8AQAAAAAAAAAAVAmBLwAAAAAAAAAAgCoh8AUAAAAAAAAAAFAlBL4AAAAAAAAAAACqhMAXAAAAAAAAAABAlRD4AgAAAAAAAAAAqBICXwAAAAAAAAAAAFVC4AsAAAAAAAAAAKBKCHwBAAAAAAAAAABUCYEvAAAAAAAAAACAKiHwBQAAAAAAAAAAUCUEvgAAAAAAAAAAAKqEwBcAAAAAAAAAAECVEPgCAAAAAAAAAACoEgJfAAAAAAAAAAAAVULgCwAAAAAAAAAAoEoIfAEAAAAAAAAAAFQJgS8AAAAAAAAAAIAqIfAFAAAAAAAAAABQJQS+AAAAAAAAAAAAqoTAFwAAAAAAAAAAQJUQ+AIAAAAAAAAAAKgSAl8AAAAAAAAAAABVQuALAAAAAAAAAACgSgh8AQAAAAAAAAAAVAmBLwAAAAAAAAAAgCoh8AUAAAAAAAAAAFAlBL4AAAAAAAAAAACqhMAXAAAAAAAAAABAlRD4AgAAAAAAAAAAqBICXwAAAAAAAAAAAFVC4AsAAAAAAAAAAKBKCHwBAAAAAAAAAABUCYEvAAAAAAAAAACAKiHwBQAAAAAAAAAAUCUEvgAAAAAAAAAAAKqEwBcAAAAAAAAAAECVEPgCAAAAAHibWLlyZa666qqMGDEidXV16d+/f0aNGpWbb745DQ0NFenZ0NCQoUOHpiiKFEWRo446qiJ9AAAA4O2ipqsHAAAAAACg8ubNm5fzzjsv69ata/6toaEhS5YsyZIlSzJr1qw89NBDGTp06H7te91112XFihX7dU8AAAB4O/OGLwAAAACAt7ilS5fmnHPOybp169K7d+/ccMMNeeyxx/LTn/40l156aZLkmWeeyZlnnpkNGzbst75PPfVUZsyYkdra2vTp02e/7QsAAABvZwJfAAAAAABvcZMnT05DQ0Nqamoyf/78TJs2LaNHj86pp56aO+64IzfddFOSZPny5Zk+ffp+6blt27Zceuml2bZtW6ZNm5b+/fvvl30BAADg7U7gCwAAAADgLWzJkiVZsGBBkuSSSy7J6NGjd6uZMmVKRowYkSSZMWNG3njjjU73nTlzZp588sm85z3vyTXXXNPp/QAAAIAdBL4AAAAAAN7C7rvvvub1pEmTWq3p1q1bLrzwwiTJ2rVrmwNiHfX888/nuuuuS5Lcdttt6dGjR6f2AwAAAP5A4AsAAAAA4C1s0aJFSZK6urqMHDlyj3Vjx45tXi9evLhTPS+//PJs3LgxF1xwQcaPH9+pvQAAAIBdCXwBAAAAALyFLVu2LEkybNiw1NTU7LHu2GOP3e2Zjpg7d24eeuih9OvXLzfffHOH9wEAAABaJ/AFAAAAAPAWtWnTpqxZsyZJMnDgwDZr+/Xrl7q6uiTJqlWrOtRv7dq1mTx5cpLk61//eg4//PAO7QMAAADsmcAXAAAAAMBb1Pr165vXvXv33mv9zsDXhg0bOtTv6quvzksvvZTRo0fn0ksv7dAeAAAAQNsEvgAAAAAA3qI2bdrUvO7Ro8de6w899NAkSWNjY7t7PfLII/nud7+bmpqa3H777SmKot17AAAAAHsn8AUAAAAA8BZVW1vbvN6yZcte6zdv3pwk6dmzZ7v6bN68OZdddlnKsswVV1yR973vfe0bFAAAANhnAl8AAAAAAG9Rffr0aV7vyzGNGzduTLJvxz+2dMMNN+SZZ57JoEGDcv3117frWQAAAKB9arp6AAAAAAAAKqO2tjYDBgzImjVrsnr16jZr165d2xz4GjRoULv63HjjjUmS0047LQ8++GCrNTv33rhxvUXxPQAAIABJREFUY+bOnZskOfzww3Pqqae2qxcAAAC83Ql8AQAAAAC8hY0YMSKLFi3Kc889l61bt6ampvV/Fl6+fPkuz7THzuMi58yZkzlz5rRZu2bNmpx77rlJkrFjxwp8AQAAQDs50hEAAAAA4C3s5JNPTrLjzVpPPvnkHusWLlzYvK6vr6/4XAAAAEDHCHwBAAAAALyFTZw4sXm9p7dvbd++PXfeeWeSpG/fvhk/fny7epRludfP4MGDkySDBw9u/m3BggUd+6MAAADgbeyABb6KovgfRVHcXBTFsqIoNhZF8WpRFD8viuKqoih6Vahnr6IoflsURdn0+a9K9AEAAAAAOFiNGjUqp5xySpJk9uzZefzxx3erueWWW7Js2bIkyRVXXJHu3bvvcn/BggUpiiJFUeTiiy+u+MwAAADAntUciCZFUZyZ5K4kf9Ti515JTmz6fKYoio+WZfnb/dz675IM2c97AgAAAABUlZkzZ6a+vj6NjY05/fTTM23atIwfPz6NjY2ZO3du7rjjjiTJ8OHDM2XKlC6eFgAAAGhLxQNfRVG8P8kPsyPgtSHJ15L8R5KeST6V5NIk70kyryiKE8uy3LCf+p6QZHKSTUneSNJnf+wLAAAAAFBtTjjhhNxzzz05//zz8/rrr2fatGm71QwfPjzz5s1Lnz7+KRUAAAAOZgfiSMcZ2RH22prk9LIsv1qW5eNlWT5cluVlSaY21R2b5Ev7o2FRFIck+U6SQ5J8Ncmr+2NfAAAAAIBqNWHChDz99NO58sorM3z48PTq1St9+/bNBz/4wdx444156qmnMmzYsK4eEwAAANiLir7hqyiKE5OMa7qcXZbl462U3ZJkUpIRSSYXRfG1sizf6GTrK5KMTPJMkhuTXNLJ/QAAAAAAqt7gwYMzffr0TJ8+vV3PjRs3LmVZdqr3f/3Xf3XqeQAAAGCHSr/ha2KL9ZzWCsqy3J7kzqbLfvlDQKxDiqIYnOTvmi4/V5blls7sBwAAAAAAAAAAcLCodODrlKbvjUmebKNuYYv1yZ3s+a0kdUm+X5blf3RyLwAAAAAAAAAAgINGpQNfI5q+nyvLcmsbdctbeabdiqL4VJKPJlmb5KqO7gMAAAAAAAAAAHAwqqnUxkVR1CYZ0HS5uq3asizXFkWxMTvezDWog/36JZnRdPnlsixf7sg+bew/cC8lR+zPfgAAAAAAAAAAAG9WscBXkj4t1hv2oX5n4Kt3B/t9I8m7kjye5Dsd3KMtqyqwJwAAAAAAAAAAwD6rZOCrtsV6yz7Ub2767tneRkVRjEnyV0m2JvnrsizL9u4BAAAAAG91fznjR109AkAemHxWV48AAABQ1SoZ+NrUYt1jH+oPbfpubE+ToigOTXJHkiLJzLIsn27P8+2wt6Mmj0iypEK9AQAAAAAAAAAAKhr4Wt9ivS/HNNY1fe/L8Y8t/W2S92THkYvXt/PZfVaW5eq27hdFUanWAAAAAAAAAAAASSoY+CrLclNRFGuSDEgysK3aoij65Q+Br1XtbHVN0/f/TfIXewhe7dy7riiKTzWtXy7L8uF29gIAAAAAAAAAAOgylXzDV5IsS3JKkmFFUdSUZbl1D3XHvumZ9th5XOSkpk9bBiS5u2m9MInAFwAAAAAAAAAAUDW6VXj/xU3fdUlGtlE3tsX60cqNAwAAAAAAAAAAUL0qHfi6r8W61bdvFUXRLcmFTZevJfmP9jQoy7LY2yfJ803lz7f4fVw7/xYAAAAAAAAAAIAuVdHAV1mWP0+yqOnykqIoRrdSNiXJiKb1zLIs32h5syiKcUVRlE2f/1O5aQEAAAAAAAAAAA5uNQegxxXZcUxjzyTzi6L4ana8xatnkk8luayp7tkktxyAeQAAAAAAAAAAAKpSxQNfZVk+VRTFJ5P8P0nekeSrrZQ9m+TMsizXV3oeAAAAAAAAAACAalXRIx13KsvyX5O8L8n/zo5wV0OS15L8Isk1SU4oy/K5AzELAAAAAAAAAABAtToQRzomScqyfD7Jl5o+7XluQZKik72P6szzAAAAAAAAAAAAB4MD8oYvAAAAAAAAAAAAOk/gCwAAAAAAAAAAoEoIfAEAAAAAAAAAAFQJgS8AAAAAAAAAAIAqIfAFAAAAAAAAAABQJQS+AAAAAAAAAAAAqoTAFwAAAAAAAAAAQJUQ+AIAAAAAAAAAAKgSAl8AAAAAAAAAAABVQuALAAAAAAAAAACgSgh8AQAAAAAAAAAAVAmBLwAAAAAAAAAAgCoh8AUAQJdZuXJlrrrqqowYMSJ1dXXp379/Ro0alZtvvjkNDQ2d2nvZsmW59dZbc9FFF+UDH/hABg4cmNra2tTV1WXo0KH55Cc/mfvvvz9lWe7znmVZ5kc/+lHOPvvsDBkyJD179kz//v0zYsSInH/++ZkzZ062bdvWqbkBAAAAAACgLTVdPQAAAG9P8+bNy3nnnZd169Y1/9bQ0JAlS5ZkyZIlmTVrVh566KEMHTq0Q/vfcMMNueuuu1q9t2LFiqxYsSI//OEPM3bs2Nx7773p379/m/utXLky5513XhYvXrzL75s2bcratWuzfPny3HXXXfnYxz6Wvn37dmhmAAAAAAAA2BuBLwAADrilS5fmnHPOSUNDQ3r37p1rr70248ePT2NjY+bOnZvvfOc7eeaZZ3LmmWdmyZIl6d27d7t71NTU5KSTTkp9fX3e+9735ogjjshhhx3WHM769re/nV/+8pdZuHBhJkyYkEWLFqVbt9ZfgLtq1aqMGzcuK1asSLdu3fKpT30qEydOzFFHHZWGhoY8//zzWbx4cf7lX/6ls/9pAAAAAAAAoE0CXwAAHHCTJ09OQ0NDampqMn/+/IwePbr53qmnnppjjjkmU6dOzfLlyzN9+vRcd9117e4xa9as1NS0/j93TzvttHzuc5/LOeeck3vvvTePPfZY5s2blwkTJuxWW5Zlzj///KxYsSJ9+vTJAw88kHHjxu1Wd+GFF+Zb3/pWDjnkkHbPCgAAAAAAAPuq9VcYAABAhSxZsiQLFixIklxyySW7hL12mjJlSkaMGJEkmTFjRt54441299lT2GunQw45JFOnTm2+fuSRR1qtu+uuu5rv/eM//mOrYa+WPYuiaPesAAAAAAAAsK8EvgAAOKDuu+++5vWkSZNarenWrVsuvPDCJMnatWubA2L7W11dXfN606ZNrdbceuutSZIhQ4Y0zwQAAAAAAABdReALAIADatGiRUl2hK1Gjhy5x7qxY8c2rxcvXlyRWe6+++7m9bHHHrvb/ZUrV+ZnP/tZkuQTn/hE89u7Nm/enN/+9rdZvXp1tm7dWpHZAAAAAAAAoDUCXwAAHFDLli1LkgwbNqzNYxdbBrB2PrM/rFmzJo8//nguueSSfO1rX0uSvPOd78x55523W+3OsFeSjB49Os8++2w+8YlP5B3veEeOPvroDBo0KP369cs555yTX/3qV/ttRgAAAAAAANiTPf8/bAAAsJ9t2rQpa9asSZIMHDiwzdp+/fqlrq4uGzduzKpVqzrVd9y4cVm4cGGr9/r375977703ffv23e3er3/96+b1ypUrc/7556ehoWGXmg0bNuSf/umf8sADD+T73/9+zj777E7NCgAAAAAAAG3xhi8AAA6Y9evXN6979+691/q6urokO0JVlfDFL34xy5Yty5gxY1q9/+qrrzavr7nmmjQ0NGTSpEn51a9+lc2bN2fVqlX56le/mh49emTz5s254IILsnTp0orMCgAAAAAAAIk3fAEAcABt2rSped2jR4+91h966KFJksbGxk71nTNnTjZu3JiyLPPaa6/lF7/4RW677bZ885vfzIoVKzJr1qy8613v2u25jRs3Nq83b96cz3/+87n11lubfxs4cGCuvfbaHHXUUfn0pz+dzZs352//9m/z4IMPdmpeAAAAAAAA2BNv+AIA4ICpra1tXm/ZsmWv9Zs3b06S9OzZs1N9hwwZkuOPPz7vfe97c8opp+TKK6/M008/nY9+9KN58MEHc+KJJ2b16tVtztuzZ8/8/d//fav7n3vuufngBz+YJPm3f/u3rFu3rlPzAgAAAAAAwJ4IfAEAcMD06dOneb0vxzTufMPWvhz/2F61tbWZM2dOevXqlVWrVmXq1Km71bSc90//9E/Tt2/fPe73kY98JEmyffv2PPnkk/t9XgAAAAAAAEgEvgAAOIBqa2szYMCAJGn1jVotrV27tjnwNWjQoIrMM2DAgNTX1ydJ7r///mzdunWX+y37Dhw4sM29Wta+/PLL+3FKAAAAAAAA+AOBLwAADqgRI0YkSZ577rndAlYtLV++fLdnKuGwww5LkjQ0NOSVV17Z5d5xxx3XvN62bVub+7S8X1NTsx8nBAAAAAAAgD8Q+AIA4IA6+eSTk+w4rrGtow8XLlzYvN75Fq5KeOGFF5rXbz468sQTT0zPnj2TJL/5zW/a3Kfl/Xe/+937cUIAAAAAAAD4A4EvAAAOqIkTJzav58yZ02rN9u3bc+eddyZJ+vbtm/Hjx1dklhdeeCGPP/54kmTw4MHp06fPLvd79eqVM844I0nyi1/8IqtWrdrjvPfff3/zMyNHjqzIvAAAAAAAACDwBQDAATVq1KiccsopSZLZs2c3B65auuWWW7Js2bIkyRVXXJHu3bvvcn/BggUpiiJFUeTiiy/e7flnn302Dz/8cJtzrFu3Lueee262bNmSJLngggtarfvyl7+cZMeRjZdffnmrx1DecMMNzW/4mjRpUnr06NFmbwAAAAAAAOiomq4eAACAt5+ZM2emvr4+jY2NOf300zNt2rSMHz8+jY2NmTt3bu64444kyfDhwzNlypR27/+73/0uH/rQh/L+978/EydOzMiRI3PEEUekpqYmL774Yh599NHMnj07L774YpLk+OOPbw52vdmoUaNy+eWX51vf+lYefPDBjB07NpMnT87RRx+dl19+Od///vfzgx/8IEkyaNCgXH/99R37jwIAAAAAAAD7QOALAIAD7oQTTsg999yT888/P6+//nqmTZu2W83w4cMzb9683Y5ZbI+lS5dm6dKlbdaceeaZmTNnTurq6vZY8w//8A/ZsGFD7rzzzjz22GN57LHHdqsZNmxYHnzwwQwYMKDD8wIAAAAAAMDeCHwBANAlJkyYkKeffjozZ87MvHnzsnr16vTo0SPDhg3L2WefnS984Qvp1atXh/aur6/PwoUL8/DDD2fx4sVZuXJlXnrppTQ0NOQd73hHhgwZkpNOOimf/vSnU19fv9f9DjnkkHzve9/Lueeem1mzZuWJJ57IK6+8kt69e+e4447LWWedlc9+9rOpra3t0LwAAAAAAACwrwS+AADoMoMHD8706dMzffr0dj03bty4lGW5x/vdu3fPmDFjMmbMmM6OuIszzjgjZ5xxxn7dEwAAAAAAANqjW1cPAAAAAAAAAAAAwL4R+AIAAAAAAAAAAKgSAl8AAAAAAAAAAABVQuALAAAAAAAAAOBNVq5cmauuuiojRoxIXV1d+vfvn1GjRuXmm29OQ0NDp/ZetmxZbr311lx00UX5wAc+kIEDB6a2tjZ1dXUZOnRoPvnJT+b+++9PWZYd2v/pp59O9+7dUxRFiqLIxRdf3Kl5gYNLTVcPAACwJ38540ddPQJAHph8VlePAAAAAAAcYPPmzct5552XdevWNf/W0NCQJUuWZMmSJZk1a1YeeuihDB06tEP733DDDbnrrrtavbdixYqsWLEiP/zhDzN27Njce++96d+//z7vvX379lx22WXZunVrh2YDDn4CXwAAAAAAAAAATZYuXZpzzjknDQ0N6d27d6699tqMHz8+jY2NmTt3br7zne/kmWeeyZlnnpklS5akd+/e7e5RU1OTk046KfX19Xnve9+bI444IocddljWrl2b5cuX59vf/nZ++ctfZuHChZkwYUIWLVqUbt327RC3W2+9NT/72c9y+OGH5+WXX273bMDBT+ALAAAAAAAAAKDJ5MmT09DQkJqamsyfPz+jR49uvnfqqafmmGOOydSpU7N8+fJMnz491113Xbt7zJo1KzU1rUc2TjvttHzuc5/LOeeck3vvvTePPfZY5s2blwkTJux139WrV+d//a//laIo8o1vfCMXXXRRu2cDDn77Fv8EAAAAAAAAAHiLW7JkSRYsWJAkueSSS3YJe+00ZcqUjBgxIkkyY8aMvPHGG+3us6ew106HHHJIpk6d2nz9yCOP7NO+n//857N+/fpcfPHFGTNmTLvnAqqDwBcAAAAAAAAAQJL77ruveT1p0qRWa7p165YLL7wwSbJ27drmgNj+VldX17zetGnTXuv/+Z//OQ888EDe+c535qabbqrITMDBQeALAAAAAAAAACDJokWLkuwIW40cOXKPdWPHjm1eL168uCKz3H333c3rY489ts3adevW5W/+5m+SJDfddFMGDBhQkZmAg0Pb7wgEAAAAAAAAAHibWLZsWZJk2LBhbR672DKAtfOZ/WHNmjX5z//8z8yaNStz5sxJkrzzne/Meeed1+Zz11xzTX7/+9/n5JNP3uObyYC3DoEvAAAAAAAAAOBtb9OmTVmzZk2SZODAgW3W9uvXL3V1ddm4cWNWrVrVqb7jxo3LwoULW73Xv3//3Hvvvenbt+8en3/00Udzxx13pHv37rn99ttTFEWn5gEOfo50BAAAAAAAAADe9tavX9+87t27917r6+rqkiQbNmyoyDxf/OIXs2zZsowZM2aPNVu2bMlll12W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
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>Louvain (and its EdMot clone) consistently finds better partitions of the network than the other models. Greedy Modularity, which is closely related to Louvain, performs second-best. Interestingly, SCD and GEMSEC have the same overall score, despite returning different results.</p>
    
    </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h3 id='algorithm-speed'>2. Algorithm Speed</h3><p>One of the driving factors behind the Louvain algorithm's popularity is its speed: It can efficiently partition large networks very quickly, especially compared with more traditional clustering methods.</p>
    <p>The two graphs below record the total runtime of each algorithm on each network, in seconds (I split the Facebook dataset from the other two because it's on a different scale).</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[17]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">df</span><span class="o">.</span><span class="n">sort_values</span><span class="p">(</span><span class="n">by</span><span class="o">=</span><span class="s1">&#39;model_name&#39;</span><span class="p">,</span> <span class="n">inplace</span><span class="o">=</span><span class="kc">True</span><span class="p">)</span>
    
    <span class="n">fig</span><span class="p">,</span> <span class="n">ax</span> <span class="o">=</span> <span class="n">plt</span><span class="o">.</span><span class="n">subplots</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">20</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>
    
    <span class="n">rows_airports</span> <span class="o">=</span> <span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="o">.</span><span class="n">network_name</span><span class="o">==</span><span class="s1">&#39;airports&#39;</span><span class="p">]</span>
    <span class="n">rows_fb</span> <span class="o">=</span> <span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="o">.</span><span class="n">network_name</span><span class="o">==</span><span class="s1">&#39;fb&#39;</span><span class="p">]</span>
    <span class="n">rows_netscience</span> <span class="o">=</span> <span class="n">df</span><span class="p">[</span><span class="n">df</span><span class="o">.</span><span class="n">network_name</span><span class="o">==</span><span class="s1">&#39;netscience&#39;</span><span class="p">]</span>
    
    <span class="n">bar_width</span> <span class="o">=</span> <span class="mf">0.25</span>
    <span class="n">xtick_labels</span> <span class="o">=</span>  <span class="p">[</span><span class="n">model</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="k">for</span> <span class="n">model</span> <span class="ow">in</span> <span class="n">models</span><span class="p">]</span>
    
    <span class="n">x1</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">rows_airports</span><span class="p">))</span>
    <span class="n">x2</span> <span class="o">=</span> <span class="p">[</span><span class="n">_</span> <span class="o">+</span> <span class="n">bar_width</span> <span class="k">for</span> <span class="n">_</span> <span class="ow">in</span> <span class="n">x1</span><span class="p">]</span>
    <span class="n">x3</span> <span class="o">=</span> <span class="n">x1</span>
    
    <span class="n">xticks_a</span> <span class="o">=</span> <span class="p">[</span><span class="n">_</span> <span class="o">+</span> <span class="n">bar_width</span> <span class="k">for</span> <span class="n">_</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">rows_airports</span><span class="p">))]</span>
    
    <span class="n">ax</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">bar</span><span class="p">(</span><span class="n">x1</span><span class="p">,</span> <span class="n">rows_airports</span><span class="p">[</span><span class="s1">&#39;time_elapsed&#39;</span><span class="p">],</span> 
              <span class="n">width</span><span class="o">=</span><span class="n">bar_width</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">&#39;airports&#39;</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">&#39;#800000&#39;</span><span class="p">)</span>
    <span class="n">ax</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">bar</span><span class="p">(</span><span class="n">x2</span><span class="p">,</span> <span class="n">rows_netscience</span><span class="p">[</span><span class="s1">&#39;time_elapsed&#39;</span><span class="p">],</span> 
              <span class="n">width</span><span class="o">=</span><span class="n">bar_width</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">&#39;fb&#39;</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">&#39;#004c99&#39;</span><span class="p">)</span>
    <span class="n">ax</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">set_xticks</span><span class="p">(</span><span class="n">xticks_a</span><span class="p">)</span>
    <span class="n">ax</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">set_xticklabels</span><span class="p">(</span><span class="n">xtick_labels</span><span class="p">)</span>
    <span class="n">ax</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s1">&#39;Algorithm runtime (in seconds), airport and netscience networks&#39;</span><span class="p">)</span>
    <span class="n">ax</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">.</span><span class="n">legend</span><span class="p">()</span>
    
    <span class="n">ax</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">bar</span><span class="p">(</span><span class="n">x3</span><span class="p">,</span> <span class="n">rows_fb</span><span class="p">[</span><span class="s1">&#39;time_elapsed&#39;</span><span class="p">],</span> 
              <span class="n">width</span><span class="o">=</span><span class="n">bar_width</span><span class="p">,</span> <span class="n">label</span><span class="o">=</span><span class="s1">&#39;netscience&#39;</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">&#39;#D4AF37&#39;</span><span class="p">)</span>
    <span class="n">ax</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">set_xticks</span><span class="p">(</span><span class="n">xticks_a</span><span class="p">)</span>
    <span class="n">ax</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">set_xticklabels</span><span class="p">(</span><span class="n">xtick_labels</span><span class="p">)</span>
    <span class="n">ax</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s1">&#39;Algorithm runtime (in seconds), Facebook network&#39;</span><span class="p">);</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,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Hz8+G2ywQUaPHp1JkyblmGOOyS9+8YtO906fPj2llJRS8sADD7xsfsqUKSmlZMqUKUmS++67LyeddFImTZqUkSNHrrJv5syZK2vNnDkzL774Yi699NK86U1vytixYzNq1KjssssuOeuss/Lcc891+3M988wzOeecc7L33ntn7Nix2WCDDTJ+/Pj8xV/8Ra699tou9/a071JKJk6cuHLfscceu/JnWPE67bTTVqm9ePHinHnmmdl7772z8cYbZ/jw4dlss83yute9Lu95z3ty8cUXZ+HChd3+fAAAAAAArDMeT/KDJJ9L8mdJNlmLtb+QZGK3q5qUUrZL8qsk5ybZM8nGSUYl2SHJyUluL6W8swd1pia5vbFnhyQjG7X2THJekl+VUv5Pb3oDAAAAAID12bCBbgDWppkzZ2a//fZ72efLli3L/fffn/vvvz/f/OY383d/93c5++yzX9FZ11xzTd73vvdlyZIl3a5dtmxZpk6dmh/+8IerfH777bfn9ttvz7e+9a3ceOON2WqrrTrcf9ttt+Xggw/OggULVvn8kUceyVVXXZWrrroqhx12WP7t3/4tI0aMWGt9d2fu3Ll529ve9rK+Fi1alEWLFmXu3Lm5+uqrs3z58px00kmv+DwAAAAAAPrd/CRzk7zjlRYqpeyW5ONJ/pjk+SSv6sGe0UmuTfInjY8uTfLtJM8l2S/JqUk2SvKdUsretdbbO6mzS5Ir0x4ieSbJ2UlmJNkwyVFJ/qpxxn+VUvastT6zhj8mAAAAAACsNwRKGFReeOGFjBo1KlOnTs3++++fHXbYIa9+9auzcOHC3HnnnfnKV76SBx98MOecc05e+9rX5thjj12jcx566KH85V/+ZUaOHJnPfe5z2XfffTN06NDMnj07o0ePftn6z372s5k9e3be8Y535MQTT8zWW2+d+fPn56KLLsr111+fuXPnZurUqbnlllsybNiqv5aPPPJIDjjggDz11FMppWTatGk56qijsskmm+Suu+7K+eefn1//+tf53ve+l2OOOSb/8R//scZ9/+///m8WLFiQAw88MElyxhln5JBDDlmlxuabb75y/P73vz8LFizI8OHD81d/9Vc56KCDsuWWW+bFF1/MggULcsstt+Sqq65ao39jAAAAAAAGzBeSzE4yu9b6eCllQpJ5r6RgKWVo2sMgQ5OcnuRD6UGgJMkn036bSJJ8qtZ6XtPcrFLKjCQ/TXtQ5MIk+3dS58LGmheSvKPWOqtp7qZSyn1pvwFlhySfSPu/AQAAAAAADGoCJQwqu+66ax5++OGMGTPmZXMHHnhgTjrppBx88MG5/vrrc/rpp+cDH/hAhg4d2utz5s2bl3HjxmXWrFnZZpttVn7+xje+scP1s2fPzvHHH59LLrlk5We77757Dj300Bx33HG57LLLctttt+WSSy7JRz/60VX2fvzjH89TTz2VJLn00kvzoQ99aJUaRxxxRA466KDMmDEjV155ZaZNm5aDDjpojfredNNNVwnEvOY1r8nkyZM7rPXb3/42v/zlL5MkX/7ylzu8geTQQw/NmWeemcWLF3dYAwAAAACAdU+t9fN9UPavk+ye5J4k/5D2QEmXSinDG/uS9ltSzl99Ta11VinlsiQfTrJfKWX3WusvV6uzZ5IpjcfLVguTrHB+kmOT7Jjk46WUs2utz/fkBwMAAAAAgPXVkIFuANamTTfdtMMwyQptbW0577z2Ly978MEHM2fOnDU+65xzzlkllNGVLbbYIhdccEGHcxdeeGE222yzJMlFF120ytyjjz6a73//+0naAzHNYZIVNthgg1x++eUrbzb5p3/6p7XWd1cee+yxleO3vOUtna4rpWTjjTd+xecBAAAAALB+KqVsm5du/Dix1rqsh1unJFnxH/2/UWt9sZN105vGh3Uwf2jT+OsdFWjU/mbjceO8FEABAAAAAIBByw0lDGpLly7N448/nmeeeSYvvtj+d6Za68r5X//619l99917XbetrS2HH354j9cfccQRGTlyZIdzo0ePzhFHHJF//ud/zl133ZVHH300W221VZJkxowZWb58eZJ0GCZZYcKECXn729+e6667LjNnzszy5cs7vHmlt313ZUWPSTJ9+vR8+ctfXit1AQAAgPXL6aUMdAv94vNN/00JgF67KMmoJP9aa53Ri337No1/0sW6W5MsaZyxTxd1liT5ZQfzHZ2xT5Lre9AjAAAAAECH7rx6r4Fuod/tdOgvBroFeskNJQw6S5Ysydlnn51ddtklo0aNyrbbbpuddtopO++8c3beeefstttuK9cuWrRojc6YNGlSRowY0eP1e+65Z5fzb3jDG1aO77jjjg7Hb3zjG7ussWL+2WefzW9/+9sO1/S2765MnDgx++7b/je4Cy64IDvttFP+/u//PjfddFOeffbZtXIGAAAAAADrt1LKUUnemeSpJJ/s5fYdm8Z3d7ao1vpCkt90sGf1Ovc31nam+YyO6nSqlDK+q1eSLXtTDwAAAAAA+oMbShhUHnjggey///6ZN29ej9Y/99xza3TOxhtv3Kv1m2++eZfzW2yxxcrx7373uw7HzWs6suWWL/0tqnlfs9723Z0rrrgihx9+eGbNmpW77rord911V774xS9m+PDh2XvvvfPe974306ZNW2shFgAAAAAA1h+llI2TXNh4/Lta68Jelti68b6k1rq4m7Xzk7w+yWallA1qrUsbPYxIsmljzcNdFai1PlVKWXHTydZdre3kfAAAAAAAWK+4oYRB5f3vf3/mzZuXUko++MEP5sc//nHmz5+fP/7xj6m1ptaa5cuXr1xfa12jc4YOHdqr9aWULufXtI/e1uht3915zWtek5///Oe54YYb8pGPfCQ77bRTSil5/vnn89Of/jQnnnhiJk+enHvvvXetngsAAAAAwHrhvCRbJJmV5NI12P+qxvszPVi7pGk8uoMava0zustVAAAAAAAwCLihhEHj7rvvzs9+9rMkyamnnpozzzyzw3VPPfVUf7aVJHn88ce7nF+48KUvZRs7dmyH48cffzzbbLNNj85o3tcfDjjggBxwwAFJkieffDI33HBDvva1r+Wmm27Kb37zmxx55JG57bbb+rUnAAAAAAAGTinlLUk+mOSFJCfUNftmpRXXXy/rwdqlTeMNO6jR2zobdrnq5bq70WTLJLN7WRMAAAAAAPqUG0oYNO68886V46OOOqrTdbfeemt/tLOK2bO7/htR8/zkyZM7HP/P//xPlzVuueWWJMnIkSMzceLENWkzSfe3qXRnk002yZFHHpkbb7wx7373u5Mkc+bMyX333feK6gIAAAAAsH4opWyQ5GtJSpJ/rLXevoal/th4b+vB2g2axs91UKO3dZ7rctVqaq0Pd/VK8lhv6gEAAAAAQH8QKGHQeOGFF1aOn3322U7X/cu//Et/tLOK73znO3nuuY7/9rRkyZJceeWVSZLXve512WqrrVbOTZkyJUOHDk2SXHbZZZ3Wf+ihh3L99dev3DNs2JpfPjRixEtf1rZ06dIuVnZvxa0lSbJo0aJXVAsAAAAAgPXGZ5L8SZL5SU57BXX+0Hgf3YO1o5rGz3RQo7d1nulyFQAAAAAADAICJQwakyZNWjn+xje+0eGaiy++OFdffXV/tbTSY489lpNPPrnDuU984hNZuHBhkuTEE09cZW7cuHF5z3vekyT50Y9+lMsvv/xl+5ctW5YPfvCDef7555MkJ5100ivqdZNNNklbW/uXtP3mN7/pdN2cOXMyZ86cTudrrbnhhhuStN96MmHChFfUFwAAAAAA641TGu83JDm4lHLU6q+8FNwY1fT5/qvVebhpzZhuzty68f5ErXXltyXVWv+YZMU3Ho3vqkApZeOmvuZ3cx4AAAAAAKz31vwaA1jH7Lbbbpk8eXLuuOOOXHzxxVm8eHHe9773Zauttsr8+fPzrW99K9/97nfz5je/OTfffHO/9rbHHnvk4osvzrx583LCCSdk6623zvz583PxxRfnRz/60cr+TzjhhJftveCCC3LjjTfmqaeeynHHHZebb745Rx11VMaOHZu77747X/rSl1YGO4444ogcdNBBr6jXYcOGZc8998zNN9+cyy+/PLvttlt23XXXDB8+PEkyduzYjB07NnPmzMmxxx6bPffcM+9617vyp3/6p9lyyy3z/PPPZ968efn617++8taUQw45ZJWbVwAAAAAAGNTaGu/HNl5d2TTJFY3xT5Lc1DR3V5I/b4x3SPKLjgqUUoYl2a7xOLeDJXOT7Jtk+1LKsFrrCx2sWXFG8x4AAAAAABjUBEoYNEop+dd//dfsv//+eeqpp3LFFVfkiiuuWGXNzjvvnO985zsZN25cv/Z25pln5vzzz88Pf/jD/PCHP3zZ/A477JBrr702w4a9/Fdy/PjxufHGG3PwwQdnwYIFufzyyzu8qeSwww7r9GaW3jr11FPzrne9K08++WSOPvroVeY+//nP57TTTlv5PHv27MyePbvTWvvss08uu+yytdIXAAAAAAAt5WdN47emk0BJkj3y0s0iHX2j1M/SHigZlWT3JP/TSZ23No3795upAAAAAABgAAwZ6AZgbdp1110zZ86cnHDCCdl2220zfPjwjB07Nm94wxvypS99KbfccsuA3JTR1taW6667LhdddFH22muvjBkzJiNHjszOO++cM844I7/61a+6DLnstttuueeee3L22WfnjW98Y8aMGZO2traMGzcuhx12WP7zP/8zV111VUaMGLFW+p06dWpuvPHGHHLIIRk3btzK20maHX300ZkxY0Y+/elP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AAAAQIsRKAEAAAAAAAAAAAAAAGgxAiUAAAAAAAAAAAAAAAAtRqAEAAAAAAAAAAAAAACgxQiUAAAAAAAAAAAAAAAAtBiBEgAAAAAAAAAAAAAAgBYjUAIAAAAAAAAAAAAAANBiBEoAAAAAAAAAAAAAAABajEAJAAAAAAAAAAAAAABAixEoAQAAAAAAAAAAAAAAaDECJQAAAAAAAAAAAAAAAC1GoAQAAAAAAAAAAAAAAKDFCJQAAAAAAAAAAAAAAAC0GIESAAAAAAAAAAAAAACAFiNQAgAAAAAAAAAAAAAA0GIESgAAAAAAAAAAAAAAAFqMQAkAAAAAAAAAAAAAAECLESgBAAAAAAAAAAAAAABoMQIlAAAAAAAAAAAAAAAALUagBAAAAAAAAAAAAAAAoMUIlAAAAAAAAAAAAAAAALQYgRIAAAAAAAAAAAAAAIAWI1ACAAAAAAAAAAAAAADQYgRKAAAAAAAAAAAAAAAAWoxACQAAAAAAAAAAAAAAQIsRKAEAAAAAAAAAAAAAAGgxAiUAAAAAAAAAAAAAAAAtRqAEAAAAAAAAAAAAAACgxQiUAAAAAAAAAAAAAAAAtBiBEgAAAAAAAAAAAAAAgBYjUAIAAAAAAAAAAAAAANBiBEoAAAAAAAAAAAAAAABajEAJAAAAAAAAAAAAAABAixEoAQAAAAAAAAAAAAAAaDECJQAAAAAAAAAAAAAAAC1GoAQAAAAAAAAAAAAAAKDFCJQAAAAAAAAAAAAAAAC0GIESAAAAAAAAAAAAAACAFiNQAgAAAAAAAAAAAAAA0GIESgAAAAAAAAAAAAAAAFqMQAkAAAAAAAAAAAAAAECLESgBAAAAAAAAAAAAAABoMQIlAAAAAAAAAAAAAAAALUagBAAAAAAAAAAAAAAAoMUIlAAAAAAAAAAAAAAAALQYgRIAAAAAAAAAAAAAAIAWI1ACAAAAAAAAAAAAAADQYgRKAAAAAAAAAAAAAAAAWoxACQAAAAAAAAAAAAAAQIsRKAEAAAAAAAAAAAAAAGgxAiUAAAAAAAAAAAAAAAAtRqAEAAAAAAAAAAAAAACgxQiUAAAAAAAAAAAAAAAAtBiBEgAAAAAAAAAAAAAAgBYjUAIAAAAAAAAAAAAAANBiBEoAAAAAAAAAAAAAAABajEAJAAAAAAAAAAAAAABAixEoAQAAAAAAAAAAAAAAaDECJQAA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
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>To get a normalized view of speed averaged cross networks, we'll plot the ratio of seconds over the number of edges in the graph. Note that this plot's y-axis uses a log scale, and the log values are negative: So the farther the bar protrudes downwards, the faster the algorithm.</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[50]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">fig</span><span class="p">,</span> <span class="n">ax</span> <span class="o">=</span> <span class="n">plt</span><span class="o">.</span><span class="n">subplots</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">15</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>
    <span class="n">merged</span> <span class="o">=</span> <span class="n">nw_df</span><span class="o">.</span><span class="n">merge</span><span class="p">(</span><span class="n">df</span><span class="p">,</span> <span class="n">on</span><span class="o">=</span><span class="s1">&#39;network_name&#39;</span><span class="p">)</span>
    <span class="n">merged</span><span class="p">[</span><span class="s1">&#39;log_sec_per_edge&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="n">merged</span><span class="p">[</span><span class="s1">&#39;time_elapsed&#39;</span><span class="p">]</span> <span class="o">/</span> <span class="n">merged</span><span class="p">[</span><span class="s1">&#39;n_edges&#39;</span><span class="p">])</span>
    <span class="n">log_sec_per_edge</span> <span class="o">=</span> <span class="n">merged</span><span class="o">.</span><span class="n">groupby</span><span class="p">(</span><span class="s1">&#39;model_name&#39;</span><span class="p">)[</span><span class="s1">&#39;log_sec_per_edge&#39;</span><span class="p">]</span><span class="o">.</span><span class="n">mean</span><span class="p">()</span>
    
    <span class="n">x4</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">log_sec_per_edge</span><span class="p">))</span>
    <span class="n">xticks_b</span> <span class="o">=</span> <span class="p">[</span><span class="n">_</span> <span class="k">for</span> <span class="n">_</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">rows_airports</span><span class="p">))]</span>
    
    <span class="n">ax</span><span class="o">.</span><span class="n">bar</span><span class="p">(</span><span class="n">x4</span><span class="p">,</span> <span class="n">log_sec_per_edge</span><span class="p">,</span> <span class="n">width</span><span class="o">=</span><span class="n">bar_width</span> <span class="o">*</span> <span class="mi">2</span><span class="p">,</span> <span class="n">color</span><span class="o">=</span><span class="s1">&#39;#c0aee0&#39;</span><span class="p">)</span>
    <span class="n">ax</span><span class="o">.</span><span class="n">set_xticks</span><span class="p">(</span><span class="n">xticks_b</span><span class="p">)</span>
    <span class="n">ax</span><span class="o">.</span><span class="n">set_xticklabels</span><span class="p">(</span><span class="n">xtick_labels</span><span class="p">)</span>
    <span class="n">ax</span><span class="o">.</span><span class="n">set_title</span><span class="p">(</span><span class="s1">&#39;Log of algorithm runtime, normalized by seconds / edge&#39;</span><span class="p">)</span>
    <span class="n">plt</span><span class="o">.</span><span class="n">ylabel</span><span class="p">(</span><span class="s1">&#39;&lt;- Faster          Slower -&gt;&#39;</span><span class="p">)</span>
    
    <span class="n">rects</span> <span class="o">=</span> <span class="n">ax</span><span class="o">.</span><span class="n">patches</span>
    <span class="n">labels</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">round</span><span class="p">(</span><span class="n">log_sec_per_edge</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span>
    <span class="k">for</span> <span class="n">rect</span><span class="p">,</span> <span class="n">label</span> <span class="ow">in</span> <span class="nb">zip</span><span class="p">(</span><span class="n">rects</span><span class="p">,</span> <span class="n">labels</span><span class="p">):</span>
        <span class="n">ax</span><span class="o">.</span><span class="n">text</span><span class="p">(</span><span class="n">rect</span><span class="o">.</span><span class="n">get_x</span><span class="p">()</span> <span class="o">+</span> <span class="n">rect</span><span class="o">.</span><span class="n">get_width</span><span class="p">()</span> <span class="o">/</span> <span class="mi">2</span><span class="p">,</span> 
                <span class="n">rect</span><span class="o">.</span><span class="n">get_height</span><span class="p">()</span> <span class="o">-</span> <span class="mf">0.5</span><span class="p">,</span> <span class="n">label</span><span class="p">,</span>
                <span class="n">ha</span><span class="o">=</span><span class="s1">&#39;center&#39;</span><span class="p">,</span> <span class="n">va</span><span class="o">=</span><span class="s1">&#39;bottom&#39;</span><span class="p">)</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,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AAAAAAAAAABLJZANAAAAAAAAAACApRLIBgAAAAAAAAAAwFIJZAMAAAAAAAAAAGCpBLIBAAAAAAAAAACwVALZAAAAAAAAAAAAWCqBbAAAAAAAAAAAACyVQDYAAAAAAAAAAACWSiAbAAAAAAAAAAAASyWQDQAAAAAAAAAAgKUSyAYAAAAAAAAAAMBSCWQDAAAAAAAAAABgqQSyAQAAAAAAAAAAsFQC2QAAAAAAAAAAAFgqgWwAAAAAAAAAAAAslUA2AAAAAAAAAAAAlkogGwAAAAAAAAAAAEslkA0AAAAAAAAAAIClEsgGAAAAAAAAAADAUglkAwAAAAAAAAAAYKkEsgEAAAAAAAAAALBUAtkAAAAAAAAAAABYKoFsAAAAAAAAAAAALJVANgAAAAAAAAAAAJZKIBsAAAAAAAAAAABLJZANAAAAAAAAAACApRLIBgAAAAAAAAAAwFIJZAMAAAAAAAAAAGCpBLIBAAAAAAAAAACwVALZAAAAAAAAAAAAWCqBbAAAAAAAAAAAACyVQDYAAAAAAAAAAACWSiAbAAAAAAAAAAAASyWQDQAAAAAAAAAAgKUSyAYAAAAAAAAAAMBSCWQDAAAAAAAAAABgqQSyAQAAAAAAAAAAsFQC2QAAAAAAAAAAAFgqgWwAAAAAAAAAAAAslUA2AAAAAAAAAAAAlkogGwAAAAAAAAAAAEslkA0AAAAAAAAAAIClEsgGAAAAAAAAAADAUglkAwAAAAAAAAAAYKkEsgEAAAAAAAAAALBUAtkAAAAAAAAAAABYKoFsAAAAAAAAAAAALJVANgAAAAAAAAAAAJZKIBsAAAAAAAAAAABLJZANAAAAAAAAAACApRLIBgAAAAAAAAAAwFIJZAMAAAAAAAAAAGCpBLIBAAAAAAAAAACwVALZAAAAAAAAAAAAWCqBbAAAAAAAAAAAACyVQDYAAAAAAAAAAACWSiAbAAAAAAAAAAAASyWQDQAAAAAAAAAAgKUSyAYAAAAAAAAAAMBSCWQDAAAAAAAAAABgqQSyAQAAAAAAAAAAsFQC2QAAAAAAAAAAAFgqgWwAAAAAAAAAAAAslUA2AAAAAAAAAAAAlkogGwAAAAAAAAAAAEslkA0AAAAAAAAAAIClEsgGAAAAAAAAAADAUglkAwAAAAAAAAAAYKkEsgEAAAAAAAAAALBUAtkAAAAAAAAAAABYKoFs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AAAAAAAAAABoSpENAAAAAAAAAACAphTZAADYoZVStuqaO3fumK159dVX59WvfnX23XffTJs2LQceeGBOP/303HTTTVv8du7cuVudGQAAAAAAAHYUU1oHAACAHcXq1avzhje8IV/4whee8vef/OQn+clPfpJFixblwgsvzPve975GCQEAAAAAAGAwKbIBALBTePvb355zzjlns+9nzJix3WucddZZG0psxx9/fN75zndmv/32y3e/+9385V/+ZX784x/n/e9/f/bdd9+cffbZI8515JFH5pOf/OR2ZwIAAAAAAICJQJENAICdwqxZs3L44YeP2/zLli3LokWLkiQnnnhirrnmmkyePDlJctRRR2X+/Pl5yUtekrvuuivvec97cuqpp2bPPffc7HwzZswY17wAAAAAAAAwSCa1DgAAADuCD3/4w0mSyZMn52Mf+9iGEtt6e++9dz70oQ8lSX7xi1/kE5/4RO8ZAQAAAAAAYFApsgEAwHZatWpVbrjhhiTJvHnzcsABB2xy3Otf//rsscceSZLFixf3lg8AAAAAAAAGnSIbAABsp1tuuSVr1qxJkhx33HGbHbfrrrvm6KOP3vDNunXreskHAAAAAAAAg06RDQCAncJnP/vZHHLIIZk+fXpmzpyZ5z73uTnjjDOyZMmS7Z77tttu2/B86KGHjjh2/fvHHnssP/rRjzY77vbbb89RRx2VmTNnZtq0aTnggANy0kkn5corr1SAAwAAAAAAYIejyAYAwE5h+fLl+eEPf5jVq1dn1apVueOOO3LllVfmVa96VU4++eT88pe/3Oa577777g3PmztWdL05c+Zs8ruNrVixIt/4xjeyatWqrFmzJvfee2+uvfbanHHGGTniiCOeUp4DAAAAAACAiW5K6wAAADCedtttt8yfPz8nnHBCDj300Oy+++554IEHsmzZslxyySV56KGH8k//9E856aSTcv3112eXXXYZ9RorV67c8Lz77ruPOHbGjBkbnletWvW095MmTcoJJ5yQ1772tXnhC1+YZz7zmVm5cmW++c1v5tJLL81tt92W5cuX5/jjj88tt9ySZz3rWaPOCwAAAAAAAINGkQ0AgB3avffemz333PNpf583b17OO++8vOY1r8m3vvWtLFu2LBdffHHe8Y53jHqN1atXb3jeddddRxw7derUDc+PPvro094vXrx4k3mPPfbYnHPOOXnLW96SK664IitWrMj555+fxYsXjzovAAAAAAAADBpHiwIAMOHce++9+d73vrfJ6957733K2E2VwtabPXt2Pve5z20on1100UXblGfatGkbnteuXTvi2DVr1mx4nj59+tPej5R3l112yWWXXZZDDz00SXLNNdc87b8XAAAAAAAAJiJFNgAAJpz3vve9ecELXrDJ673vfe+o5jr44IMzb968JMkdd9yR++67b9R5Zs6cueF5U8eFDverX/1qw/OWjiHdlClTpuSss87a8HvZsmWjngMAAAAAAAAGjSIbAAA7vec///kbnrdlh7MDDjhgw/M999wz4ti77757w/OcOXNGvVay/XkBAAAAAABg0ExpHQAAAEZr4cKFWbhw4ZjNV2vdru+HF8tuv/32Eceufz9lypQ85znP2ab1tjcvAAAAAAAADBo7sgEAsNNbvnz5huf99ttv1N8fddRR2XXXXZOMfNTn2rVrc9NNNz3tm9Ha3rwAAAAAAAAwaBTZAADYqd155525/vrrkyQHH3xw9t9//1HPMXPmzJxwwglJki996UubPV508eLFeeSRR5IkJ5988jblfeyxx3L55Zdv+P3KV75ym+YBAAAAAACAQaLIBgDADuvzn/98Hnvssc2+X7FiRU499dSsW7cuSXLuueductzChQtTSkkpJRdeeOEmx7z73e9OMlQ0O/fcc/P4448/5f2DDz6YCy64IEmy55575uyzz37aHEuWLMnDDz+82bzr1q3L2WefveF40hNPPDFz5szZ7HgAAAAAAACYKKa0DgAAAOPlvPPOy7p163LKKafkmGOOyYEHHpjp06fnwQcfzNKlS3PJJZfkoYceSpK84hWv2GyRbWu86lWvymmnnZarr7461157bebNm5fzzz8/++23X7773e/mAx/4QO66664kyQc/+ME84xnPeNocV1xxRebPn5/58+dn7ty5OeSQQ7LHHntk1apVufXWW3PppZfmtttuS5LMmjUrf/M3f7PNeQEAAAAAAGCQKLIBALBDu++++3LRRRfloosu2uyYU045JZdddlmmTp26XWtdfvnleeSRR/LFL34xS5YsyZIlS57yftKkSXnf+96Xt771rZudY9WqVVm0aFEWLVq02TEveMELcvXVV+eggw7arrwAAAAAAAAwKBTZAADYYV1xxRVZtmxZbrzxxtx5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t2/ftc65+eabW8Ybs8LZwQcfnB/84AcZMGBAy7aio0aNWq8iW79+/fKXv/wlpZRW748YMSJnnHFGDj300CxdujRf+9rXFNl4x1FkAwAAAAAAAACgU1m+fHluvfXWJEmPHj1Wu63nuvjYxz620Xm6dOmy1jkf+tCHMmjQoPz85z/PI488ktdffz09evTY6G/DpmLtf5cAAAAAAAAAAMAm5H/+538ya9asJMnHP/7xbLXVVnVOtG66d+/eMl68eHEdk0DtKbIBAAAAAAAAANCp3HTTTS3jjdlWtJZefPHF/OIXv0iS7LDDDunVq1edE0FtKbIBAAAAAAAAANBpvP766/nJT36SJHnve9+bww8/vL6B1mDx4sX54x//mOuuuy6HHHJI5s2blyT54he/WOdkUHsN9Q4AAAAAAAAAAABt5Y477sjChQuTJCeffHJKKXVO9FYTJ07MwIEDV3v/pJNOyrnnnlvDRNAxWJENAAAAAAAAAIBOY1PcVjRJdtttt/z85z/PLbfckm7dutU7DtScIhsAAAAAAAAAAJ3C888/n4kTJyZJDjrooPTv37++gVoxYMCAPP7443n88cczbdq03HnnnRk1alRmzpyZU089NWPGjKl3RKiLum4tWkr5+ySPJ1leVZVtTgEAAAAAAAAA3sFmzZqVefPmtXqvZ8+eefe7373G52+55ZYsX748STJy5Mg2z9cWunfvnr322qvl/IADDsiIESPy6U9/OsOGDcvpp5+eWbNm5cILL6xjSqi9jrIiW8fajBgAAAAAAAAAgJq74IILsvfee7f6u+CCC9b6/M0335wk6datW44//vj2jtumBg0alC9+8YtJkm9+85uZMWNGnRNBbXWUIhsAAAAAAAAAAGywadOm5cknn0ySDB8+PD179qxzovV37LHHJkmWL1+eO++8s85poLZs5wkAAAAAAAAAQIfQ2NiYxsbGDXr2pptuahl31G1F12bHHXdsGf/5z3+uYxKoPSuyAQAAAAAAAACwSVu6dGl+9KMfJWkqgx155JF1TrRhZs2a1TLu0aNHHZNA7SmyAQAAAAAAAACwSfvZz36Wl156KUly4oknpqFh09ykcNy4cS3jvffeu45JoPYU2QAAAAAAAAAA2KStvK3oKaecss7PNTY2ppSSUkpGjx7dDsma3HbbbZk/f/4a5/z4xz/ONddckyTZdttt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ie2II47I7bffnocffjj33XdfzjjjjHTp0iXTpk3L8OHDs3jx4jbNCwAAAADQEViRDQAAAOhU7r777pYS28EHH5yHHnoom222Wcv9wYMH55hjjsnBBx+cpUuX5rvf/W7OPvvsNDRs/L8mef311/P5z38+SXLppZfmlFNOWeszV199daZPn54kOfXUUzNmzJi3rBA3ePDgHHTQQTnttNMybdq0XH311TnnnHM2OisAAAAAQEdiRTYAAACgU5k8eXLL+Pzzz39LiW2FAw44IMOHD0+SzJs3LzNmzGiTb3/1q1/NzJkzM3DgwJx88snr9MyNN96YJOnevXuuuOKKVrc5PfXUU/PhD384SXLJJZdk+fLlbZIXAAAAAKCjUGQDAAAAOpUlS5a0jPv167faebvvvnvLuC226/zVr36Vq6++Ol27ds2///u/r9MzixYtyhNPPJGkafW4bbfddrVzhw4dmiSZM2dOHnrooY3OCwAAAADQkSiyAQAAAJ1K//79W8bPPvvsauc988wzSZJSSt73vvdt1DeXLVuWM844I8uXL8+Xv/zl7LHHHuv03Lx581rGO++88xrnrnz/gQce2LCgAAAAAAAdlCIbAAAA0KmccMIJ2WabbZIkF198cd588823zZk+fXruvffeJMmnPvWplvkb6tJLL82jjz6a3XffPV/96lfX+bnu3bu3jOfPn7/GuSvff/LJJ9c/JMA7xJIlSzJmzJgMHTo0ffr0Sbdu3dKjR4/sscceOe200zJ16tSN/sbo0aNTSlmn38SJE9f4rjfffDO33nprhg0blt69e6dr167p3bt3Bg4cmGuvvTbLli3b6LwAAACwKWiodwAAAACAtrTjjjumsbExJ510UiZPnpwBAwbkS1/6Uvr375/XX389kydPzmWXXZYlS5Zkv/32y+WXX75R33v22WfzrW99K0ny/e9/P1tsscU6P7vtttumT58+eeGFFzJ16tQsWbIkXbt2bXXugw8+2DJ+7rnnNiozQGc1c+bMDBs2LI8//vhbri9ZsiRPP/10nn766dxwww05++yzc9lll6WUUqekTV544YUcd9xxbyvXzZkzJ3PmzMnEiRNz3XXX5Z577lnryp0AAACwqVNkAwAAADqdESNGZNq0abn88svzwx/+MCNHjnzL/Z133jnf/OY3c8YZZ7xlVbQNceaZZ2bRokU5/vjjM2TIkPV+/thjj80PfvCDzJ07N5dddlnOP//8t82ZNGlSywpySbJgwYKNygzQGS1btuwtJbZ99tkn55xzTvbYY48sWLAgkyZNymWXXZaFCxfmiiuuSJ8+fXLuuedu9HdXLc2tqm/fvq1eX7RoUYYNG5bp06cnSY444oh87nOfS9++ffPyyy/n9ttvz/XXX59p06Zl+PDhmTRpUrp167bReQEAAKCjUmQDAAAAOp2lS5dm7NixGT9+fKqqetv9OXPm5Lbbbkv//v0zbNiwDf7OTTfdlAkTJmSbbbbJFVdcsUHv+MpXvpKxY8fmtddeywUXXJAXX3wxZ511Vnbbbbe8/PLLueOOO3L++eenqqo0NDRk2bJlWbRo0QZnBuis7r777pZS2cEHH5yHHnoom222Wcv9wYMH55hjjsnBBx+cpUuX5rvf/W7OPvvsNDRs3L8m32uvvTbouauvvrqlxHbqqadmzJgxb1khbvDgwTnooINy2mmnZdq0abn66qtzzjnnbFRWAAAA6Mi61DsAAAAAwLqYNWtWnnjiiVZ/s2bNapm3cOHCHHHEEbnooovy8ssv57zzzstTTz2VxYsXZ/78+bnvvvty6KGH5te//nWOPvroXHXVVRuUZ+7cufnnf/7nJMlFF12UPn36bNB7dt1114wbNy5bb711qqrKlVdemf79+6dr167p06dPvvCFL2TBggX53ve+17Jt6dZbb71B3wLozCZPntwyPv/8899SYlvhgAMOyPDhw5Mk8+bNy4wZM2qWb1U33nhjkqR79+654oorWt3m9NRTT82HP/zhJMkll1yS5cuX1zQjAAAA1JIiGwAAALBJuOCCC7L33nu3+rvgggta5n3jG9/Igw8+mCQZM2ZMLr744uy5557p2rVrttlmmwwePDj3339/Bg4cmKqqcs455+Sxxx5b7zznnHNO5s6dmw9+8IM566yzNuqPbciQIfnNb36Tz3zmM+nVq9db7h100EH56U9/ms9//vN5/fXXkyQ9e/bcqO8BdEZLlixpGffr12+183bfffeW8eLFi9s10+osWrQoTzzxRJKm1eO23Xbb1c4dOnRokqbVRB966KGa5AMAAIB6sLUoAAAA0GlUVZUbbrghSdK/f/+MHDmy1XkNDQ359re/nUMPPTTLly/PDTfcsF5bg86ePTs333xzkuSjH/1ofvzjH69x/osvvpgf/ehHSZK+ffvmwAMPfNucfv365frrr891112Xv/zlL1mwYEF69+6dbbbZJknyv//7vy1z3//+969zVoB3iv79+7eMn3322fz93/99q/OeeeaZJEkpJe973/tqkm1V8+bNaxnvvPPOa5y78v0HHngghx12WLvlAgAAgHpSZAMAAAA2CY2NjWlsbFzjnDlz5uSVV15JknzgAx9Y49wDDjigZby+W8utvOrPJZdcstb5Tz31VE444YQkyciRI1stsq1QSkmfPn3etlXppEmTWsZreh7gneqEE07I17/+9bz22mu5+OKLc9RRR71te9Hp06fn3nvvTZJ86lOfaikLb4zBgwfnkUceyYIFC7Lddtvl/e9/f4YOHZozzzxztStodu/evWU8f/78Nb5/5ftPPvnkRucFAACAjsrWogAAAECn0dDwt/9nb9myZWucu3Tp0laf66jGjh2bJNlyyy1z9NFH1zkNQMez4447prGxMVtuuWUmT56cAQMG5KabbsrUqVMzYcKEfPOb38xhhx2WJUuWZL/99svll1/eJt+dMGFCXnnllSxdujQvvfRSHnjggZx//vnp169f7r777laf2XbbbVsKy1OnTn1LQXpVK7bLTpLnnnuuTTIDAABAR6TIBgAAAHQa22+/fcvqOlOmTFljme2BBx5oGfft23e9vrPbbrulqqq1/lY47LDDWq6tbVW51owbNy6PPvpokuTEE0/Mdtttt6vQ2TgAACAASURBVN7vAHgnGDFiRKZNm5bPfOYz+c1vfpORI0fm4IMPzuDBgzN69OhstdVWufzyyzNp0qT07t17o76199575+tf/3rGjx+fhx9+OFOnTs2NN96YIUOGJEleffXV/OM//mN+9rOftfr8sccemySZO3duLrvsslbnTJo0qWUFuSRZsGDBRmUGAACAjkyRDQAAAOg0unTpkmHDhiVJZs+enYsuuqjVefPmzcuXv/zllvPhw4e/bU5jY2NKKSmlZPTo0e2Sd4U1rbDzy1/+MqeffnqSpqLed77znXbNArApW7p0acaOHZvx48e/pVC8wpw5c3Lbbbdl4sSJG/WdL33pS3nsscfyrW99K8OHD8/++++fAw88MKecckr+67/+Kz/4wQ+SJG+++WZOP/30LFq06G3v+MpXvtJSvr7gggty9tln5/e//32WLl2av/zlL7n66qtz1FFHpaqqlpVDW3sPAAAAdBaKbAAAAECncuGFF2arrbZKkowePTrHHHNM7rjjjkyfPj1TpkzJFVdckf322y9PPvlkkmTQoEEtq+fUy7Bhw3LIIYfk3/7t3/LQQw/lkUceyfjx4/PZz342hx56aF577bV069YtY8eOzU477VTXrAC1NmvWrDzxxBOt/mbNmtUyb+HChTniiCNy0UUX5eWXX855552Xp556KosXL878+fNz33335dBDD82vf/3rHH300bnqqqs2ONPaVsY888wzW0rIs2fPzp133vm2ObvuumvGjRuXrbfeOlVV5corr0z//v3TtWvX9OnTJ1/4wheyYMGCfO9738sWW2yRJNl66603ODMAAAB0dA31DgAAAADQlvbcc8/cfffdOeGEEzJ37tyMHz8+48ePb3XuRz/60YwbN67GCd+uqqpMmTIlU6ZMafX+LrvsksbGxgwaNKjGyQDq74ILLsiNN97Y6r2RI0e2bNn8jW98Iw8++GCSZMyYMRk5cmTLvK5du2bw4MEZOHBghgwZkvvvvz/nnHNOBg4cmH322addcp955pm5/vrrkzRtZ33SSSe9bc6QIUPym9/8Jt/5zndy11135eWXX265d9BBB+XCCy/MRz7ykZZVRHv27NkuWQEAAKAjsCIbAAAA0OkcccQRmTFjRi6++OIcfvjh2XHHHbP55ptnyy23TN++ffPJT34yd911VyZMmNAhSgGXXnppzjrrrOy7774tWXv37p3DDz88V111VZ566iklNoA1qKoqN9xwQ5Kkf//+bymxrayhoSHf/va3kyTLly9veaY9vP/9728Zr7xy3Kr69euX66+/Pi+99FJmz56d3/3ud5k/f36mTJmSI488Mo8++mir7wQAAIDOxopsAAAAQKfUq1evnHfeeTnvvPM26PlRo0Zl1KhRG5Whqqp1mjd06NAMHTp0o74F0Fk1Nja2rLq2OnPmzMkrr7ySJPnABz6wxrkHHHBAy3jGjBkbnW911vWfASuUUtKnT5/06dPnLdcnTZrUMj7wwAPbJBsAAAB0RFZkAwAAAABgk9bQ8Lf/Z3vZsmVrnLt06dJWn2trTz75ZMv4Xe961wa/Z+zYsUmSLbfcMkcfffRG5wIAAICOSpENAAAAAIBN2vbbb59tttkmSTJlypQ1ltkeeOCBlnHfvn3bLdM111zTMj7ssMM26B3jxo1r2Vr0xBNPzHbbbdcm2QAAAKAjUmQDAAAAAGCT1qVLlwwbNixJMnv27Fx00UWtzps3b16+/OUvt5wPHz78bXMaGxtTSkkpJaNHj37b/ccffzx/+MMf1pjnmmuuyZgxY5IkvXv3zogRI1qd99xzz632Hb/85S9z+umnJ2kq6n3nO99Z4zcBAABgU9d+66YDAAAAAECNXHjhhbn77rvz17/+NaNHj87DDz+ckSNHpl+/fnnjjTcyderUXHnllS3lsUGDBmXIkCHr/Z2HH344p59+egYOHJgjjzwye++9d3r16pVly5ZlxowZueWWW/Lf//3fSZLNNtss11xzTbp3797qu4YNG5att946J554Yvbdd9907949s2bNyn/+53+msbExy5YtS7du3TJ27NjstNNOG/4nBwAAADYBimwAAAAAAGzy9txzz9x999054YQTMnfu3IwfPz7jx49vde5HP/rRjBs3boO/9eabb2bChAmZMGHCauf06tUrY8aMyTHHHLPaOVVVZcqUKZkyZUqr93fZZZc0NjZm0KBBG5wVAAAANhWKbAAAAAAAdApHHHFEZsyYkTFjxuRnP/tZfvvb3+bVV19NQ0NDevfunQEDBuTEE0/MMccck1LKBn3jqKOOypgxYzJlypRMnz49c+bMycsvv5yqqrL99ttn3333zdChQzNq1Khss802a3zXpZdemvHjx2fy5MmZPXt2Xn311fTq1St77rlnRowYkdNOOy09evTYoJwAAACwqSlVVdU7Ax1UKWWXJDOTZObMmdlll13qnIg1eeAnf653BKibw0bsWu8IAAAAAADtxn8D4J3MfwMAgI7n+eefz3ve854Vp++pqur5tnhvl7Z4CQAAAAAAAAAAAGwoRTYAAAAAAAAAAADqSpENAAAAAAAAAACAulJkAwAAAAAAAAAAoK4U2QAAAAAAAAAAAKgrRTYAAAAAAAAAAADqSpENAAAAAAAAAACAulJkAwAAAAAAAAAAoK4U2QAAAAAAAAAAAKgrRTYAAAAAAAAAAADqSpENAAAAAAAAAACAulJkAwAAAAAAAAAAoK4U2QAAAAAAAAAAAKgrRTYAAAAAAAAAAADqSpENAAAAAAAAAACAulJkAwAAAAAAAAAAoK4U2QAAAAAAAPj/2bvzMCmqe//jny8Mw65iIBqYURDUAC7xKu5EFFFwuSiCMW5ADG5IYm708Wc0QtSoSYzhugcXcEVFRVyiV5MIBDfEEBdcMSAzuCBxQXaB7++PUz1dNL3NTPf0wLxfz1NPV/U5dep0T8+p7VvnAAAAAEBJEcgGAAAAAAAAAAAAAAAAACgpAtkAAAAAAAAAAAAAAAAAACVFIBsAAAAAAAAAAAAAAAAAoKQIZAMAAAAAAAAAAAAAAAAAlBSBbAAAAAAAAAAAAAAAAACAkiKQDQAAAAAAAAAAAAAAAABQUgSyAQAAAAAAAAAAAAAAAABKikA2AAAAAAAAAAAAAAAAAEBJEcgGAAAAAAAAAAAAAAAAACgpAtkAAAAAAAAAAAAAAAAAACVFIBsAAAAAAAAAAAAAAAAAoKQIZAMAAAAAAAAAAAAAAAAAlBSBbAAAAAAAAAAAAAAAAACAkiKQDQAAAAAAAAAAAAAAAABQUgSyAQAAAAAAAAAAAAAAAABKikA2AAAAAAAAAAAAAAAAAEBJEcgGAAAAAAAAAAAAAAAAACgpAtkAAAAAAAAAAAAAAAAAACVFIBsAAAAAAAAAAAAAAAAAoKQIZAMAAAAAAAAAAAAAAAAAlBSBbAAAAAAAAAAAAAAAAACAkiKQDQAAAAAAAAAAAAAAAABQUgSyAQAAAAAAAAAAAAAAAABKikA2AAAAAAAAAAAAAAAAAEBJEcgGAAAAAAAAAAAAAAAAACgpAtkAAAAAAAAAAAAAAAAAACVFIBsAAAAAAAAAAAAAAAAAoKQIZAMAAAAAAAAAAAAAAAAAlBSBbAAAAAAAAAAAAAAAAACAkiKQDQAAAAAAAAAAAAAAAABQUgSyAQAAAAAAAAAAAAAAAABKikA2AAAAAAAAAAAAAAAAAEBJEcgGAAAAAAAAAAAAAAAAACgpAtkAAAAAAAAAAAAAAAAAACVFIBsAAAAAAAAAAAAAAAAAoKQIZAMAAAAAAAAAAAAAAAAAlBSBbAAAAAAAAAAAAAAAAACAkiKQDQAAAAAAAAAAAAAAAABQUgSyAQAAAAAAAAAAAAAAAABKikA2AAAAAAAAAAAAAAAAAEBJEcgGAAAAAAAAAAAAAAAAACgpAtkAAAAAAAAAAAAAAAAAACVFIFsRmFk7M/uhmV1gZg+Z2QIz82haWIfyepvZrWY238xWmdnnZjbTzM4ys7IifAQAAAAAAAAAAAAAAAAAaDAEQRXHE5L6FaIgMztD0k2SWsbebiWpbzSNMLNj3P0/hdgeAAAAAAAAAAAAAAAAADQ0emQrDovNfynpOUnLa12I2ZGSJigEsX0m6WeS9pM0SNKjUbb9JT1qZvwtAQAAAAAAAAAAAAAAAGyW6JGtOO5XCECb7e7zJSkaUrRdvgVEQ4beqBBsuEzSQe7+YSzLM2Z2k6RzJf1Q0qmS7i5I7QEAAAAAAAAAAAAAAACgAdGLVxG4+wR3vz8RxFZHx0vqEc1fnRLElnChQo9viXkAAAAAAAAAAAAAAAAA2OwQyNZ4HRebn5Qug7uvlPRQtLibme1c7EoBAAAAAAAAAAAAAAAAQKERyNZ49Y1e33P3T7PkmxGbP7iI9QEAAAAAAAAAAAAAAACAoiCQrREys3aSKqLFd3Nkj6f3LE6NAAAAAAAAAAAAAAAAAKB4ykpdAaRVIcmi+eoceati85W12YiZVeTIsn1tykNpHXL8jqWuAgAAAAAAAAAAAAAAAFAnBLI1Tu1j88tz5F0Rm29Xy+1U5c4CAAAAAAAAAAAAAAAAAMXF0KKNU6vY/NocedfE5lsXoS4AAAAAAAAAAAAAAAAAUFRNtkc2MyuT9G0Bihrp7pMKUE7c6th8eY68LWPzq2q5nVxDkW4v6dValgkAAAAAAAAAAAAAAAAAtdJkA9kauW9i87mGC20bm881DOlG3L06W7qZ1aY4AAAAAAAAAAAAAAAAAKiTJhvI5u7rzKxnAYr6pABlpIoHmFXkyBvvVa2qCHUBAAAAAAAAAAAAAAAAgKJqsoFskuTu75a6Dum4+3Izq1IIUvt+juzx9HeKVysAAAAAAAAAAAAAAAAAKI5mpa4AMpoVve5qZttnyXdIbP6FItYHAAAAAAAAAAAAAAAAAIqCQLbG67HY/Ih0GcysjaQTo8W33f39YlcK2JytXr1aN998s/r3769OnTqpvLxcXbp00dFHH60HH3ywoNtasGCBfvGLX2i33XZT+/bt1bZtW+2yyy4aPXq05s2bV6uy3F2PPPKIhg0bpm7duql169badttt1bNnT5166qmaOHGi1q9fX9D6AwAAAAAAAAAAAAAANCRz91LXoUkws4WSdpT0kbt3zSN/C4WhQrtLWibpv9z9w5Q8N0k6N1oc6e6TClhlmVmFpCpJqqqqUkVFRSGLBxrUe++9p8GDB+u9997LmGfgwIF6+OGH1bZt23pta8KECRozZozWrl2bNr28vFzjx4/XOeeck7OsRYsW6ZRTTtGsWbOy5vvyyy+1zTbb1Km+AAAAAAAAAIDGbcbUj0pdBaBkDjl+x1JXAQAApKiurlZlZWVisdLdqwtRblkhCsHGzKyHpINT3m6XeDWzESlpz7j7p/E33P1bM/uZpCckbSXpBTO7UtJsSR0kjZJ0QpR9lqR7CvcJgC3L559/rgEDBqiqqkqSNGzYMA0fPlydO3fWxx9/rLvuuktTpkzRM888ox//+Md6/PHH67ytBx54QGeddZYkaeutt9Yvf/lLHXbYYWrZsqXmzp2r3//+95o/f75Gjx6tTp06aejQoRnLqqqqUr9+/bRgwQI1a9ZMJ510ko477jh17dpVK1eu1EcffaRZs2Zp6tSpda4vAAAAAAAAAAAAAABAY0CPbEUQBapNrMUqh7r79AxljZJ0o6TyDOvOlnS0uy+tTR3zQY9s2FKcd955uummmyRJY8eO1bhx4zbJM3bsWF1++eWSpEceeURDhgyp9XZWrlypbt26acmSJWrXrp1eeukl7bbbbhvlWbZsmQ4++GC9+eab2n777TV//vy0PcC5u/r166eZM2eqffv2evzxx9WvX7+02123bp2aN28uM6t1nQEAAAAAAAAAjR89sqEpo0c2AAAan2L1yNasEIWgeNz9Nkl7S7pN0r8lrZb0H4Ve2M6RdFAxgtiALcX69et13333SZJ23HFH/frXv06b77LLLtMOO+wgSbr66qvrtK2nn35aS5YskST9/Oc/3ySITZK22morXXfddZKkTz/9VJMmTUpb1n333aeZM2dKkm644YaMQWySVFZWRhAbAAAAAAAAAAAAAADYrBHIVgTuPsndrRbT9BzlveXuZ7p7d3dv7e4d3b2vu9/q7usa6GMBm6UPPvhAX331lSRpwIABat68edp8zZs314ABAyRJc+bM0cKFC2u9rVdffbVmftCgQRnz9evXT61atZIkPfzww2nz3HjjjZKkbt266fTTT691XQAAAAAAAAAAAAAAADYnZaWuAAAU0xdffFEzv91222XNG0+fOXOmunbtWpRtlZWVadttt9XHH3+sF198UevWrVNZWbI5XrRokV555RVJ0tChQ2t6W1uzZo0WL16s8vJybb/99hutAwAAAAAAAADYcjG0IgAAAJoCemQDsEVr27ZtzfzXX3+dNW88/e233y7attxdy5YtkyStXbtW8+fP3yg9EcQmSQcccIDef/99DR06VFtttZW6d++uyspKdejQQSeeeKLmzZtX63oCAAAAAAAAAAAAAAA0NgSyAdii9ejRQy1atJAUelnLJp6+aNGiWm+rZ8+eNfMzZszImG/u3Llavnx5xm3Fg+gWLVqkvfbaS4888ojWrl1b8/7y5cs1ZcoU7b333poyZUqt6woAAAAAAAAAAAAAANCYEMgGYIvWtm1b9e/fX5L0xhtvaPLkyWnzTZ48WW+++WbN8jfffFPrbR111FE1QXPXXXedli5dukmeDRs26JJLLtnovdRtxYcoveiii7Ry5UqNHDlS8+bN05o1a1RVVaWrrrpK5eXlWrNmjU477TS9/vrrta4vAAAAAAAAAAAAAABAY0EgG4At3m9+8xuVlZVJkoYPH64rr7xSixYt0rfffqtFixbpyiuv1PDhw1VeXl6zzqpVq2q9nYqKCp1zzjmSpMWLF+uggw7StGnTtGzZMq1evVovv/yyjjrqKD3zzDNZt7VixYqa+TVr1mj06NG688471atXL5WXl6uiokIXX3yxJk2aVJMnNTgOAAAAAAAAAAAAAABgc2LuXuo6oJEyswpJVZJUVVWlioqKEtcI2NjixYv15Zdfpk3r0KGDunTpUrN89913a9SoURsNzxnXvHlzjR8/XmPGjJEkHXfccZo6dWqt67R27VoNHTpUTzzxRMY8O+20k4YMGaJrr71WkvTYY49p8ODBNennnXeebrrpJklS69at9fHHH2ubbbZJW1afPn00Z84cNWvWTF988YW23nrrWtcZAAAAAAAAAAAAAAAgX9XV1aqsrEwsVrp7dSHKpUc2AJutSy65RLvvvnvaKbWHstNPP12zZ8/WsGHD1L59+5r3mzVrpv79++uFF15Qv379at7v0KFDnepUXl6uadOmaeLEidp7773VrFmymd1mm200ZswY/fOf/1Q8iDh1W/H67b///hmD2CTpyCOPlBSGLH3ttdfqVGcAAAAAAAAAAAAAAIBSKyt1BQCgoey555566KGHtH79en3yySdavXq1OnfurDZt2kiS7r///pq8vXr1qvN2zEwjRozQiBEjtHz5cn322WcqLy9X586d1bx5c0nSG2+8kXFbsajlnD0hxvMuWbKkznUGAAAAAAAAAAAAAAAoJXpkA7DZmjRpktw97TRp0qSM6zVv3lwVFRXq0aNHTRCbJM2aNatmfr/99itIHdu1a6fu3bursrKyJoht7dq1mj17tqQwzGjHjh03Wqd379418+vXr89afjy9rIzYZAAAAAAAAADAlmfJkiV68sknddlll2nQoEHq2LGjzKzmwfLaeuaZZzRkyBBVVFSoZcuWqqio0JAhQ/TMM88UpL7Lly/XzJkzde211+rEE09Ut27daurbtWvXOpW5aNEijR07Vvvss486deqkVq1aqbKyUn379tVll12mt956qyB1BwAAKCWiHgBAIbjs4YcfliR16dJFBx54YNG29Ze//EVff/21JOnEE0/cJL1Pnz5q3bq1Vq1apQ8//DBrWfH0Ll26FLaiAAAAAAAAAAA0Atttt11BynF3nX322ZowYcJG7y9evFhTp07V1KlTdeaZZ+rWW2+VmdV5O8cee6ymT59ez9om3XDDDbr44ou1YsWKjd6vrq5WdXW1Zs2apWXLlmn8+PEF2yYAAEAp0CMbAEj63//9X33++eeSpLPPPrum97RCW7duncaOHStJatGihUaNGrVJnjZt2mjgwIGSpDlz5qiqqiptWRs2bNC0adNq1tl7772LUmcAAAAAAAAAABqLyspKHXHEEXVa99JLL60JYttrr700efJkzZ49W5MnT9Zee+0lSZowYYJ+/etf16uO7l4z36FDBw0YMEDt2rWrU1lXXnmlfvazn2nFihXaaaeddM011+j555/XnDlzNG3aNP3hD3/QgQceqGbNuO0LAAA2fxY/kALizKxCUpUkVVVVqaKiosQ1Aupu0aJF2mGHHdKmPfHEEzrhhBP07bffauedd9Ybb7yhVq1abZJv+vTpOvTQQyVJw4cPTzt86dKlS9WmTZuNhixNWLt2rX7605/qnnvukRROmK+44oq0dZo9e3bN8KbHHHOMpk6dusnQoVdccYUuu+wySdLo0aN14403Zvj0AAAAAAAAAABsvsaOHas+ffqoT58+2m677bRw4UJ169ZNUubr9anmz5+vnj17at26ddpnn300c+ZMtW7duiZ95cqVOuSQQzRnzhyVlZXp3XffVffu3etU3wkTJqhdu3bad9991aNHD0lS165d9dFHH2nHHXfUwoUL8yrn73//u/r37y9JGjp0qO699161bNkybd61a9eqvLy8TvUFAACorerqalVWViYWK929uhDlMrQogCZht9120wEHHKBhw4apd+/eKi8v18KFCzVlyhQ9+OCDksJTUQ8++GDaILZ8TZ8+XaNGjdIpp5yiww8/XDvssINWrlypuXPn6tZbb9Xbb78tSTriiCOyPtG177776txzz9XNN9+sJ598UocccojOP/98de/eXUuWLNE999yj+++/X1J4+mzcuHF1rjMAAAAAAAAAAI3Zb37zm3qX8ac//Unr1q2TFIbqjAexSWHkkxtuuEEHHHCA1q1bp/Hjx+uGG26o07bOPPPMetd3w4YNOvvssyVJu+66a9YgNkkEsQEAgC0CgWwAmoQNGzbo2Wef1bPPPps2vVevXrr33ntrug6vj6+++ko33XSTbrrpprTpI0aM0C233JLzpPL666/X8uXLdffdd+vFF1/Uiy++uEmeHj166Mknn1THjh3rXW8AAAAAAAAAALZE7q5p06ZJkr7//e9r//33T5tv//3316677qr33ntPjz32mK6//nqZWUNWtcazzz6rDz74QJJ08cUXZw1iAwAA2FIwWDqAJuH222/XyJEj1bt3b2277bYqLy9Xly5dNGjQIN1xxx3617/+VZAgtr59++oPf/iDBg0apG7duqlNmzZq166ddtllF5111ll66aWXNHHixLx6fWvevLnuuusuPf300zrhhBPUpUsXlZeXa9ttt1Xfvn01fvx4vfnmm9p1113rXW8AAAAAAAAAALZUCxYs0OLFiyVJhxxySNa8ifTq6uq8hwAthilTpkgK9wqGDBlS8/7SpUs1f/58ff3116WqGgAAQNHQIxuAJuGkk07SSSedVK8y+vXrJ3fPmme77bbTBRdcoAsuuKBe24obOHCgBg4cWLDyAAAAAAAAAABoSt55552a+e9///tZ88bT33nnHXXr1q1o9crm5ZdfliT17t1bbdu21fXXX6/rr79eH374YU2eXr166ayzztI555yjFi1alKSeAAAAhUSPbAAAAAAAAAAAAAC2WFVVVTXzFRUVWfNWVlamXa8hbdiwQe+++64kaYcddtCQIUP085//fKMgNkl6++239fOf/1wDBgzQN998U4qqAgAAFBSBbAAAAAAAAAAAAAC2WPEgr3bt2mXN27Zt25r55cuXF61O2Xz99dfasGGDJOm5557TtGnTVFFRocmTJ+vLL7/UypUrNX36dO23336SpBkzZmjUqFElqSsAAEAhEcgGAAAAAAAAAAAAYIu1evXqmvny8vKseVu2bFkzv2rVqqLVKZsVK1bUzK9Zs0bt27fXjBkzdNJJJ2mbbbZR69atdcghh+j555/XnnvuKUl68MEH9eqrr5akvgAAAIVSVuoKAAAAAAAAAAAAAGhaFi9erC+//DJtWocOHdSlS5eCbatVq1Y182vXrs2ad82aNTXzrVu3LlgdaiNeX0kaPXq0dtppp03ytW7dWr/97W91zDHHSJIeeOAB9enTp0HqCAAAUAwEsgEAAAAAAAAAAABoUJdcconuuuuutGnDhw/XpEmTCrat9u3b18znGi403htarmFIiyVeX0kaNGhQxrz9+/dXWVmZ1q1bR49sAABgs8fQogAAAAAAAAAAAAC2WBUVFTXz1dXVWfNWVVXVzFdWVhatTtm0bNlSnTp1qlmO1z9Vq1at1LFjR0nSkiVLil43AACAYiKQDQAAAAAAAAAAAECDmjRpktw97VTI3tgkqVevXjXz7777bta88fSePXsWtB610bt375r59evXZ82bSC8rYzAuAACweSOQDQAAAAAAAAAAAMAWq1u3burcubMkacaMGVnzzpw5U5LUpUsXde3atdhVy+iHP/xhzfyHH36YMd+yZcu0dOlSSaHOAAAAmzMC2QAAAAAAAAAAAABsscxMgwcPlhR6XHv55ZfT5nv55ZdremQbPHiwzKzB6pjqhBNOqJl/9NFHM+abOnWq3F2S1Ldv36LXCwAAoJgIZAMAAAAAAAAAAACwRTv//PNrht4cM2aMVq1atVH6qlWrNGbMGElhiM7zzz8/bTkjRoyQmcnMNH369KLVd4899tCgQYMkSRMnTtSsWbM2yfPJJ5/o0ksvlSSVQSCEbwAAIABJREFUl5dr5MiRRasPAABAQ2CgdAAAAAAAAAAAAACN1qxZszR//vya5cRQmpI0f/58TZo0aaP8I0aM2KSMXXbZRRdccIGuueYazZkzRwcddJAuuugide/eXR9++KF+97vfae7cuZKkCy+8UDvvvHOd6zt//vxNAs+WL19e85pa34EDB2r77bffpJzx48frpZde0ldffaUjjzxSv/jFLzRw4EC1bNlSs2fP1tVXX63FixdLkq644gqGFgUAAJs9S3Q1C6QyswpJVZJUVVWlioqKEtcIAAAAAAAAAAAATc2IESN011135Z0/0/3PDRs2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
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>Once again, it's worth noting that EdMot and Louvain return identical results, but Edmot takes slightly longer to run. SCD is particularly inefficient: On a per-edge basis, it is about three orders of magnitude slower than Louvain. That's an enormous difference, and renders SCD untenable on large networks.</p>
    
    </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h3 id='stochasticity'>3. Stochasticity across runs (normalized mutual information)</h3><p>A few of these algorithms are non-deterministic, because they loop through the nodes of the network in an arbitrary order, and build the communities by combining nodes together. As such, different orderings of nodes may produce different results. These algorithms set a default random seed, so running them without explicitly varying the seed will produce identical results. Ideally, the algorithm finds a global maximum and so varying the seed (and thus the starting order of the nodes) has little effect on the output community structure.</p>
    <p>To find out, we'll run each algorithm five times with a different random seed. Taking the average of the Normalized Mutual Information between each pair of runs will give us an overall idea of how likely the algorithms are to fall into arbitrary local maxima: A score near 1.0 indicates that the results are highly stable and deterministic, while a score close to 0 is a concerning sign that the algorithm's results are highly dependent on the initial node order. In the latter case, it is advisable to run the algorithm multiple times and somehow average or aggregate the results.</p>
    <p>We'll use the small, weighted airports dataset here.</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[28]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">reshape</span><span class="p">(</span><span class="n">p</span><span class="p">):</span>
        <span class="k">return</span> <span class="p">[</span><span class="n">i</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">sorted</span><span class="p">(</span><span class="n">p</span><span class="o">.</span><span class="n">items</span><span class="p">(),</span> <span class="n">key</span><span class="o">=</span><span class="k">lambda</span> <span class="n">x</span><span class="p">:</span> <span class="n">x</span><span class="p">[</span><span class="mi">0</span><span class="p">])]</span>
    
    
    <span class="n">nw</span> <span class="o">=</span> <span class="n">networks</span><span class="p">[</span><span class="s1">&#39;airports&#39;</span><span class="p">]</span>
    <span class="n">nmi_by_model</span> <span class="o">=</span> <span class="p">{}</span>
    <span class="n">_iter</span> <span class="o">=</span> <span class="mi">4</span>
    
    <span class="k">for</span> <span class="n">model</span> <span class="ow">in</span> <span class="n">models</span><span class="p">:</span>
        <span class="n">partitions</span> <span class="o">=</span> <span class="p">[]</span>
        <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="n">_iter</span><span class="p">):</span>
            <span class="n">seed</span> <span class="o">=</span> <span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1000</span><span class="p">)</span>
            <span class="n">model</span><span class="p">[</span><span class="mi">1</span><span class="p">][</span><span class="s1">&#39;seed&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="n">seed</span>
            <span class="n">_</span><span class="p">,</span> <span class="n">partition</span> <span class="o">=</span> <span class="n">do_comm_detection</span><span class="p">(</span><span class="n">model</span><span class="p">,</span> <span class="n">nw</span><span class="p">)</span>
            <span class="n">partitions</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">partition</span><span class="p">)</span>
    
        <span class="n">nmis</span> <span class="o">=</span> <span class="p">[]</span>
        <span class="k">for</span> <span class="n">p0</span><span class="p">,</span> <span class="n">p1</span> <span class="ow">in</span> <span class="n">combinations</span><span class="p">(</span><span class="n">partitions</span><span class="p">,</span> <span class="mi">2</span><span class="p">):</span>
            <span class="n">p0</span><span class="p">,</span> <span class="n">p1</span> <span class="o">=</span> <span class="n">reshape</span><span class="p">(</span><span class="n">p0</span><span class="p">),</span> <span class="n">reshape</span><span class="p">(</span><span class="n">p1</span><span class="p">)</span>
            <span class="n">nmi</span> <span class="o">=</span> <span class="n">normalized_mutual_info_score</span><span class="p">(</span><span class="n">p0</span><span class="p">,</span> <span class="n">p1</span><span class="p">)</span>
            <span class="n">nmis</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">nmi</span><span class="p">)</span>
        
        <span class="n">mean_nmi</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">nmis</span><span class="p">)</span>
        <span class="n">nmi_by_model</span><span class="p">[</span><span class="n">model</span><span class="p">[</span><span class="mi">0</span><span class="p">]]</span> <span class="o">=</span> <span class="n">mean_nmi</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    <div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
    <pre>(&#39;EdMot&#39;, {&#39;component_count&#39;: 2, &#39;cutoff&#39;: 50, &#39;seed&#39;: 578})
    (&#39;GEMSEC&#39;, {&#39;walk_number&#39;: 5, &#39;walk_length&#39;: 10, &#39;dimensions&#39;: 32, &#39;learning_rate&#39;: 0.1, &#39;clusters&#39;: 19, &#39;seed&#39;: 507})
    (&#39;GreedyModularity&#39;, {&#39;weight&#39;: &#39;weight&#39;, &#39;seed&#39;: 53})
    (&#39;LabelPropagation&#39;, {&#39;iterations&#39;: 100})
    (&#39;Louvain&#39;, {&#39;resolution&#39;: 1.0})
    (&#39;SCD&#39;, {&#39;iterations&#39;: 25})
    </pre>
    </div>
    </div>
    
    </div>
    
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[47]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">matplotlib</span><span class="o">.</span><span class="n">rcParams</span><span class="p">[</span><span class="s1">&#39;figure.dpi&#39;</span><span class="p">]</span><span class="o">=</span> <span class="mi">200</span>
    <span class="n">fig</span><span class="p">,</span> <span class="n">ax</span> <span class="o">=</span> <span class="n">plt</span><span class="o">.</span><span class="n">subplots</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">figsize</span><span class="o">=</span><span class="p">(</span><span class="mi">15</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>
    <span class="n">x</span> <span class="o">=</span> <span class="p">[</span><span class="n">_</span> <span class="k">for</span> <span class="n">_</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">nmi_by_model</span><span class="p">))]</span>
    <span class="n">ax</span><span class="o">.</span><span class="n">bar</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">nmi_by_model</span><span class="o">.</span><span class="n">values</span><span class="p">(),</span> <span class="n">color</span><span class="o">=</span><span class="s1">&#39;#DB7093&#39;</span><span class="p">)</span>
    <span class="n">ax</span><span class="o">.</span><span class="n">title</span><span class="o">.</span><span class="n">set_text</span><span class="p">(</span><span class="s1">&#39;Mean Normalized Mutual Information between Runs&#39;</span><span class="p">);</span>
    
    <span class="n">rects</span> <span class="o">=</span> <span class="n">ax</span><span class="o">.</span><span class="n">patches</span>
    <span class="n">labels</span> <span class="o">=</span> <span class="p">[</span><span class="n">np</span><span class="o">.</span><span class="n">round</span><span class="p">(</span><span class="n">i</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span> <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">nmi_by_model</span><span class="o">.</span><span class="n">values</span><span class="p">()]</span>
    <span class="k">for</span> <span class="n">rect</span><span class="p">,</span> <span class="n">label</span> <span class="ow">in</span> <span class="nb">zip</span><span class="p">(</span><span class="n">rects</span><span class="p">,</span> <span class="n">labels</span><span class="p">):</span>
        <span class="n">ax</span><span class="o">.</span><span class="n">text</span><span class="p">(</span><span class="n">rect</span><span class="o">.</span><span class="n">get_x</span><span class="p">()</span> <span class="o">+</span> <span class="n">rect</span><span class="o">.</span><span class="n">get_width</span><span class="p">()</span> <span class="o">/</span> <span class="mi">2</span><span class="p">,</span> 
                <span class="n">rect</span><span class="o">.</span><span class="n">get_height</span><span class="p">(),</span> <span class="n">label</span><span class="p">,</span>
                <span class="n">ha</span><span class="o">=</span><span class="s1">&#39;center&#39;</span><span class="p">,</span> <span class="n">va</span><span class="o">=</span><span class="s1">&#39;bottom&#39;</span><span class="p">)</span>
    
    <span class="n">xtick_labels</span> <span class="o">=</span> <span class="p">[</span><span class="n">model</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="k">for</span> <span class="n">model</span> <span class="ow">in</span> <span class="n">models</span><span class="p">]</span>
    <span class="n">ax</span><span class="o">.</span><span class="n">set_xticks</span><span class="p">(</span><span class="n">x</span><span class="p">)</span>
    <span class="n">ax</span><span class="o">.</span><span class="n">set_xticklabels</span><span class="p">(</span><span class="n">xtick_labels</span><span class="p">);</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>
    
    
    
    
    <div class="jp-RenderedImage jp-OutputArea-output ">
    <img src="data:image/png;base64,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OPdKctZSNwIAAAAAAAAAAFiW9kry1Y2txJCOAAAAAAAAAAAAY0KGr4Xz84mZM888M7vssstStgUAAAAAAAAAAFhiP/3pT7P33ntPvPz5bGVHJeBr4ayZmNlll12y2267LWVbAAAAAAAAAACA5WXN3EXmZkhHAAAAAAAAAACAMSHgCwAAAAAAAAAAYEwI+AIAAAAAAAAAABgTAr4AAAAAAAAAAADGhIAvAAAAAAAAAACAMSHgCwAAAAAAAAAAYEwI+AIAAAA2yCWXXJJPfOITOfroo/O7v/u72XnnnVNVqaocdthhi7LPE088MY961KOyyy67ZNttt83uu++eZz7zmTnjjDMWZX8AAAAAU/lNBFhqWy11AwAAAIDxdLvb3W6T7evaa6/N0572tHziE59YZ/kFF1yQCy64ICeccEKOOeaYvOpVr9pkbQIAAABumvwmAiw1Gb4AAACAjbZy5co88pGPXLT6n/Oc56z9YXP//ffPRz/60Zx55pl573vfm7vc5S759a9/naOPPjrHHXfcorUBAAAAYCq/iQBLoVprS92GzUJV7ZbkoiS56KKLsttuuy1xiwAAAGBxvfrVr85ee+2VvfbaK7e73e1y/vnn5053ulOS5FnPelZWrVq1IPs59dRTs99++yVJHv/4x+cjH/lIttxyy7XrL7300tzvfvfLhRdemFve8pY577zzcotb3GJB9g0AAAAwld9EgPm4+OKLs3LlyomXK1trF29snTJ8AQAAABvkNa95TR73uMct+jAGf/u3f5sk2XLLLfPud797nR82k2TnnXfOG9/4xiTJL3/5y7z3ve9d1PYAAAAAN21+EwGWmoAvAAAAYNm68sor8/nPfz5JcuCBB86YUfvJT35ydtpppyTJySefvMnaBwAAALAY/CYCzEbAFwAAALBsnXnmmbnuuuuSJA972MNmLLdixYo88IEPXLvNDTfcsEnaBwAAALAY/CYCzEbAFwAAALBsffe73107f/e7333WshPrb7zxxvzgBz9Y1HYBAAAALCa/iQCzEfAFAAAALFsXXXTR2vmZhi6YsHLlymm3AwAAABg3fhMBZiPgCwAAAFi2rrjiirXzO+yww6xlt99++7XzV1555aK1CQAAAGCx+U0EmI2ALwAAAGDZuvbaa9fOr1ixYtay22yzzdr5a665ZtHaBAAAALDY/CYCzEbAFwAA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yRZbbJFnPetZecITnpBdd901F154YY4//vh8/OMfzy9+8YscdNBBOfvss7P77rvPWN/973//vP/979+g93vZZZfl0Y9+dH76058mSR760Ifm8MMPz53vfOdceuml+exnP5t3vetdueGGG3LUUUdl5cqVOfjggzdoXwAArEvAFwAAAAAAAGykF7/4xbn66quz1VZb5TOf+Uz22WeftesOOOCA3PWud81LX/rSfO9738uxxx6bo48+et77+Ou//uusWbMmSfKOd7wjL3jBC9au22uvvfKUpzwlRx55ZI499thcddVVOfbYY/P2t799xvq233773POe95x3O5LkuOOOWxvs9bSnPS0nnXTSOusf85jHZP/9988TnvCEJMlf/dVfCfgCAFggWyx1AwAAAAAAAGCcnXXWWVm9enWS5DnPec46wV4TjjzyyOy5555Jkre+9a254YYb5r2f0047LUly61vfep1gr6FhINmXv/zlee9jvm1Jkle96lXTljnooINyn/vcJ0ny7W9/O1dcccWitQcA4KZEwBcAAAAAAABshI9+9KNr55/97Gf/f/buPkrL6r4X/ncDI+8VlUatGKtSImrqyygpRqvE1PU0LtHz5Jy0OXKoVi0Gk6hIIyUm6YoR1BMgNPGlKcaKSGJrxNhQTZqIdoz4iPjeQFKjUXBFExWVFwGR6/mDcTLKMMw9iuTCz2ete137mvt37d++/mE5yXf27rCmR48eGTt2bJJkxYoVbQGxRqxfvz5Jsu+++26xZuedd87gwYOTJOvWrWu4R6NrSZL99ttvi3X7779/h88AANB9Al8AAAAAAADwNrS0tCTZdERic3PzFuuOPfbYtvHdd9/dcJ9hw4YlSZ588skt1rzyyit5/vnn31S/LbSf+4knnthi3S9+8Yskya677prddtttm60HAOC9ROALAAAAAAAA3oYlS5YkSYYOHZpevXptse6AAw7Y7JlGjBs3Lknywgsv5Oqrr+6w5uKLL96sfkuWLl2aI488MgMHDkyfPn0yZMiQnHzyyZk9e/ZWj5w888wz07NnzyTJJZdc0mHN/Pnz8+CDD3ZpLQAAdN2W/4sTAAAAAAAA6NTatWvbdtQaMmRIp7W77LJL+vfvn9WrV2fZsmUN9zrzzDPT0tKSG264Ieecc04WL16c0aNHZ88998zTTz+dOXPmZN68eUmSCy+8MCeccEKn8z333HN57rnn2u6feeaZPPPMM7n11ltz2WWX5aabbsrw4cM7fPbAAw/MzJkz89nPfjY33nhjfv3rX2fcuHHZb7/98vzzz+dHP/pRvvGNbyRJPvrRj2by5MkNvy8AAB0T+AIAAAAAAIBuWrlyZdt4wIABW61/I/C1atWqhnv17Nkzc+bMyejRo3PppZdm1qxZmTVr1ptqRo0alUmTJnUa9urRo0eOP/74fOxjH8shhxyS3XbbLStXrswDDzyQf/zHf8ySJUvy05/+NKNGjcp9992X97///R3Oc8455+SII47I5ZdfnptvvjkLFix40/f7779/Jk2alNNOO63Tnc8AAGiM/7ICAAAAAACAblq7dm3beKeddtpqfe/evZMkr776arf6LV26NHPnzs2jjz7a4fcLFy7M7Nmz88EPfjB77rlnhzU333xzBg0atNnPjznmmIwfPz5nnXVWrrvuujz33HM577zzcvPNN3c4z8qVKzN79uz86Ec/6vD7J554It/+9rdz0EEHZeTIkV18QwAAtqbH9l4AAAAAAAAA1FWfPn3axuvXr99q/bp165Ikffv2bbhXS0tLRo4cme9973vZa6+9cv311+fZZ5/N+vXrs2zZslxxxRXp27dvbrjhhowYMSJLlizpcJ6Owl5vaGpqyqxZs3LAAQckSebNm5dnnnlms7pnn302I0eOzJVXXpkNGzZk6tSp+cUvfpH169fnhRdeyLx583LQQQfljjvuyKhRo3LTTTc1/L4AAHRM4AsAAAAAAAC6aeDAgW3jrhzTuHr16iRdO/6xvXXr1uWTn/xkXnrppeyxxx659957M2bMmOy+++5pamrKkCFDMn78+LS0tKRPnz5Zvnx5xo4d29jLtOrVq1fOOOOMtvu77rprs5pPf/rT+a//+q+UUvL9738/kyZNyn777ZempqbsuuuuOeWUU7Jw4cIMHz4869aty2mnnZbnnnuuW+sBAODNBL6AHc7TTz+diRMnZvjw4enfv3923XXXjBgxIl/96lezZs2ad6THU089lUmTJqW5uTmDBg1q+wX2qKOOysUXX5zf/OY33Zr3tttuSyml7fP3f//378h6AQAAAADYNvr06ZPBgwcnSZYvX95p7YoVK9oCX3vvvXdDfW6//fa2nbY+85nPZI899uiw7qCDDsqYMWOSJPfff38efvjhhvq84cADD2wbv3WHrxUrVmTevHlJko9+9KMZNWpUh3MMGDAgn//855NsCrp95zvf6dZaAAB4M4EvYIcyf/78/PEf/3GmTZuWpUuXZs2aNVmxYkUWLVqUv/3bv83hhx+eJ5544m31mDt3bg488MBcdtlleeCBB/Lyyy9nw4YNWbFiRRYuXJgvfvGLGT58eO64446G5l29enU+9alPva21AQAAAADw7hs+fHiS5PHHH8+GDRu2WLd06dLNnumq9sczHn744Z3WNjc3d9izEVVVbfG7n/3sZ9m4ceO7thYAAN5M4AvYYTz88MP5xCc+kZdffjkDBgzIJZdcknvuuSc//vGPc9ZZZyXZ9EvoiSee2KVttTuycOHCjB07NmvWrEmPHj1y+umn55Zbbsl9992Xm266KSeddFKS5IUXXsjo0aPzy1/+sstzf+ELX8hTTz2V973vfd1aGwAARLyTvQAAIABJREFUAAAA28fRRx+dZNMf9i5evHiLde2PRvzwhz/cUI9evXq1jTsLlSXJa6+91uFzjfjpT3/aNv6DP/iD7boWAADeTOAL2GGcd955WbNmTXr16pUf/vCHmTx5ckaOHJmPfOQj+eY3v5nLL788yaa/IJo+fXq3ekyZMiWvv/56kuTrX/96vvWtb+Xkk0/OkUcemY9//OO59dZbM2HChCSbfrHvap8HHngg//AP/5DevXvnK1/5SrfWBgAAAADA9nHKKae0ja+99toOazZu3JjZs2cnSQYNGrTFYxC3ZN99920bt7S0dFrbPljW/rmu2rBhQ771rW+13f/pn/7pm77/wz/8w5RS3pW1AACwOYEvYIewaNGi3HnnnUmSM844IyNHjtys5oILLmjbIvtrX/vam/6qqKt+8pOfJEl22223jB8/vsOaL37xi23je+65Z6tzvv766znrrLPy+uuvZ/LkyfmjP/qjhtcFAAAAAMD2M2LEiBxzzDFJkmuuuSYLFy7crGbatGltxzKee+65aWpqetP3d955Z0opKaXktNNO2+z5448/Pv369UuSXHXVVXn00Uc7XMttt92WefPmJUn22muvHHrooW/6fsGCBXnppZe2+C6vvfZazjzzzLbjF0866aTsvffeb6oZPHhw/uRP/iRJct999+W6667rcK6nnnoql1xySZKklJITTzxxi30BAOg6gS9gh3DLLbe0jU8//fQOa3r06JGxY8cmSVasWNEWEGvE+vXrk3T+V0g777xzBg8enCRZt27dVuecMWNGHnjggQwbNiwXXnhhw2sCAAAAAGD7mzlzZvr27ZsNGzbkhBNOyNSpU3PvvfdmwYIFGTduXD73uc8lSYYNG5YLLrig4fkHDRqUSZMmJUlWrlyZo446KpMnT86CBQvy0EMP5Qc/+EHGjx+f0aNHZ+PGjUmSSy+9ND16vPn/Drzuuuuy995759RTT80//dM/5T//8z/z0EMP5e67787MmTNzyCGHtAW43ve+92XmzJkdrmfKlCnp2bNnkk3/u/zYsWPz/e9/Pw899FBaWlryla98Jc3NzXn22WeTJH/913+dD3zgAw2/NwAAm3NQNrBDeGPL6P79+6e5uXmLdccee2zb+O67786f/dmfNdRn2LBhefDBB/Pkk09useaVV17J888/31bfmV/+8pf50pe+lCS58sor07t374bWAwAAAADA74bDDjssN954Y8aMGZNXXnklkydP3qxm2LBhmT9/fgYOHNitHhdddFFefPHFzJw5M6tWrcrUqVMzderUzeqampoyZcqUjBkzpsN5Vq1alblz52bu3Llb7PXBD34w3/nOd7b4B9DHHXdcrrvuuowbNy6rV6/O9ddfn+uvv77D2r/8y7/MlVde2YU3BACgK+zwBewQ3tgGe+jQoenVa8tZ1gMOOGCzZxoxbty4JMkLL7yQq6++usOaiy++eLP6LfnUpz6VNWvW5NRTT83xxx/f8HoAAAAAAPjdcdJJJ+WRRx7J+eefn2HDhqVfv34ZNGhQjjjiiFx22WV58MEHM3To0G7PX0rJjBkzsmjRopx99tk5+OCDM3DgwPTs2TM777xzmpubM2HChDz22GOZOHFih3NceOGFmTFjRj7xiU/k4IMPzu67756mpqYMGDAg+++/f/7iL/4i//qv/5oHH3wwBx54YKfrOfXUU7N06dJ84QtfyMiRI7PrrrumV69e6d+/fz7wgQ/kr/7qr3LHHXfk29/+dnbaaaduvzcAAG9mhy+g9tauXdu2o9aQIUM6rd1ll13Sv3//rF69OsuWLWu415lnnpmWlpbccMMNOeecc7J48eKMHj06e+65Z55++unMmTMn8+bNS7Lpl+YTTjhhi3PNnTs3t99+ewYNGpRp06Y1vBYAAAAAAH737LPPPpk+fXqmT5/e0HPHHXdcqqrqUm1zc3Onp110Zvjw4Rk+fHjOO++8bj3/VkOGDMmXv/zlfPnLX35H5gMAYOsEvoDaW7lyZdt4wIABW61/I/C1atWqhnv17Nkzc+bMyejRo3PppZdm1qxZmTVr1ptqRo0alUmTJnUa9nrxxRdz/vnnJ0mmTp2a3XffveG1AAAAAAAAAADvPY50BGpv7dq1beOubAndu3fvJMmrr77arX5Lly7N3Llz8+ijj3b4/cKFCzN79uz86le/2uIcEydOzK9//et86EMfyt/8zd90ax0AAAAAAAAAwHuPwBdQe3369Gkbr1+/fqv169atS5L07du34V4tLS0ZOXJkvve972WvvfbK9ddfn2effTbr16/PsmXLcsUVV6Rv37654YYbMmLEiCxZsmSzOe68885ce+216dmzZ66++ur06OGfYgAAAAAAAACga6QMgNobOHBg27grxzSuXr06SdeOf2xv3bp1+eQnP5mXXnope+yxR+69996MGTMmu+++e5qamjJkyJCMHz8+LS0t6dOnT5YvX56xY8duNse4ceOSJJ/97Gdz6KGHNrQGAAAAAAAAAOC9rdf2XgDA29WnT58MHjw4zz//fJYvX95p7YoVK9oCX3vvvXdDfW6//fY888wzSZLPfOYz2WOPPTqsO+iggzJmzJjMmjUr999/fx5++OEccsghSZKbb745P//5z9OrV68ceOCB+c53vrPZ8z/96U/bxo899lhbzYc+9KHsu+++Da0ZAAAAAAAAANixCHwBO4Thw4enpaUljz/+eDZs2JBevTr+523p0qVveqYR7Y9nPPzwwzutbW5uzqxZs9p6vhH4euM4yQ0bNuSss87aas/vfve7+e53v5skufbaawW+AAAAAOA94PHzv7G9lwCQJBk649PbewkAQAcc6QjsEI4++ugkm45rXLx48Rbr7rrrrrbxhz/84YZ6tA+RbdiwodPa1157rcPnAAAAAAAAAADeDoEvYIdwyimntI2vvfbaDms2btyY2bNnJ0kGDRqUUaNGNdSj/e5aLS0tnda2D5a1f+60005LVVWdfhYsWNBW/6Uvfant56eddlpD6wUAAAAAAAAAdjwCX8AOYcSIETnmmGOSJNdcc00WLly4Wc20adPajmU899xz09TU9Kbv77zzzpRSUkrpMFx1/PHHp1+/fkmSq666Ko8++miHa7ntttsyb968JMlee+2VQw89tNvvBQAAAAAAAADQnsAXsMOYOXNm+vbtmw0bNuSEE07I1KlTc++992bBggUZN25cPve5zyVJhg0blgsuuKDh+QcNGpRJkyYlSVauXJmjjjoqkydPzoIFC/LQQw/lBz/4QcaPH5/Ro0dn48aNSZJLL700PXr4pxYAAAAAAAAAeGf02t4LAHinHHbYYbnxxhszZsyYvPLKK5k8efJmNcOGDcv8+fMzcODAbvW46KKL8uKLL2bmzJlZtWpVpk6dmqlTp25W19TUlClTpmTMmDHd6gMAAAAAAAAA0BHbzgA7lJNOOimPPPJIzj///AwbNiz9+vXLoEGDcsQRR+Syyy7Lgw8+mKFDh3Z7/lJKZsyYkUWLFuXss8/OwQcfnIEDB6Znz57Zeeed09zcnAkTJuSxxx7LxIkT38E3AwAAAAAAAACwwxewA9pnn30yffr0TJ8+vaHnjjvuuFRV1aXa5ubmNDc3d2d57+g6AAAAAAAAAID3Fjt8AQAAAAAAAAAA1ITAFwAAAAAAAAAAQE0IfAEAAAAAAAAAANSEwBcAAAAAAAAAAEBNCHwBAAAAAAAAAADURK/tvQDYHh4//xvbewkAGTrj09t7CQAAAAAAAADUjB2+AAAAAAAAAAAAakLgCwAAAADgPeLpp5/OxIkTM3z48PTv3z+77rprRowYka9+9atZs2bNO9LjqaeeyqRJk9Lc3JxBgwalqakpu+66a4466qhcfPHF+c1vfvOO9AEAAID3Kkc6AgAAAAC8B8yfPz+nnnpqXn755bafrVmzJosWLcqiRYsya9as/Pu//3v222+/bveYO3duzjrrrM3CYytWrMjChQuzcOHCzJw5M//yL/+Sj3zkI93uAwAAAO9ldvgCAAAAANjBPfzww/nEJz6Rl19+OQMGDMgll1ySe+65Jz/+8Y9z1llnJUl+9rOf5cQTT8yqVau61WPhwoUZO3Zs1qxZkx49euT000/PLbfckvvuuy833XRTTjrppCTJCy+8kNGjR+eXv/zlO/V6AAAA8J4i8AUAAAAAsIM777zzsmbNmvTq1Ss//OEPM3ny5IwcOTIf+chH8s1vfjOXX355kmTp0qWZPn16t3pMmTIlr7/+epLk61//er71rW/l5JNPzpFHHpmPf/zjufXWWzNhwoQkyerVq7vdBwAAAN7rBL4AAAAAAHZgixYtyp133pkkOeOMMzJy5MjNai644IIMHz48SfK1r30tr732WsN9fvKTnyRJdtttt4wfP77Dmi9+8Ytt43vuuafhHgAAAIDAFwAAAADADu2WW25pG59++ukd1vTo0SNjx45NkqxYsaItINaI9evXJ0n23XffLdbsvPPOGTx4cJJk3bp1DfcAAAAABL4AAAAAAHZoLS0tSZL+/funubl5i3XHHnts2/juu+9uuM+wYcOSJE8++eQWa1555ZU8//zzb6oHAAAAGiPwBQAAAACwA1uyZEmSZOjQoenVq9cW6w444IDNnmnEuHHjkiQvvPBCrr766g5rLr744s3qAQAAgMZs+bd7AAAAAABqbe3atW07ag0ZMqTT2l122SX9+/fP6tWrs2zZsoZ7nXnmmWlpackNN9yQc845J4sXL87o0aOz55575umnn86cOXMyb968JMmFF16YE044ofEXAgAAAAS+AAAAAAB2VCtXrmwbDxgwYKv1bwS+Vq1a1XCvnj17Zs6cORk9enQuvfTSzJo1K7NmzXpTzahRozJp0iRhLwAAAHgbHOkIAAAAALCDWrt2bdt4p5122mp97969kySvvvpqt/otXbo0c+fOzaOPPtrh9wsXLszs2bPzq1/9qlvzAwAAAAJfAAAAAAA7rD59+rSN169fv9X6devWJUn69u3bcK+WlpaMHDky3/ve97LXXnvl+uuvz7PPPpv169dn2bJlueKKK9K3b9/ccMMNGTFiRJYsWdJwDwAAAEDgCwAAAABghzVw4MC2cVeOaVy9enWSrh3/2N66devyyU9+Mi+99FL22GOP3HvvvRkzZkx23333NDU1ZciQIRk/fnxaWlrSp0+fLF++PGPHjm3sZQAAAIAkAl8AAAAAADusPn36ZPDgwUmS5cuXd1q7YsWKtsDX3nvv3VCf22+/Pc8880yS5DOf+Uz22GOPDusOOuigjBkzJkly//335+GHH26oDwAAACDwBQAAAACwQxs+fHiS5PHHH8+GDRu2WLd06dLNnumq9sczHn744Z3WNjc3d9gTAAAA6BqBLwAAAACAHdjRRx+dZNNxjYsXL95i3V133dU2/vCHP9xQj169erWNOwuVJclrr73W4XMAAABA17xrga9SyvtLKV8tpSwppawupbxYSrmvlDKxlNLvHeqxTynl0lLK4lLKS6WU11r73FNK+UIp5fff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AAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoCYEvAAAAAAAAAACAmhD4AgAAAAAAAAAAqAmBLwAAAAAAAAAAgJoQ+AIAAAAAAAAAAKgJgS8AAAAAAAAAAICaEPgCAAAAAAAAAACoiXct8FVKeX8p5aullCWllNWllBdLKfeVUiaWUvq9w71GlFKubO31SillVSnlF6WU+aWUCaWU338n+wEAAAAAAAAAALwber0bTUopJya5IcnO7X7cL8mRrZ8zSykfq6rqibfZp3eSbyQ5I0l5y9f7tX4+luSJJLe8nV4AAAAAAAAAAADvtm0e+CqlHJLkX7Ip4LUqydQkC5L0TfKXSc5K8oEk80spR1ZVtaqbfXZKMi/Jn7f+qCXJ7CRLkmxIsk+SQ5L8r26/DAAAAAAAAAAAwHb0buzw9bVsCnttSHJCVVUL2313Rynlv5NcnuSAJBOSfLmbfS7Kb8NeE6uqmvaW7/+/bAqefb6U0tTNHgAAAAAAAAAAANtNj205eSnlyCTHtd5e85aw1xumZdMuXElyXnfCWKWU/ZJMar395w7CXm9SVdVrjfYAAAAAAAAAAADY3rZp4CvJKe3G13ZUUFXVxmw6ejFJdslvA2KN+JskTUmqdH+HMAAAAAAAAAAAgN9p2zrwdUzrdXWSxZ3U3dVufHQ3+vyv1uv9VVU9mSSllB6llCGllH1LKX27MScAAAAAAAAAAMDvlG0d+Breen28qqoNndQt7eCZLiml/H6S/VpvF5ZSfq+U8rUkzydZluSJJK+UUu4qpZzYyNwAAAAAAAAAAAC/S3ptq4lLKX2SDG69Xd5ZbVVVK0opq5P0T7J3g60ObDd+NckDSfZ/S02vJH+a5E9LKTOqqprQYI+UUoZspWSPRucEAAAAAAAAAABoxDYLfCUZ2G68qgv1bwS+BjTYZ9d24/OS9E5yT5K/S7IoSZ8kf57kq0n2THJ+KeXnVVVd3WCfZQ3WAwAAAAAAAAAAvKO25ZGOfdqN13ehfl3rtW+Dffq3G/dOsjjJ8VVV/WdVVa9WVbWiqqq5SY7NplBZkny5lNJoHwAAAAAAAAAAgO1qWwa+1rYb79SF+t6t11ffRp8k+XxVVW/9Waqq+u8kV7Xe/n6SjzbYZ++tfI7rYvcNAAAgAElEQVRscD4AAAAAAAAAAICGbMsjHVe2G3flmMY3durqyvGPW+qzPsmCTmp/kGRi6/jIJP/W1SZVVS3v7PtSSlenAgAAAAAAAAAA6JZttsNX6y5bz7feDumstpSyS34b+FrWYKv29c9VVdXZ8ZHta9/XYB8AAAAAAAAAAIDtalse6ZgkS1qvQ0spne0mdkAHz3TVfyd5rXXccyu17b/f0GAfAAAAAAAAAACA7WpbB77ubr32T9LcSd2x7cY/aaRBVVWvJVnYert7KaV/J+X7txs/00gfAAAAAAAAAACA7W1bB75uaTc+vaOCUkqPJGNbb19KsqAbfb7beu2Z5ORO6v7fduOWbvQBAAAAAAAAAADYbrZp4Kuqqvvy22DVGaWUkR2UXZBkeOt4ZuuOXW1KKceVUqrWzz9vodW3kvy6dTyllLL7WwtKKccl+T+tt4+lwZ3EAAAAAAAAAAAAtrdtvcNXkpyb5NUkvZL8sJTyd6WUPymljCql/GOSy1vrfp5kWncaVFW1Kslnk1RJ9kmyqJQyvpRyRCnl6FLKJUn+PZt2ANuQ5Oyqqqq391oAAAAAAAAAAADvrl7bukFVVQ+WUv4iyZwkv5dkSgdlP09yYlVVK99GnxtLKYOTTE+yd5IrOihblWRMVVV29wIAAAAAAAAAAGrn3djhK1VV/VuSP04yI5vCXWuSvJTk/iQXJjmsqqrH34E+VyQ5PMlVSR7Ppp3FViV5JJt2EhtWVdX33m4fAAAAAAAAAACA7WGb7/D1hqqqnkoyofXTyHN3JikN1P9XkvENLQ4AAAAAAAAAAKAG3pUdvgAAAAAAAAAAAHj7BL4AAAAAAAAAAABqQuALAAAAAAAAAACgJgS+AAAAAAAAAAAAakLgCwAAAAAAAAAAoCYEvgAAAAAAAAAAAGpC4AsAAAAAAAAAAKAmBL4AAAAAAAAAAABqQuALAAAAAAAAAACgJgS+AAAAAAAAAAAAakLgCwAAAAAAAAAAoCYEvgAAAAAAAAAAAGpC4AsAAAAAAAAAAKAmBL4AAAAAAAAAAABqQuALAAAAAAAAAACgJgS+AAAAAAAAAAAAakLgCwAAAAAAAAAAoCYEvgAAAAAAAAAAAGpC4AsAAAAAAAAAAKAmBL4AAAAAAAAAAABqQuALAAAAAAAAAACgJgS+AAAAAAAAAAAAakLgCwAAAAAAAAAAoCYEvgAAAAAAAAAAAGpC4AsAAAAAAAAAAKAmBL4AAAAAAAAAAABqQuALAAAAAAAAAACgJgS+AAAAAAAAAAAAakLgCwAAAAAA+P/Zu/tYO6tCz+O/BYe20NZLkQBGEMVOoWaCF1GkVt7Fa2EYJAgiqCmDdGaUBBAcxjIhXBMQnAJtri+IIAxcHTQw451rO1pFChQbhUo0uRako0JJQK3UQt9oC2v+6O7hIO3peds9LO7nk+zstfdez1rr9K/+8c3zAAAA0AjBFwAAAAAAAAAAQCMEXwAAAAAAAAAAAI0QfAEAAAAAAAAAADRC8AUAAAAAAAAAANAIwRcAAAAAAAAAAEAjBF8AAAAAAAAAAACNEHwBAAAAAAAAAAA0QvAFAAAAAAAAAADQCMEXAAAAAAAAAABAIwRfAAAAAAAAAAAAjRB8AQAAAAAAAAAANELwBQAAAAAAAAAA0AjBFwAAAAAAAAAAQCMEXwAAAAAAAAAAAI0QfAEAAAAAAAAAADRC8AUAAAAAAAAAANAIwRcAAAAAAAAAAEAjBF8AAAAAAAAAAACNEHwBAAAAAAAAAAA0QvAFAAAAAAAAAADQCMEXAAAAAAAAAABAIwRfAAAAAAAAAAAAjRB8AQAAAAAAAAAANELwBQAAAAAAAAAA0AjBFwAAAAAAAAAAQCMEXwAAAAAAAAAAAI0QfAEAAAAAAAAAADRC8AUAAAAAAAAAANAIwRcAAAAAAAAAAEAjBF8AAAAAAAAAAACNEHwBAAAAAAAAAAA0QvAFAAAAAAAAAADQCMEXAAAAAAAAAABAIwRfAAAAAAAAAAAAjRB8AQAAAAAAAAAANELwBQAAAAAAAAAA0AjBFwAAAAAAAAAAQCMEXwAAAAAAAAAAAI0QfAEAAAAAAAAAADRC8AUAAAAAAAAAANAIwRcAAAAAAAAAAEAjBF8AAAAAAAAAAACNEHwBAAAAAAAAAAA0QvAFAAAAAAAAAADQCMEXAAAAAAAAAABAIwRfAAAAAAAAAAAAjRB8AQAAAAAAAAAANELwBQAAAAAAAAAA0AjBFwAAAAAAAAAAQCMEXwAAAAAAAAAAAI0QfAEAAAAAAAAAADRC8AUAAAAAAAAAANAIwRcAAAAAAAAAAEAjBF8AAAAAAAAAAACNEHwBAAAAAAAAAAA0QvAFAAAAAAAAAADQCMEXAAAAAAAAAABAIwRfAAAAAAAAAAAAjRB8AQAAAAAAAAAANELwBQAAAAAAAAAA0AjBFwAAAAAAAAAAQCMEXwAAAAAAAAAAAI0QfAEAAAAAAAAAADRC8AUAQFc8+eSTufTSSzN16tSMHz8+e+21V4444ojMmTMn69at68qe69aty0EHHZRSSkopeetb39rv/DVr1uT+++/PnDlzcuaZZ+Ztb3vbgK/9a88991yuvfbaTJ8+PXvttVfGjh2bt7zlLTnjjDPygx/8YOh/FAAAAAAAAPTRM9oHAADg9Wf+/Pk555xzsnr16t7v1q1bl4ceeigPPfRQbr755ixYsCAHHXTQiO57xRVX5He/+92A559yyilZtGjRsPddsmRJTj/99Dz99NOv+H7FihVZsWJF7rrrrsycOTM333xzdt1112HvBwAAAAAAwL9e7vAFAMCI+uUvf5kzzzwzq1evzoQJE3LVVVflpz/9ae65556cf/75SZLHHnssJ598ctasWTNi+z7yyCOZO3duxo0bl4kTJw7omlpr73jSpEk58cQTM2HChEHt+9hjj2XGjBl5+umns8suu2TWrFlZuHBhli5dmrvuuisnnHBCkuS2227LxRdfPKi1AQAAAAAA4K8JvgAAGFEXXXRR1q1bl56enixcuDCzZ8/OtGnTcvzxx+emm27Kl770pSTJo48+muuvv35E9nzxxRdz/vnn58UXX8zs2bOz1157Dei6s88+O9/61rfy+OOP59lnn83ChQvzxje+cVB7X3LJJb13Mrvlllvy9a9/PSeeeGLe9a535fTTT8+PfvSjzJw5M0ny5S9/OUuXLh3U+gAAAAAAANCX4AsAgBHz0EMP9T4i8bzzzsu0adNeNeeSSy7J1KlTkyRz587Npk2bhr3vvHnzsnTp0hx88MG57LLLBnzdrFmzcvbZZ2fy5MlD2nflypVZsGBBkmT69Om9YVdfpZTccMMNGT9+fGqtueaaa4a0FwAAAAAAACSCLwAARtD3vve93vG55567zTm77LJLPvnJTyZJVq1a1RuIDdUTTzyRK664Iknyta99LWPGjBnWeoPx8MMP9z4WcsaMGdudt+eee+bII49MkixYsCDr1q3bKecDAAAAAADg9UfwBQDAiHnggQeSJOPHj8/hhx++3XnHHHNM73jx4sXD2vPTn/501q5dm0984hM57rjjhrXWYD377LO943333bffuVt/X7duXR5++OGungsAAAAAAIDXL8EXAAAjZtmyZUmSyZMnp6enZ7vzDjnkkFddMxR33nlnFixYkEmTJmXOnDlDXmeoxo8f3ztevXp1v3P7/v7rX/+6a2cCAAAAAADg9U3wBQDAiNiwYUNWrlyZJNl///37nTtp0qTeWGrFihVD2m/VqlW56KKLkiTXXHNN9tlnnyGtMxxTp07tHd93333bnbdx48b87Gc/6/385JNPdvVcAAAAAAAAvH4JvgAAGBHPP/9873jChAk7nL81+FqzZs2Q9vvc5z6XP/zhD5k2bVrOP//8Ia0xXFOmTOmNvubPn58HH3xwm/Ouu+663hgueeW/FQAAAAAAAAyG4AsAgBGxYcOG3vGYMWN2OH/s2LFJkvXr1w96r/vvvz/f/OY309PTkxtvvDGllEGvMVKuuuqqJMlLL72Uk046KV/5ylfyzDPPZNOmTXn88cdz8cUX5/LLL3/Fv8lQ/mYAAAAAAABIBF8AAIyQcePG9Y43bty4w/kvvPBCkmT33Xcf1D4vvPBCZs2alVprLrzwwhx66KGDO+gIO+2003L11VenlJLnnnsuF1xwQd70pjdlzJgxmTJlSubOnZtx48bli1/8Yu81EydOHMUTAwAAAAAA0DLBFwAAI6JvxDSQxzSuXbs2ycAe/9jXVVddlcceeywHHHBArrzyykFd2y2f//zns2jRosyYMeMV4dtuu+2W0047LY888kimTJnS+/2kSZNG45gAAAAAAAC8DvSM9gEAAHh9GDduXPbee++sXLkyTz31VL9zV61a1Rt8HXDAAYPa59prr02SfOADH8j3v//9bc7ZuvbatWtz5513Jkn22WefHH/88YPaazCOPvroHH300dm4cWOefvrpvPjii3nzm9/c++jKu+++u3fuO97xjq6dAwAAAAAAgNc3wRcAACNm6tSpeeCBB7J8+fJs3rw5PT3b/u/mo48++oprBmPr4yJvvfXW3Hrrrf3OXblyZT72sY8lSY455piuBl9bjRkzJgceeOCrvl+8eHHv+L3vfW/XzwEAAAAAAMDrk0c6AgAwYt7//vcn2XJnraVLl2533n333dc7nj59etfPNdr+9Kc/5cc//nGS5Mgjjxz0Xc0AAAAAAABgK8EXAAAj5sMf/nDveHt333rppZdy++23J0n23HPPHHfccYPao9a6w9fWO2wdeOCBvd8tWrRoaH/UCLjyyiuzadOmJMlnPvOZUTsHAAAAAAAA7RN8AQAwYo444ogcddRRSZJbbrklS5YsedWc6667LsuWLUuSXHjhhdltt91e8fuiRYtSSkkpJTNnzuz6mYdr06ZNeeaZZ7b7+4033pivfvWrSZKjjjoq55xzzs46GgAAAAAAAK9DPaN9AAAAXl/mzZuX6dOnZ/369fngBz+Y2bNn57jjjsv69etz55135qabbkqSTJkyJZdccsmonnX58uVZvHjxK75bs2ZN7/ttt932it8+9KEPZb/99nvFd6tXr84BBxyQU089NaeeemoOPvjgJMnjjz+eO+64Iz/84Q+TbLnb2B133JFSSpf+GgAAAAAAAP41EHwBADCiDjvssHznO9/Jxz/+8Tz33HOZPXv2q+ZMmTIl8+fPz8SJE0fhhC9bvHhxzj333G3+9uc///lVv917772vCr6SZPPmzbn77rtz9913b3OtadOm5dvf/nbvoyYBAAAAAABgqARfAACMuFNOOSW/+tWvMm/evMyfPz9PPfVUxowZk8mTJ+eMM87IBRdckD322GO0jzki9txzz9x8882555578otf/CLP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+AIAAAAAAAAAAGiE4AsAAAAAAAAAAKARgi8AAAAAAAAAAIBGCL4AAAAAAAAAAAAaIfgCAAAAAAAAAABohOALAAAAAAAAAACgEYIvAAAAAAAAAACARgi+AAAAAAAAAAAAGiH4AgAAAAAAAAAAaITgCwAAAAAAAAAAoBGCLwAAAAAAAAAAgEYIvgAAAAAAAAAAABoh+AIAAAAAAAAAAGiE4AsAAAAAAAAAAKARgi8AAAAAAAAAAIBGCL4AAAAAAAAAAAAaIfgCAAAAAAAAAABohOALAAAAAAAAAACgEYIvAAAAAAAAAACARgi+AAAAAAAAAAAAGiH4AgAAAAAAAAAAaITgCwAAAAAAAAAAoBGCLwAAAAAAAAAAgEYIvgAAAAAAAAAAABoh+AIAAAAAAAAAAGiE4AsAAAAAAAAAAKARgi8AAAAAAAAAAIBGCL4AAAAAAAAAAAAaIfgCAAAAAAAAAABohOALAAAAAAAAAACgEYIvAAAAAAAAAACARgi+AAAAAAAAAAAAGiH4AgAAAAAAAAAAaITgCwAAAAAAAAAAoBGCLwAAAAAAAAAAgEYIvgAAAAAAAAAAABoh+AIAAAAAAAAAAGiE4AsAAAAAAAAAAKARgi8AAAAAAAAAAIBGCL4AAAAAAAAAAAAaIfgCAAAAAAAAAABohOALAAAAAAAAAACgEYIvAAAAAAAAAACARgi+AAAAAAAAAAAAGiH4AgAAAAAAAAAAaITgCwAAAAAAAAAAoBGCLwAAAAAAAAAAgEYIvgAAAAAAAAAAABoh+AIAAAAAAAAAAGiE4AsAAAAAAAAAAKARgi8AAAAAAAAAAIBGCL4AAAAAAAAAAAAaIfgCAAAAAAAAAABohOALAAAAAAAAAACgEYIvAAAAAAAAAACARgi+AAAAAAAAAAAAGiH4AgAAAAAAAAAAaITgCwAAAAAAAAAAoBGCLwAAAAAAAAAAgEYIvgAAAAAAAAAAABoh+AIAAAAAAAAAAGiE4AsAAAAAAAAAAKARgi8AAAAAAAAAAIBGCL4AAAAAAAAAAAAaIfgCAAAAAAAAAABohOALAAAAAAAAAACgEYIvAAAAAAAAAACARgi+AAAAAAAAAAAAGiH4AgAAAAAAAAAAaITgCwAAAAAAAAAAoBGCLwAAAAAAAAAAgEYIvgAAAAAAAAAAABoh+AIAAAAAAAAAAGiE4AsAAAAA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
    "
    >
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>GEMSEC's NMI score is alarmingly low, at 0.42; given that we're running it with suboptimal parameters for speed's sake, it's possible that it doesn't get the chance to full converge. Greedy Modularity and SCD are fully deterministic in their present implementations.</p>
    
    </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h2 id='improving-label-prop'>V. Attempting to improve Label Propagation</h2><p>To what extent can we tune these algorithms without completely reimplementing them?</p>
    <p>Greedy Modularity has no parameters, and SCD and GEMSEC are too slow to be readily tuneable. Label Propagation, on the other hand, is fast enough for rapid experimentation. Let's see what we can do.</p>
    <p>We can see above that stochasticity is a moderate concern with Label Propagation; in other words, the results are somewhat unstable across runs, with an NMI of 0.8. Thus, one run might return slightly better modularity than another. Let's put this aside for the moment, though, and focus on a couple other areas.</p>
    <h3 id='iterations'>1. Number of iterations</h3><p>Label Prop has only one parameter, <code>iterations</code>. Smaller values will return fewer communities, because the algorithm has not yet had sufficient time to merge sets of neighboring communities together. On a small, dense network, labels will snowball through the entire network almost immediately. On a larger and sparser network, converging to a stable partition will take require more iterations.</p>
    <p>On the Facebook dataset, Label Prop achieves a modularity of 0.42, which is about 17 percentage points short of Louvain's high-water mark.</p>
    <p>Let's see if we can improve on that:</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[36]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">labelprop</span> <span class="o">=</span> <span class="n">models</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span>
    <span class="n">nw</span> <span class="o">=</span> <span class="n">networks</span><span class="p">[</span><span class="s1">&#39;fb&#39;</span><span class="p">]</span>
    <span class="n">_iter</span> <span class="o">=</span> <span class="p">[</span><span class="mi">100</span><span class="p">,</span> <span class="mi">200</span><span class="p">,</span> <span class="mi">500</span><span class="p">,</span> <span class="mi">1000</span><span class="p">,</span> <span class="mi">2000</span><span class="p">]</span>
    <span class="n">ncomm</span> <span class="o">=</span> <span class="p">[]</span>
    <span class="n">mod</span> <span class="o">=</span> <span class="p">[]</span>
    <span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="nb">range</span><span class="p">(</span><span class="nb">len</span><span class="p">(</span><span class="n">_iter</span><span class="p">)):</span>
        <span class="n">new_dict</span> <span class="o">=</span> <span class="p">{</span><span class="s1">&#39;iterations&#39;</span><span class="p">:</span> <span class="n">_iter</span><span class="p">[</span><span class="n">i</span><span class="p">]}</span>
        <span class="n">labelprop</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span><span class="o">.</span><span class="n">update</span><span class="p">(</span><span class="n">new_dict</span><span class="p">)</span> <span class="c1"># Add new param value</span>
        <span class="n">metrics</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="n">do_comm_detection</span><span class="p">(</span><span class="n">labelprop</span><span class="p">,</span> <span class="n">nw</span><span class="p">)</span>
        <span class="n">ncomm</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">metrics</span><span class="p">[</span><span class="s1">&#39;n_communities&#39;</span><span class="p">])</span>
        <span class="n">mod</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">metrics</span><span class="p">[</span><span class="s1">&#39;modularity&#39;</span><span class="p">])</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[45]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">({</span><span class="s1">&#39;Num. Iterations&#39;</span><span class="p">:</span> <span class="n">_iter</span><span class="p">,</span> <span class="s1">&#39;Modularity&#39;</span><span class="p">:</span> <span class="n">mod</span><span class="p">,</span> <span class="s1">&#39;Num. Communities&#39;</span><span class="p">:</span> <span class="n">ncomm</span><span class="p">})</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    <div class="jp-Cell-outputWrapper">
    
    
    <div class="jp-OutputArea jp-Cell-outputArea">
    
    <div class="jp-OutputArea-child">
    
        
        <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[45]:</div>
    
    
    
    <div class="jp-RenderedHTMLCommon jp-RenderedHTML jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/html">
    <div>
    <style scoped>
        .dataframe tbody tr th:only-of-type {
            vertical-align: middle;
        }
    
        .dataframe tbody tr th {
            vertical-align: top;
        }
    
        .dataframe thead th {
            text-align: right;
        }
    </style>
    <table border="1" class="dataframe">
      <thead>
        <tr style="text-align: right;">
          <th></th>
          <th>Num. Iterations</th>
          <th>Modularity</th>
          <th>Num. Communities</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>0</th>
          <td>100</td>
          <td>0.426818</td>
          <td>616</td>
        </tr>
        <tr>
          <th>1</th>
          <td>200</td>
          <td>0.426674</td>
          <td>608</td>
        </tr>
        <tr>
          <th>2</th>
          <td>500</td>
          <td>0.426922</td>
          <td>608</td>
        </tr>
        <tr>
          <th>3</th>
          <td>1000</td>
          <td>0.426819</td>
          <td>608</td>
        </tr>
        <tr>
          <th>4</th>
          <td>2000</td>
          <td>0.426904</td>
          <td>607</td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>Looks like that didn't work: Despite varying the number of iterations, Label Propagation is stuck with a modularity around 0.43 and a number of communities slightly above 600 (Louvain finds 50 communities with modularity of 0.59). Possibly with many more iterations, Label Propagation might converge closer to Louvain's partition, but this comes at the cost of considerably slower runtime.</p>
    
    </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h3 id='weighted-label-prop'>2. Weighted Label Propagation</h3><p>Edge weights qualify the importance of an edge, which gives us more fine-tuned information about the graph's structure. Louvain takes edge weight into account, but Label Propagation doesn't. Fortunately it's easy enough to alter karateclub's implementation so that it does.</p>
    <p>Then we can run it on the airports network, which has weighted edges, to see if there's an improvement:</p>
    
    </div>
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="k">class</span> <span class="nc">WeightedLabelPropagation</span><span class="p">(</span><span class="n">LabelPropagation</span><span class="p">):</span>
        
        <span class="k">def</span> <span class="nf">_make_a_pick</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">neighbors_w_weights</span><span class="p">):</span>
            <span class="n">scores</span> <span class="o">=</span> <span class="p">{}</span>
            <span class="k">for</span> <span class="n">nw</span> <span class="ow">in</span> <span class="n">neighbors_w_weights</span><span class="p">:</span>
                <span class="n">neighbor</span><span class="p">,</span> <span class="n">weight</span> <span class="o">=</span> <span class="n">nw</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span> <span class="n">nw</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span>
                <span class="n">neighbor_label</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">_labels</span><span class="p">[</span><span class="n">neighbor</span><span class="p">]</span>
                <span class="k">if</span> <span class="n">neighbor_label</span> <span class="ow">in</span> <span class="n">scores</span><span class="o">.</span><span class="n">keys</span><span class="p">():</span>
                    <span class="n">scores</span><span class="p">[</span><span class="n">neighbor_label</span><span class="p">]</span> <span class="o">=</span> <span class="n">scores</span><span class="p">[</span><span class="n">neighbor_label</span><span class="p">]</span> <span class="o">+</span> <span class="n">weight</span>
                <span class="k">else</span><span class="p">:</span>
                    <span class="n">scores</span><span class="p">[</span><span class="n">neighbor_label</span><span class="p">]</span> <span class="o">=</span> <span class="n">weight</span>
            <span class="n">top</span> <span class="o">=</span> <span class="p">[</span><span class="n">key</span> <span class="k">for</span> <span class="n">key</span><span class="p">,</span> <span class="n">val</span> <span class="ow">in</span> <span class="n">scores</span><span class="o">.</span><span class="n">items</span><span class="p">()</span> <span class="k">if</span> <span class="n">val</span> <span class="o">==</span> <span class="nb">max</span><span class="p">(</span><span class="n">scores</span><span class="o">.</span><span class="n">values</span><span class="p">())]</span>
            <span class="k">return</span> <span class="n">sample</span><span class="p">(</span><span class="n">top</span><span class="p">,</span> <span class="mi">1</span><span class="p">)[</span><span class="mi">0</span><span class="p">]</span>
                    
        <span class="k">def</span> <span class="nf">_do_a_propagation</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>
            <span class="n">shuffle</span><span class="p">(</span><span class="bp">self</span><span class="o">.</span><span class="n">_nodes</span><span class="p">)</span>
            <span class="n">new_labels</span> <span class="o">=</span> <span class="p">{}</span>
            <span class="k">for</span> <span class="n">node</span> <span class="ow">in</span> <span class="bp">self</span><span class="o">.</span><span class="n">_nodes</span><span class="p">:</span>
                <span class="n">neighbors_w_weights</span> <span class="o">=</span> <span class="p">[(</span><span class="n">neb</span><span class="p">,</span> <span class="bp">self</span><span class="o">.</span><span class="n">_graph</span><span class="o">.</span><span class="n">edges</span><span class="p">[(</span><span class="n">node</span><span class="p">,</span> <span class="n">neb</span><span class="p">)]</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="s1">&#39;weight&#39;</span><span class="p">,</span> <span class="mi">1</span><span class="p">))</span>
                             <span class="k">for</span> <span class="n">neb</span> <span class="ow">in</span> <span class="n">nx</span><span class="o">.</span><span class="n">neighbors</span><span class="p">(</span><span class="bp">self</span><span class="o">.</span><span class="n">_graph</span><span class="p">,</span> <span class="n">node</span><span class="p">)]</span>
                <span class="n">new_labels</span><span class="p">[</span><span class="n">node</span><span class="p">]</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">_make_a_pick</span><span class="p">(</span><span class="n">neighbors_w_weights</span><span class="p">)</span>
            <span class="bp">self</span><span class="o">.</span><span class="n">_labels</span> <span class="o">=</span> <span class="n">new_labels</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
    <div class="jp-Cell-inputWrapper">
    <div class="jp-InputArea jp-Cell-inputArea">
    <div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
    <div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
         <div class="CodeMirror cm-s-jupyter">
    <div class=" highlight hl-ipython3"><pre><span></span><span class="n">model</span> <span class="o">=</span> <span class="p">(</span><span class="s1">&#39;WeightedLabelPropagation&#39;</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;iterations&#39;</span><span class="p">:</span> <span class="mi">250</span><span class="p">})</span>
    <span class="n">nw</span> <span class="o">=</span> <span class="n">networks</span><span class="p">[</span><span class="s1">&#39;airports&#39;</span><span class="p">]</span>
    <span class="n">results</span><span class="p">,</span> <span class="n">_</span> <span class="o">=</span> <span class="n">do_comm_detection</span><span class="p">(</span><span class="n">model</span><span class="p">,</span> <span class="n">nw</span><span class="p">)</span>
    <span class="n">results</span><span class="p">[</span><span class="s1">&#39;network_name&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;airports&#39;</span>
    
    <span class="n">comparison_row</span> <span class="o">=</span> <span class="n">df</span><span class="p">[(</span><span class="n">df</span><span class="p">[</span><span class="s1">&#39;network_name&#39;</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;airports&#39;</span><span class="p">)</span> <span class="o">&amp;</span> 
                        <span class="p">(</span><span class="n">df</span><span class="p">[</span><span class="s1">&#39;model_name&#39;</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;LabelPropagation&#39;</span><span class="p">)]</span>
    
    <span class="n">pd</span><span class="o">.</span><span class="n">concat</span><span class="p">([</span><span class="n">comparison_row</span><span class="p">,</span> <span class="n">pd</span><span class="o">.</span><span class="n">DataFrame</span><span class="p">(</span><span class="n">results</span><span class="p">,</span> <span class="n">index</span><span class="o">=</span><span class="p">[</span><span class="mi">0</span><span class="p">])])</span>
    </pre></div>
    
         </div>
    </div>
    </div>
    </div>
    
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>Well...that's disappointing. Weighting Label Propagation did not improve its results at all, but it did slow the model down considerably. For now, it appears that Label Propagation is not a readily improveable algorithm.</p>
    
    </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <h2 id='comparison-summary'>VI. Comparison Summary</h2><h4 id="Consensus:-Nothing-as-good-as-Louvain-yet">Consensus: Nothing as good as Louvain yet<a class="anchor-link" href="#Consensus:-Nothing-as-good-as-Louvain-yet">&#182;</a></h4><p>The Louvain method is justifiably popular: It's fast, requires little or no tuning, and returns partitions of high modularity. None of the alternatives surveyed here can match it in any of these areas, let alone in all three (excluding EdMot for the moment, because in its current implementation appears to be identical to Louvain).</p>
    <p>Here's a rough marketing-inspired version of the results:</p>
    <table style="float: left; width: 70%; font-size: 14px;">
      <tr style="text-align: center;">
        <th style="text-align: left;">Algorithm</th>
        <th style="text-align: center;">Fast?</th>
        <th style="text-align: center;">Easy to tune?</th>
        <th style="text-align: center;">High modularity?</th>
      </tr>
      <tr>
        <td style="text-align: left;">GEMSEC</td>
        <td style="color: red; font-size: 20px; text-align: center;">X</td>
        <td style="color: red; font-size: 20px; text-align: center;">X</td>
        <td style="color: #FFCC00; font-size: 80px; text-align: center; padding: 0px; margin: 0px;">&#183;</td>
      </tr>
      <tr>
        <td style="text-align: left;">Greedy Modularity</td>
        <td style="color: red; font-size: 20px; text-align: center;">X</td>
        <td style="color: green;  font-size: 20px; text-align: center;">&#10004;</td>
        <td style="color: #FFCC00; font-size: 80px; text-align: center; padding: 0px; margin: 0px;">&#183;</td>
      </tr>
      <tr>
        <td style="text-align: left;">Label Propagation</td>
        <td style="color: #FFCC00; font-size: 80px; text-align: center; padding: 0px; margin: 0px;">&#183;</td>
        <td style="color: #FFCC00; font-size: 80px; text-align: center; padding: 0px; margin: 0px;">&#183;</td>
        <td style="color: #FFCC00; font-size: 80px; text-align: center; padding: 0px; margin: 0px;">&#183;</td>
      </tr>
      <tr>
        <td style="text-align: left;">Louvain</td>
        <td style="color: green;  font-size: 20px; text-align: center;">&#10004;</td>
        <td style="color: green;  font-size: 20px; text-align: center;">&#10004;</td>
        <td style="color: green;  font-size: 20px; text-align: center;">&#10004;</td>
      </tr>
      <tr>
        <td style="text-align: left;">SCD</td>
        <td style="color: red; font-size: 20px; text-align: center;">X</td>
        <td style="color: red; font-size: 20px; text-align: center;">X</td>
         <td style="color: #FFCC00; font-size: 80px; text-align: center; padding: 0px; margin: 0px;">&#183;</td>
      </tr>
    </table>
    </div>
    </div>
    <div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
    </div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
    <p>One reasonable criticism of this analysis is that the more complex algorithms, particularly SCD and GEMSEC, weren't given a fair shake. This is true, but their slowness makes it inconvenient to tune their parameters on any medium-to-large network. Running them on a machine larger than a laptop would be a welcome change.</p>
    <p>Karateclub is a recently developed package, so it's likely that its offering of algorithms will expand and improve over time. It's exciting to see more community detection models in Python, and it's possible that some of them work well in contexts that I haven't tested here.</p>
    <p>Finally, the fact that the Louvain model takes account of weighted edges gives it a significant advantage on weighted networks. It should be possible to implement weighted versions of all of these algorithms, which could be helpful in some applications.</p>
    
    </div>
    </div>
    </div>
    </body>

    </html>

    `
    }
}

const Notebook = () => {
  return (
   <div className={postStyles['post']}>
        <div className={styles['container']}>
            <div className={styles['left']}>
                <Link className={postStyles['post__home-button']} to="/projects">Home</Link>
            </div>
            <div className={styles['right']}>
                <p><em>You can see the original Jupyter notebook for this post on Github <a href='https://gist.github.com/Macrane22/eeca8d23e1e6951f5d289ca0ef1890ae'>here.</a></em></p>
            </div>
            <div className={styles['left']}>
            </div>
        </div>
        <div dangerouslySetInnerHTML={createMarkup()}/>
    </div>
  );
};

export default Notebook;
