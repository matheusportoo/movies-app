import Container from '@/shared/components/Container'
import StatusCode from '@/shared/components/StatusCode'

const NotFoundPage = () => {
  return (
    <Container>
      <StatusCode code="404" title="Ops!" message="this page not found" />
    </Container>
  )
}

export default NotFoundPage
