// import { useState, useRef } from "react";

// import treeData from "../../data/treeData";

// const MethodButtons = ({ delete }) => {
 
//     const removeNode = () => {
//         console.log(keyOfSelectedElement.current);
//         delete tree[keyOfSelectedElement.current];

//         const newTree = tree.slice();
//         setTree(newTree);

//         console.log("New tree: " + newTree);
//         console.log("Node key to delete: " + keyOfSelectedElement);
//     };

//     const resetTree = () => {
//         // const newTree = tree.slice(0, 0);
//         // setTree(newTree);
//     };

//     return(
//         <div className="method-buttons">
//             <button>Add</button>
//             <button onClick={() => removeNode()}>Remove</button>
//             <button>Edit</button>
//             <button onClick={() => resetTree()}>Reset</button>
//         </div>
//     )
// }

// export default MethodButtons;