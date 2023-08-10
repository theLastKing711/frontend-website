import { useSearchParams } from "react-router-dom"

export const useFilterProducts = () => {

    const [searchParams, setSerchParams] = useSearchParams();

    const perPageFilter = searchParams.get('perPage') || "";

    const sortFilter = searchParams.get('sort') || "";

    const ratingFilter = searchParams.get('rating') || "";

    const pricesFilter = searchParams.get('prices') || "";

    const searchFilter = searchParams.get('search') || "";

    const categoriesFilter = searchParams.getAll('categoryIds');

    console.log("categoriesFilter", categoriesFilter);

    const toggleCategoryFilterItem = (categoryId: string) => {
        
        setSerchParams(prev => {

            const categoriesFilter = prev.getAll('categoryIds') || [];

            console.log('categoriesFilter', categoriesFilter);
            
            if ( !categoriesFilter ) {

                prev.set('categoryIds', categoryId);
            }
            else {
                
                
                const isItemAlreadyInList = categoriesFilter.find(id => categoryId === id);
                
                if(isItemAlreadyInList) {
                    const oldEntries = categoriesFilter.filter(x => x !==categoryId);
                    prev.delete('categoryIds')
                    oldEntries.forEach((item) => {
                        prev.append('categoryIds', item);
                    })
                }
                else {
                    prev.append('categoryIds', categoryId);
                }
            }

            return prev;
            
        });
        
    }

    const togglePerPageFilterItem = (perPage: string) => {

        setSerchParams(prev => {
            
            if ( perPage ) {
                prev.set('perPage', perPage);
            }
            else
            {
                prev.delete('perPage');
            }
            
            return prev;
            
        });
        
    }

    const toggleSortFilterItem = (sort: string) => {

        setSerchParams(prev => {
            
            if ( !sort ) {
                prev.delete('sort')
            }
            else {
                prev.set('sort', sort);
            }
            
            return prev
            
        })
        
    }
  
    const toggleRatingFilterItem = (starsNumber: string) => {

        setSerchParams(prev => {

            const ratingFilter = prev.get('rating')
            
            if ( !ratingFilter || (ratingFilter &&  starsNumber !== ratingFilter)) {
                prev.set('rating', starsNumber);
            }
            else {
                prev.delete('rating')
            }
            
            return prev
            
        })
        
    }

    const togglePriceFilterItem = (prices: string) => {

        setSerchParams(prev => {

            const pricesFilter = prev.get('prices')
            
            if ( !pricesFilter || (pricesFilter &&  prices !== pricesFilter)) {
                prev.set('prices', prices);
            }
            else {
                prev.delete('prices')
            }
            
            return prev
            
        });
        
    }

    const togglePriceTextFilterItem = (prices: string) => {
        
        
        setSerchParams(prev => {
            
            if ( prices ) {
                prev.set('prices', prices);
            }
            else
            {
                prev.delete('prices');
            }
            
            return prev;
            
        });
        
    }
    
    return {
        perPageFilter,
        sortFilter,
        pricesFilter,
        categoriesFilter,
        ratingFilter,
        searchFilter,
        toggleCategoryFilterItem,
        toggleSortFilterItem,
        togglePerPageFilterItem,
        togglePriceFilterItem,
        toggleRatingFilterItem,
        togglePriceTextFilterItem,
    }

}

