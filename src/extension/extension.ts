import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('ReactTypeSmith activated!');

  // Command for type inference
  context.subscriptions.push(
    vscode.commands.registerCommand('reacttypesmith.inferTypes', () => {
      vscode.window.showInformationMessage('Inferring types...');
      // Add type inference logic here
    })
  );

  // Command for variable renaming
  context.subscriptions.push(
    vscode.commands.registerCommand('reacttypesmith.renameVariables', () => {
      vscode.window.showInformationMessage('Renaming variables...');
      // Add renaming logic here
    })
  );
}

export function deactivate() {}