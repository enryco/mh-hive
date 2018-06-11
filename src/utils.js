import _ from 'lodash'

export const getCategoryName = pillar => {
  const categories = {
    "education-and-learning": "Category",
    "innovation": "Category",
    "policy": "Category",
    "research": "Type of research"
  }

  return _.get(categories, pillar)

}


export const getSelectCategories = (table, tableSlug) => {

  const fieldname = getCategoryName(tableSlug)

  const SelectCategories = {}

  _.map(table, row => {
    const push = category => { if (category) SelectCategories[_.capitalize(category)] = true }

    const category = _.get(row, `fields.${fieldname}`)
    if (_.isArray(category)) {
      _.map(category, categoryOfArray => push(categoryOfArray))
    } else {
      push(category)
    }
  })

  const categories = _.sortBy(_.keys(SelectCategories))

  return categories

}
