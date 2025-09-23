import open from 'open';
import inquirer from 'inquirer';

export async function openBrowser(port) {
  const { browser } = await inquirer.prompt([
    {
      type: 'list',
      name: 'browser',
      message: 'Choisir un navigateur :',
      choices: ['default', 'chrome', 'firefox', 'edge', 'safari']
    }
  ]);
  const url = `http://localhost:${port}`;
  await open(url, { app: browser === 'default' ? undefined : browser });
}