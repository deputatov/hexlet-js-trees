const dfs = (tree) => {
    const { name, type, children } = tree;
    if (type === 'file') {
        tree.name = name.toLowerCase();
    }
    if (!children) return;
    return children.map(dfs);
};

export default (tree) => {
    const clone = JSON.parse(JSON.stringify(tree));
    dfs(clone);
    return clone;
};

// Teacher's solution
// const downcaseFileNames = (node) => {
//     if (node.type === 'directory') {
//         return {...node, children: node.children.map(downcaseFileNames)
//         };
//     }
//     return {...node, name: node.name.toLowerCase()
//     };
// };

// export default downcaseFileNames;