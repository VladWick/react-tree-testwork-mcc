import { useState, useEffect } from "react";

import TreeNode from './TreeNode';

import { isTreeEmpty } from "../utils/functions";

const Tree = ({ data = [] }) => {
    const [tree, setTree] = useState([]);

    useEffect(() => {
        setTree(data);
    }, [tree])

    const deleteNode = (element) => {
        // Iterate through children of current node to delete selected node
        for(let i = 0; i < tree.length; ++i) {
            if(tree[i]) {
                if(tree[i].key === element.key) {
                    delete tree[i];
                    break;
                }
            }
        }
        setTree()
    };

    return (
      <>
        <div className="tree-container">
            <ul className="tree-nodes">
                { !tree || isTreeEmpty(tree) ? <></> :
                    tree.map((node) => (
                        <TreeNode key={node.key} node={node} deleteByKey={deleteNode} />
                    ))
                }
            </ul>
        </div>
      </>
    );
};

export default Tree;