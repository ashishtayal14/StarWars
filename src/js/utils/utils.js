import _ from 'lodash'

export const getVisiblePlanets = (planets, param) => planets.filter((planets, index) => (planets.name.toLowerCase().includes(param)))
export const clearSearchHits = () => {
    return 0;
}