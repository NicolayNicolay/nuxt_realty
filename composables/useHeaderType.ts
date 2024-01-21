interface HeaderType {
  type: number | null,
}

export const useHeaderType = () => {
  return useState<HeaderType>('headerType', () => {
    return {
      type: null
    }
  })
}
