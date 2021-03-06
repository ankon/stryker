import * as types from '@babel/types';

import { NodeGenerator } from '../helpers/NodeGenerator';

import { NodeMutator } from './NodeMutator';

/**
 * Represents a mutator which can remove the conditional clause from statements.
 */
export default class WhileStatementMutator implements NodeMutator {
  public name = 'WhileStatement';

  public mutate(node: types.Node): types.Node[] {
    if (types.isWhileStatement(node)) {
      return [NodeGenerator.createBooleanLiteralNode(node.test, false)];
    }

    return [];
  }
}
