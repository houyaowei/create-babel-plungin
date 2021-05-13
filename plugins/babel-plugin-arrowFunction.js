module.exports = ({types: t}) => {
  return {
    visitor: {
      ArrowFunctionExpression(path, state){
        //当前节点
        const node = path.node;
        //判断是否是箭头函数
        if (t.isArrowFunctionExpression(node)) {
          //取出要返回的内容
          const body = path.get("body");
          const bodyNode = body.node;
          // 构造blockStatement
          if (bodyNode.type !== 'BlockStatement') {
              const statements = [];
              statements.push(t.returnStatement(bodyNode));
              node.body = t.blockStatement(statements);
          }
          node.type = "FunctionExpression";
        }
      }
    }
  }
}