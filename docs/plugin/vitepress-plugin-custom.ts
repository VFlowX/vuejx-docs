import { glob } from "glob";
export async function generateNav() {
  console.log('generateNav');
  const folder = await glob('./docs/docs/*/', {
    platform: 'linux',
    // ignore: ['*/plugin', '*/public',]
  })
  // const files = await glob('./docs/**', {
  //   platform: 'linux',
  //   ignore: ['**/*.[j|t]s', '**/*.{png,ico,gif,txt,svg}']
  // })
  console.log(folder);

  let nav: any = [{ text: 'Home', link: '/' },];
  for (const navItem of folder.reverse()) {
    nav.push({
      text: capitalizeFirstLetter(navItem.replace('docs/docs/', '')),
      link: navItem.replace('docs/', '') + '/'
    })
  }
  nav.push({ text: 'About', link: '/about' })
  return { nav }
  console.log('generateNavDone');
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function genHeader(path) {
  const files = await glob('./docs/**.md', {
    platform: 'linux',
    ignore: ['**/*.[j|t]s', '**/*.{png,ico,gif,txt,svg}']
  })
  console.log(files);
  return files
}