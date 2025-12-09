import type { ComponentProps } from 'react'
import { Palette } from '../Palette'
import { clamp } from '../../utils/clamp'
import chevronIcon from './chevron-right.svg'
import styles from './Pagination.module.css'
import clsx from 'clsx'

interface PaginationProps extends Omit<ComponentProps<'div'>, 'children'> {
  totalPagesAmount: number
  currentPage: number
  onCurrentPageChange?: (currentPage: number) => void
  hideForSinglePage?: boolean
}

export function Pagination({
  totalPagesAmount,
  currentPage,
  onCurrentPageChange = () => {},
  hideForSinglePage,

  className,
  ...props
}: PaginationProps) {
  const isNavigationBackAvailable = currentPage > 0
  const isNavigationForwardAvailable = currentPage < (totalPagesAmount - 1)

  function navigateNextPage() {
    onCurrentPageChange(clamp(0, currentPage + 1, totalPagesAmount))
  }

  function navigatePreviousPage() {
    onCurrentPageChange(clamp(0, currentPage - 1, totalPagesAmount))
  }

  if (totalPagesAmount <= 0) return null
  if (hideForSinglePage && totalPagesAmount <= 1) return null

  return (
    <div 
      className={clsx(styles.Pagination, className)} 
      {...props}
    >
      <Palette 
        className={clsx(styles.Item, styles.ItemPrev, !isNavigationBackAvailable && styles.Disabled)}
        onClick={navigatePreviousPage}
      >
        <img src={chevronIcon} />
      </Palette>
      
      {new Array(totalPagesAmount).fill(0).map((_, index) => (
        <Palette 
          className={clsx(styles.Item, (index === currentPage) && styles.Active)}
          onClick={() => onCurrentPageChange(index)}
          key={index}
        >
          {index + 1}
        </Palette>
      ))}

      <Palette 
        className={clsx(styles.Item, styles.ItemNext, !isNavigationForwardAvailable && styles.Disabled)}
        onClick={navigateNextPage}
      >
        <img src={chevronIcon} />
      </Palette>
    </div>
  )
}
