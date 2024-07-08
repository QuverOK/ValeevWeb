"use client"

import { useState } from "react"

export function useCurrentPageItems({ items, itemsPerPage = 5 }) {
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, items.length)

  const currentPageItems = items.slice(startIndex, endIndex)
  const maxPages = Math.ceil(items.length / itemsPerPage)

  return [{ currentPage, currentPageItems, maxPages }, setCurrentPage]
}
