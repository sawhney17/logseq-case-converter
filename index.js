import '@logseq/libs'
import '@gouch/to-title-case';

function toSentenceCase(input){ //make the first letter after every period capital

  const input2 = input.charAt(0).toUpperCase() + input.slice(1);
  return input2.replace(/([.?!])\s*(\w)/g, function(all, sep, letter, offset){
      if (all.length > 2){
          return (all.replace(letter, letter.toUpperCase()))
      }
      else{
          return all
      }
  });
}
const main = async () => {
  // console.log('plugin loaded');
  logseq.Editor.registerBlockContextMenuItem('Make block Uppercase', async (e) => {
    const block = await logseq.Editor.getBlock(e.uuid)
    logseq.Editor.updateBlock(block.uuid, block.content.toUpperCase())
  })
  logseq.Editor.registerBlockContextMenuItem('Make block Lowercase', async (e) => {
    const block = await logseq.Editor.getBlock(e.uuid)
    logseq.Editor.updateBlock(block.uuid, block.content.toLowerCase())
  })
  logseq.Editor.registerBlockContextMenuItem('Make block Title Case', async (e) => {
    const block = await logseq.Editor.getBlock(e.uuid)
    logseq.Editor.updateBlock(block.uuid, block.content.toTitleCase())
  })
  logseq.Editor.registerBlockContextMenuItem('Make block Sentence case', async (e) => {
    const block = await logseq.Editor.getBlock(e.uuid)
    logseq.Editor.updateBlock(block.uuid, toSentenceCase(block.content))
  })
}
  

logseq.ready(main).catch(console.error);

logseq.Editor.getblock