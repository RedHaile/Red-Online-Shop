export const cleanImage = (url: string) => {
    if  (url.slice(0, 2) === '["' && url.slice(-2) === '"]') {
      url = url.slice(2, -2)
    }
    if (url.slice(0, 2) === '["' && url.slice(-1) === '"') {
      url = url.slice(2, -1)
    }
    return url
  }