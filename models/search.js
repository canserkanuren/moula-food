export class Search {
  constructor(model = {}) {
    if (model) {
      this.barcode = model.code;
      this.name = model.product_name;
      this.brands = model.brands;
      this.nutriscore = model.nutriscore_grade;
      this.imageUrl = model.image_url;
      this.novaGroup = model.nova_group;
      this.nutritionPer = model.nutrition_data_per;
      this.nutriments = [];
    }
  }
}
