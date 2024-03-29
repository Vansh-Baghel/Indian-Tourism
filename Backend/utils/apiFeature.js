
class APIfeatures {
  constructor(apiData, queryString) {
    this.apiData = apiData;
    this.queryString = queryString;
  }
  
  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    // 1B) Advanced filtering
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    this.apiData = this.apiData.find(JSON.parse(queryStr));

    return this;
  }

  sortApi() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.apiData = this.apiData.sort(sortBy);
    } 
    return this;
  }

  limitingFields(){
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(',').join(' ');
      this.apiData = this.apiData.select(fields);
    } else {
      this.apiData = this.apiData.select('-__v');
    }

    return this;
  }
  
  pagination(){
    const page = this.queryString.page * 1 || 1;
    // Limit says the number of data in one page. Setting default as 100 datas.
    const limit = this.queryString.limit * 1 || 100;
    // skip is used to skip the starting datas if the page requested is not 1. Like if user needs 3rd page, then we need to skip the initial datas
    // on each page which could be found out by relating with the limit.
    const skip = (page - 1) * limit;

    this.apiData = this.apiData.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIfeatures;