import { QuartzFilterPlugin } from "../types"

export const ExplicitPublish: QuartzFilterPlugin = () => ({
  name: "ExplicitPublish",
  shouldPublish(_ctx, [_tree, vfile]) {
    const path = `/${vfile.data?.relativePath?.split("/").at(0)}`
    return !(path in ["/Blog", "/"]) || vfile.data?.frontmatter?.publish === true
  },
})
