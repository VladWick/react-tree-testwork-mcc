export function isTreeEmpty(tree) {
    if(tree) {
        for(let i = 0; i < tree.length; ++i) {
            if(tree[i]) {
                return false; // at least one of the elements is not null
            }
        }
        return true; // all elements in tree is 'null'
    } 
    return true; // tree is undefined
}

export function hasChildren(children) {
    if(children) {
        if(children.length !== 0) {
            return true;
        }
        return false;
    }
    return false;
}