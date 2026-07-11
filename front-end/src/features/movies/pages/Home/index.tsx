import Container from '@/shared/components/Container'
import ListingMoviesByCategory from '@/features/movies/components/ListingMoviesByCategory'
import { useHomeCategories } from '@/features/movies/hooks/useHomeCategories'
import * as S from './style'

const HomePage = () => {
  const { categories, isFetching } = useHomeCategories()

  return (
    <Container>
      {categories.map(({ title, items, slug }, index) => (
        <S.PageHomeListingCategories key={`movies-by-category-${index}`}>
          <ListingMoviesByCategory
            title={title}
            movies={items}
            slug={slug}
            seeMore={`/movies?modality=${slug}`}
            isFetching={isFetching}
          />
        </S.PageHomeListingCategories>
      ))}
    </Container>
  )
}

export default HomePage
