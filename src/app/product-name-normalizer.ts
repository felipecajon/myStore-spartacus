import { Injectable } from '@angular/core';
import { Converter, Occ, Product } from '@spartacus/core';
import { ProductModel } from './custom-routing/product-model';
import { prettifyToUrl } from './tools';

@Injectable({
  providedIn: 'root'
})

export class ProductNameNormalizer implements Converter<Occ.Product, Product> {

  constructor() { }

  convert(source: Occ.Product, target: ProductModel): ProductModel {

    if (source.name) {
      target.nameForUrl = prettifyToUrl(source.name);
      target.nameForUrl = target.nameForUrl.substring(0, 10);
    }

    return target;
  }
}
