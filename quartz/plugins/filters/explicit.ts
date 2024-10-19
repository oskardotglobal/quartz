import { QuartzFilterPlugin } from "../types"

export const ExplicitPublish: QuartzFilterPlugin = () => ({
  name: "ExplicitPublish",
  shouldPublish(_ctx, [_tree, vfile]) {
    const path = `/${vfile.data?.slug?.split("/").at(0)}`
    return (path !== "/Blog" && path !== "/") || vfile.data?.frontmatter?.publish === "true"
  },
})
