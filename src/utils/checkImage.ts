export const checkImage = (url: string) => {
    if (url.includes('placehold.co')) {
      return false
    }
    try {
      new URL(url)
      return true
    } catch (_) {
      return false
    }
  }