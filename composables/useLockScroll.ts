import Lenis from "lenis"

export function useLockScroll(value: boolean = true) {
  const lenis = useState<Lenis>("lenis")
  value ? lenis.value.stop() : lenis.value.start()
}
