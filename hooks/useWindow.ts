import { useState, useEffect } from "react"

export const useWindow = () => {
  const [_window, setWindow] = useState<Window | null>(null)

  useEffect(() => {
    setWindow(window)
  }, [])

  return _window
}
