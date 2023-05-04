import { useState, useEffect } from "react";

import {FaCaretRight, FaEdit, FaRegWindowClose, FaPlus, FaCaretDown} from "react-icons/fa" 

import Tree from './Tree';

const TreeNode = ({ node, deleteByKey }) => {
    const [childVisible, setChildVisiblity] = useState(false);

    // useEffect(() => {

    // }, []);

    const addNode = () => {
        const nodeLabel = prompt("Enter the new node: ");
        if (nodeLabel === "") {
            alert("Your input is empty!")
        } else if (nodeLabel) {
            const newNode = {
                key: {node} + "asd",
                label: nodeLabel, 
                selected: false,
                children: []
            };
            node.children.push(newNode);
        }
    };

    const editNode = () => {
        const newNodeTitle = prompt("Enter new name of the node: ");
        if (newNodeTitle === "") {
            alert("Your input is empty!")
        } else if (newNodeTitle) { 
            node.label = newNodeTitle;
        }
    };

    const deleteNode = () => {
        deleteByKey(node);
    };

    const clickNode = () => {
        setChildVisiblity((v) => !v);
    };

    return (
        <li className="tree-node">
            <div className="tree-node-head" onClick={() => clickNode()}>
                <div className="node-text">
                    <div className="caret">
                        { childVisible ? 
                            <FaCaretDown /> : 
                            <FaCaretRight />
                        }
                    </div>
                    {node.label}
                </div>
                <div className="node-icons">
                    <div className="add-icon" onClick={() => addNode()}>
                        <FaPlus/>
                    </div>
                    <div className="edit-icon" onClick={() => editNode()}>
                        <FaEdit/>
                    </div>
                    <div className="delete-icon" onClick={() => deleteNode()}>
                        <FaRegWindowClose/>
                    </div>
                </div>
            </div>
            <div className="tree-node-children">
                {node.children && childVisible && (
                    <div className="d-tree-content">
                        <ul className="tree-children-nodes-container">
                            <Tree key={node.key} data={node.children}/>
                        </ul>
                    </div>
                )}
            </div>
        </li>
    );
};

export default TreeNode;