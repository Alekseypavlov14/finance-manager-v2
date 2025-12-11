import { useNavigation } from '@/app/navigation'
import { Logo } from '@/shared/components/Logo'

export function HeaderLogo() {
  const { navigateHomePage } = useNavigation()

  return (
    <Logo onClick={navigateHomePage} />
  )
}
