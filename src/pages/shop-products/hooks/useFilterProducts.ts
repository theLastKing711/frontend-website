import { useMemo } from "react";
import { useSearchParams } from "react-router-dom"

export const useFilterProducts = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const perPageFilter = searchParams.get('perPage') || "";

    const sortFilter = searchParams.get('sort') || "";

    const ratingFilter = searchParams.get('rating') || "";

    const pricesFilter = searchParams.get('prices') || "";

    const searchFilter = searchParams.get('search') || "";

    const categoriesFilter = useMemo(() => {
        return searchParams.getAll('categoryIds')
    }, [searchParams.getAll('categoryIds').length]) 

    console.log('categories filter', categoriesFilter)

    console.log("categoriesFilter", categoriesFilter);
    

    const toggleCategoryFilterItem = (categoryId: string) => {
        setSearchParams(prev => {

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

        setSearchParams(prev => {
            
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

        setSearchParams(prev => {
            
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
        setSearchParams(prev => {

            const ratingFilter = prev.get('rating');
            
            if ( !ratingFilter || (ratingFilter &&  starsNumber !== ratingFilter)) {
                prev.set('rating', starsNumber);
            }
            else {
                prev.delete('rating')
            }
            
            return prev;
            
        })
        
    }

    const togglePriceFilterItem = (prices: string) => {

        setSearchParams(prev => {

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
        
        setSearchParams(prev => {
            
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

