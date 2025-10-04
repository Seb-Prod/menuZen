import readline from 'readline';

export async function waitForEnter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question("Appuyez sur n'importe quelle touche pour continuer...", () => {
      rl.close();
      resolve();
    });
  });
}