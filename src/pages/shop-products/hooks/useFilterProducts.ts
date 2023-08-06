import { useSearchParams } from "react-router-dom"

const useFilterProducts = () => {

    const [searchParams, setSerchParams] = useSearchParams();

    const perPageFilter = searchParams.get('perPage');

    const ratingFilter = searchParams.get('rating');

    const pricesFilter =searchParams.get('prices');

    const searchFilter = searchParams.get('searchFilter');

    const toggleCategoryFilterItem = (categoryId: string) => {

        setSerchParams(prev => {

            const categoriesFilter = prev.get('categoryIds')
            
            if ( !categoriesFilter ) {
                prev.set('categoryIds', categoryId);
            }
            else {
                prev.append('categoryIds', categoryId)
            }

            return {...prev}
            
        })
        
    }

    const togglePerPageFilterItem = (perPage: number) => {

        setSerchParams(prev => {

            const perPageFilter = prev.get('perPage')
            
            if ( !perPageFilter ) {
                prev.set('perPage', perPage.toString());
            }
            else {
                prev.delete('perPage')
            }

            return {...prev}
            
        })
        
    }
  
    const toggleRatingFilterItem = (starsNumber: string) => {

        setSerchParams(prev => {

            const ratingFilter = prev.get('rating')
            
            if ( !ratingFilter ) {
                prev.set('rating', starsNumber);
            }
            else {
                prev.delete('rating')
            }

            return {...prev}
            
        })
        
    }

    const togglePriceFilterItem = (prices: number[]) => {

        setSerchParams(prev => {

            const pricesFilter = prev.get('prices')
            
            if ( !pricesFilter ) {

                const pricesRangeString = `${prices[0]}-${prices[1]}`;
                
                prev.set('prices', pricesRangeString);
            }
            else {
                prev.delete('prices')
            }

            return {...prev}
            
        })
        
    }

    const toggleSearchFilterItem = (search: string) => {

        setSerchParams(prev => {

            const searchFilter = prev.get('search')
            
            if(searchFilter === '') {
                prev.delete('search')
            }
            else
            if ( !searchFilter ) {
                
                prev.set('search', search);
            }
            else {
                prev.delete('search')
            }

            return {...prev}
            
        })
        
    }
    
    return {
        toggleCategoryFilterItem,
        togglePerPageFilterItem,
        togglePriceFilterItem,
        toggleRatingFilterItem,
        toggleSearchFilterItem
    }

}

