export default class ProductCard {
  constructor(product) {
    this.product = product;
    this._elem = null; 
  }

  get elem() {
    if(!this._elem) {
      this._elem = this.CreateCard()
    }
    return this._elem;
  }


  CreateCard() {
    const card = document.createElement('div');

    const cardTop = document.createElement('div');
    cardTop.classList.add('card__top');

    const image = document.createElement('img');
    image.src = `/assets/images/products/${this.product.image}`
    image.alt = 'product';
    image.classList.add('card__image');

    const price = document.createElement('span');
    price.classList.add('card__price');
    price.textContent = `€${this.product.price.toFixed(2)}`;

    cardTop.appendChild(image);
    cardTop.appendChild(price);

    const cardBody = document.createElement('div');

    const title = document.createElement('div');
    title.classList.add('card__title');
    title.textContent = this.product.name;

    const addButton = document.createElement('button');
    addButton.type = 'button';
    addButton.classList.add('card__button');
    


    const buttonIcon = document.createElement('img');
    buttonIcon.src = `/assets/images/icons/plus-icon.svg`;
    buttonIcon.alt = 'icon'
    
      addButton.appendChild(buttonIcon);

      addButton.addEventListener('click', () =>{
        const event = new CustomEvent('product-add', {
          detail:this.product.id,
          bubbles: true
        });
        this.elem.dispatchEvent(event);
      });

      cardBody.appendChild(title);
      cardBody.appendChild(addButton);

      card.appendChild(cardTop);
      card.appendChild(cardBody);

      return card;
 }
}
