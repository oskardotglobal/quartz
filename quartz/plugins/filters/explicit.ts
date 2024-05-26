import { QuartzFilterPlugin } from "../types"

export const ExplicitPublish: QuartzFilterPlugin = () => ({
  name: "ExplicitPublish",
  shouldPublish(_ctx, [_tree, vfile]) {
    if (vfile.dirname?.split("/").at(1) !== "Blog") return true

    return vfile.data?.frontmatter?.publish ?? false
  },
})
