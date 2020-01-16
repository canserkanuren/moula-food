export class Food {
  constructor(model = {}) {
    if (model) {
      this.name = model.product.product_name || model.product_name_fr;
      this.brands = model.product.brands;
      this.nutriscore = model.product.nutriscore_grade;
      this.imageUrl = model.product.image_url;
      this.novaGroup = model.product.nova_group;
      this.nutriments = [
        { name: 'proteins', value: model.product.nutriments.proteins || ''},
        { name: 'fiber', value: model.product.nutriments.fiber || '' },
        { name: 'sugars', value: model.product.nutriments.sugars || '' },
        { name: 'salt', value: model.product.nutriments.salt || '' },
        { name: 'calories', value: model.product.nutriments.energy || '' },
        { name: 'saturatedFat', value: model.product.nutriments.saturated_fat || '' }
      ]
    }
  }
}