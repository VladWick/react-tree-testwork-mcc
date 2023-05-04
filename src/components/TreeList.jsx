import { useState, useEffect } from "react";

import defaultData from "../utils/data/defaultData";
import fileSystemData from "../utils/data/fileSystemData";
import largeData from "../utils/data/largeData";

import { isTreeEmpty } from "../utils/functions";

import Tree from './Tree';

const TreeList = () => {
    const [tree, setTree] = useState([...defaultData]);

    useEffect(() => {
        setTree(tree)
    }, [tree]);

    function defaultTree() {
        setTree([...defaultData])
    }

    function fileSystemTree() {
        setTree([...fileSystemData])
    }

    function largeTree() {
        setTree([...largeData])
    }

    function addRootNode() {
        const newRootNodeLabel = prompt("Enter the new root node name: ");
        if (newRootNodeLabel === "") {
            alert("Your input is empty!")
        } else if (newRootNodeLabel) {
            const newRandomKey = (Math.random()*256|0).toString();
            const newRootNode = {
                key: newRandomKey,
                label: newRootNodeLabel,
                isChild: false,
                parentKey: "root",
                children: []
            };
            tree.push(newRootNode)
            setTree(tree.slice(0, tree.length)) // refresh tree right after adding root node
        }
    }

    function resetTree() {
        setTree(tree.slice(0, 0));
    }

    return (
      <>
        <div className="tree">
            <div className="fill-buttons">
                <button className="button" onClick={() => defaultTree()}>Default</button>
                <button className="button" onClick={() => fileSystemTree()}>FileSystem</button>
                <button className="button" onClick={() => largeTree()}>Large</button>
            </div>
            <ul className="tree-nodes-container">
                { isTreeEmpty(tree) ? <h2 className="empty-tree-message">Tree is empty</h2> :
                    <Tree key={tree} data={tree}/>
                }
            </ul>
            <div className="method-buttons">
                <button className="button" onClick={() => resetTree()}>Reset</button>
                <button className="button" onClick={() => addRootNode()}>Add root node</button>
            </div>
        </div>
      </>
    );
};

export default TreeList;