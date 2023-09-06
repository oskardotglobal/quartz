import { QuartzFilterPlugin } from "../types"

export const ExplicitPublish: QuartzFilterPlugin = () => ({
  name: "ExplicitPublish",
  shouldPublish(_ctx, [_tree, vfile]) {
    if (!(vfile.dirname === "Pandora's Box/Projekte" || vfile.dirname === "Pandora's Box/Blog")) return true;
    
    const publishFlag: boolean = vfile.data?.frontmatter?.publish ?? false
    return publishFlag 
  },
})
