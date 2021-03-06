import * as t from "babel-types";
import { Path } from "./path";

export enum ScopeType {
  Root,
  Function, // isolated scope
  Method, // isolated scope
  Constructor, // isolated scope
  For,
  ForChild,
  ForIn,
  ForOf,
  While,
  DoWhile,
  Do,
  Switch,
  If,
  ElseIf,
  Object,
  Try,
  Catch,
  Finally,
  Class,
  Block
}

export const isolatedScopeMap = {
  [ScopeType.Function]: true,
  [ScopeType.Constructor]: true,
  [ScopeType.Method]: true,
  [ScopeType.Object]: true
};

export enum Kind {
  Var = "var",
  Const = "const",
  Let = "let"
}

export type KindType = "var" | "const" | "let";

export interface INodeTypeMap {
  File: t.File;
  Program: t.Program;
  Identifier: t.Identifier;
  NullLiteral: t.NullLiteral;
  StringLiteral: t.StringLiteral;
  NumericLiteral: t.NumericLiteral;
  BooleanLiteral: t.BooleanLiteral;
  RegExpLiteral: t.RegExpLiteral;
  FunctionDeclaration: t.FunctionDeclaration;
  FunctionExpression: t.FunctionExpression;
  ArrowFunctionExpression: t.ArrowFunctionExpression;
  SwitchCase: t.SwitchCase;
  CatchClause: t.CatchClause;
  VariableDeclarator: t.VariableDeclarator;
  ExpressionStatement: t.ExpressionStatement;
  BlockStatement: t.BlockStatement;
  EmptyStatement: t.EmptyStatement;
  DebuggerStatement: t.DebuggerStatement;
  // WithStatement: t.WithStatement; // babylon parse in strict mode and disable WithStatement
  ReturnStatement: t.ReturnStatement;
  LabeledStatement: t.LabeledStatement;
  BreakStatement: t.BreakStatement;
  ContinueStatement: t.ContinueStatement;
  IfStatement: t.IfStatement;
  SwitchStatement: t.SwitchStatement;
  ThrowStatement: t.ThrowStatement;
  TryStatement: t.TryStatement;
  WhileStatement: t.WhileStatement;
  DoWhileStatement: t.DoWhileStatement;
  ForStatement: t.ForStatement;
  ForInStatement: t.ForInStatement;
  ForOfStatement: t.ForOfStatement;
  VariableDeclaration: t.VariableDeclaration;
  ClassDeclaration: t.ClassDeclaration;
  ThisExpression: t.ThisExpression;
  ArrayExpression: t.ArrayExpression;
  ObjectExpression: t.ObjectExpression;
  ObjectProperty: t.ObjectProperty;
  ObjectMethod: t.ObjectMethod;
  YieldExpression: t.YieldExpression;
  UnaryExpression: t.UnaryExpression;
  UpdateExpression: t.UpdateExpression;
  BinaryExpression: t.BinaryExpression;
  AssignmentExpression: t.AssignmentExpression;
  LogicalExpression: t.LogicalExpression;
  MemberExpression: t.MemberExpression;
  ConditionalExpression: t.ConditionalExpression;
  CallExpression: t.CallExpression;
  NewExpression: t.NewExpression;
  SequenceExpression: t.SequenceExpression;
  TemplateLiteral: t.TemplateLiteral;
  TaggedTemplateExpression: t.TaggedTemplateExpression;
  ClassExpression: t.ClassExpression;
  ClassMethod: t.ClassMethod;
  MetaProperty: t.MetaProperty;
  AwaitExpression: t.AwaitExpression;
  Super: t.Super;
  TemplateElement: t.TemplateElement;
  SpreadElement: t.SpreadElement;
  // ObjectPattern: t.ObjectPattern;
  // ArrayPattern: t.ArrayPattern;
  RestElement: t.RestElement;
  AssignmentPattern: t.AssignmentPattern;
  ClassBody: t.ClassBody;
  ImportDeclaration: t.ImportDeclaration;
  ExportNamedDeclaration: t.ExportNamedDeclaration;
  ExportDefaultDeclaration: t.ExportDefaultDeclaration;
  // ExportAllDeclaration: t.ExportAllDeclaration;
  ImportSpecifier: t.ImportSpecifier;
  ImportDefaultSpecifier: t.ImportDefaultSpecifier;
  // ImportNamespaceSpecifier: t.ImportNamespaceSpecifier;
  ExportSpecifier: t.ExportSpecifier;
  SpreadProperty: t.SpreadProperty;
  DoExpression: t.DoExpression;
  Decorator: t.Decorator;
}

export interface ITrackerTypeMap {
  Identifier: t.Identifier;
  NullLiteral: t.NullLiteral;
  StringLiteral: t.StringLiteral;
  NumericLiteral: t.NumericLiteral;
  BooleanLiteral: t.BooleanLiteral;
  RegExpLiteral: t.RegExpLiteral;
  MemberExpression: t.MemberExpression;
}

export type EvaluateMap = {
  [key in keyof INodeTypeMap]: (path: Path<INodeTypeMap[key]>) => any
};

export type TrackerMap = {
  [key in keyof ITrackerTypeMap]: (
    path: ITrackerTypeMap[key],
    name: string[]
  ) => any
};

export type EvaluateFunc = (path: Path<t.Node>) => any;
