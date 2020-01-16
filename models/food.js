export class Food {
  constructor(model = {}) {
    if (model) {
      this.name = model.product.product_name || model.product_name_fr;
      this.brands = model.product.brands;
      this.nutriscore = model.product.nutriscore_grade;
      this.imageUrl = model.product.image_url;
      this.novaGroup = model.product.nova_group;
      this.nutriments = []
      if (model.product.nutriments.energy_value) {
        this.nutriments.push({
          name: 'calories',
          value: model.product.nutriments.energy_value || '',
          unit: 'Kcal'
        });
      }
      if (model.product.nutriments.fiber) {
        this.nutriments.push({
          name: 'fiber',
          value: model.product.nutriments.fiber,
          unit: 'g'
        });
      }
      if (model.product.nutriments.sugars) {
        this.nutriments.push(
          {
            name: 'sugars',
            value: model.product.nutriments.sugars || '',
            unit: 'g'
          }
        );
      }
      if (model.product.nutriments.proteins) {
        this.nutriments.push(
          {
            name: 'proteins',
            value: model.product.nutriments.proteins || '',
            unit: 'g'
          }
          );
      }
      if (model.product.nutriments.salt) {
        this.nutriments.push(
          {
            name: 'salt',
            value: model.product.nutriments.salt || '',
            unit: 'g'
          }

        )
      }
      if (model.product.nutriments['saturated-fat']) {
        this.nutriments.push(
          {
            name: 'saturatedFat',
            value: model.product.nutriments['saturated-fat'] || '',
            unit: 'g'
          }
        );
      }
    }
  }
}