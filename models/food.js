export class Food {
  constructor(model = {}) {
    if (model) {
      this.name = model.product.product_name || model.product_name_fr;
      this.brands = model.product.brands;
      this.nutriscore_grade = model.product.nutriscore_grade;
      this.imageUrl = model.product.image_url;
      this.novaGroup = model.product.nova_group;
      this.proteins = model.product.nutriments.proteins_100g;
      this.fiber = model.product.nutriments.fiber_100g;
      this.sugars = model.product.nutriments.sugars_100g;
      this.salt = model.product.nutriments.salt_100g;
      this.calories = Math.round(model.product.nutriments['energy-kj_100g'] / 4.184);
      this.saturatedFat = model.product.nutriscore_data.saturated_fat;
    }
  }
}