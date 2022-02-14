import '@logseq/libs';


const main = async () => {
  // console.log('plugin loaded');
  logseq.Editor.registerBlockContextMenuItem('capitalize blocks', async (e) => {
    const block = await logseq.Editor.getBlock(e.uuid)
    logseq.Editor.updateBlock(block.uuid, block.content.toUpperCase())
  })
  logseq.Editor.registerBlockContextMenuItem('make block lowercase', async (e) => {
    const block = await logseq.Editor.getBlock(e.uuid)
    logseq.Editor.updateBlock(block.uuid, block.content.toLowerCase())
  }
  )}

logseq.ready(main).catch(console.error);

logseq.Editor.getblock