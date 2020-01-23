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
      if (model.nutriments.energy_value) {
        this.nutriments.push({
          name: 'calories',
          value: model.nutriments.energy_value || '',
          unit: 'Kcal'
        });
      }
      if (model.nutriments.fiber) {
        this.nutriments.push({
          name: 'fiber',
          value: model.nutriments.fiber,
          unit: 'g'
        });
      }
      if (model.nutriments.sugars) {
        this.nutriments.push(
          {
            name: 'sugars',
            value: model.nutriments.sugars || '',
            unit: 'g'
          }
        );
      }
      if (model.nutriments.proteins) {
        this.nutriments.push(
          {
            name: 'proteins',
            value: model.nutriments.proteins || '',
            unit: 'g'
          }
          );
      }
      if (model.nutriments.salt) {
        this.nutriments.push(
          {
            name: 'salt',
            value: model.nutriments.salt || '',
            unit: 'g'
          }

        )
      }
      if (model.nutriments['saturated-fat']) {
        this.nutriments.push(
          {
            name: 'saturatedFat',
            value: model.nutriments['saturated-fat'] || '',
            unit: 'g'
          }
        );
      }
    }
  }
}
