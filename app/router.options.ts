import type { RouterOptions } from "@nuxt/schema"

export default <RouterOptions>{
  scrollBehavior(_to, from) {
    if (!from.name) {
      return { top: 0 }
    }
  },
}
